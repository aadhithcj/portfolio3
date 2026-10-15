import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import DecryptedText from "@/components/fx/DecryptedText";
import { Layers, Cloud, Cpu, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Tech Stack — ACJ_" },
      {
        name: "description",
        content:
          "Full-stack development, DevOps infrastructure, AI/ML models, and system architecture skills of Aadhith C Joseph.",
      },
      {
        property: "og:title",
        content: "Skills & Tech Stack — ACJ_",
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

interface AppliedProject {
  initials: string;
  name: string;
  slug: string;
  stack: string;
  badgeBg: string;
  skills: string[];
}

interface SkillCategory {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  count: string;
  markerColor: string;
  accentBg: string;
  iconType: "prompt" | "layers" | "cloud" | "cpu";
  description: string;
  chips: string[];
  stickyNote: string[];
  codeSnippet: React.ReactNode;
  projects: AppliedProject[];
}

const categories: SkillCategory[] = [
  {
    id: "languages",
    number: "01",
    name: "Languages & Foundations",
    subtitle: "PROGRAMMING FUNDAMENTALS, DATA STRUCTURES & MORE ↗",
    count: "12+",
    markerColor: "bg-[#FF7700] text-black",
    accentBg: "bg-[#FF7700]",
    iconType: "prompt",
    description:
      "Programming fundamentals, problem-solving, data structures, algorithms, and low-level concepts that form the base of everything I build.",
    chips: ["Python", "Java", "C", "SQL", "DSA", "OOP"],
    stickyNote: ["IDEAS", "CODE", "INTO", "PRODUCTS"],
    codeSnippet: (
      <div>
        <span className="text-[#9649CB] dark:text-[#C084FC]">def </span>
        <span className="text-[#42BFDD] dark:text-[#38BDF8]">build</span>():
        {"\n"}  ideas = [
        <span className="text-[#FF7700] dark:text-[#FB923C]">"solve"</span>,{" "}
        <span className="text-[#FF7700] dark:text-[#FB923C]">"build"</span>,{" "}
        <span className="text-[#FF7700] dark:text-[#FB923C]">"learn"</span>]
        {"\n"}  <span className="text-[#CE4760] dark:text-[#F87171]">return </span>
        <span className="text-[#22C55E] dark:text-[#4ADE80]">"always curious"</span>
      </div>
    ),
    projects: [
      {
        initials: "IN",
        name: "Inventory System",
        slug: "inventory",
        stack: "PYTHON, SQL, DSA",
        badgeBg: "bg-[#F1BE05]",
        skills: ["Python", "SQL", "DSA", "OOP", "C"],
      },
      {
        initials: "DE",
        name: "DevOpsHub",
        slug: "devopshub",
        stack: "PYTHON, SQL",
        badgeBg: "bg-[#FF7700]",
        skills: ["Python", "SQL", "OOP", "DSA"],
      },
      {
        initials: "RE",
        name: "RETINA",
        slug: "retina",
        stack: "PYTHON, OOP",
        badgeBg: "bg-[#9649CB] text-white",
        skills: ["Python", "Java", "OOP", "DSA", "C"],
      },
    ],
  },
  {
    id: "web",
    number: "02",
    name: "Web & Full-Stack",
    subtitle: "FRONTEND, BACKEND, APIS & DATABASES ↗",
    count: "10+",
    markerColor: "bg-[#F1BE05] text-black",
    accentBg: "bg-[#F1BE05]",
    iconType: "layers",
    description:
      "Component hierarchy, reactive state management, asynchronous workflows, and robust relational schemas engineered for scale.",
    chips: [
      "React",
      "TypeScript",
      "Flask",
      "PostgreSQL",
      "REST APIs",
      "Tailwind CSS",
      "Supabase",
    ],
    stickyNote: ["CLEAN", "STACK", "MODERN", "WEB"],
    codeSnippet: (
      <div>
        <span className="text-[#9649CB] dark:text-[#C084FC]">const </span>
        <span className="text-[#42BFDD] dark:text-[#38BDF8]">stack</span> = &#123;
        {"\n"}  frontend: [
        <span className="text-[#FF7700] dark:text-[#FB923C]">"React"</span>,{" "}
        <span className="text-[#FF7700] dark:text-[#FB923C]">"TypeScript"</span>],
        {"\n"}  backend: [
        <span className="text-[#FF7700] dark:text-[#FB923C]">"Flask"</span>,{" "}
        <span className="text-[#FF7700] dark:text-[#FB923C]">"Postgres"</span>],
        {"\n"}  <span className="text-[#CE4760] dark:text-[#F87171]">build</span>: () =&gt;{" "}
        <span className="text-[#22C55E] dark:text-[#4ADE80]">"production ready"</span>
        {"\n"}&#125;;
      </div>
    ),
    projects: [
      {
        initials: "CV",
        name: "CV Management",
        slug: "cv-sorting",
        stack: "REACT, SUPABASE",
        badgeBg: "bg-[#F1BE05]",
        skills: [
          "React",
          "TypeScript",
          "PostgreSQL",
          "Supabase",
          "REST APIs",
          "Tailwind CSS",
        ],
      },
      {
        initials: "DE",
        name: "DevOpsHub",
        slug: "devopshub",
        stack: "FLASK, POSTGRES",
        badgeBg: "bg-[#FF7700]",
        skills: ["React", "Flask", "PostgreSQL", "REST APIs", "Tailwind CSS"],
      },
      {
        initials: "RO",
        name: "Roots",
        slug: "crop-recommendation",
        stack: "REACT, TS, FLASK",
        badgeBg: "bg-[#22C55E] text-white",
        skills: ["React", "TypeScript", "Flask", "REST APIs", "Tailwind CSS"],
      },
    ],
  },
  {
    id: "devops",
    number: "03",
    name: "DevOps & Infrastructure",
    subtitle: "DEPLOYMENT, CI/CD, CLOUD & SYSTEMS ↗",
    count: "8+",
    markerColor: "bg-[#42BFDD] text-black",
    accentBg: "bg-[#42BFDD]",
    iconType: "cloud",
    description:
      "Automated CI/CD pipelines, multi-container orchestration, Linux process supervision, and reliable cloud compute instances.",
    chips: [
      "Docker",
      "GitHub Actions",
      "Linux",
      "AWS EC2",
      "pytest",
      "CI/CD",
      "Git",
    ],
    stickyNote: ["BUILD", "TEST", "SHIP", "SCALE"],
    codeSnippet: (
      <div>
        <span className="text-muted-foreground">$ </span>
        <span className="text-[#42BFDD] dark:text-[#38BDF8]">docker compose </span>up -d
        {"\n"}<span className="text-[#22C55E]">✓ </span>backend : container healthy
        {"\n"}<span className="text-[#22C55E]">✓ </span>postgres: listening on 5432
        {"\n"}<span className="text-[#22C55E]">✓ </span>actions : tests passed (0 errors)
      </div>
    ),
    projects: [
      {
        initials: "DE",
        name: "DevOpsHub",
        slug: "devopshub",
        stack: "DOCKER, AWS EC2",
        badgeBg: "bg-[#42BFDD]",
        skills: [
          "Docker",
          "GitHub Actions",
          "Linux",
          "AWS EC2",
          "pytest",
          "CI/CD",
          "Git",
        ],
      },
      {
        initials: "CV",
        name: "CV Management",
        slug: "cv-sorting",
        stack: "CI/CD, SECRETS",
        badgeBg: "bg-[#F1BE05]",
        skills: ["GitHub Actions", "Linux", "CI/CD", "Git"],
      },
      {
        initials: "IN",
        name: "Inventory System",
        slug: "inventory",
        stack: "SQLITE, REPO PACKAGING",
        badgeBg: "bg-[#FF7700]",
        skills: ["Linux", "Git", "pytest"],
      },
    ],
  },
  {
    id: "mobile-ai",
    number: "04",
    name: "Mobile, AI & Computer Vision",
    subtitle: "ANDROID, MACHINE LEARNING & VISION ↗",
    count: "10+",
    markerColor: "bg-[#9649CB] text-white",
    accentBg: "bg-[#9649CB]",
    iconType: "cpu",
    description:
      "Native Android applications, real-time computer vision frame pipelines, edge inference models, and scikit-learn predictive classifiers.",
    chips: [
      "Kotlin",
      "Jetpack Compose",
      "OpenCV",
      "TensorFlow Lite",
      "YOLO",
      "ML Kit",
      "Scikit-learn",
    ],
    stickyNote: ["EDGE", "MODELS", "REAL", "TIME"],
    codeSnippet: (
      <div>
        <span className="text-[#9649CB] dark:text-[#C084FC]">val </span>retina ={" "}
        <span className="text-[#42BFDD] dark:text-[#38BDF8]">VisionPipeline</span>()
        {"\n"}retina.<span className="text-[#FF7700] dark:text-[#FB923C]">detect</span>(frame) &#123; obj =&gt;
        {"\n"}  tts.<span className="text-[#CE4760] dark:text-[#F87171]">speak</span>(obj.label, obj.distance)
        {"\n"}&#125;
      </div>
    ),
    projects: [
      {
        initials: "RE",
        name: "RETINA",
        slug: "retina",
        stack: "KOTLIN, OPENCV, TF",
        badgeBg: "bg-[#9649CB] text-white",
        skills: [
          "Kotlin",
          "Jetpack Compose",
          "OpenCV",
          "TensorFlow Lite",
          "YOLO",
          "ML Kit",
        ],
      },
      {
        initials: "RO",
        name: "Roots",
        slug: "crop-recommendation",
        stack: "SCIKIT-LEARN, RANDOM FOREST",
        badgeBg: "bg-[#22C55E] text-white",
        skills: ["Scikit-learn", "AI/ML"],
      },
      {
        initials: "CV",
        name: "CV Management",
        slug: "cv-sorting",
        stack: "RANKING, OCR",
        badgeBg: "bg-[#F1BE05]",
        skills: ["ML Kit", "OCR", "Scikit-learn", "Scoring Algorithms"],
      },
    ],
  },
];

function SkillsPage() {
  const [active, setActive] = useState<number>(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const activeCat = (categories[active] ?? categories[0])!;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <SiteHeader />

      {/* Main Container matching projects page dimensions, padding & split grid */}
      <main className="page-enter mx-auto max-w-7xl px-4 sm:px-8 pt-8 sm:pt-12 pb-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 xl:gap-14 items-start relative w-full min-w-0">
        {/* Left Column: Heading and Editorial Skill Index */}
        <div className="flex flex-col relative w-full min-w-0">
          {/* Eyebrow Label */}
          <p className="label-mono">
            <DecryptedText
              text="# TOOLBOX // TECH STACK"
              speed={25}
              sequential
              animateOn="view"
              encryptedClassName="text-lime"
            />
          </p>

          {/* Heading - exact matching scale as Projects */}
          <h1 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl tracking-tight text-foreground">
            Systems, Stack &{" "}
            <em className="italic text-lime not-italic font-normal">Tools</em>.
          </h1>

          {/* Subtitle - matching text size and mono styling as Projects */}
          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-mono max-w-xl">
            A focused breakdown of the languages, frameworks, infrastructure platforms, and computer vision tools I use in my work.
          </p>

          {/* Floating Playful Accent Top-Right (languages / logic / problem solving / foundations) */}
          <div className="hidden sm:flex absolute right-4 top-2 select-none pointer-events-none items-center gap-3">
            <div className="text-right font-mono text-[9px] uppercase font-bold text-muted-foreground/80 leading-tight">
              LANGUAGES<br />
              LOGIC<br />
              PROBLEM SOLVING<br />
              FOUNDATIONS
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
            <div className="size-11 xl:size-12 border-2 border-border bg-[#42BFDD] shadow-[3px_3px_0px_0px_var(--border)] -rotate-6" />
          </div>

          {/* Numbered Editorial Skill List - matching padding & height of Projects */}
          <div className="mt-10 sm:mt-12 flex flex-col border-t-2 border-border w-full min-w-0" role="list">
            {categories.map((cat, i) => {
              const isSelected = active === i;

              return (
                <div key={cat.id} role="listitem" className="relative w-full min-w-0">
                  <button
                    type="button"
                    onClick={() => {
                      setActive(i);
                      setHoveredSkill(null);
                    }}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    data-crosshair-target
                    className={`w-full min-w-0 overflow-hidden text-left transition-all duration-150 flex items-center justify-between py-3.5 sm:py-5 px-3 sm:px-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground ${
                      isSelected
                        ? "bg-[#F1BE05] text-black border-2 border-border shadow-[4px_4px_0px_0px_var(--border)] my-1 -translate-y-0.5 z-10"
                        : "border-b border-border/40 hover:bg-[#F1BE05]/10 dark:hover:bg-[#F1BE05]/15 hover:border-border/60 hover:-translate-y-0.5 text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-5 min-w-0 flex-1 overflow-hidden">
                      {/* Category Number */}
                      <span
                        className={`font-mono text-xs sm:text-sm font-bold transition-colors shrink-0 ${
                          isSelected ? "text-black" : "text-lime"
                        }`}
                      >
                        {cat.number}
                      </span>

                      {/* Square Icon Badge */}
                      <div
                        className={`size-9 sm:size-11 grid place-items-center border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] shrink-0 transition-transform ${cat.markerColor}`}
                      >
                        {cat.iconType === "prompt" && (
                          <span className="font-mono font-black text-xs sm:text-sm tracking-tighter">
                            &gt;_
                          </span>
                        )}
                        {cat.iconType === "layers" && (
                          <Layers className="size-4 sm:size-5" />
                        )}
                        {cat.iconType === "cloud" && (
                          <Cloud className="size-4 sm:size-5" />
                        )}
                        {cat.iconType === "cpu" && (
                          <Cpu className="size-4 sm:size-5" />
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <div className="min-w-0 flex-1 overflow-hidden">
                        <span
                          className={`block font-display text-xl sm:text-3xl md:text-[34px] leading-tight transition-all truncate ${
                            isSelected
                              ? "font-bold text-black"
                              : "font-normal hover:translate-x-1 hover:text-foreground"
                          }`}
                        >
                          {cat.name}
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

                    {/* Right Count */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0 pl-2">
                      <span
                        className={`font-mono text-xs sm:text-base font-black transition-colors ${
                          isSelected ? "text-black font-bold" : "text-muted-foreground"
                        }`}
                      >
                        {cat.count}
                      </span>
                      {isSelected && (
                        <span className="hidden sm:inline font-mono text-xs font-bold text-black">
                          ●
                        </span>
                      )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Floating Playful Accent Bottom-Left */}
          <div className="mt-10 hidden sm:flex items-center gap-4 select-none">
            <div className="relative">
              {/* Dot matrix grid */}
              <div className="grid grid-cols-4 gap-1.5 opacity-30">
                {Array.from({ length: 16 }).map((_, idx) => (
                  <span
                    key={idx}
                    className="size-1 rounded-full bg-foreground"
                  />
                ))}
              </div>
              <div className="absolute top-1 left-1 size-7 rounded-full border-2 border-border bg-[#FF3C38] shadow-[2.5px_2.5px_0px_0px_var(--border)]" />
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">↖</span>
              <span className="font-mono text-[9px] uppercase font-bold text-muted-foreground tracking-widest leading-tight">
                SELECT<br />
                EXPLORE<br />
                LEARN<br />
                BUILD
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Substantial Neo-Brutalist Inspector Card matching Projects Preview */}
        <aside
          className="w-full min-w-0 max-w-full overflow-hidden sticky top-20 border-2 sm:border-[2.5px] border-border bg-card p-4 sm:p-7 shadow-[5px_5px_0px_0px_var(--border)] sm:shadow-[8px_8px_0px_0px_var(--border)] transition-shadow duration-200 hover:shadow-[10px_10px_0px_0px_var(--border)] relative"
          aria-live="polite"
        >
          {/* Panel Top Header Bar */}
          <div className="flex items-center justify-between border-b-2 border-border/80 pb-3 mb-5">
            <span className="font-mono text-xs font-black uppercase tracking-wider text-foreground">
              SKILL GROUP / {activeCat.number}
            </span>
            <span className="size-2.5 rounded-full bg-[#FF3C38] animate-pulse" />
          </div>

          {/* Visual Mockup Frame - full height matching Projects Preview */}
          <div className="group/frame border-2 border-border bg-surface-secondary/70 p-3 sm:p-6 relative overflow-hidden flex items-center justify-center min-h-[220px] sm:min-h-[290px] select-none transition-colors duration-200 hover:border-foreground/80 w-full min-w-0 max-w-full">
            {/* Subtle dot matrix background */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                backgroundSize: "16px 16px",
              }}
            />

            {/* Tilted Back Accent Card */}
            <div
              className={`absolute w-[220px] sm:w-[330px] h-[110px] sm:h-[160px] border-2 border-border shadow-[4px_4px_0px_0px_var(--border)] -rotate-3 -translate-x-2 sm:-translate-x-4 -translate-y-2 transition-colors duration-200 ${activeCat.accentBg}`}
            />

            {/* Front Editor Window */}
            <div className="relative z-10 w-full max-w-[240px] sm:max-w-[340px] border-2 border-border bg-card shadow-[4px_4px_0px_0px_var(--border)] p-3 sm:p-4">
              {/* Window Controls */}
              <div className="flex items-center gap-1.5 pb-2 border-b border-border/50">
                <span className="size-2.5 rounded-full bg-[#FF3C38] border border-border/40" />
                <span className="size-2.5 rounded-full bg-[#F1BE05] border border-border/40" />
                <span className="size-2.5 rounded-full bg-[#22C55E] border border-border/40" />
              </div>

              {/* Code snippet with syntax colors */}
              <pre className="mt-2.5 font-mono text-[11px] sm:text-[13px] leading-relaxed text-foreground overflow-x-auto">
                <code>{activeCat.codeSnippet}</code>
              </pre>
            </div>

            {/* Tilted Yellow Sticky Note on Right with 3 Sketch Lines */}
            <div className="hidden sm:flex absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-20 items-center gap-1.5 sm:gap-2 pointer-events-none">
              <div className="flex flex-col gap-1 items-end opacity-70">
                <span className="w-2.5 sm:w-3 h-0.5 bg-foreground -rotate-12" />
                <span className="w-2 sm:w-2.5 h-0.5 bg-foreground -rotate-12" />
                <span className="w-1.5 sm:w-2 h-0.5 bg-foreground -rotate-12" />
              </div>

              <div className="border-2 border-border bg-[#F1BE05] text-black shadow-[3px_3px_0px_0px_var(--border)] rotate-3 p-1.5 sm:p-2 text-center font-mono font-black text-[9px] sm:text-[11px] uppercase leading-tight tracking-wider">
                {activeCat.stickyNote.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Category Details Below Mockup */}
          <div className="mt-6 flex flex-col">
            <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-foreground">
              {activeCat.name}
            </h2>
            <p className="mt-2 font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {activeCat.description}
            </p>

            {/* Tech Chips with Interactive Project Highlight on Hover */}
            <div className="mt-4 flex flex-wrap gap-2">
              {activeCat.chips.map((chip) => {
                const isHovered =
                  hoveredSkill?.toLowerCase() === chip.toLowerCase();

                return (
                  <button
                    key={chip}
                    type="button"
                    onMouseEnter={() => setHoveredSkill(chip)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onClick={() =>
                      setHoveredSkill(hoveredSkill === chip ? null : chip)
                    }
                    className={`border-2 border-border px-3 py-1 font-mono text-xs font-bold transition-all duration-150 cursor-pointer select-none ${
                      isHovered
                        ? "bg-[#F1BE05] text-black shadow-[3px_3px_0px_0px_var(--border)] -translate-y-0.5 scale-105 z-10"
                        : "bg-card text-foreground shadow-[2px_2px_0px_0px_var(--border)] hover:bg-[#F1BE05] hover:text-black hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_var(--border)]"
                    }`}
                    title={`Hover to highlight projects using ${chip}`}
                  >
                    {chip}
                  </button>
                );
              })}
            </div>

            {/* Bottom Evidence Strip: APPLIED IN PROJECTS */}
            <div className="mt-6 pt-4 border-t-2 border-border">
              <div className="flex items-center justify-between pb-2.5">
                <span className="font-mono text-xs font-black uppercase tracking-wider text-foreground flex items-center gap-2">
                  <span>APPLIED IN PROJECTS</span>
                  {hoveredSkill && (
                    <span className="text-[10px] font-bold text-black bg-[#F1BE05] px-1.5 py-0.5 border border-border shadow-[1px_1px_0px_0px_var(--border)]">
                      USING: {hoveredSkill.toUpperCase()}
                    </span>
                  )}
                </span>
                <Link
                  to="/projects"
                  data-crosshair-target
                  className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
                >
                  <span>VIEW ALL</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>

              {/* Project Cards Row - Illuminating matching projects on skill hover */}
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {activeCat.projects.map((proj) => {
                  const isMatching = hoveredSkill
                    ? proj.skills.some(
                        (s) =>
                          s.toLowerCase() === hoveredSkill.toLowerCase() ||
                          hoveredSkill.toLowerCase().includes(s.toLowerCase()) ||
                          s.toLowerCase().includes(hoveredSkill.toLowerCase())
                      )
                    : false;

                  return (
                    <Link
                      key={proj.slug}
                      to="/projects/$slug"
                      params={{ slug: proj.slug }}
                      data-crosshair-target
                      className={`border-2 border-border p-2.5 transition-all duration-150 flex items-center gap-2.5 group/proj relative ${
                        hoveredSkill
                          ? isMatching
                            ? "bg-[#F1BE05]/20 shadow-[4px_4px_0px_0px_var(--border)] -translate-y-1 border-foreground ring-1 ring-[#F1BE05]"
                            : "bg-card opacity-35 grayscale-[50%] scale-[0.98]"
                          : "bg-card hover:bg-surface-secondary/90 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_var(--border)]"
                      }`}
                    >
                      {/* Two-letter badge */}
                      <div
                        className={`size-9 sm:size-10 grid place-items-center border-2 border-border font-mono text-xs sm:text-sm font-black text-black shrink-0 shadow-[1.5px_1.5px_0px_0px_var(--border)] transition-transform ${
                          isMatching ? "scale-105 shadow-[2.5px_2.5px_0px_0px_var(--border)]" : ""
                        } group-hover/proj:scale-105 ${proj.badgeBg}`}
                      >
                        {proj.initials}
                      </div>
                      <div className="min-w-0">
                        <h3
                          className={`font-display text-xs sm:text-sm leading-tight truncate transition-colors ${
                            isMatching
                              ? "font-black text-foreground underline decoration-[#F1BE05] decoration-2"
                              : "font-bold text-foreground group-hover/proj:text-lime"
                          }`}
                        >
                          {proj.name}
                        </h3>
                        <p className="font-mono text-[9.5px] text-muted-foreground uppercase truncate mt-0.5">
                          {proj.stack}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
