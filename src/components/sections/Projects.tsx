import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, LinkIcon } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    name: "DevOps Dashboard",
    image: project1,
    description: "A modern dashboard to visualize CI/CD pipelines and infrastructure health.",
    github: "https://github.com/JulkerNainRakib/devops-dashboard",
    demo: "#",
  },
  {
    name: "AI Notes App",
    image: project2,
    description: "Capture ideas with AI-assisted summaries and search.",
    github: "https://github.com/JulkerNainRakib/ai-notes",
    demo: "#",
  },
  {
    name: "Portfolio Template",
    image: project3,
    description: "Clean, responsive portfolio starter for developers.",
    github: "https://github.com/JulkerNainRakib/portfolio-template",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-2 text-muted-foreground">A selection of recent work.</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.name} className="group overflow-hidden transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">{p.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={p.image}
                  alt={`${p.name} screenshot`}
                  loading="lazy"
                  className="h-40 w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <p className="mt-4 text-sm text-muted-foreground">{p.description}</p>
              </CardContent>
              <CardFooter className="flex gap-3">
                <a href={p.github} target="_blank" rel="noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full gap-2"><Github /> Code</Button>
                </a>
                <a href={p.demo} target="_blank" rel="noreferrer" className="flex-1">
                  <Button variant="brand" className="w-full gap-2"><LinkIcon /> Live</Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
