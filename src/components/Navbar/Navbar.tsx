import "./Navbar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useEffect, useState } from "react";

const sections = [
  "home",
  "projects",
  "skills",
  "career",
  "architecture",
  "about",
  "contact",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const current = [...sections].reverse().find((id) => {
        const section = document.getElementById(id);

        if (!section) return false;

        return window.scrollY >= section.offsetTop - 180;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="container navbar-content">
        <div className="logo">Ganesh Bachhao</div>

        <ul className="nav-links desktop-nav">
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
            >
              Expertise
            </a>
          </li>

          <li>
            <a
              href="#career"
              className={activeSection === "career" ? "active" : ""}
            >
              Leadership
            </a>
          </li>

          <li>
            <a
              href="#architecture"
              className={activeSection === "architecture" ? "active" : ""}
            >
              Architecture
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="desktop-theme">
          <ThemeToggle />
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#skills" onClick={closeMenu}>
            Expertise
          </a>

          <a href="#career" onClick={closeMenu}>
            Leadership
          </a>

          <a href="#architecture" onClick={closeMenu}>
            Architecture
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <div className="mobile-theme-toggle">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
