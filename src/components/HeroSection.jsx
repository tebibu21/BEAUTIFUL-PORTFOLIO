import { ArrowDown, Download, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-medium animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span>Available for software development opportunities & collaborative projects</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="block opacity-0 animate-fade-in text-foreground">
              Tebibu Solomon
            </span>
            <span className="block text-2xl sm:text-4xl md:text-5xl font-extrabold text-gradient mt-2 opacity-0 animate-fade-in-delay-1">
              Building Software That Solves Real-World Problems.
            </span>
          </h1>

          {/* Subline - no tech stack focus, value & engineering focused */}
          <p className="text-lg md:text-xl font-medium text-foreground/90 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
            Engineering scalable, reliable, and user-focused digital solutions designed to deliver seamless experiences and tangible impact.
          </p>

          {/* Professional Description */}
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I transform complex challenges into practical software solutions through problem-solving, thoughtful system design, and effective implementation.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button w-full sm:w-auto">
              View My Work
            </a>
            <a
              href="/cv.pdf"
              download="Tebibu_Solomon_CV.pdf"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              aria-label="Download Tebibu Solomon CV"
            >
              <Download className="h-4 w-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to About section"
      >
        <span className="text-xs mb-1">Explore</span>
        <ArrowDown className="h-4 w-4 text-primary" />
      </a>
    </section>
  );
};
