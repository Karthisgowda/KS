import { BarChart3, Code, Database, Globe } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="text-blue-400 text-2xl" />,
      title: "Languages",
      skills: [
        { name: "DSA", level: 87 },
        { name: "Python", level: 93 },
        { name: "PHP", level: 85 },
        { name: "Android Studio", level: 81 },
      ],
    },
    {
      icon: <Globe className="text-emerald-400 text-2xl" />,
      title: "Web/Mobile",
      skills: [
        { name: "HTML/CSS", level: 100 },
        { name: "JavaScript", level: 93 },
        { name: "React", level: 87 },
        { name: "Vue.js", level: 81 },
      ],
    },
    {
      icon: <Database className="text-amber-400 text-2xl" />,
      title: "Databases/Tools",
      skills: [
        { name: "MySQL", level: 87 },
        { name: "MongoDB", level: 81 },
        { name: "Git", level: 93 },
        { name: "VS Code", level: 100 },
      ],
    },
    {
      icon: <BarChart3 className="text-cyan-400 text-2xl" />,
      title: "Data Analyst",
      skills: [
        { name: "SQL", level: 88 },
        { name: "Excel", level: 86 },
        { name: "Power BI", level: 82 },
        { name: "Data Cleaning", level: 85 },
        { name: "Visualization", level: 84 },
        { name: "Python Analysis", level: 87 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-800 section-appear">
      <div className="container mx-auto px-6">
        <div className="section-shell">
          <div className="section-kicker">
            <span>Toolkit</span>
          </div>
          <div className="section-heading">
            <h2 className="section-title" data-testid="skills-title">Technical Skills</h2>
            <p className="section-description">A balanced stack across programming, web interfaces, databases, and data analytics.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-card p-6 rounded-xl animate-fadeInUp" style={{ animationDelay: `${categoryIndex * 0.1}s` }} data-testid={`skill-category-${categoryIndex}`}>
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center" data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
                    <span className="text-gray-300">{skill.name}</span>
                    <div className="ml-auto w-16 h-2 bg-gray-700 rounded-full">
                      <div
                        className="h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
