import { Badge } from "@/components/ui/badge";

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24 py-16">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
          <p className="mt-2 text-muted-foreground">Tools I use to build.</p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "C",
                "C++",
                "Python",
                "HTML",
                "CSS",
                "JavaScript",
              ].map((s) => (
                <Badge key={s} variant="secondary" className="hover:scale-105 transition-transform">{s}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {["Django", "Node.js", "React"].map((s) => (
                <Badge key={s} variant="secondary" className="hover:scale-105 transition-transform">{s}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
