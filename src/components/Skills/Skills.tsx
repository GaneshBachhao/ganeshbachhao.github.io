import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>

        <p className="section-subtitle">
          Enterprise software engineering, cloud architecture, AI integration
          and delivery leadership.
        </p>

        <div className="skills-grid">
          {/* Backend */}

          <div className="skill-card">
            <h3>Backend Development</h3>

            <div className="skill-tags">
              <span>.NET 8</span>
              <span>C#</span>
              <span>ASP.NET Core</span>
              <span>Web API</span>
              <span>Entity Framework</span>
              <span>LINQ</span>
            </div>
          </div>

          {/* Frontend */}

          <div className="skill-card">
            <h3>Frontend Engineering</h3>

            <div className="skill-tags">
              <span>Angular</span>
              <span>TypeScript</span>
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
          </div>

          {/* Cloud */}

          <div className="skill-card">
            <h3>Cloud & AI</h3>

            <div className="skill-tags">
              <span>Microsoft Azure</span>
              <span>Azure Functions</span>
              <span>Azure Service Bus</span>
              <span>Azure OpenAI</span>
              <span>AI Search</span>
            </div>
          </div>

          {/* DevOps */}

          <div className="skill-card">
            <h3>DevOps & Delivery</h3>

            <div className="skill-tags">
              <span>Azure DevOps</span>
              <span>GitHub</span>
              <span>CI/CD</span>
              <span>Agile</span>
              <span>Scrum</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
