import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
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
import { ArrowUpRight, Github, Globe } from "lucide-react";
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

type ProjectMeta = {
  quip: string;
  accentColor: string;
  /** Short proof stamp shown on the row; facts only */
  badge: string;
  /** Ink color for text on the accent fill */
  badgeInk: string;
};

const defaultProjectMeta: ProjectMeta = {
  quip: "check me out",
  accentColor: "#FF3C38",
  badge: "ICFISN 2026 paper",
  badgeInk: "#FFFFFF",
};

// Retina takes the default; accents match each case study page
const projectMeta: Record<string, ProjectMeta> = {
  retina: defaultProjectMeta,
  devopshub: {
    quip: "ship it. again.",
    accentColor: "#42BFDD",
    badge: "In progress",
    badgeInk: "#000000",
  },
  inventory: {
    quip: "boring? never.",
    accentColor: "#FF7700",
    badge: "In daily use",
    badgeInk: "#000000",
  },
  "crop-recommendation": {
    quip: "grows on you",
    accentColor: "#22C55E",
    badge: "Live demo",
    badgeInk: "#000000",
  },
  "cv-sorting": {
    quip: "hired. probably.",
    accentColor: "#9649CB",
    badge: "Team of 3",
    badgeInk: "#FFFFFF",
  },
};

// Callers set the display class (e.g. "inline-block lg:hidden") so responsive hiding works
function ProofBadge({
  meta,
  className = "",
}: {
  meta: ProjectMeta;
  className?: string;
}) {
  return (
    <span
      className={`-rotate-2 whitespace-nowrap border-2 border-border px-1.5 py-0.5 font-mono text-[10px] font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_var(--shadow-color)] ${className}`}
      style={{ background: meta.accentColor, color: meta.badgeInk }}
    >
      {meta.badge}
    </span>
  );
}

const kbd =
  "border-2 border-border bg-card px-1.5 py-0.5 font-mono text-[10px] font-bold text-foreground shadow-[2px_2px_0px_0px_var(--shadow-color)]";

const linkButton =
  "inline-flex items-center gap-1.5 border-2 border-border bg-card px-3 py-1.5 font-mono text-[11px] font-black uppercase tracking-wider text-foreground shadow-[2px_2px_0px_0px_var(--shadow-color)] transition-all hover:translate-x-px hover:translate-y-px hover:bg-surface-secondary hover:shadow-[1px_1px_0px_0px_var(--shadow-color)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground";

function isTyping(target: EventTarget | null) {
  return (
    target instanceof Element &&
    Boolean(target.closest("input, textarea, select, [contenteditable=true]"))
  );
}

function Projects() {
  const navigate = useNavigate();
  // Starts at 0 so server and client markup match; the layout effect restores the last pick before paint
  const [active, setActive] = useState(0);
  const [hasHovered, setHasHovered] = useState(false);
  const rowRefs = useRef<(HTMLAnchorElement | null)[]>([]);

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

  // Up/down move through the list (focusing the row, so Enter opens it natively);
  // Enter anywhere else on the page opens the selected project
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || isTyping(e.target)) return;
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const step = e.key === "ArrowDown" ? 1 : -1;
        const next = (active + step + projects.length) % projects.length;
        rowRefs.current[next]?.focus();
        handleSelect(next);
        setHasHovered(true);
      } else if (e.key === "Enter") {
        const el = e.target instanceof Element ? e.target : null;
        if (el?.closest("a, button")) return;
        const slug = projects[active]?.slug;
        if (slug) navigate({ to: "/projects/$slug", params: { slug } });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, navigate]);

  const p = (projects[active] ?? projects[0])!;
  const meta = projectMeta[p.slug] ?? defaultProjectMeta;

  return (
    <div className="min-h-screen bg-background overflow-x-clip relative">
      <PageBackdrop accent={meta.accentColor} />

      <SiteHeader />

      <main className="page-enter mx-auto max-w-7xl px-4 sm:px-8 pt-8 sm:pt-12 pb-20 sm:pb-24 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 xl:gap-14 items-start relative z-10 w-full min-w-0">
        {/* Left column: heading and project index */}
        <div className="flex flex-col relative w-full min-w-0">
          <p className="label-mono">
            <DecryptedText
              text="# PROJECTS / SELECTED WORK"
              speed={25}
              sequential
              animateOn="view"
              encryptedClassName="text-lime"
            />
          </p>

          <h1 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl tracking-tight text-foreground">
            Things I’ve{" "}
            <em className="italic text-lime not-italic font-normal">built</em>.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-mono max-w-xl">
            Software, systems, and experiments — made to solve real problems.
          </p>

          {/* Handwritten note pointing at the list; vanishes on first hover or key press */}
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

          <div className="mt-10 sm:mt-12 hidden lg:flex items-center justify-end gap-1.5 pb-2 label-mono">
            <kbd className={kbd}>↑</kbd>
            <kbd className={kbd}>↓</kbd>
            <span className="mr-2">browse</span>
            <kbd className={kbd}>↵</kbd>
            <span>open</span>
          </div>

          <div
            className="mt-8 sm:mt-10 lg:mt-0 flex flex-col border-t-2 border-border"
            role="list"
          >
            {projects.map((x, i) => {
              const isSelected = active === i;
              const rowMeta = projectMeta[x.slug] ?? defaultProjectMeta;
              return (
                <div key={x.slug} role="listitem" className="relative">
                  <Link
                    ref={(el) => {
                      rowRefs.current[i] = el;
                    }}
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
                    className={`w-full text-left transition-all duration-150 flex items-center justify-between gap-4 py-4 sm:py-5 px-3 sm:px-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground border-b border-border/40 ${
                      isSelected
                        ? "lg:bg-[#F1BE05] lg:text-black lg:border-2 lg:border-border lg:shadow-[4px_4px_0px_0px_var(--shadow-color)] lg:my-1 lg:-translate-y-0.5 z-10"
                        : "hover:bg-[#F1BE05]/10 dark:hover:bg-[#F1BE05]/15 hover:border-border/60 hover:-translate-y-0.5 text-foreground"
                    }`}
                  >
                    <div className="flex min-w-0 items-baseline gap-4 sm:gap-6">
                      <span
                        className={`font-mono text-xs sm:text-sm font-bold transition-colors text-lime ${
                          isSelected ? "lg:text-black" : ""
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <span className="block font-display text-3xl sm:text-4xl md:text-[42px] leading-tight font-normal">
                          {x.name}
                        </span>
                        {/* Below desktop the preview panel is hidden, so the row carries the essentials */}
                        <span className="mt-1 block font-mono text-xs leading-relaxed text-muted-foreground lg:hidden">
                          {x.tagline}
                        </span>
                        <ProofBadge
                          meta={rowMeta}
                          className="mt-2.5 inline-block lg:hidden"
                        />
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-3">
                      <ProofBadge
                        meta={rowMeta}
                        className="hidden lg:inline-block"
                      />
                      <span
                        className={`font-mono text-xs sm:text-sm transition-colors text-muted-foreground ${
                          isSelected ? "lg:text-black font-bold" : ""
                        }`}
                      >
                        {x.year}
                      </span>
                      <span
                        className="font-mono text-base lg:hidden"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            data-crosshair-target
            className="mt-8 sm:mt-10 inline-block font-hand text-xl text-muted-foreground hover:text-foreground hover:-rotate-2 transition-all w-fit"
          >
            more cooking on github ↗
          </a>
        </div>

        {/* Right column: preview panel (desktop only; smaller screens read the rows) */}
        <aside
          className="hidden lg:block min-w-0 sticky top-20 border-[2.5px] border-border bg-card p-7 shadow-[8px_8px_0px_0px_var(--shadow-color)] transition-shadow duration-200 hover:shadow-[10px_10px_0px_0px_var(--shadow-color)] relative"
          aria-live="polite"
        >
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
            tabIndex={-1}
            title={`Explore ${p.name} case study`}
            className="group/frame block border-2 border-border bg-surface-secondary/70 relative overflow-hidden transition-colors duration-200 hover:bg-surface-secondary"
          >
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
                  className="h-[290px] px-6 pt-10 pb-4"
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

          <div className="mt-6 flex flex-col">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-display text-4xl font-normal tracking-normal text-foreground">
                {p.name}
              </h2>
              <ProofBadge meta={meta} className="inline-block" />
            </div>

            <p className="mt-2 font-mono text-sm text-muted-foreground leading-relaxed">
              {p.tagline}
            </p>

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

            {/* Straight to the code or the running thing, without opening the case study */}
            {(p.repoUrl || p.demoUrl) && (
              <div className="mt-5 flex flex-wrap gap-2.5 border-t-2 border-dashed border-border/50 pt-4">
                {p.repoUrl && (
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-crosshair-target
                    className={linkButton}
                  >
                    <Github className="size-3.5" aria-hidden="true" />
                    Source
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                )}
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-crosshair-target
                    className={linkButton}
                  >
                    <Globe className="size-3.5" aria-hidden="true" />
                    Live demo
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            )}

            <Link
              to="/projects/$slug"
              params={{ slug: p.slug }}
              data-crosshair-target
              className="mt-5 w-full flex items-center justify-center gap-2 border-2 border-border bg-[#F1BE05] text-black py-3.5 font-mono text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_var(--shadow-color)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
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
