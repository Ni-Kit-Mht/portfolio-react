import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const sections = ["home", "about", "projects", "skills", "contact"];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const navbarHeight = 64; // adjust as needed

    if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setNavOpen(false);
  };

  // IntersectionObserver to detect current section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <button
        onClick={() => scrollToSection('portfolio')}
        className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
        My Portfolio
        </button>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
        {sections.map((section) => (
            <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`capitalize transition-colors text-sm font-medium ${
                activeSection === section
                ? "text-blue-500 dark:text-blue-400"
                : "text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
            }`}
            >
            {section}
            </button>
        ))}

        {/* Styled "Hire Me" link */}
        <Link
            to="/portfolio-react/resume"
            className="capitalize transition-colors text-sm font-medium text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
        >
            Hire Me
        </Link>
        </div>


        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)} className="text-gray-900 dark:text-white">
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/3 bg-white dark:bg-gray-800 shadow-lg transform ${
          navOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <div className="flex flex-col items-start p-6 gap-6">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-lg capitalize transition-colors ${
                activeSection === section
                  ? "text-blue-500 dark:text-blue-400"
                  : "text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              }`}
            >
              {section}
            </button>
          ))}
            <Link
                to="/portfolio-react/resume"
                className="text-lg capitalize transition-colors text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
            >
                Hire Me
            </Link>
        </div>
      </div>

      {/* Overlay */}
      {navOpen && (
        <div
          onClick={() => setNavOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-30"
        />
      )}
    </nav>
  );
}
