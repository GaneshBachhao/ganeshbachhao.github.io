import "./About.css";

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <p className="section-subtitle">
          Combining engineering depth, technical leadership, and cloud expertise
          to deliver scalable enterprise solutions.
        </p>

        <div className="about-grid">
          <div className="about-content">
            <p>
              I am a IT Professional with over 12+ years of experience building
              enterprise software on the Microsoft technology stack. My
              background combines hands-on engineering with technical
              leadership, enabling me to contribute across solution design,
              architecture decisions, and software delivery.
            </p>

            <p>
              My core expertise lies in .NET, Azure, distributed systems, cloud
              modernization, and enterprise application development. Over the
              years, I have designed and delivered business-critical solutions,
              integrated complex platforms, and helped teams adopt modern
              engineering practices.
            </p>

            <p>
              I enjoy solving complex technical challenges, improving system
              reliability, mentoring engineers, and turning business
              requirements into practical technology solutions. My focus is on
              building maintainable systems that balance business needs,
              scalability, and long-term sustainability.
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
                <h3>.NET + Azure</h3>
                <span>Core Technology Stack</span>
              </div>

              <div className="metric-card">
                <h3>AI</h3>
                <span>Azure OpenAI & AI Search</span>
              </div>

              <div className="metric-card">
                <h3>3 Domains</h3>
                <span>Healthcare • Manufacturing • E-Commerce</span>
              </div>

              <div className="metric-card">
                <h3>IT Professional</h3>
                <span>
                  Design, Develop, Integrate, Deliver, Lead & Transform
                </span>
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
              <h3>Architecture & Design</h3>
              <p>
                Designing reliable, maintainable, and scalable solutions using
                modern engineering and architectural practices.
              </p>
            </div>

            <div className="highlight-card">
              <h3>Technical Leadership</h3>
              <p>
                Mentoring engineers, improving delivery quality, and helping
                teams build sustainable engineering practices.
              </p>
            </div>

            <div className="highlight-card">
              <h3>Applied AI</h3>
              <p>
                Leveraging Azure OpenAI and AI Search to build practical
                AI-powered business solutions and automation workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
