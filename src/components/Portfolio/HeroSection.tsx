import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
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
      
      // Show success message
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
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-primary rounded-full opacity-30 animate-bounce"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Hi, I'm <span className="gradient-text">Andrian</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-medium">
                Quality Assurance Engineer
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-white/80">
                <MapPin className="w-5 h-5" />
                <span>Bandung, Indonesia</span>
              </div>
            </div>
            
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              Expert in AI/ML testing, test automation, and quality assurance across web, mobile, and enterprise applications. 
              Proven track record in implementing cutting-edge testing solutions, from AI-powered test automation to 
              performance and security testing. Passionate about delivering flawless user experiences through 
              comprehensive testing strategies and innovative quality assurance approaches.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="btn-primary glass-effect group"
                onClick={scrollToContact}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-foreground hover:bg-white/90 border-white/30 hover:border-white/50"
                onClick={handleDownloadCV}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">2+</div>
                <div className="text-white/70">Years in QA</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">95%+</div>
                <div className="text-white/70">Test Coverage</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-white/70">Projects Tested</div>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img 
                  src="/lovable-uploads/2630c189-2ed3-41e5-a9a5-f58c2b7cb0c0.png" 
                  alt="Andrian Syahputra - Professional Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;