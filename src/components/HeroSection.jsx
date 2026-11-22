import { ArrowDown, Download, MapPin, Sparkles, FolderGit2, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-28 pb-16"
    >
      <div className="container max-w-5xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline, Bio & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability & Location Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open to Work &amp; Software Development Roles</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-card text-muted-foreground text-xs font-medium">
                <MapPin className="h-3 w-3 text-primary" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>

            {/* Name and Professional Title */}
            <div>
              <p className="text-sm font-semibold tracking-wide text-primary uppercase mb-1">
                Software Engineer
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                Tebibu Solomon
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-gradient mt-2">
                Full-Stack &amp; Mobile Software Developer
              </h2>
            </div>

            {/* Introduction Copy */}
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed font-normal">
              I build modern web applications and cross-platform mobile experiences using
              React, Next.js, Node.js, React Native, and modern backend technologies.
              I focus on developing practical, scalable software solutions that solve real-world problems.
            </p>

            {/* Quick Tech Highlights */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-muted-foreground font-medium mr-1">Core Stack:</span>
              {["React", "Next.js", "Node.js", "React Native", "Firebase", "MongoDB"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-secondary text-foreground font-medium border border-border/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="primary-button"
                aria-label="View Tebibu Solomon's Projects"
              >
                <FolderGit2 className="h-4 w-4" />
                <span>View My Projects</span>
              </a>

              <a
                href="/cv.pdf"
                download="Tebibu-Solomon-Software-Developer-CV.pdf"
                className="secondary-button"
                aria-label="Download Tebibu Solomon CV"
              >
                <Download className="h-4 w-4" />
                <span>Download My CV</span>
              </a>

              <a
                href="#contact"
                className="secondary-button"
                aria-label="Contact Tebibu Solomon"
              >
                <Mail className="h-4 w-4" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image / Visual Representation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Subtle Ambient Border Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />

              {/* Card Container */}
              <div className="relative rounded-2xl bg-card border border-border p-3 shadow-lg max-w-[320px] sm:max-w-[340px]">
                <div className="relative rounded-xl overflow-hidden bg-secondary aspect-square flex items-center justify-center">
                  <img
                    src="/profile.png"
                    alt="Tebibu Solomon - Full-Stack & Mobile Software Developer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    loading="eager"
                  />
                  <div className="absolute bottom-2 left-2 right-2 p-2.5 rounded-lg bg-background/90 backdrop-blur-md border border-border text-left">
                    <p className="text-xs font-bold text-foreground">Tebibu Solomon</p>
                    <p className="text-[11px] text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Indicator */}
      <a
        href="#about"
        className="mt-12 inline-flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-xs font-medium cursor-pointer"
        aria-label="Scroll to About Section"
      >
        <span>Discover More</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
};
