import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center gradient-hero"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="bg-primary-foreground/20 backdrop-blur-sm rounded-full p-4">
              <GraduationCap className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Welcome to <span className="text-accent">Sunrise School</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Nurturing young minds with quality education, moral values, and holistic development. 
            Where every child's potential is discovered and nurtured to excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 btn-hover font-semibold"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Programs
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 btn-hover font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "25+", label: "Years of Excellence" },
            { value: "1500+", label: "Students Enrolled" },
            { value: "80+", label: "Qualified Teachers" },
            { value: "98%", label: "Pass Rate" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
