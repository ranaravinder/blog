

# Ravinder Singh Rana

<!-- ![Avatar](rravatar.JPG)   -->

<!-- <img src="rravatar.jpg" alt="Avatar" width="804" height="340"> -->

<img src="https://media.licdn.com/dms/image/C4D03AQEh-FaAT-_fAw/profile-displayphoto-shrink_400_400/0/1621185927634?e=1727913600&v=beta&t=olGe9Imyt35a4XPGMGucgTUqDWXhrsO_03Ez2L1t30M" alt="Avatar" width="100" height="100">

<!-- 
**Azure Cloud Architect | 5x Azure Certified | Full Stack Developer | Agile Practitioner**

**New Delhi, India**  
**+91-9911330448**  
**talk2rana@gmail.com**  
 -->

**[LinkedIn](https://www.linkedin.com/in/ravinder-singh-rana)**


## Summary

Dynamic and results-driven Azure Cloud Architect with over 16 years of progressive experience in IT and business solutions. Expertise in leading cloud migration projects, designing and implementing scalable, secure solutions using Azure technologies, and driving full stack development. Proficient in Agile and SAFe Agile methodologies, with a proven track record of delivering high-performance, innovative technology solutions across diverse industries.

---

## Professional Experience

### **LTI Mindtree**
**Associate Principal - Cloud Engineering | Jul 2021 - Present**

- Spearheaded the architecture and implementation of scalable, secure cloud-based solutions on Azure.
- Led major cloud migration projects, transitioning clients to Azure App Services and Azure Kubernetes Service (AKS).
- Utilized **Azure DevOps** and **GitHub Actions** to streamline CI/CD pipelines, enhancing deployment efficiency and reducing time-to-market.
- Deployed and managed **Azure Red Hat OpenShift** clusters for containerized application environments, improving scalability and performance.
- Employed **Azure AppCat Assessment Tool** to evaluate and recommend optimizations for app performance and cost-efficiency.
- Optimized cloud infrastructure to enhance performance and cost-efficiency.
- Ensured robust security and compliance of cloud solutions through rigorous protocols and audits.
- Devised migration strategies for transitioning from brownfield to greenfield environments.
- Developed automation scripts for resource migration, optimization, and security compliance.
- Facilitated architecture design sessions and guided cross-functional teams in solution implementation.

### **Emirates Group**
**IT Consultant | Apr 2019 - Jul 2021**

- Developed and maintained complex web applications and APIs using C#, ASP.NET, JavaScript, ReactJS, and NodeJS.
- Delivered secure, accessible web solutions compliant with ARIA roles and WCAG standards.
- Managed web traffic, deployment strategies, and provided robust production support.
- Ensured compliance with GDPR and PSD2 for various web applications.
- Conducted comprehensive unit and integration testing, debugging, and performance optimization.

### **Amadeus India Pvt. Ltd.**
**Technical Project Lead | Feb 2011 - Apr 2019**

- Directed projects involving large-scale web applications and services.
- Collaborated with cross-functional teams to design and implement software solutions.
- Streamlined project workflows, enhancing efficiency and delivery timelines.

### **Symphony Infotech**
**Software Developer | May 2007 - Feb 2011**

- Engineered software solutions for Real Estate Management Systems, HRMS, and TV Channel story management systems (similar to Octopus).
- Contributed to the full software development lifecycle, from requirements gathering to deployment.

### **BlueHill Solutions Ltd.**
**System Developer | Oct 2001 - Feb 2007**

- Developed various software, voice, and data communication products and solutions for Indian Railways, such as Integrated Digital Train Platform Announcement and Display System, Digital Voice Logger (Black Box), and IVRS.
- Participated in all phases of the system development lifecycle, ensuring robust and scalable solutions.

---

## Skills

### **Cloud Technologies**
- **Azure PaaS Offerings:**
  - **App Services:** Web Apps, Mobile Apps, API Apps
  - **Azure Functions**
  - **Azure SQL Database**
  - **Azure Cosmos DB**
  - **Azure Storage:** Blob Storage, Table Storage, Queue Storage
  - **Azure Kubernetes Service (AKS)**
  - **Azure App Configuration**
  - **Azure Cache for Redis**  
  - **Azure Service Bus**
  - **Azure Event Grid**
  - **Azure Logic Apps**
  - **Azure API Management**
  - **Azure Data Factory**
  - **Azure Data Lake Storage**
  - **Azure Databricks**
  - **Azure Synapse Analytics (formerly SQL Data Warehouse)**
  - **Azure Application Insights**
  - **Azure Monitor**
  - **Azure Automation**
  - **Azure Key Vault**
- **Azure DevOps**
- **GitHub Actions**
- **Azure Red Hat OpenShift**
- **Azure AppCat Assessment Tool**


### **Programming Languages**
- C#, ASP.NET, .NET Core, JavaScript, ReactJS, NextJS, NodeJS, Python, KQL, SQL, VB6, VB.NET, Angular

### **Databases**
- SQL, Azure Cosmos DB, MongoDB 

### **Tools & Technologies**
- JIRA, Confluence, SAFe Agile, Splunk, Postman, Git/Bitbucket, Mantis, Tridion, NVDA, JAWS.

---

## Certifications

- Microsoft Azure Certified Solution Architect
- Microsoft Azure Certified DevOps Engineer Expert
- Microsoft Azure Certified Developer Associate
- Microsoft Azure Certified Administrator Associate
- AWS Cloud Practitioner
- Certified Kubernetes Application Developer (CKAD) – KodeKloud
- Fundamentals for Istio by Solo.io
- Secure Delivery for Data – Security Innovation
- Agile Fundamentals, Design Thinking Fundamentals, Servant Leadership, Web Applications Security – Emirates

---

## Awards & Recognitions

- 5G Modern Connected Apps Challenge – Microsoft
- Amadeus GDS Certificate of Distinctions

---

## Professional Attributes

- Acute attention to detail with a solution-based mindset.
- Proven leadership in managing development teams and project delivery.
- Expertise in creating and implementing solution architectures using Microsoft Azure PaaS Services.
- Strong analytical skills with the ability to design secure, scalable cloud solutions.

---

## Projects & Contributions

- **CI/CD Pipelines:** Implemented Azure DevOps and GitHub Actions for automated build, test, and deployment pipelines, significantly reducing manual intervention and deployment time.
- **Containerization:** Deployed and managed applications on Azure Red Hat OpenShift, enhancing the scalability and reliability of containerized environments.
- **Performance Optimization:** Utilized Azure AppCat Assessment Tool to perform in-depth assessments and implement optimizations for applications, leading to improved performance and reduced costs.

---

## Contact
[ACA](https://github.com/ranaravinder/blog/edit/main/aca.md)

For more information or to connect, please reach out via email at talk2rana@gmail.com or through [LinkedIn](https://www.linkedin.com/in/ravinder-singh-rana).











---------------------------------------------------

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

----------------------------------

----------------------------------
### **Requirement Statement**  

The objective of this runbook is to provide **cloud architects, engineers, and developers** with a **comprehensive guide** on designing, deploying, and managing **VNet-integrated Azure Container Apps (ACA)**. This document will serve as a **reference architecture and implementation guide** covering the following key aspects:  

- **Application Landing Zone Design:** Best practices for structuring application environments, including resource organization, governance, and security policies.  
- **Networking Architecture & Traffic Flow:** Guidance on designing **VNet-injected spoke networks**, defining **ingress and egress traffic flows**, and implementing **subnet, NSG, route table, and private endpoint configurations**.  
- **Environment & Resource Provisioning:** Decision-making framework for selecting **Azure networking components**, **subnet design**, **service discovery**, and **auto-scaling strategies** for ACA deployments.  
- **Secure Access & Identity Management:** Definition of **Service Principals (SP)** and **User Managed Identities (UMAI)** with appropriate **Role-Based Access Control (RBAC)** configurations to ensure **least privilege access**.  
- **CI/CD Pipeline Setup:** Step-by-step instructions for configuring **GitHub Actions and Azure DevOps Pipelines** to automate infrastructure provisioning and application deployment, incorporating security best practices such as **OIDC authentication** and **secrets management with Azure Key Vault**.  
- **Observability & Troubleshooting:** Implementation of **Azure Monitor, Log Analytics, and Application Insights** for **real-time monitoring, logging, and distributed tracing** within VNet-integrated ACA environments.  
- **Best Practices & Security Considerations:** Recommendations for securing traffic flows, enforcing governance policies, and ensuring **high availability and disaster recovery** in ACA deployments.  

The runbook will also include **reference architectures, Terraform/Bicep deployment scripts, and sample CI/CD configurations** to facilitate a streamlined and secure implementation of **VNet-integrated Azure Container Apps**.


---------------------------------------

### **📌 Structuring the Runbook for VNet-Integrated Azure Container Apps**  

Your runbook should be **structured logically** to guide **cloud architects, engineers, and developers** in designing, deploying, and managing **VNet-integrated Azure Container Apps** efficiently. Here’s an ideal structure:  

---

## **📘 Runbook: VNet-Integrated Azure Container Apps (ACA) Design & Deployment**  

### **📌 1. Introduction & Overview**  
- Purpose of the runbook  
- Target audience (**Cloud Architects, Engineers, Developers**)  
- High-level architecture diagram  

---

### **📌 2. Application Landing Zone & Network Architecture**  
- **Landing Zone Components:**  
  - Resource Groups, Subscriptions, Naming Conventions  
  - Policies, Tagging, Cost Management  

- **Network Design & Traffic Flow:**  
  - Hub-Spoke VNet Model Overview  
  - **Ingress/Egress Flow** for VNet-injected **Azure Container Apps (ACA)**  
  - Subnets & NSG Considerations  
  - **Private Endpoints & Firewall Rules**  

---

### **📌 3. Environment & Resource Provisioning**  
- **Choosing the Right ACA Deployment Model:**  
  - VNet-Integrated vs Public ACA  
  - **Workload Placement Decision Matrix**  
  - Security & Compliance Considerations  

- **Networking Components:**  
  - Subnet Requirements for ACA Integration  
  - Private DNS & Private Endpoints  
  - Route Tables & UDRs  

- **Other Considerations:**  
  - **Dapr for Microservices**  
  - Service Discovery & Auto-scaling  

---

### **📌 4. Secure Access & Identity Management**  
- **SP (Service Principals) & UMAI (User Managed Identity) Requirements**  
  - SP/UMAI for ACA Deployment  
  - RBAC Permissions for Networking & ACA  
  - Least Privilege Access Model  

- **RBAC Roles for ACA & DevOps:**  
  - Azure AD Roles for Devs, Ops, & Security  
  - Network & Key Vault Access Control  

---

### **📌 5. CI/CD with GitHub Actions & Azure DevOps**  
- **GitHub Actions / Azure DevOps Pipelines for ACA**  
  - Terraform/Bicep for Infra Deployment  
  - App Deployment Workflow  
  - Security Policies (e.g., OIDC for GitHub Actions)  

- **Secrets Management:**  
  - Azure Key Vault Integration  
  - Securely Passing Environment Variables  

---

### **📌 6. Observability & Troubleshooting**  
- **Logging & Monitoring**  
  - App Insights, Log Analytics, Container Insights  
  - Distributed Tracing with Dapr  
- **Common Issues & Fixes**  
  - Network Connectivity Debugging  
  - VNet/Subnet Misconfigurations  

---

### **📌 7. Best Practices & Security Considerations**  
- Secure Traffic Flows (Private Link, Egress Control)  
- Compliance & Governance Policies  
- High Availability & Disaster Recovery  

---

### **📌 8. Reference Architecture & Code Samples**  
- Terraform / Bicep Deployment Scripts  
- Sample CI/CD Pipeline Configurations  
- Network Flow Diagrams  

---

Would you like me to **convert this into a full detailed runbook**? 🚀

------------------------------------------------------------------------

Below is a comprehensive guide for your runbook titled **"Runbook: VNet-Integrated Azure Container Apps (ACA) Design & Deployment"**. This elaborates on the broad-level headers you provided, aligning with Azure best practices as of March 17, 2025. Each section is detailed to serve cloud architects, engineers, and developers with actionable insights, reference architectures, and implementation guidance.

---

# Runbook: VNet-Integrated Azure Container Apps (ACA) Design & Deployment

## 📌 1. Introduction & Overview

### Purpose of the Runbook
This runbook is designed to empower teams with a structured, end-to-end guide for designing, deploying, and managing **VNet-integrated Azure Container Apps (ACA)**. It addresses critical aspects such as secure networking, identity management, automated deployments, and observability, ensuring scalable, secure, and compliant ACA implementations. The document bridges theoretical best practices with practical steps, offering reference architectures and code samples to streamline adoption.

### Target Audience
- **Cloud Architects**: Responsible for designing scalable, secure ACA architectures within a broader Azure landing zone.
- **Cloud Engineers**: Tasked with implementing and managing ACA deployments, networking, and CI/CD pipelines.
- **Developers**: Focused on building and deploying containerized applications to ACA with minimal friction.

### High-Level Architecture Diagram
Imagine a hub-and-spoke topology:
- **Hub VNet**: Hosts shared services like Azure Firewall, Azure Application Gateway, and Private DNS Zones.
- **Spoke VNet**: Contains ACA with a dedicated subnet, peered to the hub, and secured with private endpoints to services like Azure Key Vault and Azure Container Registry (ACR).
- **Traffic Flow**: Ingress via Application Gateway, egress via Azure Firewall, and internal communication via private endpoints.

*(Note: For an actual diagram, I’d suggest using a tool like Lucidchart or Visio to depict this topology with labeled components.)*

---

## 📌 2. Application Landing Zone & Network Architecture

### Landing Zone Components
- **Resource Groups & Subscriptions**: 
  - Organize resources by environment (e.g., `rg-aca-dev`, `rg-aca-prod`) within dedicated subscriptions for workload isolation.
  - Example: Separate subscriptions for dev/test and production to enforce governance boundaries.
- **Naming Conventions**: 
  - Use a consistent scheme, e.g., `<resource-type>-<workload>-<env>-<region>` (like `vnet-aca-prod-eastus`).
  - Document conventions in a central wiki or Azure Policy for enforcement.
- **Policies & Governance**: 
  - Deploy Azure Policies to mandate VNet integration, enforce encryption, and restrict public IPs.
  - Example Policy: Deny ACA creation without VNet configuration.
- **Tagging & Cost Management**: 
  - Apply tags like `Environment=Prod`, `Owner=TeamX`, and `CostCenter=CC123` for tracking and billing.
  - Use Azure Cost Management to monitor ACA-related expenses.

### Network Design & Traffic Flow
- **Hub-Spoke VNet Model**: 
  - **Hub**: Centralizes security (Azure Firewall), ingress (Application Gateway), and shared services.
  - **Spoke**: Hosts ACA workloads, peered to the hub, ensuring isolation and scalability.
  - Peering ensures low-latency connectivity while maintaining centralized control.
- **Ingress & Egress Traffic Flow**: 
  - **Ingress**: Route external traffic through Application Gateway with WAF, terminating at ACA’s internal ingress endpoint.
  - **Egress**: Filter outbound traffic via Azure Firewall or NAT Gateway for inspection and static IPs.
- **Subnets & NSG Considerations**: 
  - Dedicate a subnet (e.g., `/24`) for ACA to support dynamic IP allocation during scaling.
  - Apply NSGs to allow only required ports (e.g., 443 for HTTPS) and deny unnecessary intra-subnet traffic.
- **Private Endpoints & Firewall Rules**: 
  - Securely connect ACA to Azure PaaS services (e.g., Key Vault, ACR) using private endpoints in the spoke VNet.
  - Configure firewall rules to allow ACA-to-service traffic while blocking public access.

---

## 📌 3. Environment & Resource Provisioning

### Choosing the Right ACA Deployment Model
- **VNet-Integrated vs. Public ACA**: 
  - **VNet-Integrated**: Ideal for internal apps requiring isolation and compliance (e.g., enterprise backends).
  - **Public ACA**: Suited for public-facing apps with simpler networking needs (e.g., marketing sites).
- **Workload Placement Decision Matrix**: 
  - Criteria: Security (internal vs. external), compliance (HIPAA, GDPR), latency, and cost.
  - Example: Use VNet-integrated ACA for a regulated app needing private connectivity to a database.
- **Security & Compliance**: 
  - Enforce private networking and audit configurations with Azure Security Center.

### Networking Components
- **Subnet Requirements for ACA Integration**: 
  - Minimum size: `/24` (256 IPs) to handle ACA’s dynamic scaling and Kubernetes underpinnings.
  - Delegate the subnet to `Microsoft.App/environments` for ACA compatibility.
- **Private DNS & Private Endpoints**: 
  - Use Private DNS Zones (e.g., `privatelink.azurecr.io`) for name resolution of private endpoints.
  - Link DNS zones to the VNet for seamless service discovery.
- **Route Tables & UDRs**: 
  - Define UDRs to route ACA egress traffic through the hub’s Azure Firewall.
  - Example: Route `0.0.0.0/0` to the firewall’s private IP.

### Other Considerations
- **Dapr for Microservices**: 
  - Enable Dapr in ACA for service invocation, pub/sub messaging, and state management.
  - Example: Use Dapr to simplify communication between ACA microservices.
- **Service Discovery & Auto-Scaling**: 
  - Leverage ACA’s built-in DNS for service discovery within the VNet.
  - Configure auto-scaling with KEDA triggers (e.g., HTTP requests, queue length) and set replica limits (e.g., 1-10).

---

## 📌 4. Secure Access & Identity Management

### SP (Service Principals) & UMAI (User Managed Identity) Requirements
- **SP/UMAI for ACA Deployment**: 
  - Create an SP for CI/CD pipelines with scoped permissions (e.g., `Contributor` on ACA resource group).
  - Assign UMAI to ACA instances for runtime access to Azure resources.
- **RBAC Permissions for Networking & ACA**: 
  - Grant ACA’s UMAI `Network Contributor` for subnet management and `Key Vault Secrets User` for secret retrieval.
- **Least Privilege Access Model**: 
  - Limit permissions to specific scopes (e.g., resource group vs. subscription) and audit regularly.

### RBAC Roles for ACA & DevOps
- **Azure AD Roles for Devs, Ops, & Security**: 
  - **Developers**: `Contributor` on ACA and ACR for deployment.
  - **Ops**: `Reader` on networking, `Contributor` on ACA for management.
  - **Security**: `Security Admin` for policy enforcement and auditing.
- **Network & Key Vault Access Control**: 
  - Restrict Key Vault access to ACA’s UMAI via RBAC and network rules (e.g., VNet service endpoint).

---

## 📌 5. CI/CD with GitHub Actions & Azure DevOps

### GitHub Actions / Azure DevOps Pipelines for ACA
- **Infrastructure Deployment**: 
  - Use Terraform or Bicep to provision VNet, ACA, and dependencies.
  - Example Terraform: Define `azurerm_container_app_environment` with VNet integration.
- **Application Deployment Workflow**: 
  - Build/push container images to ACR, then deploy to ACA with revision management.
- **Security Policies**: 
  - Use OIDC for GitHub Actions to authenticate with Azure securely, avoiding static credentials.

### Secrets Management
- **Azure Key Vault Integration**: 
  - Store ACR credentials, API keys, and certificates in Key Vault.
  - Access secrets via ACA’s UMAI or pipeline service connections.
- **Securely Passing Environment Variables**: 
  - Inject secrets as ACA environment variables using `az containerapp update` or pipeline variables.

---

## 📌 6. Observability & Troubleshooting

### Logging & Monitoring
- **Azure Monitor, Log Analytics, and App Insights**: 
  - Enable ACA metrics (CPU, memory, requests) and logs in Log Analytics.
  - Use Application Insights for app-level telemetry (e.g., response times).
- **Distributed Tracing with Dapr**: 
  - Configure Dapr to emit traces to Application Insights for microservice debugging.

### Common Issues & Fixes
- **Network Connectivity Debugging**: 
  - Use `az network watcher` to test connectivity between ACA and private endpoints.
- **VNet/Subnet Misconfigurations**: 
  - Verify subnet delegation and NSG rules; check IP exhaustion with `az network vnet subnet show`.

---

## 📌 7. Best Practices & Security Considerations

- **Secure Traffic Flows**: 
  - Use Private Link for PaaS services and Azure Firewall for egress control.
- **Compliance & Governance Policies**: 
  - Enforce policies for encryption, VNet integration, and audit logging.
- **High Availability & Disaster Recovery**: 
  - Deploy ACA across multiple AZs and replicate configs to a secondary region with Azure Site Recovery.

---

## 📌 8. Reference Architecture & Code Samples

### Terraform / Bicep Deployment Scripts
- **Terraform**:
  ```hcl
  resource "azurerm_container_app_environment" "aca_env" {
    name                = "aca-vnet-env"
    resource_group_name = "rg-aca-prod"
    location            = "East US"
    vnet_configuration {
      subnet_id = azurerm_subnet.aca_subnet.id
    }
  }
  ```
- **Bicep**:
  ```bicep
  resource acaEnv 'Microsoft.App/managedEnvironments@2023-05-01' = {
    name: 'aca-vnet-env'
    location: 'East US'
    properties: {
      vnetConfiguration: {
        subnetResourceId: acaSubnet.id
      }
    }
  }
  ```

### Sample CI/CD Pipeline Configurations
- **GitHub Actions YAML**:
  ```yaml
  name: Deploy ACA
  on: [push]
  jobs:
    deploy:
      runs-on: ubuntu-latest
      steps:
        - uses: azure/login@v1
          with:
            creds: ${{ secrets.AZURE_CREDENTIALS }}
        - run: az containerapp up --name myapp --resource-group rg-aca-prod
  ```

### Network Flow Diagrams
- *(Describe a diagram showing ACA in a spoke VNet, peered to a hub with Firewall and Application Gateway, and private endpoints to ACR/Key Vault.)*

---

This guide provides a detailed, actionable framework for VNet-integrated ACA deployments. Let me know if you’d like further elaboration on any section or additional code samples!



-------------------------------
Below, I’ll expand the **Reference Architecture & Code Samples** section of the runbook by providing additional Terraform and Bicep scripts to cover the key steps outlined in the guide—such as networking setup, ACA provisioning, identity management, CI/CD integration, and observability. These scripts align with the hub-and-spoke model and VNet-integrated ACA deployment described earlier. I’ll also include brief explanations for each script to ensure clarity.

---

## 📌 8. Reference Architecture & Code Samples

This section provides reusable Terraform and Bicep scripts to implement the VNet-integrated Azure Container Apps (ACA) architecture. The scripts cover the entire deployment lifecycle, from networking to application deployment, identity management, and observability setup. Each script is modular and can be adapted to your specific environment.

### Network Flow Diagram
- **Description**: A hub-and-spoke topology with:
  - **Hub VNet**: Azure Firewall, Application Gateway, Private DNS Zone.
  - **Spoke VNet**: ACA subnet, peered to the hub, with private endpoints to Azure Key Vault and Azure Container Registry (ACR).
  - **Traffic Flow**: Ingress via Application Gateway, egress via Firewall, internal traffic via private endpoints.
- *(Use a diagramming tool like Draw.io to visualize this layout with labeled components.)*

---

### Terraform Scripts

#### 1. Hub VNet and Shared Networking
```hcl
# Variables
variable "location" { default = "East US" }
variable "rg_name" { default = "rg-aca-hub" }

# Resource Group
resource "azurerm_resource_group" "hub_rg" {
  name     = var.rg_name
  location = var.location
}

# Hub VNet
resource "azurerm_virtual_network" "hub_vnet" {
  name                = "vnet-hub"
  resource_group_name = azurerm_resource_group.hub_rg.name
  location            = var.location
  address_space       = ["10.0.0.0/16"]
}

# Subnet for Firewall
resource "azurerm_subnet" "firewall_subnet" {
  name                 = "AzureFirewallSubnet"
  resource_group_name  = azurerm_resource_group.hub_rg.name
  virtual_network_name = azurerm_virtual_network.hub_vnet.name
  address_prefixes     = ["10.0.1.0/24"]
}

# Azure Firewall
resource "azurerm_firewall" "hub_firewall" {
  name                = "fw-hub"
  resource_group_name = azurerm_resource_group.hub_rg.name
  location            = var.location
  sku_name            = "AZFW_VNet"
  sku_tier            = "Standard"
  ip_configuration {
    name                 = "fw-config"
    subnet_id            = azurerm_subnet.firewall_subnet.id
    public_ip_address_id = azurerm_public_ip.fw_pip.id
  }
}

resource "azurerm_public_ip" "fw_pip" {
  name                = "pip-fw"
  resource_group_name = azurerm_resource_group.hub_rg.name
  location            = var.location
  allocation_method   = "Static"
  sku                 = "Standard"
}
```
**Purpose**: Sets up the hub VNet with an Azure Firewall for egress control.

#### 2. Spoke VNet and ACA Subnet
```hcl
# Spoke Resource Group
resource "azurerm_resource_group" "spoke_rg" {
  name     = "rg-aca-spoke"
  location = var.location
}

# Spoke VNet
resource "azurerm_virtual_network" "spoke_vnet" {
  name                = "vnet-spoke"
  resource_group_name = azurerm_resource_group.spoke_rg.name
  location            = var.location
  address_space       = ["10.1.0.0/16"]
}

# ACA Subnet
resource "azurerm_subnet" "aca_subnet" {
  name                 = "snet-aca"
  resource_group_name  = azurerm_resource_group.spoke_rg.name
  virtual_network_name = azurerm_virtual_network.spoke_vnet.name
  address_prefixes     = ["10.1.1.0/24"]
  delegation {
    name = "aca-delegation"
    service_delegation {
      name = "Microsoft.App/environments"
    }
  }
}

# VNet Peering (Hub-to-Spoke)
resource "azurerm_virtual_network_peering" "hub_to_spoke" {
  name                      = "hub-to-spoke"
  resource_group_name       = azurerm_resource_group.hub_rg.name
  virtual_network_name      = azurerm_virtual_network.hub_vnet.name
  remote_virtual_network_id = azurerm_virtual_network.spoke_vnet.id
}

resource "azurerm_virtual_network_peering" "spoke_to_hub" {
  name                      = "spoke-to-hub"
  resource_group_name       = azurerm_resource_group.spoke_rg.name
  virtual_network_name      = azurerm_virtual_network.spoke_vnet.name
  remote_virtual_network_id = azurerm_virtual_network.hub_vnet.id
}
```
**Purpose**: Configures the spoke VNet with an ACA-delegated subnet and establishes peering with the hub.

#### 3. ACA Environment and Application
```hcl
# ACA Environment
resource "azurerm_container_app_environment" "aca_env" {
  name                = "aca-vnet-env"
  resource_group_name = azurerm_resource_group.spoke_rg.name
  location            = var.location
  vnet_configuration {
    subnet_id = azurerm_subnet.aca_subnet.id
  }
}

# ACA Application
resource "azurerm_container_app" "aca_app" {
  name                         = "myapp"
  resource_group_name          = azurerm_resource_group.spoke_rg.name
  container_app_environment_id = azurerm_container_app_environment.aca_env.id
  revision_mode                = "Single"
  template {
    container {
      name   = "app"
      image  = "mcr.microsoft.com/azuredocs/containerapps-helloworld:latest"
      cpu    = 0.25
      memory = "0.5Gi"
    }
    scale {
      min_replicas = 1
      max_replicas = 5
    }
  }
  ingress {
    external_enabled = false # Internal only
    target_port      = 80
  }
}
```
**Purpose**: Deploys a VNet-integrated ACA environment and a sample app with internal ingress.

#### 4. Private Endpoint for Azure Key Vault
```hcl
# Key Vault
resource "azurerm_key_vault" "kv" {
  name                        = "kv-aca"
  resource_group_name         = azurerm_resource_group.spoke_rg.name
  location                    = var.location
  sku_name                    = "standard"
  tenant_id                   = data.azurerm_client_config.current.tenant_id
  enable_rbac_authorization   = true
}

# Private Endpoint for Key Vault
resource "azurerm_private_endpoint" "kv_pe" {
  name                = "pe-kv"
  resource_group_name = azurerm_resource_group.spoke_rg.name
  location            = var.location
  subnet_id           = azurerm_subnet.aca_subnet.id
  private_service_connection {
    name                           = "kv-connection"
    private_connection_resource_id = azurerm_key_vault.kv.id
    subresource_names              = ["vault"]
  }
}

# Private DNS Zone for Key Vault
resource "azurerm_private_dns_zone" "kv_dns" {
  name                = "privatelink.vaultcore.azure.net"
  resource_group_name = azurerm_resource_group.spoke_rg.name
}

resource "azurerm_private_dns_zone_virtual_network_link" "kv_dns_link" {
  name                  = "kv-dns-link"
  resource_group_name   = azurerm_resource_group.spoke_rg.name
  private_dns_zone_name = azurerm_private_dns_zone.kv_dns.name
  virtual_network_id    = azurerm_virtual_network.spoke_vnet.id
}
```
**Purpose**: Secures Key Vault access via a private endpoint within the ACA subnet.

#### 5. User Managed Identity and RBAC
```hcl
# User Managed Identity for ACA
resource "azurerm_user_assigned_identity" "aca_identity" {
  name                = "id-aca"
  resource_group_name = azurerm_resource_group.spoke_rg.name
  location            = var.location
}

# Assign RBAC to Key Vault
resource "azurerm_role_assignment" "aca_kv_access" {
  scope                = azurerm_key_vault.kv.id
  role_definition_name = "Key Vault Secrets User"
  principal_id         = azurerm_user_assigned_identity.aca_identity.principal_id
}
```
**Purpose**: Creates a UMAI for ACA and grants it access to Key Vault secrets.

---

### Bicep Scripts

#### 1. Hub VNet and Firewall
```bicep
param location string = 'East US'
param rgName string = 'rg-aca-hub'

resource hubRg 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: rgName
  location: location
}

resource hubVnet 'Microsoft.Network/virtualNetworks@2023-04-01' = {
  name: 'vnet-hub'
  location: location
  properties: {
    addressSpace: { addressPrefixes: ['10.0.0.0/16'] }
  }
}

resource firewallSubnet 'Microsoft.Network/virtualNetworks/subnets@2023-04-01' = {
  name: 'AzureFirewallSubnet'
  parent: hubVnet
  properties: {
    addressPrefix: '10.0.1.0/24'
  }
}

resource fwPip 'Microsoft.Network/publicIPAddresses@2023-04-01' = {
  name: 'pip-fw'
  location: location
  properties: {
    publicIPAllocationMethod: 'Static'
    sku: { name: 'Standard' }
  }
}

resource firewall 'Microsoft.Network/azureFirewalls@2023-04-01' = {
  name: 'fw-hub'
  location: location
  properties: {
    sku: { name: 'AZFW_VNet', tier: 'Standard' }
    ipConfigurations: [{
      name: 'fw-config'
      properties: {
        subnet: { id: firewallSubnet.id }
        publicIPAddress: { id: fwPip.id }
      }
    }]
  }
}
```
**Purpose**: Deploys the hub VNet and Firewall.

#### 2. Spoke VNet and ACA Environment
```bicep
resource spokeRg 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: 'rg-aca-spoke'
  location: location
}

resource spokeVnet 'Microsoft.Network/virtualNetworks@2023-04-01' = {
  name: 'vnet-spoke'
  location: location
  properties: {
    addressSpace: { addressPrefixes: ['10.1.0.0/16'] }
  }
}

resource acaSubnet 'Microsoft.Network/virtualNetworks/subnets@2023-04-01' = {
  name: 'snet-aca'
  parent: spokeVnet
  properties: {
    addressPrefix: '10.1.1.0/24'
    delegations: [{ name: 'aca-delegation', properties: { serviceName: 'Microsoft.App/environments' } }]
  }
}

resource acaEnv 'Microsoft.App/managedEnvironments@2023-05-01' = {
  name: 'aca-vnet-env'
  location: location
  properties: {
    vnetConfiguration: {
      subnetResourceId: acaSubnet.id
    }
  }
}
```
**Purpose**: Sets up the spoke VNet and ACA environment.

#### 3. ACA Application with Dapr
```bicep
resource acaApp 'Microsoft.App/containerApps@2023-05-01' = {
  name: 'myapp'
  location: location
  properties: {
    managedEnvironmentId: acaEnv.id
    configuration: {
      ingress: { external: false, targetPort: 80 }
      dapr: { enabled: true, appId: 'myapp', appPort: 80 }
    }
    template: {
      containers: [{
        name: 'app'
        image: 'mcr.microsoft.com/azuredocs/containerapps-helloworld:latest'
        resources: { cpu: 0.25, memory: '0.5Gi' }
      }]
      scale: { minReplicas: 1, maxReplicas: 5 }
    }
  }
}
```
**Purpose**: Deploys an ACA app with Dapr enabled for microservices.

#### 4. Observability with Log Analytics
```bicep
resource logAnalytics 'Microsoft.OperationalInsights/workspaces@2022-10-01' = {
  name: 'la-aca'
  location: location
  properties: { sku: { name: 'PerGB2018' } }
}

resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: 'ai-aca'
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
    WorkspaceResourceId: logAnalytics.id
  }
}
```
**Purpose**: Configures Log Analytics and Application Insights for monitoring.

---

### Sample CI/CD Pipeline Configurations

#### GitHub Actions YAML
```yaml
name: Deploy ACA
on: [push]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: azure/login@v1
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }} # OIDC-enabled secret
      - run: |
          docker build -t myacr.azurecr.io/myapp:${{ github.sha }} .
          docker push myacr.azurecr.io/myapp:${{ github.sha }}
      - run: |
          az containerapp update \
            --name myapp \
            --resource-group rg-aca-spoke \
            --image myacr.azurecr.io/myapp:${{ github.sha }} \
            --set-env-vars "KEY_VAULT_SECRET=${{ secrets.KV_SECRET }}"
```
**Purpose**: Builds, pushes, and deploys a container to ACA with Key Vault secrets.

#### Azure DevOps Pipeline YAML
```yaml
trigger:
- main
pool:
  vmImage: 'ubuntu-latest'
steps:
- task: AzureCLI@2
  inputs:
    azureSubscription: 'my-service-connection'
    scriptType: 'bash'
    scriptLocation: 'inlineScript'
    inlineScript: |
      az acr build --registry myacr --image myapp:${{ variables.buildId }} .
      az containerapp update --name myapp --resource-group rg-aca-spoke --image myacr.azurecr.io/myapp:${{ variables.buildId }}
```
**Purpose**: Automates ACA deployment via Azure DevOps.

---

These scripts provide a complete foundation for deploying a VNet-integrated ACA environment. They cover networking, ACA provisioning, identity, observability, and CI/CD. You can modularize them further or adjust parameters (e.g., CIDR ranges, names) to fit your environment. Let me know if you need additional tweaks or deeper explanationss

-----------------
Below is the fully updated runbook with the enhancements integrated into each section as suggested. The structure remains consistent with the earlier Markdown format, enriched with additional details, examples, and practical aids to make it more comprehensive and helpful for cloud architects, engineers, and developers. I've kept it concise where possible while adding depth where it adds value.

---

# Runbook: VNet-Integrated Azure Container Apps (ACA) Design & Deployment

## Executive Summary
This runbook provides a detailed guide for designing, deploying, and managing **VNet-integrated Azure Container Apps (ACA)** within a secure, scalable Azure environment. It aligns with the Azure Cloud Adoption Framework, offering best practices, reference architectures, and code samples to streamline implementation. Key focuses include secure networking, identity management, CI/CD automation, and observability, ensuring high availability, compliance, and cost efficiency. Whether you're an architect planning a landing zone or a developer deploying a microservice, this document equips you with actionable steps and real-world insights.

---

## 📌 1. Introduction & Overview

### Purpose of the Runbook
This runbook empowers teams with a structured approach to designing, deploying, and managing **VNet-integrated Azure Container Apps (ACA)**. It addresses networking, security, automation, and observability, ensuring scalable, secure, and compliant deployments. By bridging theoretical best practices with practical implementation, it includes reference architectures and code samples to accelerate adoption.

### Target Audience
- **Cloud Architects**: Designing scalable, secure ACA architectures within Azure landing zones.
- **Cloud Engineers**: Implementing and managing ACA deployments, networking, and pipelines.
- **Developers**: Building and deploying containerized apps to ACA efficiently.

### Prerequisites
- **Tools**: Azure CLI (v2.56+), Terraform (v1.5+), Git.
- **Permissions**: Contributor or Owner role at subscription scope.
- **Knowledge**: Basic understanding of Azure networking, containerization, and Kubernetes concepts.

### High-Level Architecture Diagram
Imagine a hub-and-spoke topology:
- **Hub VNet**: Azure Firewall, Application Gateway, Private DNS Zones.
- **Spoke VNet**: ACA with a dedicated subnet, peered to the hub, with private endpoints to Azure Key Vault and Azure Container Registry (ACR).
- **Traffic Flow**: Ingress via Application Gateway, egress via Firewall, internal via private endpoints.

*(Visualize this with a tool like Draw.io, labeling components and flows.)*

---

## 📌 2. Application Landing Zone & Network Architecture

### Landing Zone Components
- **Resource Groups & Subscriptions**: 
  - Organize by environment (e.g., `rg-aca-dev`, `rg-aca-prod`) within dedicated subscriptions for isolation.
  - Example: Separate dev/test and prod subscriptions for governance.
- **Naming Conventions**: 
  - Use `<resource-type>-<workload>-<env>-<region>` (e.g., `vnet-aca-prod-eastus`).
  - Document in a wiki or enforce via Azure Policy.
- **Policies & Governance**: 
  - Mandate VNet integration and encryption with Azure Policy.
  - Sample Policy (JSON):
    ```json
    {
      "policyRule": {
        "if": {
          "allOf": [
            { "field": "type", "equals": "Microsoft.App/containerApps" },
            { "field": "tags.Environment", "exists": "false" }
          ]
        },
        "then": { "effect": "deny" }
      }
    }
    ```
- **Tagging & Cost Management**: 
  - Apply tags: `Environment=Prod`, `Owner=TeamX`, `CostCenter=CC123`.
  - Use Azure Cost Management for tracking.

### Network Design & Traffic Flow
- **Hub-Spoke VNet Model**: 
  - **Hub**: Centralizes security (Firewall), ingress (Application Gateway), and shared services.
  - **Spoke**: Hosts ACA, peered to the hub for isolation and scalability.
- **Ingress & Egress Traffic Flow**: 
  - **Ingress**: Application Gateway with WAF terminates at ACA’s internal endpoint.
  - **Egress**: Filter outbound traffic via Azure Firewall or NAT Gateway.
- **Subnets & NSG Considerations**: 
  - Dedicate a `/24` subnet for ACA to support scaling.
  - NSGs: Allow 443 (HTTPS), deny unnecessary intra-subnet traffic.
- **Private Endpoints & Firewall Rules**: 
  - Secure PaaS services (e.g., Key Vault, ACR) with private endpoints in the spoke.
  - Firewall: Allow ACA-to-service traffic, block public access.
- **Common Pitfalls**:
  - **Subnet Sizing**: Avoid small subnets (e.g., `/28`) due to ACA’s IP needs.
  - **Peering Loops**: Prevent circular peering dependencies.
  - **NSG Overlap**: Verify rules to avoid conflicts.

---

## 📌 3. Environment & Resource Provisioning

### Choosing the Right ACA Deployment Model
- **VNet-Integrated vs. Public ACA**: 
  - **VNet-Integrated**: For internal apps needing isolation (e.g., enterprise backends).
  - **Public ACA**: For public-facing apps (e.g., marketing sites).
- **Workload Placement Decision Matrix**: 
  ```markdown
  | Criteria       | Weight | VNet-Integrated ACA | Public ACA |
  |----------------|--------|---------------------|------------|
  | Security       | 40%    | High (private)      | Medium     |
  | Cost           | 20%    | Higher (networking) | Lower      |
  | Latency        | 20%    | Low (internal)      | Medium     |
  | Compliance     | 20%    | Yes (e.g., GDPR)    | No         |
  ```
- **Security & Compliance**: Enforce private networking, audit with Azure Security Center.

### Networking Components
- **Subnet Requirements for ACA Integration**: 
  - Minimum `/24` (256 IPs), delegated to `Microsoft.App/environments`.
- **Private DNS & Private Endpoints**: 
  - Use Private DNS Zones (e.g., `privatelink.azurecr.io`) linked to the VNet.
- **Route Tables & UDRs**: 
  - Route `0.0.0.0/0` to the hub Firewall’s private IP.

### Other Considerations
- **Dapr for Microservices**: 
  - Enable Dapr in ACA for service invocation and state management.
  - Example: Simplify microservice communication.
- **Service Discovery & Auto-Scaling**: 
  - Use ACA’s DNS for internal discovery.
  - Configure KEDA triggers (e.g., HTTP requests) with 1-10 replicas.
- **Performance Tuning**:
  - Set container limits (e.g., 0.5 CPU, 1Gi RAM) based on profiling.
  - Adjust KEDA polling to 15s for latency-sensitive apps.

---

## 📌 4. Secure Access & Identity Management

### SP (Service Principals) & UMAI (User Managed Identity) Requirements
- **SP/UMAI for ACA Deployment**: 
  - SP for CI/CD: `Contributor` on ACA resource group.
  - UMAI for ACA: Runtime access to Azure resources.
- **RBAC Permissions for Networking & ACA**: 
  - UMAI: `Network Contributor` for subnets, `Key Vault Secrets User` for secrets.
- **Least Privilege Access Model**: 
  - Scope permissions to resource groups, audit regularly.
- **Credential Rotation & Auditing**:
  1. Rotate SP: `az ad sp credential reset --id <sp-id>`.
  2. Audit RBAC: Use KQL in Log Analytics:
     ```kql
     AuditLogs | where OperationName == "Add member to role"
     ```

### RBAC Roles for ACA & DevOps
- **Azure AD Roles**: 
  - **Developers**: `Contributor` on ACA/ACR.
  - **Ops**: `Reader` on networking, `Contributor` on ACA.
  - **Security**: `Security Admin` for policy enforcement.
- **Network & Key Vault Access Control**: 
  - Sample Key Vault Policy:
    ```json
    {
      "id": "aca-umai",
      "accessPolicies": [
        { "objectId": "<umai-principal-id>", "permissions": { "secrets": ["get"] } }
      ]
    }
    ```

---

## 📌 5. CI/CD with GitHub Actions & Azure DevOps

### GitHub Actions / Azure DevOps Pipelines for ACA
- **Infrastructure Deployment**: 
  - Use Terraform/Bicep for VNet, ACA, and dependencies.
- **Application Deployment Workflow**: 
  - Build/push to ACR, deploy to ACA with revisions.
- **Security Policies**: 
  - Use OIDC for GitHub Actions authentication.
- **Testing & Validation**:
  - **Terraform Plan**: Run `terraform plan` in PR checks.
  - **Container Scanning**: Use `trivy image myapp:latest`.
  - **Smoke Tests**: Post-deploy, curl ACA’s internal endpoint.
- **Rollback Strategy**:
  ```yaml
  - name: Rollback on Failure
    if: failure()
    run: az containerapp revision activate --name myapp --revision <previous-revision>
  ```

### Secrets Management
- **Azure Key Vault Integration**: 
  - Store ACR creds and API keys, access via UMAI.
- **Securely Passing Environment Variables**: 
  - Inject via `az containerapp update --set-env-vars`.

---

## 📌 6. Observability & Troubleshooting

### Logging & Monitoring
- **Azure Monitor, Log Analytics, App Insights**: 
  - Collect ACA metrics (CPU, requests) and logs.
  - Enable Application Insights for app telemetry.
- **Distributed Tracing with Dapr**: 
  - Emit traces to Application Insights.
- **Sample KQL Queries**:
  - **High CPU Usage**:
    ```kql
    ContainerAppMetrics
    | where MetricName == "CpuUtilization" and Value > 80
    | summarize MaxCPU = max(Value) by AppName
    ```
  - **Failed Requests**:
    ```kql
    ContainerAppLogs
    | where LogMessage contains "error" or HttpStatusCode >= 400
    ```

### Common Issues & Fixes
- **Network Connectivity Debugging**: 
  - Use `az network watcher` to test endpoints.
- **VNet/Subnet Misconfigurations**: 
  - Verify delegation, check IP exhaustion with `az network vnet subnet show`.

### Disaster Recovery Testing
- Simulate AZ failure: Disable a subnet in one AZ.
- Validate failover: Check ACA logs for replica redistribution.

---

## 📌 7. Best Practices & Security Considerations

- **Secure Traffic Flows**: 
  - Use Private Link for PaaS, Azure Firewall for egress.
- **Compliance & Governance Policies**: 
  - Enforce encryption and VNet integration via Azure Policy.
- **High Availability & Disaster Recovery**: 
  - Deploy across AZs, replicate to a secondary region.
- **Multi-Region Failover**:
  1. Deploy ACA to a secondary region (e.g., West US).
  2. Use Traffic Manager with health probes.
  3. Sync configs with Azure Resource Mover.
- **Security Checklist**:
  - [ ] Enforce TLS 1.2+.
  - [ ] Disable public ingress unless required.
  - [ ] Rotate UMAI credentials quarterly.
  - [ ] Enable Defender for Containers.

---

## 📌 8. Reference Architecture & Code Samples

### Network Flow Diagram
- Hub-and-spoke with ACA in the spoke, peered to a hub with Firewall and Application Gateway, private endpoints to ACR/Key Vault.

### Terraform Scripts
#### Hub VNet and Firewall
```hcl
resource "azurerm_virtual_network" "hub_vnet" {
  name                = "vnet-hub"
  resource_group_name = "rg-aca-hub"
  location            = "East US"
  address_space       = ["10.0.0.0/16"]
}
resource "azurerm_subnet" "firewall_subnet" {
  name                 = "AzureFirewallSubnet"
  resource_group_name  = "rg-aca-hub"
  virtual_network_name = azurerm_virtual_network.hub_vnet.name
  address_prefixes     = ["10.0.1.0/24"]
}
resource "azurerm_firewall" "hub_firewall" {
  name                = "fw-hub"
  resource_group_name = "rg-aca-hub"
  location            = "East US"
  ip_configuration {
    subnet_id = azurerm_subnet.firewall_subnet.id
    public_ip_address_id = azurerm_public_ip.fw_pip.id
  }
}
resource "azurerm_public_ip" "fw_pip" {
  name                = "pip-fw"
  resource_group_name = "rg-aca-hub"
  location            = "East US"
  allocation_method   = "Static"
  sku                 = "Standard"
}
```

#### Spoke VNet and ACA
```hcl
resource "azurerm_virtual_network" "spoke_vnet" {
  name                = "vnet-spoke"
  resource_group_name = "rg-aca-spoke"
  location            = "East US"
  address_space       = ["10.1.0.0/16"]
}
resource "azurerm_subnet" "aca_subnet" {
  name                 = "snet-aca"
  resource_group_name  = "rg-aca-spoke"
  virtual_network_name = azurerm_virtual_network.spoke_vnet.name
  address_prefixes     = ["10.1.1.0/24"]
  delegation { service_delegation { name = "Microsoft.App/environments" } }
}
resource "azurerm_container_app_environment" "aca_env" {
  name                = "aca-vnet-env"
  resource_group_name = "rg-aca-spoke"
  location            = "East US"
  vnet_configuration { subnet_id = azurerm_subnet.aca_subnet.id }
}
resource "azurerm_container_app" "aca_app" {
  name                         = "myapp"
  resource_group_name          = "rg-aca-spoke"
  container_app_environment_id = azurerm_container_app_environment.aca_env.id
  template {
    container {
      name   = "app"
      image  = "mcr.microsoft.com/azuredocs/containerapps-helloworld:latest"
      cpu    = 0.25
      memory = "0.5Gi"
    }
    scale { min_replicas = 1 max_replicas = 5 }
  }
  ingress { external_enabled = false target_port = 80 }
}
```

#### Application Gateway for Ingress
```hcl
resource "azurerm_subnet" "gw_subnet" {
  name                 = "snet-gw"
  resource_group_name  = "rg-aca-hub"
  virtual_network_name = azurerm_virtual_network.hub_vnet.name
  address_prefixes     = ["10.0.2.0/24"]
}
resource "azurerm_application_gateway" "app_gw" {
  name                = "agw-aca"
  resource_group_name = "rg-aca-hub"
  location            = "East US"
  sku { name = "Standard_v2" tier = "Standard_v2" capacity = 2 }
  gateway_ip_configuration {
    name      = "gw-ip-config"
    subnet_id = azurerm_subnet.gw_subnet.id
  }
  frontend_port { name = "port-443" port = 443 }
}
```

#### Key Vault and UMAI
```hcl
resource "azurerm_key_vault" "kv" {
  name                        = "kv-aca"
  resource_group_name         = "rg-aca-spoke"
  location                    = "East US"
  sku_name                    = "standard"
  tenant_id                   = data.azurerm_client_config.current.tenant_id
  enable_rbac_authorization   = true
}
resource "azurerm_user_assigned_identity" "aca_identity" {
  name                = "id-aca"
  resource_group_name = "rg-aca-spoke"
  location            = "East US"
}
resource "azurerm_role_assignment" "aca_kv_access" {
  scope                = azurerm_key_vault.kv.id
  role_definition_name = "Key Vault Secrets User"
  principal_id         = azurerm_user_assigned_identity.aca_identity.principal_id
}
```

### Bicep Scripts
(Refer to earlier examples for brevity; similar enhancements apply.)

### Sample CI/CD Pipeline Configurations
#### GitHub Actions YAML
```yaml
name: Deploy ACA
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: azure/login@v1
        with: { creds: ${{ secrets.AZURE_CREDENTIALS }} }
      - run: |
          docker build -t myacr.azurecr.io/myapp:${{ github.sha }} .
          docker push myacr.azurecr.io/myapp:${{ github.sha }}
      - run: |
          az containerapp update --name myapp --resource-group rg-aca-spoke \
            --image myacr.azurecr.io/myapp:${{ github.sha }} \
            --set-env-vars "KEY_VAULT_SECRET=${{ secrets.KV_SECRET }}"
```

### Deployment Walkthrough
1. **Hub Setup**: Run `hub_vnet.tf` for firewall and shared services.
2. **Spoke Setup**: Apply `spoke_vnet.tf` for ACA subnet and peering.
3. **ACA Deploy**: Use `aca.tf` to provision environment and app.
4. **CI/CD**: Trigger `github-actions.yml` for updates.

---

## Glossary
- **VNet**: Virtual Network.
- **NSG**: Network Security Group.
- **UMAI**: User Managed Identity.
- **Dapr**: Distributed Application Runtime.
- **KEDA**: Kubernetes Event-Driven Autoscaling.

## Versioning
- **Version**: v1.0, March 2025.
- **Changelog**: Initial release.
- **Feedback**: Submit suggestions via [GitHub repo issues].

---

This enhanced runbook integrates practical tools (checklists, KQL queries), real-world guidance (pitfalls, scenarios), and cohesive examples (walkthroughs, policies) to maximize its utility. Let me know if you'd like further refinements!





