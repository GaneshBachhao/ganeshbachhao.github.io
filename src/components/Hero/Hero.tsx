import { useEffect, useState } from "react";
import "./Hero.css";

const titles = [
  "Senior Full Stack Engineer",
  ".NET Backend Developer",
  "Senior .NET Developer",
  ".NET & Azure Specialist",
  "Cloud Solution Designer",
  "AI Solutions Engineer",
  ".NET Gen AI Developer",
  "Technology Lead",
  ".NET/Technology Architect",
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
            Building scalable enterprise systems, cloud-native applications,
            distributed architectures and AI-powered solutions across
            E-Commerce, Manufacturing and Healthcare domains.
          </p>

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
            <p>Technology Focus</p>
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
