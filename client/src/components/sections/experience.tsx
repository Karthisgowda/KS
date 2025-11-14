export default function Experience() {
  return (
    <section id="experience" className="py-32 md:py-40 section-appear bg-mono-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left - Title */}
          <div className="lg:col-span-3">
            <h2 className="text-sm uppercase tracking-wider text-mono-600 font-medium sticky top-32" data-testid="experience-title">
              Experience
            </h2>
          </div>

          {/* Right - Experience */}
          <div className="lg:col-span-9">
            <div className="border-l border-mono-300 pl-8 md:pl-12">
              <div className="space-y-2 mb-8" data-testid="experience-card">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h3 className="text-2xl md:text-3xl font-display font-semibold letter-tight text-mono-900" data-testid="job-title">
                    Full Stack Developer Intern
                  </h3>
                  <p className="text-mono-600 font-medium" data-testid="job-duration">
                    Dec 2024 – Mar 2025
                  </p>
                </div>
                <p className="text-lg text-mono-700" data-testid="company-name">
                  Salesine Technology Ltd, Bangalore
                </p>
              </div>

              <ul className="space-y-4 text-mono-700 leading-relaxed">
                <li data-testid="job-responsibility-1">
                  Built a full-stack web application using NestJS for backend architecture and Vue.js for frontend development
                </li>
                <li data-testid="job-responsibility-2">
                  Designed and implemented RESTful APIs following MVC architecture patterns in TypeScript
                </li>
                <li data-testid="job-responsibility-3">
                  Developed dynamic, state-managed user interfaces using Vue Router and Vuex
                </li>
                <li data-testid="job-responsibility-4">
                  Integrated GraphQL APIs and implemented secure authentication workflows
                </li>
                <li data-testid="job-responsibility-5">
                  Successfully deployed production-ready, responsive application to live environment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
