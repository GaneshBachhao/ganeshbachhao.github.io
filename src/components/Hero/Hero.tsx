import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Ganesh Bachhao</h1>

          <h2>Technology Lead | .NET | Azure | AI Solutions</h2>

          <p>
            Building scalable enterprise systems, cloud-native applications, and
            AI-powered solutions.
          </p>

          <div className="hero-buttons">
            <a
              href="/resume/Ganesh_Bachhao_CV.pdf"
              download
              className="btn-primary"
            >
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/in/ganeshbachhao/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/ganeshbachhao"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
