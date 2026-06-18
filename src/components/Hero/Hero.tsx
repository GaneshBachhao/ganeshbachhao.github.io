import { useEffect, useState } from "react";
import "./Hero.css";

const titles = [
  "Senior Full Stack Engineer",
  "Senior .NET Developer",
  ".NET Backend Developer",
  "Technology Lead",
  ".NET & Azure Specialist",
  "Cloud Modernization Engineer",
  "Enterprise Application Developer",
  "Azure Solutions Developer",
  "Applied AI Developer",
];

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(titles[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % titles.length;
      setCurrentTitle(titles[index]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* LEFT SIDE */}

        <div className="hero-left">
          <span className="hero-badge">12+ Years Experience</span>

          <h1>Ganesh Bachhao</h1>

          <h2 className="dynamic-title">{currentTitle}</h2>

          <p className="hero-description">
            Over the last 12+ years, I've designed, built, and modernized
            enterprise applications using .NET and Azure. My experience spans
            backend engineering, cloud modernization, technical leadership, and
            AI-enabled solutions, with AI-assisted development, a strong focus
            on delivering scalable, maintainable, and business-critical systems.
            <span>Open to Remote, Hybrid Opportunities</span>
          </p>

          {/* Recruiter Tags */}

          <div className="hero-tags">
            <span>.NET</span>
            <span>Azure</span>
            <span>Angular</span>
            <span>RESTful API</span>
            <span>Cloud Migration</span>
            <span>Azure OpenAI</span>
            <span>Tech Leadership</span>
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
              Download Resume
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

        {/* RIGHT SIDE */}

        <div className="hero-right">
          <div className="hero-right-header">Quick Facts</div>

          <div className="hero-card">
            <h3>12+</h3>
            <p>Years Experience</p>
          </div>

          <div className="hero-card">
            <h3>15+</h3>
            <p>Enterprise Applications</p>
          </div>

          <div className="hero-card">
            <h3>.NET + Azure</h3>
            <p>Primary Technology Focus</p>
          </div>

          <div className="hero-card">
            <h3>AI Ready</h3>
            <p>Azure OpenAI Solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
