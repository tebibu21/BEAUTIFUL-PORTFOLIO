import { Link } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";
import { StarBackground } from "@/components/StarBackground";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <StarBackground />

      <div className="container max-w-lg mx-auto text-center z-10 space-y-6">
        <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-[0_0_20px_rgba(139,92,246,0.3)] animate-pulse">
          <Compass className="h-12 w-12" />
        </div>

        <h1 className="text-6xl sm:text-7xl font-extrabold text-gradient">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Lost in Deep Space
        </h2>

        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          The page or route you are navigating towards has drifted out of orbit or never existed in this sector.
        </p>

        <div className="pt-4">
          <Link
            to="/"
            className="cosmic-button inline-flex items-center justify-center gap-2"
            aria-label="Return to portfolio homepage"
          >
            <ArrowLeft size={16} />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
