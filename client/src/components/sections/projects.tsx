import { ArrowUpRight } from "lucide-react";
import { projects as projectsData } from "@/data/portfolio";

export default function Projects() {
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
            {projectsData.map((project, index) => (
              <div key={project.id} className="minimal-card p-8 md:p-12 group" data-testid={`project-${index}`}>
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-wider text-mono-600">
                        {project.category}
                      </p>
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
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-mono-900 hover:text-mono-600 transition-colors group/link"
                        data-testid={`project-demo-${index}`}
                      >
                        <span className="font-medium">View Project</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
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
