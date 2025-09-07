import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10 backdrop-blur-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Ayush Anand
            </div>
            <p className="text-muted-foreground/70">
              Full-Stack Developer • System Designer • AI Enthusiast
            </p>
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
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-muted-foreground/70 flex items-center justify-center gap-2">
            Built with <Heart className="h-4 w-4 text-red-500" /> using React, TypeScript & Tailwind CSS
          </p>
          <p className="text-xs text-muted-foreground/50 mt-2">
            © 2025 Ayush Anand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}