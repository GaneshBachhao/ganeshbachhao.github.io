export interface Project {
  id: number;

  category: string;
  title: string;
  summary: string;

  problem: string;
  scale: string;
  architecture: string;

  approach: string;
  technologyRationale: string;
  tradeoffs: string;

  impact: string;

  achievements: string[];

  lessonsLearned: string;

  leadership: string;

  techStack: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    category: "Cloud Modernization",
    title: "Enterprise Modernization & Azure Migration",

    summary:
      "Led the modernization of a business-critical legacy platform from Classic ASP to Azure-based .NET architecture, improving reliability, deployment efficiency, and long-term scalability without disrupting daily operations.",

    problem:
      "A large legacy application had become difficult to maintain, expensive to enhance, and increasingly risky to deploy. Business teams needed faster delivery of new capabilities while maintaining stability for critical operations.",

    scale:
      "Enterprise platform supporting multiple departments, thousands of users, business-critical workflows, and several downstream integrations requiring high availability.",

    architecture:
      "Designed a phased modernization strategy that transitioned the legacy platform into a cloud-hosted .NET architecture running on Azure App Service with Azure SQL, Key Vault, Application Insights, and automated CI/CD pipelines.",

    approach:
      "A phased migration approach was selected instead of a complete rewrite to reduce business risk, allow continuous delivery, and validate modernization outcomes incrementally.",

    technologyRationale:
      ".NET Core provided improved maintainability and performance, while Azure services reduced infrastructure management overhead and provided built-in scalability, monitoring, and disaster recovery capabilities.",

    tradeoffs:
      "A microservices-first approach was evaluated but deferred. A modular architecture delivered most of the modernization benefits while avoiding unnecessary operational complexity.",

    impact:
      "Reduced deployment effort by approximately 60%, achieved zero-downtime migration, improved platform stability, and established a cloud foundation for future growth.",

    achievements: [
      "60% reduction in deployment effort",
      "Zero-downtime migration execution",
      "Improved application reliability",
      "Enhanced monitoring and observability",
      "Established cloud-native delivery practices"
    ],

    lessonsLearned:
      "Successful modernization depends as much on stakeholder alignment, governance, and change management as it does on technology decisions.",

    leadership:
      "Owned modernization strategy, architecture decisions, migration planning, stakeholder communication, release governance, and technical mentoring throughout the program.",

    techStack: [
      ".NET Core",
      "C#",
      "Azure App Service",
      "Azure SQL",
      "Azure Key Vault",
      "Azure DevOps",
      "Application Insights"
    ]
  },

  {
    id: 2,
    category: "Enterprise AI",
    title: "Azure OpenAI Document Automation",

    summary:
      "Designed and implemented an enterprise knowledge discovery solution using Azure OpenAI and Azure AI Search, helping users find trusted information faster across large document repositories.",

    problem:
      "Important business information was distributed across thousands of documents, making it difficult for employees to locate accurate answers quickly and consistently.",

    scale:
      "Large repository of structured and unstructured content spanning multiple departments, business processes, and operational knowledge sources.",

    architecture:
      "Implemented a Retrieval-Augmented Generation (RAG) solution combining Azure OpenAI, Azure AI Search, Azure Storage, and Azure Functions for ingestion, indexing, retrieval, and AI-assisted responses.",

    approach:
      "A RAG architecture was selected to ensure responses were grounded in approved enterprise content rather than relying solely on model-generated answers.",

    technologyRationale:
      "Azure OpenAI provided enterprise-grade governance and security, while Azure AI Search enabled semantic retrieval and Azure Functions supported scalable ingestion workflows.",

    tradeoffs:
      "Pure LLM-based generation offered faster implementation but increased hallucination risks. RAG introduced additional complexity but significantly improved reliability and user trust.",

    impact:
      "Reduced time spent searching for business information, improved accessibility of organizational knowledge, and demonstrated practical enterprise adoption of Generative AI.",

    achievements: [
      "Accelerated information discovery",
      "Improved search relevance",
      "Enabled AI-powered knowledge retrieval",
      "Established reusable AI integration patterns",
      "Demonstrated enterprise GenAI adoption"
    ],

    lessonsLearned:
      "The success of enterprise AI solutions depends more on data quality, governance, and retrieval accuracy than on model capability alone.",

    leadership:
      "Led architecture design, AI adoption planning, proof-of-concept validation, stakeholder workshops, and governance discussions around responsible AI usage.",

    techStack: [
      "Azure OpenAI",
      "Azure AI Search",
      "Azure Functions",
      "Azure Storage",
      ".NET 8",
      "C#",
      "REST APIs"
    ]
  },

  {
    id: 3,
    category: "Data Engineering",
    title: "Enterprise Data Ingestion & ETL Platform",

    summary:
      "Designed and implemented a scalable ETL platform for processing high volumes of business data, enabling reliable ingestion, transformation, validation, and distribution across multiple enterprise systems.",

    problem:
      "Business data arrived from multiple internal and external sources in different formats and volumes. Existing processing approaches struggled to scale, resulting in delays, data quality issues, and operational overhead.",

    scale:
      "Processing hundreds of thousands of records daily across multiple data sources, with requirements for validation, transformation, monitoring, fault tolerance, and near real-time availability.",

    architecture:
      "Designed an event-driven ETL architecture using Azure Service Bus, Azure Functions, Azure Storage, and SQL Server. The solution automated ingestion, validation, transformation, enrichment, and distribution of business data.",

    approach:
      "An asynchronous processing model was selected to decouple ingestion from downstream processing, improve scalability, and ensure that failures in one system would not impact the entire pipeline.",

    technologyRationale:
      "Azure Service Bus provided durable messaging and retry handling, while Azure Functions enabled scalable event-driven processing. SQL Server remained the trusted system of record.",

    tradeoffs:
      "Asynchronous processing introduced additional operational complexity and eventual consistency considerations. The gains in scalability and reliability justified the approach.",

    impact:
      "Reduced manual processing effort, improved data quality, accelerated data availability, and enabled the platform to handle growing data volumes reliably.",

    achievements: [
      "Automated high-volume data ingestion workflows",
      "Improved data validation and quality controls",
      "Reduced manual intervention requirements",
      "Enabled scalable event-driven processing",
      "Improved monitoring and operational visibility"
    ],

    lessonsLearned:
      "Reliable ETL solutions require strong validation, monitoring, and recovery mechanisms. Observability is just as important as processing performance.",

    leadership:
      "Led solution design, data integration strategy, technical reviews, implementation guidance, and performance optimization efforts while collaborating with business and engineering stakeholders.",

    techStack: [
      "C#",
      ".NET Core",
      "Azure Functions",
      "Azure Service Bus",
      "Azure Storage",
      "SQL Server",
      "Application Insights"
    ]
  },

  {
    id: 4,
    category: "API & Integration",
    title: "Partner API Integration Platform",

    summary:
      "Built a secure API integration platform that simplified partner onboarding and established a consistent approach for external system integrations.",

    problem:
      "Each new partner integration required custom implementation, repeated technical discussions, and lengthy onboarding cycles that slowed business initiatives.",

    scale:
      "Multiple strategic partner integrations consuming enterprise APIs across business-critical processes and geographical regions.",

    architecture:
      "Developed a secure API ecosystem with OAuth/JWT authentication, API governance, versioning strategy, monitoring standards, and onboarding frameworks.",

    approach:
      "An API-first strategy was adopted to improve consistency, accelerate onboarding, and reduce long-term integration complexity.",

    technologyRationale:
      "ASP.NET Core Web API provided performance and flexibility, while OAuth, JWT, and API governance standards improved security and maintainability.",

    tradeoffs:
      "Introducing governance standards increased initial implementation effort but significantly reduced maintenance overhead and onboarding time.",

    impact:
      "Reduced onboarding cycles from weeks to days, improved integration consistency, strengthened security controls, and accelerated partner enablement.",

    achievements: [
      "Reduced onboarding cycles from weeks to days",
      "Improved partner experience",
      "Enhanced API security",
      "Established API governance standards",
      "Increased integration consistency"
    ],

    lessonsLearned:
      "Developer experience is a critical success factor for external APIs. Documentation, standards, and governance often matter more than technology choices.",

    leadership:
      "Led API architecture, partner technical discussions, governance implementation, security reviews, and cross-team coordination.",

    techStack: [
      "ASP.NET Core",
      "OAuth 2.0",
      "JWT",
      "Azure API Management",
      "SQL Server",
      "Swagger/OpenAPI",
      "Azure DevOps"
    ]
  },

  {
    id: 5,
    category: "Engineering Leadership",
    title: "Engineering Governance & Architecture Leadership",

    summary:
      "Established engineering standards, architecture governance, and delivery practices that improved consistency, quality, and scalability across multiple development teams.",

    problem:
      "As engineering teams and products expanded, inconsistent architectural decisions, technical debt, and delivery challenges began affecting maintainability and predictability.",

    scale:
      "Cross-functional teams supporting multiple enterprise applications, modernization programs, cloud initiatives, and shared engineering platforms.",

    architecture:
      "Introduced architecture review processes, technical decision records, coding standards, CI/CD governance, and reusable architectural patterns based on Clean Architecture and DDD principles.",

    approach:
      "Focused on building sustainable engineering practices and governance frameworks rather than relying solely on individual technical expertise.",

    technologyRationale:
      "Clean Architecture and Domain-Driven Design improved maintainability, while automation and governance practices increased consistency and delivery confidence.",

    tradeoffs:
      "Governance introduces additional review processes, but the long-term benefits in quality, maintainability, and team alignment significantly outweigh the overhead.",

    impact:
      "Improved architectural consistency, accelerated onboarding of engineers, increased delivery predictability, and strengthened overall engineering maturity.",

    achievements: [
      "Improved engineering standards",
      "Reduced code review turnaround time",
      "Strengthened architectural consistency",
      "Accelerated onboarding of developers",
      "Established sustainable engineering practices"
    ],

    lessonsLearned:
      "Strong engineering culture and technical leadership often create greater long-term business impact than individual technical contributions.",

    leadership:
      "Mentored engineers, facilitated architecture reviews, introduced governance processes, guided technical decision-making, and aligned engineering execution with business priorities.",

    techStack: [
      "Clean Architecture",
      "DDD",
      ".NET",
      "Azure",
      "GitHub",
      "Azure DevOps",
      "CI/CD",
      "Architecture Governance"
    ]
  }
];
