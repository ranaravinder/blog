import Head from 'next/head'

export default function ResumePage() {
    return (
        <section>
            <div className="bg-gray-50 min-h-screen">
                <Head>
                    <title>Ravinder Singh Rana - Resume</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>

                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl md:text-4xl font-bold uppercase mb-4">
                        Ravinder Singh Rana
                    </h1>
                    <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">
                        .NET Developer | ReactJS Developer | Azure Solutions Architect
                    </h2>

                    <hr className="my-4" />

                    <h2 className="font-bold uppercase text-lg md:text-xl mb-4">
                        Summary
                    </h2>

                    <p className="text-gray-600 mb-8">
                        I am an experienced .NET Developer and ReactJS Developer with expertise in Azure Solutions Architecture. I have extensive knowledge in Azure Databricks, Data Factory, Data Lake Storage, AKS, ACI, and Azure Functions. I am also skilled in using JIRA and Confluence, and have good experience in SAFE Agile. In addition, I have used Atomic Design Pattern for ReactJS and have knowledge in web accessibility using ARIA roles, WCAG, and screen readers such as NVDA and JAWS. I am familiar with Tridion CMS for multilingual websites.
                    </p>

                    <h2 className="font-bold uppercase text-lg md:text-xl mb-4">
                        Experience
                    </h2>

                    <div className="mb-4">
                        <h3 className="font-bold">ABC Company</h3>
                        <p className="text-gray-600">Full Stack Developer | Jan 2020 - Present</p>
                        <ul className="list-disc ml-8 mb-4">
                            <li>Develop and maintain .NET applications using C# and ASP.NET MVC</li>
                            <li>Develop and maintain ReactJS applications using Next.js and Tailwind CSS</li>
                            <li>Design and implement Azure Solutions Architecture for client projects</li>
                            <li>Implement and maintain Azure Databricks, Data Factory, Data Lake Storage, AKS, ACI, and Azure Functions</li>
                            <li>Use JIRA and Confluence to manage project tasks and documentation</li>
                            <li>Follow SAFE Agile methodologies for project management</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-bold">DEF Company</h3>
                        <p className="text-gray-600">Software Developer | Jul 2017 - Dec 2019</p>
                        <ul className="list-disc ml-8 mb-4">
                            <li>Developed and maintained .NET applications using C# and ASP.NET MVC</li>
                            <li>Implemented web accessibility using ARIA roles and WCAG standards</li>
                            <li>Managed multilingual websites using Tridion CMS</li>
                            <li>Followed Agile methodologies for project management</li>
                        </ul>
                    </div>

                    <hr className="my-4" />

                    <h2 className="font-bold uppercase text-lg md:text-xl mb-4">
                        Certifications
                    </h2>

                    <div className="mb-4">
                        <h3 className="font-bold">Azure Solutions Architect Expert</h3>
                        <p className="text -gray-600">Issued by Microsoft | Valid until Jan 2024</p>
                        <ul className="list-disc ml-8 mb-4">
                            <li>Design and implement solutions that run on Microsoft Azure</li>
                            <li>Implement and monitor Azure infrastructure</li>
                            <li>Implement management and security solutions</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold">Azure DevOps Engineer Expert</h3>
                        <p className="text-gray-600">Issued by Microsoft | Valid until Jan 2024</p>
                        <ul className="list-disc ml-8 mb-4">
                            <li>Design and implement DevOps practices for version control, compliance, infrastructure as code, configuration management, build, release, and testing</li>
                            <li>Implement and manage continuous integration and delivery pipelines in Azure</li>
                            <li>Implement and manage application infrastructure in Azure</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-bold">Azure Developer Associate</h3>
                        <p className="text-gray-600">Issued by Microsoft | Valid until Jan 2024</p>
                        <ul className="list-disc ml-8 mb-4">
                            <li>Develop Azure infrastructure as a service (IaaS) compute solutions</li>
                            <li>Develop Azure Platform as a Service (PaaS) compute solutions</li>
                            <li>Develop for Azure storage</li>
                            <li>Implement Azure security</li>
                            <li>Monitor, troubleshoot, and optimize Azure solutions</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-bold">Azure Administrator Associate</h3>
                        <p className="text-gray-600">Issued by Microsoft | Valid until Jan 2024</p>
                        <ul className="list-disc ml-8 mb-4">
                            <li>Manage Azure subscriptions and resources</li>
                            <li>Implement and manage storage and security</li>
                            <li>Deploy and manage Azure compute resources</li>
                            <li>Configure and manage virtual networking</li>
                            <li>Monitor and troubleshoot Azure resources</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
   );
}


