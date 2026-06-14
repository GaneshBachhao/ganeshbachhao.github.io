import "./Navbar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useEffect, useState } from "react";

const sections = [
  "projects",
  "skills",
  "career",
  "architecture",
  "about",
  "contact",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState("projects");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const current = sections.findLast((id) => {
        const section = document.getElementById(id);

        if (!section) return false;

        return window.scrollY >= section.offsetTop - 150;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="container navbar-content">
        <div className="logo">Ganesh Bachhao</div>

        <ul className="nav-links">
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

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
