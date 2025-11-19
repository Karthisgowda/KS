import { Circle } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 section-appear bg-dark-900">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-title-2 mb-4" data-testid="experience-title">
            <span className="text-gradient-primary">
              Work Experience
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="apple-card p-8 md:p-12 rounded-2xl" data-testid="experience-card">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 pb-8 border-b border-white/10">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3" data-testid="job-title">
                  Full Stack Developer Intern
                </h3>
                <p className="text-lg md:text-xl text-primary-500 font-medium" data-testid="company-name">
                  Salesine Technology Ltd, Bangalore
                </p>
              </div>
              <div className="text-gray-400 font-medium mt-3 md:mt-0 md:text-right" data-testid="job-duration">
                Dec 2024 – Mar 2025
              </div>
            </div>

            {/* Responsibilities */}
            <ul className="space-y-4">
              <li className="flex items-start group" data-testid="job-responsibility-1">
                <Circle size={8} className="text-primary-500 mt-2 mr-4 flex-shrink-0 fill-current" />
                <span className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  Built a web app using NestJS (backend) and Vue.js (frontend).
                </span>
              </li>
              <li className="flex items-start group" data-testid="job-responsibility-2">
                <Circle size={8} className="text-primary-500 mt-2 mr-4 flex-shrink-0 fill-current" />
                <span className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  Created RESTful APIs, implemented MVC architecture in TypeScript.
                </span>
              </li>
              <li className="flex items-start group" data-testid="job-responsibility-3">
                <Circle size={8} className="text-primary-500 mt-2 mr-4 flex-shrink-0 fill-current" />
                <span className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  Used Vue Router, Vuex for dynamic and state-managed UI.
                </span>
              </li>
              <li className="flex items-start group" data-testid="job-responsibility-4">
                <Circle size={8} className="text-primary-500 mt-2 mr-4 flex-shrink-0 fill-current" />
                <span className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  Integrated GraphQL and handled secure authentication flows.
                </span>
              </li>
              <li className="flex items-start group" data-testid="job-responsibility-5">
                <Circle size={8} className="text-primary-500 mt-2 mr-4 flex-shrink-0 fill-current" />
                <span className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  Deployed a responsive, production-ready application.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
