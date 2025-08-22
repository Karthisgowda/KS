import { ExternalLink, Github, Calendar } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "CrowdChoice",
      subtitle: "Crowdsourced Decision-Making App",
      description: "HTML/CSS/JS frontend with Python & PHP backend, including user login and live voting system.",
      duration: "Jan 2024 – Feb 2024",
      technologies: ["HTML/CSS", "JavaScript", "Python", "PHP"],
      liveDemo: "https://crowdchoice-1-2.onrender.com",
      github: "https://github.com/Karthisgowda/CrowdChoice-1.git"
    },
    {
      title: "Chatbot-Flow",
      subtitle: "Interactive AI Chatbot System",
      description: "Interactive chatbot system with seamless UI/UX flow and backend logic for dynamic conversations.",
      duration: "Nov 2024 – Dec 2024",
      technologies: ["HTML/CSS", "JavaScript", "React", "PHP", "Python"],
      liveDemo: "https://chatbot-flow-jsj6.onrender.com",
      github: "#"
    }
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "HTML/CSS": "bg-blue-500 bg-opacity-20 text-blue-400",
      "JavaScript": "bg-emerald-500 bg-opacity-20 text-emerald-400",
      "Python": "bg-amber-500 bg-opacity-20 text-amber-400",
      "PHP": "bg-purple-500 bg-opacity-20 text-purple-400",
      "React": "bg-cyan-500 bg-opacity-20 text-cyan-400"
    };
    return colors[tech] || "bg-gray-500 bg-opacity-20 text-gray-400";
  };

  return (
    <section id="projects" className="py-20 bg-dark-800 section-appear">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="projects-title">
            <span className="text-gradient-primary">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="gradient-border hover-lift animate-fadeInUp" style={{animationDelay: `${index * 0.2}s`}} data-testid={`project-${index}`}>
              <div className="gradient-border-content h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gradient-primary mb-2" data-testid={`project-title-${index}`}>{project.title}</h3>
                  <p className="text-lg text-emerald-400 font-medium mb-3" data-testid={`project-subtitle-${index}`}>{project.subtitle}</p>
                  <p className="text-gray-300 mb-4 leading-relaxed" data-testid={`project-description-${index}`}>
                    {project.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-400 mb-4" data-testid={`project-duration-${index}`}>
                    <Calendar size={16} className="mr-2" />
                    {project.duration}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className={`${getTechColor(tech)} px-3 py-1 rounded-full text-sm hover-lift`}
                        data-testid={`project-tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover-lift text-center"
                    data-testid={`project-demo-${index}`}
                  >
                    <ExternalLink size={16} className="inline mr-2" />
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border border-blue-500 text-blue-400 px-6 py-3 rounded-lg font-semibold hover-lift hover:bg-blue-500 hover:text-white transition-all duration-300 text-center"
                    data-testid={`project-github-${index}`}
                  >
                    <Github size={16} className="inline mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
