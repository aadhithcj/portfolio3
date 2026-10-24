import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SiteHeader } from "@/components/SiteHeader";
import DecryptedText from "@/components/fx/DecryptedText";
import { PageBackdrop } from "@/components/fx/PageBackdrop";
import { HandNote } from "@/components/fx/HandNote";
import { Layers, Cloud, Cpu, ArrowUpRight, ChevronDown } from "lucide-react";
import { projects } from "@/lib/portfolio";
import { caseData } from "@/lib/case-data";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills - Aadhith C J" },
      {
        name: "description",
        content:
          "Full-stack web development, programming foundations, DevOps learning, and mobile/ML project experience of Aadhith C Joseph.",
      },
      {
        property: "og:title",
        content: "Skills - Aadhith C J",
      },
      {
        property: "og:description",
        content:
          "Interactive breakdown of core engineering tools, frameworks, and where each one was used.",
      },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://aadhithcj.site/skills" }],
  }),
  component: SkillsPage,
});

/* ------------------------------------------------------------------ */
/* Evidence: which projects actually used which skills                 */
/* ------------------------------------------------------------------ */

const norm = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim();

// Different spellings of the same tool across project stacks and skill chips
const ALIASES: Record<string, string> = {
  postgres: "postgresql",
  "docker compose": "docker",
  "aws ec2 + ssm": "aws ec2",
  yolov8n: "yolo",
  tailwind: "tailwind css",
};

// A stack entry that also proves a broader chip
const IMPLIES: Record<string, string[]> = {
  sqlite: ["sql"],
  postgresql: ["sql"],
  "github actions": ["ci/cd"],
};

// Skills a project uses that its stack list doesn't name, each stated in its case study
const ALSO_USES: Record<string, string[]> = {
  // pytest in the workflow, a deploy script on the EC2 server, /api/health endpoints, Git workflows
  devopshub: ["pytest", "Linux", "REST APIs", "Git"],
  // "Flask API that fetches weather from Open-Meteo"
  "crop-recommendation": ["REST APIs"],
};

type Evidence = {
  id: string;
  name: string;
  initials: string;
  accent: string;
  ink: string;
  /** Internal case study, or an external link (this site's repo) */
  to: { slug: string } | { href: string };
  skills: Set<string>;
};

function skillSet(list: string[]) {
  const out = new Set<string>();
  for (const raw of list) {
    const s = ALIASES[norm(raw)] ?? norm(raw);
    out.add(s);
    for (const extra of IMPLIES[s] ?? []) out.add(extra);
  }
  return out;
}

const darkAccents = new Set(["#9649CB", "#FF3C38"]);

const evidence: Evidence[] = [
  ...projects.map((p) => {
    const accent = caseData[p.slug]?.accent ?? "#F1BE05";
    return {
      id: p.slug,
      name: p.name,
      initials: p.name.slice(0, 2).toUpperCase(),
      accent,
      ink: darkAccents.has(accent) ? "#FFFFFF" : "#000000",
      to: { slug: p.slug },
      skills: skillSet([
        ...p.stack,
        ...(caseData[p.slug]?.stack ?? []),
        ...(ALSO_USES[p.slug] ?? []),
      ]),
    };
  }),
  {
    // The portfolio itself is the clearest proof of the web stack
    id: "this-site",
    name: "This site",
    initials: "</>",
    accent: "#F1BE05",
    ink: "#000000",
    to: { href: "https://github.com/aadhithcj/portfolio3" },
    skills: skillSet([
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Start",
      "three.js",
      "Vite",
      "Git",
    ]),
  },
];

const usesSkill = (e: Evidence, chip: string) =>
  e.skills.has(ALIASES[norm(chip)] ?? norm(chip));

/* ------------------------------------------------------------------ */
/* Categories                                                          */
/* ------------------------------------------------------------------ */

interface SkillCategory {
  id: string;
  name: string;
  subtitle: string;
  /** Shown as a stamp when the category is still being learned */
  status?: string;
  markerColor: string;
  accentBg: string;
  accentColor: string;
  quip: string;
  iconType: "prompt" | "layers" | "cloud" | "cpu";
  description: string;
  chips: string[];
  codeSnippet: React.ReactNode;
}

const categories: SkillCategory[] = [
  {
    id: "web",
    name: "Web & Full-Stack",
    subtitle: "FRONTEND, BACKEND, APIS & DATABASES",
    markerColor: "bg-[#F1BE05] text-black",
    accentBg: "bg-[#F1BE05]",
    accentColor: "#F1BE05",
    quip: "ships on friday",
    iconType: "layers",
    description:
      "React and TypeScript front ends, Flask and Supabase back ends, and the PostgreSQL schemas underneath. This is the stack behind most of what I build, including this site.",
    chips: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Flask",
      "REST APIs",
      "PostgreSQL",
      "Supabase",
    ],
    codeSnippet: (
      <div>
        <span className="text-[#9649CB] dark:text-[#C084FC]">const </span>
        <span className="text-[#42BFDD] dark:text-[#38BDF8]">stack</span> =
        &#123;
        {"\n"} frontend: [
        <span className="text-[#FF7700] dark:text-[#FB923C]">"React"</span>,{" "}
        <span className="text-[#FF7700] dark:text-[#FB923C]">"TypeScript"</span>
        ],
        {"\n"} backend: [
        <span className="text-[#FF7700] dark:text-[#FB923C]">"Flask"</span>,{" "}
        <span className="text-[#FF7700] dark:text-[#FB923C]">"Postgres"</span>],
        {"\n"} <span className="text-[#CE4760] dark:text-[#F87171]">build</span>
        : () =&gt;{" "}
        <span className="text-[#22C55E] dark:text-[#4ADE80]">
          "production ready"
        </span>
        {"\n"}&#125;;
      </div>
    ),
  },
  {
    id: "languages",
    name: "Languages & Foundations",
    subtitle: "PROGRAMMING FUNDAMENTALS & DATA STRUCTURES",
    markerColor: "bg-[#FF7700] text-black",
    accentBg: "bg-[#FF7700]",
    accentColor: "#FF7700",
    quip: "always curious",
    iconType: "prompt",
    description:
      "Programming fundamentals, problem-solving, data structures, algorithms, and low-level concepts that form the base of everything I build.",
    chips: ["Python", "SQL", "Java", "C", "DSA", "OOP"],
    codeSnippet: (
      <div>
        <span className="text-[#9649CB] dark:text-[#C084FC]">def </span>
        <span className="text-[#42BFDD] dark:text-[#38BDF8]">build</span>():
        {"\n"} ideas = [
        <span className="text-[#FF7700] dark:text-[#FB923C]">"solve"</span>,{" "}
        <span className="text-[#FF7700] dark:text-[#FB923C]">"build"</span>,{" "}
        <span className="text-[#FF7700] dark:text-[#FB923C]">"learn"</span>]
        {"\n"}{" "}
        <span className="text-[#CE4760] dark:text-[#F87171]">return </span>
        <span className="text-[#22C55E] dark:text-[#4ADE80]">
          "always curious"
        </span>
      </div>
    ),
  },
  {
    id: "devops",
    name: "DevOps & Infrastructure",
    subtitle: "CI/CD, CONTAINERS & CLOUD DEPLOYS",
    status: "Learning",
    markerColor: "bg-[#42BFDD] text-black",
    accentBg: "bg-[#42BFDD]",
    accentColor: "#42BFDD",
    quip: "works on my machine ✓",
    iconType: "cloud",
    description:
      "What I'm learning by building DevOpsHub: a GitHub Actions pipeline, Docker images, and health-checked deploys to AWS EC2 with automatic rollback.",
    chips: [
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Docker",
      "pytest",
      "Linux",
      "AWS EC2",
    ],
    codeSnippet: (
      <div>
        <span className="text-muted-foreground">$ </span>
        <span className="text-[#42BFDD] dark:text-[#38BDF8]">
          docker compose{" "}
        </span>
        up -d
        {"\n"}
        <span className="text-[#22C55E]">✓ </span>backend : container healthy
        {"\n"}
        <span className="text-[#22C55E]">✓ </span>postgres: listening on 5432
        {"\n"}
        <span className="text-[#22C55E]">✓ </span>actions : tests passed (0
        errors)
      </div>
    ),
  },
  {
    id: "mobile-ai",
    name: "Mobile, AI & Computer Vision",
    subtitle: "PROJECT EXPERIENCE: ANDROID & ML",
    markerColor: "bg-[#9649CB] text-white",
    accentBg: "bg-[#9649CB]",
    accentColor: "#9649CB",
    quip: "check me out",
    iconType: "cpu",
    description:
      "Project experience rather than a specialty: a Kotlin Android app running on-device vision models (Retina), and a scikit-learn classifier behind a web app (Roots).",
    chips: [
      "Kotlin",
      "ML Kit",
      "TensorFlow Lite",
      "YOLO",
      "Scikit-learn",
      "Jetpack Compose",
      "OpenCV",
    ],
    codeSnippet: (
      <div>
        <span className="text-[#9649CB] dark:text-[#C084FC]">val </span>retina ={" "}
        <span className="text-[#42BFDD] dark:text-[#38BDF8]">
          VisionPipeline
        </span>
        ()
        {"\n"}retina.
        <span className="text-[#FF7700] dark:text-[#FB923C]">detect</span>
        (frame) &#123; obj =&gt;
        {"\n"} tts.
        <span className="text-[#CE4760] dark:text-[#F87171]">speak</span>
        (obj.label, obj.distance)
        {"\n"}&#125;
      </div>
    ),
  },
];

/** Projects that used at least one of the category's skills, most matches first. */
function appliedIn(cat: SkillCategory) {
  return evidence
    .map((e) => ({ e, used: cat.chips.filter((c) => usesSkill(e, c)) }))
    .filter((x) => x.used.length > 0)
    .sort((a, b) => b.used.length - a.used.length);
}

function CategoryIcon({ type }: { type: SkillCategory["iconType"] }) {
  if (type === "prompt")
    return (
      <span className="font-mono font-black text-xs sm:text-sm tracking-tighter">
        &gt;_
      </span>
    );
  if (type === "layers") return <Layers className="size-4 sm:size-5" />;
  if (type === "cloud") return <Cloud className="size-4 sm:size-5" />;
  return <Cpu className="size-4 sm:size-5" />;
}

function StatusStamp({ label }: { label: string }) {
  return (
    <span className="inline-block -rotate-2 border-2 border-border bg-[#42BFDD] px-1.5 py-0.5 font-mono text-[10px] font-black uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_var(--shadow-color)]">
      {label}
    </span>
  );
}

/** Skill chips plus the projects that prove them. Shared by the desktop panel and the phone accordion. */
function SkillEvidence({
  cat,
  hoveredSkill,
  setHoveredSkill,
  onFirstHover,
}: {
  cat: SkillCategory;
  hoveredSkill: string | null;
  setHoveredSkill: (s: string | null) => void;
  onFirstHover: () => void;
}) {
  const applied = appliedIn(cat);
  const hoveredMatches = hoveredSkill
    ? applied.filter(({ e }) => usesSkill(e, hoveredSkill)).length
    : 0;

  return (
    <>
      <div className="mt-4 flex flex-wrap gap-2">
        {cat.chips.map((chip) => {
          const isHovered = hoveredSkill === chip;
          return (
            <button
              key={chip}
              type="button"
              aria-pressed={isHovered}
              onMouseEnter={() => {
                setHoveredSkill(chip);
                onFirstHover();
              }}
              onFocus={() => {
                setHoveredSkill(chip);
                onFirstHover();
              }}
              onMouseLeave={() => setHoveredSkill(null)}
              onClick={() => {
                setHoveredSkill(isHovered ? null : chip);
                onFirstHover();
              }}
              className={`border-2 border-border px-3 py-1 font-mono text-xs font-bold transition-all duration-150 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground ${
                isHovered
                  ? "bg-[#F1BE05] text-black shadow-[3px_3px_0px_0px_var(--shadow-color)] -translate-y-0.5"
                  : "bg-card text-foreground shadow-[2px_2px_0px_0px_var(--shadow-color)] hover:bg-[#F1BE05] hover:text-black hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_var(--shadow-color)]"
              }`}
            >
              {chip}
            </button>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t-2 border-border">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5">
          <span className="font-mono text-xs font-black uppercase tracking-wider text-foreground flex items-center gap-2">
            <span>Applied in</span>
            {hoveredSkill && (
              <span className="text-[10px] font-bold text-black bg-[#F1BE05] px-1.5 py-0.5 border border-border shadow-[1px_1px_0px_0px_var(--shadow-color)]">
                {hoveredSkill.toUpperCase()}
              </span>
            )}
          </span>
          <Link
            to="/projects"
            data-crosshair-target
            className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
          >
            <span>All projects</span>
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        {hoveredSkill && hoveredMatches === 0 && (
          <p className="mb-2.5 font-mono text-[11px] text-muted-foreground">
            Not in a showcased project yet: {hoveredSkill} comes from coursework
            and practice.
          </p>
        )}

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {applied.map(({ e, used }) => {
            const isMatching = hoveredSkill
              ? usesSkill(e, hoveredSkill)
              : false;
            const cardClass = `border-2 border-border p-2.5 transition-all duration-150 flex items-center gap-2.5 group/proj relative ${
              hoveredSkill
                ? isMatching
                  ? "bg-[#F1BE05]/20 shadow-[4px_4px_0px_0px_var(--shadow-color)] -translate-y-1"
                  : "bg-card opacity-35"
                : "bg-card hover:bg-surface-secondary/90 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_var(--shadow-color)]"
            }`;
            const body = (
              <>
                <div
                  className="size-9 sm:size-10 grid place-items-center border-2 border-border font-mono text-[11px] sm:text-xs font-black shrink-0 shadow-[1.5px_1.5px_0px_0px_var(--shadow-color)]"
                  style={{ background: e.accent, color: e.ink }}
                >
                  {e.initials}
                </div>
                <div className="min-w-0">
                  <h3
                    className={`font-sans font-bold text-xs sm:text-sm leading-tight truncate ${
                      isMatching
                        ? "underline decoration-[#F1BE05] decoration-2"
                        : ""
                    }`}
                  >
                    {e.name}
                  </h3>
                  <p className="font-mono text-[9.5px] text-muted-foreground uppercase truncate mt-0.5">
                    {used.join(", ")}
                  </p>
                </div>
              </>
            );
            return "slug" in e.to ? (
              <Link
                key={e.id}
                to="/projects/$slug"
                params={{ slug: e.to.slug }}
                data-crosshair-target
                className={cardClass}
              >
                {body}
              </Link>
            ) : (
              <a
                key={e.id}
                href={e.to.href}
                target="_blank"
                rel="noreferrer"
                data-crosshair-target
                className={cardClass}
              >
                {body}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

const kbd =
  "border-2 border-border bg-card px-1.5 py-0.5 font-mono text-[10px] font-bold text-foreground shadow-[2px_2px_0px_0px_var(--shadow-color)]";

function isTyping(target: EventTarget | null) {
  return (
    target instanceof Element &&
    Boolean(target.closest("input, textarea, select, [contenteditable=true]"))
  );
}

function SkillsPage() {
  const [active, setActive] = useState<number>(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hasHoveredChip, setHasHoveredChip] = useState(false);
  // Phones only: whether the selected category is expanded (tapping it again closes it)
  const [open, setOpen] = useState(true);
  // A tap fires hover and focus (which select the row) before click, so remember
  // whether the row was already the open one when the press started
  const wasOpenOnPress = useRef<boolean | null>(null);
  const rowRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeCat = (categories[active] ?? categories[0])!;
  const select = (i: number) => {
    if (i !== active) setHoveredSkill(null);
    setActive(i);
  };

  // Up/down move through the categories, like the Projects list; focusing a row selects it
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || isTyping(e.target)) return;
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      e.preventDefault();
      const step = e.key === "ArrowDown" ? 1 : -1;
      const next = (active + step + categories.length) % categories.length;
      rowRefs.current[next]?.focus();
      if (next !== active) setHoveredSkill(null);
      setActive(next);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip relative">
      <PageBackdrop accent={activeCat.accentColor} />

      <SiteHeader />

      <main className="page-enter mx-auto max-w-7xl px-4 sm:px-8 pt-8 sm:pt-12 pb-20 sm:pb-24 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 xl:gap-14 items-start relative z-10 w-full min-w-0">
        {/* Left column: heading and category index */}
        <div className="flex flex-col relative w-full min-w-0">
          <p className="label-mono">
            <DecryptedText
              text="# TOOLBOX // TECH STACK"
              speed={25}
              sequential
              animateOn="view"
              encryptedClassName="text-lime"
            />
          </p>

          <h1 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl tracking-tight text-foreground">
            Systems, Stack &{" "}
            <em className="text-lime not-italic font-normal">Tools</em>.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-mono max-w-xl">
            The languages, frameworks and tools I use, each linked to the
            projects where I actually used it.
          </p>

          <div className="mt-10 sm:mt-12 hidden lg:flex items-center justify-end gap-1.5 pb-2 label-mono">
            <kbd className={kbd}>↑</kbd>
            <kbd className={kbd}>↓</kbd>
            <span>browse</span>
          </div>

          <div
            className="mt-10 sm:mt-12 lg:mt-0 flex flex-col border-t-2 border-border w-full min-w-0"
            role="list"
          >
            {categories.map((cat, i) => {
              const isSelected = active === i;
              return (
                <div
                  key={cat.id}
                  role="listitem"
                  className="relative w-full min-w-0"
                >
                  <button
                    ref={(el) => {
                      rowRefs.current[i] = el;
                    }}
                    type="button"
                    onPointerDown={() => {
                      wasOpenOnPress.current = isSelected && open;
                    }}
                    onClick={() => {
                      // Pointer presses use the state from press time; keyboard uses the current state
                      const wasOpen =
                        wasOpenOnPress.current ?? (isSelected && open);
                      wasOpenOnPress.current = null;
                      setOpen(!wasOpen);
                      select(i);
                    }}
                    onMouseEnter={() => select(i)}
                    onFocus={() => select(i)}
                    aria-expanded={isSelected && open}
                    aria-controls={`skills-${cat.id}`}
                    data-crosshair-target
                    className={`w-full min-w-0 overflow-hidden text-left transition-all duration-150 flex items-center justify-between py-3.5 sm:py-5 px-3 sm:px-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground ${
                      isSelected
                        ? "bg-[#F1BE05] text-black border-2 border-border shadow-[4px_4px_0px_0px_var(--shadow-color)] my-1 -translate-y-0.5 z-10"
                        : "border-b border-border/40 hover:bg-[#F1BE05]/10 dark:hover:bg-[#F1BE05]/15 hover:border-border/60 hover:-translate-y-0.5 text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-5 min-w-0 flex-1 overflow-hidden">
                      <div
                        className={`size-9 sm:size-11 grid place-items-center border-2 border-border shadow-[2px_2px_0px_0px_var(--shadow-color)] shrink-0 ${cat.markerColor}`}
                      >
                        <CategoryIcon type={cat.iconType} />
                      </div>

                      <div className="min-w-0 flex-1 overflow-hidden">
                        <span className="flex items-center gap-2.5">
                          <span className="block font-display text-xl sm:text-3xl md:text-[34px] leading-tight truncate font-normal">
                            {cat.name}
                          </span>
                          {cat.status && (
                            <span className="hidden sm:inline-block">
                              <StatusStamp label={cat.status} />
                            </span>
                          )}
                        </span>
                        <p
                          className={`font-mono text-[9px] sm:text-[10.5px] font-bold uppercase tracking-wider mt-0.5 sm:mt-1 truncate block ${
                            isSelected
                              ? "text-black/80"
                              : "text-muted-foreground"
                          }`}
                        >
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 shrink-0 pl-2">
                      <span
                        className={`font-mono text-xs sm:text-sm font-bold tabular-nums ${
                          isSelected ? "text-black" : "text-muted-foreground"
                        }`}
                      >
                        {cat.chips.length} skills
                      </span>
                      <ChevronDown
                        className={`size-4 transition-transform lg:hidden ${
                          isSelected && open ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </button>

                  {/* Phones and tablets: the category opens in place instead of a side panel */}
                  {isSelected && open && (
                    <div
                      id={`skills-${cat.id}`}
                      className="lg:hidden border-x-2 border-b-2 border-border bg-card px-3 pt-3 pb-4 mb-2 -mt-1"
                    >
                      {cat.status && <StatusStamp label={cat.status} />}
                      <p
                        className={`font-mono text-xs leading-relaxed text-muted-foreground ${cat.status ? "mt-3" : ""}`}
                      >
                        {cat.description}
                      </p>
                      <SkillEvidence
                        cat={cat}
                        hoveredSkill={hoveredSkill}
                        setHoveredSkill={setHoveredSkill}
                        onFirstHover={() => setHasHoveredChip(true)}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <Link
            to="/projects"
            data-crosshair-target
            className="mt-10 hidden sm:inline-block font-hand text-xl text-muted-foreground hover:text-foreground hover:-rotate-2 transition-all w-fit"
          >
            want proof? see it in the projects →
          </Link>
        </div>

        {/* Right column: inspector panel (desktop only) */}
        <aside
          className="hidden lg:block w-full min-w-0 max-w-full overflow-hidden sticky top-20 border-[2.5px] border-border bg-card p-7 shadow-[8px_8px_0px_0px_var(--shadow-color)] transition-shadow duration-200 hover:shadow-[10px_10px_0px_0px_var(--shadow-color)]"
          aria-live="polite"
        >
          <div className="flex items-center justify-between border-b-2 border-border/80 pb-3 mb-5">
            <span className="font-mono text-xs font-black uppercase tracking-wider text-foreground">
              SKILL GROUP / {String(active + 1).padStart(2, "0")}
            </span>
            <span className="size-2.5 rounded-full bg-[#FF3C38]" />
          </div>

          <div className="group/frame border-2 border-border bg-surface-secondary/70 p-6 relative overflow-hidden flex items-center justify-center min-h-72.5 select-none transition-colors duration-200 hover:border-foreground/80 w-full min-w-0 max-w-full">
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                backgroundSize: "16px 16px",
              }}
            />

            <div
              className={`absolute w-82.5 h-40 border-2 border-border shadow-[4px_4px_0px_0px_var(--shadow-color)] -rotate-3 -translate-x-4 -translate-y-2 transition-colors duration-200 ${activeCat.accentBg}`}
            />

            <div className="relative z-10 w-full max-w-85 border-2 border-border bg-card shadow-[4px_4px_0px_0px_var(--shadow-color)] p-4">
              <div className="flex items-center gap-1.5 pb-2 border-b border-border/50">
                <span className="size-2.5 rounded-full bg-[#FF3C38] border border-border/40" />
                <span className="size-2.5 rounded-full bg-[#F1BE05] border border-border/40" />
                <span className="size-2.5 rounded-full bg-[#22C55E] border border-border/40" />
              </div>
              <pre className="mt-2.5 font-mono text-[13px] leading-relaxed text-foreground overflow-x-auto">
                <code>{activeCat.codeSnippet}</code>
              </pre>
            </div>

            <HandNote
              key={activeCat.id}
              flip
              rotate={3}
              className="absolute right-5 top-4 z-20 w-40"
            >
              {activeCat.quip}
            </HandNote>
          </div>

          <div className="mt-6 flex flex-col">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-display text-4xl font-normal tracking-normal text-foreground">
                {activeCat.name}
              </h2>
              {activeCat.status && <StatusStamp label={activeCat.status} />}
            </div>
            <p className="mt-2 font-mono text-sm text-muted-foreground leading-relaxed">
              {activeCat.description}
            </p>

            <AnimatePresence>
              {!hasHoveredChip && (
                <motion.p
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 font-hand text-xl text-muted-foreground"
                >
                  hover a skill, see where I actually used it ↓
                </motion.p>
              )}
            </AnimatePresence>

            <SkillEvidence
              cat={activeCat}
              hoveredSkill={hoveredSkill}
              setHoveredSkill={setHoveredSkill}
              onFirstHover={() => setHasHoveredChip(true)}
            />
          </div>
        </aside>
      </main>
    </div>
  );
}
