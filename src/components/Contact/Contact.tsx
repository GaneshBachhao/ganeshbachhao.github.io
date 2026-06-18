import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Open to New Opportunities</h2>

        <p className="contact-intro">
          Actively exploring Senior .NET, Azure, and Technical Leadership
          opportunities across Global organizations. Open to relocation, hybrid,
          and remote roles.
        </p>

        <div className="contact-focus">
          <div className="focus-item">
            <span>✓</span>
            <p>Enterprise .NET & Azure Development</p>
          </div>

          <div className="focus-item">
            <span>✓</span>
            <p>Technical Leadership & Team Mentoring</p>
          </div>

          <div className="focus-item">
            <span>✓</span>
            <p>Cloud Modernization & Platform Engineering</p>
          </div>

          <div className="focus-item">
            <span>✓</span>
            <p>AI-Powered Business Solutions</p>
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

            <p className="contact-title">Direct Hiring Discussions</p>

            <p className="contact-description">ganesh.bachhao@gmail.com</p>
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

            <p className="contact-title">Professional Network</p>

            <p className="contact-description">
              Career opportunities and professional networking
            </p>
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

            <p className="contact-title">Technical Portfolio</p>

            <p className="contact-description">
              Projects, technical solutions and code samples
            </p>
          </a>

          <a
            href="/resume/Ganesh_Bachhao_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card resume-card"
            onClick={() => {
              window.gtag?.("event", "resume_download", {
                event_category: "resume",
                event_label: "Contact Resume Download",
              });
            }}
          >
            <h3>📄 Resume</h3>

            <p className="contact-title">Senior .NET & Technology Lead CV</p>

            <p className="contact-description">
              Download the latest version of my resume
            </p>
          </a>

          <div className="contact-card location-card">
            <h3>📍 Location</h3>

            <p className="contact-title">Pune, India</p>

            <p className="contact-description">
              (Open to remote opportunities)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
