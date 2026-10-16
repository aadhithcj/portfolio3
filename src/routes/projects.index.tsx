import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SiteHeader } from "@/components/SiteHeader";
import DecryptedText from "@/components/fx/DecryptedText";
import { PageBackdrop } from "@/components/fx/PageBackdrop";
import { HandNote } from "@/components/fx/HandNote";
import {
  projects,
  profile,
  getLastActiveProjectSlug,
  setLastActiveProjectSlug,
} from "@/lib/portfolio";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects - Aadhith C J" },
      {
        name: "description",
        content:
          "Retina, DevOpsHub, and software engineering case studies by Aadhith C Joseph.",
      },
      { property: "og:title", content: "Projects - Aadhith C J" },
      {
        property: "og:description",
        content:
          "Things I've built: an interactive archive of full-stack, DevOps and AI projects.",
      },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://aadhithcj.site/projects" }],
  }),
  component: Projects,
});

const defaultProjectMeta = {
  pill: "RETINA / ASSISTIVE AI",
  quip: "check me out",
  features: [
    "+ CAMERA",
    "+ AI ANALYSIS",
    "+ VOICE FEEDBACK",
    "+ ACCESSIBLE UX",
  ],
  accentColor: "#CE4760",
};

const projectMeta: Record<
  string,
  {
    pill: string;
    quip: string;
    features: string[];
    accentColor: string;
  }
> = {
  retina: defaultProjectMeta,
  devopshub: {
    pill: "DEVOPSHUB / CI-CD AUTOMATION",
    quip: "ship it. again.",
    features: [
      "+ DOCKER COMPOSE",
      "+ GITHUB ACTIONS",
      "+ POSTGRESQL",
      "+ ZERO-DOWNTIME",
    ],
    accentColor: "#42BFDD",
  },
  inventory: {
    pill: "MOTO-INV / DESKTOP SUITE",
    quip: "boring? never.",
    features: [
      "+ SQLITE ATOMIC",
      "+ PDF INVOICES",
      "+ REAL-TIME STOCK",
      "+ PRODUCTION USE",
    ],
    accentColor: "#FF7700",
  },
  "crop-recommendation": {
    pill: "ROOTS / AGRITECH AI",
    quip: "grows on you",
    features: [
      "+ RANDOM FOREST",
      "+ OPEN-METEO API",
      "+ 7 PARAMETERS",
      "+ REACT FRONTEND",
    ],
    accentColor: "#22C55E",
  },
  "cv-sorting": {
    pill: "CV-SYS / TALENT PIPELINES",
    quip: "hired. probably.",
    features: [
      "+ DUAL PORTALS",
      "+ SUPABASE PG",
      "+ TANSTACK QUERY",
      "+ WORKFLOW ENGINE",
    ],
    accentColor: "#9649CB",
  },
};

function Projects() {
  const [active, setActive] = useState(() => {
    const slug = getLastActiveProjectSlug();
    const idx = projects.findIndex((p) => p.slug === slug);
    return idx >= 0 ? idx : 0;
  });
  const [hasHovered, setHasHovered] = useState(false);
  const [showPsst, setShowPsst] = useState(false);

  // Sync with previously clicked project on mount
  useEffect(() => {
    const slug = getLastActiveProjectSlug();
    const idx = projects.findIndex((p) => p.slug === slug);
    if (idx >= 0) {
      setActive((current) => (idx !== current ? idx : current));
    }
  }, []);

  const handleSelect = (idx: number) => {
    setActive(idx);
    const slug = projects[idx]?.slug;
    if (slug) {
      setLastActiveProjectSlug(slug);
    }
  };

  const p = (projects[active] ?? projects[0])!;
  const meta = projectMeta[p.slug] ?? defaultProjectMeta;

  // After 4s of idle time on a selected project, show a subtle playful "psst" nudge on the explore button
  useEffect(() => {
    setShowPsst(false);
    const timer = setTimeout(() => setShowPsst(true), 4000);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <div className="min-h-screen bg-background overflow-x-clip relative">
      {/* Interactive WebGL2 DotGrid Background synced to project accent color */}
      <PageBackdrop accent={meta.accentColor} />

      <SiteHeader />

      <main className="page-enter mx-auto max-w-7xl px-4 sm:px-8 pt-8 sm:pt-12 pb-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 xl:gap-14 items-start relative z-10 w-full min-w-0">
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

          {/* Page Heading */}
          <h1 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl tracking-tight text-foreground">
            Things I’ve{" "}
            <em className="italic text-lime not-italic font-normal">built</em>.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-mono max-w-xl">
            Software, systems, and experiments — made to solve real problems.
          </p>

          {/* Handwritten self-drawing note pointing to the project list, vanishes on first hover */}
          <AnimatePresence>
            {!hasHovered && (
              <motion.div
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="hidden lg:block absolute right-6 top-6"
              >
                <HandNote>go on, take a look</HandNote>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Numbered Editorial Project List */}
          <div
            className="mt-10 sm:mt-12 flex flex-col border-t-2 border-border"
            role="list"
          >
            {projects.map((x, i) => {
              const isSelected = active === i;
              return (
                <div key={x.slug} role="listitem" className="relative">
                  <Link
                    to="/projects/$slug"
                    params={{ slug: x.slug }}
                    onPointerDown={() => handleSelect(i)}
                    onClick={() => handleSelect(i)}
                    onMouseEnter={() => {
                      handleSelect(i);
                      setHasHovered(true);
                    }}
                    onFocus={() => {
                      handleSelect(i);
                      setHasHovered(true);
                    }}
                    data-crosshair-target
                    className={`w-full text-left transition-all duration-150 flex items-center justify-between py-4 sm:py-5 px-3 sm:px-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground ${
                      isSelected
                        ? "bg-[#F1BE05] text-black border-2 border-border shadow-[4px_4px_0px_0px_var(--shadow-color)] my-1 -translate-y-0.5 z-10"
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
                          isSelected
                            ? "font-bold"
                            : "font-normal hover:translate-x-1 hover:text-foreground"
                        }`}
                      >
                        {x.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs sm:text-sm transition-colors ${
                          isSelected
                            ? "text-black font-bold"
                            : "text-muted-foreground"
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
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Functional handwritten link to GitHub ending the list */}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            data-crosshair-target
            className="mt-10 hidden sm:inline-block font-hand text-xl text-muted-foreground hover:text-foreground hover:-rotate-2 transition-all w-fit"
          >
            more cooking on github ↗
          </a>
        </div>

        {/* Right Column: Substantial Neo-Brutalist Preview Panel */}
        <aside
          className="sticky top-20 border-2 sm:border-[2.5px] border-border bg-card p-5 sm:p-7 shadow-[8px_8px_0px_0px_var(--shadow-color)] transition-shadow duration-200 hover:shadow-[10px_10px_0px_0px_var(--shadow-color)] relative"
          aria-live="polite"
        >
          {/* Panel Top Header Bar */}
          <div className="flex items-center justify-between border-b-2 border-border/80 pb-3 mb-5">
            <span className="font-mono text-xs font-black uppercase tracking-wider text-foreground">
              SELECTED PROJECT / {String(active + 1).padStart(2, "0")}
            </span>
            <span className="size-2.5 rounded-full bg-[#FF3C38]" />
          </div>

          {/* Visual Mockup Frame */}
          <div className="group/frame border-2 border-border bg-surface-secondary/70 p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[340px] transition-colors duration-200 hover:border-foreground/80">
            {/* Per-project handwritten quip with self-drawing arrow pointing at device card */}
            <HandNote
              key={p.slug}
              rotate={3}
              className="absolute left-5 top-4 w-44 text-left z-10"
            >
              {meta.quip}
            </HandNote>

            {/* Central Graphic Mockup Frame: Clickable Device Card with Tactile Hover & Color Change */}
            <div className="my-auto mx-auto relative flex flex-col items-center pt-8 sm:pt-4">
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                data-crosshair-target
                className="group/card block w-44 sm:w-52 border-2 border-border bg-card shadow-[4px_4px_0px_0px_var(--shadow-color)] p-4 text-center relative transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[7px_7px_0px_0px_var(--shadow-color)] hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground cursor-pointer"
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
                <div className="size-20 sm:size-24 mx-auto rounded-none border-2 border-border bg-surface-secondary flex items-center justify-center font-display text-5xl sm:text-6xl font-black text-foreground shadow-[inset_0_2px_4px_rgba(0,0,0,0.08)] transition-all duration-200 group-hover/card:bg-[#F1BE05] group-hover/card:text-black group-hover/card:scale-105 group-hover/card:shadow-[3px_3px_0px_0px_var(--shadow-color)]">
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
            <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-foreground uppercase">
              {p.name}
            </h2>

            <p className="mt-2 font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {p.tagline}
            </p>

            {/* Stack Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((tech) => (
                <span
                  key={tech}
                  className="border-2 border-border bg-card px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-foreground shadow-[2px_2px_0px_0px_var(--shadow-color)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* High-Contrast Bold Yellow Action Button with Idle Psst Nudge */}
            <div className="relative mt-6">
              <AnimatePresence>
                {showPsst && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8, y: 4 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-3.5 right-4 font-hand text-sm font-bold bg-foreground text-background px-2 py-0.5 -rotate-6 z-20 pointer-events-none shadow-[2px_2px_0px_0px_var(--shadow-color)]"
                  >
                    psst, click here!
                  </motion.span>
                )}
              </AnimatePresence>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                data-crosshair-target
                className="w-full flex items-center justify-center gap-2 border-2 border-border bg-[#F1BE05] text-black py-3 sm:py-3.5 font-mono text-xs sm:text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_var(--shadow-color)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowUpRight className="size-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
