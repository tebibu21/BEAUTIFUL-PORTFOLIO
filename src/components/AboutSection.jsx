import { Code, Database, Download, Network, Smartphone } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="text-2xl font-semibold text-foreground">
              Full-Stack & Mobile Software Developer
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I am a Full-Stack Software Developer and IT student at Addis Ababa
              University, with a strong interest in building scalable,
              efficient, and user-friendly web applications. My technical skills
              include JavaScript, React, Next.js, Node.js, Express.js, MongoDB,
              MySQL, and Python. I focus on writing clean, maintainable code and
              developing practical solutions to real-world problems.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I have worked on several software development projects, including
              the A-Mesob Multi-Office Reporting System, CBE Software development
              internship, a MERN-stack application, as well as Netflix and Amazon
              clone projects. Through these projects, I have gained hands-on
              experience in frontend and backend development, REST APIs,
              database management, authentication, and application deployment.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I am continuously improving my technical skills and looking
              forward to contributing to meaningful software projects while
              growing as a developer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button text-center">
                Get In Touch
              </a>

              <a
                href="/cv.pdf"
                download="Tebibu_Solomon_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-2"
                aria-label="Download Tebibu Solomon CV"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Highlight Cards Column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="gradient-border p-5 card-hover">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-full bg-primary/10 shrink-0">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base">Full-Stack Web</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Building robust web applications with React, Next.js, Node.js, and Express REST APIs.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-5 card-hover">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-full bg-primary/10 shrink-0">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base">Mobile Development</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Crafting cross-platform mobile apps with React Native, Flutter, Expo, and Firebase.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-5 card-hover">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-full bg-primary/10 shrink-0">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base">Databases & Backend</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Designing structured schemas & data pipelines with MongoDB, MySQL, and PostgreSQL.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-5 card-hover">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-full bg-primary/10 shrink-0">
                  <Network className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base">Systems & Networks</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Linux system administration, Apache, LVM, and enterprise Cisco network topologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
