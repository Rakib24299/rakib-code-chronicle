import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden py-24 sm:py-28">
      {/* Ambient glow - signature moment */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-brand/25 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl text-center animate-enter">
        <p className="mb-4 text-sm tracking-wider text-muted-foreground">Full Stack Developer & AI Enthusiast</p>
        <h1 className="mx-auto bg-gradient-to-r from-brand to-brand/60 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          Julker Nain Rakib
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-muted-foreground">
          Code | Create | Contribute | Turning ideas into reality, one commit at a time.
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-balance text-muted-foreground">
          Developer & problem solver | Passionate about open source & clean code.
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-balance text-muted-foreground">
          Building things for the web | Python/JS enthusiast | Learning in public.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="https://github.com/JulkerNainRakib" target="_blank" rel="noreferrer">
            <Button variant="brand" size="lg" className="gap-2">
              <Github /> View GitHub
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" size="lg" className="gap-2">
              <Mail /> Contact Me
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
