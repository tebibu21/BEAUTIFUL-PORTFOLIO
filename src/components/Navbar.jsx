import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/85 backdrop-blur-md border-b border-border shadow-xs"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo / Brand Name */}
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2 group"
          aria-label="Tebibu Solomon Portfolio Home"
        >
          <span className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            TS
          </span>
          <span className="font-semibold text-foreground">Tebibu Solomon</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 bg-card/60 backdrop-blur-sm border border-border/80 px-3 py-1.5 rounded-full shadow-xs"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                    : "text-foreground/75 hover:text-foreground hover:bg-muted"
                )}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Group */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="primary-button text-xs py-2 px-4 shadow-none"
            aria-label="Contact Tebibu Solomon"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger & Theme Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2.5 rounded-lg border border-border bg-card text-foreground"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-x-0 top-full bg-background/98 backdrop-blur-xl border-b border-border shadow-xl md:hidden transition-all duration-300 overflow-hidden",
            isMenuOpen
              ? "max-h-[420px] py-6 opacity-100"
              : "max-h-0 py-0 opacity-0 pointer-events-none"
          )}
        >
          <div className="container flex flex-col space-y-3">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "px-4 py-2.5 rounded-lg text-sm font-medium transition-colors text-left",
                    isActive
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "text-foreground/80 hover:bg-muted"
                  )}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-2 border-t border-border">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="primary-button w-full justify-center"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
