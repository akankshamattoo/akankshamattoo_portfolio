/* ============================================================
   DESIGN: Warm Editorial — two education cards side by side
   Section number: 05
   ============================================================ */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Data Science",
    school: "University of Washington",
    location: "Seattle, USA",
    period: "Sep 2025 – Mar 2027",
    status: "In Progress",
    courses: [
      "Data Modeling",
      "Statistics",
      "Experimental Design",
      "Machine Learning",
      "Database Management Systems",
      "People Analytics",
    ],
    accent: "primary" as const,
  },
  {
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    school: "The National Institute of Engineering",
    location: "Mysore, India",
    period: "Aug 2019 – Jun 2023",
    status: "Completed",
    courses: [
      "Statistics",
      "Database Management Systems",
      "Cloud Computing",
      "Data Structures",
      "Computer Architecture",
    ],
    accent: "accent" as const,
  },
];

function EduCard({ edu, delay }: { edu: (typeof education)[0]; delay: number }) {
  const { ref, visible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white border border-border rounded-lg p-8 h-full hover:shadow-md transition-shadow">
        {/* Icon + status */}
        <div className="flex items-start justify-between mb-6">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              edu.accent === "primary" ? "bg-primary/10" : "bg-accent/10"
            }`}
          >
            <GraduationCap
              size={22}
              className={edu.accent === "primary" ? "text-primary" : "text-accent"}
            />
          </div>
          <span
            className={`text-xs px-2.5 py-1 rounded-full font-mono-custom ${
              edu.status === "In Progress"
                ? "bg-primary/10 text-primary"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {edu.status}
          </span>
        </div>

        {/* Degree */}
        <h3 className="font-display text-lg font-bold text-foreground mb-2 leading-snug">
          {edu.degree}
        </h3>

        {/* School */}
        <p
          className={`text-sm font-medium mb-4 font-body ${
            edu.accent === "primary" ? "text-primary" : "text-accent"
          }`}
        >
          {edu.school}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 mb-6 text-xs text-muted-foreground font-body">
          <span className="flex items-center gap-1">
            <Calendar size={11} />
            {edu.period}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={11} />
            {edu.location}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-4" />

        {/* Coursework */}
        <p className="text-xs font-mono-custom text-muted-foreground uppercase tracking-wider mb-3">
          Coursework
        </p>
        <div className="flex flex-wrap gap-2">
          {edu.courses.map((course) => (
            <span key={course} className="skill-tag">{course}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="education" className="py-24 bg-background">
      <div className="container">
        {/* Section header */}
        <div
          ref={ref}
          className={`relative mb-16 animate-on-scroll ${visible ? "visible" : ""}`}
        >
          <span className="section-number">05</span>
          <div className="relative z-10 pl-4">
            <p className="font-mono-custom text-xs text-accent uppercase tracking-widest mb-2">
              Education
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Academic
              <br />
              <em className="text-primary">Foundation</em>
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {education.map((edu, i) => (
            <EduCard key={edu.school} edu={edu} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
