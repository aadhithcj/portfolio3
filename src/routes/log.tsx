import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { SiteHeader } from "@/components/SiteHeader";
import DecryptedText from "@/components/fx/DecryptedText";
import { PageBackdrop } from "@/components/fx/PageBackdrop";
import { HandNote } from "@/components/fx/HandNote";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/lib/portfolio";

export const Route = createFileRoute("/log")({
  head: () => ({
    meta: [
      { title: "Log - Aadhith C J" },
      {
        name: "description",
        content:
          "Career timeline, milestones, internships, education and achievements of Aadhith C Joseph.",
      },
      { property: "og:title", content: "Log - Aadhith C J" },
      {
        property: "og:description",
        content:
          "Engineering journey, competitive programming, and milestones chronologically archived.",
      },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://aadhithcj.site/log" }],
  }),
  component: LogPage,
});

type Category =
  "Experience" | "Education" | "Award" | "Leadership" | "Research";

interface LogEntry {
  id: string;
  period: string;
  title: string;
  role: string;
  description: string;
  category: Category;
  /** The numbers worth stating, each said once */
  stats: { stat: string; label: string }[];
  /** One extra fact that isn't a number */
  note?: string;
  link?: { slug: string; label: string };
}

const retinaPaper = projects.find((p) => p.slug === "retina")?.researchPaper;

const entries: LogEntry[] = [
  {
    id: "btech",
    period: "2022 — 2026",
    title: "B.Tech in Computer Science and Engineering",
    role: "Carmel College of Engineering and Technology (CCET / KTU)",
    description:
      "Undergraduate curriculum emphasizing algorithms, database design, operating systems, networking, and applied intelligence.",
    category: "Education",
    stats: [{ stat: "8.12", label: "CGPA" }],
    note: "Core: distributed systems, operating systems and relational databases",
    link: { slug: "retina", label: "Final-year project: Retina" },
  },
  {
    id: "icfisn",
    period: retinaPaper?.dates ?? "March 2026",
    title: "Presented Retina at ICFISN 2026",
    role: retinaPaper
      ? `${retinaPaper.conference}, ${retinaPaper.location}`
      : "International Conference on Frontiers in Intelligent Systems & Networks",
    description:
      retinaPaper?.description ??
      "Co-authored and presented research on on-device ML models for accessibility.",
    category: "Research",
    stats: [],
    link: { slug: "retina", label: "Read the Retina case study" },
  },
  {
    id: "arts-secretary",
    period: "2025 — 2026",
    title: "College Arts Secretary",
    role: "Carmel College of Engineering and Technology",
    description:
      "Spearheaded cultural operations and coordinated large-scale logistical workflows across campus departments.",
    category: "Leadership",
    stats: [
      { stat: "03+", label: "multi-day festivals" },
      { stat: "30+", label: "person student teams" },
    ],
  },
  {
    id: "ictak-intern",
    period: "Jan — Feb 2025",
    title: "AI/ML Intern",
    role: "ICT Academy of Kerala, Trivandrum",
    description:
      "Developed and evaluated computer vision and machine-learning models for edge inference and tabular predictive analytics.",
    category: "Experience",
    stats: [{ stat: "05+", label: "real-world datasets evaluated" }],
    note: "Classification and regression model tuning",
    link: { slug: "crop-recommendation", label: "Built during it: Roots" },
  },
  {
    id: "ieeextreme",
    period: "2023",
    title: "IEEEXtreme 17.0",
    role: "Global algorithmic competition",
    description:
      "Competed in IEEE's 24-hour global algorithmic problem-solving marathon, working through graph and dynamic programming problems.",
    category: "Award",
    stats: [{ stat: "#01", label: "college rank, all batches" }],
  },
  {
    id: "freelance-dev",
    period: "2022 — Present",
    title: "Freelance Web & Software Developer",
    role: "Full-Stack Developer",
    description:
      "Architected and deployed responsive web apps, automated data ingestion pipelines, and RESTful API backends for diverse client needs.",
    category: "Experience",
    stats: [{ stat: "04+", label: "production deployments" }],
    note: "PostgreSQL and Supabase schemas, CI/CD container delivery",
  },
  {
    id: "freelance-design",
    period: "2021 — Present",
    title: "Freelance Designer & Video Editor",
    role: "UI/UX & Motion Design",
    description: "UI/UX projects and social media video edits for campaigns.",
    category: "Experience",
    stats: [
      { stat: "100K+", label: "campaign interactions" },
      { stat: "50+", label: "videos edited" },
      { stat: "5+", label: "UI/UX projects" },
    ],
  },
];

const categoryThemes: Record<
  Category,
  { badge: string; node: string; color: string }
> = {
  Education: {
    badge: "bg-[#F1BE05] text-black",
    node: "bg-[#F1BE05]",
    color: "#F1BE05",
  },
  Experience: {
    badge: "bg-[#42BFDD] text-black",
    node: "bg-[#42BFDD]",
    color: "#42BFDD",
  },
  Leadership: {
    badge: "bg-[#FF7700] text-black",
    node: "bg-[#FF7700]",
    color: "#FF7700",
  },
  Award: {
    badge: "bg-[#9649CB] text-white",
    node: "bg-[#9649CB]",
    color: "#9649CB",
  },
  Research: {
    badge: "bg-[#CE4760] text-white",
    node: "bg-[#CE4760]",
    color: "#CE4760",
  },
};

function TimelineEntryItem({
  item,
  onHover,
}: {
  item: LogEntry;
  onHover: () => void;
}) {
  const theme = categoryThemes[item.category];

  return (
    <motion.article
      id={item.id}
      onMouseEnter={onHover}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "80px", amount: 0.05 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative mb-10 last:mb-0 sm:mb-12"
    >
      <div
        className="absolute -left-[35px] sm:-left-[43px] top-1 size-5 sm:size-5.5 border-2 border-border bg-background shadow-[2px_2px_0px_0px_var(--shadow-color)] grid place-items-center transition-transform duration-200 group-hover:scale-110"
        aria-hidden="true"
      >
        <span className={`size-1.5 border border-border/80 ${theme.node}`} />
      </div>

      <div className="flex flex-wrap items-center gap-2.5 border-b-2 border-border/70 pb-2">
        <span className="font-mono text-xs sm:text-[13px] font-black text-lime uppercase tracking-wider">
          {item.period}
        </span>
        <span
          className={`border border-border px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-wider shadow-[1.5px_1.5px_0px_0px_var(--shadow-color)] ${theme.badge}`}
        >
          {item.category}
        </span>
      </div>

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

        {(item.stats.length > 0 || item.note) && (
          <div className="mt-3.5 flex max-w-2xl flex-wrap items-stretch gap-2">
            {item.stats.map((s) => (
              <div
                key={s.label}
                className="flex items-baseline gap-2 border-2 border-border bg-card px-3 py-1.5 shadow-[3px_3px_0px_0px_var(--shadow-color)]"
              >
                <span className="font-display text-xl font-black text-foreground tabular-nums">
                  {s.stat}
                </span>
                <span className="font-mono text-[11px] text-foreground/80">
                  {s.label}
                </span>
              </div>
            ))}
            {item.note && (
              <p className="flex items-center border-2 border-dashed border-border/50 px-3 py-1.5 font-mono text-[11px] text-muted-foreground">
                {item.note}
              </p>
            )}
          </div>
        )}

        {item.link && (
          <Link
            to="/projects/$slug"
            params={{ slug: item.link.slug }}
            data-crosshair-target
            className="mt-3.5 inline-flex items-center gap-1.5 font-mono text-xs font-bold text-foreground underline decoration-2 underline-offset-4 decoration-[#F1BE05] hover:bg-[#F1BE05] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
          >
            {item.link.label}
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        )}
      </div>
    </motion.article>
  );
}

function LogPage() {
  const [accent, setAccent] = useState("#9649CB");
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageBackdrop accent={accent} />
      <SiteHeader />
      <main className="page-enter relative z-10 mx-auto max-w-4xl px-5 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-12">
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
            <em className="text-lime not-italic font-normal">Log</em>.
          </h1>

          <p className="mt-4 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
            Milestones, career transitions, competitive programming, and
            education across my engineering journey.
          </p>
        </header>

        <div
          ref={timelineRef}
          className="relative mt-12 sm:mt-16 border-l-2 border-border pl-6 sm:pl-9"
        >
          <motion.div
            aria-hidden="true"
            style={{ scaleY: fill }}
            className="absolute -left-[2px] top-0 h-full w-[2px] origin-top bg-lime"
          />
          {entries.map((item) => (
            <TimelineEntryItem
              key={item.id}
              item={item}
              onHover={() => setAccent(categoryThemes[item.category].color)}
            />
          ))}
        </div>

        <HandNote className="hidden sm:block mt-10 ml-auto mr-12 w-fit">
          next chapter: you?
        </HandNote>

        <div className="mt-6 flex flex-col justify-between gap-4 border-2 border-border bg-card p-6 sm:p-7 shadow-[5px_5px_0px_0px_var(--shadow-color)] sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              Want to build something together?
            </h3>
            <p className="font-mono text-xs text-muted-foreground mt-1">
              Always open to discussing new roles, contracts, and engineering
              challenges.
            </p>
          </div>
          <Link
            to="/contact"
            data-crosshair-target
            className="inline-flex items-center justify-center gap-2 border-2 border-border bg-[#F1BE05] px-5 py-2.5 font-mono text-xs sm:text-sm font-black text-black shadow-[3px_3px_0px_0px_var(--shadow-color)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_var(--shadow-color)] transition-all shrink-0 uppercase tracking-wider"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="size-4" strokeWidth={2.5} />
          </Link>
        </div>
      </main>
    </div>
  );
}
