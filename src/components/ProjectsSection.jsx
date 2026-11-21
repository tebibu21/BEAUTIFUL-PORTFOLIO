import { useState } from "react";
import { ArrowRight, BookOpen, ExternalLink, Github, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const filterCategories = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "Mobile",
  "Networking",
];

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-primary">
            Featured Engineering Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-1">
            Projects &amp; Case Studies
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Real software applications demonstrating full-stack engineering, cross-platform mobile development, and enterprise network architecture.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer",
                activeFilter === cat
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl bg-card border border-border overflow-hidden shadow-xs card-hover flex flex-col justify-between"
            >
              <div>
                {/* Screenshot Header */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-secondary border-b border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent opacity-85" />
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-background/95 backdrop-blur-md text-primary border border-primary/30 shadow-xs">
                      {project.category}
                    </span>
                    {project.isCaseStudy && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        Case Study
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-primary mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                    {project.whatIBuilt}
                  </p>

                  <div className="p-3 rounded-lg bg-muted/60 border border-border text-xs space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-primary">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>Technical Challenge</span>
                    </div>
                    <p className="text-muted-foreground text-[11px] leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[11px] font-medium border border-border rounded-md bg-secondary text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 border-t border-border/40 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {project.caseStudyUrl && (
                    <Link
                      to={project.caseStudyUrl}
                      className="primary-button text-xs py-1.5 px-3.5"
                      aria-label={`Read case study for ${project.title}`}
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>Case Study</span>
                    </Link>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="secondary-button text-xs py-1.5 px-3"
                      aria-label={`View ${project.title} repository on GitHub`}
                    >
                      <Github size={15} />
                      <span>Code</span>
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="secondary-button text-xs py-1.5 px-3"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={15} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {!project.githubUrl && !project.demoUrl && !project.caseStudyUrl && (
                    <span className="text-[11px] text-muted-foreground italic">
                      Private Internal Architecture
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub Profile CTA */}
        <div className="text-center mt-14">
          <a
            className="secondary-button text-xs"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tebibu21"
            aria-label="Visit Tebibu Solomon's GitHub Profile"
          >
            <span>Explore All Repositories on GitHub</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
