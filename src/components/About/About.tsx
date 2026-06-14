import "./About.css";

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <p className="section-subtitle">
          Combining engineering depth, architecture thinking and delivery
          leadership to build scalable enterprise solutions.
        </p>

        <div className="about-grid">
          <div className="about-content">
            <p>
              Technology Professional with 12+ years of experience designing,
              developing, and delivering enterprise software solutions across
              E-Commerce, Manufacturing, and Healthcare domains. Strong
              background in .NET, Azure, Angular, cloud modernization, API
              development, and distributed systems.
            </p>

            <p>
              Experienced in leading engineering teams, driving technical
              decisions, improving development practices, and delivering
              scalable business-critical applications. Passionate about solving
              complex technical challenges, mentoring developers, and building
              maintainable solutions that align technology with business goals.
            </p>

            <p>
              Currently focused on modern cloud-native development, enterprise
              integrations, AI-powered solutions, and technical leadership while
              remaining actively involved in architecture, coding, code reviews,
              and solution delivery.
            </p>

            <div className="about-metrics">
              <div className="metric-card">
                <h3>12+</h3>
                <span>Years Experience</span>
              </div>

              <div className="metric-card">
                <h3>15+</h3>
                <span>Enterprise Projects</span>
              </div>

              <div className="metric-card">
                <h3>.Net + Azure</h3>
                <span>Cloud Expertise</span>
              </div>

              <div className="metric-card">
                <h3>AI</h3>
                <span>Modern Solutions</span>
              </div>
            </div>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Cloud Transformation</h3>
              <p>
                Modernizing legacy applications and enabling scalable
                cloud-native delivery on Microsoft Azure.
              </p>
            </div>

            <div className="highlight-card">
              <h3>Architecture Leadership</h3>
              <p>
                Driving solution design, architecture governance, technical
                standards and long-term technology strategy.
              </p>
            </div>

            <div className="highlight-card">
              <h3>Engineering Excellence</h3>
              <p>
                Mentoring teams, improving delivery quality and establishing
                sustainable engineering practices.
              </p>
            </div>

            <div className="highlight-card">
              <h3>Enterprise AI Adoption</h3>
              <p>
                Applying Azure OpenAI and AI Search to solve real business
                problems through practical AI solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
