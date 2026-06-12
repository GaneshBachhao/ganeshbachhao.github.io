import { useState } from "react";
import "./FeaturedProjects.css";

import { projects, type Project } from "../../data/projects";

import ProjectModal from "../ProjectModal/ProjectModal";

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="projects-section">
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

              <p className="project-summary">{project.summary}</p>

              <button
                className="project-button"
                onClick={() => setSelectedProject(project)}
              >
                View Case Study
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
