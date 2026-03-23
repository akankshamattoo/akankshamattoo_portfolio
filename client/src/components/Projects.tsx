/* ============================================================
   DESIGN: Warm Editorial — 2-column masonry project cards
   Background: projects-bg.webp (dot grid, warm off-white)
   Section number: 03
   ============================================================ */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663465475439/DPKistzLDpBTXg9xVrbqve/projects-bg-dQNvMzbjG8tWDnmpdvq5gp.webp";

const projects = [
  {
    title: "Fraud Detection through Real-Time Financial Data",
    description:
      "Built a real-time financial transaction pipeline to detect suspicious patterns and visualize spending anomalies and risk indicators through interactive dashboards.",
    tags: ["Python", "SQL", "Kafka", "Streamlit"],
    link: true,
    featured: true,
    category: "Data Engineering",
  },
  {
    title: "Flight Delay Analysis",
    description:
      "Engineered an end-to-end ETL pipeline unifying flight, weather, and airport datasets to uncover key drivers of flight delays across weather conditions, congestion, and airline performance via Tableau dashboards.",
    tags: ["Python", "SQL", "Airflow", "Tableau"],
    link: true,
    featured: false,
    category: "Data Engineering",
  },
  {
    title: "Predictive Workforce Intelligence & Attrition Model",
    description:
      "Built a predictive retention framework for 1,400+ employees using Logistic Regression, Survival Analysis, and A/B testing, identifying high-overtime staff as 3x more likely to attrite and delivering a proactive talent-risk roadmap.",
    tags: ["Python", "Pandas", "Statistical Analysis", "Data Modeling"],
    link: true,
    featured: true,
    category: "Machine Learning",
  },
  {
    title: "Global Industrial Data Recency Analysis",
    description:
      "Conducted an in-depth analysis of World Bank industrial data to uncover regional and income-level disparities in data recency using hypothesis testing and forecasting.",
    tags: ["Hypothesis Testing", "Forecasting", "EDA"],
    link: false,
    featured: false,
    category: "Data Science",
  },
  {
    title: "Movie Reviews Summary Generator",
    description:
      "Engineered an NLP tool to generate concise movie review summaries from titles using aspect extraction, powered by Gemini API and Keras.",
    tags: ["Gemini API", "Gen AI", "Keras", "Spark"],
    link: true,
    featured: false,
    category: "GenAI",
  },
  {
    title: "Cognitive Load Prediction Using Keystrokes - Hackathon 3rd Place",
    description:
      "Analyzed and trained time-series keystroke data using LSTM-KMeans hybrid model to classify user cognitive load; developed a real-time visualization pipeline to display high/low-load trends during tasks.",
    tags: ["Python", "SQL", "Databricks", "LSTM"],
    link: true,
    featured: true,
    category: "Machine Learning",
  },
];

const categoryColors: Record<string, string> = {
  "Data Engineering": "bg-primary/10 text-primary",
  "Machine Learning": "bg-accent/10 text-accent",
  "Data Science": "bg-emerald-50 text-emerald-700",
  "GenAI": "bg-purple-50 text-purple-700",
};

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const { ref, visible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll project-card ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${(index % 2) * 100}ms` }}
    >
      <div className="bg-white border border-border rounded-lg p-6 h-full flex flex-col">
        {/* Category + featured badge */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs px-2 py-0.5 rounded-full font-mono-custom ${categoryColors[project.category] || "bg-muted text-muted-foreground"}`}>
            {project.category}
          </span>
          {project.featured && (
            <span className="text-xs text-accent font-mono-custom">★ Featured</span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-bold text-foreground mb-3 leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed font-body flex-1 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="skill-tag">{tag}</span>
          ))}
        </div>

        {/* Link */}
        {project.link && (
          <div className="flex items-center gap-3 pt-3 border-t border-border">
            <a
              href="https://github.com/akankshamattoo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-body"
            >
              <Github size={13} />
              View on GitHub
            </a>
            <ExternalLink size={13} className="text-border" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      id="projects"
      className="py-24 relative"
      style={{
        backgroundImage: `url(${PROJECTS_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/80" />

      <div className="container relative z-10">
        {/* Section header */}
        <div
          ref={ref}
          className={`relative mb-16 animate-on-scroll ${visible ? "visible" : ""}`}
        >
          <span className="section-number">03</span>
          <div className="relative z-10 pl-4">
            <p className="font-mono-custom text-xs text-accent uppercase tracking-widest mb-2">
              Projects
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Things I've
              <br />
              <em className="text-primary">Built & Explored</em>
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/akankshamattoo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary text-sm font-medium rounded hover:bg-primary hover:text-primary-foreground transition-all font-body"
          >
            <Github size={16} />
            See All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
