import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Zap } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expert in React.js, Node.js, Express.js and .NET Core with Angular and TypeScript"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "MongoDB, PostgreSQL, SQL Server with optimized query design"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS, Docker, Microservices Architecture, and CI/CD pipelines"
    },
    {
      icon: Zap,
      title: "AI/ML Integration",
      description: "LangChain, LLMs, RAG implementation, and Prompt Engineering"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="section-header">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <p className="text-lg text-muted-foreground/80 leading-relaxed mb-6">
              I'm a passionate Full-Stack Developer with over 2 years of experience building 
              enterprise-grade web applications. Currently working on scaling my family business
              in the transport and commute industry by taking it online, building a user-friendly 
              platform from the ground up, and integrating secure payment gateways using the MERN stack.
              I have also worked at LTIMindtree for over a year, where I gained experience in the .NET 
              stack with JavaScript and Angular TypeScript on the frontend, and SQL Server as the database.
            </p>
            <p className="text-lg text-muted-foreground/80 leading-relaxed mb-6">
              My expertise spans across modern web technologies, from React and Angular on the 
              frontend to Express.js and .NET Core on the backend. I'm particularly passionate 
              about system design, performance optimization, and integrating AI/ML capabilities 
              into web applications.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="skill-pill">JavaScript</Badge>
              <Badge variant="secondary" className="skill-pill">TypeScript</Badge>
              <Badge variant="secondary" className="skill-pill">React.js</Badge>
              <Badge variant="secondary" className="skill-pill">Node.js</Badge>
              <Badge variant="secondary" className="skill-pill">.NET Core</Badge>
              <Badge variant="secondary" className="skill-pill">MongoDB</Badge>
              <Badge variant="secondary" className="skill-pill">AI/ML</Badge>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="glass-card border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground/80">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}