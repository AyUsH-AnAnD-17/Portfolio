import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Consultant - Software Development",
      company: "LTIMindtree",
      location: "Mumbai, India",
      period: "Dec 2023 - Nov 2024",
      achievements: [
        "Developed enterprise web applications using JavaScript and TypeScript, serving 10,000+ concurrent users",
        "Built scalable backend services using ASP.Net Core and C# with RESTful API architecture",
        "Migrated 3 legacy VB6 modules to modern .NET architecture, improving system scalability by 25%",
        "Implemented microservices architecture and optimized database queries, resulting in 20% improvement in response times",
        "Integrated RESTful API endpoints using ASP.NET Core for efficient data fetching and worked with Microsoft SQL Server databases",
        "Collaborated with cross-functional teams using Agile methodologies and managed workflows through Jira",
        "Debugged and resolved 50+ production issues while maintaining 99.5% system uptime"
      ],
      technologies: ["JavaScript", "TypeScript", "ASP.NET Core", "C#", "SQL Server", "RESTful APIs", "Microservices"]
    },
    {
      title: "Software Development Intern",
      company: "LTI (Ignite Platform)",
      location: "Remote",
      period: "Jan 2023 - Apr 2023",
      achievements: [
        "Learned full-stack development with Angular, and TypeScript integration",
        "Built responsive web applications using modern JavaScript frameworks and ASP.Net backend services",
        "Developed RESTful APIs and ASP.Net services with secure authentication mechanisms",
        "Participated in code reviews and followed industry best practices for scalable application development"
      ],
      technologies: ["Angular", "TypeScript", "ASP.NET", "RESTful APIs", "Authentication"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-transparent to-muted/20">
      <div className="container mx-auto">
        <h2 className="section-header">Professional Experience</h2>
        
        <div className="relative">
          <div className="timeline-line" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="timeline-dot" />
                
                <Card className="glass-card border-white/20">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-primary">{exp.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                        <span>• {exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground/80">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="skill-pill">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}