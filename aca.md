---
# **Runbook: VNet-Enabled Azure Container Apps (ACA)**  
# **Purpose**: Securely deploy Azure Container Apps in a VNet with private ingress, Application Gateway (WAF), and compliance guardrails.  
---

## **1. Objective and Scope**  
### **1.1 Purpose**  
- Design and deploy Azure Container Apps (ACA) in an isolated VNet for compliance (e.g., HIPAA, GDPR).  
- Ensure secure communication via internal ingress, private endpoints, and WAF-protected traffic routing.  
- Automate infrastructure using Infrastructure as Code (IaC).  

### **1.2 Use Cases**  
- **Internal APIs**: Private microservices accessible only within the VNet.  
- **Hybrid Workloads**: Secure connectivity to on-premises systems via VPN/ExpressRoute.  
- **Public-Facing Apps**: External apps with WAF, DDoS protection, and IP restrictions.  

### **1.3 Audience**  
- **DevOps Teams**: Deploy and manage ACA environments.  
- **Security Engineers**: Enforce network policies and compliance.  
- **Cloud Architects**: Design scalable, secure architectures.  

### **1.4 Dependencies**  
- **Azure Subscription**: Contributor/Network Contributor permissions.  
- **Tools**: Azure CLI, Bicep, Azure Container Registry (ACR).  
- **Network**: Hybrid connectivity (VPN/ExpressRoute) if required.  

---

## **2. Target Architecture Design**  
### **2.1 Core Components**  
| **Component**               | **Purpose**                                                                 |  
|------------------------------|-----------------------------------------------------------------------------|  
| **VNet**                     | Isolated network for ACA, App Gateway, and backend services.               |  
| **ACA Environment**          | Managed environment for container apps (internal/external ingress).        |  
| **Application Gateway**      | Layer 7 load balancer with WAF for secure traffic routing.                 |  
| **Private DNS Zones**        | Resolve internal FQDNs (e.g., `privatelink.azurecontainerapps.io`).        |  
| **Private Endpoints**        | Securely connect to ACR, Key Vault, and Azure SQL.                         |  

### **2.2 Decision Matrix**  
#### **a. Ingress Type**  
| **Option**      | **Use Case**                          | **Security**                          | **Constraints**                     |  
|------------------|---------------------------------------|---------------------------------------|--------------------------------------|  
| **Internal**     | Private APIs, hybrid workloads.       | No public exposure.                   | Requires private DNS and VNet peering. |  
| **External**     | Public-facing apps.                   | Requires WAF and IP restrictions.     | Higher cost for WAF/DDoS.            |  

#### **b. Traffic Routing**  
| **Option**          | **Scope**      | **Best For**                     | **Cost**          |  
|----------------------|----------------|-----------------------------------|-------------------|  
| **App Gateway**      | Regional       | Low-latency, WAF integration.    | $$ (WAF_v2 tier)  |  
| **Front Door**       | Global         | Multi-region HA, DDoS protection. | $$$ (Premium tier) |  

#### **c. Subnet Design**  
| **Subnet**               | **CIDR**       | **Delegation**                     | **Purpose**                          |  
|--------------------------|----------------|------------------------------------|--------------------------------------|  
| `aca-subnet`             | `10.0.0.0/24`  | `Microsoft.App/environments`       | ACA Environment.                     |  
| `agw-subnet`             | `10.0.1.0/26`  | None                               | Application Gateway.                 |  
| `private-endpoints-subnet` | `10.0.2.0/24`  | `privateEndpointNetworkPolicies=Disabled` | Private Link services. |  

---

## **3. Pre-requisites**  
### **3.1 Azure Setup**  
1. **Resource Group**:  
   ```bash  
   az group create --name rg-aca-prod --location eastus  
   ```  
2. **Permissions**:  
   - `Network Contributor`, `Azure Container Apps Contributor`, `Key Vault Administrator`.  

### **3.2 Tools**  
1. **Azure CLI**:  
   ```bash  
   az extension add --name containerapp --upgrade  
   ```  
2. **Bicep**:  
   ```bash  
   az bicep install  
   ```  

---

## **4. Step-by-Step Deployment**  
### **4.1 Network Infrastructure**  
#### **a. Deploy VNet and Subnets (Bicep)**  
```bicep  
// network.bicep  
param location string = 'eastus'  

resource vnet 'Microsoft.Network/virtualNetworks@2023-05-01' = {  
  name: 'vnet-aca-prod'  
  location: location  
  properties: {  
    addressSpace: { addressPrefixes: [ '10.0.0.0/16' ] }  
    subnets: [  
      {  
        name: 'aca-subnet'  
        properties: {  
          addressPrefix: '10.0.0.0/24'  
          delegations: [ {  
            name: 'aca-delegation',  
            properties: { serviceName: 'Microsoft.App/environments' }  
          } ]  
        }  
      },  
      {  
        name: 'agw-subnet'  
        properties: { addressPrefix: '10.0.1.0/26' }  
      },  
      {  
        name: 'private-endpoints-subnet'  
        properties: {  
          addressPrefix: '10.0.2.0/24'  
          privateEndpointNetworkPolicies: 'Disabled'  
        }  
      }  
    ]  
  }  
}  
```  

**Deploy**:  
```bash  
az deployment group create --resource-group rg-aca-prod --template-file network.bicep  
```  

---

### **4.2 ACA Environment**  
#### **a. Create ACA Environment with Internal Ingress**  
```bicep  
// aca-environment.bicep  
resource acaEnvironment 'Microsoft.App/managedEnvironments@2023-05-01' = {  
  name: 'aca-env-prod'  
  location: location  
  identity: { type: 'SystemAssigned' }  
  properties: {  
    appLogsConfiguration: {  
      destination: 'log-analytics'  
      logAnalyticsConfiguration: {  
        customerId: logAnalyticsWorkspace.properties.customerId  
        sharedKey: logAnalyticsWorkspace.listKeys().primarySharedKey  
      }  
    }  
    vnetConfiguration: {  
      infrastructureSubnetId: vnet::aca-subnet.id  
      internal: true  
    }  
  }  
}  
```  

**Deploy**:  
```bash  
az deployment group create --resource-group rg-aca-prod --template-file aca-environment.bicep  
```  

#### **b. Link Private DNS Zone**  
```bash  
az network private-dns link vnet create \  
  --name aca-dns-link \  
  --resource-group rg-aca-prod \  
  --zone-name privatelink.azurecontainerapps.io \  
  --virtual-network vnet-aca-prod \  
  --registration-enabled false  
```  

---

### **4.3 Application Gateway with WAF**  
#### **a. Deploy WAF Policy**  
```bicep  
// waf-policy.bicep  
resource wafPolicy 'Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies@2023-05-01' = {  
  name: 'agw-waf-policy'  
  location: location  
  properties: {  
    policySettings: { mode: 'Prevention', state: 'Enabled' }  
    managedRules: {  
      managedRuleSets: [ { ruleSetType: 'OWASP', ruleSetVersion: '3.2' } ]  
    }  
  }  
}  
```  

#### **b. Deploy App Gateway**  
```bicep  
// app-gateway.bicep  
resource appGateway 'Microsoft.Network/applicationGateways@2023-05-01' = {  
  name: 'agw-aca-prod'  
  location: location  
  properties: {  
    sku: { name: 'WAF_v2', tier: 'WAF_v2', capacity: 2 }  
    gatewayIPConfigurations: [ {  
      name: 'agw-ip-config',  
      properties: { subnet: { id: vnet::agw-subnet.id } }  
    } ]  
    frontendIPConfigurations: [ {  
      name: 'fe-private',  
      properties: {  
        privateIPAddress: '10.0.1.10',  
        privateIPAllocationMethod: 'Static'  
      }  
    } ]  
    backendAddressPools: [ {  
      name: 'aca-backend-pool',  
      properties: { addresses: [ { fqdn: 'internal-api.internal.azurecontainerapps.io' } ] }  
    } ]  
    backendHttpSettingsCollection: [ {  
      name: 'aca-http-settings',  
      properties: { port: 80, protocol: 'Http', pickHostNameFromBackendAddress: true }  
    } ]  
    httpListeners: [ {  
      name: 'https-listener',  
      properties: {  
        protocol: 'Https',  
        hostName: 'api.contoso.com',  
        sslCertificate: { id: sslCert.id }  
      }  
    } ]  
    requestRoutingRules: [ {  
      name: 'aca-routing-rule',  
      properties: {  
        ruleType: 'Basic',  
        httpListener: { id: 'https-listener' },  
        backendAddressPool: { id: 'aca-backend-pool' },  
        backendHttpSettings: { id: 'aca-http-settings' }  
      }  
    } ]  
    firewallPolicy: { id: wafPolicy.id }  
  }  
}  
```  

**Deploy**:  
```bash  
az deployment group create --resource-group rg-aca-prod --template-file app-gateway.bicep  
```  

---

### **4.4 Deploy Container App**  
#### **a. Internal-Facing App (Bicep)**  
```bicep  
// container-app.bicep  
resource containerApp 'Microsoft.App/containerApps@2023-05-01' = {  
  name: 'internal-api'  
  location: location  
  properties: {  
    managedEnvironmentId: acaEnvironment.id  
    configuration: {  
      ingress: {  
        external: false,  
        targetPort: 8080  
      }  
    }  
    template: {  
      containers: [ {  
        name: 'api',  
        image: 'acrprod.azurecr.io/internal-api:v1'  
      } ]  
    }  
  }  
}  
```  

**Deploy**:  
```bash  
az deployment group create --resource-group rg-aca-prod --template-file container-app.bicep  
```  

---

## **5. Security & Compliance**  
### **5.1 Network Security Groups (NSGs)**  
| **Subnet**       | **Inbound Rules**                                  | **Outbound Rules**                     |  
|-------------------|---------------------------------------------------|----------------------------------------|  
| `aca-subnet`      | Allow `65000-65535` from `agw-subnet`.            | Allow `443` to ACR, Key Vault.         |  
| `agw-subnet`      | Allow `443` from trusted IP ranges.               | Allow `80/443` to `aca-subnet`.        |  

### **5.2 Azure Policies**  
- **Enforce Private Link**:  
  ```json  
  {  
    "if": {  
      "allOf": [  
        { "field": "type", "equals": "Microsoft.Storage/storageAccounts" },  
        { "field": "Microsoft.Storage/storageAccounts/publicNetworkAccess", "notEquals": "Disabled" }  
      ]  
    },  
    "then": { "effect": "deny" }  
  }  
  ```  

---

## **6. Validation & Testing**  
1. **Test Internal Connectivity**:  
   ```bash  
   curl -vk https://api.contoso.com --resolve "api.contoso.com:443:10.0.1.10"  
   ```  
2. **Validate WAF Rules**:  
   ```bash  
   curl -X POST https://api.contoso.com -d "<script>alert('xss')</script>"  
   ```  

---

## **7. Troubleshooting**  
| **Issue**                      | **Root Cause**                          | **Resolution**                                      |  
|--------------------------------|-----------------------------------------|-----------------------------------------------------|  
| **App Gateway 502 errors**     | Backend pool FQDN misconfigured.        | Validate FQDN in `aca-backend-pool`.                |  
| **DNS resolution failure**     | Private DNS zone not linked to VNet.    | Link `privatelink.azurecontainerapps.io` to VNet.   |  

---

## **8. Cost Optimization**  
- **ACA**: Use Consumption plan for non-production workloads.  
- **App Gateway**: Delete unused listeners/rules.  
- **ACR**: Clean up unused images.  

---

-----------------------------------------



Here’s a list of **prerequisites** for deploying Azure Container Apps (ACA) with VNet integration via **GitHub Actions** and **Azure DevOps**, including steps to set up authentication, secrets, and pipelines.

---

### **Prerequisites for GitHub Actions**  
#### **1. Azure Setup**  
- **Azure Service Principal**:  
  - Create a Service Principal (SP) with **Contributor** access to the target Azure subscription.  
  - Assign the SP the **Azure Container Apps Contributor** and **Network Contributor** roles.  
  ```bash  
  az ad sp create-for-rbac --name "github-actions-aca" --role Contributor --scopes /subscriptions/<SUBSCRIPTION_ID>  
  ```  
  - Note the `appId`, `password`, `tenant`, and `subscriptionId`.  

- **Azure Resources Pre-Deployed**:  
  - Resource Group (`rg-aca-prod`).  
  - Azure Container Registry (ACR) with Admin enabled or managed identity access.  

#### **2. Repository Setup**  
- **Code Structure**:  
  - Bicep/ARM templates in the repo (e.g., `infra/` directory).  
  - GitHub Actions workflow files in `.github/workflows/`.  
- **Secrets in GitHub**:  
  - Store Azure credentials as GitHub Secrets:  
    - `AZURE_CLIENT_ID` (Service Principal `appId`).  
    - `AZURE_CLIENT_SECRET` (Service Principal `password`).  
    - `AZURE_TENANT_ID` (Azure AD tenant ID).  
    - `AZURE_SUBSCRIPTION_ID` (Target subscription ID).  

#### **3. GitHub Actions Workflow**  
- **Required Actions**:  
  - `azure/login@v1`: Authenticate to Azure.  
  - `azure/cli@v1`: Run Azure CLI commands.  
  - `azure/bicep@v1` (optional): Lint/validate Bicep files.  

---

### **Prerequisites for Azure DevOps**  
#### **1. Azure Setup**  
- **Service Connection**:  
  - Create an Azure Resource Manager service connection in Azure DevOps using the Service Principal created above.  
  - Ensure the SP has **Contributor** access to the subscription.  

- **Azure Resources Pre-Deployed**:  
  - Same as GitHub Actions (Resource Group, ACR, Key Vault).  

#### **2. Pipeline Setup**  
- **Repository**:  
  - Bicep/ARM templates in the repo (e.g., `infra/` directory).  
  - Pipeline YAML file (e.g., `azure-pipelines.yml`).  
- **Variables in Azure DevOps**:  
  - Store sensitive values in Pipeline Variables (e.g., `ACR_PASSWORD`) or Azure Key Vault.  

#### **3. Required Tasks**  
- **AzureCLI@2**: Run Azure CLI commands.  
- **BicepBuild@1** (optional): Compile Bicep to ARM.  
- **AzurePowerShell@5** (optional): Run PowerShell scripts.  

---

### **Common Prerequisites (Both Platforms)**  
1. **Infrastructure as Code (IaC)**:  
   - Bicep/ARM templates for deploying:  
     - VNet, subnets, and NSGs.  
     - ACA Environment, Container Apps.  
     - App Gateway, Private Endpoints.  

2. **Container Images**:  
   - Dockerized application code pushed to ACR.  
   - ACR credentials or managed identity access for ACA.  

3. **Permissions**:  
   - The Service Principal must have:  
     - **ACR Pull Access** (to pull container images).  
     - **Key Vault Secrets User** (if using Key Vault).  

4. **Secrets Management**:  
   - Store secrets (e.g., database passwords) in Azure Key Vault.  
   - Grant the Service Principal access to Key Vault secrets.  

---

### **Steps to Set Up Service Principal Roles**  
1. Assign **Contributor** role at the subscription/resource group level:  
   ```bash  
   az role assignment create \  
     --assignee <SERVICE_PRINCIPAL_APP_ID> \  
     --role Contributor \  
     --scope /subscriptions/<SUBSCRIPTION_ID>/resourceGroups/rg-aca-prod  
   ```  

2. Assign **ACR Pull** role:  
   ```bash  
   az role assignment create \  
     --assignee <SERVICE_PRINCIPAL_APP_ID> \  
     --role AcrPull \  
     --scope /subscriptions/<SUBSCRIPTION_ID>/resourceGroups/rg-aca-prod/providers/Microsoft.ContainerRegistry/registries/<ACR_NAME>  
   ```  

3. Assign **Key Vault Secrets User** role:  
   ```bash  
   az role assignment create \  
     --assignee <SERVICE_PRINCIPAL_APP_ID> \  
     --role "Key Vault Secrets User" \  
     --scope /subscriptions/<SUBSCRIPTION_ID>/resourceGroups/rg-aca-prod/providers/Microsoft.KeyVault/vaults/<KEY_VAULT_NAME>  
   ```  

---

### **Sample GitHub Actions Workflow**  
```yaml  
name: Deploy ACA with VNet  
on:  
  push:  
    branches:  
      - main  
jobs:  
  deploy:  
    runs-on: ubuntu-latest  
    steps:  
      - name: Checkout code  
        uses: actions/checkout@v4  

      - name: Login to Azure  
        uses: azure/login@v1  
        with:  
          client-id: ${{ secrets.AZURE_CLIENT_ID }}  
          client-secret: ${{ secrets.AZURE_CLIENT_SECRET }}  
          tenant-id: ${{ secrets.AZURE_TENANT_ID }}  
          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}  

      - name: Deploy Infrastructure  
        uses: azure/cli@v1  
        with:  
          inlineScript: |  
            az deployment group create \  
              --resource-group rg-aca-prod \  
              --template-file infra/main.bicep  
```  

---

### **Sample Azure DevOps Pipeline**  
```yaml  
trigger:  
  - main  

pool:  
  vmImage: ubuntu-latest  

steps:  
- task: AzureCLI@2  
  inputs:  
    azureSubscription: 'azure-connection'  # Name of the Azure service connection  
    scriptType: 'bash'  
    scriptLocation: 'inlineScript'  
    inlineScript: |  
      az deployment group create \  
        --resource-group rg-aca-prod \  
        --template-file infra/main.bicep  
```  

---

### **Final Checks**  
- Validate workflows/pipelines have access to all Azure resources.  
- Test deployments in a non-production environment first.  
- Use branch protection rules (GitHub) or pipeline approvals (Azure DevOps) for production.  

-------------------------------------------------------------------------------------

Here's the complete **`main.bicep`** file to deploy the VNet-enabled Azure Container Apps (ACA) environment, Application Gateway, and dependencies. This includes all resources discussed earlier:

---

### **`main.bicep`**  
```bicep
// Parameters
param location string = 'eastus'
param environmentName string = 'aca-env-prod'
param vnetName string = 'vnet-aca-prod'
param acaSubnetCidr string = '10.0.0.0/24'
param agwSubnetCidr string = '10.0.1.0/26'
param privateEndpointSubnetCidr string = '10.0.2.0/24'
param acrName string = 'acrprod'
param keyVaultName string = 'kv-aca-prod'
param appGatewayPrivateIp string = '10.0.1.10'
param containerAppName string = 'internal-api'
param containerImage string = '${acrName}.azurecr.io/internal-api:v1'

// Resources
resource vnet 'Microsoft.Network/virtualNetworks@2023-05-01' = {
  name: vnetName
  location: location
  properties: {
    addressSpace: { addressPrefixes: [ '10.0.0.0/16' ] }
    subnets: [
      // ACA Subnet
      {
        name: 'aca-subnet'
        properties: {
          addressPrefix: acaSubnetCidr
          delegations: [{
            name: 'aca-delegation'
            properties: { serviceName: 'Microsoft.App/environments' }
          }]
        }
      },
      // App Gateway Subnet
      {
        name: 'agw-subnet'
        properties: { addressPrefix: agwSubnetCidr }
      },
      // Private Endpoints Subnet
      {
        name: 'private-endpoints-subnet'
        properties: {
          addressPrefix: privateEndpointSubnetCidr
          privateEndpointNetworkPolicies: 'Disabled'
        }
      }
    ]
  }
}

resource logAnalyticsWorkspace 'Microsoft.OperationalInsights/workspaces@2022-10-01' = {
  name: 'logs-aca-${uniqueString(resourceGroup().id)}'
  location: location
  properties: {
    sku: { name: 'PerGB2018' }
    retentionInDays: 30
  }
}

resource acaEnvironment 'Microsoft.App/managedEnvironments@2023-05-01' = {
  name: environmentName
  location: location
  identity: { type: 'SystemAssigned' }
  properties: {
    appLogsConfiguration: {
      destination: 'log-analytics'
      logAnalyticsConfiguration: {
        customerId: logAnalyticsWorkspace.properties.customerId
        sharedKey: logAnalyticsWorkspace.listKeys().primarySharedKey
      }
    }
    vnetConfiguration: {
      infrastructureSubnetId: vnet::aca-subnet.id
      internal: true
    }
  }
}

resource acr 'Microsoft.ContainerRegistry/registries@2023-06-01-preview' = {
  name: acrName
  location: location
  sku: { name: 'Premium' }
  properties: {
    adminUserEnabled: false
    networkRuleSet: {
      defaultAction: 'Deny'
      ipRules: []
    }
  }
}

resource acrPrivateEndpoint 'Microsoft.Network/privateEndpoints@2023-05-01' = {
  name: 'pe-${acrName}'
  location: location
  properties: {
    subnet: { id: vnet::private-endpoints-subnet.id }
    privateLinkServiceConnections: [{
      name: 'acr-pls-connection'
      properties: {
        privateLinkServiceId: acr.id
        groupIds: [ 'registry' ]
      }
    }]
  }
}

resource keyVault 'Microsoft.KeyVault/vaults@2023-02-01' = {
  name: keyVaultName
  location: location
  properties: {
    sku: { name: 'standard', family: 'A' }
    tenantId: subscription().tenantId
    enableRbacAuthorization: true
    networkAcls: {
      defaultAction: 'Deny'
      bypass: 'AzureServices'
    }
  }
}

resource wafPolicy 'Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies@2023-05-01' = {
  name: 'agw-waf-policy'
  location: location
  properties: {
    policySettings: {
      mode: 'Prevention'
      state: 'Enabled'
    }
    managedRules: {
      managedRuleSets: [{
        ruleSetType: 'OWASP'
        ruleSetVersion: '3.2'
      }]
    }
  }
}

resource appGateway 'Microsoft.Network/applicationGateways@2023-05-01' = {
  name: 'agw-aca-prod'
  location: location
  properties: {
    sku: { name: 'WAF_v2', tier: 'WAF_v2', capacity: 2 }
    gatewayIPConfigurations: [{
      name: 'agw-ip-config'
      properties: { subnet: { id: vnet::agw-subnet.id } }
    }]
    frontendIPConfigurations: [{
      name: 'fe-private'
      properties: {
        privateIPAddress: appGatewayPrivateIp
        privateIPAllocationMethod: 'Static'
      }
    }]
    backendAddressPools: [{
      name: 'aca-backend-pool'
      properties: { addresses: [ { fqdn: '${containerAppName}.internal.azurecontainerapps.io' } ] }
    }]
    backendHttpSettingsCollection: [{
      name: 'aca-http-settings'
      properties: { port: 80, protocol: 'Http', pickHostNameFromBackendAddress: true }
    }]
    httpListeners: [{
      name: 'https-listener'
      properties: {
        protocol: 'Https'
        hostName: 'api.contoso.com' // Replace with your domain
        sslCertificate: {
          id: keyVault.getSecret('ssl-certificate') // Reference Key Vault secret
        }
      }
    }]
    requestRoutingRules: [{
      name: 'aca-routing-rule'
      properties: {
        ruleType: 'Basic'
        httpListener: { id: 'https-listener' }
        backendAddressPool: { id: 'aca-backend-pool' }
        backendHttpSettings: { id: 'aca-http-settings' }
      }
    }]
    firewallPolicy: { id: wafPolicy.id }
  }
}

resource containerApp 'Microsoft.App/containerApps@2023-05-01' = {
  name: containerAppName
  location: location
  properties: {
    managedEnvironmentId: acaEnvironment.id
    configuration: {
      ingress: {
        external: false
        targetPort: 8080
      }
      secrets: [{
        name: 'db-password'
        keyVaultUrl: '${keyVault.properties.vaultUri}secrets/db-password'
        identity: acaEnvironment.identity.principalId
      }]
    }
    template: {
      containers: [{
        name: 'api'
        image: containerImage
        env: [{
          name: 'DB_PASSWORD'
          secretRef: 'db-password'
        }]
      }]
    }
  }
}

// Role Assignments
resource acrRoleAssignment 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(acaEnvironment.id, 'AcrPull')
  properties: {
    principalId: acaEnvironment.identity.principalId
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '7f951dda-4ed3-4680-a7ca-43fe172d538d') // AcrPull
    principalType: 'ServicePrincipal'
    scope: acr.id
  }
}

resource keyVaultRoleAssignment 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(acaEnvironment.id, 'KeyVaultSecretsUser')
  properties: {
    principalId: acaEnvironment.identity.principalId
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '4633458b-17de-408a-b874-0445c86b69e6') // Key Vault Secrets User
    principalType: 'ServicePrincipal'
    scope: keyVault.id
  }
}
```

---

### **How to Deploy**  
1. **Save the Bicep File**: Save as `main.bicep` in your repo’s `infra/` directory.  
2. **Deploy via Azure CLI**:  
   ```bash
   az deployment group create \
     --resource-group rg-aca-prod \
     --template-file infra/main.bicep \
     --parameters \
       acrName=<ACR_NAME> \
       keyVaultName=<KEY_VAULT_NAME> \
       containerImage=<ACR_IMAGE_URI>
   ```

---

### **Key Notes**  
1. **SSL Certificate**:  
   - Upload your SSL certificate to Key Vault as a secret named `ssl-certificate`.  
   - Grant the App Gateway managed identity access to Key Vault.  

2. **Custom Domain**:  
   - Replace `api.contoso.com` with your domain in the `httpListeners` section.  

3. **Private DNS**:  
   - The Bicep file assumes you’ve linked the VNet to `privatelink.azurecontainerapps.io` (as shown in earlier steps).  

4. **Role Assignments**:  
   - Automatically grants ACA environment’s managed identity `AcrPull` and `Key Vault Secrets User` roles.  

Let me know if you need help with parameter adjustments or troubleshooting! 😊
