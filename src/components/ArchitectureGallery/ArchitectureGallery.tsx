import "./ArchitectureGallery.css";

const architectures = [
  {
    title: "Enterprise Azure Migration",
    image: "/images/architecture/azure-migration.png",

    description:
      "Modernization of legacy applications into cloud-native Azure services with zero downtime deployment.",
  },

  {
    title: "Azure OpenAI RAG Architecture",
    image: "/images/architecture/rag-architecture.png",

    description:
      "Retrieval-Augmented Generation using Azure OpenAI and AI Search for semantic knowledge discovery.",
  },

  {
    title: "Event Driven Processing",
    image: "/images/architecture/event-driven.png",

    description:
      "Asynchronous messaging architecture leveraging Azure Service Bus and Azure Functions.",
  },

  {
    title: "CI/CD Delivery Pipeline",
    image: "/images/architecture/cicd-pipeline.png",

    description:
      "Automated build, testing and deployment pipelines using GitHub and Azure DevOps.",
  },
];

const ArchitectureGallery = () => {
  return (
    <section id="architecture" className="architecture-section">
      <div className="container">
        <h2 className="section-title">Architecture Gallery</h2>

        <p className="section-subtitle">
          Solution architecture patterns, cloud migration designs, AI
          integrations and delivery pipelines.
        </p>

        <div className="architecture-grid">
          {architectures.map((item) => (
            <div key={item.title} className="architecture-card">
              <img src={item.image} alt={item.title} />

              <div className="architecture-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureGallery;
