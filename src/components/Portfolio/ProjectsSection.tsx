import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, CheckCircle2, Zap, Shield, BarChart3 } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "GPS-Based Logistics Tracking System",
      company: "PT. Trans Teknologi Indonesia",
      description: "Enterprise-grade logistics tracking platform with real-time GPS monitoring, route optimization, and fleet management capabilities. Handles thousands of vehicles and personnel across Indonesia.",
      category: "Logistics & Transportation",
      icon: BarChart3,
      technologies: ["React", "Node.js", "PostgreSQL", "GPS Integration", "Real-time Tracking"],
      achievements: [
        "98% bug-free release rate with zero critical issues in production",
        "75% improvement in tracking precision across fleet operations",
        "Reduced customer complaints by 85% through enhanced reliability",
        "Successfully integrated with 5+ third-party GPS hardware providers"
      ],
      metrics: {
        "Bug-Free Rate": "98%",
        "Performance Improvement": "75%",
        "Test Coverage": "92%"
      },
      impact: "Revolutionized logistics operations for Indonesia's leading transportation company, serving 10,000+ daily active users.",
      role: "Lead QA Engineer responsible for test strategy, automation framework, and quality assurance across mobile and web platforms."
    },
    {
      title: "AI-Powered Student Learning Platform (FutureSpark)",
      company: "NerdHeadz",
      description: "Advanced educational platform leveraging AI to provide personalized learning experiences, adaptive content delivery, and intelligent progress tracking for students worldwide.",
      category: "Education Technology",
      icon: Zap,
      technologies: ["AI/ML", "React", "Python", "TensorFlow", "Natural Language Processing"],
      achievements: [
        "Designed comprehensive test cases for adaptive learning algorithms",
        "Validated AI-generated student progress reports for accuracy",
        "Ensured data integrity across complex AI recommendation systems",
        "95% accuracy rate in AI-based learning path recommendations"
      ],
      metrics: {
        "AI Accuracy": "95%",
        "User Engagement": "+65%",
        "Learning Outcomes": "+40%"
      },
      impact: "Enhanced learning outcomes for 50,000+ students through AI-driven personalized education experiences.",
      role: "AI-focused QA specialist ensuring quality and reliability of machine learning algorithms and educational content delivery."
    },
    {
      title: "Job Marketplace with AI Recommendations (Fixzanet)",
      company: "NerdHeadz",
      description: "Intelligent job marketplace platform utilizing AI to match candidates with ideal positions based on skills, preferences, and career goals. Features advanced recommendation engine and real-time matching.",
      category: "Career & Employment",
      icon: Shield,
      technologies: ["AI Matching", "Microservices", "React", "Python", "Elasticsearch"],
      achievements: [
        "Validated AI-based job matching accuracy achieving 88% relevance score",
        "Tested complex recommendation algorithms for career advancement",
        "Ensured data privacy compliance across international regulations",
        "Optimized matching speed to under 2 seconds response time"
      ],
      metrics: {
        "Match Accuracy": "88%",
        "Response Time": "<2s",
        "User Satisfaction": "94%"
      },
      impact: "Connected 25,000+ job seekers with ideal positions through intelligent AI matching, reducing hiring time by 60%.",
      role: "Senior QA Engineer specializing in AI algorithm testing, data validation, and performance optimization for recommendation systems."
    },
    {
      title: "Healthcare Mobile App for Premature Baby Care",
      company: "Pradini",
      description: "Specialized mobile application providing medical insights, care guidelines, and tracking tools for parents of premature babies. Features expert medical content and progress monitoring.",
      category: "Healthcare Technology",
      icon: Shield,
      technologies: ["React Native", "Firebase", "Medical APIs", "iOS", "Android"],
      achievements: [
        "Achieved 95% bug-free mobile releases across iOS and Android",
        "Verified medical content accuracy with healthcare professionals",
        "Ensured HIPAA compliance for sensitive medical data",
        "45% increase in user trust and adoption rates"
      ],
      metrics: {
        "Bug-Free Rate": "95%",
        "User Adoption": "+45%",
        "Platform Coverage": "100%"
      },
      impact: "Supported 5,000+ families with critical premature baby care information, improving care outcomes and parental confidence.",
      role: "Mobile QA specialist focused on cross-platform testing, medical data validation, and user experience optimization."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing impactful QA projects across diverse industries, from AI-powered platforms 
            to enterprise logistics systems, each delivering measurable business value.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-elegant p-8 space-y-6 hover:scale-[1.02] transition-transform">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground font-medium">{project.company}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="space-y-3">
                <h4 className="font-semibold">Key Achievements</h4>
                <div className="space-y-2">
                  {project.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
                {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <div className="text-lg font-bold gradient-text">{value}</div>
                    <div className="text-xs text-muted-foreground">{key}</div>
                  </div>
                ))}
              </div>

              {/* Impact & Role */}
              <div className="space-y-4 pt-4 border-t border-border">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Business Impact</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.impact}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">My Role</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Want to see more projects?</h3>
            <p className="text-muted-foreground">
              These are just highlights of my work. I'd be happy to discuss other projects and share detailed case studies.
            </p>
            <Button size="lg" className="btn-primary">
              <ExternalLink className="w-5 h-5 mr-2" />
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;