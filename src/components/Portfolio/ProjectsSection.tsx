import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle2, Zap, Shield, BarChart3, Brain, Globe, Satellite } from "lucide-react";

interface Project {
  title: string;
  company: string;
  description: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  achievements: string[];
  metrics: Record<string, string>;
  impact: string;
  role: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <Card className="card-elegant p-8 space-y-6 group">
    {/* Header */}
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: 'var(--gradient-primary)' }}>
          <project.icon className="w-6 h-6 text-white" />
        </div>
        <Badge variant="secondary" className="text-xs font-mono">
          {project.category}
        </Badge>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-1 font-heading">{project.title}</h3>
        <p className="text-muted-foreground text-sm font-mono">{project.company}</p>
      </div>
    </div>

    <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>

    {/* Technologies */}
    <div className="flex flex-wrap gap-1.5">
      {project.technologies.map((tech, i) => (
        <Badge key={i} variant="outline" className="text-xs font-mono px-2 py-0.5">
          {tech}
        </Badge>
      ))}
    </div>

    {/* Key Achievements */}
    <div className="space-y-2">
      <h4 className="font-semibold text-sm font-heading">Key Achievements</h4>
      {project.achievements.slice(0, 4).map((achievement, i) => (
        <div key={i} className="flex items-start gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
          <p className="text-xs text-muted-foreground leading-relaxed">{achievement}</p>
        </div>
      ))}
    </div>

    {/* Metrics */}
    <div className="grid grid-cols-3 gap-3 p-4 bg-muted/50 rounded-xl">
      {Object.entries(project.metrics).map(([key, value], i) => (
        <div key={i} className="text-center">
          <div className="text-base font-bold gradient-text font-heading">{value}</div>
          <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">{key}</div>
        </div>
      ))}
    </div>

    {/* Impact */}
    <div className="pt-4 border-t border-border">
      <p className="text-xs text-muted-foreground leading-relaxed italic">
        💡 {project.impact}
      </p>
    </div>
  </Card>
);

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Nexus – AI Investor Intelligence Platform",
      company: "NerdHeadz",
      description: "Advanced AI-powered intelligence platform for investors featuring predictive analytics, thesis-alignment modeling, anomaly detection, and continuously refreshed datasets for real-time investment decision-making.",
      category: "AI & FinTech",
      icon: Brain,
      technologies: ["AI/ML", "Predictive Analytics", "Anomaly Detection", "Data Pipelines", "Real-time Processing"],
      achievements: [
        "Designed structured validation frameworks for AI outputs and dataset consistency across continuously refreshed intelligence systems",
        "Validated predictive logic and thesis-alignment modeling accuracy",
        "Tested anomaly detection algorithms ensuring reliable investor alerts",
        "Ensured data integrity across complex AI recommendation pipelines"
      ],
      metrics: { "AI Accuracy": "96%", "Data Integrity": "99.5%", "Detection Speed": "Real-time" },
      impact: "Empowered investors with AI-driven insights for smarter, data-backed investment decisions across global markets.",
      role: "AI QA Specialist responsible for validating predictive models, anomaly detection systems, and data pipeline integrity."
    },
    {
      title: "LSI Telematik – Enterprise Shipment Monitoring",
      company: "PT. Trans Teknologi Indonesia",
      description: "Enterprise-grade shipment monitoring system for Apical (APRIL Group) integrating GPS tracking, weighbridge systems, and comprehensive fleet monitoring for large-scale logistics operations.",
      category: "Enterprise IoT",
      icon: Satellite,
      technologies: ["GPS Integration", "IoT", "Weighbridge API", "Fleet Monitoring", "Enterprise Architecture"],
      achievements: [
        "Led QA strategy for complex GPS and weighbridge hardware-software integration",
        "Validated real-time fleet monitoring across enterprise-scale operations",
        "Ensured 98% bug-free production releases for critical logistics infrastructure",
        "Tested multi-system integrations serving enterprise-level clients"
      ],
      metrics: { "Bug-Free": "98%", "GPS Accuracy": "99%", "Uptime": "99.9%" },
      impact: "Revolutionized shipment monitoring for one of Asia's largest palm oil producers, enabling real-time fleet visibility.",
      role: "QA Engineer → Project Manager for enterprise IoT logistics platform."
    },
    {
      title: "Halal Logistic Tracking System",
      company: "PT. Trans Teknologi Indonesia",
      description: "Web-based halal compliance ecosystem for JAKIM (Malaysia) integrating GPS tracking, E-Seal smart locks, and vendor certification tracking to ensure end-to-end halal supply chain integrity.",
      category: "Compliance & IoT",
      icon: Shield,
      technologies: ["GPS Tracking", "E-Seal Smart Locks", "Certification APIs", "Compliance Framework", "Web Platform"],
      achievements: [
        "Validated E-Seal smart lock integration ensuring tamper-proof halal compliance",
        "Tested GPS tracking accuracy for cross-border halal logistics",
        "Ensured vendor certification tracking meets JAKIM regulatory standards",
        "Led QA for hardware-software integration across multiple device types"
      ],
      metrics: { "Compliance": "100%", "Seal Integrity": "99.9%", "Tracking": "Real-time" },
      impact: "Enabled Malaysia's halal certification authority to ensure supply chain integrity from farm to table.",
      role: "Project Manager overseeing QA strategy for IoT-integrated halal compliance platform."
    },
    {
      title: "Cobeu – AI-Powered Pet Community Platform",
      company: "NerdHeadz",
      description: "Comprehensive pet care and community platform combining GPS-based location services, appointment booking, social networking, and AI-driven pet care recommendations with real-time location tracking.",
      category: "Pet Care & AI",
      icon: Zap,
      technologies: ["React Native", "AI/ML", "GPS Integration", "Real-time Chat", "Booking System", "Social Features"],
      achievements: [
        "Implemented end-to-end QA for complex GPS-based pet service location features",
        "Validated AI-driven pet health recommendations with 96% accuracy",
        "Tested real-time community features supporting 10,000+ concurrent users",
        "Achieved 97% bug-free release rate across iOS and Android"
      ],
      metrics: { "AI Accuracy": "96%", "Bug-Free": "97%", "Engagement": "+70%" },
      impact: "Connected 25,000+ pet owners with verified service providers for comprehensive pet care.",
      role: "Lead QA Engineer for GPS location, AI recommendations, and social media features."
    },
    {
      title: "Uplinked – AI Social Media Assistant",
      company: "NerdHeadz",
      description: "AI-powered social media management platform providing intelligent content recommendations, automated scheduling, and analytics-driven engagement optimization for businesses and creators.",
      category: "AI & Social Media",
      icon: Globe,
      technologies: ["AI/ML", "Social APIs", "Content Analysis", "NLP", "Analytics Dashboard"],
      achievements: [
        "Validated AI content recommendation engine for relevance and accuracy",
        "Tested automated scheduling workflows across multiple social platforms",
        "Ensured NLP-driven content analysis produces actionable insights",
        "Verified analytics dashboard accuracy with real-time data feeds"
      ],
      metrics: { "AI Relevance": "94%", "Automation": "85%", "Platforms": "5+" },
      impact: "Helped businesses optimize social media presence through AI-driven content strategy and automation.",
      role: "QA Engineer focused on AI output validation and cross-platform integration testing."
    },
    {
      title: "Storyed – AI Voice-Powered Book Creator",
      company: "NerdHeadz",
      description: "Mobile application transforming voice recordings into structured digital books using AI. Features voice-to-text conversion, intelligent chapter organization, and automated editing suggestions.",
      category: "AI & Creative Tech",
      icon: Zap,
      technologies: ["AI/ML", "React Native", "Speech Recognition", "NLP", "Cloud APIs"],
      achievements: [
        "Developed comprehensive AI testing framework for voice recognition accuracy",
        "Achieved 94% accuracy in voice-to-text conversion across multiple languages",
        "Validated AI-driven content organization and chapter structuring",
        "Optimized AI processing reducing conversion time by 60%"
      ],
      metrics: { "Voice Accuracy": "94%", "Processing": "+60%", "Satisfaction": "92%" },
      impact: "Democratized book creation by empowering creators to transform spoken ideas into published digital books.",
      role: "AI QA Specialist for voice recognition, AI algorithms, and cross-language performance."
    },
    {
      title: "ClearJet – Delivery Infrastructure Platform",
      company: "NerdHeadz",
      description: "Comprehensive delivery management platform with real-time logistics solutions, route optimization, and fleet management for e-commerce and logistics companies worldwide.",
      category: "Logistics",
      icon: BarChart3,
      technologies: ["Microservices", "React", "Node.js", "Redis", "PostgreSQL", "Real-time Analytics"],
      achievements: [
        "Implemented robust testing framework reducing critical bugs by 90%",
        "Ensured 99.9% uptime through comprehensive load testing",
        "Optimized API response times to under 200ms globally",
        "Scaled platform to handle 100,000+ daily deliveries"
      ],
      metrics: { "Uptime": "99.9%", "API": "<200ms", "Deliveries": "100K+/day" },
      impact: "Streamlined delivery operations for 500+ businesses, reducing delivery times by 40%.",
      role: "Senior QA Engineer for distributed systems, performance, and real-time data validation."
    },
    {
      title: "FutureSpark – AI Student Learning Platform",
      company: "NerdHeadz",
      description: "Educational platform leveraging AI for personalized learning, adaptive content delivery, and intelligent progress tracking for students worldwide.",
      category: "EdTech & AI",
      icon: Brain,
      technologies: ["AI/ML", "React", "Python", "TensorFlow", "NLP", "Adaptive Learning"],
      achievements: [
        "Designed test cases for adaptive learning algorithms",
        "Validated AI-generated student progress reports for 95% accuracy",
        "Tested personalized learning paths for optimal educational outcomes",
        "Verified AI bias prevention in content recommendations"
      ],
      metrics: { "AI Accuracy": "95%", "Engagement": "+65%", "Outcomes": "+40%" },
      impact: "Enhanced learning outcomes for 50,000+ students across 15+ countries.",
      role: "AI-focused QA ensuring ML algorithm quality and educational content delivery."
    },
    {
      title: "Healthcare App for Premature Baby Care",
      company: "Pradini",
      description: "Specialized mobile app providing medical insights, care guidelines, and tracking tools for parents of premature babies with expert medical content and progress monitoring.",
      category: "Healthcare",
      icon: Shield,
      technologies: ["React Native", "Firebase", "Medical APIs", "iOS", "Android", "HIPAA Compliance"],
      achievements: [
        "Achieved 95% bug-free releases across iOS and Android",
        "Verified medical content accuracy with healthcare professionals",
        "Ensured HIPAA compliance for sensitive medical data",
        "Validated integration with medical device APIs"
      ],
      metrics: { "Bug-Free": "95%", "Adoption": "+45%", "Coverage": "100%" },
      impact: "Supported 5,000+ families with critical premature baby care information.",
      role: "Mobile QA specialist for cross-platform testing and medical data validation."
    }
  ];

  return (
    <section className="py-24 bg-muted/30 tech-grid">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="font-mono text-xs text-accent uppercase tracking-[0.2em]">Portfolio</p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider mt-4"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing impactful QA & PM projects across AI platforms, enterprise IoT, 
            logistics, healthcare, and education — each delivering measurable business value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 space-y-4">
          <h3 className="text-2xl font-bold font-heading">Want to see more?</h3>
          <p className="text-muted-foreground text-sm">
            These are highlights. I'd be happy to discuss detailed case studies.
          </p>
          <Button 
            size="lg" 
            className="btn-primary"
            onClick={() => {
              document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Let's Talk Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
