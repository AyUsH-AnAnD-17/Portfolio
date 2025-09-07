import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Chronos Web Scheduler",
      description: "Built production-ready distributed job scheduling system with comprehensive task management capabilities. Implemented Redis-backed queue system using Bull Queue for reliable job processing and real-time monitoring.",
      year: "2025",
      technologies: ["Node.js", "Express.js", "MongoDB", "Redis", "Bull Queue", "JWT"],
      features: [
        "Distributed job scheduling with Redis-backed queue system",
        "Real-time monitoring and performance metrics",
        "JWT-based authentication with role-based access control",
        "Support for immediate, scheduled, recurring, and delayed jobs",
        "Comprehensive job lifecycle management"
      ],
      github: "https://github.com/AyUsH-AnAnD-17/Chronos",
      live: null
    },
    {
      title: "Resort Booking System",
      description: "Developed full-stack booking platform with separate interfaces for customers and property owners. Features secure authentication, real-time availability tracking, and comprehensive booking management.",
      year: "2024",
      technologies: [".NET", "SQL Server", "Angular", "TypeScript", "JWT"],
      features: [
        "Separate customer and property owner interfaces",
        "Secure JWT-based authentication system",
        "Real-time availability tracking and booking calendar",
        "RESTful APIs for resort and booking management",
        "Optimized database design for concurrent bookings"
      ],
      github: "https://github.com/AyUsH-AnAnD-17/ResortBookingSystem",
      live: null
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="section-header">Featured Projects</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card border-white/20 group animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-primary mb-2">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-muted-foreground/70 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-white/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    {project.live && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-white/10"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground/80 leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="skill-pill">
                      {tech}
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