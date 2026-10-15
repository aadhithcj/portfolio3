import { createFileRoute, Link } from "@tanstack/react-router";
import DotGrid from "@/components/fx/DotGrid";
import TechText from "@/components/fx/TechText";
import TextType from "@/components/fx/TextType";
import DecryptedText from "@/components/fx/DecryptedText";
import { useTheme } from "@/hooks/use-theme";
import { profile } from "@/lib/portfolio";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aadhith C Joseph — Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Aadhith C Joseph: full-stack, DevOps and applied AI projects.",
      },
      { property: "og:title", content: "Aadhith C Joseph — Software Engineer" },
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
  { to: "/about", n: "01", label: "About", note: "Bio" },
  { to: "/projects", n: "02", label: "Projects", note: "Selected work" },
  { to: "/skills", n: "03", label: "Skills", note: "Tech & tools" },
  { to: "/log", n: "04", label: "Log", note: "Timeline" },
  { to: "/contact", n: "05", label: "Contact", note: "Say hello" },
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
      {/* Interactive WebGL2 DotGrid Background */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-80 transition-opacity duration-500">
        <DotGrid
          baseColor={isDark ? "#282533" : "#0a0a0a"}
          activeColor="#c8f53c"
          shape="circle"
          dotSize={isDark ? 4.5 : 3.5}
          gap={18}
          proximity={150}
          strength={1.2}
          bounce={0.65}
          tension={0.4}
          returnDuration={0.8}
          shockRadius={320}
          shockStrength={5.5}
          swell={0.85}
          stretch={0.5}
          glow={isDark ? 0.6 : 0.1}
          fade={0.15}
          intro
          opacity={isDark ? 0.85 : 0.22}
          mouseInteraction
          clickShock
        />
      </div>

      {/* Portfolio 1 Full-width Neo-Brutalist Top Header Bar (Screenshot 3) */}
      <header className="relative z-20 w-full border-b-[3px] border-border bg-card/90 backdrop-blur-sm flex items-stretch justify-between overflow-x-auto">
        {/* Left: Brand Cell */}
        <Link
          to="/"
          data-crosshair-target
          className="border-r-[3px] border-border px-4 sm:px-6 py-2.5 sm:py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground hover:bg-surface-secondary transition-colors flex items-center shrink-0"
        >
          AADHITH C JOSEPH
        </Link>

        {/* Center: Title / Metadata Cell */}
        <div className="hidden md:flex items-center px-4 sm:px-6 py-2.5 sm:py-3.5 border-r-[3px] border-border font-mono text-xs sm:text-sm uppercase tracking-wider text-muted-foreground shrink-0">
          SOFTWARE ENGINEER // PORTFOLIO '26
        </div>

        {/* Spacer */}
        <div className="flex-1 min-w-4" />

        {/* Right Action Cells */}
        <div className="flex items-stretch shrink-0">
          <a
            href="https://github.com/aadhithcj"
            target="_blank"
            rel="noreferrer"
            data-crosshair-target
            className="border-l-[3px] border-border px-3 sm:px-5 py-2.5 sm:py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground hover:bg-surface-secondary transition-colors flex items-center"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com/in/aadhithcj"
            target="_blank"
            rel="noreferrer"
            data-crosshair-target
            className="border-l-[3px] border-border px-3 sm:px-5 py-2.5 sm:py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground hover:bg-surface-secondary transition-colors flex items-center"
          >
            LINKEDIN
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            data-crosshair-target
            className="border-l-[3px] border-border bg-primary px-3 sm:px-5 py-2.5 sm:py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-1"
          >
            RÉSUMÉ ↗
          </a>
          <div className="border-l-[3px] border-border px-2 sm:px-3 py-1.5 flex items-center justify-center">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content & Bottom Navigation Container */}
      <div className="page-enter relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-6 py-6 sm:py-8">
        {/* Hero Section */}
        <div className="my-auto py-6 sm:py-8">
          <div className="w-full max-w-4xl">
            {/* Top row with Portfolio 1 Brutalist Badges (Screenshot 3) */}
            <div className="mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="border-2 border-foreground bg-primary px-2.5 py-1 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-[3px_3px_0px_0px_var(--foreground)]">
                CSE GRADUATE
              </span>

              <span className="border-2 border-foreground bg-[#00E5FF] px-2.5 py-1 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-black shadow-[3px_3px_0px_0px_var(--foreground)] flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-black animate-pulse" />
                <DecryptedText
                  text="AVAILABLE FOR WORK"
                  speed={25}
                  sequential
                  animateOn="view"
                  className="font-bold text-black"
                />
              </span>

              <span className="border-2 border-foreground bg-card px-2.5 py-1 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-foreground shadow-[3px_3px_0px_0px_var(--foreground)]">
                INDIA
              </span>

              <button
                type="button"
                data-crosshair-target
                aria-label="Trigger screen-wide pulse"
                onClick={triggerScreenPulse}
                className="group grid size-7 sm:size-8 place-items-center border-2 border-foreground bg-card font-display text-lg text-lime shadow-[3px_3px_0px_0px_var(--foreground)] transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:border-lime hover:shadow-[1px_1px_0px_0px_var(--foreground)] focus-visible:outline-2 focus-visible:outline-lime ml-auto sm:ml-0"
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
                color={isDark ? "#ffffff" : "#0a0a0a"}
                accentColor="#c8f53c"
                selection={true}
                labels={true}
                draggable={false}
              />
            </div>

            {/* Headline */}
            <h1 className="mt-1 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-7xl">
              i turn ideas into{" "}
              <em className="italic text-lime not-italic">systems</em>.
            </h1>

            {/* Fast TextType animated bio - constant two-line height matching final state */}
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
          </div>
        </div>

        {/* Bottom Navigation: 5 items including About */}
        <nav className="mb-1 sm:mb-2 w-full rounded-none nb-border nb-shadow bg-card grid grid-cols-1 divide-y-[3px] md:grid-cols-5 md:divide-y-0 md:divide-x-[3px] divide-border overflow-hidden">
          {nav.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              data-crosshair-target
              className="group flex min-h-[58px] sm:min-h-[66px] items-center justify-between gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 transition-colors duration-150 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-inset"
            >
              <div className="flex items-center gap-2.5 shrink-0">
                <span className="border-2 border-border bg-primary px-1.5 py-0.5 font-mono text-xs font-bold text-primary-foreground group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-colors">
                  {i.n}
                </span>
                <span className="font-display text-xl sm:text-[22px] text-foreground group-hover:text-primary-foreground transition-colors">
                  {i.label}
                </span>
              </div>
              <div className="flex items-center justify-end gap-1.5 ml-auto text-right shrink-0">
                <span className="label-mono text-[9.5px] sm:text-[10px] tracking-wide uppercase text-muted-foreground group-hover:text-primary-foreground transition-colors">
                  <DecryptedText
                    text={i.note}
                    speed={25}
                    sequential
                    animateOn="hover"
                    encryptedClassName="text-lime"
                  />
                </span>
                <span className="font-mono text-xs text-muted-foreground group-hover:text-primary-foreground group-hover:translate-x-1 transition-all duration-150">
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
