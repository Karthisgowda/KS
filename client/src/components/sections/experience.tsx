import { ChevronRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 section-appear">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="experience-title">
            <span className="text-gradient-primary">
              Work Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="gradient-border hover-lift" data-testid="experience-card">
            <div className="gradient-border-content">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-2" data-testid="job-title">Full Stack Developer Intern</h3>
                  <p className="text-lg text-emerald-400 font-medium" data-testid="company-name">Salesine Technology Ltd, Bangalore</p>
                </div>
                <div className="text-gray-400 font-medium mt-2 md:mt-0" data-testid="job-duration">
                  Dec 2024 – Mar 2025
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start" data-testid="job-responsibility-1">
                  <ChevronRight className="text-blue-400 mt-1 mr-3 flex-shrink-0" size={16} />
                  Built a web app using NestJS (backend) and Vue.js (frontend).
                </li>
                <li className="flex items-start" data-testid="job-responsibility-2">
                  <ChevronRight className="text-blue-400 mt-1 mr-3 flex-shrink-0" size={16} />
                  Created RESTful APIs, implemented MVC architecture in TypeScript.
                </li>
                <li className="flex items-start" data-testid="job-responsibility-3">
                  <ChevronRight className="text-blue-400 mt-1 mr-3 flex-shrink-0" size={16} />
                  Used Vue Router, Vuex for dynamic and state-managed UI.
                </li>
                <li className="flex items-start" data-testid="job-responsibility-4">
                  <ChevronRight className="text-blue-400 mt-1 mr-3 flex-shrink-0" size={16} />
                  Integrated GraphQL and handled secure authentication flows.
                </li>
                <li className="flex items-start" data-testid="job-responsibility-5">
                  <ChevronRight className="text-blue-400 mt-1 mr-3 flex-shrink-0" size={16} />
                  Deployed a responsive, production-ready application.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
