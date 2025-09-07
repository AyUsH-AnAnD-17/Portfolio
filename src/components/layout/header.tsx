import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download } from "lucide-react";

export function Header() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-lg border-b border-white/10">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Ayush Anand
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-white/10"
            asChild
          >
            <a href="https://github.com/AyUsH-AnAnD-17" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-white/10"
            asChild
          >
            <a href="https://linkedin.com/in/ayush-anand-anand17" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-white/10"
            asChild
          >
            <a href="mailto:ayushanand2119@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}