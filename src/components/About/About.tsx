import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <p className="about-summary">
          Technology Lead with 10+ years of experience designing, developing,
          and modernizing enterprise applications using .NET, Angular, Azure and
          AI technologies. My career has evolved from hands-on software
          engineering to technical leadership and architecture-driven decision
          making, delivering scalable cloud-native solutions across healthcare,
          manufacturing and e-commerce domains.
        </p>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>10+</h3>

            <p>Years Experience</p>
          </div>

          <div className="highlight-card">
            <h3>20+</h3>

            <p>Enterprise Applications</p>
          </div>

          <div className="highlight-card">
            <h3>.NET + Azure</h3>

            <p>Technology Focus</p>
          </div>

          <div className="highlight-card">
            <h3>AI Ready</h3>

            <p>Azure OpenAI Solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
