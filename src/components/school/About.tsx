import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">
          Building futures through quality education since 1998
        </p>

        {/* History */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Our Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 1998, Sunrise School began with a vision to provide accessible, 
              quality education to all children. What started as a small institution with 
              just 50 students has now grown into one of the most respected educational 
              establishments in the region.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over the years, we have consistently evolved our teaching methodologies, 
              embraced technology, and maintained our commitment to holistic development. 
              Our alumni have gone on to excel in various fields, from medicine and 
              engineering to arts and entrepreneurship.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center p-8">
                <GraduationCapIcon className="w-20 h-20 mx-auto text-primary mb-4" />
                <p className="text-lg font-medium text-foreground">25+ Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-8 shadow-sm card-hover border border-border">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-3">Our Mission</h4>
            <p className="text-muted-foreground leading-relaxed">
              To provide a nurturing environment where students develop intellectual 
              curiosity, moral integrity, and the skills needed to become responsible 
              global citizens.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-sm card-hover border border-border">
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
              <Eye className="w-7 h-7 text-secondary" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-3">Our Vision</h4>
            <p className="text-muted-foreground leading-relaxed">
              To be a leading educational institution recognized for academic excellence, 
              innovative teaching, and producing well-rounded individuals who contribute 
              positively to society.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-sm card-hover border border-border">
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4">
              <Heart className="w-7 h-7 text-accent" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-3">Our Values</h4>
            <p className="text-muted-foreground leading-relaxed">
              Integrity, Excellence, Respect, and Compassion form the cornerstone 
              of everything we do. We believe in fostering these values in every student.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const GraduationCapIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

export default About;
