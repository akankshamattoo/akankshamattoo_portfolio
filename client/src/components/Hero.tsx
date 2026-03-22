/* ============================================================
   DESIGN: Warm Editorial — asymmetric hero, large name left, tagline right
   Background: hero-bg.webp (warm cream + data flow lines)
   Text: dark charcoal on light background
   ============================================================ */
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, MapPin, ChevronDown, Download } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663465475439/DPKistzLDpBTXg9xVrbqve/hero-bg-DLvtFtrtgFgVKukHVEEbqg.webp";
const PROFILE_PIC = "https://d2xsxph8kpxj0f.cloudfront.net/310519663465475439/DPKistzLDpBTXg9xVrbqve/IMG_77932_a782b2e9.webp";
const RESUME_PDF = "https://d2xsxph8kpxj0f.cloudfront.net/310519663465475439/DPKistzLDpBTXg9xVrbqve/Akanksha_Mattoo_DE(1)_552bb93e.pdf";

const roles = [
  "Data Engineer",
  "Data Scientist",
  "Pipeline Architect",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME_PDF;
    link.download = "Akanksha_Mattoo_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-background/60" />

      <div className="container relative z-10 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Name & Identity */}
          <div
            className={`transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Location badge */}
            <div className="inline-flex items-center gap-1.5 text-xs font-mono-custom text-muted-foreground mb-6 px-3 py-1.5 bg-white/70 border border-border rounded-full backdrop-blur-sm">
              <MapPin size={11} />
              Seattle, WA
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4">
              Akanksha
              <br />
              <span className="text-primary">Mattoo</span>
            </h1>

            {/* Typewriter role */}
            <div className="flex items-center gap-2 mb-6 h-9">
              <span className="font-mono-custom text-lg md:text-xl text-accent font-medium">
                {displayed}
              </span>
              <span className="inline-block w-0.5 h-6 bg-accent animate-pulse" />
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://linkedin.com/in/akankshamattoo02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <span className="text-border">|</span>
              <a
                href="https://github.com/akankshamattoo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
              >
                <Github size={16} />
                GitHub
              </a>
              <span className="text-border">|</span>
              <a
                href="mailto:mattooakanksha@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
              >
                <Mail size={16} />
                Email
              </a>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition-all hover:shadow-lg font-body"
              >
                View My Work
              </button>
              <button
                onClick={handleResumeDownload}
                className="px-6 py-3 border border-primary text-primary text-sm font-medium rounded hover:bg-primary/5 transition-all font-body flex items-center gap-2"
              >
                <Download size={16} />
                Resume
              </button>
            </div>
          </div>

          {/* Right: Profile photo + stats */}
          <div
            className={`flex flex-col items-center lg:items-end gap-8 transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Profile photo */}
            <div className="relative">
              <img
                src={PROFILE_PIC}
                alt="Akanksha Mattoo"
                className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-2xl"
              />
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-accent/30 animate-spin" style={{ animationDuration: "20s" }} />
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              {[
                { value: "2+", label: "Years at Cisco" },
                { value: "80k+", label: "Users Impacted" },
                { value: "6+", label: "Projects" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 bg-white/70 border border-border rounded-lg backdrop-blur-sm"
                >
                  <div className="font-display text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-xs font-body">Scroll</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </section>
  );
}
