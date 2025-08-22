import { useEffect } from "react";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Education from "@/components/sections/education";
import Certificates from "@/components/sections/certificates";
import Achievements from "@/components/sections/achievements";
import Contact from "@/components/sections/contact";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for Section Animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    // Observe all sections with animation
    document.querySelectorAll('.section-appear').forEach(section => {
      observer.observe(section);
    });

    // Active Navigation Highlighting
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('nav a[href^="#"]');
      
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('text-blue-400');
        link.classList.add('text-gray-300');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.remove('text-gray-300');
          link.classList.add('text-blue-400');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-dark-900 text-gray-100 overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certificates />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
