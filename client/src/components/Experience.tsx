/* ============================================================
   DESIGN: Warm Editorial — vertical timeline with alternating cards
   Section number: 02
   ============================================================ */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Graduate Researcher",
    company: "People Analytics Lab | University of Washington",
    location: "Seattle, USA",
    period: "Jan 2026 – Present",
    type: "Part-time",
    bullets: [
      "Engineered a matched longitudinal dataset from multi-wave survey responses across 600+ employees designing the data integration and cleaning pipeline to handle missing values, temporal alignment, and feature construction for downstream predictivemodeling",
      "Built and evaluated classification models (logistic regression, mixed feature types) with full diagnostic pipelines — selecting methods across ordinal, binary, and continuous variables to predict employee attrition and performance outcomes.",
      "Developed reproducible, end-to-end analysis pipelines with documented preprocessing steps, modeling rationale, and validation outputs, enabling transparent handoff and clear communication of findings to non-technical stakeholders.",
    ],
    tags: ["Machine Learning", "ETL", "A/B Testing", "EDA"],
    accent: "accent",
  },
  {
    role: "Data Engineer",
    company: "Cisco Systems Pvt. Ltd",
    location: "Bengaluru, India",
    period: "Aug 2023 – Aug 2025",
    type: "Full-time",
    bullets: [
      "Developed ETL pipelines to automate HR data delivery across 26 global vendors, cutting processing time by 50 hrs/week and enabling predictive analytics at scale for 15 downstream teams.",
      "Designed a proprietary GenAI-powered P&C chatbot using Llama-based LLMs and Golang microservices, enabling 80k+ employees to self-serve HR queries and reducing HR Operations response time by 70%.",
      "Engineered Workday Studio integrations ensuring compliance across 75+ countries, safeguarding $100M+ in HR transactions, and reducing compliance-related data errors by 95% during global broker consolidation project.",
      "Architected a centralized secrets management framework by integrating Conjur with Boomi iPaaS to securely retrieve credentials across authentication types, reducing operational overhead by 80%.",
      "Deployed HR data infrastructure for Splunk's 9,000+ employee integration into Cisco by developing 35 Workday pipelines, 300 ETLs, and 33 REST APIs, reducing onboarding data readiness time by 85%.",
      "Delivered 28% more accurate hiring pipeline forecasts through time-series analysis and regression modeling on historical recruiting trends and workforce mobility data.",
    ],
    tags: ["Python", "ETL", "GenAI", "Workday", "Boomi", "Kafka", "REST APIs", "LLMs"],
    accent: "primary",
  },
];

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const { ref, visible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative pl-8 pb-12 last:pb-0">
        {/* Timeline line */}
        <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />

        {/* Timeline dot */}
        <div
          className={`absolute left-0 top-2 w-2 h-2 rounded-full -translate-x-[3px] ${
            exp.accent === "primary" ? "bg-primary" : "bg-accent"
          }`}
        />

        {/* Card */}
        <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">{exp.role}</h3>
              <p
                className={`text-sm font-medium mt-0.5 ${
                  exp.accent === "primary" ? "text-primary" : "text-accent"
                } font-body`}
              >
                {exp.company}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-mono-custom ${
                  exp.type === "Full-time"
                    ? "bg-primary/10 text-primary"
                    : "bg-accent/10 text-accent"
                }`}
              >
                {exp.type}
              </span>
            </div>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 mb-4 text-xs text-muted-foreground font-body">
            <span className="flex items-center gap-1">
              <Calendar size={11} />
              {exp.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={11} />
              {exp.location}
            </span>
          </div>

          {/* Bullets */}
          <ul className="space-y-2 mb-4">
            {exp.bullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed font-body">
                <span
                  className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${
                    exp.accent === "primary" ? "bg-primary" : "bg-accent"
                  }`}
                />
                {b}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span key={tag} className="skill-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container">
        {/* Section header */}
        <div
          ref={ref}
          className={`relative mb-16 animate-on-scroll ${visible ? "visible" : ""}`}
        >
          <span className="section-number">02</span>
          <div className="relative z-10 pl-4">
            <p className="font-mono-custom text-xs text-accent uppercase tracking-widest mb-2">
              Work Experience
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Where I've
              <br />
              <em className="text-primary">Made an Impact</em>
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
