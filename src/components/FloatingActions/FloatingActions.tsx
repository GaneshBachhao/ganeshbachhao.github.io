import "./FloatingActions.css";

import { FaLinkedinIn, FaGithub, FaFilePdf, FaEnvelope } from "react-icons/fa";

const FloatingActions = () => {
  return (
    <div className="floating-actions">
      {/* RESUME */}

      <a
        href="/resume/Ganesh_Bachhao_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-action resume-action"
        aria-label="Resume"
        onClick={() => {
          window.gtag?.("event", "floating_resume_click", {
            event_category: "floating_actions",
            event_label: "Resume Download",
          });
        }}
      >
        <FaFilePdf />
        <span>Resume</span>
      </a>

      {/* LINKEDIN */}

      <a
        href="https://linkedin.com/in/ganeshbachhao"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-action"
        aria-label="LinkedIn"
        onClick={() => {
          window.gtag?.("event", "floating_linkedin_click", {
            event_category: "floating_actions",
            event_label: "LinkedIn Profile",
          });
        }}
      >
        <FaLinkedinIn />
        <span>LinkedIn</span>
      </a>

      {/* GITHUB */}

      <a
        href="https://github.com/ganeshbachhao"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-action"
        aria-label="GitHub"
        onClick={() => {
          window.gtag?.("event", "floating_github_click", {
            event_category: "floating_actions",
            event_label: "GitHub Profile",
          });
        }}
      >
        <FaGithub />
        <span>GitHub</span>
      </a>

      {/* CONTACT */}

      <a
        href="#contact"
        className="floating-action"
        aria-label="Contact"
        onClick={() => {
          window.gtag?.("event", "floating_contact_click", {
            event_category: "floating_actions",
            event_label: "Contact Section",
          });
        }}
      >
        <FaEnvelope />
        <span>Contact</span>
      </a>
    </div>
  );
};

export default FloatingActions;
