import { Star } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Jain Deemed-to-be University, Bangalore",
      duration: "Jul 2023 – Jun 2026",
      grade: "CGPA: 8.58",
      gradeColor: "text-amber-400"
    },
    {
      degree: "Pre-University (Commerce)",
      institution: "Vishwaprajna PU College, Mysore",
      duration: "Jun 2021 – Jun 2023",
      grade: "Grade: 81%",
      gradeColor: "text-amber-400"
    }
  ];

  return (
    <section id="education" className="py-20 section-appear">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="education-title">
            <span className="text-gradient-primary">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="gradient-border hover-lift" data-testid={`education-${index}`}>
              <div className="gradient-border-content">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-400 mb-2" data-testid={`education-degree-${index}`}>{edu.degree}</h3>
                    <p className="text-lg text-emerald-400 font-medium" data-testid={`education-institution-${index}`}>{edu.institution}</p>
                  </div>
                  <div className="text-gray-400 font-medium mt-2 md:mt-0" data-testid={`education-duration-${index}`}>
                    {edu.duration}
                  </div>
                </div>
                <div className="flex items-center" data-testid={`education-grade-${index}`}>
                  <Star className="text-amber-400 mr-2" size={20} />
                  <span className={`text-lg font-semibold ${edu.gradeColor}`}>{edu.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
