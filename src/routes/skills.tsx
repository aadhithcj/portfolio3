import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import DecryptedText from "@/components/fx/DecryptedText";
import TextType from "@/components/fx/TextType";
import BorderGlow from "@/components/fx/BorderGlow";
import { Terminal, Cpu, Cloud, Layers, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Tech Stack — Aadhith C Joseph" },
      {
        name: "description",
        content:
          "Full-stack development, DevOps infrastructure, AI/ML models, and system architecture skills of Aadhith C Joseph.",
      },
      {
        property: "og:title",
        content: "Skills & Tech Stack — Aadhith C Joseph",
      },
      {
        property: "og:description",
        content:
          "Interactive breakdown of core engineering tools, frameworks, and proficiencies.",
      },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: SkillsPage,
});

interface SkillCategory {
  id: string;
  number: string;
  name: string;
  description: string;
  icon: typeof Terminal;
  skills: Array<{ name: string; note: string }>;
  project?: {
    name: string;
    slug: string;
    description: string;
    stack: string[];
  };
}

const categories: SkillCategory[] = [
  {
    id: "languages",
    number: "01",
    name: "Languages & Foundations",
    description: "Programming fundamentals, problem-solving, and core syntax.",
    icon: Terminal,
    skills: [
      {
        name: "Python",
        note: "Data structures, automation scripts & backend service logic",
      },
      {
        name: "Java",
        note: "Object-oriented programming, data structures & algorithms",
      },
      {
        name: "C",
        note: "Systems programming, memory management & pointer fundamentals",
      },
      {
        name: "SQL",
        note: "Relational queries, database schemas, filtering & data extraction",
      },
    ],
    project: {
      name: "Inventory System",
      slug: "inventory",
      description:
        "Desktop stock and billing application with SQLite database.",
      stack: ["Python", "PyQt6", "SQLite"],
    },
  },
  {
    id: "fullstack",
    number: "02",
    name: "Web & Full-Stack",
    description:
      "Frontend development, backend services, and database-driven applications.",
    icon: Layers,
    skills: [
      {
        name: "React",
        note: "Component hierarchy, client state & modern UI development",
      },
      {
        name: "TypeScript & JavaScript",
        note: "Typed application logic, async workflows & modern ESNext",
      },
      {
        name: "HTML & CSS",
        note: "Semantic document structure, responsive layouts & custom styling",
      },
      {
        name: "Tailwind CSS",
        note: "Utility-first design systems, responsive variants & dark mode",
      },
      {
        name: "Flask",
        note: "RESTful API endpoints, request routing & backend services",
      },
      {
        name: "REST APIs",
        note: "JSON contracts, HTTP status protocols & endpoint authentication",
      },
      {
        name: "PostgreSQL & SQLite",
        note: "Relational schemas, ACID transactions & indexed queries",
      },
      {
        name: "Supabase",
        note: "PostgreSQL database hosting, authentication & web data storage",
      },
    ],
    project: {
      name: "CV Management System",
      slug: "cv-sorting",
      description:
        "Web interface and database-backed resume screening platform.",
      stack: ["React", "TypeScript", "Supabase"],
    },
  },
  {
    id: "devops",
    number: "03",
    name: "DevOps & Infrastructure",
    description:
      "Containerization, CI/CD, deployment, and operational tooling.",
    icon: Cloud,
    skills: [
      {
        name: "Docker & Docker Compose",
        note: "Multi-container services, reproducibility & image optimization",
      },
      {
        name: "GitHub Actions",
        note: "Automated CI test runners, build pipelines & deployment",
      },
      {
        name: "Linux & Bash",
        note: "Command-line administration, process control & shell automation",
      },
      {
        name: "AWS EC2",
        note: "Cloud virtual compute instances, network access & deployment",
      },
      {
        name: "pytest",
        note: "Automated test suites, unit testing & backend API validation",
      },
      {
        name: "Git",
        note: "Version control, branch protection, pull requests & team workflows",
      },
    ],
    project: {
      name: "DevOpsHub",
      slug: "devopshub",
      description:
        "Containerized backend, database, CI/CD, and cloud deployment.",
      stack: ["Docker", "GitHub Actions", "Linux", "AWS EC2"],
    },
  },
  {
    id: "mobile-ai",
    number: "04",
    name: "Mobile, AI & Computer Vision",
    description:
      "Native Android development, on-device inference, and computer vision.",
    icon: Cpu,
    skills: [
      {
        name: "Kotlin & Android Studio",
        note: "Modern native Android development, coroutines & Jetpack libraries",
      },
      {
        name: "Jetpack Compose",
        note: "Declarative UI architecture, reactive state & Material design",
      },
      {
        name: "CameraX",
        note: "High-throughput live camera streaming & frame analysis pipelines",
      },
      {
        name: "OpenCV",
        note: "Computer vision preprocessing, color filtering & contour analysis",
      },
      {
        name: "TensorFlow Lite",
        note: "Quantised neural network execution on mobile edge devices",
      },
      {
        name: "YOLO & EfficientDet",
        note: "Real-time bounding box object detection & anchor mapping",
      },
      {
        name: "Google ML Kit",
        note: "On-device optical character recognition & text recognition",
      },
      {
        name: "MiDaS",
        note: "Monocular depth estimation neural network for spatial awareness",
      },
    ],
    project: {
      name: "RETINA",
      slug: "retina",
      description: "AI-powered assistive system for visually impaired users.",
      stack: ["Kotlin", "Jetpack Compose", "TensorFlow Lite", "OpenCV"],
    },
  },
];

function SkillsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="page-enter mx-auto max-w-5xl px-5 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-12">
        <header>
          <p className="label-mono">
            <DecryptedText
              text="# TOOLBOX // TECH STACK"
              speed={25}
              sequential
              animateOn="view"
              encryptedClassName="text-lime"
            />
          </p>

          <h1 className="mt-4 break-words font-display text-5xl leading-[1.05] sm:text-7xl md:text-8xl">
            Systems, Stack &{" "}
            <em className="italic text-lime not-italic">Tools</em>.
          </h1>

          {/* Constant two-line container matching final state size */}
          <div className="mt-6 max-w-2xl h-[3.25rem] sm:h-[3.5rem]">
            <TextType
              text="A focused breakdown of the languages, frameworks, infrastructure platforms, and computer vision tools I use in my work."
              typingSpeed={14}
              loop={false}
              showCursor={true}
              cursorCharacter="|"
              className="block w-full font-mono text-sm leading-relaxed text-foreground/90 sm:text-base"
            />
          </div>
        </header>

        {/* Categories Grid (Balanced 2x2) */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <BorderGlow
                key={cat.id}
                edgeSensitivity={4}
                glowColor="95 100 68"
                backgroundColor="var(--surface)"
                borderRadius={15}
                glowRadius={22}
                glowIntensity={1}
                coneSpread={8}
                colors={["#9fff5b", "#34d399", "#a3e635"]}
                className="flex flex-col justify-between border border-line bg-surface p-6 backdrop-blur-md transition-shadow hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-line/60 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="grid size-10 place-items-center rounded-lg border border-line bg-background/80 text-lime">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h2 className="font-display text-2xl text-foreground">
                          {cat.name}
                        </h2>
                        <p className="font-mono text-xs text-muted-foreground">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-semibold text-lime">
                      {cat.number}
                    </span>
                  </div>

                  <ul
                    className="mt-4 divide-y divide-line/40"
                    aria-label={`${cat.name} skills list`}
                  >
                    {cat.skills.map((s) => (
                      <li key={s.name} className="py-2.5 first:pt-1 last:pb-1">
                        <div className="flex items-center gap-2">
                          <span
                            className="text-xs text-lime"
                            aria-hidden="true"
                          >
                            ▹
                          </span>
                          <span className="font-mono text-sm font-medium text-foreground">
                            {s.name}
                          </span>
                        </div>
                        <p className="mt-0.5 pl-4 font-mono text-xs text-muted-foreground">
                          {s.note}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compact project evidence reference */}
                {cat.project && (
                  <div className="mt-6 border-t border-line/60 pt-4">
                    <div className="flex items-center justify-between pb-2">
                      <span className="label-mono text-[10px] text-lime">
                        # APPLIED IN PROJECT
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground/70">
                        EVIDENCE
                      </span>
                    </div>
                    <Link
                      to="/projects/$slug"
                      params={{ slug: cat.project.slug }}
                      data-crosshair-target
                      aria-label={`View ${cat.project.name} case study`}
                      className="group block rounded-lg border border-line/70 bg-background/50 p-3.5 transition-all duration-200 hover:border-lime/60 hover:bg-surface/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-display text-lg text-foreground group-hover:text-lime transition-colors">
                          {cat.project.name}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground group-hover:text-lime transition-colors">
                          Case study <span aria-hidden="true">↗</span>
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">
                        {cat.project.description}
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {cat.project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-line/60 bg-surface px-2 py-0.5 font-mono text-[10px] text-foreground/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </div>
                )}
              </BorderGlow>
            );
          })}
        </div>

        {/* Applied Engineering Link */}
        <div className="mt-16 flex flex-col justify-between gap-4 rounded-xl border border-line bg-surface/70 p-6 backdrop-blur-md sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl text-foreground">
              See these skills in action
            </h2>
            <p className="font-mono text-xs text-muted-foreground">
              Explore the projects where these technologies come together.
            </p>
          </div>
          <Link
            to="/projects"
            data-crosshair-target
            className="inline-flex items-center gap-2 rounded-lg border border-lime bg-lime px-4 py-2 font-mono text-xs font-medium text-black transition-all hover:bg-lime/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 sm:text-sm"
          >
            <span>Explore Projects</span>
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </main>
    </div>
  );
}
