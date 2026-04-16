export default function About() {
  return (
    <section id="about" className="py-20 section-appear about-pop">
      <div className="container mx-auto px-6">
        <div className="section-shell">
          <div className="section-kicker">
            <span>Profile</span>
          </div>
          <div className="section-heading">
            <h2 className="section-title" data-testid="about-title">About Me</h2>
            <p className="section-description">
              A practical builder with a strong learning curve, a product mindset, and a focus on reliable execution.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="about-studio-card animate-fadeInUp">
            <div className="about-studio-copy">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400" data-testid="about-subtitle">Professional Summary</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg" data-testid="about-description-1">
                I&apos;m a passionate BCA student with hands-on experience in full-stack web and Android development.
                My expertise spans across JavaScript, Python, and backend integration, with a strong focus on
                creating user-centric design solutions.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg" data-testid="about-description-2">
                As a quick learner and collaborative team player, I&apos;m dedicated to building efficient and
                impactful technology solutions that make a real difference. I thrive on tackling complex
                challenges and turning innovative ideas into reality.
              </p>
            </div>

            <div className="about-highlight-grid">
              <div className="about-highlight-card">
                <div className="about-highlight-label">Focus</div>
                <div className="about-highlight-value">Full-Stack Products</div>
              </div>
              <div className="about-highlight-card">
                <div className="about-highlight-label">Strength</div>
                <div className="about-highlight-value">Fast Learning + Execution</div>
              </div>
              <div className="about-highlight-card">
                <div className="about-highlight-label">Current Goal</div>
                <div className="about-highlight-value">Contribute to real teams</div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <div className="gradient-border hover-lift animate-scaleIn">
                <div className="gradient-border-content text-center px-8 py-6">
                  <div className="text-2xl font-bold text-gradient-primary mb-2">Open to Opportunities</div>
                  <div className="text-gray-300">Ready to build, learn fast, and contribute with ownership.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
