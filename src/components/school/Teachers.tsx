import { User } from "lucide-react";

const teachers = [
  {
    name: "Dr. Sarah Johnson",
    designation: "Principal",
    subject: "Administration",
    initials: "SJ",
    color: "bg-primary",
  },
  {
    name: "Mr. Robert Williams",
    designation: "Vice Principal",
    subject: "Mathematics",
    initials: "RW",
    color: "bg-secondary",
  },
  {
    name: "Mrs. Emily Davis",
    designation: "Senior Teacher",
    subject: "English Literature",
    initials: "ED",
    color: "bg-accent",
  },
  {
    name: "Dr. Michael Chen",
    designation: "Head of Science",
    subject: "Physics",
    initials: "MC",
    color: "bg-primary",
  },
  {
    name: "Ms. Priya Sharma",
    designation: "Teacher",
    subject: "Chemistry",
    initials: "PS",
    color: "bg-secondary",
  },
  {
    name: "Mr. James Anderson",
    designation: "Sports Coach",
    subject: "Physical Education",
    initials: "JA",
    color: "bg-accent",
  },
  {
    name: "Mrs. Lisa Thompson",
    designation: "Teacher",
    subject: "Computer Science",
    initials: "LT",
    color: "bg-primary",
  },
  {
    name: "Mr. David Martinez",
    designation: "Teacher",
    subject: "Social Studies",
    initials: "DM",
    color: "bg-secondary",
  },
];

const Teachers = () => {
  return (
    <section id="teachers" className="section-padding bg-background">
      <div className="container-custom">
        <h2 className="section-title">Our Teachers</h2>
        <p className="section-subtitle">
          Meet our dedicated team of educators committed to nurturing young minds
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center card-hover border border-border group"
            >
              {/* Avatar */}
              <div className={`w-20 h-20 rounded-full ${teacher.color} flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-105`}>
                <span className="text-2xl font-bold text-primary-foreground">
                  {teacher.initials}
                </span>
              </div>
              
              {/* Info */}
              <h4 className="font-semibold text-foreground mb-1">{teacher.name}</h4>
              <p className="text-primary text-sm font-medium mb-1">{teacher.designation}</p>
              <p className="text-muted-foreground text-sm">{teacher.subject}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
