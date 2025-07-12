import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin, Trophy, Star } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Universitas Islam Negeri Sumatera Utara",
      location: "Medan, North Sumatra, Indonesia",
      period: "2019 - 2023",
      gpa: "3.7/4.0",
      achievements: [
        "IYSA Silver Medal (International Young Scientist Association) 2021",
        "Outstanding Student 'Wahdatul 'Ulum Uinsu Talent 2021'",
        "3rd Best Speaker PKM 2 English Debate 2021",
        "Karya Salemba Empat Scholarship Recipient 2020-2023",
        "Member of Haxor Programming Club",
        "Entrepreneur Academy Camp KSE (Tangerang - Bogor) 2022",
        "KSE Student Summit Leadership Camp (Semarang) 2022"
      ],
      focus: "Software Engineering, Quality Assurance, and Computer Systems"
    },
    {
      degree: "Exchange Student Program",
      institution: "Keya Paha County High School",
      location: "Nebraska, USA",
      period: "2017 - 2018",
      gpa: "3.8/4.0",
      achievements: [
        "Future Farmer American (FFA) Club Member",
        "International Education Volunteer",
        "Bina Antar Budaya Youth Exchange Student Award",
        "3rd Winner of FFA Competition Regional Nebraska"
      ],
      focus: "International Education, Cultural Exchange, Leadership Development"
    }
  ];

  const internships = [
    {
      title: "Quality Assurance Intern",
      company: "PT. Sagara Teknologi",
      location: "Remote",
      period: "June 2023 - August 2023",
      type: "Internship",
      achievements: [
        "Developed over 1000 test scenarios showcasing creativity in test case creation",
        "Identified over 50 bugs across various priority and severity levels",
        "Optimized application system performance by 90%",
        "Produced organized and comprehensive test documentation",
        "Worked on Techno Consulta Website and Jobfortech Website projects"
      ]
    },
    {
      title: "Quality Assurance Intern",
      company: "PT. Didayah Olah Teknologi Indonesia (DOT)",
      location: "Remote",
      period: "May 2023 - August 2023",
      type: "Internship",
      achievements: [
        "QA for ASTRA PAMA CAPEX project",
        "Developed comprehensive testing scenarios and test cases",
        "Explored and mastered testing workflow approval processes",
        "Identified and reported approximately 30 bugs contributing to resolution",
        "Utilized Waterfall framework and QASE application effectively"
      ]
    },
    {
      title: "Virtual QA Intern",
      company: "Jubelio x Rakamin Academy",
      location: "Online",
      period: "April 2023 - May 2023",
      type: "Project-Based",
      achievements: [
        "Developed comprehensive test cases for user login and product catalog features",
        "Conducted API testing using Postman on various endpoints",
        "Created automation scenarios using Selenium WebDriver",
        "Implemented negative testing scenarios for robust quality assurance"
      ]
    },
    {
      title: "Virtual QA Intern",
      company: "Evermos x Rakamin Academy",
      location: "Online",
      period: "April 2023 - May 2023",
      type: "Project-Based",
      achievements: [
        "Created integration test scenarios for 2 APIs using K6",
        "Developed performance test scenarios for 1000 virtual users",
        "Achieved 3500 iterations with 2-second response time tolerance",
        "Implemented comprehensive assertions for each test scenario"
      ]
    }
  ];

  const bootcamps = [
    {
      title: "Quality Assurance Bootcamp",
      provider: "Binar Academy - DTS Kominfo",
      period: "March 2023 - April 2023",
      score: "91.5/100",
      skills: [
        "QA Fundamentals & Test Case Creation",
        "Testing Principles & Agile Methodology",
        "API Testing & Bug Reporting",
        "Manual Quality Assurance Deliverables"
      ]
    },
    {
      title: "Full Stack Developer with Ruby",
      provider: "Fresh Graduate Academy",
      period: "March 2022 - April 2022",
      score: "Certified",
      skills: [
        "HTML & CSS Development",
        "Ruby Programming Language",
        "Ruby on Rails Framework",
        "Full Stack Development Principles"
      ]
    }
  ];

  const organizations = [
    {
      role: "Chairman",
      organization: "Karya Salemba Empat UINSU Scholarship Organization",
      period: "2022 - 2023",
      description: "Led scholarship program initiatives and community development"
    },
    {
      role: "Chairman",
      organization: "Community Development KSE UINSU",
      period: "2021 - 2022",
      description: "Spearheaded community outreach and development programs"
    },
    {
      role: "Treasurer",
      organization: "Entrepreneurship Division KSE UINSU",
      period: "2021 - 2022",
      description: "Managed financial operations and entrepreneurship initiatives"
    },
    {
      role: "Public Relations",
      organization: "HMJ Computer Science (Student Association)",
      period: "2020 - 2021",
      description: "Handled external communications and stakeholder relations"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Education & <span className="gradient-text">Development</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A strong academic foundation combined with international experience, 
            practical internships, and continuous professional development.
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8">Academic Background</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="card-elegant p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold">{edu.degree}</h4>
                      <p className="text-lg font-semibold text-primary">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <Badge variant="secondary">GPA: {edu.gpa}</Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground font-medium">{edu.focus}</p>

                    <div className="space-y-2">
                      <h5 className="font-semibold flex items-center gap-2">
                        <Trophy className="w-4 h-4" />
                        Achievements & Recognition
                      </h5>
                      <div className="grid gap-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Internships */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8">Professional Training & Internships</h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {internships.map((internship, index) => (
              <Card key={index} className="card-elegant p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold">{internship.title}</h4>
                      <Badge variant="outline">{internship.type}</Badge>
                    </div>
                    <p className="font-semibold text-primary">{internship.company}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {internship.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {internship.period}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm">Key Accomplishments</h5>
                    <div className="space-y-1">
                      {internship.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bootcamps & Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8">Bootcamps & Professional Training</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {bootcamps.map((bootcamp, index) => (
              <Card key={index} className="card-elegant p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold">{bootcamp.title}</h4>
                    <p className="font-semibold text-primary">{bootcamp.provider}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{bootcamp.period}</span>
                      <Badge variant="secondary">Score: {bootcamp.score}</Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm">Skills Acquired</h5>
                    <div className="flex flex-wrap gap-2">
                      {bootcamp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership & Organizations */}
        <div>
          <h3 className="text-3xl font-bold mb-8">Leadership & Organizations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {organizations.map((org, index) => (
              <Card key={index} className="card-elegant p-6">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold">{org.role}</h4>
                    <p className="font-semibold text-primary">{org.organization}</p>
                    <p className="text-sm text-muted-foreground">{org.period}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {org.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;