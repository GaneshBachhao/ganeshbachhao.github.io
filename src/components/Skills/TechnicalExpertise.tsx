import "./TechnicalExpertise.css";

const expertise = [
  {
    title: "Enterprise Backend Engineering",
    description:
      "Designing and delivering enterprise APIs and backend services using C#, .NET and ASP.NET Core, with attention to maintainability, performance and reliable integration.",
    tags: ["C#", ".NET", "ASP.NET Core", "REST APIs", "Entity Framework", "Distributed Systems"],
    featured: true,
  },
  {
    title: "Cloud & Modernization",
    description:
      "Modernizing legacy applications and building Azure-based solutions with a focus on controlled migration, deployment automation and operational visibility.",
    tags: ["Azure App Service", "Azure Functions", "Service Bus", "Key Vault", "Azure Storage", "Application Insights"],
  },
  {
    title: "Architecture & Distributed Systems",
    description:
      "Designing service-oriented and distributed solutions with deliberate decisions around scalability, reliability, security and operational trade-offs.",
    tags: ["Microservices", "Clean Architecture", "DDD", "CQRS", "Event-Driven Design", "SOLID"],
  },
  {
    title: "Data & Integration",
    description:
      "Building high-volume processing workflows, APIs and integrations that support reliable data movement, validation, recovery and performance optimisation.",
    tags: ["SQL Server", "ETL", "Async Processing", "REST APIs", "Data Validation", "Performance Tuning"],
  },
  {
    title: "AI & Intelligent Automation",
    description:
      "Applying Azure AI and Azure OpenAI capabilities to practical enterprise scenarios such as document processing, knowledge retrieval and workflow assistance.",
    tags: ["Azure OpenAI", "AI Search", "RAG", "Semantic Retrieval", "Prompt Engineering", "GitHub Copilot"],
  },
  {
    title: "DevOps & Delivery",
    description:
      "Improving delivery consistency through CI/CD automation, source control, release practices and engineering collaboration across enterprise teams.",
    tags: ["Azure DevOps", "GitHub", "CI/CD", "Release Management", "Agile Delivery"],
  },
  {
    title: "Security & Governance",
    description:
      "Applying practical API security, secure configuration and architecture governance to enterprise solutions and shared engineering platforms.",
    tags: ["OAuth2", "JWT", "Secure Configuration", "API Security", "Architecture Governance"],
  },
  {
    title: "Technical Leadership",
    description:
      "Providing hands-on technical direction through architecture reviews, mentoring, code reviews, engineering standards and cross-functional planning.",
    tags: ["Technical Leadership", "Code Reviews", "Mentoring", "Technical Planning", "Stakeholder Collaboration"],
  },
];

const TechnicalExpertise = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Engineering Expertise</h2>
        <p className="section-subtitle">
          A capability-led view of the engineering areas I work across, with the
          technologies underneath each area providing the implementation context.
        </p>

        <div className="skills-grid">
          {expertise.map((item) => (
            <article
              className={`skill-card${item.featured ? " featured-skill" : ""}`}
              key={item.title}
            >
              {item.featured && <span className="skill-label">CORE</span>}
              <h3>{item.title}</h3>
              <p className="skill-description">{item.description}</p>
              <div className="skill-tags" aria-label={`${item.title} technologies`}>
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
