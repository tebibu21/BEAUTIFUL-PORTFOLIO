import { education } from "@/data/education";
import { GraduationCap, BookOpen, Award, CheckCircle } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-primary">
            Academic Background
          </span>
          <h2 className="text-3xl font-extrabold text-foreground mt-1">
            Education &amp; Qualifications
          </h2>
        </div>

        <div className="p-8 rounded-2xl bg-card border border-border shadow-xs text-left">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-border">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-primary/10 text-primary shrink-0">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                  {education.status}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-1">
                  {education.degree}
                </h3>
                <p className="text-sm font-semibold text-primary">
                  {education.institution} • {education.location}
                </p>
              </div>
            </div>

            <div className="text-xs text-muted-foreground md:text-right">
              <span className="font-semibold text-foreground">Specialization Focus:</span>
              <p className="mt-0.5 max-w-xs">{education.focus}</p>
            </div>
          </div>

          {/* Highlights & Coursework */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-span-6 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                <Award className="h-4 w-4 text-primary" />
                <span>Academic Highlights</span>
              </h4>
              {education.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-foreground/80 leading-relaxed">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            <div className="lg:col-span-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                <BookOpen className="h-4 w-4 text-primary" />
                <span>Core Engineering Coursework</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-foreground border border-border"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

