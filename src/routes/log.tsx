import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import DecryptedText from "@/components/fx/DecryptedText";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/log")({
  head: () => ({
    meta: [
      { title: "Log & Timeline — ACJ_" },
      {
        name: "description",
        content:
          "Career timeline, milestones, internships, education and achievements of Aadhith C Joseph.",
      },
      { property: "og:title", content: "Log & Timeline — ACJ_" },
      {
        property: "og:description",
        content:
          "Engineering journey, competitive programming, and milestones chronologically archived.",
      },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: LogPage,
});

interface EvidenceOutput {
  stat?: string;
  label: string;
}

interface LogEntry {
  period: string;
  year: string;
  title: string;
  role: string;
  description: string;
  category: "Experience" | "Education" | "Award" | "Leadership";
  highlights: string[];
  featuredEvidence?: {
    header: string;
    items: EvidenceOutput[];
  };
}

const entries: LogEntry[] = [
  {
    period: "2022 — 2026",
    year: "2026",
    title: "B.Tech in Computer Science and Engineering",
    role: "Carmel College of Engineering and Technology (CCET / KTU)",
    description:
      "Undergraduate curriculum emphasizing algorithms, database design, operating systems, networking, and applied intelligence.",
    category: "Education",
    highlights: ["CGPA 8.12", "Coursework in Distributed Systems & AI"],
    featuredEvidence: {
      header: "ACADEMIC BENCHMARK",
      items: [
        { stat: "8.12", label: "Cumulative CGPA across coursework" },
        { label: "Core: Distributed Systems, OS & Relational Databases" },
      ],
    },
  },
  {
    period: "Jan — Feb 2025",
    year: "2025",
    title: "AI/ML Intern",
    role: "ICT Academy of Kerala · Trivandrum",
    description:
      "Developed and evaluated computer vision and machine-learning models for edge inference and tabular predictive analytics.",
    category: "Experience",
    highlights: [
      "Evaluated prototypes across 5+ real-world datasets",
      "Trained classification & regression models",
    ],
    featuredEvidence: {
      header: "RECORDED OUTPUTS",
      items: [
        { stat: "05+", label: "Real-world datasets evaluated" },
        { label: "Classification & regression model tuning" },
      ],
    },
  },
  {
    period: "2025 — 2026",
    year: "2026",
    title: "College Arts Secretary",
    role: "Carmel College of Engineering and Technology",
    description:
      "Spearheaded cultural operations and coordinated large-scale logistical workflows across campus departments.",
    category: "Leadership",
    highlights: [
      "Organised 3+ major multi-day college events",
      "Managed cross-functional student teams of 30+",
    ],
    featuredEvidence: {
      header: "CAMPUS SCALE",
      items: [
        { stat: "03+", label: "Multi-day campus festivals organized" },
        { label: "Cross-functional student operations leadership" },
      ],
    },
  },
  {
    period: "2023",
    year: "2023",
    title: "IEEEXtreme 17.0",
    role: "College Rank 1 · Global Algorithmic Competition",
    description:
      "Competed globally in IEEE's premier 24-hour algorithmic problem solving and optimization marathon.",
    category: "Award",
    highlights: [
      "College Rank 1 across all participating batches",
      "Solved complex graphs & DP challenges",
    ],
    featuredEvidence: {
      header: "HONOR & RANKING",
      items: [
        { stat: "#01", label: "College Rank across all student batches" },
        { label: "24-hour global competitive programming marathon" },
      ],
    },
  },
  {
    period: "2022 — Present",
    year: "2026",
    title: "Freelance Web & Software Developer",
    role: "Full-Stack Developer",
    description:
      "Architected and deployed responsive web apps, automated data ingestion pipelines, and RESTful API backends for diverse client needs.",
    category: "Experience",
    highlights: [
      "4+ production deployments",
      "PostgreSQL & Supabase schemas",
      "CI/CD container delivery",
    ],
    featuredEvidence: {
      header: "CLIENT PRODUCTION",
      items: [
        { stat: "04+", label: "Production web applications deployed" },
        { label: "PostgreSQL, Supabase & automated CI/CD pipelines" },
      ],
    },
  },
  {
    period: "2021 — Present",
    year: "2026",
    title: "Freelance Designer & Video Editor",
    role: "UI/UX & Motion Design",
    description:
      "Delivered 5+ UI/UX projects and edited 50+ social media videos contributing to campaigns generating 100K+ interactions.",
    category: "Experience",
    highlights: [
      "Delivered 5+ UI/UX projects",
      "Edited 50+ social media videos",
      "Campaigns generating 100K+ interactions",
    ],
    featuredEvidence: {
      header: "CREATIVE REACH",
      items: [
        { stat: "100K+", label: "Social campaign interactions generated" },
        { label: "50+ videos edited & 5+ UI/UX projects delivered" },
      ],
    },
  },
];

// Color mapping: Yellow for education, cyan for technical experience, orange for leadership, purple for awards
const categoryThemes: Record<
  LogEntry["category"],
  { badge: string; node: string }
> = {
  Education: {
    badge: "bg-[#F1BE05] text-black",
    node: "bg-[#F1BE05]",
  },
  Experience: {
    badge: "bg-[#42BFDD] text-black",
    node: "bg-[#42BFDD]",
  },
  Leadership: {
    badge: "bg-[#FF7700] text-black",
    node: "bg-[#FF7700]",
  },
  Award: {
    badge: "bg-[#9649CB] text-white",
    node: "bg-[#9649CB]",
  },
};

function TimelineEntryItem({
  item,
  idx,
}: {
  item: (typeof entries)[number];
  idx: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const theme = categoryThemes[item.category];

  useEffect(() => {
    // If the user prefers reduced motion, make entries immediately visible without animation
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (observerEntries) => {
        observerEntries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative mb-10 sm:mb-12 last:mb-0 transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Stable, Outlined Timeline Node with Category Accent Center */}
      <div
        className={`absolute -left-[35px] sm:-left-[43px] top-1 size-5 sm:size-5.5 border-2 border-border bg-background shadow-[2px_2px_0px_0px_var(--border)] grid place-items-center transition-transform duration-200 group-hover:scale-110 ${
          isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
        aria-hidden="true"
      >
        <span
          className={`size-1.5 border border-border/80 ${theme.node}`}
        />
      </div>

      {/* Header Row: Period, Category Badge, and Archive Identifier */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-border/70 pb-2">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs sm:text-[13px] font-black text-lime uppercase tracking-wider">
            {item.period}
          </span>
          <span
            className={`border border-border px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-wider shadow-[1.5px_1.5px_0px_0px_var(--border)] ${theme.badge}`}
          >
            {item.category}
          </span>
        </div>
        <span className="font-mono text-[10px] sm:text-xs font-bold text-muted-foreground uppercase">
          ENTRY // {String(idx + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Main Content */}
      <div className="mt-3">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
          {item.title}
        </h2>
        <p className="mt-0.5 font-mono text-xs sm:text-sm font-semibold text-muted-foreground/90">
          {item.role}
        </p>

        <p className="mt-2.5 font-mono text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-2xl">
          {item.description}
        </p>

        {/* Compact Featured Evidence Callout Block */}
        {item.featuredEvidence && (
          <div className="mt-3.5 border-2 border-border bg-card p-3 sm:p-4 shadow-[4px_4px_0px_0px_var(--border)] max-w-xl transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--border)]">
            <div className="flex items-center justify-between border-b border-border/60 pb-1.5 mb-2.5">
              <span className="font-mono text-[10px] font-black uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <span className={`size-1.5 border border-border ${theme.node}`} />
                {item.featuredEvidence.header}
              </span>
              <span className="font-mono text-[9px] font-bold text-muted-foreground uppercase">
                VERIFIED RECORD
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {item.featuredEvidence.items.map((ev, i) => (
                <div key={i} className="flex items-baseline gap-2">
                  {ev.stat && (
                    <span className="font-display text-xl sm:text-2xl font-black text-foreground shrink-0">
                      {ev.stat}
                    </span>
                  )}
                  <span className="font-mono text-[11px] leading-snug text-foreground/90 font-medium">
                    {ev.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rectangular Evidence Labels with Red Accent Marker */}
        <ul className="mt-3.5 flex flex-wrap gap-1.5 sm:gap-2">
          {item.highlights.map((hl) => (
            <li
              key={hl}
              className="flex items-center gap-1.5 border border-border bg-card px-2.5 py-1 font-mono text-[11px] sm:text-xs font-semibold text-foreground/90 shadow-[1.5px_1.5px_0px_0px_var(--border)] transition-colors hover:bg-surface-secondary"
            >
              <span className="text-lime font-bold" aria-hidden="true">
                ▸
              </span>
              <span>{hl}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="page-enter mx-auto max-w-4xl px-5 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-12">
        <header className="relative">
          <p className="label-mono">
            <DecryptedText
              text="# ARCHIVE // TIMELINE"
              speed={25}
              sequential
              animateOn="view"
              encryptedClassName="text-lime"
            />
          </p>

          <h1 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl tracking-tight text-foreground">
            The Engineering{" "}
            <em className="italic text-lime not-italic font-normal">Log</em>.
          </h1>

          <p className="mt-4 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
            Milestones, career transitions, competitive programming, and education in chronological sequence.
          </p>

          {/* Floating Playful Accent Top-Right */}
          <div className="hidden sm:flex absolute right-4 top-2 select-none pointer-events-none items-center gap-3">
            <div className="text-right font-mono text-[9px] uppercase font-bold text-muted-foreground/80 leading-tight">
              ARCHIVE<br />
              MILESTONES<br />
              TIMELINE<br />
              VERIFIED
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
            <div className="size-11 border-2 border-border bg-[#9649CB] shadow-[3px_3px_0px_0px_var(--border)] -rotate-6" />
          </div>
        </header>

        {/* Timeline list with Bolder 2px Spine */}
        <div className="relative mt-12 sm:mt-16 border-l-2 border-border pl-6 sm:pl-9">
          {entries.map((item, idx) => (
            <TimelineEntryItem key={item.title} item={item} idx={idx} />
          ))}
        </div>

        {/* Bottom CTA with Neo-Brutalist Square Border and Hard Offset Shadow */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-2 border-border bg-card p-6 sm:p-7 shadow-[5px_5px_0px_0px_var(--border)] sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              Want to build something together?
            </h3>
            <p className="font-mono text-xs text-muted-foreground mt-1">
              Always open to discussing new roles, contracts, and engineering challenges.
            </p>
          </div>
          <Link
            to="/contact"
            data-crosshair-target
            className="inline-flex items-center justify-center gap-2 border-2 border-border bg-[#F1BE05] px-5 py-2.5 font-mono text-xs sm:text-sm font-black text-black shadow-[3px_3px_0px_0px_var(--border)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_var(--border)] transition-all shrink-0 uppercase tracking-wider"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="size-4" strokeWidth={2.5} />
          </Link>
        </div>
      </main>
    </div>
  );
}
