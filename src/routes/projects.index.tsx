import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useLayoutEffect } from "react";
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
import { ProjectSchematic } from "@/components/projects/ProjectSchematic";
import { schematicCaptions } from "@/lib/schematic-captions";

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

const defaultProjectMeta = { quip: "check me out", accentColor: "#FF3C38" };

// Retina takes the default; accents match each case study page
const projectMeta: Record<string, { quip: string; accentColor: string }> = {
  retina: defaultProjectMeta,
  devopshub: { quip: "ship it. again.", accentColor: "#42BFDD" },
  inventory: { quip: "boring? never.", accentColor: "#FF7700" },
  "crop-recommendation": { quip: "grows on you", accentColor: "#22C55E" },
  "cv-sorting": { quip: "hired. probably.", accentColor: "#9649CB" },
};

function Projects() {
  // Starts at 0 so server and client markup match; the layout effect restores the last pick before paint
  const [active, setActive] = useState(0);
  const [hasHovered, setHasHovered] = useState(false);
  const [showPsst, setShowPsst] = useState(false);

  // Restore the previously viewed project on mount
  useLayoutEffect(() => {
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

      <main className="page-enter mx-auto max-w-7xl px-4 sm:px-8 pt-8 sm:pt-12 pb-24 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 xl:gap-14 items-start relative z-10 w-full min-w-0">
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
                        className={`font-display text-3xl sm:text-4xl md:text-[42px] leading-tight transition-all font-normal ${
                          isSelected
                            ? "text-black"
                            : "hover:translate-x-1 hover:text-foreground"
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
          className="min-w-0 sticky top-20 border-2 sm:border-[2.5px] border-border bg-card p-5 sm:p-7 shadow-[8px_8px_0px_0px_var(--shadow-color)] transition-shadow duration-200 hover:shadow-[10px_10px_0px_0px_var(--shadow-color)] relative"
          aria-live="polite"
        >
          {/* Panel Top Header Bar */}
          <div className="flex items-center justify-between border-b-2 border-border/80 pb-3 mb-5">
            <span className="font-mono text-xs font-black uppercase tracking-wider text-foreground">
              SELECTED PROJECT / {String(active + 1).padStart(2, "0")}
            </span>
            <span className="size-2.5 rounded-full bg-[#FF3C38]" />
          </div>

          {/* Project schematic: an animated diagram of how the selected project works */}
          <Link
            to="/projects/$slug"
            params={{ slug: p.slug }}
            data-crosshair-target
            title={`Explore ${p.name} case study`}
            className="group/frame block border-2 border-border bg-surface-secondary/70 relative overflow-hidden transition-colors duration-200 hover:bg-surface-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
          >
            {/* Per-project handwritten quip */}
            <HandNote
              key={p.slug}
              rotate={-3}
              arrow={false}
              className="absolute right-4 top-3 z-10 text-right"
            >
              {meta.quip}
            </HandNote>

            <AnimatePresence mode="wait">
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <ProjectSchematic
                  slug={p.slug}
                  accent={meta.accentColor}
                  className="h-[260px] sm:h-[290px] px-4 pt-10 pb-4 sm:px-6"
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between gap-3 border-t-2 border-border bg-card px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-wider">
              <span className="truncate text-muted-foreground group-hover/frame:text-foreground transition-colors">
                fig. {String(active + 1).padStart(2, "0")} ·{" "}
                {schematicCaptions[p.slug]}
              </span>
              <span
                className="size-2.5 shrink-0 border border-border"
                style={{ background: meta.accentColor }}
                aria-hidden="true"
              />
            </div>
          </Link>

          {/* Project Details Below Mockup */}
          <div className="mt-6 flex flex-col">
            <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-normal text-foreground">
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
