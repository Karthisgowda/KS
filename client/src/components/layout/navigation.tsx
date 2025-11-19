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

  const navItems = [
    { href: "#home", label: "Home", testId: "nav-home" },
    { href: "#about", label: "About", testId: "nav-about" },
    { href: "#skills", label: "Skills", testId: "nav-skills" },
    { href: "#experience", label: "Experience", testId: "nav-experience" },
    { href: "#projects", label: "Projects", testId: "nav-projects" },
    { href: "#education", label: "Education", testId: "nav-education" },
    { href: "#certificates", label: "Certificates", testId: "nav-certificates" },
    { href: "#contact", label: "Contact", testId: "nav-contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold tracking-tight">
            <span className="text-gradient-primary">
              KSG
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-item text-sm text-gray-400 hover:text-white"
                onClick={handleNavClick}
                data-testid={item.testId}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-400 hover:text-white focus:outline-none transition-colors duration-300"
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden border-t border-white/10 animate-slideDown"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col py-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                  onClick={handleNavClick}
                  data-testid={`mobile-${item.testId}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
