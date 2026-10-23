import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import DotGrid from "@/components/fx/DotGrid";
import TechText from "@/components/fx/TechText";
import DecryptedText from "@/components/fx/DecryptedText";
import { useTheme } from "@/hooks/use-theme";
import { profile, projects } from "@/lib/portfolio";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SiteHeader } from "@/components/SiteHeader";
import {
  InteractivePinkPlanet,
  DraggableSticker,
  HoverReactiveShape,
  PLANET_COLORS,
} from "@/components/fx/HomeShapes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aadhith C J - Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Aadhith C Joseph: full-stack and web development projects.",
      },
      { property: "og:title", content: "Aadhith C J - Software Engineer" },
      {
        property: "og:description",
        content: "Full-stack and web projects by Aadhith C Joseph.",
      },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://aadhithcj.site/" }],
  }),
  component: Index,
});

const nav = [
  {
    to: "/about",
    n: "01",
    label: "About",
    note: "Bio & resume",
    color: "#FF7700",
    badgeClass: "bg-[#FF7700] text-black border-foreground",
    activeCardClass: "bg-[#FF7700] text-black",
    hoverClass:
      "hover:bg-[#FF7700] hover:text-black active:bg-[#FF7700] active:text-black focus-visible:bg-[#FF7700] focus-visible:text-black",
  },
  {
    to: "/projects",
    n: "02",
    label: "Projects",
    note: `${projects.length} case studies`,
    color: "#F1BE05",
    badgeClass: "bg-[#F1BE05] text-black border-foreground",
    activeCardClass: "bg-[#F1BE05] text-black",
    hoverClass:
      "hover:bg-[#F1BE05] hover:text-black active:bg-[#F1BE05] active:text-black focus-visible:bg-[#F1BE05] focus-visible:text-black",
  },
  {
    to: "/skills",
    n: "03",
    label: "Skills",
    note: "Python → Docker",
    color: "#42BFDD",
    badgeClass: "bg-[#42BFDD] text-black border-foreground",
    activeCardClass: "bg-[#42BFDD] text-black",
    hoverClass:
      "hover:bg-[#42BFDD] hover:text-black active:bg-[#42BFDD] active:text-black focus-visible:bg-[#42BFDD] focus-visible:text-black",
  },
  {
    to: "/log",
    n: "04",
    label: "Log",
    note: "2021 → now",
    color: "#9649CB",
    badgeClass: "bg-[#9649CB] text-white border-foreground",
    activeCardClass: "bg-[#9649CB] text-white",
    hoverClass:
      "hover:bg-[#9649CB] hover:text-white active:bg-[#9649CB] active:text-white focus-visible:bg-[#9649CB] focus-visible:text-white",
  },
  {
    to: "/contact",
    n: "05",
    label: "Contact",
    note: "Form or email",
    color: "#FF3C38",
    badgeClass: "bg-[#FF3C38] text-white border-foreground",
    activeCardClass: "bg-[#FF3C38] text-white",
    hoverClass:
      "hover:bg-[#FF3C38] hover:text-white active:bg-[#FF3C38] active:text-white focus-visible:bg-[#FF3C38] focus-visible:text-white",
  },
] as const;

function Index() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [planetColorIdx, setPlanetColorIdx] = useState(0);
  const [activeNavIdx, setActiveNavIdx] = useState<number | null>(null);
  const [navAccentColor, setNavAccentColor] = useState<string | null>(null);
  const currentAccent =
    navAccentColor ??
    PLANET_COLORS[planetColorIdx % PLANET_COLORS.length] ??
    "#CE4760";
  const mainRef = useRef<HTMLElement>(null);

  const triggerScreenPulse = (e: React.MouseEvent) => {
    window.dispatchEvent(
      new CustomEvent("dotgrid:bigpulse", {
        detail: { x: e.clientX, y: e.clientY },
      })
    );
  };

  return (
    <main
      ref={mainRef}
      className="relative min-h-screen lg:h-screen lg:max-h-screen overflow-x-hidden overflow-y-auto bg-background flex flex-col justify-between"
    >
      {/* Interactive WebGL2 DotGrid Background with High-Visibility Accent Colors synced to interactive ball */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-80 transition-opacity duration-500">
        <DotGrid
          baseColor={isDark ? "#0A3545" : "#2E2D34"}
          activeColor={currentAccent}
          shape="circle"
          dotSize={isDark ? 4.5 : 3.6}
          gap={18}
          proximity={150}
          strength={1.2}
          bounce={0.65}
          tension={0.4}
          returnDuration={0.8}
          shockRadius={330}
          shockStrength={5.6}
          swell={0.88}
          stretch={0.5}
          glow={0.8}
          fade={0.15}
          intro
          opacity={isDark ? 0.85 : 0.22}
          mouseInteraction
          clickShock
        />
      </div>

      {/* Unified Neo-Brutalist Top Titlebar (Consistent with other pages) */}
      <SiteHeader isHome />

      {/* Main Content & Bottom Navigation Container */}
      <div className="page-enter relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-4 sm:px-6 pt-2 sm:pt-3 pb-6 sm:pb-8 lg:pb-10">
        {/* Hero Section (Centered Layout with enhanced presence) */}
        <div className="relative my-auto py-2 sm:py-4 flex flex-col items-center justify-center text-center w-full">
          {/* Left Playful Element: The Interactive Screen Pulse Square (DO NOT TOUCH - matching reference blue box) */}
          <div className="hidden lg:flex absolute left-0 xl:left-4 top-1/2 -translate-y-1/2 z-20 items-center">
            <button
              type="button"
              data-crosshair-target
              aria-label="Trigger screen-wide pulse"
              onClick={triggerScreenPulse}
              className="group relative size-12 xl:size-14 grid place-items-center border-2 border-border bg-[#42BFDD] text-black shadow-[4px_4px_0px_0px_var(--shadow-color)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
              title="Click to pulse dot grid"
            >
              <span className="font-display text-2xl xl:text-3xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-45">
                ◆
              </span>
            </button>
          </div>

          {/* Right Playful Element: Interactive Planet (Changes color & syncs dot grid accent) */}
          <InteractivePinkPlanet
            activeColorIdx={planetColorIdx}
            onColorChange={setPlanetColorIdx}
          />

          {/* New Shape 1: Hover-Only Reactive Prism ("one only react on hover") */}
          <HoverReactiveShape />

          <div className="w-full max-w-4xl flex flex-col items-center text-center">
            {/* Mobile Pulse Trigger Button (only visible on mobile where desktop left square is hidden) */}
            <div className="lg:hidden -mt-2 mb-3 flex items-center justify-center">
              <button
                type="button"
                data-crosshair-target
                aria-label="Trigger screen-wide pulse"
                onClick={triggerScreenPulse}
                className="grid size-9 place-items-center border-2 border-border bg-[#42BFDD] text-black shadow-[2px_2px_0px_0px_var(--shadow-color)] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                title="Click to pulse dot grid"
              >
                <span className="text-base font-display">◆</span>
              </button>
            </div>

            {/* Centered Aadhith CJ. TechText - shifted upwards */}
            <div className="relative -mt-1 sm:-mt-2 md:-mt-3 h-24 sm:h-28 md:h-32 lg:h-36 w-full max-w-3xl mx-auto">
              {/* Open-to-work tag overlaps the tail of the name, hinting it can be moved */}
              <DraggableSticker containerRef={mainRef} />
              <TechText
                key={isDark ? "dark" : "light"}
                text="Aadhith CJ."
                fontFamily="Geist, ui-sans-serif, system-ui, sans-serif"
                fontWeight={900}
                fontSize={140}
                align="center"
                reveal="letter"
                dashLength={4}
                dashGap={3}
                specks={15}
                sweep={false}
                color={isDark ? "#F7F0D9" : "#2E2D34"}
                accentColor={isDark ? "#22C55E" : "#FF3C38"}
                selection={true}
                labels={true}
                draggable={false}
              />
            </div>

            {/* Prominent Headline - with natural breathing room below Aadhith CJ. */}
            <h1 className="mt-3 sm:mt-4 md:mt-5 font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] text-center leading-[1.1] tracking-tight max-w-3xl mx-auto">
              i build digital products that{" "}
              <em className="italic text-lime not-italic font-normal">
                refuse to be boring
              </em>
              .
            </h1>

            {/* Animated Bio wrapped in Neo-Brutalist console box with immediate text presence */}
            <div className="mt-4 sm:mt-5 max-w-xl sm:max-w-2xl mx-auto w-full">
              <div className="relative w-full border-2 border-border bg-card px-4 sm:px-6 py-3 sm:py-3.5 shadow-[3px_3px_0px_0px_var(--shadow-color)]">
                {/* Console Status Tag */}
                <div className="absolute -top-2.5 left-3.5 bg-foreground text-background px-2 py-0.5 font-mono text-[9px] font-black uppercase tracking-widest border border-border">
                  SYS // BIO
                </div>
                {/* Shown instantly: this is the line a recruiter needs first */}
                <p className="font-mono text-sm leading-relaxed text-foreground/90 sm:text-base text-center">
                  Full-stack engineer and web developer. Computer Science
                  graduate from Kerala.
                  <span
                    aria-hidden="true"
                    className="nb-blink ml-0.5 font-bold text-lime"
                  >
                    |
                  </span>
                </p>
                {/* Availability lives on the draggable tag on desktop; phones get it here */}
                <p className="md:hidden mt-2 pt-2 border-t border-dashed border-border/60 flex items-center justify-center gap-2 font-mono text-xs font-bold text-foreground">
                  <span
                    className="size-2 bg-[#22C55E] border border-border"
                    aria-hidden="true"
                  />
                  Open to SWE &amp; full-stack roles
                </p>
              </div>
            </div>

            {/* Prominent Action Buttons */}
            <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/projects"
                data-crosshair-target
                className="border-2 border-border bg-[#F1BE05] text-black px-6 sm:px-7 py-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_var(--shadow-color)] hover:bg-[#F1BE05]/90 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2"
              >
                VIEW PROJECTS <span>→</span>
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                data-crosshair-target
                className="border-2 border-border bg-card text-foreground px-6 sm:px-7 py-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_var(--shadow-color)] hover:bg-surface-secondary hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2"
              >
                ↓ DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Navigation: High-contrast individual tactile neobrutalist cards */}
        <nav className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 sm:gap-2.5 xl:gap-3">
          {nav.map((i, idx) => {
            const isCardActive = activeNavIdx === idx;
            return (
              <Link
                key={i.to}
                to={i.to}
                data-crosshair-target
                onPointerDown={() => {
                  setActiveNavIdx(idx);
                  setNavAccentColor(i.color);
                }}
                onPointerUp={() => {
                  setTimeout(() => setActiveNavIdx(null), 250);
                }}
                onPointerLeave={() => {
                  setActiveNavIdx(null);
                  setNavAccentColor(null);
                }}
                onMouseEnter={() => setNavAccentColor(i.color)}
                onMouseLeave={() => setNavAccentColor(null)}
                onClick={() => {
                  setActiveNavIdx(idx);
                  setNavAccentColor(i.color);
                }}
                className={`group relative flex min-h-[50px] sm:min-h-[56px] xl:min-h-[64px] items-center justify-between gap-1.5 sm:gap-2 px-3 sm:px-3.5 xl:px-4 py-2 sm:py-2.5 xl:py-3 border-2 border-border shadow-[4px_4px_0px_0px_var(--shadow-color)] transition-all duration-150 ${i.hoverClass} hover:-translate-y-1 hover:translate-x-0.5 hover:shadow-[6px_6px_0px_0px_var(--shadow-color)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_var(--shadow-color)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground overflow-hidden ${
                  isCardActive
                    ? `${i.activeCardClass} -translate-y-0.5 shadow-[6px_6px_0px_0px_var(--shadow-color)]`
                    : "bg-card"
                }`}
                activeProps={{
                  className:
                    "ring-2 ring-lime shadow-[6px_6px_0px_0px_var(--shadow-color)] -translate-y-0.5",
                }}
              >
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 shrink-0">
                  <span
                    className={`border-2 px-1.5 py-0.5 font-mono text-[11px] sm:text-xs font-bold transition-all duration-150 group-hover:scale-110 group-active:scale-110 shrink-0 ${
                      isCardActive ? "scale-110" : ""
                    } ${i.badgeClass}`}
                  >
                    {i.n}
                  </span>
                  <span
                    className={`font-display font-normal text-lg sm:text-xl xl:text-[22px] transition-colors truncate ${
                      isCardActive
                        ? "text-inherit"
                        : "text-foreground group-hover:text-inherit group-active:text-inherit group-focus-visible:text-inherit"
                    }`}
                  >
                    {i.label}
                  </span>
                </div>
                <div className="flex items-center justify-end gap-1.5 ml-auto text-right shrink-0">
                  <span
                    className={`hidden xl:inline label-mono text-[9.5px] sm:text-[10px] tracking-wide uppercase transition-colors whitespace-nowrap ${
                      isCardActive
                        ? "text-inherit"
                        : "text-muted-foreground group-hover:text-inherit group-active:text-inherit group-focus-visible:text-inherit"
                    }`}
                  >
                    <DecryptedText
                      text={i.note}
                      speed={25}
                      sequential
                      animateOn="hover"
                      encryptedClassName="text-lime"
                    />
                  </span>
                  <span
                    className={`font-mono text-xs transition-transform duration-150 font-bold shrink-0 ${
                      isCardActive
                        ? "text-inherit translate-x-1.5"
                        : "text-muted-foreground group-hover:text-inherit group-active:text-inherit group-focus-visible:text-inherit group-hover:translate-x-1.5 group-active:translate-x-1.5"
                    }`}
                  >
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </main>
  );
}
