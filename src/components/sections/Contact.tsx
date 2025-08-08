import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 text-muted-foreground">Let’s build something together.</p>
        </header>

        <div className="flex flex-wrap items-center gap-4">
          <a href="mailto:thomasedison24299@gmail.com">
            <Button variant="brand" className="gap-2"><Mail /> Email</Button>
          </a>
          <a href="https://www.linkedin.com/in/julker-nain-rakib/" target="_blank" rel="noreferrer">
            <Button variant="outline" className="gap-2"><Linkedin /> LinkedIn</Button>
          </a>
          <a href="https://github.com/JulkerNainRakib" target="_blank" rel="noreferrer">
            <Button variant="outline" className="gap-2"><Github /> GitHub</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
