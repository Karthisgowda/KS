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
      color: "text-amber-400"
    },
    {
      title: "Mobile App Development",
      description: "Android application development using modern frameworks",
      icon: <SiAndroid className="text-emerald-400 text-3xl" />,
      link: "https://drive.google.com/file/d/1LEgQ4cF2_CjOQzQhXqHC52GkbOCXxHNE/view?usp=drive_link",
      color: "text-emerald-400"
    },
    {
      title: "SQL",
      description: "Database management and query optimization techniques",
      icon: <SiMysql className="text-blue-400 text-3xl" />,
      link: "https://drive.google.com/file/d/1hrXJgn-QM2UPxhyjPeB3w_ENHm24v5Y6/view?usp=drive_link",
      color: "text-blue-400"
    },
    {
      title: "Version Control",
      description: "Git and GitHub for collaborative software development",
      icon: <SiGit className="text-purple-400 text-3xl" />,
      link: "https://drive.google.com/file/d/1MdIcjmwcZoLmVPHBNXzDIpW7N_e8aERJ/view?usp=drive_link",
      color: "text-purple-400"
    },
    {
      title: "Data Analytics",
      description: "Data analysis, visualization, and statistical modeling",
      icon: <SiGoogleanalytics className="text-cyan-400 text-3xl" />,
      link: "https://drive.google.com/file/d/1Dy8q2ikaqh-RZrpzhDQpTBYaTrZTBYgj/view?usp=drive_link",
      color: "text-cyan-400"
    }
  ];

  const handleCertificateClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certificates" className="py-20 bg-dark-800 section-appear">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="certificates-title">
            <span className="text-gradient-primary">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="cert-card bg-dark-700 p-6 rounded-xl border border-gray-600" 
              onClick={() => handleCertificateClick(cert.link)}
              data-testid={`certificate-${index}`}
            >
              <div className="flex items-center mb-4">
                {cert.icon}
                <h3 className="text-xl font-semibold ml-3" data-testid={`certificate-title-${index}`}>{cert.title}</h3>
              </div>
              <p className="text-gray-300 mb-4" data-testid={`certificate-description-${index}`}>{cert.description}</p>
              <div className={`flex items-center ${cert.color}`}>
                <ExternalLink size={16} className="mr-2" />
                <span className="font-medium" data-testid={`certificate-link-${index}`}>View Certificate</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
