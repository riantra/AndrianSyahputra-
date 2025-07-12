import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink, CheckCircle2 } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Quality Assurance Fundamentals",
      issuer: "DTS Kominfo - Binar Academy",
      date: "March 2023",
      score: "91.5/100",
      type: "Bootcamp Certification",
      skills: ["Test Case Development", "Bug Reporting", "API Testing", "Agile Methodology"],
      description: "Comprehensive training in QA fundamentals, testing principles, and manual quality assurance practices.",
      achievements: [
        "Mastered test case creation and scenario development",
        "Learned bug reporting and tracking methodologies",
        "Gained expertise in API testing fundamentals",
        "Understanding of Agile development and deployment phases"
      ]
    },
    {
      title: "No-Code Development & Testing",
      issuer: "Self-Directed Learning & Practice",
      date: "2024",
      type: "Practical Expertise",
      skills: ["BugBug.io", "No-Code Testing", "Visual Testing", "Automated Workflows"],
      description: "Specialized expertise in no-code testing platforms and visual automation tools for modern web applications.",
      achievements: [
        "Proficient in BugBug.io for visual test automation",
        "Expert in no-code testing workflows and methodologies",
        "Advanced skills in visual regression testing",
        "Capable of building complex automated test suites without coding"
      ]
    },
    {
      title: "AI Testing & Validation Specialist",
      issuer: "Industry Experience & Continuous Learning",
      date: "2024 - Present",
      type: "Professional Expertise",
      skills: ["AI Algorithm Testing", "ML Model Validation", "AI Bias Testing", "Performance Testing"],
      description: "Specialized expertise in testing AI-powered applications, machine learning models, and intelligent systems.",
      achievements: [
        "Expert in testing AI recommendation engines and learning algorithms",
        "Proficient in validating machine learning model accuracy and performance",
        "Skilled in AI bias detection and fairness testing methodologies",
        "Experienced in testing voice recognition and natural language processing systems"
      ]
    },
    {
      title: "Full Stack Developer with Ruby",
      issuer: "Fresh Graduate Academy",
      date: "March 2022",
      type: "Development Certification",
      skills: ["HTML", "CSS", "Ruby", "Ruby on Rails", "Web Development"],
      description: "Full-stack development training covering modern web technologies and framework development.",
      achievements: [
        "Built complete web applications using Ruby on Rails",
        "Mastered front-end technologies (HTML, CSS, JavaScript)",
        "Understanding of MVC architecture and design patterns",
        "Experience with database design and management"
      ]
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Dicoding",
      date: "April 2023",
      type: "Cloud Certification",
      skills: ["AWS Cloud", "Cloud Computing", "Infrastructure", "DevOps"],
      description: "Foundational knowledge of AWS cloud services and cloud computing principles.",
      achievements: [
        "Understanding of AWS core services and architecture",
        "Knowledge of cloud security and compliance",
        "Familiarity with cloud cost optimization",
        "Basic understanding of DevOps practices in cloud environments"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Certifications & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development in quality assurance, 
            AI testing, and emerging technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-elegant p-6 space-y-4 hover:scale-[1.02] transition-transform">
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {cert.type}
                  </Badge>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{cert.issuer}</p>
                </div>
              </div>

              {/* Date and Score */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {cert.date}
                </div>
                {cert.score && (
                  <div className="text-success font-semibold">
                    Score: {cert.score}
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Key Skills</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Key Learnings</h4>
                <div className="space-y-1">
                  {cert.achievements.slice(0, 2).map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-success mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* AI Testing Expertise Highlight */}
        <div className="mt-16">
          <Card className="card-elegant p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-3">
                AI Testing <span className="gradient-text">Specialist</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Specialized expertise in testing AI-powered applications, machine learning models, 
                and intelligent systems. Proven track record in validating AI accuracy, 
                preventing bias, and ensuring reliable AI-driven user experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-1">95%</div>
                <div className="text-sm text-muted-foreground">AI Model Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-1">6+</div>
                <div className="text-sm text-muted-foreground">AI Projects Tested</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-1">50K+</div>
                <div className="text-sm text-muted-foreground">AI-Powered Users Served</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;