import "./CareerEvolution.css";

const CareerEvolution = () => {
  return (
    <section id="career" className="career-section">
      <div className="container">
        <h2 className="section-title">
          Professional Experience & Leadership Evolution
        </h2>

        <div className="evolution-grid">
          {/* Phase 1 */}

          <div className="evolution-card">
            <span className="phase-badge">Phase 1</span>

            <h3>Core Developer</h3>

            <p className="phase-subtitle">
              Building enterprise applications and technical foundations
            </p>

            <ul>
              <li>Full-stack engineering with .NET, Angular and TypeScript</li>
              <li>Built scalable REST APIs and enterprise platforms</li>
              <li>Optimized SQL Server and MySQL performance</li>
              <li>Implemented OAuth/JWT security patterns</li>
            </ul>
          </div>

          <div className="evolution-arrow">→</div>

          {/* Phase 2 */}

          <div className="evolution-card">
            <span className="phase-badge">Phase 2</span>

            <h3>Technology Lead</h3>

            <p className="phase-subtitle">
              Team leadership, governance and delivery ownership
            </p>

            <ul>
              <li>Managed and mentored teams of 6+ engineers</li>
              <li>Owned coding standards and review governance</li>
              <li>Improved sprint execution and delivery quality</li>
              <li>Aligned stakeholders with engineering teams</li>
            </ul>
          </div>

          <div className="evolution-arrow">→</div>

          {/* Phase 3 */}

          <div className="evolution-card">
            <span className="phase-badge">Phase 3</span>

            <h3>Architecture & AI</h3>

            <p className="phase-subtitle">
              Solution design, cloud architecture and AI adoption
            </p>

            <ul>
              <li>Applied Clean Architecture and DDD principles</li>
              <li>Designed Azure Functions & Service Bus solutions</li>
              <li>Produced architecture diagrams and ADRs</li>
              <li>Defined Azure OpenAI and AI Search patterns</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerEvolution;
