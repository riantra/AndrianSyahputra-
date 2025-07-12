import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ArrowUp,
  Heart
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "andriancodings@gmail.com",
      href: "mailto:andriancodings@gmail.com"
    },
    {
      icon: Phone,
      text: "+62 822-8473-6764",
      href: "tel:+6282284736764"
    },
    {
      icon: MapPin,
      text: "Bandung, Indonesia",
      href: "https://maps.google.com/?q=Bandung,Indonesia"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/riantra"
    },
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/andriantra"
    },
    {
      icon: Mail,
      name: "Email",
      href: "mailto:andriancodings@gmail.com"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Andrian Syahputra</h3>
                <p className="text-background/70">Senior QA Engineer</p>
              </div>
            </div>
            
            <p className="text-background/70 leading-relaxed">
              Passionate about delivering exceptional software quality through innovative 
              testing strategies and cutting-edge automation frameworks.
            </p>

            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <contact.icon className="w-4 h-4" />
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-background/70 hover:text-background transition-colors text-sm text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Expertise</h4>
            <div className="space-y-3 text-sm text-background/70">
              <p>Quality Assurance</p>
              <p>Test Automation</p>
              <p>API Testing</p>
              <p>Performance Testing</p>
              <p>Mobile Testing</p>
              <p>AI/ML Testing</p>
              <p>Process Optimization</p>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Let's Connect</h4>
            <p className="text-background/70 text-sm leading-relaxed">
              Ready to work together? Let's discuss your QA needs and explore 
              how I can help deliver exceptional software quality.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-background/70 group-hover:text-background transition-colors" />
                </a>
              ))}
            </div>

            <Button 
              variant="outline" 
              size="sm" 
              className="bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground"
              onClick={() => scrollToSection("#contact")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-background/70 text-sm">
              <span>© {currentYear} Andrian Syahputra. Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>and lots of coffee.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-background/70 text-sm">Scroll to top</span>
              <Button
                size="sm"
                variant="outline"
                onClick={scrollToTop}
                className="bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;