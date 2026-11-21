import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card/60 backdrop-blur-md pt-16 pb-12 px-4 transition-colors">
      <div className="container max-w-5xl mx-auto space-y-12">
        {/* Top Grid: Identity, Links, and Status */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Identity Column */}
          <div className="md:col-span-5 space-y-3 text-left">
            <a
              href="#hero"
              className="text-lg font-bold text-foreground hover:text-primary transition-colors tracking-tight flex items-center gap-1.5"
            >
              <span className="text-primary font-black">&lt;</span>
              <span>Tebibu Solomon</span>
              <span className="text-primary font-black">/&gt;</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-Stack &amp; Mobile Software Developer based in Addis Ababa, Ethiopia.
              Focused on crafting robust web architectures, scalable APIs, and intuitive mobile solutions.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for internships, junior software roles &amp; freelance projects</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#education" className="hover:text-primary transition-colors">Education</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Connect / Socials */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Connect
            </h4>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm text-muted-foreground">
              <a
                href="https://github.com/tebibu21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                aria-label="Tebibu Solomon GitHub"
              >
                <Github size={15} />
                <span>GitHub (@tebibu21)</span>
              </a>

              <a
                href="https://www.linkedin.com/in/tebibu-solomon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                aria-label="Tebibu Solomon LinkedIn"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:tebibu211@gmail.com"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                aria-label="Email Tebibu Solomon"
              >
                <Mail size={15} />
                <span>tebibu211@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {currentYear} Tebibu Solomon. Built with React, Tailwind CSS &amp; modern engineering standards.
          </p>

          <a
            href="#hero"
            aria-label="Scroll back to top of the page"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-secondary hover:bg-primary/10 hover:text-primary hover:border-primary/40 transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};
