export interface ArchitectureDiagram {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
}

export const architectures: ArchitectureDiagram[] = [
  {
    id: 1,
    title: "Enterprise Azure Migration",
    category: "Cloud Migration",
    image: "/images/architecture/azure-migration.png",
    description:
      "Modernization of legacy ASP applications into scalable cloud-native Azure solutions with secure deployment pipelines.",
    technologies: [
      ".NET Core",
      "Azure App Service",
      "Azure SQL",
      "Key Vault",
      "Azure DevOps",
    ],
  },

  {
    id: 2,
    title: "Azure OpenAI Document Automation",
    category: "Applied AI",
    image: "/images/architecture/rag-architecture.png",
    description:
      "Retrieval-Augmented Generation (RAG) solution enabling enterprise knowledge discovery using Azure OpenAI.",
    technologies: [
      "Azure OpenAI",
      "AI Search",
      "Azure Functions",
      ".NET 8",
      "Azure Storage",
    ],
  },

  {
    id: 3,
    title: "Asynchronous Data Ingestion",
    category: "Distributed Systems",
    image: "/images/architecture/event-driven.png",
    description:
      "Event-driven architecture designed for resilient, scalable and fault-tolerant transaction processing.",
    technologies: [
      "Azure Service Bus",
      "Azure Functions",
      "Application Insights",
      ".NET Core",
      "SQL Server",
    ],
  },

  {
    id: 4,
    title: "Partner API Platform",
    category: "Integration Platform",
    image: "/images/architecture/api-platform.png",
    description:
      "Secure external-facing API ecosystem supporting partner onboarding, governance and scalable integrations.",
    technologies: [
      "ASP.NET Core",
      "OAuth2",
      "JWT",
      "Azure API Management",
      "OpenAPI",
    ],
  },

  {
    id: 5,
    title: "Engineering Governance",
    category: "Architecture Governance",
    image: "/images/architecture/devops-governance.png",
    description:
      "Architecture governance framework covering CI/CD, engineering standards, ADRs and cloud delivery practices.",
    technologies: [
      "Azure DevOps",
      "GitHub",
      "CI/CD",
      "Clean Architecture",
      "DDD",
    ],
  },
];