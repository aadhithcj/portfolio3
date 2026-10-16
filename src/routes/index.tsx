import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import DotGrid from "@/components/fx/DotGrid";
import TechText from "@/components/fx/TechText";
import TextType from "@/components/fx/TextType";
import DecryptedText from "@/components/fx/DecryptedText";
import { useTheme } from "@/hooks/use-theme";
import { profile } from "@/lib/portfolio";
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
          "Portfolio of Aadhith C Joseph: full-stack, DevOps and applied AI projects.",
      },
      { property: "og:title", content: "Aadhith C J - Software Engineer" },
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
  const [planetColorIdx, setPlanetColorIdx] = useState(0);
  const currentAccent =
    PLANET_COLORS[planetColorIdx % PLANET_COLORS.length] ?? "#CE4760";
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

          {/* New Shape 2: Draggable Tactile Sticker ("draggable across the whole homescreen") */}
          <DraggableSticker containerRef={mainRef} />

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
              <TechText
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

            {/* Animated Bio wrapped in subtle backdrop box with constant size throughout typing */}
            <div className="mt-3.5 sm:mt-4 max-w-xl sm:max-w-2xl mx-auto w-full">
              <div className="w-full border border-border/40 bg-card/85 backdrop-blur-sm px-4 sm:px-5 py-2.5 sm:py-3 shadow-xs">
                <div className="grid grid-cols-1">
                  {/* Invisible phantom text that reserves the full multi-line dimensions immediately */}
                  <span
                    aria-hidden="true"
                    className="col-start-1 row-start-1 invisible font-mono text-sm leading-relaxed sm:text-base select-none pointer-events-none text-center"
                  >
                    Full-stack, DevOps and applied AI. Computer Science graduate
                    from Kerala.
                  </span>
                  {/* Animated typing text aligned to the exact same cell */}
                  <div className="col-start-1 row-start-1">
                    <TextType
                      text="Full-stack, DevOps and applied AI. Computer Science graduate from Kerala."
                      typingSpeed={14}
                      pauseDuration={3500}
                      loop={false}
                      showCursor={true}
                      cursorCharacter="|"
                      className="block w-full font-mono text-sm leading-relaxed text-foreground/90 sm:text-base text-center"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Prominent Action Buttons */}
            <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/projects"
                data-crosshair-target
                className="border-2 border-border bg-[#F1BE05] text-black px-5 sm:px-7 py-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_var(--shadow-color,var(--shadow-color))] hover:bg-[#ffd738] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_var(--shadow-color,var(--shadow-color))] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2"
              >
                VIEW PROJECTS <span>→</span>
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                data-crosshair-target
                className="border-2 border-border bg-card text-foreground px-5 sm:px-7 py-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_var(--shadow-color)] hover:bg-surface-secondary hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2"
              >
                ↓ DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Navigation: High-contrast individual tactile neobrutalist cards */}
        <nav className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5 sm:gap-3">
          {nav.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              data-crosshair-target
              className={`group relative flex min-h-[58px] sm:min-h-[64px] items-center justify-between gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 border-2 border-border bg-card shadow-[4px_4px_0px_0px_var(--shadow-color)] transition-all duration-150 ${i.hoverClass} hover:-translate-y-1 hover:translate-x-0.5 hover:shadow-[6px_6px_0px_0px_var(--shadow-color)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_var(--shadow-color)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground`}
              activeProps={{
                className:
                  "ring-2 ring-lime shadow-[6px_6px_0px_0px_var(--shadow-color)] -translate-y-0.5",
              }}
            >
              <div className="flex items-center gap-2.5 shrink-0">
                <span
                  className={`border-2 px-1.5 py-0.5 font-mono text-xs font-bold transition-all duration-150 group-hover:scale-110 ${i.badgeClass}`}
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
                <span className="font-mono text-xs text-muted-foreground group-hover:text-inherit group-hover:translate-x-1.5 transition-transform duration-150 font-bold">
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
