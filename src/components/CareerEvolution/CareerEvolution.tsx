import "./CareerEvolution.css";

const CareerEvolution = () => {
  return (
    <section id="career" className="career-section">
      <div className="container">
        <h2 className="section-title">
          Professional Experience & Leadership Evolution
        </h2>

        {/* Phase 1 */}

        <div className="evolution-card">
          <div className="phase-header">
            <span className="phase-badge">Phase 1</span>

            <h3>Core Developer</h3>
          </div>

          <ul>
            <li>
              Full-stack engineering using .NET Core, C#, Angular and
              TypeScript.
            </li>

            <li>Built scalable REST APIs and enterprise web applications.</li>

            <li>
              Optimized SQL Server and MySQL performance reducing CPU usage.
            </li>

            <li>
              Implemented OAuth/JWT authentication and modern development
              practices.
            </li>
          </ul>
        </div>

        {/* Phase 2 */}

        <div className="evolution-card">
          <div className="phase-header">
            <span className="phase-badge">Phase 2</span>

            <h3>Tech Lead</h3>
          </div>

          <ul>
            <li>Managed and mentored teams of 6+ developers.</li>

            <li>Owned coding standards and code review governance.</li>

            <li>Improved sprint delivery and technical alignment.</li>

            <li>
              Acted as technical liaison between stakeholders and engineering
              teams.
            </li>
          </ul>
        </div>

        {/* Phase 3 */}

        <div className="evolution-card">
          <div className="phase-header">
            <span className="phase-badge">Phase 3</span>

            <h3>Architect Transition</h3>
          </div>

          <ul>
            <li>Applied Clean Architecture and Domain Driven Design.</li>

            <li>Designed Azure Functions and Service Bus integrations.</li>

            <li>Produced architecture diagrams and ADRs.</li>

            <li>
              Defined Azure OpenAI integration patterns and AI search solutions.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CareerEvolution;
