import { ArrowRight } from "lucide-react";

export default function Hero() {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-mono-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 fade-in">
              <p className="text-sm uppercase tracking-wider text-mono-600 font-medium">
                Designer & Developer
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-semibold letter-tight leading-[0.95] text-balance" data-testid="hero-title">
                Karthik S Gowda
              </h1>
            </div>

            <p className="text-lg md:text-xl text-mono-600 leading-relaxed max-w-xl fade-in" style={{animationDelay: '0.1s'}} data-testid="hero-description">
              Creating thoughtful digital experiences through clean design and purposeful code.
            </p>

            <div className="flex flex-wrap gap-4 items-center fade-in" style={{animationDelay: '0.2s'}}>
              <button
                onClick={() => handleScrollToSection('#projects')}
                className="group inline-flex items-center gap-2 bg-mono-900 text-mono-100 px-8 py-4 hover-lift font-medium"
                data-testid="button-view-work"
              >
                View Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => handleScrollToSection('#contact')}
                className="inline-flex items-center gap-2 border border-mono-900 text-mono-900 px-8 py-4 hover-lift font-medium hover:bg-mono-900 hover:text-mono-100 transition-colors duration-300"
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right side - Minimalist visual element */}
          <div className="lg:col-span-5 hidden lg:block fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative aspect-square">
              <div className="absolute inset-0 border border-mono-300"></div>
              <div className="absolute inset-8 border border-mono-400"></div>
              <div className="absolute inset-16 border border-mono-500"></div>
              <div className="absolute inset-24 bg-mono-900"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 fade-in" style={{animationDelay: '0.4s'}}>
          <div className="flex flex-col items-center gap-2 text-mono-500">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <div className="w-px h-12 bg-mono-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
