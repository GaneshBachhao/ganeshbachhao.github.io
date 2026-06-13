import "./TechnicalExpertise.css";

const TechnicalExpertise = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technology Expertise</h2>

        <p className="section-subtitle">
          Enterprise software engineering, cloud modernization, solution
          architecture, AI integration, and technical leadership across the
          Microsoft technology ecosystem.
        </p>

        <div className="skills-grid">
          {/* Backend */}

          <div className="skill-card featured-skill">
            <h3>⚙️ Enterprise Backend Engineering</h3>

            <div className="skill-tags">
              <span>C#</span>
              <span>.NET</span>
              <span>ASP.NET Core</span>
              <span>REST APIs</span>
              <span>Entity Framework</span>
              <span>Distributed Systems</span>
            </div>
          </div>

          {/* Frontend */}

          <div className="skill-card">
            <h3>🎨 Frontend Engineering</h3>

            <div className="skill-tags">
              <span>Angular</span>
              <span>TypeScript</span>
              <span>RxJS</span>
              <span>Component Architecture</span>
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
          </div>

          {/* Azure */}

          <div className="skill-card">
            <h3>☁️ Cloud-Native Azure Solutions</h3>

            <div className="skill-tags">
              <span>Azure App Service</span>
              <span>Azure Functions</span>
              <span>Azure Service Bus</span>
              <span>Azure Key Vault</span>
              <span>Azure Storage</span>
              <span>Application Insights</span>
            </div>
          </div>
          {/* DevOps */}

          <div className="skill-card">
            <h3>🚀 DevOps & Delivery</h3>

            <div className="skill-tags">
              <span>Azure DevOps</span>
              <span>GitHub</span>
              <span>CI/CD</span>
              <span>Release Management</span>
              <span>Agile Delivery</span>
            </div>
          </div>

          {/* AI */}

          <div className="skill-card">
            <h3>🤖 Applied AI Engineering</h3>

            <div className="skill-tags">
              <span>Azure OpenAI</span>
              <span>GPT-4 Integration</span>
              <span>AI Search</span>
              <span>RAG</span>
              <span>Prompt Engineering</span>
              <span>GitHub Copilot</span>
            </div>
          </div>
          {/* Architecture */}

          <div className="skill-card">
            <h3>🏗️ Solution Architecture</h3>

            <div className="skill-tags">
              <span>Clean Architecture</span>
              <span>DDD</span>
              <span>CQRS</span>
              <span>Event-Driven Design</span>
              <span>SOLID Principles</span>
              <span>Design Patterns</span>
            </div>
          </div>

          {/* Security */}

          <div className="skill-card">
            <h3>🔒 Security & Governance</h3>

            <div className="skill-tags">
              <span>OAuth2</span>
              <span>JWT</span>
              <span>Zero Trust</span>
              <span>Secure Configuration</span>
              <span>Architecture Governance</span>
            </div>
          </div>

          {/* Leadership */}

          <div className="skill-card">
            <h3>👥 Leadership & Mentoring</h3>

            <div className="skill-tags">
              <span>Technical Leadership</span>
              <span>Code Reviews</span>
              <span>Technical Mentoring</span>
              <span>Cross-Functional Planning</span>
              <span>Stakeholder Collaboration</span>
              <span>Engineering Standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
