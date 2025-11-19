export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 section-appear about-pop bg-dark-900">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-title-2 mb-4" data-testid="about-title">
            <span className="text-gradient-primary">
              About Me
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-primary-500 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8" data-testid="about-subtitle">
              Professional Summary
            </h3>

            <p className="text-body-large text-gray-400 leading-relaxed" data-testid="about-description-1">
              I'm a passionate BCA student with hands-on experience in full-stack web and Android development.
              My expertise spans across JavaScript, Python, and backend integration, with a strong focus on
              creating user-centric design solutions.
            </p>

            <p className="text-body-large text-gray-400 leading-relaxed" data-testid="about-description-2">
              As a quick learner and collaborative team player, I'm dedicated to building efficient and
              impactful technology solutions that make a real difference. I thrive on tackling complex
              challenges and turning innovative ideas into reality.
            </p>

            {/* Call to Action Card */}
            <div className="flex justify-center mt-12 md:mt-16">
              <div className="glass-card p-8 md:p-10 rounded-2xl max-w-md w-full">
                <div className="text-xl md:text-2xl font-semibold text-gradient-primary mb-3">
                  Seeking Opportunities
                </div>
                <div className="text-gray-400 text-base md:text-lg">
                  Ready to contribute to your team's success!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
