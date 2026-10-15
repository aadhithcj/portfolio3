import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import DecryptedText from "@/components/fx/DecryptedText";
import { ArrowUpRight, FileText, Code2, Clock, FolderGit2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aadhith C Joseph" },
      {
        name: "description",
        content:
          "Background, engineering philosophy, and personal profile of Aadhith C Joseph.",
      },
      { property: "og:title", content: "About — Aadhith C Joseph" },
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

const hubs = [
  {
    to: "/projects",
    icon: FolderGit2,
    title: "Featured Projects",
    desc: "Retina, DevOpsHub, Inventory System, Roots, and CV Management System case studies.",
  },
  {
    to: "/skills",
    icon: Code2,
    title: "Technical Stack",
    desc: "Core languages, backend frameworks, DevOps tools, and AI toolkits.",
  },
  {
    to: "/log",
    icon: Clock,
    title: "Timeline & Milestones",
    desc: "B.Tech education, internships, leadership roles, and hackathons.",
  },
];

const beyondCode = [
  {
    title: "Videography & Motion Graphics",
    note: "Crafting visual stories, rhythm-based pacing, and cinematic motion edits. Delivered 50+ social media videos.",
  },
  {
    title: "Photography",
    note: "Framing light, perspective, architecture, and everyday street compositions.",
  },
  {
    title: "Football",
    note: "Playing and following the beautiful game with enduring passion.",
  },
  {
    title: "Travelling",
    note: "Exploring new places, terrains, local cultures, and spontaneous road journeys.",
  },
];

function About() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="page-enter mx-auto max-w-3xl px-5 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-12">
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
          Hi, I'm <em className="italic text-lime not-italic">Aadhith CJ</em>.
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          A Computer Science graduate with hands-on experience in full-stack
          development, REST APIs, PostgreSQL and AI/ML. I build practical,
          reliable software with an emphasis on containerized delivery, sound
          engineering foundations, and clean user experiences.
        </p>

        {/* Dedicated Sections Navigation */}
        <h2 className="label-mono mb-4 mt-16">
          <DecryptedText
            text="## explore portfolio"
            speed={25}
            sequential
            animateOn="view"
            encryptedClassName="text-lime"
          />
        </h2>
        <div className="grid gap-3 border-t border-line pt-4">
          {hubs.map((hub) => {
            const Icon = hub.icon;
            return (
              <Link
                key={hub.to}
                to={hub.to}
                data-crosshair-target
                className="group flex items-center justify-between rounded-xl border border-line bg-surface/60 p-4 transition-all duration-200 hover:border-lime hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2"
              >
                <div className="flex items-center gap-3.5">
                  <div className="grid size-9 place-items-center rounded-lg border border-line bg-background text-lime">
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground group-hover:text-lime">
                      {hub.title}
                    </h3>
                    <p className="font-mono text-xs text-muted-foreground">
                      {hub.desc}
                    </p>
                  </div>
                </div>
                <span className="label-mono text-xs text-muted-foreground group-hover:text-foreground">
                  View →
                </span>
              </Link>
            );
          })}
        </div>

        {/* Resume Download Callout */}
        <div className="mt-6 flex flex-col justify-between gap-3 rounded-xl border border-line/70 bg-surface/30 p-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <FileText className="size-5 text-lime" />
            <div>
              <p className="font-mono text-xs font-medium text-foreground">
                Looking for a formal overview?
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Download my complete resume with education, experience and
                projects.
              </p>
            </div>
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            data-crosshair-target
            className="inline-flex items-center gap-1.5 self-start rounded-lg border border-lime bg-lime px-3.5 py-1.5 font-mono text-xs font-medium text-black transition-all hover:bg-lime/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 sm:self-auto"
          >
            <span>Resume PDF</span>
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        {/* Beyond Code Section */}
        <h2 className="label-mono mb-4 mt-16">
          <DecryptedText
            text="## beyond code"
            speed={25}
            sequential
            animateOn="view"
            encryptedClassName="text-lime"
          />
        </h2>
        <ul className="border-t border-line">
          {beyondCode.map((item) => (
            <li
              key={item.title}
              className="grid gap-2 border-b border-line py-4 md:grid-cols-[14rem_1fr]"
            >
              <div className="flex items-center gap-2 pt-0.5">
                <span className="text-xs text-lime">▹</span>
                <span className="font-medium text-foreground">
                  {item.title}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{item.note}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
