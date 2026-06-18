import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <p>.NET • Angular • Azure • AI Solutions</p>
          <p>
            Turning business requirements into scalable and maintainable
            software solutions.
          </p>
          <p>
            Senior .NET Engineer • Technology Lead • Solution Architect
            <p>Remote • Hybrid • Relocation</p>
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
