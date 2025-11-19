import { ExternalLink } from "lucide-react";
import {
  SiPython,
  SiAndroid,
  SiMysql,
  SiGit,
  SiGoogleanalytics
} from "react-icons/si";

export default function Certificates() {
  const certificates = [
    {
      title: "Python Basics",
      description: "Fundamental Python programming concepts and data structures",
      icon: <SiPython className="text-amber-400 text-3xl" />,
      link: "https://drive.google.com/file/d/1lydFufG8EefbBZD5lAJnFCM1H9QURWSS/view?usp=drive_link",
      color: "text-amber-400",
      bgColor: "bg-amber-400/10"
    },
    {
      title: "Mobile App Development",
      description: "Android application development using modern frameworks",
      icon: <SiAndroid className="text-emerald-400 text-3xl" />,
      link: "https://drive.google.com/file/d/1LEgQ4cF2_CjOQzQhXqHC52GkbOCXxHNE/view?usp=drive_link",
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10"
    },
    {
      title: "SQL",
      description: "Database management and query optimization techniques",
      icon: <SiMysql className="text-blue-400 text-3xl" />,
      link: "https://drive.google.com/file/d/1hrXJgn-QM2UPxhyjPeB3w_ENHm24v5Y6/view?usp=drive_link",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10"
    },
    {
      title: "Version Control",
      description: "Git and GitHub for collaborative software development",
      icon: <SiGit className="text-purple-400 text-3xl" />,
      link: "https://drive.google.com/file/d/1MdIcjmwcZoLmVPHBNXzDIpW7N_e8aERJ/view?usp=drive_link",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10"
    },
    {
      title: "Data Analytics",
      description: "Data analysis, visualization, and statistical modeling",
      icon: <SiGoogleanalytics className="text-cyan-400 text-3xl" />,
      link: "https://drive.google.com/file/d/1Dy8q2ikaqh-RZrpzhDQpTBYaTrZTBYgj/view?usp=drive_link",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10"
    }
  ];

  const handleCertificateClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certificates" className="py-24 md:py-32 bg-dark-800 section-appear">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-title-2 mb-4" data-testid="certificates-title">
            <span className="text-gradient-primary">
              Certifications
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-primary-500 mx-auto rounded-full"></div>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="apple-card p-8 rounded-2xl cursor-pointer group animate-fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => handleCertificateClick(cert.link)}
              data-testid={`certificate-${index}`}
            >
              {/* Icon */}
              <div className={`${cert.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                {cert.icon}
              </div>

              {/* Content */}
              <h3
                className="text-xl font-semibold text-white mb-3"
                data-testid={`certificate-title-${index}`}
              >
                {cert.title}
              </h3>
              <p
                className="text-gray-400 mb-6 leading-relaxed text-sm"
                data-testid={`certificate-description-${index}`}
              >
                {cert.description}
              </p>

              {/* Link */}
              <div
                className={`flex items-center ${cert.color} font-medium text-sm group-hover:gap-2 transition-all`}
                data-testid={`certificate-link-${index}`}
              >
                <span>View Certificate</span>
                <ExternalLink size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
