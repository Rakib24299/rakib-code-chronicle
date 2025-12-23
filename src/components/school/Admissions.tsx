import { ClipboardList, FileText, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: ClipboardList,
    title: "Step 1: Inquiry",
    description: "Fill out the online inquiry form or visit our campus for more information about our programs.",
  },
  {
    icon: FileText,
    title: "Step 2: Application",
    description: "Submit the completed application form along with required documents and application fee.",
  },
  {
    icon: Calendar,
    title: "Step 3: Assessment",
    description: "Schedule and complete the entrance assessment and parent interview with our admissions team.",
  },
  {
    icon: CheckCircle,
    title: "Step 4: Enrollment",
    description: "Upon acceptance, complete the enrollment process and welcome to the Sunrise School family!",
  },
];

const Admissions = () => {
  return (
    <section id="admissions" className="section-padding bg-muted">
      <div className="container-custom">
        <h2 className="section-title">Admissions</h2>
        <p className="section-subtitle">
          Join our community of learners and start your journey to excellence
        </p>

        {/* Admission Info */}
        <div className="bg-card rounded-xl p-8 md:p-12 shadow-sm border border-border mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Admission Open for 2025-26
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We welcome applications from students who are eager to learn and grow. 
                Our admission process is designed to understand each child's unique 
                potential and ensure they find the right fit at our school.
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Limited seats available per class
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Scholarship programs for meritorious students
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Sibling discount available
                </li>
              </ul>
              <Button size="lg" className="btn-hover">
                Download Prospectus
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-primary mb-2">2025-26</div>
              <div className="text-xl text-foreground mb-4">Academic Session</div>
              <div className="text-muted-foreground">
                Application Deadline: <br />
                <span className="font-semibold text-foreground">March 31, 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Steps to Apply */}
        <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
          How to Apply
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-card rounded-xl p-6 card-hover border border-border"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
              
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Admissions;
