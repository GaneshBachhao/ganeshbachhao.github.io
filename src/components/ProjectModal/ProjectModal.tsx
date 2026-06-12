import { useEffect } from "react";
import type { Project } from "../../data/projects";
import "./ProjectModal.css";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (!project) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);

      document.body.style.overflow = "auto";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <span className="modal-category">{project.category}</span>

        <h2>{project.title}</h2>

        <p className="modal-summary">{project.summary}</p>

        <div className="modal-section">
          <h3>Business Problem</h3>
          <p>{project.problem}</p>
        </div>

        <div className="modal-section">
          <h3>Scale & Complexity</h3>
          <p>{project.scale}</p>
        </div>

        <div className="modal-section">
          <h3>Architecture Design</h3>
          <p>{project.architecture}</p>
        </div>

        <div className="modal-section">
          <h3>Why This Approach?</h3>
          <p>{project.approach}</p>
        </div>

        <div className="modal-section">
          <h3>Technology Decisions</h3>
          <p>{project.technologyRationale}</p>
        </div>

        <div className="modal-section">
          <h3>Tradeoffs Considered</h3>
          <p>{project.tradeoffs}</p>
        </div>

        <div className="modal-section">
          <h3>Impact Achieved</h3>
          <p>{project.impact}</p>
        </div>

        <div className="modal-section">
          <h3>Key Achievements</h3>

          <ul className="achievement-list">
            {project.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="modal-section">
          <h3>Lessons Learned</h3>
          <p>{project.lessonsLearned}</p>
        </div>

        <div className="modal-section">
          <h3>Leadership & Ownership</h3>
          <p>{project.leadership}</p>
        </div>

        <div className="modal-section">
          <h3>Technology Stack</h3>

          <div className="modal-tech-stack">
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
