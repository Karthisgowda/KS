import { Medal, Users, Trophy } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: <Medal size={32} strokeWidth={1.5} />,
      title: "National-level Karate Player",
      description: "Represented at major competitions, showcasing discipline and leadership qualities",
      color: "text-amber-400",
      bgColor: "bg-amber-400/10"
    },
    {
      icon: <Users size={32} strokeWidth={1.5} />,
      title: "President, Commerce Club",
      description: "Organized events, seminars, and student-driven initiatives in Mysore",
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10"
    },
    {
      icon: <Trophy size={32} strokeWidth={1.5} />,
      title: "Cricket Team Captain",
      description: "Champions in Interschool Tournament 2022-23, demonstrating leadership and teamwork",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10"
    }
  ];

  return (
    <section id="achievements" className="py-24 md:py-32 section-appear bg-dark-900">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-title-2 mb-4" data-testid="achievements-title">
            <span className="text-gradient-primary">
              Achievements
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-primary-500 mx-auto rounded-full"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="apple-card p-8 rounded-2xl text-center animate-fadeInUp"
              style={{animationDelay: `${index * 0.15}s`}}
              data-testid={`achievement-${index}`}
            >
              {/* Icon */}
              <div
                className={`${achievement.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${achievement.color}`}
                data-testid={`achievement-icon-${index}`}
              >
                {achievement.icon}
              </div>

              {/* Content */}
              <h3
                className={`text-xl font-semibold ${achievement.color} mb-4`}
                data-testid={`achievement-title-${index}`}
              >
                {achievement.title}
              </h3>
              <p
                className="text-gray-400 leading-relaxed"
                data-testid={`achievement-description-${index}`}
              >
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
