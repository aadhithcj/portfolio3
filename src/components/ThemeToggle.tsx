import { useState, useRef, useEffect, useCallback } from "react";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({
  className = "",
  fixed = false,
  gave = false,
  ...props
}: {
  className?: string;
  fixed?: boolean;
  gave?: boolean;
  [key: string]: any;
}) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const showToast = useCallback((text: string, duration = 1400) => {
    clearTimeout(toastTimer.current);
    setToast(text);
    toastTimer.current = setTimeout(() => setToast(null), duration);
  }, []);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const pulseSpeed = 3400;

    // Full-screen dotgrid big pulse emanating from the button position
    window.dispatchEvent(
      new CustomEvent("dotgrid:bigpulse", {
        detail: { x: cx, y: cy, speed: pulseSpeed },
      })
    );

    const targetMode = isDark ? "Light mode!" : "Dark mode!";

    // View Transition API: ripple from button coordinates across page
    if (
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const transition = (
        document as unknown as {
          startViewTransition: (cb: () => void) => { ready: Promise<void> };
        }
      ).startViewTransition(() => {
        toggleTheme();
      });

      transition.ready.then(() => {
        const radius = Math.hypot(
          Math.max(cx, window.innerWidth - cx),
          Math.max(cy, window.innerHeight - cy)
        );

        // Fast & punchy ~420ms-480ms transition matching accelerated shockwave
        const duration = Math.min(
          480,
          Math.max(380, Math.round((radius / pulseSpeed) * 1000))
        );

        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${cx}px ${cy}px)`,
              `circle(${radius}px at ${cx}px ${cy}px)`,
            ],
          },
          {
            duration,
            easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    } else {
      toggleTheme();
    }

    showToast(targetMode, 1400);
  };

  // Fixed wrapper (desktop only; automatically hidden on pages with a header to avoid duplication)
  const wrapperClass = fixed
    ? "hidden sm:flex fixed sm:bottom-6 sm:right-6 md:right-8 z-50 items-center justify-center pointer-events-auto [body:has(header)_&]:hidden"
    : `relative flex items-center justify-center ${className}`.trim();

  const isCompact = !fixed;

  return (
    <div className={wrapperClass} {...props}>
      <div className="relative flex flex-col items-center">
        {/* Floating toast notification anchored below button */}
        {toast && (
          <div
            role="status"
            aria-live="polite"
            className="pointer-events-none absolute top-full mt-2.5 sm:top-auto sm:-bottom-11 right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 whitespace-nowrap nb-border nb-shadow-sm rounded-none bg-card px-3 py-1 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-foreground transition-all duration-200 animate-in fade-in zoom-in-95 z-50"
          >
            <span className="mr-1.5 text-lime">◆</span>
            {toast}
            <span className="absolute -top-1 right-3 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 size-2 rotate-45 border-t-[3px] border-l-[3px] border-border bg-card" />
          </div>
        )}

        {/* Sharp Square Neo-Brutalist Button */}
        <button
          ref={buttonRef}
          type="button"
          onClick={handleToggle}
          data-crosshair-target
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          className={`group relative grid ${
            isCompact ? "size-9" : "size-[54px]"
          } place-items-center rounded-none nb-border nb-shadow-sm nb-press bg-card text-foreground hover:bg-primary hover:text-primary-foreground hover:border-lime transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 ${
            gave ? "border-lime/80 ring-2 ring-lime/20 bg-primary/20" : ""
          }`}
        >
          {isDark ? (
            <Sun
              className={`${
                isCompact ? "size-4" : "size-5"
              } text-lime transition-transform duration-300 group-hover:rotate-45`}
            />
          ) : (
            <Moon
              className={`${
                isCompact ? "size-4" : "size-5"
              } text-lime transition-transform duration-300 group-hover:-rotate-12`}
            />
          )}
        </button>
      </div>
    </div>
  );
}
