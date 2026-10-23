import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/portfolio";

export type CaseData = {
  accent: string;
  eyebrow: string;
  status?: string;
  title: string;
  tagline: string;
  summary: string;
  stack: string[];
  built: string[];
  problems: { title: string; problem: string; fix: string; learned?: string }[];
  limits?: string[];
  links?: { label: string; href: string }[];
};

export function CaseStudy({
  data,
  project,
  previous,
  next,
}: {
  data: CaseData;
  project: Project;
  previous: Project;
  next: Project;
}) {
  const links = [
    ...(project.repoUrl
      ? [{ label: "Source code", href: project.repoUrl }]
      : []),
    ...(project.demoUrl ? [{ label: "Live demo", href: project.demoUrl }] : []),
    ...(data.links ?? []),
  ];

  return (
    <article className="space-y-14 sm:space-y-16">
      <header className="space-y-5">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs font-bold uppercase">
          <span
            className="size-2.5"
            style={{ background: data.accent }}
            aria-hidden="true"
          />
          <span>{data.eyebrow}</span>
          {data.status && (
            <span className="border-2 border-border bg-[#F1BE05] px-2 py-0.5 text-black shadow-[2px_2px_0px_0px_var(--shadow-color)]">
              {data.status}
            </span>
          )}
        </div>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.94] tracking-tight">
          {data.title}
          <span style={{ color: data.accent }}>.</span>
        </h1>

        <p className="font-display text-2xl sm:text-3xl leading-tight">
          {data.tagline}
        </p>
        <p className="max-w-xl font-mono text-sm leading-relaxed text-muted-foreground">
          {data.summary}
        </p>

        <ul className="flex flex-wrap gap-2 font-mono text-xs font-bold">
          {data.stack.map((s) => (
            <li key={s} className="border border-border bg-card px-2.5 py-1">
              {s}
            </li>
          ))}
        </ul>

        {links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                data-crosshair-target
                className={`inline-flex min-h-11 items-center gap-2 border-2 border-border px-5 py-2.5 font-mono text-xs font-bold shadow-[4px_4px_0px_0px_var(--shadow-color)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_var(--shadow-color)] ${
                  i === 0
                    ? "bg-[#F1BE05] text-black"
                    : "bg-card text-foreground"
                }`}
              >
                {l.label} <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </header>

      <section className="space-y-4">
        <h2 className="border-b-2 border-border pb-2 font-mono text-xs font-black uppercase tracking-wider">
          What I built
        </h2>
        <ul className="space-y-3 font-mono text-sm leading-relaxed">
          {data.built.map((b) => (
            <li key={b} className="flex gap-3">
              <span style={{ color: data.accent }} aria-hidden="true">
                ▸
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="border-b-2 border-border pb-2 font-mono text-xs font-black uppercase tracking-wider">
          Hard parts
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {data.problems.map((p, pIdx) => (
            <div
              key={p.title}
              className="border-2 border-border bg-card p-5 sm:p-6 shadow-[4px_4px_0px_0px_var(--shadow-color)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_var(--shadow-color)] transition-all"
            >
              <div className="font-mono text-[10px] font-black uppercase text-lime mb-1.5 tracking-wider">
                CHALLENGE // {String(pIdx + 1).padStart(2, "0")}
              </div>
              <h3 className="font-sans font-bold text-base sm:text-lg text-foreground leading-snug">
                {p.title}
              </h3>
              <dl className="mt-3.5 space-y-2 font-mono text-xs leading-relaxed text-muted-foreground">
                <div>
                  <dt className="inline font-bold text-foreground">
                    Problem:{" "}
                  </dt>
                  <dd className="inline">{p.problem}</dd>
                </div>
                <div>
                  <dt className="inline font-bold text-foreground">Fix: </dt>
                  <dd className="inline">{p.fix}</dd>
                </div>
                {p.learned && (
                  <div>
                    <dt className="inline font-bold text-foreground">
                      Learned:{" "}
                    </dt>
                    <dd className="inline">{p.learned}</dd>
                  </div>
                )}
              </dl>
            </div>
          ))}
        </div>
      </section>

      {data.limits && data.limits.length > 0 && (
        <section className="space-y-4">
          <h2 className="border-b-2 border-border pb-2 font-mono text-xs font-black uppercase tracking-wider">
            Limits and next steps
          </h2>
          <ul className="space-y-2 font-mono text-sm text-muted-foreground">
            {data.limits.map((l) => (
              <li key={l}>– {l}</li>
            ))}
          </ul>
        </section>
      )}

      <nav
        aria-label="Project navigation"
        className="grid grid-cols-1 gap-4 border-t-2 border-border pt-10 sm:grid-cols-2"
      >
        {[
          { p: previous, label: "← Previous", right: false },
          { p: next, label: "Next →", right: true },
        ].map(({ p, label, right }) => (
          <Link
            key={label}
            to="/projects/$slug"
            params={{ slug: p.slug }}
            data-crosshair-target
            className={`group flex min-h-[110px] flex-col justify-between border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--shadow-color)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--shadow-color)] ${
              right ? "sm:items-end sm:text-right" : ""
            }`}
          >
            <span className="font-mono text-[10px] font-black uppercase text-muted-foreground">
              {label}
            </span>
            <span className="font-display font-normal text-2xl sm:text-3xl transition-all group-hover:translate-x-1 group-hover:italic">
              {p.name}
            </span>
          </Link>
        ))}
      </nav>
    </article>
  );
}
