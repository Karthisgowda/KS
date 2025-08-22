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
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInLeft">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional developer portrait" 
              className="rounded-xl shadow-2xl w-full h-auto hover-lift"
              data-testid="about-image"
            />
          </div>
          
          <div className="animate-fadeInRight">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400" data-testid="about-subtitle">Professional Summary</h3>
            <p className="text-gray-300 mb-6 leading-relaxed" data-testid="about-description-1">
              I'm a passionate BCA student with hands-on experience in full-stack web and Android development. 
              My expertise spans across JavaScript, Python, and backend integration, with a strong focus on 
              creating user-centric design solutions.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed" data-testid="about-description-2">
              As a quick learner and collaborative team player, I'm dedicated to building efficient and 
              impactful technology solutions that make a real difference. I thrive on tackling complex 
              challenges and turning innovative ideas into reality.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="gradient-border">
                <div className="gradient-border-content text-center" data-testid="stat-experience">
                  <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
              <div className="gradient-border">
                <div className="gradient-border-content text-center" data-testid="stat-projects">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">10+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
