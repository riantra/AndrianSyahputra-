import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const currentYear = new Date().getFullYear();
  const scrollToSection = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ background: 'var(--gradient-dark)' }}>
      <div className="absolute inset-0 tech-grid opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="py-16 grid lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                <span className="text-white font-bold font-heading">AS</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-heading">Andrian Syahputra</h3>
                <p className="text-white/50 text-xs font-mono">PM & QA Engineer</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              AI-focused QA Engineer turned Project Manager. Delivering software excellence 
              through innovative testing and strategic leadership.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">Navigation</h4>
            <div className="space-y-2">
              {quickLinks.map((link, i) => (
                <button key={i} onClick={() => scrollToSection(link.href)} className="block text-white/50 hover:text-white transition-colors text-sm">
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">Contact</h4>
            <div className="space-y-3">
              {[
                { icon: Mail, text: "andriancodings@gmail.com", href: "mailto:andriancodings@gmail.com" },
                { icon: Phone, text: "+62 822-8473-6764", href: "tel:+6282284736764" },
                { icon: MapPin, text: "Bandung, Indonesia", href: "#" },
              ].map((item, i) => (
                <a key={i} href={item.href} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm">
                  <item.icon className="w-3.5 h-3.5" />
                  <span className="font-mono text-xs">{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/riantra" },
                { icon: Github, href: "https://github.com/andriantra" },
                { icon: Mail, href: "mailto:andriancodings@gmail.com" },
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
                  <social.icon className="w-4 h-4 text-white/60" />
                </a>
              ))}
            </div>
            <Button variant="outline" size="sm" className="bg-transparent border-white/10 text-white/70 hover:bg-white/5 hover:text-white text-xs"
              onClick={() => scrollToSection("#contact")}>
              <Mail className="w-3 h-3 mr-1" /> Get In Touch
            </Button>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex justify-between items-center">
          <span className="text-white/30 text-xs font-mono">© {currentYear} Andrian Syahputra</span>
          <Button size="sm" variant="ghost" onClick={scrollToTop} className="text-white/30 hover:text-white/60 hover:bg-white/5">
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
