import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { toast } from "sonner";

const HeroSection = () => {
  const handleDownloadCV = () => {
    try {
      const link = document.createElement('a');
      link.href = '/AndrianSyahputra_CV.pdf';
      link.download = 'Andrian_Syahputra_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success('CV download started!');
    } catch (error) {
      console.error('Error downloading CV:', error);
      toast.error('Failed to download CV. Please try again.');
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-hero relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-accent/20 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-primary-variant/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[140px] animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-sm text-white/90">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="font-mono text-xs tracking-wider uppercase">Open to Opportunities</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Andrian<br />
                <span className="text-accent">Syahputra</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 font-medium font-heading">
                AI-Focused QA Engineer → Project Manager
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4" />
                <span className="font-mono">Bandung, Indonesia</span>
              </div>
            </div>
            
            <p className="text-base lg:text-lg text-white/70 leading-relaxed max-w-xl">
              3+ years delivering AI-powered intelligence platforms, GPS-integrated logistics systems, 
              and enterprise solutions. Proven track record with 95–98% bug-free releases, 
              60% test coverage increase, and 50% faster defect detection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="btn-primary glass-effect group text-base"
                onClick={scrollToContact}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/5 text-white hover:bg-white/10 border-white/20 hover:border-white/40 backdrop-blur-sm rounded-xl"
                onClick={handleDownloadCV}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-8 border-t border-white/10">
              {[
                { value: "3+", label: "Years" },
                { value: "98%", label: "Bug-Free" },
                { value: "10+", label: "Projects" },
                { value: "80%", label: "Efficiency↑" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-white font-heading">{stat.value}</div>
                  <div className="text-white/50 text-xs font-mono uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-72 h-72 lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/2630c189-2ed3-41e5-a9a5-f58c2b7cb0c0.png" 
                  alt="Andrian Syahputra - AI-Focused QA Engineer & Project Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-2xl"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-primary/30 rounded-xl"></div>
              <div className="absolute top-8 -left-8 flex items-center gap-2 px-3 py-2 glass-effect rounded-xl text-white text-xs font-mono">
                <Sparkles className="w-3 h-3 text-accent" />
                AI Testing Expert
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center">
          <div className="w-0.5 h-2 bg-white/60 rounded-full mt-1.5 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
