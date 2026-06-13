import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-content">
            <p>
              Technology Lead with 10+ years of experience designing and
              delivering enterprise software solutions across E-Commerce,
              Manufacturing, and Healthcare domains.
            </p>

            <p>
              My expertise spans Cloud Modernization, Distributed Systems,
              Solution Architecture, and Applied AI with a strong focus on
              Microsoft Azure and the .NET ecosystem.
            </p>

            <p>
              I enjoy transforming complex business challenges into scalable,
              maintainable, and cloud-native solutions while mentoring
              engineering teams and driving architecture-led delivery.
            </p>

            <div className="about-tech-stack">
              <span>.NET 8</span>
              <span>C#</span>
              <span>Azure</span>
              <span>Angular</span>
              <span>TypeScript</span>
              <span>Azure OpenAI</span>
              <span>Azure AI Search</span>
              <span>Azure Service Bus</span>
              <span>Microservices</span>
              <span>DDD</span>
              <span>CI/CD</span>
            </div>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Cloud Modernization</h3>
              <p>
                Transforming legacy enterprise applications into scalable
                cloud-native Azure solutions.
              </p>
            </div>

            <div className="highlight-card">
              <h3>Distributed Systems</h3>
              <p>
                Designing event-driven architectures using Azure Service Bus,
                asynchronous messaging and resilient integration patterns.
              </p>
            </div>

            <div className="highlight-card">
              <h3>Solution Architecture</h3>
              <p>
                Applying Clean Architecture, DDD, Microservices and
                architectural governance principles.
              </p>
            </div>

            <div className="highlight-card">
              <h3>Applied AI</h3>
              <p>
                Building enterprise AI solutions using Azure OpenAI, AI Search
                and Retrieval-Augmented Generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
