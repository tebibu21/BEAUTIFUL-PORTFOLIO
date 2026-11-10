import { ArrowRight, ExternalLink, Github, Layers, AlertCircle } from "lucide-react";
import { projects } from "@/data/projects";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Case studies and software applications demonstrating full-stack engineering, mobile development, and network architecture.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden border border-border shadow-xs card-hover flex flex-col justify-between text-left"
            >
              {/* Card Header & Preview Placeholder */}
              <div>
                <div className="relative h-44 bg-secondary/60 flex flex-col items-center justify-center p-4 border-b border-border overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
                  <Layers className="h-10 w-10 text-primary/40 mb-2 z-0" />
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/20 text-primary z-20">
                    {project.isCaseStudy ? "Engineered Case Study" : "Repository Showcase"}
                  </span>
                  <span className="text-[10px] text-muted-foreground mt-1.5 z-20">
                    [TODO: Screenshot Preview]
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-primary mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Problem Statement */}
                  <div className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Problem: </span>
                    {project.problem}
                  </div>

                  {/* What I Built */}
                  <div className="text-xs text-foreground/90">
                    <span className="font-semibold text-foreground">Solution: </span>
                    {project.whatIBuilt}
                  </div>

                  {/* Role */}
                  <div className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Role: </span>
                    {project.role}
                  </div>

                  {/* Key Challenge */}
                  <div className="p-3 rounded-lg bg-secondary/50 border border-border/80 text-xs">
                    <div className="flex items-center gap-1.5 text-primary font-medium mb-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>Engineering Challenge</span>
                    </div>
                    <p className="text-muted-foreground text-[11px] leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-medium border rounded-md bg-secondary/70 text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="p-6 pt-0 border-t border-border/40 mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-medium"
                      aria-label={`View ${project.title} repository on GitHub`}
                    >
                      <Github size={18} />
                      <span>Source Code</span>
                    </a>
                  ) : (
                    <span className="text-[11px] text-muted-foreground italic">
                      Private / Internal Project
                    </span>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-medium"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit inline-flex items-center justify-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tebibu21"
            aria-label="Visit Tebibu Solomon's GitHub Profile"
          >
            <span>Explore All Repositories on GitHub</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
