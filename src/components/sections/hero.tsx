import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="hero-title mb-6">
            Ayush Anand
          </h1>
          <p className="hero-subtitle mb-8 max-w-2xl mx-auto">
            Full-Stack Developer | MERN Stack & .NET Core | System Design | RESTful APIs
          </p>
          <p className="text-lg text-muted-foreground/70 mb-12 max-w-xl mx-auto">
            Crafting scalable web applications with modern technologies and bringing innovative ideas to life through code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              className="btn-hero text-primary-foreground"
              onClick={scrollToAbout}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="glass-card border-white/20 hover:border-white/40"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="glass-card p-6 rounded-2xl max-w-md mx-auto">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Users Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}