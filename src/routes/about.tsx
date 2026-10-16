import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SiteHeader } from "@/components/SiteHeader";
import DecryptedText from "@/components/fx/DecryptedText";
import { PageBackdrop } from "@/components/fx/PageBackdrop";
import { HandNote } from "@/components/fx/HandNote";
import {
  ArrowUpRight,
  FileText,
  Code2,
  Clock,
  FolderGit2,
  Film,
  Camera,
  Trophy,
  Compass,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Aadhith C J" },
      {
        name: "description",
        content:
          "Background, engineering philosophy, and personal profile of Aadhith C Joseph.",
      },
      { property: "og:title", content: "About - Aadhith C J" },
      {
        property: "og:description",
        content:
          "Software engineering, backend, cloud, and beyond-code passions.",
      },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: About,
});

const skillsPreview = [
  "React",
  "TypeScript",
  "Node.js",
  "Docker",
  "PostgreSQL",
  "Python",
];

const interests = [
  {
    num: "01",
    tag: "MOTION",
    title: "Videography & Motion Graphics",
    icon: Film,
    note: "Crafting visual stories, rhythm-based pacing, and cinematic motion edits. Delivered 50+ social media videos.",
    color: "bg-[#CE4760] text-white",
    borderHover: "hover:border-[#CE4760]",
    accent: "#CE4760",
    quip: "frame by frame",
  },
  {
    num: "02",
    tag: "35MM",
    title: "Street & Architecture Photography",
    icon: Camera,
    note: "Framing light, perspective, geometry, and everyday street compositions on digital and vintage glass.",
    color: "bg-[#42BFDD] text-black",
    borderHover: "hover:border-[#42BFDD]",
    accent: "#42BFDD",
    quip: "35mm, not 35 tabs",
  },
  {
    num: "03",
    tag: "THE PITCH",
    title: "Football (The Beautiful Game)",
    icon: Trophy,
    note: "Playing weekly and following the beautiful game with enduring passion. Tactical appreciation & team chemistry.",
    color: "bg-[#F1BE05] text-black",
    borderHover: "hover:border-[#F1BE05]",
    accent: "#F1BE05",
    quip: "yes, I'll talk tactics",
  },
  {
    num: "04",
    tag: "ON THE ROAD",
    title: "Road Trips & Travelling",
    icon: Compass,
    note: "Exploring uncharted terrain, mountain highways, regional food cultures, and spontaneous road trips.",
    color: "bg-[#FF7700] text-black",
    borderHover: "hover:border-[#FF7700]",
    accent: "#FF7700",
    quip: "no GPS, just vibes",
  },
];

function About() {
  const [accent, setAccent] = useState("#F1BE05");
  const [picked, setPicked] = useState(false);
  const pick = (color: string) => {
    setAccent(color);
    setPicked(true);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <PageBackdrop accent={accent} />
      <SiteHeader />
      <main className="page-enter relative z-10 mx-auto max-w-3xl px-5 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-12">
        {/* Editorial Introduction */}
        <p className="label-mono">
          <DecryptedText
            text="# README.md // PROFILE"
            speed={25}
            sequential
            animateOn="view"
            encryptedClassName="text-lime"
          />
        </p>

        <h1 className="mt-4 break-words font-display text-5xl sm:text-6xl md:text-7xl">
          Hi, I'm{" "}
          <em className="italic text-lime not-italic font-normal">Aadhith CJ</em>
          .
        </h1>

        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-foreground/90 font-sans">
          Computer Science graduate from Kerala. I build full-stack
          applications, experiment with AI, and enjoy making the complicated
          stuff work.
        </p>

        {/* Tactile Expertise Tags */}
        <div className="mt-6 flex flex-wrap gap-2 pt-1">
          {[
            { label: "FULL-STACK", dot: "bg-[#FF7700]" },
            { label: "DEVOPS", dot: "bg-[#42BFDD]" },
            { label: "APPLIED AI", dot: "bg-[#F1BE05]" },
            { label: "VISUAL STORYTELLING", dot: "bg-[#CE4760]" },
          ].map((tag) => (
            <span
              key={tag.label}
              className="inline-flex items-center gap-2 px-3 py-1 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] bg-card text-foreground"
            >
              <span className={`size-1.5 rounded-full ${tag.dot}`} />
              {tag.label}
            </span>
          ))}
        </div>

        {/* Section 1: Explore Portfolio (Playful Control Panel) */}
        <div className="relative flex items-center justify-between mb-4 mt-16 sm:mt-20">
          <h2 className="label-mono">
            <DecryptedText
              text="## explore portfolio // control panel"
              speed={25}
              sequential
              animateOn="view"
              encryptedClassName="text-lime"
            />
          </h2>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest hidden sm:inline">
            [3 INTERACTIVE MODULES]
          </span>

          <AnimatePresence>
            {!picked && (
              <motion.div
                exit={{ opacity: 0 }}
                className="hidden xl:block absolute -right-48 -top-6 w-40"
              >
                <HandNote flip rotate={4}>
                  pick a door
                </HandNote>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid gap-3.5 border-t-2 border-border pt-4">
          {/* Card 01: Featured Projects */}
          <Link
            to="/projects"
            data-crosshair-target
            onMouseEnter={() => pick("#F1BE05")}
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-2 border-border shadow-[4px_4px_0px_0px_var(--border)] bg-card p-4 sm:p-5 transition-all duration-150 hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_0px_var(--border)] hover:border-[#F1BE05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
          >
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="grid size-10 shrink-0 place-items-center border-2 border-border bg-[#F1BE05] text-black shadow-[2px_2px_0px_0px_var(--border)]">
                <FolderGit2 className="size-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-muted-foreground">
                    01 //
                  </span>
                  <h3 className="font-display text-xl text-foreground font-bold group-hover:text-black dark:group-hover:text-white transition-colors">
                    Featured Projects
                  </h3>
                </div>
                <p className="font-mono text-xs text-muted-foreground mt-0.5">
                  Retina, DevOpsHub, Inventory System, Roots & CV Management.
                </p>
              </div>
            </div>
            <div className="self-end sm:self-auto shrink-0">
              <span className="inline-flex items-center gap-1.5 border border-border bg-surface-secondary px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-foreground group-hover:bg-[#F1BE05] group-hover:text-black group-hover:border-black transition-colors">
                OPEN PROJECTS ↗
              </span>
            </div>
          </Link>

          {/* Card 02: Technical Stack */}
          <Link
            to="/skills"
            data-crosshair-target
            onMouseEnter={() => pick("#42BFDD")}
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-2 border-border shadow-[4px_4px_0px_0px_var(--border)] bg-card p-4 sm:p-5 transition-all duration-150 hover:-translate-y-1 hover:translate-x-0.5 hover:shadow-[6px_6px_0px_0px_var(--border)] hover:border-[#42BFDD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
          >
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="grid size-10 shrink-0 place-items-center border-2 border-border bg-[#42BFDD] text-black shadow-[2px_2px_0px_0px_var(--border)] group-hover:-rotate-12 transition-transform duration-200">
                <Code2 className="size-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-muted-foreground">
                    02 //
                  </span>
                  <h3 className="font-display text-xl text-foreground font-bold group-hover:text-black dark:group-hover:text-white transition-colors">
                    Technical Stack
                  </h3>
                </div>
                {/* Micro tech preview tags */}
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {skillsPreview.map((skill) => (
                    <span
                      key={skill}
                      className="border border-border/60 bg-surface-secondary px-1.5 py-0.5 font-mono text-[10px] text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="self-end sm:self-auto shrink-0">
              <span className="inline-flex items-center gap-1.5 border border-border bg-surface-secondary px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-foreground group-hover:bg-[#42BFDD] group-hover:text-black group-hover:border-black transition-colors">
                EXPLORE STACK ↗
              </span>
            </div>
          </Link>

          {/* Card 03: Timeline & Milestones */}
          <Link
            to="/log"
            data-crosshair-target
            onMouseEnter={() => pick("#FF7700")}
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-2 border-border shadow-[4px_4px_0px_0px_var(--border)] bg-card p-4 sm:p-5 transition-all duration-150 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)] hover:border-[#FF7700] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
          >
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="grid size-10 shrink-0 place-items-center border-2 border-border bg-[#FF7700] text-black shadow-[2px_2px_0px_0px_var(--border)]">
                <Clock className="size-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-muted-foreground">
                    03 //
                  </span>
                  <h3 className="font-display text-xl text-foreground font-bold group-hover:text-black dark:group-hover:text-white transition-colors">
                    Timeline & Milestones
                  </h3>
                  {/* Small animated timeline badge */}
                  <span className="hidden sm:inline-flex items-center gap-1.5 border border-border bg-surface-secondary px-2 py-0.5 font-mono text-[10px] font-bold text-foreground">
                    <span className="size-1.5 rounded-full bg-[#FF7700]" />
                    2022 — 2026
                  </span>
                </div>
                <p className="font-mono text-xs text-muted-foreground mt-0.5">
                  B.Tech degree, internships, leadership roles & hackathons.
                </p>
              </div>
            </div>
            <div className="self-end sm:self-auto shrink-0">
              <span className="inline-flex items-center gap-1.5 border border-border bg-surface-secondary px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-foreground group-hover:bg-[#FF7700] group-hover:text-black group-hover:border-black transition-colors">
                VIEW TIMELINE ↗
              </span>
            </div>
          </Link>
        </div>

        {/* Section 2: Dedicated Neo-Brutalist Resume Callout with popup hover */}
        <div className="mt-8 border-2 border-border shadow-[5px_5px_0px_0px_var(--border)] bg-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 relative overflow-hidden transition-all duration-150 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_var(--border)] hover:border-[#F1BE05] group">
          {/* Subtle decorative corner accent */}
          <div className="absolute top-0 right-0 bg-[#F1BE05] text-black font-mono text-[9px] font-black uppercase px-2 py-0.5 border-b-2 border-l-2 border-border">
            PDF // CURRICULUM VITAE
          </div>

          <div className="flex items-start gap-4">
            <div className="grid size-11 shrink-0 place-items-center border-2 border-border bg-foreground text-background shadow-[3px_3px_0px_0px_var(--border)]">
              <FileText className="size-5" />
            </div>
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-wider text-foreground">
                NEED THE SHORT VERSION?
              </p>
              <p className="font-mono text-xs text-muted-foreground mt-1 max-w-md">
                Education, experience, and projects — formatted in one clean,
                printable single-page PDF.
              </p>
            </div>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            data-crosshair-target
            className="inline-flex items-center justify-center gap-2 border-2 border-border bg-[#F1BE05] text-black px-5 py-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_var(--border)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-x-1 active:translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground shrink-0"
          >
            <span>GET MY RESUME</span>
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        {/* Section 3: Beyond Code (Collection of Interests) */}
        <div className="mt-10 sm:mt-12 flex items-center justify-between mb-4">
          <h2 className="label-mono">
            <DecryptedText
              text="## beyond code // personal archive"
              speed={25}
              sequential
              animateOn="view"
              encryptedClassName="text-lime"
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-t-2 border-border pt-4">
          {interests.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                data-crosshair-target
                onMouseEnter={() => setAccent(item.accent)}
                className={`group relative flex flex-col justify-between border-2 border-border bg-card p-4 sm:p-5 shadow-[4px_4px_0px_0px_var(--border)] transition-all duration-150 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)] ${item.borderHover}`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-3 right-3 rotate-3 border-2 border-border px-2 py-0.5 font-hand text-base shadow-[2px_2px_0px_0px_var(--border)] opacity-0 translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:-translate-y-0.5 ${item.color}`}
                >
                  {item.quip}
                </span>
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[11px] font-bold text-muted-foreground">
                      {item.num} // {item.tag}
                    </span>
                    <div
                      className={`grid size-8 place-items-center border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] transition-transform duration-200 group-hover:rotate-6 ${item.color}`}
                    >
                      <Icon className="size-4" />
                    </div>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl text-foreground group-hover:text-lime transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs leading-relaxed text-muted-foreground mt-2">
                    {item.note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 5: Deliberate Terminal Ending */}
        <div className="mt-16 sm:mt-20 border-2 border-dashed border-border/60 p-6 sm:p-8 bg-card/60 text-center flex flex-col items-center justify-center gap-3 shadow-xs">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <span className="size-2 rounded-full bg-status-green" />
            END OF README.md // READY TO COLLABORATE?
          </div>
          <p className="font-mono text-xs text-muted-foreground max-w-md">
            Have an open software engineering role, contract project, or technical
            idea? Let's build something practical and reliable.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              data-crosshair-target
              className="inline-flex items-center gap-2 border-2 border-border bg-foreground text-background px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_var(--border)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              GET IN TOUCH <span>→</span>
            </Link>
            <Link
              to="/"
              data-crosshair-target
              className="inline-flex items-center gap-2 border-2 border-border bg-card text-foreground px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_var(--border)] hover:bg-surface-secondary transition-all"
            >
              RETURN HOME
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

