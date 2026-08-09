import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <span className="hero-badge">SENIOR .NET & AZURE ENGINEER · TECHNOLOGY LEAD</span>

          <h1>Ganesh Bachhao</h1>

          <h2>Cloud & AI Solutions</h2>

          <p className="hero-description">
            I design, modernize and deliver scalable enterprise applications using
            C#, .NET, Angular and Microsoft Azure. My experience spans backend
            engineering, cloud modernization, distributed systems, technical
            leadership and practical AI solutions for enterprise workflows.
          </p>

          <p className="hero-opportunity">
            Open to remote and hybrid opportunities involving enterprise .NET and
            Azure engineering, technical leadership, architecture and practical AI.
          </p>

          <div className="hero-tags" aria-label="Core capabilities">
            <span>.NET</span>
            <span>Azure</span>
            <span>Angular</span>
            <span>REST APIs</span>
            <span>Cloud Modernization</span>
            <span>Azure OpenAI</span>
            <span>Technical Leadership</span>
          </div>

          <div className="hero-buttons">
            <a
              href="/resume/Ganesh_Bachhao_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onClick={() => {
                window.gtag?.("event", "resume_download", {
                  event_category: "resume",
                  event_label: "Hero Resume Download",
                });
              }}
            >
              View Resume
            </a>

            <a href="#projects" className="btn-secondary">
              Explore My Work
            </a>

            <a
              href="https://linkedin.com/in/ganeshbachhao"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/ganeshbachhao"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-right" aria-label="Engineering focus">
          <div className="hero-right-header">Engineering Focus</div>

          <article className="hero-card">
            <h3>Enterprise</h3>
            <p>Business-critical applications, APIs and modernization.</p>
          </article>

          <article className="hero-card">
            <h3>Azure</h3>
            <p>Cloud-native services, delivery automation and observability.</p>
          </article>

          <article className="hero-card">
            <h3>Architecture</h3>
            <p>Distributed systems designed around scalability and reliability.</p>
          </article>

          <article className="hero-card">
            <h3>AI</h3>
            <p>Practical enterprise AI with grounding and human oversight.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Hero;
