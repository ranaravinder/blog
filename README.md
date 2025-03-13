

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



Here’s a **step-by-step guide** to configure Azure Application Gateway (AGW) for your internal Azure Container Apps (ACA) using its IP address directly (without a public domain):

---

### **Prerequisites**
1. **ACA Environment**:
   - 3+ apps with **internal ingress** enabled and unique hostnames (e.g., `app1.internal`, `app2.internal`).
   - ACA environment deployed in a VNet with **private DNS** (e.g., `privatelink.azurecontainerapps.io`).
2. **VNet**:
   - ACA environment and Application Gateway must reside in the **same VNet** (or peered VNets).
   - Dedicated subnet for Application Gateway (e.g., `10.0.1.0/24`).
3. **Permissions**:
   - Contributor/owner access to the Azure subscription.

---

### **Step 1: Deploy Application Gateway**
1. **Create a Public IP**:
   - Go to Azure Portal → **Public IP Addresses** → Create.
   - Name: `appgw-pip`, SKU: **Standard**, Assignment: **Static**.
2. **Create Application Gateway**:
   - Go to **Application Gateway** → Create.
   - **Basics**:
     - VNet: Select the VNet where ACA resides.
     - Subnet: Dedicated subnet (e.g., `10.0.1.0/24`).
     - Frontend IP: **Public** → Attach the `appgw-pip` IP.
   - **Backends**:
     - Skip backend pool setup for now (configure later).
   - **Configuration**:
     - Add a **listener**:
       - Name: `http-listener`.
       - Protocol: **HTTP**, Port: `80`.
       - Leave "Hostname" empty (we’ll use IP-based access).
     - Add a **routing rule**:
       - Name: `aca-routing-rule`.
       - Listener: `http-listener`.
       - Backend target: **Create new backend pool** (we’ll configure in Step 2).
       - HTTP settings: **Create new** (configure in Step 3).
   - Finish deployment.

---

### **Step 2: Configure Backend Pool**
1. **Find the ACA ILB Private IP**:
   - Go to your ACA Environment → **Properties** → **Static IP** (e.g., `10.0.0.4`).
2. **Update AGW Backend Pool**:
   - Go to Application Gateway → **Backend Pools** → Edit the default pool.
   - Add backend target:
     - Type: **IP address or FQDN**.
     - Target: `10.0.0.4` (ACA ILB IP).
   - Save.

---

### **Step 3: Configure HTTP Settings with Rewrite Rule**
1. **Create a Rewrite Rule Set**:
   - Go to Application Gateway → **Rewrite Rules** → **Add Rewrite Rule Set**.
   - Name: `host-header-rewrite`.
   - Add a rule:
     - **Name**: `set-host-header`.
     - **Action**: `Set request header`.
     - **Header Name**: `Host`.
     - **Header Value**: `{var_http_req_Host}` (preserve original Host header).
   - Save.
2. **Update HTTP Settings**:
   - Go to **HTTP Settings** → Edit the default setting.
   - **Backend Protocol**: HTTP.
   - **Port**: 80.
   - **Override backend path**: No.
   - **Rewrite Rule Set**: Attach `host-header-rewrite`.
   - Save.

---

### **Step 4: Configure Multi-Site Listener (Host-Based Routing)**
1. **Update Listener**:
   - Go to **Listeners** → Edit `http-listener`.
   - **Listener Type**: **Multi-site** (required for host-based routing).
   - **Hostname**: Leave empty (or use a placeholder like `dummy-host`).
   - Save.

---

### **Step 5: Private DNS Configuration**
1. **Verify ACA App Hostnames**:
   - Each ACA app must have a unique hostname (e.g., `app1.internal`, `app2.internal`).
   - Confirm these hostnames resolve to the ACA ILB IP (`10.0.0.4`) in your VNet’s private DNS zone (`privatelink.azurecontainerapps.io`).
     - Example DNS record for `app1.internal`:
       - **Name**: `app1`.
       - **Type**: `A`.
       - **Value**: `10.0.0.4`.

---

### **Step 6: Test via Hosts File**
1. **Get Application Gateway Public IP**:
   - Go to Application Gateway → **Frontend Public IP** → Copy the IP (e.g., `20.1.1.1`).
2. **Modify Local Hosts File**:
   - On your local machine, edit `C:\Windows\System32\drivers\etc\hosts` (Windows) or `/etc/hosts` (Linux/macOS):
     ```
     20.1.1.1  app1.internal
     20.1.1.1  app2.internal
     20.1.1.1  app3.internal
     ```
3. **Access Apps**:
   - Open a browser and navigate to `http://app1.internal`.
   - The request flows:  
     `Your PC → App Gateway (20.1.1.1) → ACA ILB (10.0.0.4) → Target ACA App`.

---

### **Step 7: Add New Apps**
1. **Deploy a New ACA App**:
   - Configure its ingress with a unique hostname (e.g., `app4.internal`).
   ```yaml
   ingress:
     internal: true
     targetPort: 80
     external: false
     traffic:
       - latestRevision: true
         weight: 100
   ```
2. **Update DNS**:
   - Add a new A record in your private DNS zone for `app4.internal` → `10.0.0.4`.
3. **Update Hosts File**:
   - Add `20.1.1.1  app4.internal` to your local `hosts` file.
4. **Access the New App**:
   - Navigate to `http://app4.internal`.

---

### **Validation & Troubleshooting**
- **Check Host Headers**:
  - Use Application Gateway logs (go to **Diagnostic Settings** → Enable logs) to verify the `Host` header sent to ACA matches the app’s hostname.
- **Test Connectivity**:
  - From a VM in the same VNet, run `curl -H "Host: app1.internal" http://10.0.0.4` to confirm ACA ILB routes correctly.
- **NSG Rules**:
  - Ensure the App Gateway subnet can communicate with the ACA subnet over port 80.

---

### **Diagram**
```
Client (http://app1.internal → hosts file → AGW Public IP 20.1.1.1)  
  ↓  
Application Gateway (forwards Host: app1.internal to ACA ILB 10.0.0.4)  
  ↓  
ACA ILB (routes to app1.internal via private DNS)  
  ↓  
ACA App
```

---

### **Next Steps**
- **Add HTTPS**:
  - Upload a wildcard SSL certificate to AGW and configure an HTTPS listener.
- **Enable WAF**:
  - Switch to the **WAF_v2** SKU and define security policies.
- **Public DNS**:
  - Replace the hosts file with public DNS A records pointing to AGW’s IP.

This setup allows immediate access via IP and scales seamlessly for future apps!

For more information or to connect, please reach out via email at talk2rana@gmail.com or through [LinkedIn](https://www.linkedin.com/in/ravinder-singh-rana).


