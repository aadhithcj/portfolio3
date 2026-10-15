import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import TextType from "@/components/fx/TextType";
import DecryptedText from "@/components/fx/DecryptedText";
import { projects } from "@/lib/portfolio";
import { RetinaCaseStudy } from "@/components/projects/RetinaCaseStudy";
import { DevOpsHubCaseStudy } from "@/components/projects/DevOpsHubCaseStudy";
import { InventoryCaseStudy } from "@/components/projects/InventoryCaseStudy";
import { RootsCaseStudy } from "@/components/projects/RootsCaseStudy";
import { CvSorterCaseStudy } from "@/components/projects/CvSorterCaseStudy";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const index = projects.findIndex((p) => p.slug === params.slug);
    if (index < 0) throw notFound();
    return { project: projects[index], index };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    const title = project
      ? `${project.name} — Aadhith C Joseph`
      : "Project unavailable";
    const description = project?.tagline ?? "This project could not be found.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:image", content: "/og-image.png" },
        { name: "twitter:image", content: "/og-image.png" },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project, index } = Route.useLoaderData();

  if (!project) return null;

  const p = project;
  const total = projects.length;
  const previous = projects[(index - 1 + total) % total];
  const next = projects[(index + 1) % total];

  if (!previous || !next) return null;

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="page-enter mx-auto max-w-5xl px-5 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12">
        <div className="mb-6">
          <Link
            to="/projects"
            data-crosshair-target
            className="cursor-target label-mono inline-flex min-h-9 items-center gap-2 transition-colors hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4"
          >
            <span aria-hidden="true">←</span>
            all projects
          </Link>
        </div>

        {p.slug === "retina" ? (
          <RetinaCaseStudy project={p} previous={previous} next={next} />
        ) : p.slug === "devopshub" ? (
          <DevOpsHubCaseStudy project={p} previous={previous} next={next} />
        ) : p.slug === "inventory" ? (
          <InventoryCaseStudy project={p} previous={previous} next={next} />
        ) : p.slug === "crop-recommendation" ? (
          <RootsCaseStudy project={p} previous={previous} next={next} />
        ) : p.slug === "cv-sorting" ? (
          <CvSorterCaseStudy project={p} previous={previous} next={next} />
        ) : (
          <>
            {/* Project introduction */}
            <header className="mt-10 border-b border-line pb-10 sm:mt-12 sm:pb-14">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <p className="label-mono text-lime">
                  <DecryptedText
                    text={`project / ${String(index + 1).padStart(2, "0")}`}
                    speed={25}
                    sequential
                    animateOn="view"
                    encryptedClassName="text-lime"
                  />
                </p>

                <span className="text-muted-foreground/60" aria-hidden="true">
                  /
                </span>

                <p className="label-mono">{p.year}</p>

                <span className="text-muted-foreground/60" aria-hidden="true">
                  /
                </span>

                <p className="label-mono text-muted-foreground">{p.category}</p>
              </div>

              <h1 className="mt-5 break-words font-display text-6xl leading-[0.95] sm:text-7xl md:text-9xl">
                {p.name}
              </h1>

              <div className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                <TextType
                  key={p.slug}
                  text={p.tagline}
                  typingSpeed={14}
                  loop={false}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </div>

              {(p.repoUrl || p.demoUrl) && (
                <div className="mt-7 flex flex-wrap gap-3">
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-crosshair-target
                      className="inline-flex min-h-11 items-center justify-center border border-line px-4 py-2 font-mono text-xs transition-colors hover:border-lime hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4"
                    >
                      source code <span aria-hidden="true">↗</span>
                    </a>
                  )}

                  {p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-crosshair-target
                      className="inline-flex min-h-11 items-center justify-center border border-line px-4 py-2 font-mono text-xs transition-colors hover:border-lime hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4"
                    >
                      live demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              )}
            </header>

            {/* Technologies and contributions */}
            <section
              aria-label="Project details"
              className="grid gap-10 border-b border-line py-9 sm:py-10 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-12"
            >
              <div>
                <h2 className="label-mono mb-4">technologies</h2>

                <ul
                  className="flex flex-wrap gap-2"
                  aria-label="Technology stack"
                >
                  {p.stack.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-line bg-surface/60 px-3 py-2 font-mono text-xs text-foreground/90"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="label-mono mb-5">what I built</h2>

                <ol className="space-y-6">
                  {p.points.map((point, i) => (
                    <li
                      key={point}
                      className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-2 text-base leading-relaxed sm:grid-cols-[2rem_minmax(0,1fr)] sm:text-lg"
                    >
                      <span className="pt-1 font-mono text-xs text-lime">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p>{point}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* Research publication, when available */}
            {p.researchPaper && (
              <section
                aria-labelledby="research-heading"
                className="mt-12 border-b border-line pb-10 sm:mt-14 sm:pb-12"
              >
                <p className="label-mono mb-4 text-lime">
                  # research paper // international conference publication
                </p>

                <div className="rounded-xl border border-line bg-surface/60 p-4 backdrop-blur-md sm:p-6">
                  <div className="flex flex-col gap-2 border-b border-line/60 pb-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                    <p className="font-mono text-xs leading-relaxed text-lime">
                      {p.researchPaper.dates}
                    </p>

                    <p className="font-mono text-xs leading-relaxed text-foreground">
                      {p.researchPaper.conference}
                    </p>
                  </div>

                  <h2
                    id="research-heading"
                    className="mt-5 font-display text-2xl leading-tight text-foreground sm:text-3xl"
                  >
                    {p.researchPaper.title}
                  </h2>

                  <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">
                    {p.researchPaper.location}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {p.researchPaper.description}
                  </p>
                </div>
              </section>
            )}

            {/* Previous and next navigation */}
            <nav
              aria-label="Project navigation"
              className="mt-12 grid grid-cols-1 gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-5"
            >
              <Link
                to="/projects/$slug"
                params={{ slug: previous.slug }}
                data-crosshair-target
                aria-label={`Previous project: ${previous.name}`}
                className="group flex min-h-28 flex-col justify-between border border-line p-4 transition-colors hover:border-lime/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4 sm:min-h-32 sm:p-5"
              >
                <span className="label-mono text-muted-foreground transition-colors group-hover:text-lime">
                  <span aria-hidden="true">← </span>previous project
                </span>

                <span className="break-words font-display text-3xl leading-tight transition-all group-hover:translate-x-1 group-hover:italic group-hover:text-lime sm:text-4xl">
                  {previous.name}
                </span>
              </Link>

              <Link
                to="/projects/$slug"
                params={{ slug: next.slug }}
                data-crosshair-target
                aria-label={`Next project: ${next.name}`}
                className="group flex min-h-28 flex-col items-start justify-between border border-line p-4 transition-colors hover:border-lime/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4 sm:min-h-32 sm:items-end sm:p-5 sm:text-right"
              >
                <span className="label-mono text-muted-foreground transition-colors group-hover:text-lime">
                  next project <span aria-hidden="true">→</span>
                </span>

                <span className="break-words font-display text-3xl leading-tight transition-all group-hover:translate-x-1 group-hover:italic group-hover:text-lime sm:text-4xl">
                  {next.name}
                </span>
              </Link>
            </nav>

            <div className="mt-8 text-center">
              <Link
                to="/projects"
                className="cursor-target label-mono inline-flex min-h-10 items-center justify-center transition-colors hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4"
              >
                ← return to project archive
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
