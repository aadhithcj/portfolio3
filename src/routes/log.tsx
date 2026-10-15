import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import DecryptedText from "@/components/fx/DecryptedText";
import TextType from "@/components/fx/TextType";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/log")({
  head: () => ({
    meta: [
      { title: "Log & Timeline — Aadhith C Joseph" },
      {
        name: "description",
        content:
          "Career timeline, milestones, internships, education and achievements of Aadhith C Joseph.",
      },
      { property: "og:title", content: "Log & Timeline — Aadhith C Joseph" },
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

interface LogEntry {
  period: string;
  year: string;
  title: string;
  role: string;
  description: string;
  category: "Experience" | "Education" | "Award" | "Leadership";
  highlights: string[];
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
  },
  {
    period: "Jan — Feb 2025",
    year: "2025",
    title: "AI/ML Intern",
    role: "ICT Academy of Kerala, Trivandrum",
    description:
      "Developed and evaluated computer vision and machine learning models for edge inference and tabular predictive analytics.",
    category: "Experience",
    highlights: [
      "Evaluated prototypes across 5+ real-world datasets",
      "Trained classification & regression models",
    ],
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
      "Managed cross-functional student teams",
    ],
  },
  {
    period: "2023",
    year: "2023",
    title: "IEEEXtreme 17.0",
    role: "College Rank 1",
    description:
      "Competed globally in IEEE's premier 24-hour algorithmic problem solving and optimization marathon.",
    category: "Award",
    highlights: [
      "College Rank 1 across all participating batches",
      "Solved complex graphs & DP challenges",
    ],
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
      "Contributed to campaigns generating 100K+ interactions",
    ],
  },
];

function TimelineEntryItem({
  item,
  idx,
}: {
  item: (typeof entries)[number];
  idx: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      (entries) => {
        entries.forEach((entry) => {
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
      className={`relative mb-14 last:mb-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Dot indicator */}
      <div
        className={`absolute -left-[31px] top-1.5 grid size-4 place-items-center rounded-full border border-lime bg-background text-[8px] text-lime shadow-sm transition-all duration-500 ease-out sm:-left-[39px] ${
          isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        <span className="size-1.5 rounded-full bg-lime animate-ping" />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line/60 pb-2">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold text-lime">
            {item.period}
          </span>
          <span className="rounded-full border border-line bg-surface/80 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
            {item.category}
          </span>
        </div>
        <span className="label-mono text-xs">
          ENTRY // {String(idx + 1).padStart(2, "0")}
        </span>
      </div>

      <h2 className="mt-3 font-display text-2xl text-foreground sm:text-3xl">
        {item.title}
      </h2>
      <p className="mt-1 font-mono text-xs text-muted-foreground/90 sm:text-sm">
        {item.role}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {item.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {item.highlights.map((hl) => (
          <li
            key={hl}
            className="flex items-center gap-1.5 rounded-md border border-line/60 bg-surface/50 px-2.5 py-1 font-mono text-xs text-foreground/80"
          >
            <span className="text-lime" aria-hidden="true">
              ▹
            </span>
            <span>{hl}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LogPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="page-enter mx-auto max-w-4xl px-5 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-12">
        <header>
          <p className="label-mono">
            <DecryptedText
              text="# ARCHIVE // TIMELINE"
              speed={25}
              sequential
              animateOn="view"
              encryptedClassName="text-lime"
            />
          </p>

          <h1 className="mt-4 break-words font-display text-5xl leading-[1.05] sm:text-7xl md:text-8xl">
            The Engineering <em className="italic text-lime not-italic">Log</em>
            .
          </h1>

          {/* Constant two-line container matching final state size */}
          <div className="mt-6 max-w-xl h-[3.25rem] sm:h-[3.5rem]">
            <TextType
              text="Milestones, career transitions, competitive programming, and education in chronological sequence."
              typingSpeed={14}
              loop={false}
              showCursor={true}
              cursorCharacter="|"
              className="block w-full font-mono text-sm leading-relaxed text-foreground/90 sm:text-base"
            />
          </div>
        </header>

        {/* Timeline list */}
        <div className="relative mt-16 border-l border-line pl-6 sm:pl-8">
          {entries.map((item, idx) => (
            <TimelineEntryItem key={item.title} item={item} idx={idx} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col justify-between gap-4 rounded-xl border border-line bg-surface/70 p-6 backdrop-blur-md sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-2xl">
              Want to build something together?
            </h3>
            <p className="font-mono text-xs text-muted-foreground">
              Always open to discussing new roles, contracts, and engineering
              challenges.
            </p>
          </div>
          <Link
            to="/contact"
            data-crosshair-target
            className="inline-flex items-center gap-2 rounded-lg border border-lime bg-lime px-4 py-2 font-mono text-xs font-medium text-black transition-all hover:bg-lime/90 sm:text-sm"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
