import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>

        <p className="section-subtitle">
          Open to Senior .NET, Azure, Technical Lead, and Solution Architect
          opportunities.
        </p>

        <div className="contact-grid">
          <a href="mailto:ganesh.bachhao@gmail.com" className="contact-card">
            <h3>Email</h3>
            <p>ganesh.bachhao@gmail.com</p>
          </a>

          <a
            href="https://linkedin.com/in/ganeshbachhao"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <h3>LinkedIn</h3>
            <p>Professional Network</p>
          </a>

          <a
            href="https://github.com/ganeshbachhao"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <h3>GitHub</h3>
            <p>Projects & Portfolio</p>
          </a>

          <div className="contact-card">
            <h3>Location</h3>
            <p>Pune,India </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
