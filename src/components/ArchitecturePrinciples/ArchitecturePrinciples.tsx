import "./ArchitecturePrinciples.css";

const principles = [
  {
    title: "Cloud First",
    icon: "☁️",
    description:
      "Leverage managed cloud services to improve scalability, resilience and operational efficiency.",
  },

  {
    title: "Automation First",
    icon: "⚙️",
    description:
      "Automate infrastructure, deployments, testing and monitoring to reduce manual effort and increase reliability.",
  },

  {
    title: "Security By Design",
    icon: "🔒",
    description:
      "Integrate authentication, authorization, secrets management and compliance considerations from day one.",
  },

  {
    title: "Observability Everywhere",
    icon: "📊",
    description:
      "Design systems with logging, monitoring, tracing and alerting built into the architecture.",
  },

  {
    title: "API First",
    icon: "🔗",
    description:
      "Create reusable and well-governed APIs that enable seamless integration across platforms and partners.",
  },

  {
    title: "Event-Driven Integration",
    icon: "📨",
    description:
      "Use asynchronous messaging patterns to improve scalability, resilience and decoupling.",
  },

  {
    title: "AI-Augmented Solutions",
    icon: "🤖",
    description:
      "Adopt practical AI capabilities to improve productivity, knowledge discovery and business outcomes.",
  },

  {
    title: "Continuous Learning",
    icon: "📚",
    description:
      "Stay current with cloud technologies, AI innovation, architecture patterns and engineering best practices.",
  },
];

const ArchitecturePrinciples = () => {
  return (
    <section id="principles" className="principles-section">
      <div className="container">
        <h2 className="section-title">Architecture Principles</h2>

        <p className="section-subtitle">
          Core engineering and architecture principles that guide my design
          decisions across cloud, AI and enterprise systems.
        </p>

        <div className="principles-grid">
          {principles.map((item) => (
            <div key={item.title} className="principle-card">
              <div className="principle-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitecturePrinciples;
