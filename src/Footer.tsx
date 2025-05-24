import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-4 text-sm text-gray-500 dark:text-gray-400 z-50">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Quick Links 
        <div className="flex space-x-6">
          <a href="#home" className="hover:text-gray-700 dark:hover:text-gray-300 transition">
            Home
          </a>
          <a href="#about" className="hover:text-gray-700 dark:hover:text-gray-300 transition">
            About
          </a>
          <a href="#projects" className="hover:text-gray-700 dark:hover:text-gray-300 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-700 dark:hover:text-gray-300 transition">
            Contact
          </a>
        </div>
          */}
        {/* Social Icons 
        <div className="flex space-x-4 text-xl">
          <a
            href="https://github.com/Ni-Kit-Mht"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/nikit-mehta-981613309/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Nikit23451551"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition flex flex-row"
          >
            <FaTwitter />
                      <p className="text-center mt-[-5px]">/</p>
            <FaXTwitter />
          </a>
        </div>
        */}
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Nikit Mehta. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
