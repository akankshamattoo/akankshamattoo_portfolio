/* ============================================================
   DESIGN: Warm Editorial — two-column layout, oversized section number
   ============================================================ */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container">
        <div
          ref={ref}
          className={`animate-on-scroll ${visible ? "visible" : ""}`}
        >
          {/* Section header */}
          <div className="relative mb-16">
            <span className="section-number">01</span>
            <div className="relative z-10 pl-4">
              <p className="font-mono-custom text-xs text-accent uppercase tracking-widest mb-2">
                About Me
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Building the Backbone
                <br />
                <em className="text-primary">of Data</em>
              </h2>
            </div>
          </div>

          <div className="max-w-3xl space-y-5">
            <p className="text-base leading-relaxed text-foreground font-body">
              I'm a Data Engineer and Data Scientist currently pursuing my Master of Science in Data Science at the{" "}
              <strong className="text-primary">University of Washington, Seattle</strong>. With over two years of full-time experience at{" "}
              <strong className="text-primary">Cisco Systems</strong>, I've built data infrastructure that powers enterprise-scale decisions.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground font-body">
              My work spans the full data stack — from architecting ETL pipelines and Workday integrations to designing GenAI-powered tools and predictive workforce models. I'm passionate about turning raw, messy data into reliable, scalable systems that enable smarter decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
