import { useState } from "react";
import "./FeaturedProjects.css";

import { projects, type Project } from "../../data/projects";
import ProjectModal from "../ProjectModal/ProjectModal";

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <p className="section-subtitle">
          Enterprise modernization, cloud transformation, AI innovation and
          technical leadership.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <span className="project-badge">{project.category}</span>

              <h3>{project.title}</h3>

              {/* Top Achievements */}

              <ul className="project-achievements">
                {project.achievements.slice(0, 3).map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>

              {/* Top Technologies */}

              <div className="project-tech-stack">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} className="project-tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="project-summary">{project.summary}</p>

              <button
                className="project-button"
                onClick={() => setSelectedProject(project)}
              >
                View Architecture Case Study
              </button>
            </div>
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default FeaturedProjects;
