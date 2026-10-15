import { Link } from "@tanstack/react-router";
import { type Project } from "@/lib/portfolio";
import {
  ArrowUpRight,
  Database,
  Layers,
  CheckCircle2,
  Users,
  Briefcase,
  SlidersHorizontal,
  BarChart3,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Scale,
  RefreshCw,
  Cpu,
} from "lucide-react";

interface CvSorterCaseStudyProps {
  project: Project;
  previous: Project;
  next: Project;
}

export function CvSorterCaseStudy({
  project,
  previous,
  next,
}: CvSorterCaseStudyProps) {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero */}
      <header className="border-b border-line pb-8 sm:pb-10">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-lime">
          <span>FULL-STACK / HR TECH / ACADEMIC MINI-PROJECT</span>
          <span className="text-muted-foreground/60">•</span>
          <span>B.TECH COMPUTER SCIENCE · 2024</span>
        </div>

        <h1 className="mt-3 break-words font-display text-5xl leading-[1.04] sm:text-6xl md:text-7xl">
          CV Management System<span className="text-lime">.</span>
        </h1>

        <p className="mt-2 font-display text-xl text-foreground/90 sm:text-2xl">
          Structured candidate information. Smarter recruitment workflows.
        </p>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          A web-based recruitment management application developed as an
          academic mini-project, uniting applicant profile management, job
          postings, skill-based filtering, configurable candidate scoring, and
          recruiter dashboards into a single workflow.
        </p>

        {/* Links & Quick Stats */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              data-crosshair-target
              className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg border border-line bg-surface/80 px-4 py-2 font-mono text-xs font-medium text-foreground transition-all hover:border-lime hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2"
            >
              <span>View source code</span>
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          )}

          <span className="rounded-lg border border-line/60 bg-surface/40 px-3 py-2 font-mono text-xs text-muted-foreground">
            React · TypeScript · Supabase · PostgreSQL · TanStack Query
          </span>
        </div>

        {/* Academic Context Badge */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-line/70 bg-surface/50 px-3 py-1.5 font-mono text-xs text-muted-foreground">
          <GraduationCap className="size-3.5 text-lime" aria-hidden="true" />
          <span>
            B.Tech CSE Mini-Project · APJ Abdul Kalam Technological University
            (KTU)
          </span>
        </div>
      </header>

      {/* Architecture & State Flow */}
      <section aria-labelledby="arch-heading" className="space-y-4">
        <h2 id="arch-heading" className="label-mono text-lime">
          # 01 // SYSTEM ARCHITECTURE & DATA FLOW
        </h2>

        <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md sm:p-6">
          <div className="grid gap-3 sm:grid-cols-4">
            <div className="rounded-lg border border-line/80 bg-background/60 p-3.5">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">01 UI PORTALS</span>
                <Layers className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-base text-foreground">
                React &amp; TypeScript
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Applicant forms · Recruiter hub
              </p>
            </div>

            <div className="rounded-lg border border-line/80 bg-background/60 p-3.5">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">02 CLIENT STATE</span>
                <RefreshCw className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-base text-foreground">
                TanStack Query
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Caching · Mutation invalidation
              </p>
            </div>

            <div className="rounded-lg border border-lime/40 bg-background/80 p-3.5">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">03 SCORING ENGINE</span>
                <SlidersHorizontal className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-base text-foreground">
                Weighted Ranking
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Skills · Experience · Bonuses
              </p>
            </div>

            <div className="rounded-lg border border-line/80 bg-background/60 p-3.5">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">04 PERSISTENCE</span>
                <Database className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-base text-foreground">
                Supabase &amp; Postgres
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Auth · Relational schemas · Roles
              </p>
            </div>
          </div>

          <p className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground">
            The project uses Supabase as its primary backend-as-a-service,
            directly managing PostgreSQL tables for applicants, jobs, and
            application states. TanStack Query synchronizes server mutations
            with client-side cache, enabling responsive filtering, real-time
            status updates, and dynamic candidate sorting without a custom
            middleware server.
          </p>
        </div>
      </section>

      {/* Core Recruitment Workflow */}
      <section aria-labelledby="workflow-heading" className="space-y-4">
        <h2 id="workflow-heading" className="label-mono text-lime">
          # 02 // DUAL-PERSPECTIVE RECRUITMENT WORKFLOW
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Step 1 */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                01 — Applicant Profile &amp; CV Management
              </span>
              <Users className="size-4 text-lime" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Structured multi-step form capturing personal contact information,
              education history, work experience, technical skills,
              certifications, references, languages, and career objectives.
            </p>
            <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-foreground/80">
              <span className="rounded border border-line/60 bg-surface px-1.5 py-0.5">
                Structured CV Form
              </span>
              <span className="rounded border border-line/60 bg-surface px-1.5 py-0.5">
                Client Profile Dashboard
              </span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                02 — Job Postings &amp; Application Intake
              </span>
              <Briefcase className="size-4 text-lime" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Recruiters publish and manage active vacancies with criteria for
              department, job type, salary brackets, and required skills.
              Applicants can browse open listings and apply directly.
            </p>
            <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-foreground/80">
              <span className="rounded border border-line/60 bg-surface px-1.5 py-0.5">
                Role Management
              </span>
              <span className="rounded border border-line/60 bg-surface px-1.5 py-0.5">
                Status Pipeline
              </span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                03 — Configurable Candidate Sorting
              </span>
              <SlidersHorizontal
                className="size-4 text-lime"
                aria-hidden="true"
              />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Recruiters configure scoring weights to evaluate candidates based
              on role priorities: tuning parameters for skill match, years of
              experience, certifications, language abilities, and references.
            </p>
            <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-foreground/80">
              <span className="rounded border border-line/60 bg-surface px-1.5 py-0.5">
                Multi-Factor Weights
              </span>
              <span className="rounded border border-line/60 bg-surface px-1.5 py-0.5">
                Custom Criteria Sorting
              </span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                04 — Recruiter Analytics &amp; Pipeline
              </span>
              <BarChart3 className="size-4 text-lime" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              A centralized recruiter dashboard featuring application trends
              over time, experience-distribution breakdowns, candidate status
              trackers, and interview coordination tools.
            </p>
            <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-foreground/80">
              <span className="rounded border border-line/60 bg-surface px-1.5 py-0.5">
                Application Trends
              </span>
              <span className="rounded border border-line/60 bg-surface px-1.5 py-0.5">
                Interview Scheduling
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Candidate Scoring Engine */}
      <section aria-labelledby="scoring-heading" className="space-y-4">
        <h2 id="scoring-heading" className="label-mono text-lime">
          # 03 // CONFIGURABLE CANDIDATE SCORING CRITERIA
        </h2>

        <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md sm:p-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Rather than relying on an opaque algorithm, the application
            implements a transparent, multi-attribute scoring model in{" "}
            <code className="text-lime">SortingPage.tsx</code>. Recruiters
            adjust slider weights depending on the role&apos;s specific needs:
          </p>

          <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-lg border border-line/70 bg-background/50 p-3">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">PRIMARY WEIGHT</span>
                <Scale className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-sm text-foreground">
                Skills Match Weight
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Direct overlap between profile tags and position requirements
              </p>
            </div>

            <div className="rounded-lg border border-line/70 bg-background/50 p-3">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">PRIMARY WEIGHT</span>
                <Briefcase className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-sm text-foreground">
                Experience Weight
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Normalized duration and seniority in relevant industry positions
              </p>
            </div>

            <div className="rounded-lg border border-line/70 bg-background/50 p-3">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">PRIMARY WEIGHT</span>
                <ShieldCheck className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-sm text-foreground">
                Role Match Weight
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Specific title, department, and candidate objective
                compatibility
              </p>
            </div>

            <div className="rounded-lg border border-line/70 bg-background/50 p-3">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">CREDENTIAL BONUS</span>
                <Sparkles className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-sm text-foreground">
                Certification Bonus
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Configurable point uplift for verified external credentials
              </p>
            </div>

            <div className="rounded-lg border border-line/70 bg-background/50 p-3">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">
                  VERIFICATION BONUS
                </span>
                <CheckCircle2 className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-sm text-foreground">
                References Bonus
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Additional scoring weighting for substantiated manager
                references
              </p>
            </div>

            <div className="rounded-lg border border-line/70 bg-background/50 p-3">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">COMMUNICATION</span>
                <Users className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-sm text-foreground">
                Languages Weight
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Evaluation of regional and global multilingual capabilities
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-line/60 bg-surface/40 p-3 font-mono text-xs text-muted-foreground">
            <span className="font-semibold text-lime">
              Decision Support Notice:{" "}
            </span>
            Candidate ranking is explicitly framed as a recruiter
            decision-support tool, not an automated filtering barrier.
            Transparency ensures hiring teams understand why applicants rank
            where they do and can review profiles directly without algorithmic
            prejudice.
          </div>
        </div>
      </section>

      {/* Engineering Challenges & Solutions */}
      <section aria-labelledby="challenges-heading" className="space-y-4">
        <h2 id="challenges-heading" className="label-mono text-lime">
          # 04 // CHALLENGES & PRACTICAL LEARNINGS
        </h2>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-foreground">
              <Scale className="size-4 text-lime" aria-hidden="true" />
              <span>Multi-Factor Score Normalization</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Disparate fields (binary certifications, numeric years of
              experience, and categorical skill arrays) required mathematical
              normalization so no single attribute unfairly distorted the
              ranking curve.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-foreground">
              <RefreshCw className="size-4 text-lime" aria-hidden="true" />
              <span>State Sync via TanStack Query</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Recruiter updates to candidate stages and interview schedules
              needed instantaneous propagation. TanStack Query
              query-invalidation kept dashboard statistics and sorting tables
              synchronized with zero lag.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-foreground">
              <Database className="size-4 text-lime" aria-hidden="true" />
              <span>Relational Postgres Architecture</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Structuring normalized relational tables in Supabase for user
              profiles, detailed CV records, job postings, application
              submissions, and interview schedules with relational foreign-key
              integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Context & Future AI Evolution */}
      <section
        aria-labelledby="academic-heading"
        className="rounded-xl border border-line bg-surface/40 p-5 backdrop-blur-md"
      >
        <div className="flex flex-col gap-2 border-b border-line/60 pb-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="size-4 text-lime" aria-hidden="true" />
            <h3
              id="academic-heading"
              className="font-display text-lg text-foreground"
            >
              Academic Collaboration &amp; Future AI Evolution
            </h3>
          </div>
          <span className="font-mono text-[11px] font-semibold text-lime">
            B.Tech CSE Mini-Project
          </span>
        </div>

        <div className="mt-3 space-y-3 font-mono text-xs leading-relaxed text-muted-foreground">
          <p>
            Developed collaboratively as a 3-person B.Tech Computer Science and
            Engineering mini-project submitted to APJ Abdul Kalam Technological
            University (KTU). My core contributions centered on frontend
            architecture, Supabase data layer integration, the configurable
            candidate scoring engine, and the recruiter analytics dashboard.
          </p>

          <div className="rounded-lg border border-lime/30 bg-lime/5 p-3 text-foreground/90">
            <div className="flex items-center gap-2 text-lime font-semibold">
              <Cpu className="size-3.5" aria-hidden="true" />
              <span>Roadmap: AI &amp; LLM Integration</span>
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Because this system was architected before the modern generative
              AI wave, the next iteration is slated to integrate local LLM
              agents for automated CV parsing, contextual semantic skill
              matching (moving beyond strict keyword matching), and dynamic
              interview question generation tailored to candidate experience
              gaps.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <footer className="border-t border-line pt-8">
        <nav
          aria-label="Previous and next projects"
          className="grid gap-3 sm:grid-cols-2"
        >
          <Link
            to="/projects/$slug"
            params={{ slug: previous.slug }}
            data-crosshair-target
            className="group flex min-h-24 flex-col justify-between rounded-xl border border-line bg-surface/40 p-4 transition-all hover:border-lime/60 hover:bg-surface/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
          >
            <span className="label-mono text-[10px] text-muted-foreground group-hover:text-lime">
              ← previous project
            </span>
            <span className="font-display text-xl text-foreground group-hover:text-lime">
              {previous.name}
            </span>
          </Link>

          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            data-crosshair-target
            className="group flex min-h-24 flex-col items-start justify-between rounded-xl border border-line bg-surface/40 p-4 transition-all hover:border-lime/60 hover:bg-surface/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime sm:items-end sm:text-right"
          >
            <span className="label-mono text-[10px] text-muted-foreground group-hover:text-lime">
              next project →
            </span>
            <span className="font-display text-xl text-foreground group-hover:text-lime">
              {next.name}
            </span>
          </Link>
        </nav>
      </footer>
    </div>
  );
}
