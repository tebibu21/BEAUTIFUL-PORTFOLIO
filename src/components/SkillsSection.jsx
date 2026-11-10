import { useState } from "react";
import { cn } from "@/lib/utils";
import { Globe, Smartphone, Server, Wrench } from "lucide-react";

const skillGroups = [
  {
    id: "web",
    category: "web",
    title: "Web Engineering",
    icon: Globe,
    description: "Modern full-stack web applications, scalable backends, and responsive user interfaces.",
    skills: ["React", "Node.js", "Express", "PostgreSQL", "MongoDB", "PHP/MySQL"],
  },
  {
    id: "mobile",
    category: "mobile",
    title: "Mobile Development",
    icon: Smartphone,
    description: "Cross-platform mobile applications with native device access and real-time backend synchronization.",
    skills: ["Flutter", "React Native", "Expo", "Firebase"],
  },
  {
    id: "systems",
    category: "systems & networking",
    title: "Systems & Networking",
    icon: Server,
    description: "Enterprise network design, Linux server administration, access control, and network security.",
    skills: ["Linux", "Apache", "LVM", "SELinux", "Firewalls", "Cisco Packet Tracer"],
  },
  {
    id: "tools",
    category: "tools",
    title: "Developer Tools",
    icon: Wrench,
    description: "Essential toolchains for version control, collaborative development, and efficient engineering workflows.",
    skills: ["Git/GitHub", "VS Code"],
  },
];

const categories = ["all", "web", "mobile", "systems & networking", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredGroups = skillGroups.filter(
    (group) => activeCategory === "all" || group.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm md:text-base">
          A structured overview of the frameworks, platforms, systems, and tools I use to build complete digital solutions.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-[0_0_12px_rgba(139,92,246,0.4)] scale-105"
                  : "bg-card text-foreground/80 hover:text-primary hover:bg-card/80 border border-border"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grouped Badge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGroups.map((group) => {
            const IconComponent = group.icon;
            return (
              <div
                key={group.id}
                className="gradient-border p-6 bg-card card-hover text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">
                        {group.title}
                      </h3>
                      <span className="text-xs uppercase tracking-wider text-primary font-medium">
                        {group.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-secondary text-foreground border border-border/60 hover:border-primary/50 hover:bg-primary/10 transition-colors"
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
