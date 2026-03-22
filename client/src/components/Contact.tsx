/* ============================================================
   DESIGN: Warm Editorial — clean contact section with links
   Section number: 06
   ============================================================ */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "mattooakanksha@gmail.com",
    href: "mailto:mattooakanksha@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/akankshamattoo02",
    href: "https://linkedin.com/in/akankshamattoo02",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/akankshamattoo",
    href: "https://github.com/akankshamattoo",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Seattle, WA",
    href: null,
  },
];

export default function Contact() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container">
        <div
          ref={ref}
          className={`animate-on-scroll ${visible ? "visible" : ""}`}
        >
          {/* Section header */}
          <div className="relative mb-16">
            <span className="section-number">06</span>
            <div className="relative z-10 pl-4">
              <p className="font-mono-custom text-xs text-accent uppercase tracking-widest mb-2">
                Contact
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Let's Work
                <br />
                <em className="text-primary">Together</em>
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: message */}
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-foreground font-body">
                I'm currently open to data engineering and data science roles, internships, and research collaborations. Whether you have a project in mind, a role that fits, or just want to connect — I'd love to hear from you.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground font-body">
                I'm especially interested in roles that involve building scalable data infrastructure, applying DS to real-world problems, and working at the intersection of engineering and analytics.
              </p>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-primary font-medium font-body">Open to opportunities</span>
              </div>
            </div>

            {/* Right: contact links */}
            <div className="space-y-4">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary/30 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground font-mono-custom uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors font-body truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-foreground font-body">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
