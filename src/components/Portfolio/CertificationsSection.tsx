import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, CheckCircle2, Brain, Cpu, Cloud, Code2, Layout } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AI Testing & Validation Specialist",
      issuer: "Industry Experience & Continuous Learning",
      date: "2024 - Present",
      type: "Professional Expertise",
      icon: Brain,
      skills: ["AI Algorithm Testing", "ML Model Validation", "AI Bias Testing", "Anomaly Detection", "Predictive Logic QA"],
      description: "Specialized expertise in testing AI-powered applications, ML models, anomaly detection, and intelligent recommendation systems."
    },
    {
      title: "No-Code Development & Testing",
      issuer: "Self-Directed Learning & Practice",
      date: "2024",
      type: "Practical Expertise",
      icon: Layout,
      skills: ["BugBug.io", "No-Code Testing", "Visual Automation", "Automated Workflows"],
      description: "Expert in no-code testing platforms and visual automation tools for rapid modern web application testing."
    },
    {
      title: "Quality Assurance Fundamentals",
      issuer: "DTS Kominfo - Binar Academy",
      date: "March 2023",
      score: "91.5/100",
      type: "Bootcamp",
      icon: Award,
      skills: ["Test Case Development", "Bug Reporting", "API Testing", "Agile"],
      description: "Comprehensive QA training covering testing principles, manual QA practices, and API testing fundamentals."
    },
    {
      title: "Full Stack Developer with Ruby",
      issuer: "Fresh Graduate Academy",
      date: "March 2022",
      type: "Development",
      icon: Code2,
      skills: ["HTML", "CSS", "Ruby", "Ruby on Rails"],
      description: "Full-stack web development training with modern technologies and MVC architecture."
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Dicoding",
      date: "April 2023",
      type: "Cloud",
      icon: Cloud,
      skills: ["AWS Cloud", "Cloud Computing", "Infrastructure", "DevOps"],
      description: "AWS cloud services foundational knowledge including architecture, security, and cost optimization."
    },
    {
      title: "Product Manager Techniques",
      issuer: "Skill Academy",
      date: "November 2022",
      type: "Management",
      icon: Cpu,
      skills: ["Product Strategy", "Digital Product", "TIK Applications"],
      description: "Product management methodologies for digital application development and strategy."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="font-mono text-xs text-accent uppercase tracking-[0.2em]">Credentials</p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Certifications & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="section-divider mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-elegant p-6 space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: 'var(--gradient-primary)' }}>
                  <cert.icon className="w-5 h-5 text-white" />
                </div>
                <Badge variant="outline" className="text-[10px] font-mono">
                  {cert.type}
                </Badge>
              </div>
              
              <div>
                <h3 className="text-base font-bold mb-1 font-heading">{cert.title}</h3>
                <p className="text-xs text-muted-foreground font-mono">{cert.issuer}</p>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-muted-foreground font-mono">
                  <Calendar className="w-3 h-3" />
                  {cert.date}
                </div>
                {cert.score && (
                  <span className="text-accent font-semibold font-mono">{cert.score}</span>
                )}
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">{cert.description}</p>

              <div className="flex flex-wrap gap-1">
                {cert.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary" className="text-[10px] font-mono px-2 py-0.5">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* AI Testing Expertise Highlight */}
        <Card className="card-elegant p-10 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto" style={{ background: 'var(--gradient-primary)' }}>
            <Brain className="w-8 h-8 text-white" />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-3 font-heading">
              AI Testing <span className="gradient-text">Specialist</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm">
              Deep expertise in validating AI outputs, ML model accuracy, anomaly detection systems, 
              adaptive learning algorithms, predictive analytics, and AI-driven recommendation engines. 
              Designed structured validation frameworks for continuously refreshed intelligence systems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "96%", label: "AI Model Accuracy" },
              { value: "8+", label: "AI Projects Tested" },
              { value: "50K+", label: "AI Users Served" },
              { value: "5+", label: "AI Validation Frameworks" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold gradient-text font-heading">{stat.value}</div>
                <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CertificationsSection;
