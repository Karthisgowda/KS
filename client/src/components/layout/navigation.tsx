import { useState } from "react";
import { Menu, X } from "lucide-react";

const githubProfile = "https://github.com/Karthisgowda";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 nav-shell">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="brand-lockup text-2xl font-bold">
            <span className="brand-mark" aria-hidden="true">
              <img src="/images/ksg-logo.png" alt="" className="brand-logo" />
            </span>
            <div className="hidden md:block">
              <div className="brand-name">Karthik S Gowda</div>
              <div className="brand-role">Developer + Data Analyst</div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-item text-gray-300 hover:text-blue-400" onClick={handleNavClick} data-testid="nav-home">Home</a>
            <a href="#about" className="nav-item text-gray-300 hover:text-blue-400" onClick={handleNavClick} data-testid="nav-about">About</a>
            <a href="#skills" className="nav-item text-gray-300 hover:text-blue-400" onClick={handleNavClick} data-testid="nav-skills">Skills</a>
            <a href="#experience" className="nav-item text-gray-300 hover:text-blue-400" onClick={handleNavClick} data-testid="nav-experience">Experience</a>
            <a href={githubProfile} target="_blank" rel="noopener noreferrer" className="nav-item text-gray-300 hover:text-blue-400" data-testid="nav-projects">Projects</a>
            <a href="#education" className="nav-item text-gray-300 hover:text-blue-400" onClick={handleNavClick} data-testid="nav-education">Education</a>
            <a href="#certificates" className="nav-item text-gray-300 hover:text-blue-400" onClick={handleNavClick} data-testid="nav-certificates">Certificates</a>
            <a href="#chatbot" className="nav-item text-gray-300 hover:text-blue-400" onClick={handleNavClick} data-testid="nav-chatbot">Chat</a>
            <a href="#contact" className="nav-item text-gray-300 hover:text-blue-400" onClick={handleNavClick} data-testid="nav-contact">Contact</a>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-300 hover:text-blue-400 focus:outline-none"
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4" data-testid="mobile-menu">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="nav-item text-gray-300 hover:text-blue-400 block py-2" onClick={handleNavClick} data-testid="mobile-nav-home">Home</a>
              <a href="#about" className="nav-item text-gray-300 hover:text-blue-400 block py-2" onClick={handleNavClick} data-testid="mobile-nav-about">About</a>
              <a href="#skills" className="nav-item text-gray-300 hover:text-blue-400 block py-2" onClick={handleNavClick} data-testid="mobile-nav-skills">Skills</a>
              <a href="#experience" className="nav-item text-gray-300 hover:text-blue-400 block py-2" onClick={handleNavClick} data-testid="mobile-nav-experience">Experience</a>
              <a href={githubProfile} target="_blank" rel="noopener noreferrer" className="nav-item text-gray-300 hover:text-blue-400 block py-2" data-testid="mobile-nav-projects">Projects</a>
              <a href="#education" className="nav-item text-gray-300 hover:text-blue-400 block py-2" onClick={handleNavClick} data-testid="mobile-nav-education">Education</a>
              <a href="#certificates" className="nav-item text-gray-300 hover:text-blue-400 block py-2" onClick={handleNavClick} data-testid="mobile-nav-certificates">Certificates</a>
              <a href="#chatbot" className="nav-item text-gray-300 hover:text-blue-400 block py-2" onClick={handleNavClick} data-testid="mobile-nav-chatbot">Chat</a>
              <a href="#contact" className="nav-item text-gray-300 hover:text-blue-400 block py-2" onClick={handleNavClick} data-testid="mobile-nav-contact">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
