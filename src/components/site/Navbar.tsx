import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-foreground">
          JN Rakib
        </a>
        <div className="hidden gap-6 md:flex">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skills</a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>
        <div className="hidden md:flex">
          <a href="https://github.com/JulkerNainRakib" target="_blank" rel="noreferrer">
            <Button variant="brand" size="sm" className="gap-2">
              <Github className="opacity-90" /> GitHub
            </Button>
          </a>
        </div>
        <div className="md:hidden">
          <a href="#contact">
            <Button variant="brand" size="sm" aria-label="Contact">
              <Mail className="opacity-90" />
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
