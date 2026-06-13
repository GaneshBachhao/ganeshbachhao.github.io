import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Let's Build Something Meaningful</h2>

        <p className="contact-intro">
          Open to Senior .NET, Azure, Technical Lead, Solution Architect and
          Cloud Engineering opportunities.
        </p>

        <div className="contact-focus">
          <div className="focus-item">
            <span>✓</span>
            <p>Solution Architecture & System Design</p>
          </div>

          <div className="focus-item">
            <span>✓</span>
            <p>Cloud Modernization & Azure Migration</p>
          </div>

          <div className="focus-item">
            <span>✓</span>
            <p>Enterprise .NET & Angular Engineering</p>
          </div>

          <div className="focus-item">
            <span>✓</span>
            <p>AI-Powered Enterprise Solutions</p>
          </div>
        </div>

        <div className="contact-grid">
          <a
            href="mailto:ganesh.bachhao@gmail.com"
            className="contact-card"
            onClick={() => {
              window.gtag?.("event", "email_click", {
                event_category: "contact",
                event_label: "Email Contact",
              });
            }}
          >
            <h3>📧 Email</h3>
            <p>ganesh.bachhao@gmail.com</p>
          </a>

          <a
            href="https://linkedin.com/in/ganeshbachhao"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
            onClick={() => {
              window.gtag?.("event", "linkedin_click", {
                event_category: "social",
                event_label: "LinkedIn Profile",
              });
            }}
          >
            <h3>💼 LinkedIn</h3>
            <p>Professional Network</p>
          </a>

          <a
            href="https://github.com/ganeshbachhao"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
            onClick={() => {
              window.gtag?.("event", "github_click", {
                event_category: "social",
                event_label: "GitHub Profile",
              });
            }}
          >
            <h3>💻 GitHub</h3>
            <p>Projects & Architecture Samples</p>
          </a>

          <a
            href="/resume/Ganesh_Bachhao_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            onClick={() => {
              window.gtag?.("event", "resume_download", {
                event_category: "resume",
                event_label: "Contact Resume Download",
              });
            }}
          >
            <h3>📄 Resume</h3>
            <p>Download Latest CV</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
