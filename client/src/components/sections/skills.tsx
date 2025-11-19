import { Code, Globe, Database } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code size={28} strokeWidth={1.5} />,
      iconColor: "text-blue-400",
      title: "Languages",
      skills: [
        { name: "DSA", level: 87 },
        { name: "Python", level: 93 },
        { name: "PHP", level: 85 },
        { name: "Android Studio", level: 81 }
      ]
    },
    {
      icon: <Globe size={28} strokeWidth={1.5} />,
      iconColor: "text-emerald-400",
      title: "Web/Mobile",
      skills: [
        { name: "HTML/CSS", level: 100 },
        { name: "JavaScript", level: 93 },
        { name: "React", level: 87 },
        { name: "Vue.js", level: 81 }
      ]
    },
    {
      icon: <Database size={28} strokeWidth={1.5} />,
      iconColor: "text-purple-400",
      title: "Databases/Tools",
      skills: [
        { name: "MySQL", level: 87 },
        { name: "MongoDB", level: 81 },
        { name: "Git", level: 93 },
        { name: "VS Code", level: 100 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-dark-800 section-appear">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-title-2 mb-4" data-testid="skills-title">
            <span className="text-gradient-primary">
              Technical Skills
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-primary-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="apple-card p-8 md:p-10 rounded-2xl animate-fadeInUp"
              style={{animationDelay: `${categoryIndex * 0.1}s`}}
              data-testid={`skill-category-${categoryIndex}`}
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`${category.iconColor}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold ml-4 text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="space-y-2"
                    data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-600 to-primary-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
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
