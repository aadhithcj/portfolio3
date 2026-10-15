import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { to: "/about", label: "about" },
  { to: "/projects", label: "projects" },
  { to: "/skills", label: "skills" },
  { to: "/log", label: "log" },
  { to: "/contact", label: "contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b-[3px] border-border bg-background/95 backdrop-blur-sm">
      {/* Main Neo-Brutalist Top Bar */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        {/* Left: Brand */}
        <Link
          to="/"
          data-crosshair-target
          className="group flex items-center gap-2 font-sans font-extrabold uppercase tracking-tight text-foreground transition-transform hover:-translate-y-0.5"
        >
          <span className="grid size-7 sm:size-8 place-items-center border-2 border-border bg-primary font-mono text-xs font-black text-primary-foreground shadow-[2px_2px_0px_0px_var(--border)]">
            ◆
          </span>
          <span className="hidden sm:inline-block text-base md:text-lg font-black tracking-tight">
            Aadhith C Joseph
          </span>
          <span className="sm:hidden font-mono text-sm font-black tracking-wider">
            ACJ_
          </span>
        </Link>

        {/* Center: Status Metadata */}
        <div className="hidden lg:flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-muted-foreground border-2 border-border bg-card px-3 py-1 shadow-[2px_2px_0px_0px_var(--border)]">
          <span className="size-2 rounded-full bg-status-green animate-pulse" />
          <span className="font-bold text-foreground">SOFTWARE ENGINEER // PORTFOLIO '26</span>
          <span className="text-border">|</span>
          <span className="text-[11px] text-muted-foreground">KANNUR, KERALA</span>
        </div>

        {/* Right: Quick Action Buttons + Compact ThemeToggle */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <a
            href="https://github.com/aadhithcj"
            target="_blank"
            rel="noreferrer"
            data-crosshair-target
            className="nb-border nb-shadow-sm nb-press rounded-none bg-card px-2.5 py-1 sm:px-3 sm:py-1.5 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-foreground hover:bg-surface-secondary"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com/in/aadhithcj"
            target="_blank"
            rel="noreferrer"
            data-crosshair-target
            className="nb-border nb-shadow-sm nb-press rounded-none bg-card px-2.5 py-1 sm:px-3 sm:py-1.5 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-foreground hover:bg-surface-secondary"
          >
            LINKEDIN
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            data-crosshair-target
            className="nb-border nb-shadow-sm nb-press rounded-none bg-primary px-2.5 py-1 sm:px-3 sm:py-1.5 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-accent hover:text-accent-foreground"
          >
            RÉSUMÉ
          </a>

          {/* Compact Inline ThemeToggle */}
          <div className="ml-1 sm:ml-2">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Secondary Route Navigation Bar */}
      <div className="border-t-2 border-border/70 bg-card/60 px-4 py-1.5 sm:px-6">
        <nav
          aria-label="Route navigation"
          className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-5 gap-y-1 font-mono text-xs tracking-wider uppercase text-muted-foreground"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-crosshair-target
              className="link-slash py-0.5 transition-colors hover:text-foreground"
              activeProps={{
                className: "text-foreground font-black underline decoration-[2px] underline-offset-4 decoration-primary",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
