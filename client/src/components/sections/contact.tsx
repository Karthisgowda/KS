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
    <section id="contact" className="py-20 bg-dark-800 section-appear">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="contact-title">
            <span className="text-gradient-primary">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto" data-testid="contact-description">
            Ready to collaborate on your next project? Let's connect and build something amazing together!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6" data-testid="contact-info-title">Contact Information</h3>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-4 hover-lift" data-testid={`contact-info-${index}`}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-400">{info.label}</p>
                  {info.link ? (
                    <a href={info.link} className="text-lg text-gray-300 hover:text-blue-400" data-testid={`contact-link-${index}`}>
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-lg text-gray-300" data-testid={`contact-value-${index}`}>{info.value}</p>
                  )}
                </div>
              </div>
            ))}
            
            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-300 mb-4" data-testid="social-title">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center hover-lift"
                    data-testid={`social-link-${index}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="gradient-border">
            <form className="gradient-border-content" onSubmit={handleSubmit} data-testid="contact-form">
              <h3 className="text-2xl font-semibold text-blue-400 mb-6" data-testid="form-title">Send Me a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-600 border border-gray-600 rounded-lg text-gray-300 focus:border-blue-500 focus:outline-none transition-all duration-300"
                    placeholder="Your Name"
                    data-testid="input-name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-600 border border-gray-600 rounded-lg text-gray-300 focus:border-blue-500 focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                    data-testid="input-email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">Subject</label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-600 border border-gray-600 rounded-lg text-gray-300 focus:border-blue-500 focus:outline-none transition-all duration-300"
                    placeholder="Project Collaboration"
                    data-testid="input-subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-600 border border-gray-600 rounded-lg text-gray-300 focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    data-testid="input-message"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold py-3 rounded-lg hover-lift"
                  data-testid="button-submit"
                >
                  <Send size={16} className="mr-2" />
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
