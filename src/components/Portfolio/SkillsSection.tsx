import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, TestTube, Bot, Globe, Users, Brain,
  Target, Clock, MessageSquare, Search, Shield, Zap
} from "lucide-react";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "Test Automation", level: 95, icon: Bot },
    { name: "AI/ML Validation", level: 92, icon: Brain },
    { name: "API Testing", level: 93, icon: Code2 },
    { name: "Performance Testing", level: 88, icon: Zap },
    { name: "Cypress", level: 94, icon: TestTube },
    { name: "Playwright", level: 90, icon: TestTube },
    { name: "GPS/IoT Integration", level: 85, icon: Globe },
    { name: "Project Management", level: 82, icon: Shield },
  ];

  const softSkills = [
    { name: "Attention to Detail", level: 98, icon: Search },
    { name: "Analytical Skills", level: 95, icon: Brain },
    { name: "Problem Solving", level: 94, icon: Target },
    { name: "Communication", level: 90, icon: MessageSquare },
    { name: "Team Leadership", level: 88, icon: Users },
    { name: "Cross-cultural Work", level: 89, icon: Globe },
    { name: "Time Management", level: 88, icon: Clock },
    { name: "Continuous Learning", level: 96, icon: Zap },
  ];

  const tools = [
    "Cypress", "Selenium", "Playwright", "Postman", "Appium", "BugBug.io",
    "QASE", "GitLab", "Jira", "K6", "Charles Proxy",
    "Chrome DevTools", "Notion", "Figma"
  ];

  const methodologies = [
    "Agile/Scrum", "Waterfall", "TDD", "BDD",
    "CI/CD", "Risk-Based Testing", "Exploratory Testing", "AI Output Validation"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="font-mono text-xs text-accent uppercase tracking-[0.2em]">Capabilities</p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="section-divider mt-4"></div>
        </div>

        {/* Technical + Soft Skills side by side */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-6 font-heading">Technical Proficiency</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--gradient-primary)' }}>
                    <skill.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 font-heading">Professional Skills</h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-accent/10">
                    <skill.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Methodologies */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <Card className="card-elegant p-8">
            <h3 className="text-lg font-bold mb-5 font-heading">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, i) => (
                <Badge key={i} variant="secondary" className="px-3 py-1.5 text-xs font-mono">{tool}</Badge>
              ))}
            </div>
          </Card>
          <Card className="card-elegant p-8">
            <h3 className="text-lg font-bold mb-5 font-heading">Methodologies</h3>
            <div className="flex flex-wrap gap-2">
              {methodologies.map((m, i) => (
                <Badge key={i} variant="outline" className="px-3 py-1.5 text-xs font-mono">{m}</Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Languages */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card className="card-elegant p-6 text-center">
            <h4 className="text-lg font-semibold font-heading">Bahasa Indonesia</h4>
            <p className="text-muted-foreground text-sm mb-3">Native Speaker</p>
            <Progress value={100} className="h-1.5" />
          </Card>
          <Card className="card-elegant p-6 text-center">
            <h4 className="text-lg font-semibold font-heading">English</h4>
            <p className="text-muted-foreground text-sm mb-3">Professional Proficiency</p>
            <Progress value={85} className="h-1.5" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
