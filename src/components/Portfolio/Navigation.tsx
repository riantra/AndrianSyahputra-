import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Mail } from "lucide-react";
import { toast } from "sonner";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDownloadCV = () => {
    try {
      const link = document.createElement('a');
      link.href = '/AndrianSyahputra_CV.pdf';
      link.download = 'AndrianSyahputra_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success('CV download started!');
    } catch (error) {
      toast.error('Failed to download CV.');
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
              <span className="text-white font-bold text-sm font-heading">AS</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-bold font-heading">Andrian Syahputra</span>
              <span className="text-xs text-muted-foreground ml-2 font-mono hidden md:inline">// PM & QA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection("#contact")}
              className="text-xs"
            >
              <Mail className="w-4 h-4 mr-1" />
              Contact
            </Button>
            <Button 
              size="sm" 
              className="btn-primary text-xs"
              onClick={handleDownloadCV}
            >
              <Download className="w-4 h-4 mr-1" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors text-sm py-2"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-3 space-y-2 border-t border-border/50">
                <Button variant="outline" size="sm" className="w-full text-xs" onClick={() => scrollToSection("#contact")}>
                  <Mail className="w-4 h-4 mr-1" /> Contact Me
                </Button>
                <Button size="sm" className="btn-primary w-full text-xs" onClick={handleDownloadCV}>
                  <Download className="w-4 h-4 mr-1" /> Download Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
