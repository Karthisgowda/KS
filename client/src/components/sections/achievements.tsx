import { Medal, Users, Trophy } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: <Medal className="text-amber-400 text-4xl" />,
      title: "National-level Karate Player",
      description: "Represented at major competitions, showcasing discipline and leadership qualities",
      color: "text-amber-400"
    },
    {
      icon: <Users className="text-emerald-400 text-4xl" />,
      title: "President, Commerce Club",
      description: "Organized events, seminars, and student-driven initiatives in Mysore",
      color: "text-emerald-400"
    },
    {
      icon: <Trophy className="text-blue-400 text-4xl" />,
      title: "Cricket Team Captain",
      description: "Champions in Interschool Tournament 2022-23, demonstrating leadership and teamwork",
      color: "text-blue-400"
    }
  ];

  return (
    <section id="achievements" className="py-20 section-appear">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="achievements-title">
            <span className="text-gradient-primary">
              Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="gradient-border hover-lift" data-testid={`achievement-${index}`}>
              <div className="gradient-border-content text-center">
                <div className="mb-4" data-testid={`achievement-icon-${index}`}>
                  {achievement.icon}
                </div>
                <h3 className={`text-xl font-semibold ${achievement.color} mb-3`} data-testid={`achievement-title-${index}`}>
                  {achievement.title}
                </h3>
                <p className="text-gray-300" data-testid={`achievement-description-${index}`}>
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
