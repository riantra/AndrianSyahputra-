import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, CheckCircle2 } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Quality Assurance Engineer",
      company: "PT. Trans Teknologi Indonesia",
      location: "Bandung, Indonesia",
      period: "October 2023 - Present",
      type: "Full-time",
      projects: [
        {
          name: "Logistic Service Integrator (LSI)",
          achievements: [
            "Successfully launched a GPS-based logistics tracking system with 98% bug-free release rate",
            "Improved tracking precision by 75% across fleet and personnel through rigorous mobile and GPS hardware testing",
            "Actively participated in feature planning and flow design, detecting issues at conceptual stage",
            "Provided proactive UX/UI improvement suggestions, collaborating with designers and developers",
            "Created QA environments and documentation standards, increasing internal productivity by 80%"
          ]
        },
        {
          name: "MyTask Project (Management Apps)",
          achievements: [
            "Delivered 100% feature-compliant management system for internal task and productivity tracking",
            "Led usability testing efforts resulting in 80% increase in app usability rating",
            "Conducted detailed workflow validation ensuring seamless module integration",
            "Collaborated closely with developers to refine complex backend logic"
          ]
        }
      ]
    },
    {
      title: "Freelancer Quality Assurance Engineer",
      company: "NerdHeadz",
      location: "Remote - Russia",
      period: "May 2024 - Present",
      type: "Full-time",
      projects: [
        {
          name: "Multi-Platform QA Leadership",
          achievements: [
            "Spearheaded QA initiatives across 6 high-impact products: Clearjet, Uplinked, Fixzanet/Fizza Net, Cytrus.Ai, Busybee, and FutureSpark",
            "Led AI-focused QA efforts including adaptive learning logic testing and AI-generated report validation",
            "Developed custom API automation framework reducing defect detection time by 50%",
            "Built UI performance testing framework using Playwright with auto-reporting and live dashboards",
            "Increased test coverage by 60% through scalable Cypress-based UI and API test scripts",
            "Reduced developer debugging time by 90% through detailed, actionable bug reports"
          ]
        }
      ]
    },
    {
      title: "Freelance Mobile Quality Assurance",
      company: "Pradini",
      location: "Remote - Indonesia",
      period: "June 2024 - August 2024",
      type: "Full-time",
      projects: [
        {
          name: "Healthcare Mobile Application",
          achievements: [
            "Achieved 95% bug-free mobile application releases for premature baby care app",
            "Verified cross-platform functionality on iOS and Android ensuring consistent performance",
            "Conducted comprehensive regression testing preventing feature degradation",
            "Integrated medical insights increasing user trust and adoption by 45%"
          ]
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A track record of delivering exceptional software quality across diverse industries 
            and challenging projects with measurable impact.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="card-elegant p-8">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 pb-6 border-b border-border">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{experience.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium">{experience.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {experience.period}
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="self-start lg:self-center">
                  {experience.type}
                </Badge>
              </div>

              {/* Projects */}
              <div className="space-y-6">
                {experience.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="space-y-4">
                    <h4 className="text-xl font-semibold text-primary">
                      {project.name}
                    </h4>
                    <div className="space-y-3">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <Card className="text-center p-6 card-elegant">
            <div className="text-3xl font-bold gradient-text mb-2">98%</div>
            <div className="text-muted-foreground">Bug-Free Release Rate</div>
          </Card>
          <Card className="text-center p-6 card-elegant">
            <div className="text-3xl font-bold gradient-text mb-2">75%</div>
            <div className="text-muted-foreground">Tracking Precision Improvement</div>
          </Card>
          <Card className="text-center p-6 card-elegant">
            <div className="text-3xl font-bold gradient-text mb-2">60%</div>
            <div className="text-muted-foreground">Test Coverage Increase</div>
          </Card>
          <Card className="text-center p-6 card-elegant">
            <div className="text-3xl font-bold gradient-text mb-2">90%</div>
            <div className="text-muted-foreground">Debug Time Reduction</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
