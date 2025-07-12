import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, CheckCircle2, Zap, Shield, BarChart3 } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "LSI Apical - Advanced Logistics Platform",
      company: "PT. Trans Teknologi Indonesia",
      description: "Next-generation logistics management system with real-time tracking, automated routing, and comprehensive analytics. Integrated with multiple payment gateways and third-party logistics providers.",
      category: "Logistics & Transportation",
      icon: BarChart3,
      technologies: ["React", "Node.js", "PostgreSQL", "GPS Integration", "Payment APIs", "Microservices"],
      achievements: [
        "98% bug-free release rate with zero critical production issues",
        "75% improvement in tracking precision across fleet operations", 
        "Reduced customer complaints by 85% through enhanced reliability",
        "Successfully integrated with 8+ payment providers and logistics partners",
        "Optimized system performance handling 50,000+ concurrent users"
      ],
      metrics: {
        "Bug-Free Rate": "98%",
        "Performance Improvement": "75%",
        "User Capacity": "50K+"
      },
      impact: "Revolutionized logistics operations for Indonesia's leading transportation company, serving 50,000+ daily active users across multiple regions.",
      role: "Lead QA Engineer responsible for end-to-end testing strategy, automation framework, and quality assurance across web and mobile platforms."
    },
    {
      title: "Storyed - AI Voice-Powered Book Creator",
      company: "NerdHeadz",
      description: "Innovative mobile application that transforms voice recordings into structured digital books using advanced AI. Features voice-to-text conversion, intelligent chapter organization, and automated editing suggestions.",
      category: "AI & Creative Technology",
      icon: Zap,
      technologies: ["AI/ML", "React Native", "Speech Recognition", "Natural Language Processing", "Cloud APIs"],
      achievements: [
        "Developed comprehensive AI testing framework for voice recognition accuracy",
        "Achieved 94% accuracy in voice-to-text conversion across multiple languages",
        "Validated AI-driven content organization and chapter structuring",
        "Ensured seamless cross-platform functionality on iOS and Android",
        "Optimized AI processing to reduce conversion time by 60%"
      ],
      metrics: {
        "Voice Accuracy": "94%",
        "Processing Speed": "+60%",
        "User Satisfaction": "92%"
      },
      impact: "Empowered content creators to easily transform spoken ideas into published digital books, democratizing the book creation process.",
      role: "AI QA Specialist focused on voice recognition testing, AI algorithm validation, and ensuring consistent performance across different accents and languages."
    },
    {
      title: "Clearjet - Delivery Infrastructure Platform",
      company: "NerdHeadz",
      description: "Comprehensive delivery management platform providing real-time logistics solutions, route optimization, and fleet management for e-commerce and logistics companies worldwide.",
      category: "Logistics & E-commerce",
      icon: Shield,
      technologies: ["Microservices", "React", "Node.js", "Redis", "PostgreSQL", "Real-time Analytics"],
      achievements: [
        "Implemented robust testing framework reducing critical bugs by 90%",
        "Validated real-time tracking accuracy across multiple time zones",
        "Ensured 99.9% uptime through comprehensive load testing",
        "Optimized API response times to under 200ms globally",
        "Successfully scaled platform to handle 100,000+ daily deliveries"
      ],
      metrics: {
        "Uptime": "99.9%",
        "API Response": "<200ms",
        "Daily Deliveries": "100K+"
      },
      impact: "Streamlined delivery operations for 500+ businesses globally, reducing delivery times by 40% and improving customer satisfaction.",
      role: "Senior QA Engineer specializing in distributed systems testing, performance optimization, and real-time data validation."
    },
    {
      title: "AI-Powered Student Learning Platform (FutureSpark)",
      company: "NerdHeadz", 
      description: "Advanced educational platform leveraging AI to provide personalized learning experiences, adaptive content delivery, and intelligent progress tracking for students worldwide.",
      category: "Education Technology",
      icon: Zap,
      technologies: ["AI/ML", "React", "Python", "TensorFlow", "Natural Language Processing", "Adaptive Learning"],
      achievements: [
        "Designed comprehensive test cases for adaptive learning algorithms",
        "Validated AI-generated student progress reports for 95% accuracy",
        "Ensured data integrity across complex AI recommendation systems",
        "Tested personalized learning paths for optimal educational outcomes",
        "Verified AI bias prevention in content recommendations"
      ],
      metrics: {
        "AI Accuracy": "95%",
        "User Engagement": "+65%",
        "Learning Outcomes": "+40%"
      },
      impact: "Enhanced learning outcomes for 50,000+ students through AI-driven personalized education experiences across 15+ countries.",
      role: "AI-focused QA specialist ensuring quality and reliability of machine learning algorithms and educational content delivery systems."
    },
    {
      title: "Healthcare Mobile App for Premature Baby Care",
      company: "Pradini",
      description: "Specialized mobile application providing medical insights, care guidelines, and tracking tools for parents of premature babies. Features expert medical content and progress monitoring.",
      category: "Healthcare Technology", 
      icon: Shield,
      technologies: ["React Native", "Firebase", "Medical APIs", "iOS", "Android", "Healthcare Compliance"],
      achievements: [
        "Achieved 95% bug-free mobile releases across iOS and Android",
        "Verified medical content accuracy with healthcare professionals",
        "Ensured HIPAA compliance for sensitive medical data",
        "45% increase in user trust and adoption rates",
        "Validated integration with medical device APIs"
      ],
      metrics: {
        "Bug-Free Rate": "95%",
        "User Adoption": "+45%",
        "Platform Coverage": "100%"
      },
      impact: "Supported 5,000+ families with critical premature baby care information, improving care outcomes and parental confidence.",
      role: "Mobile QA specialist focused on cross-platform testing, medical data validation, and user experience optimization in healthcare applications."
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
