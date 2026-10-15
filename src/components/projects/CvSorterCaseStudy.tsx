import { Link } from "@tanstack/react-router";
import { type Project } from "@/lib/portfolio";
import { ProjectArchiveNav } from "./ProjectArchiveNav";
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
  FileText,
  Check,
  Filter,
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
    <article className="space-y-16 sm:space-y-24">
      {/* =========================================================================
          01 — PROJECT BRIEF & HERO
          Case File 005 · Full-Stack / HR Tech · Academic Mini-Project
          CV Flow headline, dual-sided workflow statement, tech stack
      ========================================================================= */}
      <section aria-labelledby="brief-heading" className="space-y-8">
        {/* Section Index Marker */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#9649CB]" aria-hidden="true" />
            <p className="font-mono text-xs font-black uppercase tracking-wider text-foreground">
              ACJ_ / CASE FILE 005 · FULL-STACK / HR TECH
            </p>
          </div>
          <div className="inline-flex items-center gap-2 border-2 border-border bg-card px-2.5 py-0.5 font-mono text-xs font-bold text-foreground shadow-[2px_2px_0px_0px_var(--border)]">
            <span>ACADEMIC PROJECT / RECRUITMENT WORKFLOW</span>
          </div>
        </div>

        {/* Hero Narrative & Spec Docket */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 xl:gap-12 items-start">
          {/* Left Narrative */}
          <div className="flex flex-col">
            <h1
              id="brief-heading"
              className="font-display text-6xl sm:text-7xl md:text-8xl tracking-tight text-foreground leading-[0.94]"
            >
              CV Flow<span className="text-[#9649CB]">.</span>
            </h1>

            <p className="mt-4 font-display text-2xl sm:text-3xl text-foreground font-medium leading-tight">
              From applicant profiles to informed hiring decisions.
            </p>

            <p className="mt-4 font-mono text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              A recruitment management platform that brings structured CV profiles,
              job applications, configurable candidate scoring, and recruiter analytics
              into one unified full-stack workflow.
            </p>

            {/* Quick Action Links */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-crosshair-target
                  className="inline-flex min-h-11 items-center justify-center gap-2 border-2 border-border bg-[#F1BE05] px-5 py-2.5 font-mono text-xs font-bold text-black shadow-[4px_4px_0px_0px_var(--border)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_var(--border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
                >
                  <span>SOURCE REPOSITORY</span>
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              )}

              <span className="inline-flex min-h-11 items-center gap-2 border-2 border-border bg-card px-4 py-2.5 font-mono text-xs font-bold text-foreground shadow-[3px_3px_0px_0px_var(--border)]">
                <CheckCircle2 className="size-4 text-[#22C55E]" aria-hidden="true" />
                <span>RELATIONAL SUPABASE POSTGRES</span>
              </span>
            </div>

            {/* Academic Context Badge */}
            <div className="mt-6 border-2 border-border bg-card p-3 shadow-[3px_3px_0px_0px_var(--border)] flex items-center gap-2.5 font-mono text-xs text-foreground">
              <GraduationCap className="size-4 text-[#9649CB] shrink-0" aria-hidden="true" />
              <span>
                B.Tech CSE Mini-Project · APJ Abdul Kalam Technological University (KTU)
              </span>
            </div>

            {/* Technology Stack Pills */}
            <div className="mt-6 pt-4 border-t-2 border-border/40 flex flex-wrap gap-2 font-mono text-[11px]">
              <span className="border border-border bg-card px-2.5 py-1 text-foreground font-bold">
                REACT 18
              </span>
              <span className="border border-border bg-card px-2.5 py-1 text-foreground font-bold">
                TYPESCRIPT
              </span>
              <span className="border border-border bg-card px-2.5 py-1 text-foreground font-bold">
                SUPABASE
              </span>
              <span className="border border-border bg-card px-2.5 py-1 text-foreground font-bold">
                POSTGRESQL
              </span>
              <span className="border border-border bg-card px-2.5 py-1 text-foreground font-bold">
                TANSTACK QUERY
              </span>
            </div>
          </div>

          {/* Right Control Panel: Workflow Problem & Architectural Blueprint */}
          <div className="border-2 sm:border-[2.5px] border-border bg-card p-5 sm:p-6 shadow-[6px_6px_0px_0px_var(--border)] space-y-4">
            <div className="flex items-center justify-between border-b-2 border-border pb-3">
              <span className="font-mono text-xs font-black uppercase text-foreground">
                RECRUITMENT PLATFORM // ARCHITECTURE
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                DUAL-PORTAL MODEL
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="border-b border-border/40 pb-2.5">
                <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                  THE RECRUITMENT BOTTLENECK
                </span>
                <p className="text-foreground mt-0.5 leading-relaxed text-[11px]">
                  Unstructured resumes in email inboxes cause recruiter fatigue, lost candidate
                  data, and non-standardized hiring decisions without audit trails.
                </p>
              </div>

              <div className="border-b border-border/40 pb-2.5">
                <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                  THE FULL-STACK SOLUTION
                </span>
                <p className="text-foreground mt-0.5 leading-relaxed text-[11px]">
                  A normalized PostgreSQL schema connecting structured candidate profiles with
                  job vacancies, configurable scoring matrices, and pipeline stage analytics.
                </p>
              </div>

              <div className="border-b border-border/40 pb-2.5">
                <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                  STATE SYNCHRONIZATION
                </span>
                <span className="font-bold text-[#9649CB] mt-0.5 block">
                  TanStack Query Mutation Invalidation
                </span>
                <span className="text-[10px] text-muted-foreground block mt-0.5">
                  Eliminates stale UI states across recruiter status updates
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                  ETHICAL DESIGN COMMITMENT
                </span>
                <span className="font-bold text-foreground mt-0.5 block">
                  Decision support, not algorithmic gatekeeping
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t-2 border-border font-mono text-[11px] flex items-center justify-between text-muted-foreground">
              <span>COLLABORATION:</span>
              <span className="font-bold text-foreground">3-PERSON B.TECH TEAM</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — THE RECRUITMENT PIPELINE (FOUR CONNECTED STAGES)
          01 / APPLY -> 02 / MATCH -> 03 / EVALUATE -> 04 / REVIEW
      ========================================================================= */}
      <section aria-labelledby="pipeline-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#42BFDD]" aria-hidden="true" />
            <h2
              id="pipeline-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              01 // THE RECRUITMENT PIPELINE · CONNECTED HIRING STAGES
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            CONCEPTUAL WORKFLOW BASED ON IMPLEMENTED REPO
          </span>
        </div>

        <div>
          <p className="font-display text-3xl sm:text-4xl text-foreground">
            A continuous loop from applicant profile to recruiter decision.
          </p>
          <p className="mt-2 font-mono text-xs sm:text-sm text-muted-foreground max-w-2xl">
            Connecting job seekers submitting standardized credentials with hiring
            teams evaluating candidates through clear role criteria.
          </p>
        </div>

        {/* 4 Connected Stages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative font-mono text-xs">
          {/* Stage 01 */}
          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2.5 mb-3">
                <span className="font-mono text-xs font-black px-2 py-0.5 bg-[#9649CB] text-white">
                  01 / APPLY
                </span>
                <Users className="size-4 text-[#9649CB]" />
              </div>
              <h3 className="font-display text-2xl text-foreground font-bold">
                Candidate Profile
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Structured CV Ingestion
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed text-xs">
                Applicants enter standardized data: verified contact info, chronological work experience,
                education records, technical skills, certifications, and portfolio links.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40 text-[10px] text-foreground font-bold">
              Entity: profiles &amp; cv_records
            </div>
          </div>

          {/* Stage 02 */}
          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2.5 mb-3">
                <span className="font-mono text-xs font-black px-2 py-0.5 bg-[#42BFDD] text-black">
                  02 / MATCH
                </span>
                <Briefcase className="size-4 text-[#42BFDD]" />
              </div>
              <h3 className="font-display text-2xl text-foreground font-bold">
                Job Requirements
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Role Criteria &amp; Intake
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed text-xs">
                Recruiters publish open positions specifying department, experience thresholds,
                salary bands, and required skill tags against which incoming applications are mapped.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40 text-[10px] text-foreground font-bold">
              Entity: jobs &amp; applications
            </div>
          </div>

          {/* Stage 03 */}
          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2.5 mb-3">
                <span className="font-mono text-xs font-black px-2 py-0.5 bg-[#F1BE05] text-black">
                  03 / EVALUATE
                </span>
                <SlidersHorizontal className="size-4 text-[#F1BE05]" />
              </div>
              <h3 className="font-display text-2xl text-foreground font-bold">
                Weighted Scoring
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Configurable Criteria
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed text-xs">
                Recruiters tune weighting sliders depending on role priorities: prioritizing skill match,
                years of experience, verified credentials, or multilingual competencies.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40 text-[10px] text-foreground font-bold">
              Dynamic Normalized Weights
            </div>
          </div>

          {/* Stage 04 */}
          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2.5 mb-3">
                <span className="font-mono text-xs font-black px-2 py-0.5 bg-[#22C55E] text-black">
                  04 / REVIEW
                </span>
                <BarChart3 className="size-4 text-[#22C55E]" />
              </div>
              <h3 className="font-display text-2xl text-foreground font-bold">
                Recruiter Hub
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Pipeline &amp; Analytics
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed text-xs">
                Centralized recruiter control panel featuring status progression stages (Applied,
                Screening, Interview, Offer, Rejected) and application trend distributions.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40 text-[10px] text-foreground font-bold">
              Status Funnel &amp; Schedules
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — THE ENGINEERING HIGHLIGHT: CONFIGURABLE CANDIDATE RANKING
          Visual Formula & Scoring Engine Treatment
          Fairness, transparency, explainability — not an opaque AI black box
      ========================================================================= */}
      <section aria-labelledby="scoring-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#F1BE05]" aria-hidden="true" />
            <h2
              id="scoring-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              02 // THE ENGINEERING HIGHLIGHT · CONFIGURABLE CANDIDATE SCORING
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            TRANSPARENT DECISION SUPPORT (NOT AUTOMATED FILTERING)
          </span>
        </div>

        <div>
          <p className="font-display text-3xl sm:text-4xl text-foreground">
            A scoring engine where recruiters hold the levers.
          </p>
          <p className="mt-2 font-mono text-xs sm:text-sm text-muted-foreground max-w-2xl">
            Candidate ranking can influence hiring decisions. Rather than burying evaluation
            in an unexplainable black-box algorithm, CV Flow uses a transparent, multi-attribute
            scoring model where criteria weights are adjustable, normalized, and fully explainable.
          </p>
        </div>

        {/* Standout Scoring Engine Showcase Panel */}
        <div className="border-2 sm:border-[2.5px] border-border bg-card p-6 sm:p-8 shadow-[6px_6px_0px_0px_var(--border)] space-y-6 font-mono text-xs">
          {/* Top Formula Banner */}
          <div className="border-2 border-border bg-surface-secondary/50 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold text-muted-foreground uppercase block">
                NORMALIZED WEIGHTED FORMULA
              </span>
              <p className="text-sm sm:text-base font-black text-foreground mt-0.5">
                Composite Score = ∑ (Weight_i × Normalized_Score_i) ÷ ∑ Weight_i
              </p>
            </div>
            <div className="flex items-center gap-2 text-foreground text-xs font-bold border border-border bg-card px-3 py-1.5 shrink-0">
              <Scale className="size-4 text-[#F1BE05]" />
              <span>DETERMINISTIC &amp; AUDITABLE</span>
            </div>
          </div>

          {/* Interactive Weight Sliders & Criteria Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Criteria 01 */}
            <div className="border-2 border-border bg-background p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="text-foreground">SKILL OVERLAP MATCH</span>
                  <span className="text-[#9649CB]">35% DEFAULT</span>
                </div>
                <div className="w-full bg-border/20 h-2 mt-2 border border-border">
                  <div className="bg-[#9649CB] h-full w-[70%]" />
                </div>
                <p className="mt-2.5 text-muted-foreground leading-relaxed text-[11px]">
                  Intersection between candidate profile skill tags and required job listing technologies.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-border/40 text-[10px] text-foreground font-bold">
                Jaccard Index Matching
              </div>
            </div>

            {/* Criteria 02 */}
            <div className="border-2 border-border bg-background p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="text-foreground">EXPERIENCE DURATION</span>
                  <span className="text-[#42BFDD]">25% DEFAULT</span>
                </div>
                <div className="w-full bg-border/20 h-2 mt-2 border border-border">
                  <div className="bg-[#42BFDD] h-full w-[50%]" />
                </div>
                <p className="mt-2.5 text-muted-foreground leading-relaxed text-[11px]">
                  Cumulative verified years of professional employment normalized against role seniority targets.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-border/40 text-[10px] text-foreground font-bold">
                Linear Scaling with Cap
              </div>
            </div>

            {/* Criteria 03 */}
            <div className="border-2 border-border bg-background p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="text-foreground">ROLE &amp; TITLE MATCH</span>
                  <span className="text-[#F1BE05]">15% DEFAULT</span>
                </div>
                <div className="w-full bg-border/20 h-2 mt-2 border border-border">
                  <div className="bg-[#F1BE05] h-full w-[30%]" />
                </div>
                <p className="mt-2.5 text-muted-foreground leading-relaxed text-[11px]">
                  Compatibility between applicant career objectives, past job titles, and the target department.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-border/40 text-[10px] text-foreground font-bold">
                Domain Alignment
              </div>
            </div>

            {/* Criteria 04 */}
            <div className="border-2 border-border bg-background p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="text-foreground">CERTIFICATIONS</span>
                  <span className="text-[#22C55E]">10% BONUS</span>
                </div>
                <div className="w-full bg-border/20 h-2 mt-2 border border-border">
                  <div className="bg-[#22C55E] h-full w-[20%]" />
                </div>
                <p className="mt-2.5 text-muted-foreground leading-relaxed text-[11px]">
                  Point uplift for verified external professional certifications (AWS, Cisco, PMP, etc.).
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-border/40 text-[10px] text-foreground font-bold">
                Additive Credential Score
              </div>
            </div>

            {/* Criteria 05 */}
            <div className="border-2 border-border bg-background p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="text-foreground">VERIFIED REFERENCES</span>
                  <span className="text-[#FF7700]">10% BONUS</span>
                </div>
                <div className="w-full bg-border/20 h-2 mt-2 border border-border">
                  <div className="bg-[#FF7700] h-full w-[20%]" />
                </div>
                <p className="mt-2.5 text-muted-foreground leading-relaxed text-[11px]">
                  Bonus weighting for substantiated manager recommendations and previous contact validation.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-border/40 text-[10px] text-foreground font-bold">
                Reference Trust Metric
              </div>
            </div>

            {/* Criteria 06 */}
            <div className="border-2 border-border bg-background p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="text-foreground">LANGUAGES</span>
                  <span className="text-foreground">5% BONUS</span>
                </div>
                <div className="w-full bg-border/20 h-2 mt-2 border border-border">
                  <div className="bg-foreground h-full w-[10%]" />
                </div>
                <p className="mt-2.5 text-muted-foreground leading-relaxed text-[11px]">
                  Evaluation of multilingual proficiency for regional and distributed international teams.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-border/40 text-[10px] text-foreground font-bold">
                Communication Score
              </div>
            </div>
          </div>

          {/* Ethical AI & Fairness Guarantee Strip */}
          <div className="border-2 border-border bg-card p-4 shadow-[3px_3px_0px_0px_var(--border)] flex items-start gap-3">
            <ShieldCheck className="size-5 text-[#22C55E] shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-foreground block uppercase text-xs">
                FAIRNESS, TRANSPARENCY &amp; HUMAN JUDGMENT
              </strong>
              <p className="text-muted-foreground text-[11px] mt-0.5">
                The ranking score serves strictly as a recruiter decision-support tool, not an exclusionary
                filter. Every applicant remains visible in the candidate table; hiring managers can inspect
                the exact mathematical contribution of each factor to verify that rankings reflect genuine role
                requirements rather than demographic or resume formatting biases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — TWO USER PERSPECTIVES & PRODUCT WORKFLOW
          Applicant Profile Journey vs Recruiter Dashboard & Pipeline
      ========================================================================= */}
      <section aria-labelledby="perspectives-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#9649CB]" aria-hidden="true" />
            <h2
              id="perspectives-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              03 // TWO USER PERSPECTIVES · DUAL PORTAL ARCHITECTURE
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            ROLE-BASED USER JOURNEYS
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 font-mono text-xs">
          {/* Perspective 1: The Applicant */}
          <div className="border-2 border-border bg-card p-5 sm:p-6 shadow-[5px_5px_0px_0px_var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-[#9649CB]" />
                  <span className="font-black uppercase text-[#9649CB]">
                    PORTAL 01 // THE APPLICANT EXPERIENCE
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground">CLIENT PORTAL</span>
              </div>

              <h3 className="font-display text-2xl text-foreground font-bold">
                Structured CV Builder &amp; Application Journey
              </h3>

              <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed text-xs">
                <div className="border-l-2 border-[#9649CB] pl-2.5">
                  <strong className="text-foreground block text-[11px]">Multi-Step CV Form</strong>
                  <p className="mt-0.5 text-[11px]">
                    Applicants input education history, categorized technical skills, previous employer
                    chronologies, certifications, and links in clean tabular steps.
                  </p>
                </div>

                <div className="border-l-2 border-[#9649CB] pl-2.5">
                  <strong className="text-foreground block text-[11px]">Job Catalog &amp; 1-Click Apply</strong>
                  <p className="mt-0.5 text-[11px]">
                    Candidates browse active vacancies filtered by department, salary range, and job type,
                    applying directly with their persistent profile.
                  </p>
                </div>

                <div className="border-l-2 border-[#9649CB] pl-2.5">
                  <strong className="text-foreground block text-[11px]">Live Application Tracker</strong>
                  <p className="mt-0.5 text-[11px]">
                    Displays status progression (Screening, Interview Scheduled, Offer) with immediate feedback.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-border/40 flex flex-wrap gap-1.5 text-[10px]">
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">Normalized Profiles</span>
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">Persistent Auth</span>
            </div>
          </div>

          {/* Perspective 2: The Recruiter */}
          <div className="border-2 border-border bg-card p-5 sm:p-6 shadow-[5px_5px_0px_0px_var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="size-4 text-[#42BFDD]" />
                  <span className="font-black uppercase text-[#42BFDD]">
                    PORTAL 02 // THE RECRUITER EXPERIENCE
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground">ADMIN DASHBOARD</span>
              </div>

              <h3 className="font-display text-2xl text-foreground font-bold">
                Job Management, Triage &amp; Analytics
              </h3>

              <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed text-xs">
                <div className="border-l-2 border-[#42BFDD] pl-2.5">
                  <strong className="text-foreground block text-[11px]">Vacancy Publishing</strong>
                  <p className="mt-0.5 text-[11px]">
                    Post and edit roles with granular skill tags, department hierarchies, and experience bounds.
                  </p>
                </div>

                <div className="border-l-2 border-[#42BFDD] pl-2.5">
                  <strong className="text-foreground block text-[11px]">Dynamic Sorting Grid</strong>
                  <p className="mt-0.5 text-[11px]">
                    Review candidate tables sorted in real time by the configured criteria weights with immediate visual rank indicators.
                  </p>
                </div>

                <div className="border-l-2 border-[#42BFDD] pl-2.5">
                  <strong className="text-foreground block text-[11px]">Recruitment Funnel &amp; Scheduling</strong>
                  <p className="mt-0.5 text-[11px]">
                    Coordinate interview times, transition application states, and inspect departmental volume metrics.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-border/40 flex flex-wrap gap-1.5 text-[10px]">
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">Multi-Tenant Roles</span>
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">Recruiter Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 — RECRUITER ANALYTICS & INTERACTION SHOWCASE
          Realistic candidate ranking table & pipeline status distribution
      ========================================================================= */}
      <section aria-labelledby="analytics-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#22C55E]" aria-hidden="true" />
            <h2
              id="analytics-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              04 // RECRUITER DASHBOARD · CANDIDATE RANKING SHOWCASE
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            REACT + SUPABASE LIVE INTERFACE SIMULATION
          </span>
        </div>

        {/* Dashboard Visualizer Panel */}
        <div className="border-2 sm:border-[2.5px] border-border bg-card shadow-[6px_6px_0px_0px_var(--border)] overflow-hidden font-mono text-xs">
          {/* Dashboard Header */}
          <div className="border-b-2 border-border bg-surface-secondary/70 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground">
                CV FLOW // CANDIDATE EVALUATION MATRIX
              </span>
              <span className="border border-border bg-card px-2 py-0.5 text-[10px]">
                ROLE: SENIOR FULL-STACK ENGINEER (3 APPLICANTS EVALUATED)
              </span>
            </div>
            <span className="text-[#22C55E] text-[10px] font-bold">
              ● TANSTACK QUERY: SYNCED
            </span>
          </div>

          {/* Candidate Ranking Table */}
          <div className="p-4 sm:p-5 space-y-4">
            <div className="border-2 border-border bg-background overflow-x-auto">
              <table className="w-full text-left text-[11px]">
                <thead className="border-b-2 border-border bg-surface-secondary/50 text-foreground font-bold">
                  <tr>
                    <th className="p-2.5 border-r border-border/40">RANK</th>
                    <th className="p-2.5 border-r border-border/40">CANDIDATE</th>
                    <th className="p-2.5 border-r border-border/40">SKILLS MATCH</th>
                    <th className="p-2.5 border-r border-border/40">EXPERIENCE</th>
                    <th className="p-2.5 border-r border-border/40">BONUSES</th>
                    <th className="p-2.5 border-r border-border/40 text-center">COMPOSITE</th>
                    <th className="p-2.5">PIPELINE STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-border/40 text-foreground">
                  <tr>
                    <td className="p-2.5 border-r border-border/40 font-black text-[#9649CB]">
                      #01
                    </td>
                    <td className="p-2.5 border-r border-border/40 font-bold">
                      Devon Vance
                      <span className="text-[10px] text-muted-foreground block font-normal">
                        B.Tech CSE · React, TypeScript, Node, Postgres
                      </span>
                    </td>
                    <td className="p-2.5 border-r border-border/40 font-bold text-[#22C55E]">
                      94% (8/9 tags)
                    </td>
                    <td className="p-2.5 border-r border-border/40">
                      4.5 Years
                    </td>
                    <td className="p-2.5 border-r border-border/40 text-[10px] text-muted-foreground">
                      AWS Certified (+10%)
                    </td>
                    <td className="p-2.5 border-r border-border/40 text-center font-black text-sm bg-surface-secondary/40">
                      88.4 / 100
                    </td>
                    <td className="p-2.5">
                      <span className="px-2 py-0.5 border border-border bg-[#F1BE05] text-black font-bold text-[10px]">
                        INTERVIEW SCHEDULED
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-2.5 border-r border-border/40 font-black text-foreground">
                      #02
                    </td>
                    <td className="p-2.5 border-r border-border/40 font-bold">
                      Aadhya Menon
                      <span className="text-[10px] text-muted-foreground block font-normal">
                        M.Sc Software · Python, Django, React, Docker
                      </span>
                    </td>
                    <td className="p-2.5 border-r border-border/40 font-bold text-[#42BFDD]">
                      78% (7/9 tags)
                    </td>
                    <td className="p-2.5 border-r border-border/40">
                      5.0 Years
                    </td>
                    <td className="p-2.5 border-r border-border/40 text-[10px] text-muted-foreground">
                      Verified Ref (+10%)
                    </td>
                    <td className="p-2.5 border-r border-border/40 text-center font-black text-sm bg-surface-secondary/40">
                      81.2 / 100
                    </td>
                    <td className="p-2.5">
                      <span className="px-2 py-0.5 border border-border bg-card text-foreground font-bold text-[10px]">
                        SCREENING PASSED
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-2.5 border-r border-border/40 font-black text-foreground">
                      #03
                    </td>
                    <td className="p-2.5 border-r border-border/40 font-bold">
                      Kiran Kumar
                      <span className="text-[10px] text-muted-foreground block font-normal">
                        B.Tech IT · React, Tailwind, SQL, REST APIs
                      </span>
                    </td>
                    <td className="p-2.5 border-r border-border/40 font-bold text-muted-foreground">
                      66% (6/9 tags)
                    </td>
                    <td className="p-2.5 border-r border-border/40">
                      2.5 Years
                    </td>
                    <td className="p-2.5 border-r border-border/40 text-[10px] text-muted-foreground">
                      Bilingual (+5%)
                    </td>
                    <td className="p-2.5 border-r border-border/40 text-center font-black text-sm bg-surface-secondary/40">
                      70.5 / 100
                    </td>
                    <td className="p-2.5">
                      <span className="px-2 py-0.5 border border-border bg-card text-muted-foreground font-bold text-[10px]">
                        NEW APPLICANT
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pipeline Stage Distribution Metric Bar */}
            <div className="border-t-2 border-border/60 pt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="border border-border bg-surface-secondary/40 p-2.5 text-center">
                <span className="text-[10px] text-muted-foreground block">TOTAL APPLICATIONS</span>
                <span className="text-lg font-black text-foreground mt-0.5 block">42</span>
              </div>
              <div className="border border-border bg-surface-secondary/40 p-2.5 text-center">
                <span className="text-[10px] text-muted-foreground block">IN SCREENING</span>
                <span className="text-lg font-black text-[#42BFDD] mt-0.5 block">14</span>
              </div>
              <div className="border border-border bg-surface-secondary/40 p-2.5 text-center">
                <span className="text-[10px] text-muted-foreground block">INTERVIEWS STAGED</span>
                <span className="text-lg font-black text-[#F1BE05] mt-0.5 block">8</span>
              </div>
              <div className="border border-border bg-surface-secondary/40 p-2.5 text-center">
                <span className="text-[10px] text-muted-foreground block">OFFERS EXTENDED</span>
                <span className="text-lg font-black text-[#22C55E] mt-0.5 block">3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06 — DATA, STATE & ENGINEERING LESSONS
          Relational Postgres design, TanStack Query invalidation, future AI roadmap
      ========================================================================= */}
      <section aria-labelledby="lessons-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#FF7700]" aria-hidden="true" />
            <h2
              id="lessons-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              05 // DATA, STATE &amp; LESSONS · RELATIONAL FOUNDATIONS
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            SUPABASE POSTGRES + TANSTACK QUERY
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3 font-mono text-xs">
          {/* Lesson 01 */}
          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-3">
                <span className="font-bold text-[#9649CB]">FOUNDATION 01</span>
                <Database className="size-4 text-[#9649CB]" />
              </div>
              <h3 className="font-display text-xl text-foreground font-bold">
                Relational PostgreSQL Design
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-xs">
                Modeled 5 core normalized tables in Supabase (<code className="text-foreground">profiles</code>,{" "}
                <code className="text-foreground">cv_details</code>, <code className="text-foreground">jobs</code>,{" "}
                <code className="text-foreground">applications</code>, and <code className="text-foreground">interviews</code>)
                connected with strict foreign keys and cascading deletes to prevent orphaned records.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-border/40 text-[10px] text-muted-foreground">
              Takeaway: Clean schemas eliminate state fragmentation.
            </div>
          </div>

          {/* Lesson 02 */}
          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-3">
                <span className="font-bold text-[#42BFDD]">FOUNDATION 02</span>
                <RefreshCw className="size-4 text-[#42BFDD]" />
              </div>
              <h3 className="font-display text-xl text-foreground font-bold">
                State Sync via TanStack Query
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-xs">
                When a recruiter drags a candidate from &quot;Screening&quot; to &quot;Interview Scheduled&quot;,
                TanStack Query invalidates related candidate and job cache keys. Dashboard metrics and sorted lists
                instantly reconcile with zero manual page reloads or UI glitches.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-border/40 text-[10px] text-muted-foreground">
              Takeaway: Server-state caching simplifies frontend logic.
            </div>
          </div>

          {/* Lesson 03 */}
          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-3">
                <span className="font-bold text-[#F1BE05]">ROADMAP</span>
                <Sparkles className="size-4 text-[#F1BE05]" />
              </div>
              <h3 className="font-display text-xl text-foreground font-bold">
                Future Semantic AI Parsing
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-xs">
                The current system relies on structured keyword matching. Future iterations plan to integrate local
                LLM agents for automated unformatted PDF resume text extraction and contextual semantic matching
                (e.g., recognizing that &quot;Postgres&quot; satisfies an &quot;SQL&quot; requirement).
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-border/40 text-[10px] text-muted-foreground">
              Status: Planned Future Work (Transparent Boundary)
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          07 — ACADEMIC RETROSPECTIVE & PROJECT ARCHIVE NAVIGATION
      ========================================================================= */}
      <footer className="pt-2">
        <ProjectArchiveNav previous={previous} next={next} accentColor="#9649CB" />
      </footer>
    </article>
  );
}
