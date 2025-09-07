import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award, ExternalLink } from "lucide-react";

export function Education() {
  const education = {
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    university: "Techno India University",
    location: "West Bengal, India",
    period: "2019 - 2023",
    cgpa: "7.9/10",
    achievements: [
      "Core Member of Tech Fest 'Vivarta' and Cultural Fest 'Sahotsava' in 2022",
      "Successfully led event execution and coordination"
    ]
  };

  const certifications = [
    {
      title: "LangChain & AI Integration",
      issuer: "Self-paced Learning",
      description: "Hands-on projects in LLM integration and RAG implementation",
      link: null
    },
    {
      title: "Data Structures and Algorithms in C++",
      issuer: "Coding Ninjas",
      description: "Advanced problem-solving skills and algorithm optimization",
      link: "https://certificate.codingninjas.com/verify/9818b4d2d87e911e"
    },
    {
      title: "SQL Database Management",
      issuer: "PrepInsta",
      description: "SQL optimization and advanced query design techniques",
      link: "https://drive.google.com/file/d/1ZOoLF8Wc3ymeMMXhKrIjgQXbk6i3QW9v/view"
    },
    {
      title: "Backend Engineering Launchpad",
      issuer: "AirTribe",
      description: "Practical experience with Node.js, RESTful APIs, and System Design",
      link: "https://www.airtribe.live/backend-engineering/certificate/NOWGX0PDT3J3"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="section-header">Education & Certifications</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="animate-slide-in-left">
            <Card className="glass-card border-white/20 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-3 rounded-full bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {education.degree}
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{education.university} • {education.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{education.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      <span>CGPA: {education.cgpa}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {education.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground/80">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="glass-card border-white/20 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border-l-2 border-primary/30 pl-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary mb-1">
                            {cert.title}
                          </h4>
                          <p className="text-sm font-medium text-muted-foreground mb-2">
                            {cert.issuer}
                          </p>
                          <p className="text-xs text-muted-foreground/80">
                            {cert.description}
                          </p>
                        </div>
                        {cert.link && (
                          <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-4 p-1 hover:bg-white/10 rounded"
                          >
                            <ExternalLink className="h-4 w-4 text-primary" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/10">
                  <Badge variant="secondary" className="skill-pill">
                    Open Source Contributor
                  </Badge>
                  <p className="text-xs text-muted-foreground/80 mt-2">
                    Active GitHub contributor with focus on AI-enhanced scalable system design
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}