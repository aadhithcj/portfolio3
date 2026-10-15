import { Link } from "@tanstack/react-router";
import { type Project } from "@/lib/portfolio";
import {
  ArrowUpRight,
  Server,
  GitBranch,
  Activity,
  Boxes,
  Zap,
  RotateCcw,
  ShieldCheck,
  CheckCircle2,
  Clock,
} from "lucide-react";

interface DevOpsHubCaseStudyProps {
  project: Project;
  previous: Project;
  next: Project;
}

export function DevOpsHubCaseStudy({
  project,
  previous,
  next,
}: DevOpsHubCaseStudyProps) {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero */}
      <header className="border-b border-line pb-8 sm:pb-10">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-lime">
          <span>DEVOPS / CLOUD / CI/CD</span>
          <span className="text-muted-foreground/60">•</span>
          <span>AUTOMATION PROJECT · 2026</span>
        </div>

        <h1 className="mt-3 break-words font-display text-5xl leading-[1.04] sm:text-6xl md:text-7xl">
          DevOpsHub<span className="text-lime">.</span>
        </h1>

        <p className="mt-2 font-display text-xl text-foreground/90 sm:text-2xl">
          From local development to automated cloud deployment.
        </p>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          A containerized Flask backend and full-stack architecture built to
          explore multi-job GitHub Actions CI, container registry publishing,
          AWS Systems Manager remote deployment, health checks, and automated
          rollback recovery.
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
          <a
            href="https://github.com/aadhithcj/devopshub/actions/runs/38448430972"
            target="_blank"
            rel="noreferrer"
            data-crosshair-target
            className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg border border-line/60 bg-surface/40 px-3.5 py-2 font-mono text-xs text-muted-foreground transition-all hover:border-lime/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2"
          >
            <span>Verified CI Run (ce28c8d) ↗</span>
          </a>
          <span className="rounded-lg border border-lime/30 bg-lime/10 px-3 py-2 font-mono text-xs text-lime">
            Zero-SSH AWS SSM Deploy
          </span>
        </div>
      </header>

      {/* Deployment Architecture */}
      <section aria-labelledby="arch-heading" className="space-y-4">
        <h2 id="arch-heading" className="label-mono text-lime">
          # 01 // DEPLOYMENT ARCHITECTURE
        </h2>

        <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md sm:p-6">
          <div className="grid gap-3 sm:grid-cols-4">
            <div className="rounded-lg border border-line/80 bg-background/60 p-3.5">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">01 SOURCE</span>
                <GitBranch className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-base text-foreground">
                GitHub Repo
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                main & ci/** push / PR
              </p>
            </div>

            <div className="rounded-lg border border-line/80 bg-background/60 p-3.5">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">02 CI GATES</span>
                <Activity className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-base text-foreground">
                Actions Runner
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                pytest · Vite · smoke test
              </p>
            </div>

            <div className="rounded-lg border border-line/80 bg-background/60 p-3.5">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">03 REGISTRY</span>
                <Boxes className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-base text-foreground">
                GHCR.io
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Commit SHA tag & latest
              </p>
            </div>

            <div className="rounded-lg border border-lime/40 bg-background/80 p-3.5">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">04 EC2 RUNTIME</span>
                <Server className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-base text-foreground">
                SSM Agent
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Flask API & Postgres
              </p>
            </div>
          </div>

          <p className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground">
            GitHub Actions tests backend logic with pytest, checks
            TypeScript/Vite compilation, builds the Docker image with a live
            smoke test, pushes to GHCR, and executes deployment on EC2 via AWS
            Systems Manager without exposing public SSH ports.
          </p>
        </div>
      </section>

      {/* Pipeline & Delivery Features */}
      <section aria-labelledby="features-heading" className="space-y-4">
        <h2 id="features-heading" className="label-mono text-lime">
          # 02 // KEY ENGINEERING HIGHLIGHTS
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Highlight 1 */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                Zero-SSH Cloud Deployment
              </span>
              <ShieldCheck className="size-4 text-lime" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Eliminated port 22 exposure and SSH key management in CI runners.
              Deployment commands execute via authenticated IAM credentials
              using AWS Systems Manager Run Command directly to the EC2 agent.
            </p>
            <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-foreground/80">
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                AWS SSM
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                No Open Port 22
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                IAM Role Security
              </span>
            </div>
          </div>

          {/* Highlight 2 */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                Automated Health & Rollback
              </span>
              <RotateCcw className="size-4 text-lime" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              The on-host deployment script pulls the exact commit SHA image,
              replaces the container, and polls{" "}
              <code className="text-foreground">/api/health</code> and{" "}
              <code className="text-foreground">/api/db-health</code>. If
              verification fails, it restores the previous image reference
              automatically.
            </p>
            <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-foreground/80">
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                Health Polling
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                Automated Rollback
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                DB Ping Check
              </span>
            </div>
          </div>

          {/* Highlight 3 */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                Multi-Job Quality Gate
              </span>
              <Activity className="size-4 text-lime" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Runs parallel test suites: installs Python 3.11 for pytest, builds
              the TypeScript frontend to catch syntax regressions, and starts a
              test container to execute a health endpoint smoke test before
              pushing images to GHCR.
            </p>
            <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-foreground/80">
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                pytest Suites
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                Vite Build Gate
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                Docker Smoke Test
              </span>
            </div>
          </div>

          {/* Highlight 4 */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                Deterministic Image Releases
              </span>
              <Boxes className="size-4 text-lime" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Every build tags images with the triggering git commit SHA (
              <code className="text-foreground font-mono">
                ghcr.io/...:$&#123;GITHUB_SHA&#125;
              </code>
              ) alongside{" "}
              <code className="text-foreground font-mono">latest</code>.
              Deployment scripts reference the immutable SHA, guaranteeing
              reproducible rollbacks.
            </p>
            <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-foreground/80">
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                Commit SHA Tags
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                GHCR Packages
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                Immutable State
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Key Learnings */}
      <section aria-labelledby="challenges-heading" className="space-y-4">
        <h2 id="challenges-heading" className="label-mono text-lime">
          # 03 // CHALLENGES & PRACTICAL LEARNINGS
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 text-foreground font-semibold font-mono text-xs">
              <Zap className="size-4 text-lime" aria-hidden="true" />
              <span>SSM Script Escaping & Quoting</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Deploying multi-line bash scripts through AWS SSM Run Command JSON
              payloads initially caused escaping errors. Fixed by passing an
              array of bash command arguments with strict parameter quoting and
              environment variable sourcing.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 text-foreground font-semibold font-mono text-xs">
              <Server className="size-4 text-lime" aria-hidden="true" />
              <span>Container Sequential Replacement</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Learned the real-world trade-off between health-checked container
              replacement and true zero-downtime blue/green setups: sequential
              restarts take ~2-3 seconds of cutover time on a single EC2 host,
              which health checks successfully safeguard.
            </p>
          </div>
        </div>
      </section>

      {/* Status & Scope */}
      <section
        aria-labelledby="status-heading"
        className="rounded-xl border border-line bg-surface/40 p-5 backdrop-blur-md"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-line/60 pb-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-lime" aria-hidden="true" />
            <h3
              id="status-heading"
              className="font-display text-lg text-foreground"
            >
              Project Status & Scope
            </h3>
          </div>
          <span className="font-mono text-[11px] text-lime">
            Implemented & Verified
          </span>
        </div>
        <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
          <strong>In Repo:</strong> Dockerized Flask + Postgres, automated
          pytest suites, Vite frontend build verification, GHCR publishing, AWS
          SSM deployment with automated rollback.
          <br />
          <strong>Roadmap:</strong> Real-time Prometheus metrics, centralized
          CloudWatch logging, and Terraform infrastructure as code.
        </p>
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
