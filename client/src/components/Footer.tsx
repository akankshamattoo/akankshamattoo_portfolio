/* ============================================================
   DESIGN: Warm Editorial — minimal footer with forest green bg
   ============================================================ */
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name */}
          <div>
            <p className="font-display text-xl font-bold">Akanksha Mattoo</p>
            <p className="text-sm text-primary-foreground/70 mt-1 font-body">
              Data Engineer · Data Scientist · Seattle, WA
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/akankshamattoo02"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="https://github.com/akankshamattoo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href="mailto:mattooakanksha@gmail.com"
              className="w-9 h-9 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-primary-foreground/50 font-body">
            © {new Date().getFullYear()} Akanksha Mattoo
          </p>
        </div>
      </div>
    </footer>
  );
}
