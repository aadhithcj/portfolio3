import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type HTMLAttributes,
} from "react";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({
  className = "",
  fixed = false,
  gave = false,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  fixed?: boolean;
  gave?: boolean;
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

  // Fixed wrapper positioned in top right below title bar on desktop viewports
  const wrapperClass = fixed
    ? "hidden md:flex fixed top-14 right-6 md:right-8 z-40 items-center justify-center pointer-events-auto"
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
            className="pointer-events-none absolute top-full mt-2.5 right-0 whitespace-nowrap border-2 border-border shadow-[3px_3px_0px_0px_var(--shadow-color)] rounded-none bg-card px-3 py-1 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-foreground transition-all duration-200 animate-in fade-in zoom-in-95 z-50"
          >
            <span className="mr-1.5 text-lime">◆</span>
            {toast}
            <span className="absolute -top-1.5 right-4 size-2 rotate-45 border-t-2 border-l-2 border-border bg-card" />
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
            isCompact ? "size-9" : "size-11 sm:size-12"
          } place-items-center rounded-none border-[3px] border-border shadow-[4px_4px_0px_0px_var(--shadow-color)] bg-card text-foreground hover:bg-primary hover:text-primary-foreground hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 ${
            gave ? "border-lime ring-2 ring-lime/40 bg-primary/20" : ""
          }`}
        >
          {isDark ? (
            <Sun
              className={`${
                isCompact ? "size-4" : "size-5"
              } text-[#FFD600] transition-transform duration-300 group-hover:rotate-45`}
            />
          ) : (
            <Moon
              className={`${
                isCompact ? "size-4" : "size-5"
              } text-foreground transition-transform duration-300 group-hover:-rotate-12`}
            />
          )}
        </button>
      </div>
    </div>
  );
}
