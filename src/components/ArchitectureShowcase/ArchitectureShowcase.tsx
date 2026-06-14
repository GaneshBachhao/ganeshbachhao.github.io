import { useState } from "react";

import "./ArchitectureShowcase.css";

import { architectures } from "../../data/architectures";
import type { ArchitectureDiagram } from "../../data/architectures";

import ArchitectureLightbox from "../ArchitectureLightbox/ArchitectureLightbox";

const ArchitectureShowcase = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const handleOpen = (item: ArchitectureDiagram) => {
    setSelectedImage(item.image);
    setSelectedTitle(item.title);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setSelectedTitle("");
  };

  return (
    <section id="architecture" className="section architecture-section">
      <div className="container">
        <h2 className="section-title">Architecture Showcase</h2>

        <p className="section-subtitle">
          Cloud-native architectures, AI-powered platforms, distributed systems
          and governance models designed for enterprise-scale applications.
        </p>

        <div className="architecture-grid">
          {architectures.map((item) => (
            <div
              key={item.id}
              className="architecture-card"
              onClick={() => handleOpen(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="architecture-image"
              />

              <div className="architecture-content">
                <span className="architecture-category">{item.category}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="architecture-tags">
                  {item.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <button className="architecture-button" type="button">
                  View Diagram
                </button>
              </div>
            </div>
          ))}
        </div>

        <ArchitectureLightbox
          image={selectedImage}
          title={selectedTitle}
          onClose={handleClose}
        />
      </div>
    </section>
  );
};

export default ArchitectureShowcase;
