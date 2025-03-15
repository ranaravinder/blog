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

This runbook provides **end-to-end guidance** for deploying secure, VNet-enabled Azure Container Apps. Adjust parameters (e.g., CIDR ranges, SKUs) based on organizational needs.
