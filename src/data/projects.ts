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

    category: "Cloud Migration",

    title: "Enterprise Modernization & Azure Migration",

    summary:
      "Legacy modernization from Classic ASP to Azure Cloud with zero downtime.",

    problem:
      "The organization relied on a large legacy Classic ASP application that had become difficult to maintain, scale, and evolve. Aging infrastructure, manual deployments, and increasing business demands created operational risk and slowed feature delivery.",

    scale:
      "Enterprise-wide platform supporting multiple departments, thousands of users, business-critical workflows, and numerous downstream integrations requiring high availability.",

    architecture:
      "Designed a phased modernization strategy transitioning the monolithic application into a cloud-native .NET Core architecture hosted on Azure App Service. Integrated Azure SQL Database, Azure Key Vault, Application Insights, and Azure DevOps CI/CD pipelines.",

    approach:
      "A phased modernization approach was chosen instead of a big-bang rewrite to reduce business risk, enable continuous delivery of business value, and validate migration success incrementally.",

    technologyRationale:
      ".NET Core provided improved performance, cross-platform support, and long-term maintainability. Azure App Service reduced infrastructure management overhead, while Azure SQL delivered managed scalability, backup, and disaster recovery capabilities.",

    tradeoffs:
      "A full microservices transformation was evaluated but deferred due to delivery timelines, operational complexity, and migration risk. A modular monolith provided an effective balance between maintainability and speed of delivery.",

    impact:
      "Improved application reliability, reduced deployment effort, accelerated release cycles, and established a cloud foundation for future modernization initiatives.",

    achievements: [
      "60% reduction in deployment effort",
      "Zero-downtime migration execution",
      "Improved platform scalability",
      "Enhanced monitoring and observability",
      "Established cloud-native delivery model"
    ],

    lessonsLearned:
      "Modernization success depends equally on governance, stakeholder alignment, and change management as on technical implementation.",

    leadership:
      "Led architecture planning, migration strategy, stakeholder communication, release governance, technical reviews, and mentoring throughout the transformation journey.",

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

    category: "Applied AI",

    title: "Azure OpenAI Document Automation",

    summary:
      "Enterprise knowledge discovery platform powered by Azure OpenAI and Azure AI Search.",

    problem:
      "Business users spent considerable time manually locating information across thousands of documents, resulting in slower decision-making and reduced operational efficiency.",

    scale:
      "Large enterprise document repositories containing structured and unstructured business content distributed across multiple departments and functional areas.",

    architecture:
      "Implemented a Retrieval-Augmented Generation (RAG) architecture combining Azure OpenAI, Azure AI Search, Azure Storage, and Azure Functions for document ingestion, indexing, retrieval, and AI-powered responses.",

    approach:
      "Instead of relying solely on generative AI, a RAG architecture was selected to ground responses using enterprise-approved content and improve answer accuracy.",

    technologyRationale:
      "Azure OpenAI provided enterprise-grade security and governance. Azure AI Search enabled semantic retrieval while Azure Functions supported scalable serverless processing for ingestion pipelines.",

    tradeoffs:
      "Pure LLM-based generation offered faster implementation but increased hallucination risks. The RAG architecture introduced additional complexity but significantly improved reliability and trustworthiness.",

    impact:
      "Reduced document search time, improved knowledge accessibility, increased productivity, and demonstrated practical enterprise AI adoption.",

    achievements: [
      "Accelerated information discovery",
      "Improved search relevance",
      "Enabled AI-powered knowledge retrieval",
      "Established reusable AI integration patterns",
      "Demonstrated enterprise GenAI adoption"
    ],

    lessonsLearned:
      "The quality of enterprise AI solutions is heavily dependent on data quality, governance, and retrieval accuracy rather than model capability alone.",

    leadership:
      "Defined AI adoption strategy, designed architecture patterns, collaborated with stakeholders, and established governance standards for enterprise AI initiatives.",

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

    category: "Distributed Systems",

    title: "High-Scale Asynchronous Data Ingestion Engine",

    summary:
      "Event-driven platform designed to process large volumes of business transactions reliably and efficiently.",

    problem:
      "Synchronous integrations struggled under growing transaction volumes, causing bottlenecks, failures, retries, and delayed downstream processing.",

    scale:
      "Millions of business events processed across multiple systems with strict requirements for reliability, fault tolerance, scalability, and operational visibility.",

    architecture:
      "Designed an event-driven architecture using Azure Service Bus, Azure Functions, asynchronous consumers, retry mechanisms, dead-letter queues, and monitoring pipelines.",

    approach:
      "An asynchronous messaging model was selected to decouple systems, eliminate bottlenecks, and enable independent scaling of processing components.",

    technologyRationale:
      "Azure Service Bus provided durable messaging, retry handling, dead-letter queues, and guaranteed delivery. Azure Functions enabled cost-efficient event-driven processing.",

    tradeoffs:
      "Asynchronous processing introduced eventual consistency and additional operational complexity. However, scalability, resilience, and reliability gains justified the approach.",

    impact:
      "Improved throughput, reduced processing delays, enhanced reliability, and enabled horizontal scalability without affecting dependent systems.",

    achievements: [
      "Improved processing throughput",
      "Reduced integration bottlenecks",
      "Enhanced fault tolerance",
      "Enabled horizontal scaling",
      "Improved operational monitoring"
    ],

    lessonsLearned:
      "Designing for failure is essential in distributed systems. Retry strategies, monitoring, and observability are as important as business functionality.",

    leadership:
      "Owned architecture design, integration standards, performance optimization initiatives, and implementation guidance across development teams.",

    techStack: [
      "Azure Service Bus",
      "Azure Functions",
      ".NET Core",
      "C#",
      "Azure Storage",
      "Application Insights",
      "SQL Server"
    ]
  },

  {
    id: 4,

    category: "Integration Platform",

    title: "Partner API Integration Platform",

    summary:
      "External-facing API ecosystem enabling rapid onboarding of strategic business partners.",

    problem:
      "Partner integrations required extensive manual effort, custom implementation work, and lengthy onboarding cycles that slowed business growth.",

    scale:
      "Multiple Tier-1 vendor integrations consuming enterprise APIs across business-critical processes and geographical regions.",

    architecture:
      "Developed a secure API platform with OAuth/JWT authentication, API governance, versioning strategy, monitoring, documentation standards, and onboarding frameworks.",

    approach:
      "A standardized API-first approach was adopted to improve consistency, accelerate onboarding, and reduce integration complexity.",

    technologyRationale:
      "ASP.NET Core Web API delivered performance and flexibility. OAuth and JWT ensured secure access while API management and OpenAPI documentation improved partner developer experience.",

    tradeoffs:
      "Introducing governance standards increased initial implementation effort but significantly reduced long-term maintenance and onboarding costs.",

    impact:
      "Accelerated partner onboarding, improved integration quality, enhanced API security, and enabled faster business expansion.",

    achievements: [
      "Reduced onboarding cycles from weeks to days",
      "Improved partner experience",
      "Enhanced API security",
      "Established API governance standards",
      "Increased integration consistency"
    ],

    lessonsLearned:
      "Developer experience is a critical success factor for external APIs. Documentation, standards, and governance are often more important than technology choices.",

    leadership:
      "Led API architecture, technical discussions with partners, governance implementation, and coordination across engineering and business teams.",

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

    category: "Technical Leadership",

    title: "Engineering Governance & Architecture Leadership",

    summary:
      "Driving engineering excellence through architecture governance, mentoring, cloud adoption, and delivery leadership.",

    problem:
      "Growing engineering teams faced challenges around inconsistent coding practices, architectural decisions, technical debt, and delivery predictability.",

    scale:
      "Cross-functional teams supporting multiple enterprise products, modernization initiatives, cloud programs, and shared engineering platforms.",

    architecture:
      "Established architecture review processes, technical decision records (ADRs), coding standards, CI/CD governance, and reusable architectural patterns based on Clean Architecture and DDD principles.",

    approach:
      "Focused on creating sustainable engineering practices and governance frameworks rather than relying solely on individual technical expertise.",

    technologyRationale:
      "Clean Architecture and Domain-Driven Design improved maintainability and scalability. CI/CD automation and governance reduced delivery risk and increased consistency.",

    tradeoffs:
      "Governance introduces additional review processes and upfront effort. However, it significantly improves long-term maintainability, quality, and team alignment.",

    impact:
      "Improved code quality, accelerated delivery predictability, strengthened architectural consistency, and increased engineering maturity.",

    achievements: [
      "Improved engineering standards",
      "Reduced code review turnaround time",
      "Strengthened architectural consistency",
      "Accelerated onboarding of developers",
      "Established sustainable engineering practices"
    ],

    lessonsLearned:
      "Strong engineering culture and technical leadership create greater long-term impact than individual technical contributions alone.",

    leadership:
      "Mentored developers, facilitated architecture review boards, guided design decisions, promoted cloud-native practices, and aligned engineering execution with business goals.",

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