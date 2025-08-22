import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState("Front End");
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => prev === "Front End" ? "Back End" : "Front End");
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-dark-800 to-dark-900"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-emerald-500 rounded-full opacity-10 animate-float" style={{animationDelay: '-2s'}}></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-amber-500 rounded-full opacity-10 animate-float" style={{animationDelay: '-4s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" data-testid="hero-title">
            <span className="text-gradient-full">
              Karthik S Gowda
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fadeInUp" style={{animationDelay: '0.2s'}} data-testid="hero-subtitle">
            <span className="role-animation">{currentRole}</span> Developer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fadeInUp" style={{animationDelay: '0.4s'}} data-testid="hero-description">
            BCA student with hands-on experience in building efficient and impactful technology solutions. 
            Passionate about creating user-centric applications with modern technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <button 
              onClick={() => handleScrollToSection('#contact')}
              className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover-lift"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </button>
            <button 
              onClick={() => handleScrollToSection('#projects')}
              className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover-lift hover:bg-blue-500 hover:text-white transition-all duration-300"
              data-testid="button-view-work"
            >
              View My Work
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
            <a 
              href="mailto:karthiksgowda28@gmail.com" 
              className="text-gray-400 hover:text-blue-400 text-2xl hover-lift"
              data-testid="link-email"
            >
              <Mail />
            </a>
            <a 
              href="https://linkedin.com/in/karthisg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 text-2xl hover-lift"
              data-testid="link-linkedin"
            >
              <Linkedin />
            </a>
            <a 
              href="https://github.com/Karthisgowda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 text-2xl hover-lift"
              data-testid="link-github"
            >
              <Github />
            </a>
            <a 
              href="tel:+918050828798" 
              className="text-gray-400 hover:text-blue-400 text-2xl hover-lift"
              data-testid="link-phone"
            >
              <Phone />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
