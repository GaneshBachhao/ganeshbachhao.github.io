import "./CareerEvolution.css";

const CareerEvolution = () => {
  return (
    <section id="career" className="career-section">
      <div className="container">
        <h2 className="section-title">Leadership & Career Journey</h2>

        <p className="section-subtitle">
          Progression from software engineering to technical leadership, cloud
          architecture and enterprise transformation.
        </p>

        <div className="career-layout">
          {/* LEFT */}

          <div className="career-timeline">
            <div className="timeline-item">
              <span className="timeline-year">2012 - 2017</span>

              <h3>Software Engineer → Senior Software Engineer</h3>

              <p>
                Built enterprise applications, APIs, integrations and database
                solutions. Progressively took ownership of solution design,
                technical mentoring and large-scale delivery initiatives.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-year">2017 - 2025</span>

              <h3>Technology Lead → Architect Transition</h3>

              <p>
                Leading cloud modernization, distributed systems, Azure
                adoption, architecture governance and AI-driven initiatives
                while mentoring engineering teams and driving strategic
                technology decisions.
              </p>
            </div>
          </div>

          {/* RIGHT */}

          <div className="evolution-grid">
            <div className="evolution-card">
              <span className="phase-badge">Phase 1</span>

              <h3>Core Developer</h3>

              <ul>
                <li>.NET, Angular and Full Stack Development</li>
                <li>REST APIs and Enterprise Platforms</li>
                <li>Database Performance Optimization</li>
                <li>Security and Authentication</li>
              </ul>
            </div>

            <div className="evolution-card">
              <span className="phase-badge">Phase 2</span>

              <h3>Technology Lead</h3>

              <ul>
                <li>Team Leadership & Mentoring</li>
                <li>Delivery Governance</li>
                <li>Code Reviews & Engineering Standards</li>
                <li>Stakeholder Alignment</li>
              </ul>
            </div>

            <div className="evolution-card">
              <span className="phase-badge">Phase 3</span>

              <h3>Architecture & AI</h3>

              <ul>
                <li>Clean Architecture & DDD</li>
                <li>Cloud Native Solutions</li>
                <li>Azure OpenAI Adoption</li>
                <li>Architecture Governance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerEvolution;
