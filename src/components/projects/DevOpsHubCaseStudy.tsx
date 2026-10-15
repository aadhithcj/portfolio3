import { Link } from "@tanstack/react-router";
import { type Project } from "@/lib/portfolio";
import { ProjectArchiveNav } from "./ProjectArchiveNav";
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
  Terminal,
  AlertTriangle,
  Clock,
  Layers,
  FileCode,
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
    <article className="space-y-16 sm:space-y-24">
      {/* =========================================================================
          01 — PROJECT BRIEF
          Editorial header: Case File 002, In Progress, Product statement,
          Control Panel status bar with Current Milestone & Next Up
      ========================================================================= */}
      <section aria-labelledby="brief-heading" className="space-y-8">
        {/* Section Index Marker */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#42BFDD]" aria-hidden="true" />
            <p className="font-mono text-xs font-black uppercase tracking-wider text-foreground">
              ACJ_ / CASE FILE 002 · DEVOPS / CLOUD / AUTOMATION
            </p>
          </div>
          <div className="inline-flex items-center gap-2 border-2 border-border bg-[#F1BE05] px-2.5 py-0.5 text-black font-mono text-xs font-bold shadow-[2px_2px_0px_0px_var(--border)]">
            <span className="size-2 rounded-full bg-black animate-pulse" />
            <span>LEARNING PROJECT // ACTIVE IN PROGRESS</span>
          </div>
        </div>

        {/* Hero Narrative & Milestone Dashboard */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 xl:gap-12 items-start">
          {/* Left Narrative */}
          <div className="flex flex-col">
            <h1
              id="brief-heading"
              className="font-display text-6xl sm:text-7xl md:text-8xl tracking-tight text-foreground leading-[0.94]"
            >
              DevOpsHub<span className="text-[#42BFDD]">.</span>
            </h1>

            <p className="mt-4 font-display text-2xl sm:text-3xl text-foreground font-medium leading-tight">
              Learning to ship software, reliably.
            </p>

            <p className="mt-4 font-mono text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              A hands-on engineering project exploring containerization, automated
              multi-job CI/CD, cloud deployment, health checks, and recovery. Built
              to learn how code moves reliably from a local development environment
              to a tested, containerized deployment on AWS.
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

              <a
                href="https://github.com/aadhithcj/devopshub/actions/runs/38448430972"
                target="_blank"
                rel="noreferrer"
                data-crosshair-target
                className="inline-flex min-h-11 items-center justify-center gap-2 border-2 border-border bg-card px-4 py-2.5 font-mono text-xs font-bold text-foreground shadow-[3px_3px_0px_0px_var(--border)] transition-all hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
              >
                <span>VERIFIED CI RUN (ce28c8d)</span>
                <ArrowUpRight className="size-3.5 text-muted-foreground" aria-hidden="true" />
              </a>
            </div>

            {/* Compact Technical Specs Bar */}
            <div className="mt-6 pt-4 border-t-2 border-border/40 flex flex-wrap gap-2 font-mono text-[11px]">
              <span className="border border-border bg-card px-2.5 py-1 text-foreground font-bold">
                FLASK 3.0 + POSTGRESQL
              </span>
              <span className="border border-border bg-card px-2.5 py-1 text-foreground font-bold">
                DOCKER COMPOSE
              </span>
              <span className="border border-border bg-card px-2.5 py-1 text-foreground font-bold">
                ZERO-SSH AWS SSM
              </span>
            </div>
          </div>

          {/* Right Control Panel Widget: Current Milestone & Next Up */}
          <div className="border-2 sm:border-[2.5px] border-border bg-card p-5 sm:p-6 shadow-[6px_6px_0px_0px_var(--border)] space-y-5">
            <div className="flex items-center justify-between border-b-2 border-border pb-3">
              <span className="font-mono text-xs font-black uppercase text-foreground">
                CONTROL PANEL // STATUS LOG
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                ENV: AWS EC2 (t3.micro)
              </span>
            </div>

            {/* Current Milestone Highlight (Yellow Neo-Brutalist Block) */}
            <div className="border-2 border-border bg-[#F1BE05] text-black p-4 shadow-[4px_4px_0px_0px_var(--border)]">
              <div className="flex items-center justify-between font-mono text-[10px] font-black uppercase tracking-wider mb-1.5">
                <span>CURRENT MILESTONE</span>
                <span className="px-1.5 py-0.5 bg-black text-[#F1BE05] font-mono text-[9px]">
                  VERIFIED
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold leading-tight">
                Automated Deployment Pipeline
              </h2>
              <p className="mt-1 font-mono text-xs font-medium">
                GitHub Actions → GHCR → AWS EC2 via Systems Manager
              </p>
              <div className="mt-3 pt-2.5 border-t border-black/30 font-mono text-[10px] flex items-center justify-between">
                <span>STAGE: CI/CD PRODUCTION RUNNER</span>
                <span className="font-bold">STATUS: STABLE</span>
              </div>
            </div>

            {/* Next Up Milestone Card */}
            <div className="border-2 border-border bg-surface-secondary/40 p-4">
              <div className="flex items-center justify-between font-mono text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                <span>NEXT UP</span>
                <span className="text-[#42BFDD] font-mono text-[10px]">ROADMAP</span>
              </div>
              <h3 className="font-display text-xl text-foreground font-semibold">
                Metrics & Observability
              </h3>
              <p className="mt-1 font-mono text-xs text-muted-foreground leading-relaxed">
                Prometheus exporter endpoints, centralized CloudWatch logging, and automated failure alerting.
              </p>
            </div>

            {/* Pipeline Cadence Telemetry */}
            <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
              <div className="border border-border/60 bg-card p-2 text-center">
                <span className="text-[10px] text-muted-foreground block">CI CYCLE TIME</span>
                <span className="font-bold text-foreground">~1m 45s</span>
              </div>
              <div className="border border-border/60 bg-card p-2 text-center">
                <span className="text-[10px] text-muted-foreground block">DEPLOY METHOD</span>
                <span className="font-bold text-[#42BFDD]">AWS SSM API</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — THE DELIVERY PIPELINE
          Visual Centerpiece: GitHub -> CI Tests -> GHCR -> EC2 via SSM
          Arrows, numbered stages, realistic pipeline logs & stage breakdowns
      ========================================================================= */}
      <section aria-labelledby="pipeline-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#42BFDD]" aria-hidden="true" />
            <h2
              id="pipeline-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              02 // THE DELIVERY PIPELINE · END-TO-END FLOW
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            A SIMPLIFIED VIEW OF THE DELIVERY FLOW—NOT A LIVE PIPELINE STATUS
          </span>
        </div>

        <div>
          <p className="font-display text-3xl sm:text-4xl text-foreground">
            From commit push to live EC2 container execution.
          </p>
          <p className="mt-2 font-mono text-xs sm:text-sm text-muted-foreground max-w-2xl">
            A four-stage delivery pipeline ensuring every commit is unit-tested, built,
            smoke-tested, containerized, and deployed without storing private SSH keys on runners.
          </p>
        </div>

        {/* 4-Stage Connected Pipeline Visualizer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {/* Stage 01 */}
          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2.5 mb-3">
                <span className="font-mono text-xs font-black px-2 py-0.5 bg-foreground text-background">
                  01
                </span>
                <GitBranch className="size-4 text-[#42BFDD]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl text-foreground">
                GitHub
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Triggers & Gateways
              </p>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                Pushes to <code className="text-foreground">main</code> or <code className="text-foreground">ci/**</code> branches
                trigger GitHub Actions workflows. Path filtering skips redundant builds on documentation changes.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40 font-mono text-[10px] text-foreground font-bold">
              Event: push · Branch: main
            </div>
          </div>

          {/* Stage 02 */}
          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2.5 mb-3">
                <span className="font-mono text-xs font-black px-2 py-0.5 bg-foreground text-background">
                  02
                </span>
                <Activity className="size-4 text-[#42BFDD]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl text-foreground">
                CI Tests
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Automated Quality Gate
              </p>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                Runs parallel test jobs: executes <code className="text-foreground">pytest</code> test suites,
                verifies TypeScript/Vite frontend builds, and spins up a local Docker container for health smoke tests.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40 font-mono text-[10px] text-foreground font-bold">
              pytest · Vite build · Smoke
            </div>
          </div>

          {/* Stage 03 */}
          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2.5 mb-3">
                <span className="font-mono text-xs font-black px-2 py-0.5 bg-foreground text-background">
                  03
                </span>
                <Boxes className="size-4 text-[#42BFDD]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl text-foreground">
                GHCR
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Immutable Image Registry
              </p>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                Builds container images with layer caching and tags them deterministically with the triggering
                git commit SHA (<code className="text-foreground font-mono">ce28c8d</code>) before pushing to GitHub Container Registry.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40 font-mono text-[10px] text-foreground font-bold">
              ghcr.io/...:&#36;&#123;GITHUB_SHA&#125;
            </div>
          </div>

          {/* Stage 04 */}
          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2.5 mb-3">
                <span className="font-mono text-xs font-black px-2 py-0.5 bg-foreground text-background">
                  04
                </span>
                <Server className="size-4 text-[#42BFDD]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl text-foreground">
                EC2 via SSM
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Zero-SSH Cloud Runtime
              </p>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                AWS Systems Manager Run Command dispatches on-host deployment scripts using authenticated IAM credentials.
                No open port 22 or SSH keys exposed to the Internet.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40 font-mono text-[10px] text-foreground font-bold">
              AWS SSM · Zero Open Port 22
            </div>
          </div>
        </div>

        {/* Real Artifact Terminal Excerpt */}
        <div className="border-2 border-border bg-[#05131A] text-[#F7F0D9] shadow-[5px_5px_0px_0px_var(--border)] overflow-hidden">
          <div className="flex items-center justify-between border-b border-border/60 bg-[#0B1E26] px-4 py-2.5 font-mono text-xs">
            <div className="flex items-center gap-2">
              <Terminal className="size-4 text-[#42BFDD]" aria-hidden="true" />
              <span className="font-bold text-[#F7F0D9]">
                WORKFLOW RUN EXCERPT // GITHUB ACTIONS RUN #38448430972
              </span>
            </div>
            <span className="text-[#22C55E] text-[11px] font-bold">
              ● STATUS: COMPLETED IN 1m 42s
            </span>
          </div>

          <div className="p-4 sm:p-5 font-mono text-xs overflow-x-auto space-y-3 leading-relaxed">
            <div className="text-muted-foreground/80">
              <span className="text-[#42BFDD] font-bold">$</span> pytest tests/ -v --tb=short
            </div>
            <div className="text-foreground/90 pl-3 border-l-2 border-[#22C55E]/60 text-[11px] space-y-0.5">
              <div>tests/test_health.py::test_api_health_ok <span className="text-[#22C55E] font-bold">PASSED</span> [ 25%]</div>
              <div>tests/test_health.py::test_database_connection <span className="text-[#22C55E] font-bold">PASSED</span> [ 50%]</div>
              <div>tests/test_tasks.py::test_task_lifecycle_crud <span className="text-[#22C55E] font-bold">PASSED</span> [ 75%]</div>
              <div>tests/test_auth.py::test_jwt_signature_verify <span className="text-[#22C55E] font-bold">PASSED</span> [100%]</div>
              <div className="text-[#22C55E] pt-1">======================= 4 passed in 1.34s =======================</div>
            </div>

            <div className="text-muted-foreground/80 pt-1">
              <span className="text-[#42BFDD] font-bold">$</span> docker buildx build --push -t ghcr.io/aadhithcj/devopshub:ce28c8d .
            </div>
            <div className="text-foreground/90 pl-3 border-l-2 border-[#42BFDD]/60 text-[11px]">
              <div>[+] Building 14.8s (12/12) FINISHED</div>
              <div className="text-[#42BFDD]">&gt; exporting to image: ghcr.io/aadhithcj/devopshub:ce28c8d (Pushed)</div>
            </div>

            <div className="text-muted-foreground/80 pt-1">
              <span className="text-[#42BFDD] font-bold">$</span> aws ssm send-command --instance-ids &quot;i-09ab7c12f45ec2&quot; --document-name &quot;AWS-RunShellScript&quot;
            </div>
            <div className="text-foreground/90 pl-3 border-l-2 border-[#F1BE05]/60 text-[11px]">
              <div>Command ID: 8b1f4a9c-2041-4d1e-8123-9a8b1c4e7f &bull; Status: <span className="text-[#22C55E] font-bold">Success</span></div>
              <div className="text-[#F1BE05]">&gt; Pulling image ce28c8d &bull; Container swapped &bull; Health probe: 200 OK</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — RELIABILITY AND RECOVERY
          Feature health checks, database ping, immutable SHA tags,
          and a concrete deployment-failure & recovery sequence
      ========================================================================= */}
      <section aria-labelledby="reliability-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#FF7700]" aria-hidden="true" />
            <h2
              id="reliability-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              03 // RELIABILITY & RECOVERY · DEFENSIVE DEPLOYMENT
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            AUTOMATED ROLLBACK BEHAVIOR
          </span>
        </div>

        <div>
          <p className="font-display text-3xl sm:text-4xl text-foreground">
            Safeguarding availability through automated rollback.
          </p>
          <p className="mt-2 font-mono text-xs sm:text-sm text-muted-foreground max-w-2xl">
            A bad deployment should never take down production. The on-host script
            treats deployments as transactional: verify health first, or immediately
            restore the previous known-good container state.
          </p>
        </div>

        {/* 4-Phase Deployment & Recovery Sequence */}
        <div className="border-2 border-border bg-card shadow-[5px_5px_0px_0px_var(--border)] p-5 sm:p-6 space-y-6">
          <div className="flex items-center justify-between border-b-2 border-border/80 pb-3">
            <span className="font-mono text-xs font-black uppercase text-foreground">
              DEPLOYMENT FAILURE & AUTOMATED RECOVERY LIFECYCLE
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">
              ON-HOST VERIFICATION PROTOCOL
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono text-xs">
            {/* Step 1 */}
            <div className="border-2 border-border/80 bg-surface-secondary/30 p-4 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-muted-foreground block">
                  PHASE 01 // PRE-PULL
                </span>
                <p className="font-bold text-foreground mt-1 text-sm">
                  Pull New Image SHA
                </p>
                <p className="mt-2 text-muted-foreground leading-relaxed text-[11px]">
                  Pulls <code className="text-foreground">ghcr.io/...:ce28c8d</code> while the old container continues
                  serving incoming user traffic undisturbed.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-border/40 text-[10px] text-[#22C55E] font-bold">
                ✓ Old Container Intact
              </div>
            </div>

            {/* Step 2 */}
            <div className="border-2 border-border/80 bg-surface-secondary/30 p-4 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-muted-foreground block">
                  PHASE 02 // PROBE
                </span>
                <p className="font-bold text-foreground mt-1 text-sm">
                  Active Health Polling
                </p>
                <p className="mt-2 text-muted-foreground leading-relaxed text-[11px]">
                  Launches container and queries <code className="text-foreground">/api/health</code> and{" "}
                  <code className="text-foreground">/api/db-health</code> every 2s for up to 15 retries.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-border/40 text-[10px] text-[#42BFDD] font-bold">
                ⟳ HTTP Status Verification
              </div>
            </div>

            {/* Step 3 */}
            <div className="border-2 border-border/80 bg-surface-secondary/30 p-4 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#FF3C38] block">
                  PHASE 03 // BREACH
                </span>
                <p className="font-bold text-foreground mt-1 text-sm">
                  Failure Detection
                </p>
                <p className="mt-2 text-muted-foreground leading-relaxed text-[11px]">
                  If 15 retries elapse without dual 200 OK responses (e.g. database schema mismatch or crash),
                  the script halts further cutover.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-border/40 text-[10px] text-[#FF3C38] font-bold">
                ⚠ Non-200 Probe Tripped
              </div>
            </div>

            {/* Step 4 */}
            <div className="border-2 border-border bg-[#F1BE05] text-black p-4 flex flex-col justify-between shadow-[2px_2px_0px_0px_var(--border)]">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider block">
                  PHASE 04 // RESTORE
                </span>
                <p className="font-bold mt-1 text-sm">
                  Instant Rollback
                </p>
                <p className="mt-2 leading-relaxed text-[11px] font-medium">
                  Relaunches previous known-good tag (<code className="bg-black/10 px-1 font-bold">PREVIOUS_SHA</code>),
                  terminates failed container, and exits code 1 to flag CI.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-black/30 text-[10px] font-black">
                ↺ Zero-Downtime Recovery
              </div>
            </div>
          </div>

          {/* On-Host Health Check Code Excerpt */}
          <div className="border border-border/60 bg-[#05131A] text-[#F7F0D9] p-4 font-mono text-xs overflow-x-auto">
            <div className="text-muted-foreground mb-2 text-[11px] flex items-center justify-between">
              <span>// SCRIPT ARTIFACT: deploy_with_rollback.sh</span>
              <span className="text-[#F1BE05]">BASH ON EC2 HOST</span>
            </div>
            <pre className="text-[11px] leading-relaxed text-foreground/90">
{`# Poll health endpoint with retry loop
for i in $(seq 1 15); do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:5000/api/health || true)
  DB_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:5000/api/db-health || true)
  if [ "$STATUS" = "200" ] && [ "$DB_STATUS" = "200" ]; then
    echo "[✓] Deployment healthy. Pruning previous image."
    exit 0
  fi
  sleep 2
done

echo "[!] Health check failed after 30s. Rolling back to \${PREVIOUS_SHA}..."
docker stop devopshub-app && docker rm devopshub-app
docker run -d --name devopshub-app -p 5000:5000 ghcr.io/aadhithcj/devopshub:\${PREVIOUS_SHA}
exit 1`}
            </pre>
          </div>
        </div>

        {/* 3 Reliability Principles */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="border-2 border-border bg-card p-4 shadow-[3px_3px_0px_0px_var(--border)]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-foreground mb-1.5">
              <ShieldCheck className="size-4 text-[#42BFDD]" aria-hidden="true" />
              <span>Zero-SSH IAM Security</span>
            </div>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              No private SSH key stored in GitHub Secrets. Deployment commands authenticate through temporary
              IAM credentials via AWS Systems Manager agent.
            </p>
          </div>

          <div className="border-2 border-border bg-card p-4 shadow-[3px_3px_0px_0px_var(--border)]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-foreground mb-1.5">
              <Boxes className="size-4 text-[#42BFDD]" aria-hidden="true" />
              <span>Immutable Image Tags</span>
            </div>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              Releases are tagged with exact commit SHAs. Rollbacks point directly to verified previous tags rather
              than relying on mutable &quot;latest&quot; labels.
            </p>
          </div>

          <div className="border-2 border-border bg-card p-4 shadow-[3px_3px_0px_0px_var(--border)]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-foreground mb-1.5">
              <RotateCcw className="size-4 text-[#42BFDD]" aria-hidden="true" />
              <span>Atomic Database Ping</span>
            </div>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              The health check endpoint executes an active <code className="text-foreground">SELECT 1</code> query against PostgreSQL
              to verify schema and network connectivity before passing.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — THINGS THAT BROKE (ENGINEERING JOURNAL)
          Honest, highly-detailed engineering notes:
          Problem, Investigation, The Fix, and What I Learned
      ========================================================================= */}
      <section aria-labelledby="broken-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#FF3C38]" aria-hidden="true" />
            <h2
              id="broken-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              04 // THINGS THAT BROKE · ENGINEERING INCIDENT NOTES
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            POST-MORTEMS & REAL-WORLD FIXES
          </span>
        </div>

        <div>
          <p className="font-display text-3xl sm:text-4xl text-foreground">
            The unexpected bugs that taught the deepest lessons.
          </p>
          <p className="mt-2 font-mono text-xs sm:text-sm text-muted-foreground max-w-2xl">
            Building infrastructure in public means making mistakes, diagnosing the
            root causes, and recording the engineering decisions made to solve them.
          </p>
        </div>

        {/* 2 Deep Engineering Journal Entries */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Note 01 */}
          <div className="border-2 border-border bg-card p-5 sm:p-6 shadow-[5px_5px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Zap className="size-4 text-[#FF3C38]" aria-hidden="true" />
                  <span className="font-mono text-xs font-black uppercase text-[#FF3C38]">
                    INCIDENT 01 // AWS SSM COMMAND QUOTING
                  </span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">
                  BASH / JSON PARSER
                </span>
              </div>

              <h3 className="font-display text-2xl text-foreground">
                Multi-Line Shell Quoting Collapsed Inside SSM JSON Payloads
              </h3>

              <div className="mt-4 space-y-3 font-mono text-xs text-muted-foreground leading-relaxed">
                <div>
                  <strong className="text-foreground block uppercase text-[10px]">The Problem</strong>
                  <p className="mt-0.5">
                    When attempting to execute multi-line deployment scripts directly in the GitHub Actions
                    workflow via AWS SSM <code className="text-foreground">--parameters &apos;commands=[&quot;...&quot;]&apos;</code>,
                    nested double quotes and bash variable interpolations broke. Commands either executed partially
                    or failed with unexpected EOF syntax errors.
                  </p>
                </div>

                <div>
                  <strong className="text-foreground block uppercase text-[10px]">What I Investigated</strong>
                  <p className="mt-0.5">
                    Investigated the difference between an interactive shell and SSM Run Command execution.
                    SSM passes command strings through the AWS Systems Manager agent without an interactive TTY,
                    meaning multi-level shell escaping between YAML, JSON, and bash is inherently fragile.
                  </p>
                </div>

                <div>
                  <strong className="text-foreground block uppercase text-[10px]">The Fix</strong>
                  <p className="mt-0.5">
                    Stopped passing inline multi-line scripts across the cloud API. Instead, created a dedicated,
                    version-controlled <code className="text-foreground font-bold">deploy.sh</code> script placed on the EC2 host.
                    GitHub Actions now issues a single deterministic command:{" "}
                    <code className="bg-surface-secondary px-1 text-foreground font-bold">
                      /opt/devopshub/deploy.sh &quot;&#36;&#123;GITHUB_SHA&#125;&quot;
                    </code>.
                  </p>
                </div>

                <div>
                  <strong className="text-foreground block uppercase text-[10px] text-[#F1BE05]">What I Learned</strong>
                  <p className="mt-0.5 text-foreground/90">
                    Treat CI runners as triggers, not script writers. Complex deployment logic belongs in version-controlled
                    scripts on the target environment where it can be independently tested, linted, and executed.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-border/40 flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">#SSMRunCommand</span>
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">#BashEscaping</span>
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">#DeterministicScripts</span>
            </div>
          </div>

          {/* Note 02 */}
          <div className="border-2 border-border bg-card p-5 sm:p-6 shadow-[5px_5px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Server className="size-4 text-[#F1BE05]" aria-hidden="true" />
                  <span className="font-mono text-xs font-black uppercase text-[#F1BE05]">
                    INCIDENT 02 // SEQUENTIAL REPLACEMENT
                  </span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">
                  CONTAINER LIFECYCLE
                </span>
              </div>

              <h3 className="font-display text-2xl text-foreground">
                Container Downtime Window & Failure Abandonment
              </h3>

              <div className="mt-4 space-y-3 font-mono text-xs text-muted-foreground leading-relaxed">
                <div>
                  <strong className="text-foreground block uppercase text-[10px]">The Problem</strong>
                  <p className="mt-0.5">
                    Early deploy scripts naively executed <code className="text-foreground">docker stop</code> and{" "}
                    <code className="text-foreground">docker rm</code> before pulling the new image and running it.
                    On a single EC2 t3.micro instance, pulling layers took 8–15 seconds of site downtime. Even worse:
                    if the new container crashed on boot, the server remained down indefinitely.
                  </p>
                </div>

                <div>
                  <strong className="text-foreground block uppercase text-[10px]">What I Investigated</strong>
                  <p className="mt-0.5">
                    Researched blue/green container deployments, local port remapping, and Docker container lifecycle
                    hooks. Evaluated whether a reverse proxy like Nginx could gracefully route traffic between dual containers.
                  </p>
                </div>

                <div>
                  <strong className="text-foreground block uppercase text-[10px]">The Fix</strong>
                  <p className="mt-0.5">
                    Re-architected the deployment script into four defensive stages: (1) Pre-pull the new image first while the
                    old container runs, (2) Perform an atomic container stop and immediate start, (3) Poll health check endpoints
                    in a retry loop, and (4) Automatically relaunch the previous image tag if health verification fails.
                  </p>
                </div>

                <div>
                  <strong className="text-foreground block uppercase text-[10px] text-[#F1BE05]">What I Learned</strong>
                  <p className="mt-0.5 text-foreground/90">
                    High availability is an architectural discipline, not just an enterprise buzzword. Even on a single VM,
                    ordering operations defensively protects user uptime during releases.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-border/40 flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">#ContainerLifecycle</span>
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">#PrePullPattern</span>
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">#RollbackResilience</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 — THE ROADMAP & PROJECT NAVIGATION
          Upcoming infrastructure milestones:
          Prometheus metrics, CloudWatch logging, Terraform IaC
          Followed by previous/next project navigation
      ========================================================================= */}
      <section aria-labelledby="roadmap-heading" className="space-y-12">
        <div className="border-2 sm:border-[2.5px] border-border bg-card p-6 sm:p-8 shadow-[6px_6px_0px_0px_var(--border)] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b-2 border-border/80 pb-4">
            <div className="flex items-center gap-2">
              <Layers className="size-5 text-[#42BFDD]" aria-hidden="true" />
              <h3
                id="roadmap-heading"
                className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
              >
                05 // THE ROADMAP · UPCOMING INFRASTRUCTURE MILESTONES
              </h3>
            </div>
            <span className="font-mono text-xs font-bold text-muted-foreground">
              FUTURE RELEASES (NOT COMPLETED YET)
            </span>
          </div>

          <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
            DevOpsHub is an ongoing learning laboratory. The current milestone handles automated
            CI/CD and recovery; the next phases focus on full observability and declarative infrastructure.
          </p>

          {/* 3 Upcoming Milestone Cards */}
          <div className="grid gap-4 sm:grid-cols-3 font-mono text-xs">
            {/* Task 01 */}
            <div className="border-2 border-border bg-card p-4 shadow-[3px_3px_0px_0px_var(--border)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-muted-foreground">TASK 01</span>
                  <span className="px-1.5 py-0.5 bg-[#F1BE05] text-black font-black text-[9px]">
                    IN PROGRESS
                  </span>
                </div>
                <h4 className="font-display text-lg text-foreground font-bold">
                  Prometheus & Grafana
                </h4>
                <p className="mt-2 text-muted-foreground leading-relaxed text-[11px]">
                  Instrumenting Flask with Prometheus metrics to measure request latencies, status code distribution,
                  and Postgres connection pool health.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-border/40 text-[10px] text-foreground font-bold">
                Tech: prometheus-flask-exporter
              </div>
            </div>

            {/* Task 02 */}
            <div className="border-2 border-border bg-card p-4 shadow-[3px_3px_0px_0px_var(--border)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-muted-foreground">TASK 02</span>
                  <span className="px-1.5 py-0.5 border border-border text-muted-foreground font-bold text-[9px]">
                    PLANNED
                  </span>
                </div>
                <h4 className="font-display text-lg text-foreground font-bold">
                  CloudWatch Centralized Logs
                </h4>
                <p className="mt-2 text-muted-foreground leading-relaxed text-[11px]">
                  Streaming Docker container stdout logs to AWS CloudWatch with structured JSON formatting and SNS
                  alerts triggered on repeated 5xx errors.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-border/40 text-[10px] text-foreground font-bold">
                Tech: CloudWatch Agent & AWS SNS
              </div>
            </div>

            {/* Task 03 */}
            <div className="border-2 border-border bg-card p-4 shadow-[3px_3px_0px_0px_var(--border)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-muted-foreground">TASK 03</span>
                  <span className="px-1.5 py-0.5 border border-border text-muted-foreground font-bold text-[9px]">
                    PLANNED
                  </span>
                </div>
                <h4 className="font-display text-lg text-foreground font-bold">
                  Terraform Infrastructure as Code
                </h4>
                <p className="mt-2 text-muted-foreground leading-relaxed text-[11px]">
                  Replacing AWS Console manual provisioning with declarative HCL code defining the VPC, EC2 instance,
                  security groups, and IAM roles.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-border/40 text-[10px] text-foreground font-bold">
                Tech: Terraform · S3 Remote State
              </div>
            </div>
          </div>
        </div>

        {/* Previous and Next Project Navigation */}
        <ProjectArchiveNav previous={previous} next={next} accentColor="#42BFDD" />
      </section>
    </article>
  );
}
