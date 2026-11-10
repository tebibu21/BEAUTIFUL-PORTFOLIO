import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card relative border-t border-border mt-12">
      <div className="container max-w-5xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Tebibu Solomon. All rights reserved.
        </p>
        <a
          href="#hero"
          aria-label="Scroll back to top of page"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
