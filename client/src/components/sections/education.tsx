import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Jain Deemed-to-be University, Bangalore",
      duration: "Jul 2023 – Jun 2026",
      grade: "CGPA: 8.58"
    },
    {
      degree: "Pre-University (Commerce)",
      institution: "Vishwaprajna PU College, Mysore",
      duration: "Jun 2021 – Jun 2023",
      grade: "Grade: 81%"
    }
  ];

  return (
    <section id="education" className="py-24 md:py-32 section-appear bg-dark-900">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-title-2 mb-4" data-testid="education-title">
            <span className="text-gradient-primary">
              Education
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="apple-card p-8 md:p-10 rounded-2xl animate-fadeInUp"
              style={{animationDelay: `${index * 0.15}s`}}
              data-testid={`education-${index}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-grow">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-3 bg-primary-600/10 rounded-xl mt-1">
                      <GraduationCap size={24} strokeWidth={1.5} className="text-primary-500" />
                    </div>
                    <div>
                      <h3
                        className="text-xl md:text-2xl font-semibold text-white mb-2"
                        data-testid={`education-degree-${index}`}
                      >
                        {edu.degree}
                      </h3>
                      <p
                        className="text-base md:text-lg text-gray-400 font-medium"
                        data-testid={`education-institution-${index}`}
                      >
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="text-gray-500 font-medium md:text-right"
                  data-testid={`education-duration-${index}`}
                >
                  {edu.duration}
                </div>
              </div>
              <div
                className="flex items-center gap-2 pt-6 border-t border-white/10"
                data-testid={`education-grade-${index}`}
              >
                <Award size={18} strokeWidth={1.5} className="text-amber-400" />
                <span className="text-base font-semibold text-amber-400">{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
