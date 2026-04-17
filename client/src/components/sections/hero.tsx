import { ArrowUpRight, Github, Linkedin, Mail, Phone, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const roles = ["Full Stack Developer", "Front End Developer", "Back End Developer", "Data Analyst"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const githubProfile = "https://github.com/Karthisgowda";

  useEffect(() => {
    let roleIndex = 0;
    const interval = window.setInterval(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      setCurrentRole(roles[roleIndex]);
    }, 2000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-36 md:pt-44 pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-dark-800 to-dark-900" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-10 animate-float" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-emerald-500 rounded-full opacity-10 animate-float" style={{ animationDelay: "-2s" }} />
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-amber-500 rounded-full opacity-10 animate-float" style={{ animationDelay: "-4s" }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fadeInUp">
          <h1 className="hero-title-display text-5xl md:text-7xl font-bold mb-6" data-testid="hero-title">
            <span className="text-gradient-full">Karthik S Gowda</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fadeInUp" style={{ animationDelay: "0.2s" }} data-testid="hero-subtitle">
            <span className="role-animation">{currentRole}</span>
          </p>

          <div className="hero-intro-card animate-fadeInUp" style={{ animationDelay: "0.35s" }}>
            <div className="hero-intro-kicker">
              <Sparkles size={16} />
              <span>Portfolio Studio</span>
            </div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto" data-testid="hero-description">
              BCA student, builder, and fast learner focused on full-stack web experiences, practical backend systems,
              clean interfaces, and data-driven insights. I enjoy turning real problems into useful digital products
              and clear analytical stories.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
            <button
              onClick={() => handleScrollToSection("#contact")}
              className="hero-cta-primary"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </button>
            <a
              href={githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-secondary"
              data-testid="button-view-work"
            >
              View GitHub Projects
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="hero-stats animate-fadeInUp" style={{ animationDelay: "0.75s" }}>
            <div className="hero-stat-card">
              <strong>8.58</strong>
              <span>BCA CGPA</span>
            </div>
            <div className="hero-stat-card">
              <strong>1</strong>
              <span>Full-Stack Internship</span>
            </div>
            <div className="hero-stat-card">
              <strong>4+</strong>
              <span>Development + Data Tracks</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mt-12 animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
            <a href="mailto:karthiksgowda28@gmail.com" className="text-gray-400 hover:text-blue-400 text-2xl hover-lift" data-testid="link-email">
              <Mail />
            </a>
            <a href="https://linkedin.com/in/karthisg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-2xl hover-lift" data-testid="link-linkedin">
              <Linkedin />
            </a>
            <a href={githubProfile} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-2xl hover-lift" data-testid="link-github">
              <Github />
            </a>
            <a href="tel:+918050828798" className="text-gray-400 hover:text-blue-400 text-2xl hover-lift" data-testid="link-phone">
              <Phone />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
