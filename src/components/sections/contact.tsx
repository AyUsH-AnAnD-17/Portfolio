import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ayushanand2119@gmail.com",
      href: "mailto:ayushanand2119@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8873340528",
      href: "tel:+918873340528"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/AyUsH-AnAnD-17",
      href: "https://github.com/AyUsH-AnAnD-17"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ayush-anand-anand17",
      href: "https://linkedin.com/in/ayush-anand-anand17"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-transparent to-muted/20">
      <div className="container mx-auto">
        <h2 className="section-header">Let's Connect</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-white/20 animate-fade-in-up">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold mb-4">
                Ready to Build Something Amazing Together?
              </CardTitle>
              <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
                I'm always excited to discuss new opportunities, innovative projects, 
                or simply connect with fellow developers. Let's turn your ideas into reality!
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Get In Touch
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{item.label}</div>
                          <div className="text-sm text-muted-foreground/80">{item.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Send className="h-5 w-5 text-primary" />
                    Quick Actions
                  </h3>
                  <div className="space-y-4">
                    <Button 
                      className="btn-hero w-full text-primary-foreground"
                      asChild
                    >
                      <a href="mailto:ayushanand2119@gmail.com?subject=Let's Connect!">
                        <Mail className="mr-2 h-5 w-5" />
                        Send Email
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="glass-card border-white/20 hover:border-white/40 w-full"
                      asChild
                    >
                      <a href="/resume.pdf" download>
                        Download Resume
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="glass-card border-white/20 hover:border-white/40 w-full"
                      asChild
                    >
                      <a href="https://linkedin.com/in/ayush-anand-anand17" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-5 w-5" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                  </div>

                  <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="text-sm text-muted-foreground/80 text-center">
                      Currently open to new opportunities and exciting projects. 
                      Let's discuss how we can create something extraordinary together!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}