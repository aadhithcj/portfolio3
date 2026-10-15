import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import DecryptedText from "@/components/fx/DecryptedText";
import { projects } from "@/lib/portfolio";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — ACJ_" },
      {
        name: "description",
        content:
          "Retina, DevOpsHub, and software engineering case studies by Aadhith C Joseph.",
      },
      { property: "og:title", content: "Projects — ACJ_" },
      {
        property: "og:description",
        content: "Things I've built: an interactive archive of full-stack, DevOps and AI projects.",
      },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: Projects,
});

const defaultProjectMeta = {
  pill: "RETINA / ASSISTIVE AI",
  note: "REAL-WORLD OBJECT RECOGNITION",
  features: ["+ CAMERA", "+ AI ANALYSIS", "+ VOICE FEEDBACK", "+ ACCESSIBLE UX"],
  actionNote: "TURN IDEAS INTO ACCESSIBILITY",
  accentColor: "#CE4760",
};

const projectMeta: Record<
  string,
  {
    pill: string;
    note: string;
    features: string[];
    actionNote: string;
    accentColor: string;
  }
> = {
  retina: defaultProjectMeta,
  devopshub: {
    pill: "DEVOPSHUB / CI-CD AUTOMATION",
    note: "CONTAINERIZED CLOUD WORKFLOWS",
    features: ["+ DOCKER COMPOSE", "+ GITHUB ACTIONS", "+ POSTGRESQL", "+ ZERO-DOWNTIME"],
    actionNote: "AUTOMATE EVERYTHING RELIABLY",
    accentColor: "#42BFDD",
  },
  inventory: {
    pill: "MOTO-INV / DESKTOP SUITE",
    note: "ATOMIC TRANSACTION INTEGRITY",
    features: ["+ SQLITE ATOMIC", "+ PDF INVOICES", "+ REAL-TIME STOCK", "+ PRODUCTION USE"],
    actionNote: "MISSION CRITICAL ACCURACY",
    accentColor: "#FF7700",
  },
  "crop-recommendation": {
    pill: "ROOTS / AGRITECH AI",
    note: "CLIMATE & SOIL SYNTHESIS",
    features: ["+ RANDOM FOREST", "+ OPEN-METEO API", "+ 7 PARAMETERS", "+ REACT FRONTEND"],
    actionNote: "OPTIMIZING HARVEST YIELDS",
    accentColor: "#22C55E",
  },
  "cv-sorting": {
    pill: "CV-SYS / TALENT PIPELINES",
    note: "MULTI-ATTRIBUTE SCORING",
    features: ["+ DUAL PORTALS", "+ SUPABASE PG", "+ TANSTACK QUERY", "+ WORKFLOW ENGINE"],
    actionNote: "SMARTER HIRING SYSTEMS",
    accentColor: "#9649CB",
  },
};

function Projects() {
  const [active, setActive] = useState(0);
  const p = (projects[active] ?? projects[0])!;
  const meta = projectMeta[p.slug] ?? defaultProjectMeta;

  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <SiteHeader />

      <main className="page-enter mx-auto max-w-7xl px-4 sm:px-8 pt-8 sm:pt-12 pb-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 xl:gap-14 items-start relative w-full min-w-0">
        {/* Left Column: Heading and Editorial Project Index */}
        <div className="flex flex-col relative w-full min-w-0">
          {/* Section Marker */}
          <p className="label-mono">
            <DecryptedText
              text="# PROJECTS / SELECTED WORK"
              speed={25}
              sequential
              animateOn="view"
              encryptedClassName="text-lime"
            />
          </p>

          {/* Page Heading matching screenshot */}
          <h1 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl tracking-tight text-foreground">
            Things I’ve{" "}
            <em className="italic text-lime not-italic font-normal">built</em>.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-mono max-w-xl">
            Software, systems, and experiments — made to solve real problems.
          </p>

          {/* Floating Playful Accent Top-Right (ideas / code / people / impact) */}
          <div className="hidden sm:flex absolute right-4 top-2 select-none pointer-events-none items-center gap-3">
            <div className="text-right font-mono text-[9px] uppercase font-bold text-muted-foreground/80 leading-tight">
              IDEAS<br />
              CODE<br />
              PEOPLE<br />
              IMPACT
            </div>
            <svg
              className="size-7 text-muted-foreground/60 -rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <div className="size-11 xl:size-12 border-2 border-border bg-[#42BFDD] shadow-[3px_3px_0px_0px_var(--border)] -rotate-6" />
          </div>

          {/* Numbered Editorial Project List */}
          <div className="mt-10 sm:mt-12 flex flex-col border-t-2 border-border" role="list">
            {projects.map((x, i) => {
              const isSelected = active === i;
              return (
                <div
                  key={x.slug}
                  role="listitem"
                  className="relative"
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    data-crosshair-target
                    className={`w-full text-left transition-all duration-150 flex items-center justify-between py-4 sm:py-5 px-3 sm:px-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground ${
                      isSelected
                        ? "bg-[#F1BE05] text-black border-2 border-border shadow-[4px_4px_0px_0px_var(--border)] my-1 -translate-y-0.5 z-10"
                        : "border-b border-border/40 hover:bg-[#F1BE05]/10 dark:hover:bg-[#F1BE05]/15 hover:border-border/60 hover:-translate-y-0.5 text-foreground"
                    }`}
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span
                        className={`font-mono text-xs sm:text-sm font-bold transition-colors ${
                          isSelected ? "text-black" : "text-lime"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-display text-3xl sm:text-4xl md:text-[42px] leading-tight transition-all ${
                          isSelected ? "font-bold" : "font-normal hover:translate-x-1 hover:text-foreground"
                        }`}
                      >
                        {x.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs sm:text-sm transition-colors ${
                          isSelected ? "text-black font-bold" : "text-muted-foreground"
                        }`}
                      >
                        {x.year}
                      </span>
                      {isSelected && (
                        <span className="hidden sm:inline font-mono text-xs font-bold">
                          ●
                        </span>
                      )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Floating Playful Accent Bottom-Left (scroll / explore / build / repeat) */}
          <div className="mt-10 hidden sm:flex items-center gap-4 select-none">
            <div className="relative">
              {/* Dot matrix grid snippet */}
              <div className="grid grid-cols-4 gap-1.5 opacity-30">
                {Array.from({ length: 16 }).map((_, idx) => (
                  <span key={idx} className="size-1 rounded-full bg-foreground" />
                ))}
              </div>
              <div className="absolute top-1 left-1 size-7 rounded-full border-2 border-border bg-[#FF7700] shadow-[2.5px_2.5px_0px_0px_var(--border)]" />
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">↖</span>
              <span className="font-mono text-[9px] uppercase font-bold text-muted-foreground tracking-widest leading-tight">
                SCROLL<br />
                EXPLORE<br />
                BUILD<br />
                REPEAT
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Substantial Neo-Brutalist Preview Panel */}
        <aside
          className="sticky top-20 border-2 sm:border-[2.5px] border-border bg-card p-5 sm:p-7 shadow-[8px_8px_0px_0px_var(--border)] transition-shadow duration-200 hover:shadow-[10px_10px_0px_0px_var(--border)] relative"
          aria-live="polite"
        >
          {/* Panel Top Header Bar */}
          <div className="flex items-center justify-between border-b-2 border-border/80 pb-3 mb-5">
            <span className="font-mono text-xs font-black uppercase tracking-wider text-foreground">
              SELECTED PROJECT / {String(active + 1).padStart(2, "0")}
            </span>
            <span className="size-2.5 rounded-full bg-[#FF3C38] animate-pulse" />
          </div>

          {/* Visual Mockup Frame featuring first two letters as requested */}
          <div className="group/frame border-2 border-border bg-surface-secondary/70 p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[340px] transition-colors duration-200 hover:border-foreground/80">
            {/* Annotation at Top-Left */}
            <div className="text-left font-mono text-[9.5px] uppercase font-bold text-muted-foreground/90 max-w-[120px] leading-tight">
              {meta.note}
              <div className="mt-0.5 text-xs">⤵</div>
            </div>

            {/* Decorative Top-Right Elements (Pink circle and tick marks) */}
            <div className="absolute right-5 top-5 flex items-center gap-3 select-none pointer-events-none">
              <div className="flex flex-col gap-1 items-end opacity-60">
                <span className="w-2.5 h-0.5 bg-foreground" />
                <span className="w-3.5 h-0.5 bg-foreground" />
                <span className="w-2 h-0.5 bg-foreground" />
              </div>
              <div
                className="size-8 sm:size-10 rounded-full border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] transition-transform duration-200 group-hover/frame:scale-110"
                style={{ backgroundColor: meta.accentColor }}
              />
            </div>

            {/* Central Graphic Mockup Frame: Clickable Device Card with Tactile Hover & Color Change */}
            <div className="my-auto mx-auto relative flex flex-col items-center">
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                data-crosshair-target
                className="group/card block w-44 sm:w-52 border-2 border-border bg-card shadow-[4px_4px_0px_0px_var(--border)] p-4 text-center relative transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[7px_7px_0px_0px_var(--border)] hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground cursor-pointer"
                title={`Explore ${p.name} case study`}
              >
                {/* Phone Top Notch / Header Bar */}
                <div className="w-full flex items-center justify-between border-b border-border/40 pb-2 mb-3">
                  <span className="font-mono text-[9px] font-bold text-muted-foreground group-hover/card:text-foreground transition-colors">
                    {p.name}
                  </span>
                  <div className="flex gap-1">
                    <span className="size-1.5 rounded-full bg-border" />
                    <span className="size-1.5 rounded-full bg-border" />
                  </div>
                </div>

                {/* Big Two-Letter Placeholder Display with Color Reaction on Hover */}
                <div className="size-20 sm:size-24 mx-auto rounded-none border-2 border-border bg-surface-secondary flex items-center justify-center font-display text-5xl sm:text-6xl font-black text-foreground shadow-[inset_0_2px_4px_rgba(0,0,0,0.08)] transition-all duration-200 group-hover/card:bg-[#F1BE05] group-hover/card:text-black group-hover/card:scale-105 group-hover/card:shadow-[3px_3px_0px_0px_var(--border)]">
                  {p.name.slice(0, 2).toUpperCase()}
                </div>

                {/* Pill under device with Color Reaction */}
                <span className="mt-3 inline-block border border-border bg-foreground text-background px-2.5 py-0.5 font-mono text-[9px] font-black uppercase tracking-wider transition-colors duration-200 group-hover/card:bg-[#F1BE05] group-hover/card:text-black group-hover/card:border-black">
                  {meta.pill}
                </span>
              </Link>
            </div>

            {/* Feature Badges Stack on the Bottom-Right */}
            <div className="absolute right-4 bottom-4 flex flex-col gap-1 items-end select-none">
              {meta.features.map((feat) => (
                <span
                  key={feat}
                  className="border border-border/80 bg-card px-2 py-0.5 font-mono text-[9px] font-bold text-foreground/90 shadow-2xs uppercase transition-colors hover:bg-surface-secondary"
                >
                  {feat}
                </span>
              ))}
            </div>
          </div>

          {/* Project Details Below Mockup */}
          <div className="mt-6 flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-foreground uppercase">
                {p.name}
              </h2>
              {/* Hand-drawn style note with arrow */}
              <div className="hidden sm:flex flex-col items-end text-right">
                <span className="font-mono text-[9px] uppercase font-bold text-muted-foreground leading-tight max-w-[130px]">
                  {meta.actionNote}
                </span>
                <span className="font-mono text-xs text-muted-foreground -mr-1">
                  ⤷
                </span>
              </div>
            </div>

            <p className="mt-2 font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {p.tagline}
            </p>

            {/* Stack Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((tech) => (
                <span
                  key={tech}
                  className="border-2 border-border bg-card px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-foreground shadow-[2px_2px_0px_0px_var(--border)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* High-Contrast Bold Yellow Action Button */}
            <Link
              to="/projects/$slug"
              params={{ slug: p.slug }}
              data-crosshair-target
              className="mt-6 w-full flex items-center justify-center gap-2 border-2 border-border bg-[#F1BE05] text-black py-3 sm:py-3.5 font-mono text-xs sm:text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_var(--border)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_var(--border)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
            >
              <span>EXPLORE CASE STUDY</span>
              <ArrowUpRight className="size-4" strokeWidth={2.5} />
            </Link>
          </div>
        </aside>
      </main>
    </div>
  );
}

