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
    color: "bg-[#F1BE05] text-black",
    hoverBorder: "hover:border-[#F1BE05]",
  },
  {
    to: "/skills",
    icon: Code2,
    title: "Technical Stack",
    desc: "Core languages, backend frameworks, DevOps tools, and AI toolkits.",
    color: "bg-[#42BFDD] text-black",
    hoverBorder: "hover:border-[#42BFDD]",
  },
  {
    to: "/log",
    icon: Clock,
    title: "Timeline & Milestones",
    desc: "B.Tech education, internships, leadership roles, and hackathons.",
    color: "bg-[#FF7700] text-black",
    hoverBorder: "hover:border-[#FF7700]",
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
          Hi, I'm <em className="italic text-lime not-italic font-normal">Aadhith CJ</em>.
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
        <div className="grid gap-3 border-t-2 border-border pt-4">
          {hubs.map((hub) => {
            const Icon = hub.icon;
            return (
              <Link
                key={hub.to}
                to={hub.to}
                data-crosshair-target
                className={`group flex items-center justify-between rounded-none border-2 border-border shadow-[3px_3px_0px_0px_var(--border)] bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--border)] ${hub.hoverBorder} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`grid size-9 place-items-center rounded-none border-2 border-border ${hub.color}`}
                  >
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground group-hover:text-lime transition-colors">
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
        <div className="mt-6 flex flex-col justify-between gap-3 rounded-none border-2 border-border shadow-[3px_3px_0px_0px_var(--border)] bg-card p-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-none border-2 border-border bg-[#F1BE05] text-black">
              <FileText className="size-4.5" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-foreground">
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
            className="inline-flex items-center gap-1.5 self-start rounded-none border-2 border-border bg-primary px-4 py-2 font-mono text-xs font-bold text-black shadow-[2px_2px_0px_0px_var(--border)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground sm:self-auto"
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
        <ul className="border-t-2 border-border">
          {beyondCode.map((item, idx) => {
            const bulletColors = [
              "text-[#FF7700]",
              "text-[#42BFDD]",
              "text-[#F1BE05]",
              "text-[#9649CB]",
              "text-[#FF3C38]",
            ];
            const bulletColor = bulletColors[idx % bulletColors.length];
            return (
              <li
                key={item.title}
                className="grid gap-2 border-b border-border py-4 md:grid-cols-[14rem_1fr]"
              >
                <div className="flex items-center gap-2 pt-0.5">
                  <span className={`text-xs ${bulletColor} font-bold`}>■</span>
                  <span className="font-medium text-foreground">
                    {item.title}
                  </span>
                </div>
                <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                  {item.note}
                </p>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
