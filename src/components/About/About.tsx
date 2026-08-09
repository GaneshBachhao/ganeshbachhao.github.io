import "./About.css";

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <p className="section-subtitle">
          Combining hands-on engineering, technical leadership and cloud expertise
          to build enterprise systems that are scalable, maintainable and practical.
        </p>

        <div className="about-grid">
          <div className="about-content">
            <p>
              I am a Senior .NET and Azure Engineer and Technology Lead with 12+
              years of experience designing, modernizing and delivering enterprise
              applications. My work has covered e-commerce, manufacturing and
              healthcare, with a strong focus on backend engineering, APIs, cloud
              platforms, distributed systems and reliable data processing.
            </p>

            <p>
              My experience has evolved from hands-on application development into
              technical leadership and architecture responsibilities. I have worked
              on legacy modernization, Azure adoption, microservices, CI/CD,
              performance engineering and engineering practices that help teams
              deliver software more consistently.
            </p>

            <p>
              I am also interested in practical enterprise AI. My recent work and
              portfolio solutions explore Azure OpenAI, document intelligence,
              knowledge retrieval and AI-assisted workflows, with attention to
              grounding, data access, human oversight and operational reliability.
            </p>

            <div className="about-metrics">
              <div className="metric-card">
                <h3>12+</h3>
                <span>Years of enterprise engineering</span>
              </div>
              <div className="metric-card">
                <h3>1M+ / Day</h3>
                <span>High-volume data processing</span>
              </div>
              <div className="metric-card">
                <h3>60%</h3>
                <span>Deployment-time reduction</span>
              </div>
              <div className="metric-card">
                <h3>30%</h3>
                <span>API response-time improvement</span>
              </div>
              <div className="metric-card">
                <h3>.NET + Azure</h3>
                <span>Core engineering focus</span>
              </div>
              <div className="metric-card">
                <h3>3 Domains</h3>
                <span>Healthcare, manufacturing and e-commerce</span>
              </div>
            </div>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Cloud Transformation</h3>
              <p>
                Modernizing legacy applications and moving suitable workloads toward
                Azure-based architectures, with emphasis on maintainability,
                deployment automation, observability and controlled migration.
              </p>
            </div>

            <div className="highlight-card">
              <h3>Architecture & Design</h3>
              <p>
                Designing APIs, services and distributed systems around practical
                requirements for scalability, reliability, security and long-term
                maintainability rather than choosing architecture patterns in
                isolation.
              </p>
            </div>

            <div className="highlight-card">
              <h3>Technical Leadership</h3>
              <p>
                Providing hands-on technical direction through architecture reviews,
                engineering standards, technical decisions, code quality practices,
                mentoring and delivery collaboration.
              </p>
            </div>

            <div className="highlight-card">
              <h3>Applied AI</h3>
              <p>
                Exploring practical enterprise AI scenarios such as document
                processing, knowledge retrieval and incident assistance while keeping
                grounding, access control and human validation in the design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
