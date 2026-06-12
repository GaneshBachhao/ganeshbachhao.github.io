import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <p className="about-summary">
          I am experienced IT professional specializing in building resilient,
          enterprise-grade distributed systems. My architectural philosophy is
          rooted in Clean Architecture, Domain-Driven Design (DDD), and
          Microservices, ensuring that the software I deliver is highly
          scalable, maintainable, and aligned with complex business domains. On
          the backend, I leverage the power of the .NET ecosystem (C#, ASP.NET
          MVC, EF Core) to engineer high-throughput REST APIs and event-driven
          architectures. On the frontend, I craft type-safe, responsive, and
          highly performant user interfaces using Angular and TypeScript. My
          cloud expertise is centered entirely on Microsoft Azure, where I
          design serverless workloads, robust messaging topologies, and
          integrate cutting-edge Azure OpenAI / AI Search models to deliver
          intelligent, production-ready applications. Driven by DevOps culture,
          I treat automation as a first-class citizen using Azure DevOps and
          GitHub CI/CD to enforce rapid, stable delivery loops.
        </p>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>10+</h3>

            <p>Years Experience</p>
          </div>

          <div className="highlight-card">
            <h3>20+</h3>

            <p>Enterprise Applications</p>
          </div>

          <div className="highlight-card">
            <h3>.NET + Azure</h3>

            <p>Technology Focus</p>
          </div>

          <div className="highlight-card">
            <h3>AI Ready</h3>

            <p>Azure OpenAI Solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
