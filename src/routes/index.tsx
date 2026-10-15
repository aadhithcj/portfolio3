import { createFileRoute, Link } from "@tanstack/react-router";
import DotGrid from "@/components/fx/DotGrid";
import TechText from "@/components/fx/TechText";
import TextType from "@/components/fx/TextType";
import DecryptedText from "@/components/fx/DecryptedText";
import { useTheme } from "@/hooks/use-theme";
import { profile } from "@/lib/portfolio";
import { ThemeToggle } from "@/components/ThemeToggle";

import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACJ_ — Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Aadhith C Joseph: full-stack, DevOps and applied AI projects.",
      },
      { property: "og:title", content: "ACJ_ — Software Engineer" },
      {
        property: "og:description",
        content:
          "Full-stack, DevOps and applied AI projects by Aadhith C Joseph.",
      },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: Index,
});

const nav = [
  {
    to: "/about",
    n: "01",
    label: "About",
    note: "Bio",
    badgeClass: "bg-[#FF7700] text-black border-foreground",
    hoverClass: "hover:bg-[#FF7700] hover:text-black",
  },
  {
    to: "/projects",
    n: "02",
    label: "Projects",
    note: "Selected work",
    badgeClass: "bg-[#F1BE05] text-black border-foreground",
    hoverClass: "hover:bg-[#F1BE05] hover:text-black",
  },
  {
    to: "/skills",
    n: "03",
    label: "Skills",
    note: "Tech & tools",
    badgeClass: "bg-[#42BFDD] text-black border-foreground",
    hoverClass: "hover:bg-[#42BFDD] hover:text-black",
  },
  {
    to: "/log",
    n: "04",
    label: "Log",
    note: "Timeline",
    badgeClass: "bg-[#9649CB] text-white border-foreground",
    hoverClass: "hover:bg-[#9649CB] hover:text-white",
  },
  {
    to: "/contact",
    n: "05",
    label: "Contact",
    note: "Say hello",
    badgeClass: "bg-[#FF3C38] text-white border-foreground",
    hoverClass: "hover:bg-[#FF3C38] hover:text-white",
  },
] as const;

function Index() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const triggerScreenPulse = (e: React.MouseEvent) => {
    window.dispatchEvent(
      new CustomEvent("dotgrid:bigpulse", {
        detail: { x: e.clientX, y: e.clientY },
      })
    );
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background flex flex-col justify-between">
      {/* Interactive WebGL2 DotGrid Background with High-Visibility Light/Dark Pulse Colors */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-80 transition-opacity duration-500">
        <DotGrid
          baseColor={isDark ? "#43414B" : "#2E2D34"}
          activeColor={isDark ? "#F1BE05" : "#FF3C38"}
          shape="circle"
          dotSize={isDark ? 4.5 : 3.8}
          gap={18}
          proximity={150}
          strength={1.3}
          bounce={0.65}
          tension={0.4}
          returnDuration={0.8}
          shockRadius={340}
          shockStrength={6.0}
          swell={0.9}
          stretch={0.5}
          glow={isDark ? 0.6 : 0.4}
          fade={0.15}
          intro
          opacity={isDark ? 0.85 : 0.45}
          mouseInteraction
          clickShock
        />
      </div>

      {/* Unified Neo-Brutalist Top Titlebar (Consistent with other pages) */}
      <SiteHeader isHome />

      {/* Main Content & Bottom Navigation Container */}
      <div className="page-enter relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-6 py-6 sm:py-8">
        {/* Hero Section (Restored to exact layout from Screenshot 1) */}
        <div className="my-auto py-6 sm:py-8">
          <div className="w-full max-w-4xl">
            {/* Top row with subhead and pulse diamond trigger button (Screenshot 1) */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 label-mono">
                <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  # SOFTWARE ENGINEER
                </span>
                <span className="text-muted-foreground/60">•</span>
                <span className="inline-block size-2 rounded-full bg-status-green animate-pulse" />
                <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  AVAILABLE TO WORK
                </span>
              </div>

              <button
                type="button"
                data-crosshair-target
                aria-label="Trigger screen-wide pulse"
                onClick={triggerScreenPulse}
                className="group grid size-9 sm:size-10 place-items-center border-2 border-foreground bg-card font-display text-xl text-primary shadow-[3px_3px_0px_0px_var(--foreground)] transition-all duration-200 hover:rotate-45 hover:border-foreground hover:shadow-[1px_1px_0px_0px_var(--foreground)] focus-visible:outline-2 focus-visible:outline-foreground ml-auto sm:ml-0"
              >
                <span className="transition-transform duration-300 group-hover:scale-110">
                  ◆
                </span>
              </button>
            </div>

            {/* Left-aligned Aadhith CJ. TechText */}
            <div className="relative h-28 w-full max-w-3xl sm:h-36 md:h-44">
              <TechText
                text="Aadhith CJ."
                fontFamily="Geist, ui-sans-serif, system-ui, sans-serif"
                fontWeight={900}
                fontSize={150}
                align="left"
                reveal="letter"
                dashLength={4}
                dashGap={3}
                specks={15}
                sweep={false}
                color={isDark ? "#F7F0D9" : "#2E2D34"}
                accentColor={isDark ? "#F1BE05" : "#FF3C38"}
                selection={true}
                labels={true}
                draggable={false}
              />
            </div>

            {/* Headline - "systems." in readable high-contrast accent */}
            <h1 className="mt-1 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-7xl">
              i turn ideas into{" "}
              <em className="italic text-lime not-italic font-normal">systems</em>.
            </h1>

            {/* Animated Bio */}
            <div className="mt-6 max-w-xl h-[3.25rem] sm:h-[3.5rem]">
              <TextType
                text="Full-stack, DevOps and applied AI. Computer Science graduate from Kerala."
                typingSpeed={14}
                pauseDuration={3500}
                loop={false}
                showCursor={true}
                cursorCharacter="|"
                className="block w-full font-mono text-sm leading-relaxed text-foreground/90 sm:text-base"
              />
            </div>

            {/* Dashed divider line from Screenshot 1 */}
            <div className="mt-8 border-b border-dashed border-border/70 w-full" />
          </div>
        </div>

        {/* Bottom Navigation: Playful multi-accent neobrutalist cards */}
        <nav className="mb-1 sm:mb-2 w-full rounded-none nb-border nb-shadow bg-card grid grid-cols-1 divide-y-[3px] md:grid-cols-5 md:divide-y-0 md:divide-x-[3px] divide-border overflow-hidden">
          {nav.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              data-crosshair-target
              className={`group flex min-h-[58px] sm:min-h-[66px] items-center justify-between gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 transition-colors duration-150 ${i.hoverClass} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-inset`}
            >
              <div className="flex items-center gap-2.5 shrink-0">
                <span
                  className={`border-2 px-1.5 py-0.5 font-mono text-xs font-bold transition-colors ${i.badgeClass}`}
                >
                  {i.n}
                </span>
                <span className="font-display text-xl sm:text-[22px] text-foreground group-hover:text-inherit transition-colors">
                  {i.label}
                </span>
              </div>
              <div className="flex items-center justify-end gap-1.5 ml-auto text-right shrink-0">
                <span className="label-mono text-[9.5px] sm:text-[10px] tracking-wide uppercase text-muted-foreground group-hover:text-inherit transition-colors">
                  <DecryptedText
                    text={i.note}
                    speed={25}
                    sequential
                    animateOn="hover"
                    encryptedClassName="text-lime"
                  />
                </span>
                <span className="font-mono text-xs text-muted-foreground group-hover:text-inherit group-hover:translate-x-1 transition-all duration-150">
                  →
                </span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
