import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Server, 
  Database, 
  Globe, 
  Brain, 
  Wrench,
  Layers,
  Palette
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Palette,
      skills: ["React.js", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap", "Responsive Design"]
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "ASP.NET Core", "Entity Framework", "RESTful APIs", "Microservices"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "SQL Server", "Database Design", "Query Optimization", "Redis"]
    },
    {
      title: "Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "SQL", "C#", "C++"]
    },
    {
      title: "AI/ML",
      icon: Brain,
      skills: ["LLMs", "Prompt Engineering", "LangChain", "RAG Implementation"]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "GitHub", "Postman", "Docker", "AWS", "VS Code", "Jira"]
    },
    {
      title: "DevOps & Cloud",
      icon: Globe,
      skills: ["Docker", "AWS", "CI/CD", "Microservices", "System Design"]
    },
    {
      title: "Additional",
      icon: Layers,
      skills: ["Bull Queue", "JWT Authentication", "Agile Methodologies", "Unit Testing", "System Architecture"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-muted/20 to-transparent">
      <div className="container mx-auto">
        <h2 className="section-header">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="glass-card border-white/20 animate-fade-in-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="skill-pill text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}