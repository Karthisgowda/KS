import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState("Full Stack");

  useEffect(() => {
    const roles = ["Full Stack", "Frontend", "Backend"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % roles.length;
      setCurrentRole(roles[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ paddingTop: 'max(80px, 10vh)', paddingBottom: 'max(80px, 10vh)' }}
    >
      {/* Apple-inspired gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900"></div>

      {/* Subtle ambient blur effects (Apple style) */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-500 rounded-full opacity-5 blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main heading with Apple's bold typography */}
          <div className="animate-fadeInUp">
            <h1
              className="text-title-1 mb-6 md:mb-8"
              data-testid="hero-title"
            >
              <span className="block text-white mb-2">Karthik S Gowda</span>
              <span className="block text-gradient-primary">
                <span className="role-animation" key={currentRole}>{currentRole}</span> Developer
              </span>
            </h1>
          </div>

          {/* Description with perfect typography */}
          <div
            className="animate-fadeInUp"
            style={{animationDelay: '0.15s'}}
          >
            <p
              className="text-body-large text-gray-400 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed"
              data-testid="hero-description"
            >
              BCA student with hands-on experience in building efficient and impactful
              technology solutions. Passionate about creating user-centric applications
              with modern technologies.
            </p>
          </div>

          {/* Apple-style pill buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:mb-20 animate-fadeInUp"
            style={{animationDelay: '0.3s'}}
          >
            <button
              onClick={() => handleScrollToSection('#contact')}
              className="apple-button w-full sm:w-auto px-8 py-4 text-base"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </button>
            <button
              onClick={() => handleScrollToSection('#projects')}
              className="apple-button-secondary w-full sm:w-auto px-8 py-4 text-base"
              data-testid="button-view-work"
            >
              View My Work
            </button>
          </div>

          {/* Refined social links */}
          <div
            className="flex justify-center items-center gap-8 animate-fadeInUp"
            style={{animationDelay: '0.45s'}}
          >
            <a
              href="mailto:karthiksgowda28@gmail.com"
              className="text-gray-500 hover:text-white transition-colors duration-300 hover-scale"
              aria-label="Email"
              data-testid="link-email"
            >
              <Mail size={24} strokeWidth={1.5} />
            </a>
            <a
              href="https://linkedin.com/in/karthisg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300 hover-scale"
              aria-label="LinkedIn"
              data-testid="link-linkedin"
            >
              <Linkedin size={24} strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com/Karthisgowda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300 hover-scale"
              aria-label="GitHub"
              data-testid="link-github"
            >
              <Github size={24} strokeWidth={1.5} />
            </a>
            <a
              href="tel:+918050828798"
              className="text-gray-500 hover:text-white transition-colors duration-300 hover-scale"
              aria-label="Phone"
              data-testid="link-phone"
            >
              <Phone size={24} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
