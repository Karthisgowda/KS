export default function About() {
  return (
    <section id="about" className="py-20 section-appear">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="about-title">
            <span className="text-gradient-primary">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center animate-fadeInUp">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400" data-testid="about-subtitle">Professional Summary</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg" data-testid="about-description-1">
              I'm a passionate BCA student with hands-on experience in full-stack web and Android development. 
              My expertise spans across JavaScript, Python, and backend integration, with a strong focus on 
              creating user-centric design solutions.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg" data-testid="about-description-2">
              As a quick learner and collaborative team player, I'm dedicated to building efficient and 
              impactful technology solutions that make a real difference. I thrive on tackling complex 
              challenges and turning innovative ideas into reality.
            </p>
            
            <div className="flex justify-center mt-8">
              <div className="gradient-border hover-lift animate-scaleIn">
                <div className="gradient-border-content text-center px-8 py-6">
                  <div className="text-2xl font-bold text-gradient-primary mb-2">Ready to Collaborate</div>
                  <div className="text-gray-300">Let's build something amazing together!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
