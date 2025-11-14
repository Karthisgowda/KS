export default function About() {
  return (
    <section id="about" className="py-32 md:py-40 section-appear about-pop bg-mono-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left - Title */}
          <div className="lg:col-span-3">
            <h2 className="text-sm uppercase tracking-wider text-mono-600 font-medium sticky top-32" data-testid="about-title">
              About
            </h2>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-9 space-y-8">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl lg:text-4xl font-display leading-snug text-balance text-mono-900" data-testid="about-description-1">
                I'm a designer and developer focused on creating meaningful digital experiences that merge aesthetic clarity with functional precision.
              </p>
              <p className="text-lg md:text-xl text-mono-600 leading-relaxed max-w-3xl" data-testid="about-description-2">
                Currently pursuing BCA with hands-on experience in full-stack development. I specialize in building clean, user-centered applications using modern web technologies and design principles.
              </p>
            </div>

            {/* Stats/Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-mono-300">
              <div>
                <p className="text-sm uppercase tracking-wider text-mono-600 mb-2">Focus</p>
                <p className="text-lg font-medium text-mono-900">Full Stack Development</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-mono-600 mb-2">Location</p>
                <p className="text-lg font-medium text-mono-900">Available Remotely</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-mono-600 mb-2">Status</p>
                <p className="text-lg font-medium text-mono-900">Open to Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
