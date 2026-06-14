import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h3>Ganesh Bachhao</h3>

          <p>Technology Lead • .NET • Azure • AI Solutions</p>

          <p>
            Open to Senior .NET, Azure, Technical Lead and Solution Architect
            opportunities.
          </p>
        </div>

        <div className="footer-links">
          <a
            href="/resume/Ganesh_Bachhao_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>

          <a href="mailto:ganesh.bachhao@gmail.com">Email</a>

          <a
            href="https://linkedin.com/in/ganeshbachhao"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/ganeshbachhao"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Ganesh Bachhao • Pune, India</p>
        <p>Built with React, TypeScript and GitHub Pages</p>
      </div>
    </footer>
  );
};

export default Footer;
