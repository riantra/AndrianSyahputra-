import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  TestTube, 
  Bot, 
  Globe, 
  Users, 
  Brain,
  Target,
  Clock,
  MessageSquare,
  Search,
  Shield,
  Zap
} from "lucide-react";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "Test Automation", level: 95, icon: Bot },
    { name: "API Testing", level: 92, icon: Code2 },
    { name: "Performance Testing", level: 88, icon: Zap },
    { name: "Cypress", level: 94, icon: TestTube },
    { name: "Selenium", level: 90, icon: TestTube },
    { name: "Playwright", level: 87, icon: TestTube },
    { name: "Postman", level: 93, icon: Code2 },
    { name: "Quality Assurance", level: 96, icon: Shield }
  ];

  const softSkills = [
    { name: "Attention to Detail", level: 98, icon: Search },
    { name: "Analytical Skills", level: 95, icon: Brain },
    { name: "Communication", level: 90, icon: MessageSquare },
    { name: "Problem Solving", level: 94, icon: Target },
    { name: "Continuous Learning", level: 96, icon: Book },
    { name: "Time Management", level: 88, icon: Clock },
    { name: "Team Collaboration", level: 92, icon: Users },
    { name: "Cross-cultural Work", level: 89, icon: Globe }
  ];

  const certifications = [
    {
      title: "Quality Assurance Professional",
      issuer: "Binar Academy - DTS Kominfo",
      year: "2023",
      score: "91.5/100"
    },
    {
      title: "Full Stack Developer with Ruby",
      issuer: "Fresh Graduate Academy",
      year: "2022",
      score: "Certified"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Dcoding",
      year: "2023",
      score: "Certified"
    },
    {
      title: "Product Manager Techniques",
      issuer: "Skill Academy",
      year: "2022",
      score: "Certified"
    }
  ];

  const tools = [
    "Cypress", "Selenium", "Playwright", "Postman", "Appium", "BugBug.io",
    "QASE", "GitLab", "Jira", "TestRail", "K6", "Charles Proxy",
    "Chrome DevTools", "Figma", "Slack", "Notion"
  ];

  const methodologies = [
    "Agile/Scrum", "Waterfall", "Test-Driven Development (TDD)", 
    "Behavior-Driven Development (BDD)", "Continuous Integration",
    "Continuous Testing", "Risk-Based Testing", "Exploratory Testing"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning technical expertise, quality methodologies, 
            and professional development with proven results across diverse projects.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => (
              <Card key={index} className="card-elegant p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <skill.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Professional Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {softSkills.map((skill, index) => (
              <Card key={index} className="card-elegant p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center">
                    <skill.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="card-elegant p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-2">
                  {tool}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="card-elegant p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Methodologies</h3>
            <div className="flex flex-wrap gap-3">
              {methodologies.map((methodology, index) => (
                <Badge key={index} variant="outline" className="px-3 py-2">
                  {methodology}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">Certifications & Training</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-elegant p-6">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold">{cert.title}</h4>
                  <div className="text-muted-foreground">
                    <p className="font-medium">{cert.issuer}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm">{cert.year}</span>
                      <Badge variant="secondary">{cert.score}</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Languages</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="card-elegant p-6 text-center">
              <div className="space-y-3">
                <h4 className="text-xl font-semibold">Bahasa Indonesia</h4>
                <p className="text-muted-foreground">Native Speaker</p>
                <Progress value={100} className="h-2" />
              </div>
            </Card>
            <Card className="card-elegant p-6 text-center">
              <div className="space-y-3">
                <h4 className="text-xl font-semibold">English</h4>
                <p className="text-muted-foreground">Professional Proficiency</p>
                <Progress value={85} className="h-2" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const Book = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

export default SkillsSection;