import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      label: "Email",
      value: "karthiksgowda28@gmail.com",
      link: "mailto:karthiksgowda28@gmail.com"
    },
    {
      label: "Phone",
      value: "+91 80508 28798",
      link: "tel:+918050828798"
    },
    {
      label: "Location",
      value: "Bangalore, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/karthisg"
    },
    {
      label: "GitHub",
      link: "https://github.com/Karthisgowda"
    }
  ];

  return (
    <section id="contact" className="py-32 md:py-40 section-appear bg-mono-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left - Title */}
          <div className="lg:col-span-3">
            <h2 className="text-sm uppercase tracking-wider text-mono-600 font-medium sticky top-32" data-testid="contact-title">
              Get In Touch
            </h2>
          </div>

          {/* Right - Contact */}
          <div className="lg:col-span-9 space-y-16">
            {/* Introduction */}
            <div className="space-y-6">
              <p className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight text-balance text-mono-900" data-testid="contact-description">
                Let's collaborate on your next project
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 gap-8 border-t border-mono-300 pt-12">
              {contactMethods.map((method, index) => (
                <div key={index} className="space-y-2" data-testid={`contact-info-${index}`}>
                  <p className="text-sm uppercase tracking-wider text-mono-600">
                    {method.label}
                  </p>
                  {method.link ? (
                    <a
                      href={method.link}
                      className="text-lg md:text-xl text-mono-900 hover:text-mono-600 transition-colors block"
                      data-testid={`contact-link-${index}`}
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-lg md:text-xl text-mono-900" data-testid={`contact-value-${index}`}>
                      {method.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="border-t border-mono-300 pt-12">
              <p className="text-sm uppercase tracking-wider text-mono-600 mb-6" data-testid="social-title">
                Connect
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-mono-900 text-mono-900 px-6 py-3 hover:bg-mono-900 hover:text-mono-100 transition-colors group/link"
                    data-testid={`social-link-${index}`}
                  >
                    <span className="font-medium">{social.label}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
