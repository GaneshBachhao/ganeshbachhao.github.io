export interface ArchitectureDiagram {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const architectures: ArchitectureDiagram[] =
  [
    {
      id: 1,
      title:
        "Enterprise Azure Migration",
      category:
        "Cloud Migration",
      image:
        "/images/architecture/azure-migration.png",
      description:
        "Legacy ASP modernization into Azure cloud platform.",
    },

    {
      id: 2,
      title:
        "Azure OpenAI Document Automation",
      category: "Applied AI",
      image:
        "/images/architecture/rag-architecture.png",
      description:
        "RAG architecture using Azure OpenAI and AI Search.",
    },

    {
      id: 3,
      title:
        "Asynchronous Data Ingestion",
      category:
        "Distributed Systems",
      image:
        "/images/architecture/event-driven.png",
      description:
        "Event-driven architecture using Azure Service Bus.",
    },

    {
      id: 4,
      title:
        "Partner API Platform",
      category:
        "Integration Platform",
      image:
        "/images/architecture/api-platform.png",
      description:
        "Secure external-facing API architecture.",
    },

    {
      id: 5,
      title:
        "Engineering Governance",
      category:
        "Architecture Governance",
      image:
        "/images/architecture/devops-governance.png",
      description:
        "CI/CD and engineering governance framework.",
    },
  ];