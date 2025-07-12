import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Code, Users, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "40% Efficiency Gains",
      description: "Led testing process improvements resulting in significant efficiency improvements"
    },
    {
      icon: Code,
      title: "Test Automation Expert",
      description: "Advanced proficiency in Cypress, Selenium, Playwright, and Appium"
    },
    {
      icon: Award,
      title: "95%+ Bug-Free Releases",
      description: "Consistent delivery of high-quality software with minimal defects"
    },
    {
      icon: Users,
      title: "International Experience",
      description: "Remote collaboration across diverse teams and industries globally"
    }
  ];

  const skills = [
    "Test Automation", "API Testing", "Cypress", "Selenium", "Playwright", 
    "Appium", "Performance Testing", "Agile Methodologies", "Test Strategy",
    "CI/CD Integration", "Bug Reporting", "Quality Assurance"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate Quality Assurance Engineer dedicated to delivering exceptional software quality 
            through innovative testing strategies and cutting-edge automation frameworks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="/lovable-uploads/33f3eabc-ff79-4ae5-a605-a12d5fd5031a.png" 
                alt="Andrian Syahputra - Outdoor Portrait"
                className="w-full h-[500px] object-cover rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-3xl font-bold mb-6">Professional Journey</h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 2 years of specialized experience in Quality Assurance, I've had the privilege 
                of working across diverse industries including logistics, healthcare, and education platforms. 
                My expertise spans from manual testing to advanced test automation frameworks.
              </p>
              
              <p>
                I'm particularly passionate about leveraging AI-focused QA methodologies and have led 
                initiatives that resulted in 40% efficiency gains in testing processes. My experience 
                includes international remote collaboration, having worked with teams across different 
                time zones and cultural backgrounds.
              </p>
              
              <p>
                My educational background includes a Computer Science degree from Universitas Islam Negeri 
                Sumatera Utara, complemented by an exchange program in Nebraska, USA, which has given me 
                a global perspective on technology and collaboration.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-4">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
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
            <Card key={index} className="card-elegant text-center p-6 hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
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