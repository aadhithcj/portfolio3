import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/about", label: "about" },
  { to: "/projects", label: "projects" },
  { to: "/skills", label: "skills" },
  { to: "/log", label: "log" },
  { to: "/contact", label: "contact" },
] as const;

export function SiteHeader({ isHome = false }: { isHome?: boolean }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-card/95 backdrop-blur-sm flex flex-col">
      {/* Subtle Grid Header Bar matching old portfolio styling */}
      <div className="w-full flex items-stretch justify-between overflow-x-auto scrollbar-none">
        {/* Left: Brand Cell */}
        <Link
          to="/"
          data-crosshair-target
          className="border-r border-border/40 px-4 sm:px-6 py-2 sm:py-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground hover:bg-surface-secondary transition-colors flex items-center shrink-0"
        >
          ACJ_
        </Link>

        {/* Left Spacer */}
        <div className="flex-1 min-w-2 sm:min-w-4" />

        {/* Center: Segmented Navigation Tabs for other pages */}
        {!isHome && (
          <nav className="hidden md:flex items-stretch shrink-0 border-l border-border/40">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-crosshair-target
                className="border-r border-border/40 px-3.5 sm:px-5 py-2 sm:py-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-surface-secondary transition-colors flex items-center shrink-0"
                activeProps={{
                  className:
                    "bg-primary text-primary-foreground font-black shadow-[inset_0_-3px_0_0_var(--border)]",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Right Spacer */}
        <div className="flex-1 min-w-2 sm:min-w-4" />

        {/* Right Action Cells */}
        <div className="flex items-stretch shrink-0">
          <a
            href="https://github.com/aadhithcj"
            target="_blank"
            rel="noreferrer"
            data-crosshair-target
            className="border-l border-border/40 px-3 sm:px-5 py-2 sm:py-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground hover:bg-surface-secondary transition-colors flex items-center"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com/in/aadhithcj"
            target="_blank"
            rel="noreferrer"
            data-crosshair-target
            className="border-l border-border/40 px-3 sm:px-5 py-2 sm:py-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground hover:bg-surface-secondary transition-colors flex items-center"
          >
            LINKEDIN
          </a>
          <Link
            to="/contact"
            data-crosshair-target
            className="border-l border-border/40 bg-primary px-3 sm:px-5 py-2 sm:py-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-1"
            activeProps={{
              className: "bg-foreground text-background font-black shadow-[inset_0_-3px_0_0_var(--border)]",
            }}
          >
            HIRE ME ↗
          </Link>
        </div>
      </div>

      {/* On mobile screens for sub-pages: horizontal scrolling navigation bar */}
      {!isHome && (
        <nav className="md:hidden flex items-stretch border-t border-border/40 bg-card/70 overflow-x-auto scrollbar-none divide-x divide-border/40">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-crosshair-target
              className="px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-surface-secondary whitespace-nowrap flex items-center"
              activeProps={{
                className: "bg-primary text-primary-foreground font-black shadow-[inset_0_-2px_0_0_var(--border)]",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
