import { BookOpen, Calculator, FlaskConical, Globe, Palette, Music, Dumbbell, Code } from "lucide-react";

const classes = [
  {
    level: "Primary",
    grades: "Classes 1-5",
    description: "Building strong foundations through interactive learning and play-based education.",
    color: "bg-primary/10 text-primary",
  },
  {
    level: "Secondary",
    grades: "Classes 6-10",
    description: "Comprehensive curriculum preparing students for board examinations and beyond.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    level: "Higher Secondary",
    grades: "Classes 11-12",
    description: "Specialized streams in Science, Commerce, and Arts with career guidance.",
    color: "bg-accent/20 text-accent-foreground",
  },
];

const subjects = [
  { name: "Mathematics", icon: Calculator, color: "bg-primary" },
  { name: "Science", icon: FlaskConical, color: "bg-secondary" },
  { name: "English", icon: BookOpen, color: "bg-accent" },
  { name: "Social Studies", icon: Globe, color: "bg-primary" },
  { name: "Arts & Crafts", icon: Palette, color: "bg-secondary" },
  { name: "Music", icon: Music, color: "bg-accent" },
  { name: "Physical Education", icon: Dumbbell, color: "bg-primary" },
  { name: "Computer Science", icon: Code, color: "bg-secondary" },
];

const Academics = () => {
  return (
    <section id="academics" className="section-padding bg-muted">
      <div className="container-custom">
        <h2 className="section-title">Academics</h2>
        <p className="section-subtitle">
          Comprehensive education programs designed for every stage of learning
        </p>

        {/* Classes Offered */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {classes.map((classLevel, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-sm card-hover border border-border"
            >
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${classLevel.color}`}>
                {classLevel.grades}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {classLevel.level}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {classLevel.description}
              </p>
            </div>
          ))}
        </div>

        {/* Subjects */}
        <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
          Subjects We Offer
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 text-center card-hover border border-border group"
            >
              <div className={`w-12 h-12 rounded-full ${subject.color} flex items-center justify-center mx-auto mb-3 transition-transform group-hover:scale-110`}>
                <subject.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-medium text-foreground">{subject.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;
