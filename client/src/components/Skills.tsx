/* ============================================================
   DESIGN: Warm Editorial — horizontal category rows, staggered tag animation
   Section number: 04
   ============================================================ */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    category: "Programming Languages",
    icon: "< />",
    skills: ["Python", "SQL", "JavaScript", "R"],
    color: "primary",
  },
  {
    category: "Data Engineering & Platforms",
    icon: "⚙",
    skills: [
      "Apache Kafka",
      "Apache Airflow",
      "Hadoop",
      "Docker",
      "Jenkins",
      "Git",
      "Workday Studio",
      "Workday Extend",
      "Boomi iPaaS",
      "MuleSoft",
      "Informatica",
      "Oracle",
      "Power Automate",
      "JIRA",
    ],
    color: "accent",
  },
  {
    category: "Data Visualization",
    icon: "◈",
    skills: [
      "Tableau",
      "Power BI",
      "Looker",
      "AWS QuickSight",
      "Google Analytics",
      "Matplotlib",
      "Pandas",
      "Streamlit",
    ],
    color: "primary",
  },
  {
    category: "Machine Learning & AI",
    icon: "◉",
    skills: [
      "Scikit-learn",
      "Keras",
      "LSTM",
      "Logistic Regression",
      "Survival Analysis",
      "Time-Series Analysis",
      "A/B Testing",
      "Regression Modeling",
      "LLMs (Llama)",
      "Gemini API",
      "Spark",
      "Databricks",
    ],
    color: "accent",
  },
  {
    category: "Soft Skills",
    icon: "✦",
    skills: [
      "Cross-Functional Collaboration",
      "Problem-Solving",
      "Leadership",
      "Stakeholder Management",
      "People Analytics",
      "Client Management",
      "Product Analytics",
    ],
    color: "primary",
  },
];

function SkillRow({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const { ref, visible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="py-6 border-b border-border last:border-0">
        <div className="flex flex-col md:flex-row md:items-start gap-4">
          {/* Category label */}
          <div className="md:w-52 flex-shrink-0">
            <div className="flex items-center gap-2">
              <span
                className={`font-mono-custom text-base ${
                  category.color === "primary" ? "text-primary" : "text-accent"
                }`}
              >
                {category.icon}
              </span>
              <h3 className="font-display text-sm font-bold text-foreground">{category.category}</h3>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 flex-1">
            {category.skills.map((skill, i) => (
              <span
                key={skill}
                className="skill-tag"
                style={{
                  animationDelay: `${i * 30}ms`,
                  opacity: visible ? 1 : 0,
                  transition: `opacity 0.4s ease ${i * 30 + 200}ms`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container">
        {/* Section header */}
        <div
          ref={ref}
          className={`relative mb-16 animate-on-scroll ${visible ? "visible" : ""}`}
        >
          <span className="section-number">04</span>
          <div className="relative z-10 pl-4">
            <p className="font-mono-custom text-xs text-accent uppercase tracking-widest mb-2">
              Skills & Technologies
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Tools of the
              <br />
              <em className="text-primary">Trade</em>
            </h2>
          </div>
        </div>

        {/* Skill rows */}
        <div className="max-w-4xl">
          {skillCategories.map((cat, i) => (
            <SkillRow key={cat.category} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
