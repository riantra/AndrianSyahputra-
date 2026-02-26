import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, CheckCircle2, ArrowUpRight } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Quality Assurance Engineer → Project Manager",
      company: "PT. Trans Teknologi Indonesia (Transtrack)",
      location: "Bandung, Indonesia",
      period: "October 2023 - Present (3+ Years)",
      type: "Full-time",
      promoted: true,
      sections: [
        {
          name: "As Project Manager (2025 – Present)",
          highlight: true,
          achievements: [
            "Managing cross-functional teams (Developers, QA, BA) across multiple enterprise projects",
            "Restructured previously unorganized workflows into structured project delivery processes",
            "Resolved technical and operational bottlenecks across ongoing projects",
            "Successfully renegotiated multiple project alignments with clients",
            "Rebuilt stakeholder trust and received direct client appreciation for system stabilization",
            "Implemented time-tracking tools and Notion-based dashboards improving management visibility"
          ]
        },
        {
          name: "Projects Managed",
          achievements: [
            "LSI Telematik (Client: Apical – APRIL Group) – Enterprise shipment monitoring with GPS tracking, weighbridge, and fleet monitoring",
            "Halal Logistic Tracking System (Client: JAKIM – Malaysia) – Halal compliance ecosystem integrating GPS, E-Seal smart locks, and vendor certification",
            "MyTask (Internal) – Productivity and workflow management application"
          ]
        },
        {
          name: "As Quality Assurance Engineer (2023 – 2025)",
          achievements: [
            "Delivered GPS-based logistics tracking system with 98% bug-free production release",
            "Improved GPS and hardware tracking precision by 75% across fleet and personnel",
            "Researched and implemented self-hosted test management tools, saving significant monthly operational expenses",
            "Built automation frameworks reducing regression effort and improving release stability",
            "Increased QA productivity by 80% through structured documentation and environment standardization",
            "Mentored junior QA members and improved process maturity"
          ]
        }
      ]
    },
    {
      title: "Freelancer Quality Assurance Engineer",
      company: "NerdHeadz",
      location: "Remote - Russia",
      period: "May 2024 - Present (1.6 Years)",
      type: "Full-time",
      sections: [
        {
          name: "Multi-Platform AI & Infrastructure QA",
          achievements: [
            "Spearheaded QA across 8+ products: ClearJet, Uplinked, Fixzanet/Fizza Net, Cytrus.Ai, Busybee, FutureSpark, Nexus, and Codebeu",
            "Led AI-focused QA strategy: adaptive learning validation, AI-generated report integrity, predictive logic validation, and recommendation accuracy testing",
            "Designed structured validation frameworks for AI outputs, anomaly detection, and dataset consistency",
            "Built Playwright-based UI performance testing framework with auto-reporting dashboards",
            "Increased test coverage by 60% through scalable Cypress UI & API automation architecture",
            "Reduced developer debugging time by 90% through detailed, actionable bug reports",
            "Collaborated in fully international remote team with consistent high-quality results"
          ]
        }
      ]
    },
    {
      title: "Freelance Mobile Quality Assurance",
      company: "Pradini",
      location: "Remote - Indonesia",
      period: "June 2024 - August 2024",
      type: "Contract",
      sections: [
        {
          name: "Healthcare Mobile Application",
          achievements: [
            "Achieved 95% bug-free mobile releases for premature baby care healthcare app",
            "Verified cross-platform functionality on iOS and Android ensuring consistent performance",
            "Conducted comprehensive regression testing preventing feature degradation",
            "Integrated medical insights increasing user trust and adoption by 45%"
          ]
        }
      ]
    }
  ];

  const metrics = [
    { value: "98%", label: "Bug-Free Release" },
    { value: "75%", label: "Tracking Precision↑" },
    { value: "60%", label: "Test Coverage↑" },
    { value: "90%", label: "Debug Time↓" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="font-mono text-xs text-accent uppercase tracking-[0.2em]">Career Path</p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-divider mt-4"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="card-elegant p-8 relative overflow-hidden">
              {experience.promoted && (
                <div className="absolute top-0 right-0 px-4 py-1.5 text-xs font-mono font-semibold text-accent-foreground rounded-bl-xl" style={{ background: 'var(--gradient-primary)' }}>
                  <ArrowUpRight className="w-3 h-3 inline mr-1" />
                  PROMOTED
                </div>
              )}
              
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 pb-6 border-b border-border">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-heading">{experience.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <span className="font-semibold">{experience.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-mono">
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
                <Badge variant="secondary" className="self-start lg:self-center mt-3 lg:mt-0 font-mono text-xs">
                  {experience.type}
                </Badge>
              </div>

              {/* Sections */}
              <div className="space-y-8">
                {experience.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-4">
                    <h4 className={`text-lg font-semibold font-heading ${section.highlight ? 'text-accent' : 'text-primary'}`}>
                      {section.name}
                    </h4>
                    <div className="space-y-3">
                      {section.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed text-sm">
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
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center p-6 card-elegant group">
              <div className="text-3xl font-bold gradient-text mb-1 font-heading">{metric.value}</div>
              <div className="text-muted-foreground text-xs font-mono uppercase tracking-wider">{metric.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
