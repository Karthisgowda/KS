import { ExternalLink, Github, Calendar } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "CrowdChoice",
      subtitle: "Crowdsourced Decision-Making App",
      description: "HTML/CSS/JS frontend with Python & PHP backend, including user login and live voting system.",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      duration: "Jan 2024 – Feb 2024",
      technologies: ["HTML/CSS", "JavaScript", "Python", "PHP"],
      liveDemo: "https://crowdchoice-1-2.onrender.com",
      github: "https://github.com/Karthisgowda/CrowdChoice-1.git"
    },
    {
      title: "Chatbot-Flow",
      subtitle: "Interactive AI Chatbot System",
      description: "Interactive chatbot system with seamless UI/UX flow and backend logic for dynamic conversations.",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
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
            <div key={index} className="project-card relative group rounded-xl overflow-hidden hover-lift" data-testid={`project-${index}`}>
              <img 
                src={project.image} 
                alt={project.subtitle} 
                className="w-full h-64 object-cover"
                data-testid={`project-image-${index}`}
              />
              
              <div className="project-overlay absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-4" data-testid={`project-overlay-title-${index}`}>{project.title}</h3>
                  <p className="text-lg mb-6" data-testid={`project-overlay-subtitle-${index}`}>{project.subtitle}</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                      data-testid={`project-demo-${index}`}
                    >
                      <ExternalLink size={16} className="inline mr-2" />
                      Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                      data-testid={`project-github-${index}`}
                    >
                      <Github size={16} className="inline mr-2" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-700 p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-2" data-testid={`project-title-${index}`}>{project.title}</h3>
                <p className="text-gray-300 mb-4" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex items-center text-sm text-gray-400 mb-4" data-testid={`project-duration-${index}`}>
                  <Calendar size={16} className="mr-2" />
                  {project.duration}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`${getTechColor(tech)} px-3 py-1 rounded-full text-sm`}
                      data-testid={`project-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
