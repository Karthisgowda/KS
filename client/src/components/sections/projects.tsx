import { ExternalLink, Github, Calendar } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "CrowdChoice",
      subtitle: "Crowdsourced Decision-Making App",
      description: "Responsive web application with React frontend and Python & PHP backend, featuring user authentication and real-time voting system.",
      duration: "Jan 2024 – Feb 2024",
      technologies: ["React", "HTML/CSS", "JavaScript", "Python", "PHP"],
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
      "HTML/CSS": "bg-blue-500/10 text-blue-400 border-blue-500/20",
      "JavaScript": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      "Python": "bg-amber-500/10 text-amber-400 border-amber-500/20",
      "PHP": "bg-purple-500/10 text-purple-400 border-purple-500/20",
      "React": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
    };
    return colors[tech] || "bg-gray-500/10 text-gray-400 border-gray-500/20";
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-dark-800 section-appear">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-title-2 mb-4" data-testid="projects-title">
            <span className="text-gradient-primary">
              Featured Projects
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-primary-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="apple-card p-8 md:p-10 rounded-2xl flex flex-col h-full animate-fadeInUp"
              style={{animationDelay: `${index * 0.15}s`}}
              data-testid={`project-${index}`}
            >
              {/* Content */}
              <div className="flex-grow">
                <h3
                  className="text-2xl md:text-3xl font-semibold text-white mb-3"
                  data-testid={`project-title-${index}`}
                >
                  {project.title}
                </h3>
                <p
                  className="text-lg text-primary-500 font-medium mb-4"
                  data-testid={`project-subtitle-${index}`}
                >
                  {project.subtitle}
                </p>
                <p
                  className="text-gray-400 mb-6 leading-relaxed"
                  data-testid={`project-description-${index}`}
                >
                  {project.description}
                </p>
                <div
                  className="flex items-center text-sm text-gray-500 mb-6"
                  data-testid={`project-duration-${index}`}
                >
                  <Calendar size={16} strokeWidth={1.5} className="mr-2" />
                  {project.duration}
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`${getTechColor(tech)} px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors`}
                        data-testid={`project-tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-button flex-1 text-center py-3 px-6 text-sm inline-flex items-center justify-center"
                  data-testid={`project-demo-${index}`}
                >
                  <ExternalLink size={16} strokeWidth={1.5} className="mr-2" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-button-secondary flex-1 text-center py-3 px-6 text-sm inline-flex items-center justify-center"
                  data-testid={`project-github-${index}`}
                >
                  <Github size={16} strokeWidth={1.5} className="mr-2" />
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
