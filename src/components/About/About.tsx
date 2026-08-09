import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="eyebrow">ABOUT ME</span>

          <h2>Engineering Experience with an Enterprise Mindset</h2>

          <p className="section-subtitle">
            Combining hands-on engineering, technical leadership and cloud
            expertise to build enterprise systems that are scalable,
            maintainable and practical.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <p>
              I am a Senior .NET and Azure Engineer and Technology Lead with 12+
              years of experience designing, modernizing and delivering
              enterprise applications. My experience spans e-commerce,
              manufacturing and healthcare, with a strong focus on backend
              engineering, APIs, cloud platforms, distributed systems and
              reliable data processing.
            </p>

            <p>
              My career has evolved from hands-on application development into
              technical leadership and architecture responsibilities. I have
              worked on legacy modernization, Azure adoption, distributed
              systems, CI/CD, performance engineering and engineering practices
              that help teams deliver software more consistently.
            </p>

            <p>
              I also apply practical enterprise AI to areas such as document
              processing, knowledge retrieval and AI-assisted workflows. My
              approach focuses on grounding, data access, security, human
              oversight and operational reliability rather than treating AI as a
              standalone technology.
            </p>

            <div className="about-approach">
              <h3>Engineering Approach</h3>

              <div className="approach-grid">
                <div className="approach-item">
                  <strong>Understand the problem</strong>
                  <span>
                    Start with business requirements, constraints and expected
                    outcomes before selecting technology.
                  </span>
                </div>

                <div className="approach-item">
                  <strong>Design for the context</strong>
                  <span>
                    Choose architecture patterns based on scalability,
                    reliability, security and maintainability requirements.
                  </span>
                </div>

                <div className="approach-item">
                  <strong>Deliver incrementally</strong>
                  <span>
                    Prefer practical modernization and automation strategies
                    that reduce delivery and operational risk.
                  </span>
                </div>

                <div className="approach-item">
                  <strong>Measure the outcome</strong>
                  <span>
                    Use performance, reliability, delivery and operational
                    signals to validate engineering decisions.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Cloud Transformation</h3>
              <p>
                Modernizing legacy applications and moving suitable workloads
                toward Azure-based architectures, with emphasis on
                maintainability, deployment automation, observability and
                controlled migration.
              </p>
            </div>

            <div className="highlight-card">
              <h3>Architecture & Design</h3>
              <p>
                Designing APIs, services and distributed systems around
                practical requirements for scalability, reliability, security
                and long-term maintainability rather than choosing patterns in
                isolation.
              </p>
            </div>

            <div className="highlight-card">
              <h3>Technical Leadership</h3>
              <p>
                Providing hands-on technical direction through architecture
                reviews, engineering standards, technical decisions, code
                quality practices, mentoring and delivery collaboration.
              </p>
            </div>

            <div className="highlight-card">
              <h3>Applied AI</h3>
              <p>
                Applying practical enterprise AI to scenarios such as document
                processing, knowledge retrieval and incident assistance while
                keeping grounding, access control and human validation in the
                design.
              </p>
            </div>

            <div className="about-domains">
              <span>Enterprise Domains</span>
              <strong>E-commerce · Manufacturing · Healthcare</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
