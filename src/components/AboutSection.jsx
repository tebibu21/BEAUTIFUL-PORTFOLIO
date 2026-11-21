import { Code2, Compass, GraduationCap, Layers, Lightbulb, Rocket } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30 relative">
      <div className="container max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-primary">
            Background &amp; Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-1">
            About Tebibu Solomon
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Engineering robust digital systems through deliberate problem-solving, clean software architecture, and practical execution.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          {/* Left: Biography and Philosophy */}
          <div className="lg:col-span-7 space-y-5 text-foreground/85 leading-relaxed text-sm sm:text-base">
            <h3 className="text-xl font-bold text-foreground">
              Software Developer &amp; Information Science Student
            </h3>

            <p>
              I am a Full-Stack Software Developer and Information Science student at{" "}
              <strong className="text-foreground font-semibold">Addis Ababa University</strong>.
              My journey in software engineering is driven by a deep fascination with how distributed web
              and mobile architectures turn complex user workflows into seamless, reliable interfaces.
            </p>

            <p>
              My hands-on experience spans building production-style web platforms, cross-platform mobile apps,
              and enterprise infrastructure simulations. Whether engineering the role-gated reporting pipeline for the{" "}
              <strong className="text-foreground font-semibold">A-Mesob Multi-Office platform</strong>, implementing
              real-time synchronization in mobile chat applications with Firebase, or designing wide-area network
              topologies for the <strong className="text-foreground font-semibold">CBETECH banking simulation</strong>,
              I prioritize clean code, modular architecture, and predictable system behavior.
            </p>

            <p>
              <strong className="text-foreground font-semibold">Development Philosophy:</strong> Great software is not
              measured by vanity metrics or arbitrary complexity, but by its reliability, maintainability, and ability
              to solve genuine real-world operational bottlenecks.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a href="#experience" className="primary-button text-xs">
                Explore Experience
              </a>
              <a href="#contact" className="secondary-button text-xs">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right: Technical Focus Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="p-4 rounded-xl bg-card border border-border shadow-xs card-hover flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                <Code2 className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Full-Stack Web Engineering</h4>
                <p className="text-xs text-muted-foreground mt-0.5 leading-normal">
                  Building reactive UIs with React and Next.js backed by Express and Node.js REST APIs.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border shadow-xs card-hover flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Cross-Platform Mobile</h4>
                <p className="text-xs text-muted-foreground mt-0.5 leading-normal">
                  Creating responsive native mobile applications using React Native, Expo, and Cloud Firestore.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border shadow-xs card-hover flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Database Architecture</h4>
                <p className="text-xs text-muted-foreground mt-0.5 leading-normal">
                  Designing relational and document schemas with MongoDB, MySQL, and PostgreSQL.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border shadow-xs card-hover flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Academic Foundation</h4>
                <p className="text-xs text-muted-foreground mt-0.5 leading-normal">
                  Senior Information Science coursework at Addis Ababa University emphasizing algorithms &amp; networking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
