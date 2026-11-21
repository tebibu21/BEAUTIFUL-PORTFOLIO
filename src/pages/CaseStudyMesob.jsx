import { ArrowLeft, CheckCircle2, Code2, Database, ExternalLink, Github, Layers, ShieldCheck, Cpu, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const CaseStudyMesob = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navbar />

      <main className="container max-w-4xl mx-auto px-4 pt-28 pb-20 text-left">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <div className="space-y-4 pb-8 border-b border-border">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              Architectural Case Study
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-foreground border border-border">
              Enterprise Web Platform
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            A-Mesob Multi-Office Reporting &amp; Approval System
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            A multi-tier enterprise web platform engineered to eliminate operational reporting bottlenecks between distributed field offices and central executive leadership.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border/60 text-xs">
            <div>
              <span className="text-muted-foreground block font-medium">Role</span>
              <span className="font-bold text-foreground">Full-Stack Developer</span>
            </div>
            <div>
              <span className="text-muted-foreground block font-medium">Core Stack</span>
              <span className="font-bold text-foreground">MERN (React + Express)</span>
            </div>
            <div>
              <span className="text-muted-foreground block font-medium">Timeline</span>
              <span className="font-bold text-foreground">Collaborative Project</span>
            </div>
            <div>
              <span className="text-muted-foreground block font-medium">Access Security</span>
              <span className="font-bold text-foreground">Role-Based RBAC</span>
            </div>
          </div>
        </div>

        {/* Hero Screenshot */}
        <div className="my-10 rounded-2xl overflow-hidden border border-border shadow-md bg-card">
          <img
            src="/projects/A-Mesob Multi-Office Reporting System.png"
            alt="A-Mesob Multi-Office Reporting Platform Interface"
            className="w-full h-auto object-cover"
          />
          <div className="p-3 bg-muted/40 text-center text-xs text-muted-foreground">
            A-Mesob Multi-Office Management Interface: Branch Submission Pipeline and Approval Hierarchy.
          </div>
        </div>

        {/* Section 1: Problem & Objectives */}
        <section className="space-y-6 my-12">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <span className="h-6 w-1 rounded-full bg-primary" />
            1. Problem Statement &amp; Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-foreground/80 leading-relaxed">
            <div className="p-5 rounded-xl bg-card border border-border">
              <h3 className="font-bold text-base text-foreground mb-2">The Operational Challenge</h3>
              <p>
                Regional offices were previously generating periodic operational reports in disparate formats,
                relying on manual physical handoffs or unstructured messaging. This created severe synchronization delays,
                missing audits, and substantial friction when compiling executive summaries at the Head Office.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-card border border-border">
              <h3 className="font-bold text-base text-foreground mb-2">Engineering Objectives</h3>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Eliminate paper-based handoffs through standardized digital form schemas.</li>
                <li>Implement role-gated pipelines (/login, /entry, /review, /dashboard).</li>
                <li>Support Ethiopian calendar date entry without corrupting ISO database timestamps.</li>
                <li>Provide Head Office executives with unified, exportable audit views.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: System Architecture */}
        <section className="space-y-6 my-12">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <span className="h-6 w-1 rounded-full bg-primary" />
            2. System Architecture &amp; Data Pipeline
          </h2>

          <div className="p-6 rounded-xl bg-card border border-border space-y-4">
            <h3 className="font-bold text-base text-foreground">Three-Tier Architecture Diagram</h3>
            
            {/* Visual Text Flow Diagram */}
            <div className="p-5 rounded-lg bg-secondary/80 font-mono text-xs text-foreground/90 border border-border space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
                <div className="p-3 rounded-md bg-primary/10 border border-primary/30 w-full sm:w-1/3">
                  <p className="font-bold text-primary">PRESENTATION TIER</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">React + Vite + Tailwind</p>
                  <p className="text-[10px] text-foreground/75 mt-1">Role-Gated Routes &amp; Ethio Calendar Input</p>
                </div>
                <div className="text-primary font-bold">⇄ REST APIs ⇄</div>
                <div className="p-3 rounded-md bg-primary/10 border border-primary/30 w-full sm:w-1/3">
                  <p className="font-bold text-primary">APPLICATION TIER</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Node.js + Express.js</p>
                  <p className="text-[10px] text-foreground/75 mt-1">Auth Middleware, RBAC &amp; Validation</p>
                </div>
                <div className="text-primary font-bold">⇄ Mongoose ⇄</div>
                <div className="p-3 rounded-md bg-primary/10 border border-primary/30 w-full sm:w-1/3">
                  <p className="font-bold text-primary">DATA PERSISTENCE</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">MongoDB Atlas</p>
                  <p className="text-[10px] text-foreground/75 mt-1">ISO UTC Standard Timestamp Collections</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Branch data operators input records via calibrated form views. Submissions traverse Express authentication
              and validation middleware, where Ethiopian dates are standardized into UTC ISO strings before persistence.
              Supervisors receive real-time review queues to approve or reject reports with audit logs.
            </p>
          </div>
        </section>

        {/* Section 3: Technical Challenges & Solutions */}
        <section className="space-y-6 my-12">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <span className="h-6 w-1 rounded-full bg-primary" />
            3. Technical Challenges &amp; Solutions
          </h2>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-card border border-border text-sm">
              <div className="flex items-center gap-2 text-amber-500 font-bold mb-1">
                <AlertTriangle className="h-4 w-4" />
                <span>Challenge 1: Ethiopian Calendar Conversion &amp; Chronological Sorting</span>
              </div>
              <p className="text-foreground/80 leading-relaxed text-xs sm:text-sm">
                <strong>Problem:</strong> Local branch officers operate primarily under the 13-month Ethiopian calendar (Ge'ez calendar), but standard MongoDB date indices and international database drivers require Gregorian ISO UTC timestamps. Direct string storage would corrupt chronological date sorting.
                <br /><br />
                <strong>Solution:</strong> Developed a bidirectional algorithmic date transformation layer. When branch officers select Ethiopian dates in the UI, the conversion layer computes the equivalent Gregorian timestamp for backend storage, while dynamically formatting it back to the familiar Ethiopian date upon rendering.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-card border border-border text-sm">
              <div className="flex items-center gap-2 text-primary font-bold mb-1">
                <ShieldCheck className="h-4 w-4" />
                <span>Challenge 2: Multi-Role Authorization &amp; State Mutation Prevention</span>
              </div>
              <p className="text-foreground/80 leading-relaxed text-xs sm:text-sm">
                <strong>Problem:</strong> Once a field branch submitted a report, it had to be protected against unauthorized edits, while supervisor review needed strict separation from final executive approval.
                <br /><br />
                <strong>Solution:</strong> Implemented a finite state machine pattern (`Draft` → `Submitted` → `Under Review` → `Approved` / `Rejected`) enforced on both the backend routes and the React client routers. State mutations trigger immutable audit logs capturing timestamps and operator IDs.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Key Results & Lessons Learned */}
        <section className="space-y-6 my-12">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <span className="h-6 w-1 rounded-full bg-primary" />
            4. Results &amp; Key Engineering Takeaways
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-foreground/80 leading-relaxed">
            <div className="p-5 rounded-xl bg-card border border-border">
              <h3 className="font-bold text-base text-foreground mb-2">Technical Results</h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Successful delivery of clean role-gated dashboards with 0 calendar conversion skew.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Centralized submission pipeline replacing unstandardized manual communication.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-card border border-border">
              <h3 className="font-bold text-base text-foreground mb-2">Lessons Learned</h3>
              <p className="text-xs sm:text-sm leading-relaxed">
                Working in a multi-developer agile environment reinforced the critical importance of upfront API schema contracts,
                strict payload validation, and prioritizing maintainability over premature optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/#projects" className="secondary-button text-xs">
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Portfolio</span>
          </Link>
          <a href="#contact" className="primary-button text-xs">
            Discuss Enterprise Opportunities
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

