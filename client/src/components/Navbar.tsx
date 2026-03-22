/* ============================================================
   DESIGN: Warm Editorial — sticky top nav, minimal, terracotta hover underline
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const RESUME_PDF = "https://d2xsxph8kpxj0f.cloudfront.net/310519663465475439/DPKistzLDpBTXg9xVrbqve/Akanksha_Mattoo_DE(1)_552bb93e.pdf";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME_PDF;
    link.download = "Akanksha_Mattoo_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display font-bold text-lg text-foreground hover:text-primary transition-colors"
          >
            AM
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link text-sm ${
                  activeSection === link.href.slice(1) ? "active" : ""
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleResumeDownload}
              className="px-3 py-2 text-sm font-medium text-primary border border-primary rounded hover:bg-primary/5 transition-colors font-body flex items-center gap-1.5"
              title="Download resume"
            >
              <Download size={14} />
              Resume
            </button>
            <a
              href="mailto:mattooakanksha@gmail.com"
              className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors font-body"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-1 font-body"
              >
                {link.label}
              </button>
            ))}
            <div className="border-t border-border pt-4 flex flex-col gap-2">
              <button
                onClick={handleResumeDownload}
                className="w-full px-3 py-2 text-sm font-medium text-primary border border-primary rounded hover:bg-primary/5 transition-colors font-body flex items-center justify-center gap-1.5"
              >
                <Download size={14} />
                Download Resume
              </button>
              <a
                href="mailto:mattooakanksha@gmail.com"
                className="w-full px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors font-body text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
