const About = () => {
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-2 text-muted-foreground">Student, Developer</p>
        </header>
        <article className="space-y-4 text-muted-foreground">
          <p>
            Current role: <span className="text-foreground">Student</span>, <span className="text-foreground">Developer</span>.
          </p>
          <p>
            Skills: <span className="text-foreground">Full-Stack Development</span> | JavaScript • React • Node.js • Python
          </p>
          <p>
            Interests: Open-source contributor, ML & DevOps curious, building tools to simplify lives.
          </p>
        </article>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <img
            loading="lazy"
            src="https://github-readme-stats.vercel.app/api?username=JulkerNainRakib&show_icons=true&hide_border=true&title_color=ff4b2b&icon_color=ff4b2b&text_color=ffffff&bg_color=00000000"
            alt="GitHub stats for Julker Nain Rakib"
            className="rounded-lg border"
          />
          <img
            loading="lazy"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=JulkerNainRakib&layout=compact&hide_border=true&title_color=ff4b2b&text_color=ffffff&bg_color=00000000"
            alt="Top languages used by Julker Nain Rakib"
            className="rounded-lg border"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
