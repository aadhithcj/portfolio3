import {
  createFileRoute,
  Link,
  notFound,
  useNavigate,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { PageBackdrop } from "@/components/fx/PageBackdrop";
import { projects, setLastActiveProjectSlug } from "@/lib/portfolio";
import { CaseStudy } from "@/components/projects/CaseStudy";
import { caseData } from "@/lib/case-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const index = projects.findIndex((p) => p.slug === params.slug);
    if (index < 0) throw notFound();
    return { project: projects[index], index };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    const title = project
      ? `${project.name} - Aadhith C J`
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
      links: [
        {
          rel: "canonical",
          href: project
            ? `https://aadhithcj.site/projects/${project.slug}`
            : "https://aadhithcj.site/projects",
        },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project, index } = Route.useLoaderData();
  const navigate = useNavigate();

  const total = projects.length;
  const previous = projects[(index - 1 + total) % total];
  const next = projects[(index + 1) % total];

  useEffect(() => {
    if (project?.slug) {
      setLastActiveProjectSlug(project.slug);
    }
  }, [project?.slug]);

  // Arrow keys step through case studies, unless the visitor is typing or using a modifier
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
      const el = e.target instanceof Element ? e.target : null;
      if (
        el?.closest(
          "input, textarea, select, [contenteditable=true], [role=dialog]"
        )
      )
        return;
      const target =
        e.key === "ArrowLeft" ? previous : e.key === "ArrowRight" ? next : null;
      if (!target) return;
      e.preventDefault();
      navigate({ to: "/projects/$slug", params: { slug: target.slug } });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [previous, next, navigate]);

  const data = project ? caseData[project.slug] : undefined;
  if (!project || !data || !previous || !next) return null;

  return (
    <div className="min-h-screen bg-background overflow-x-clip relative">
      <PageBackdrop accent={data.accent} />
      <SiteHeader />

      <main
        key={project.slug}
        className="page-enter relative z-10 mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12"
      >
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            to="/projects"
            data-crosshair-target
            className="label-mono inline-flex min-h-9 items-center gap-2 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4"
          >
            <span aria-hidden="true">←</span>
            all projects
          </Link>
          <p className="hidden sm:flex items-center gap-1.5 label-mono">
            <kbd className="border-2 border-border bg-card px-1.5 py-0.5 font-mono text-[10px] font-bold text-foreground shadow-[2px_2px_0px_0px_var(--shadow-color)]">
              ←
            </kbd>
            <kbd className="border-2 border-border bg-card px-1.5 py-0.5 font-mono text-[10px] font-bold text-foreground shadow-[2px_2px_0px_0px_var(--shadow-color)]">
              →
            </kbd>
            <span className="ml-1">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </p>
        </div>

        <CaseStudy
          data={data}
          project={project}
          index={index}
          previous={previous}
          next={next}
        />
      </main>
    </div>
  );
}
