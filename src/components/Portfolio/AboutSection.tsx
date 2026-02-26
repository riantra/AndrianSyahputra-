import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Code, Users, Target, Brain, Rocket } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI Testing Specialist",
      description: "Expert in validating AI outputs, ML models, anomaly detection, and adaptive learning systems"
    },
    {
      icon: Rocket,
      title: "QA → Project Manager",
      description: "Promoted to PM at Transtrack based on innovation initiatives and leadership excellence"
    },
    {
      icon: Award,
      title: "95-98% Bug-Free Releases",
      description: "Consistent delivery of production-ready software with industry-leading quality metrics"
    },
    {
      icon: Users,
      title: "Cross-Border Collaboration",
      description: "International remote teams across Russia & Indonesia, managing multi-client enterprise projects"
    }
  ];

  const skills = [
    "AI Output Validation", "ML Model Testing", "Adaptive Learning QA", "Anomaly Detection",
    "Cypress", "Playwright", "Selenium", "Appium", "Performance Testing", 
    "GPS & Hardware Integration", "E-Seal Testing", "Project Management",
    "Agile/Scrum", "CI/CD", "API Automation", "Cross-Platform Testing"
  ];

  return (
    <section className="py-24 bg-muted/30 tech-grid">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="font-mono text-xs text-accent uppercase tracking-[0.2em]">Who I Am</p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Personal Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="/lovable-uploads/33f3eabc-ff79-4ae5-a605-a12d5fd5031a.png" 
                alt="Andrian Syahputra - Professional"
                className="w-full h-[480px] object-cover rounded-3xl"
                style={{ boxShadow: 'var(--shadow-elegant)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-6 left-6 right-6 glass-effect rounded-2xl p-4">
                <p className="text-white text-sm font-mono">
                  <span className="text-accent">const</span> role = <span className="text-accent">"PM & QA Lead"</span>;
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-3xl font-bold">Professional Journey</h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                AI-focused Quality Assurance Engineer turned Project Manager with <strong className="text-foreground">3+ years</strong> of 
                experience delivering AI-powered intelligence platforms, GPS-integrated logistics systems, 
                enterprise shipment monitoring solutions, and mobile applications.
              </p>
              
              <p>
                Experienced in <strong className="text-foreground">automation framework architecture</strong> (Cypress, Playwright), 
                AI output validation, hardware–software integration (GPS & E-Seal), and cross-border collaboration 
                across Russia & Indonesia. Currently leading multi-client enterprise projects as Project Manager at Transtrack.
              </p>
              
              <p>
                My track record includes delivering <strong className="text-foreground">95–98% bug-free releases</strong>, increasing test coverage 
                by 60%, reducing defect detection time by 50%, and improving QA efficiency by up to 80% through 
                structured automation and strategic validation frameworks.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-4 font-heading">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1.5 text-xs font-mono">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="card-elegant text-center p-8 group">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform group-hover:scale-110" style={{ background: 'var(--gradient-primary)' }}>
                <highlight.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2 font-heading">{highlight.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
