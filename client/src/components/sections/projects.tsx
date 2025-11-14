import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "CrowdChoice",
      description: "A responsive crowdsourced decision-making platform featuring real-time voting, user authentication, and intuitive interface design.",
      year: "2024",
      technologies: ["React", "Python", "PHP"],
      liveDemo: "https://crowdchoice-1-2.onrender.com",
      github: "https://github.com/Karthisgowda/CrowdChoice-1.git"
    },
    {
      title: "Chatbot Flow",
      description: "An interactive AI chatbot system with seamless conversational flow and dynamic response handling.",
      year: "2024",
      technologies: ["React", "JavaScript", "Python"],
      liveDemo: "https://chatbot-flow-jsj6.onrender.com",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 md:py-40 section-appear bg-mono-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left - Title */}
          <div className="lg:col-span-3">
            <h2 className="text-sm uppercase tracking-wider text-mono-600 font-medium sticky top-32" data-testid="projects-title">
              Selected Work
            </h2>
          </div>

          {/* Right - Projects */}
          <div className="lg:col-span-9 space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="minimal-card p-8 md:p-12 group" data-testid={`project-${index}`}>
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-2">
                      <h3 className="text-3xl md:text-4xl font-display font-semibold letter-tight text-mono-900" data-testid={`project-title-${index}`}>
                        {project.title}
                      </h3>
                      <p className="text-sm text-mono-600">{project.year}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-mono-700 leading-relaxed max-w-2xl" data-testid={`project-description-${index}`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-sm text-mono-600 font-medium"
                        data-testid={`project-tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-mono-300">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-mono-900 hover:text-mono-600 transition-colors group/link"
                      data-testid={`project-demo-${index}`}
                    >
                      <span className="font-medium">View Project</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-mono-600 hover:text-mono-900 transition-colors group/link"
                        data-testid={`project-github-${index}`}
                      >
                        <span className="font-medium">GitHub</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
