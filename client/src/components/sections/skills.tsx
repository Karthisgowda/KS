export default function Skills() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Vue.js", "Python", "PHP",
    "NestJS", "Node.js", "HTML/CSS", "Tailwind", "MySQL", "MongoDB",
    "Git", "RESTful APIs", "GraphQL", "Responsive Design"
  ];

  return (
    <section id="skills" className="py-32 md:py-40 section-appear bg-mono-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left - Title */}
          <div className="lg:col-span-3">
            <h2 className="text-sm uppercase tracking-wider text-mono-600 font-medium sticky top-32" data-testid="skills-title">
              Skills & Technologies
            </h2>
          </div>

          {/* Right - Skills */}
          <div className="lg:col-span-9">
            <div className="flex flex-wrap gap-3 md:gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-6 py-3 border border-mono-300 text-mono-900 hover:border-mono-900 transition-colors font-medium"
                  data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
