import { Link } from "@tanstack/react-router";
import { type Project } from "@/lib/portfolio";
import { ArrowLeft, ArrowRight, Compass } from "lucide-react";

export interface ProjectArchiveNavProps {
  previous: Project;
  next: Project;
  accentColor?: string;
}

export function ProjectArchiveNav({
  previous,
  next,
  accentColor,
}: ProjectArchiveNavProps) {
  const prevAccent = "#F1BE05"; // Saturated Gold
  const nextAccent = accentColor || "#42BFDD"; // Cyan or Case Study accent

  return (
    <nav
      aria-label="Previous and next project navigation"
      className="border-t-2 border-border pt-10"
    >
      {/* Header bar: archive title + index link */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          <Compass
            className="size-4 text-foreground stroke-[2.5]"
            aria-hidden="true"
          />
          <span className="font-mono text-xs font-black uppercase tracking-wider text-foreground">
            PROJECT ARCHIVE NAVIGATION
          </span>
        </div>
        <Link
          to="/projects"
          data-crosshair-target
          className="group inline-flex items-center gap-2 border-2 border-border bg-card px-3.5 py-1.5 font-mono text-xs font-black uppercase tracking-wider text-foreground shadow-[2px_2px_0px_0px_var(--shadow-color)] hover:bg-[#F1BE05] hover:text-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
        >
          <span className="font-mono text-xs transition-transform group-hover:-translate-x-1">
            ←
          </span>
          <span>ALL PROJECTS INDEX</span>
        </Link>
      </div>

      {/* Chunky Neo-Brutalist Previous & Next Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* PREVIOUS BUTTON */}
        <Link
          to="/projects/$slug"
          params={{ slug: previous.slug }}
          data-crosshair-target
          aria-label={`Previous case study: ${previous.name}`}
          className="group relative flex flex-col justify-between border-2 border-border bg-card p-4 sm:p-5 shadow-[4px_4px_0px_0px_var(--shadow-color)] transition-all duration-150 hover:-translate-y-1 hover:translate-x-0.5 hover:shadow-[7px_7px_0px_0px_var(--shadow-color)] hover:border-foreground active:translate-x-1 active:translate-y-1 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground cursor-pointer min-h-[136px]"
        >
          {/* Top meta strip */}
          <div className="flex items-center justify-between gap-2 border-b-2 border-border/40 pb-2.5 mb-3.5">
            <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-black uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
              <span
                className="size-2 border border-border inline-block"
                style={{ backgroundColor: prevAccent }}
                aria-hidden="true"
              />
              <span>PREVIOUS CASE STUDY</span>
            </div>
            <span className="border border-border/60 bg-surface-secondary px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground truncate max-w-[140px]">
              {previous.category}
            </span>
          </div>

          {/* Action row with tactile mechanical arrow box */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div
              className="size-11 sm:size-12 shrink-0 border-2 border-border bg-surface-secondary text-foreground flex items-center justify-center shadow-[2px_2px_0px_0px_var(--shadow-color)] group-hover:bg-[#F1BE05] group-hover:text-black group-hover:shadow-[3px_3px_0px_0px_var(--shadow-color)] group-hover:-translate-x-0.5 active:translate-x-0 active:translate-y-0 transition-all"
              aria-hidden="true"
            >
              <ArrowLeft className="size-5 sm:size-6 stroke-[3] group-hover:-translate-x-0.5 transition-transform" />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="font-sans text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight text-foreground truncate group-hover:text-primary transition-colors">
                {previous.name}
              </h3>
              <p className="font-mono text-[11px] text-muted-foreground truncate mt-0.5">
                {previous.tagline || `${previous.year} · Case Study`}
              </p>
            </div>
          </div>

          {/* Bottom subtle accent line on hover */}
          <div className="mt-3.5 h-1 w-full bg-border/20 group-hover:bg-[#F1BE05] transition-colors" />
        </Link>

        {/* NEXT BUTTON */}
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          data-crosshair-target
          aria-label={`Next case study: ${next.name}`}
          className="group relative flex flex-col justify-between border-2 border-border bg-card p-4 sm:p-5 shadow-[4px_4px_0px_0px_var(--shadow-color)] transition-all duration-150 hover:-translate-y-1 hover:translate-x-0.5 hover:shadow-[7px_7px_0px_0px_var(--shadow-color)] hover:border-foreground active:translate-x-1 active:translate-y-1 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground cursor-pointer min-h-[136px]"
        >
          {/* Top meta strip */}
          <div className="flex items-center justify-between gap-2 border-b-2 border-border/40 pb-2.5 mb-3.5">
            <span className="border border-border/60 bg-surface-secondary px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground truncate max-w-[140px] order-last sm:order-first">
              {next.category}
            </span>
            <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-black uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors order-first sm:order-last">
              <span>NEXT CASE STUDY</span>
              <span
                className="size-2 border border-border inline-block"
                style={{ backgroundColor: nextAccent }}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Action row with tactile mechanical arrow box */}
          <div className="flex items-center justify-between gap-3.5 sm:gap-4">
            <div className="min-w-0 flex-1 sm:text-right order-last sm:order-first">
              <h3 className="font-sans text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight text-foreground truncate group-hover:text-primary transition-colors">
                {next.name}
              </h3>
              <p className="font-mono text-[11px] text-muted-foreground truncate mt-0.5">
                {next.tagline || `${next.year} · Case Study`}
              </p>
            </div>

            <div
              className="size-11 sm:size-12 shrink-0 border-2 border-border bg-surface-secondary text-foreground flex items-center justify-center shadow-[2px_2px_0px_0px_var(--shadow-color)] group-hover:bg-[#42BFDD] group-hover:text-black group-hover:shadow-[3px_3px_0px_0px_var(--shadow-color)] group-hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 transition-all order-first sm:order-last"
              aria-hidden="true"
            >
              <ArrowRight className="size-5 sm:size-6 stroke-[3] group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* Bottom subtle accent line on hover */}
          <div
            className="mt-3.5 h-1 w-full bg-border/20 group-hover:bg-[#42BFDD] transition-colors"
            style={{
              ["--hover-color" as string]: nextAccent,
            }}
          />
        </Link>
      </div>
    </nav>
  );
}
