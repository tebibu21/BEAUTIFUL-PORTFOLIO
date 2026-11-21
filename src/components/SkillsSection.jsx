import { useState } from "react";
import { cn } from "@/lib/utils";
import { skillCategories } from "@/data/skills";
import { Code, Layout, Server, Smartphone, Database, Wrench, ShieldCheck } from "lucide-react";

const categoryIcons = {
  languages: Code,
  frontend: Layout,
  backend: Server,
  mobile: Smartphone,
  databases: Database,
  tools: Wrench,
  practices: ShieldCheck,
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories = skillCategories.filter(
    (cat) => activeCategory === "all" || cat.id === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-wider text-primary">
            Technical Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-1">
            Engineering Skills &amp; Toolchain
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Organized across 7 technical domains, emphasizing modern web, mobile, database, and system architecture capabilities.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer",
              activeCategory === "all"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary"
            )}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary"
              )}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* 7-Domain Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const IconComponent = categoryIcons[cat.id] || Code;
            return (
              <div
                key={cat.id}
                className="rounded-xl bg-card border border-border p-5 text-left flex flex-col justify-between shadow-xs card-hover"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-sm text-foreground">{cat.title}</h3>
                  </div>

                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-muted/60 text-foreground border border-border/80 hover:border-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
