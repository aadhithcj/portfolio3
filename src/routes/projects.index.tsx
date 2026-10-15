import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import TextType from "@/components/fx/TextType";
import DecryptedText from "@/components/fx/DecryptedText";
import BorderGlow from "@/components/fx/BorderGlow";
import { projects } from "@/lib/portfolio";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Aadhith C Joseph" },
      {
        name: "description",
        content:
          "Retina, DevOpsHub and other software projects by Aadhith C Joseph.",
      },
      { property: "og:title", content: "Projects — Aadhith C Joseph" },
      {
        property: "og:description",
        content: "A numbered archive of full-stack, DevOps and AI work.",
      },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: Projects,
});

function Projects() {
  const [active, setActive] = useState(0);
  const p = projects[active] ?? projects[0];
  if (!p) return null;
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="page-enter mx-auto grid max-w-5xl gap-10 px-5 pb-20 pt-8 sm:px-6 sm:pt-10 md:grid-cols-[1fr_18rem]">
        <ol>
          {projects.map((x, i) => (
            <li key={x.slug}>
              <Link
                to="/projects/$slug"
                params={{ slug: x.slug }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                data-crosshair-target
                className={`group grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[3rem_1fr_auto] items-baseline border-b py-4 transition-colors duration-200 hover:border-lime/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 rounded-sm ${
                  active === i ? "border-lime/50 bg-surface/40" : "border-line"
                }`}
              >
                <span className="font-mono text-xs text-lime">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`break-words font-display text-3xl transition-all duration-200 sm:text-4xl md:text-6xl ${
                    active === i
                      ? "translate-x-1 sm:translate-x-2 italic text-lime"
                      : "group-hover:translate-x-1 sm:group-hover:translate-x-2 group-hover:italic group-hover:text-lime"
                  }`}
                >
                  {x.name}
                </span>
                <span className="label-mono">{x.year}</span>
              </Link>
            </li>
          ))}
        </ol>
        <aside className="sticky top-8 h-fit" aria-live="polite">
          <BorderGlow
            edgeSensitivity={4}
            glowColor="95 100 68"
            backgroundColor="var(--surface)"
            borderRadius={15}
            glowRadius={22}
            glowIntensity={1}
            coneSpread={8}
            colors={["#9fff5b", "#4ade80", "#22c55e"]}
            className="border border-line bg-surface p-5 shadow-xl backdrop-blur-md"
          >
            <p className="label-mono flex items-center justify-between">
              <DecryptedText
                key={active}
                text={`preview / ${String(active + 1).padStart(2, "0")}`}
                speed={25}
                sequential
                animateOn="view"
                className="label-mono"
                encryptedClassName="text-lime"
              />
              <span className="text-lime">●</span>
            </p>

            <div className="my-5">
              <p className="mb-3 font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
                {p.category}
              </p>

              <div className="relative z-10 grid aspect-square place-items-center rounded-lg border border-line bg-surface font-display text-7xl text-lime shadow-sm">
                {p.name.slice(0, 2)}
              </div>
            </div>

            <div className="min-h-12 text-sm text-foreground">
              <TextType
                key={p.slug}
                text={p.tagline}
                typingSpeed={14}
                loop={false}
                showCursor={true}
                cursorCharacter="|"
                className="text-sm leading-relaxed"
              />
            </div>
            <p className="mt-4 border-t border-line/60 pt-3 font-mono text-xs text-muted-foreground">
              {p.stack.join(" · ")}
            </p>
            <Link
              to="/projects/$slug"
              params={{ slug: p.slug }}
              data-crosshair-target
              className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-lime transition-colors hover:underline"
            >
              view case study →
            </Link>
          </BorderGlow>
        </aside>
      </main>
    </div>
  );
}
