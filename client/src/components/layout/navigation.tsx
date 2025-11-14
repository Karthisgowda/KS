import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-6 max-w-7xl">
        <div className="flex justify-between items-center">
          <a href="#home" onClick={handleNavClick} className="text-xl font-display font-semibold letter-tight text-mono-900 hover:text-mono-600 transition-colors">
            Karthik S Gowda
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="nav-item text-mono-700 hover:text-mono-900 text-sm" onClick={handleNavClick} data-testid="nav-about">About</a>
            <a href="#projects" className="nav-item text-mono-700 hover:text-mono-900 text-sm" onClick={handleNavClick} data-testid="nav-projects">Work</a>
            <a href="#experience" className="nav-item text-mono-700 hover:text-mono-900 text-sm" onClick={handleNavClick} data-testid="nav-experience">Experience</a>
            <a href="#contact" className="nav-item text-mono-700 hover:text-mono-900 text-sm" onClick={handleNavClick} data-testid="nav-contact">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-mono-900 focus:outline-none"
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-8 pb-4" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-mono-900 text-lg py-2 border-b border-mono-300" onClick={handleNavClick} data-testid="mobile-nav-home">Home</a>
              <a href="#about" className="text-mono-900 text-lg py-2 border-b border-mono-300" onClick={handleNavClick} data-testid="mobile-nav-about">About</a>
              <a href="#projects" className="text-mono-900 text-lg py-2 border-b border-mono-300" onClick={handleNavClick} data-testid="mobile-nav-projects">Work</a>
              <a href="#experience" className="text-mono-900 text-lg py-2 border-b border-mono-300" onClick={handleNavClick} data-testid="mobile-nav-experience">Experience</a>
              <a href="#contact" className="text-mono-900 text-lg py-2" onClick={handleNavClick} data-testid="mobile-nav-contact">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
