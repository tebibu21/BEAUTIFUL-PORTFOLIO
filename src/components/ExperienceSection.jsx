import { experiences } from "@/data/experience";
import { certifications } from "@/data/certifications";
import { Briefcase, Calendar, CheckCircle2, Award, ExternalLink, MapPin } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-muted/30 relative">
      <div className="container max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-primary">
            Career Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-1">
            Experience &amp; Internships
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Verified engineering roles, practical software internships, and enterprise system contributions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-border ml-3 sm:ml-6 md:ml-8 space-y-10 text-left">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Bullet */}
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform" />

              {/* Card Container */}
              <div className="p-6 rounded-xl bg-card border border-border shadow-xs card-hover">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {exp.type}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mt-1.5">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-primary/90">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-muted-foreground gap-1">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-1.5 mb-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-foreground/75 leading-relaxed">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-muted text-foreground border border-border/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Certifications & Credentials Grid */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold tracking-wider text-primary">
              Credentials
            </span>
            <h3 className="text-2xl font-bold text-foreground mt-1">
              Certifications &amp; Achievements
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="rounded-xl bg-card border border-border overflow-hidden shadow-xs card-hover flex flex-col justify-between"
              >
                <div className="h-44 bg-secondary overflow-hidden border-b border-border relative flex items-center justify-center p-3">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary">{cert.issuer}</span>
                    <span className="text-xs text-muted-foreground">{cert.date}</span>
                  </div>
                  <h4 className="text-base font-bold text-foreground">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
