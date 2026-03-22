/* ============================================================
   DESIGN: Warm Editorial — forest green impact stats banner
   ============================================================ */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "80k+", label: "Employees Served", sub: "via GenAI chatbot at Cisco" },
  { value: "50 hrs", label: "Saved Weekly", sub: "through ETL automation" },
  { value: "95%", label: "Error Reduction", sub: "in compliance data" },
  { value: "85%", label: "Faster Onboarding", sub: "for Splunk integration" },
  { value: "28%", label: "More Accurate", sub: "hiring pipeline forecasts" },
  { value: "75+", label: "Countries", sub: "Workday compliance coverage" },
];

export default function ImpactBanner() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <div
          ref={ref}
          className={`animate-on-scroll ${visible ? "visible" : ""}`}
        >
          <p className="font-mono-custom text-xs text-primary-foreground/60 uppercase tracking-widest text-center mb-10">
            Impact at Scale
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                }}
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-primary-foreground/80 font-body mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-primary-foreground/50 font-body leading-tight">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
