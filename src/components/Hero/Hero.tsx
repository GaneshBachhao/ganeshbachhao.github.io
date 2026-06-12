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
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={() => {
                if (typeof window.gtag !== "undefined") {
                  window.gtag("event", "resume_download", {
                    event_category: "engagement",
                    event_label: "Resume PDF",
                  });
                }
              }}
            >
              Download Resume
            </a>

            <a
              href="https://linkedin.com/in/ganeshbachhao"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                window.gtag?.("event", "linkedin_click", {
                  event_category: "social",
                  event_label: "LinkedIn Profile",
                });
              }}
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/ganeshbachhao"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                window.gtag?.("event", "github_click", {
                  event_category: "social",
                  event_label: "GitHub Profile",
                });
              }}
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
