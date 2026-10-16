import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/hooks/use-theme";

const navLinks = [
  {
    to: "/about",
    label: "about",
    activeClass:
      "bg-[#FF7700] hover:bg-[#FF7700] text-white font-black shadow-[inset_0_-3px_0_0_var(--shadow-color)]",
    hoverClass:
      "hover:bg-[#FF7700]/15 dark:hover:bg-[#FF7700]/25 hover:text-foreground",
    mobileActiveClass:
      "bg-[#FF7700] text-white font-black shadow-[inset_0_-2px_0_0_var(--shadow-color)]",
  },
  {
    to: "/projects",
    label: "projects",
    activeClass:
      "bg-[#F1BE05] hover:bg-[#F1BE05] text-black font-black shadow-[inset_0_-3px_0_0_var(--shadow-color)]",
    hoverClass:
      "hover:bg-[#F1BE05]/15 dark:hover:bg-[#F1BE05]/25 hover:text-foreground",
    mobileActiveClass:
      "bg-[#F1BE05] text-black font-black shadow-[inset_0_-2px_0_0_var(--shadow-color)]",
  },
  {
    to: "/skills",
    label: "skills",
    activeClass:
      "bg-[#42BFDD] hover:bg-[#42BFDD] text-black font-black shadow-[inset_0_-3px_0_0_var(--shadow-color)]",
    hoverClass:
      "hover:bg-[#42BFDD]/15 dark:hover:bg-[#42BFDD]/25 hover:text-foreground",
    mobileActiveClass:
      "bg-[#42BFDD] text-black font-black shadow-[inset_0_-2px_0_0_var(--shadow-color)]",
  },
  {
    to: "/log",
    label: "log",
    activeClass:
      "bg-[#9649CB] hover:bg-[#9649CB] text-white font-black shadow-[inset_0_-3px_0_0_var(--shadow-color)]",
    hoverClass:
      "hover:bg-[#9649CB]/15 dark:hover:bg-[#9649CB]/25 hover:text-foreground",
    mobileActiveClass:
      "bg-[#9649CB] text-white font-black shadow-[inset_0_-2px_0_0_var(--shadow-color)]",
  },
  {
    to: "/contact",
    label: "contact",
    activeClass:
      "bg-[#FF3C38] hover:bg-[#FF3C38] text-white font-black shadow-[inset_0_-3px_0_0_var(--shadow-color)]",
    hoverClass:
      "hover:bg-[#FF3C38]/15 dark:hover:bg-[#FF3C38]/25 hover:text-foreground",
    mobileActiveClass:
      "bg-[#FF3C38] text-white font-black shadow-[inset_0_-2px_0_0_var(--shadow-color)]",
  },
] as const;

export function SiteHeader({ isHome = false }: { isHome?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  let hireMeClass = "bg-[#F1BE05] hover:bg-[#F1BE05]/85 text-black";

  if (pathname.startsWith("/about")) {
    hireMeClass = "bg-[#FF7700] hover:bg-[#FF7700]/85 text-white";
  } else if (pathname.startsWith("/projects")) {
    hireMeClass = "bg-[#F1BE05] hover:bg-[#F1BE05]/85 text-black";
  } else if (pathname.startsWith("/skills")) {
    hireMeClass = "bg-[#42BFDD] hover:bg-[#42BFDD]/85 text-black";
  } else if (pathname.startsWith("/log")) {
    hireMeClass = "bg-[#9649CB] hover:bg-[#9649CB]/85 text-white";
  } else if (pathname.startsWith("/contact")) {
    hireMeClass =
      "bg-[#FF3C38] hover:bg-[#FF3C38] text-white shadow-[inset_0_-3px_0_0_var(--shadow-color)]";
  }

  const mobileNavItems = [
    { to: "/about", label: "ABOUT" },
    { to: "/skills", label: "SKILLS" },
    { to: "/projects", label: "PROJECTS" },
    { to: "/log", label: "JOURNEY" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-border bg-card flex flex-col">
      {/* 1. Mobile Header Bar (Screen < md) matching portfolio1 */}
      <div className="md:hidden w-full h-14 px-4 flex items-center justify-between bg-card">
        {/* Left: Brand Badge matching Screenshot 1 */}
        <Link
          to="/"
          data-crosshair-target
          onClick={() => setMobileMenuOpen(false)}
          className="inline-flex items-center border-2 border-border bg-[#c4f000] dark:bg-[#F1BE05] px-3 py-1 font-mono text-sm font-black text-black shadow-[3px_3px_0px_0px_var(--shadow-color)] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-transform"
        >
          ACJ<span className="text-[#FF3C38]">_</span>
        </Link>

        {/* Right: Cyan Menu Toggle Button matching Screenshot 1 */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={
            mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          data-crosshair-target
          className="grid size-10 place-items-center border-2 border-border bg-[#42BFDD] text-black shadow-[3px_3px_0px_0px_var(--shadow-color)] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-transform"
        >
          {mobileMenuOpen ? (
            <X className="size-5 stroke-[2.5]" />
          ) : (
            <Menu className="size-5 stroke-[2.5]" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Panel directly beneath top bar, matching Screenshot 1 */}
      {mobileMenuOpen && (
        <>
          {/* Dimmed backdrop to close on outside tap */}
          <div
            className="md:hidden fixed inset-0 top-14 z-40 bg-black/35 backdrop-blur-[1px]"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Opaque Dropdown Menu Panel */}
          <div className="md:hidden relative z-50 w-full bg-white dark:bg-[#141414] border-t-2 border-border p-3.5 sm:p-4 flex flex-col gap-2.5 shadow-2xl animate-in fade-in slide-in-from-top-1 duration-150">
            {mobileNavItems.map((item) => {
              const isActive = pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  data-crosshair-target
                  className={`w-full py-2.5 px-4 font-mono text-sm font-bold uppercase tracking-wider border-2 border-border block text-left transition-all ${
                    isActive
                      ? "bg-black text-white dark:bg-white dark:text-black shadow-[2px_2px_0px_0px_var(--shadow-color)]"
                      : "bg-white dark:bg-card text-foreground shadow-[3px_3px_0px_0px_var(--shadow-color)] hover:bg-[#F1BE05] hover:text-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_var(--shadow-color)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Quick External Actions */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 font-mono text-sm font-bold uppercase tracking-wider border-2 border-border shadow-[3px_3px_0px_0px_var(--shadow-color)] bg-white dark:bg-card text-foreground hover:bg-[#F1BE05] hover:text-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_var(--shadow-color)] transition-all flex items-center justify-between"
            >
              <span>RESUME</span>
              <span className="font-mono text-xs">↗</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://github.com/aadhithcj"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-4 font-mono text-sm font-bold uppercase tracking-wider border-2 border-border shadow-[3px_3px_0px_0px_var(--shadow-color)] bg-white dark:bg-card text-foreground hover:bg-[#F1BE05] hover:text-black text-center transition-all"
              >
                GITHUB ↗
              </a>
              <a
                href="https://linkedin.com/in/aadhithcj"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-4 font-mono text-sm font-bold uppercase tracking-wider border-2 border-border shadow-[3px_3px_0px_0px_var(--shadow-color)] bg-white dark:bg-card text-foreground hover:bg-[#F1BE05] hover:text-black text-center transition-all"
              >
                LINKEDIN ↗
              </a>
            </div>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={() => {
                toggleTheme();
              }}
              className="w-full py-2.5 px-4 font-mono text-sm font-bold uppercase tracking-wider border-2 border-border shadow-[3px_3px_0px_0px_var(--shadow-color)] bg-white dark:bg-card text-foreground flex items-center justify-between hover:bg-[#F1BE05] hover:text-black transition-all"
            >
              <span>THEME // {isDark ? "LIGHT MODE" : "DARK MODE"}</span>
              <span className="font-bold">{isDark ? "☀" : "☾"}</span>
            </button>
          </div>
        </>
      )}

      {/* 2. Desktop Header Bar (Screen >= md) */}
      <div className="hidden md:flex w-full items-stretch justify-between overflow-x-auto scrollbar-none">
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

        {/* Center: Segmented Navigation Tabs with Page-Specific Accent & Muted Hover (strictly when inactive) */}
        {!isHome && (
          <nav className="flex items-stretch shrink-0 border-l border-border/40">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-crosshair-target
                className="border-r border-border/40 px-3.5 sm:px-5 py-2 sm:py-2.5 font-mono text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center shrink-0"
                activeProps={{
                  className: link.activeClass,
                }}
                inactiveProps={{
                  className: `text-muted-foreground ${link.hoverClass}`,
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
            className={`border-l border-border/40 px-3 sm:px-5 py-2 sm:py-2.5 font-mono text-xs sm:text-sm font-black uppercase tracking-wider transition-colors flex items-center gap-1 ${hireMeClass}`}
            activeProps={{
              className: hireMeClass,
            }}
            inactiveProps={{
              className: hireMeClass,
            }}
          >
            HIRE ME ↗
          </Link>
        </div>
      </div>
    </header>
  );
}
