import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! I will get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-white" />,
      label: "Email",
      value: "karthiksgowda28@gmail.com",
      link: "mailto:karthiksgowda28@gmail.com"
    },
    {
      icon: <Phone className="text-white" />,
      label: "Phone",
      value: "+91 80508 28798",
      link: "tel:+918050828798"
    },
    {
      icon: <MapPin className="text-white" />,
      label: "Location",
      value: "Kengeri, Bangalore, 560060, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="text-white text-xl" />,
      link: "https://linkedin.com/in/karthisg",
      label: "LinkedIn"
    },
    {
      icon: <Github className="text-white text-xl" />,
      link: "https://github.com/Karthisgowda",
      label: "GitHub"
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-dark-800 section-appear">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-title-2 mb-4" data-testid="contact-title">
            <span className="text-gradient-primary">
              Get In Touch
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-body-large text-gray-400 max-w-2xl mx-auto" data-testid="contact-description">
            Ready to collaborate on your next project? Let's connect and build something amazing together!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-8" data-testid="contact-info-title">
              Contact Information
            </h3>

            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center gap-4 group"
                data-testid={`contact-info-${index}`}
              >
                <div className="w-12 h-12 bg-primary-600/10 rounded-xl flex items-center justify-center shrink-0">
                  <div className="text-primary-500">{info.icon}</div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-base text-gray-300 hover:text-primary-500 transition-colors"
                      data-testid={`contact-link-${index}`}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-base text-gray-300" data-testid={`contact-value-${index}`}>
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4" data-testid="social-title">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-600/10 rounded-xl flex items-center justify-center hover:bg-primary-600/20 transition-colors"
                    data-testid={`social-link-${index}`}
                    aria-label={social.label}
                  >
                    <div className="text-primary-500">{social.icon}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="apple-card p-8 md:p-10 rounded-2xl">
            <form onSubmit={handleSubmit} data-testid="contact-form">
              <h3 className="text-2xl font-semibold text-white mb-8" data-testid="form-title">
                Send Me a Message
              </h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 font-medium mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 placeholder:text-gray-600 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Your Name"
                    data-testid="input-name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 font-medium mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 placeholder:text-gray-600 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                    data-testid="input-email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-400 font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 placeholder:text-gray-600 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Project Collaboration"
                    data-testid="input-subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 placeholder:text-gray-600 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    data-testid="input-message"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="apple-button w-full py-4 text-base inline-flex items-center justify-center"
                  data-testid="button-submit"
                >
                  <Send size={18} strokeWidth={1.5} className="mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
