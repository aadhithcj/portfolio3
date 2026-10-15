import { Link } from "@tanstack/react-router";
import { type Project } from "@/lib/portfolio";
import {
  ArrowUpRight,
  Database,
  FileText,
  Layers,
  Zap,
  CheckCircle2,
  Package,
  Receipt,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Building2,
  Workflow,
} from "lucide-react";

interface InventoryCaseStudyProps {
  project: Project;
  previous: Project;
  next: Project;
}

export function InventoryCaseStudy({
  project,
  previous,
  next,
}: InventoryCaseStudyProps) {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero */}
      <header className="border-b border-line pb-8 sm:pb-10">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-lime">
          <span>BUILT FOR REAL-WORLD OPERATIONS</span>
          <span className="text-muted-foreground/60">•</span>
          <span>STILL IN DAILY USE · 2026</span>
        </div>

        <h1 className="mt-3 break-words font-display text-5xl leading-[1.04] sm:text-6xl md:text-7xl">
          Inventory Management System<span className="text-lime">.</span>
        </h1>

        <p className="mt-2 font-display text-xl text-foreground/90 sm:text-2xl">
          Built for a working motor-parts shop. Still in use.
        </p>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Developed a desktop inventory and billing application for a
          motor-parts business, bringing stock management, purchasing, sales,
          customer records, supplier records, and reporting into one unified,
          transaction-safe workflow.
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
          <span className="rounded-lg border border-lime/40 bg-lime/10 px-3 py-2 font-mono text-xs font-semibold text-lime">
            Active Real-World Production Use
          </span>
          <span className="rounded-lg border border-line/60 bg-surface/40 px-3 py-2 font-mono text-xs text-muted-foreground">
            Python · PyQt6 · SQLite · PDF
          </span>
        </div>
      </header>

      {/* Architecture & Data Flow */}
      <section aria-labelledby="arch-heading" className="space-y-4">
        <h2 id="arch-heading" className="label-mono text-lime">
          # 01 // SYSTEM ARCHITECTURE & DATA FLOW
        </h2>

        <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md sm:p-6">
          <div className="grid gap-3 sm:grid-cols-4">
            <div className="rounded-lg border border-line/80 bg-background/60 p-3.5">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">01 UI LAYER</span>
                <Layers className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-base text-foreground">
                PyQt6 Interface
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Dashboard · Billing · Parts
              </p>
            </div>

            <div className="rounded-lg border border-line/80 bg-background/60 p-3.5">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">02 BUSINESS LOGIC</span>
                <Zap className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-base text-foreground">
                Transaction Engine
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Stock checks & discounts
              </p>
            </div>

            <div className="rounded-lg border border-lime/40 bg-background/80 p-3.5">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">03 STORAGE</span>
                <Database className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-base text-foreground">
                SQLite Database
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Foreign keys & backups
              </p>
            </div>

            <div className="rounded-lg border border-line/80 bg-background/60 p-3.5">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">04 INTEGRATIONS</span>
                <FileText className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-base text-foreground">
                PDFs & Gemini
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Invoice generation & OCR
              </p>
            </div>
          </div>

          <p className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground">
            The application separates UI presentation from transactional data
            logic. PyQt6 captures shop interactions, the transaction engine
            guarantees atomic stock updates, and an embedded SQLite database
            provides zero-latency offline persistence with integrated automatic
            backup tools and professional PDF invoice rendering.
          </p>
        </div>
      </section>

      {/* Core Engineering Highlights */}
      <section aria-labelledby="features-heading" className="space-y-4">
        <h2 id="features-heading" className="label-mono text-lime">
          # 02 // CORE OPERATIONAL WORKFLOWS
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Highlight 1 */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                Atomic Stock Consistency
              </span>
              <Package className="size-4 text-lime" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Sales, purchases, and voids are wrapped in atomic SQLite
              transactions. Customer bills validate available inventory before
              committing decrements, while voiding an invoice automatically
              restocks items and rolls back balances on failure.
            </p>
            <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-foreground/80">
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                ACID Transactions
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                Auto Stock Rollback
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                Foreign Key Integrity
              </span>
            </div>
          </div>

          {/* Highlight 2 */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                Customer Sales & Branded PDF Invoicing
              </span>
              <Receipt className="size-4 text-lime" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Instant part selection, line-item discounts, and customer account
              association. Generates clean, branded PDF invoices with shop logo,
              tax numbers, and bank details ready for thermal or standard A4
              printing.
            </p>
            <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-foreground/80">
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                ReportLab / PDF
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                Fast Item Lookup
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                Invoice Status Tracking
              </span>
            </div>
          </div>

          {/* Highlight 3 */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                Supplier Intake & Assisted Bill Extraction
              </span>
              <Sparkles className="size-4 text-lime" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Supports manual entry or assisted digital extraction from incoming
              supplier invoice PDFs and images using configured Google Gemini
              API parsing, matching incoming items against existing part numbers
              before committing restocks.
            </p>
            <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-foreground/80">
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                Assisted Ingestion
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                Gemini API Hook
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                Supplier Match Screen
              </span>
            </div>
          </div>

          {/* Highlight 4 */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                Dashboard, Valuations & Alerts
              </span>
              <ShieldCheck className="size-4 text-lime" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Real-time calculations for total parts, gross inventory valuation,
              and daily revenue. Includes low-stock threshold badges, batch
              editing, CSV import/export, keyboard shortcuts, and local database
              backup/restore.
            </p>
            <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-foreground/80">
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                Low-Stock Warnings
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                Inventory Valuation
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                Database Backups
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Challenges & Solutions */}
      <section aria-labelledby="challenges-heading" className="space-y-4">
        <h2 id="challenges-heading" className="label-mono text-lime">
          # 03 // CHALLENGES & PRACTICAL LEARNINGS
        </h2>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 text-foreground font-semibold font-mono text-xs">
              <RotateCcw className="size-4 text-lime" aria-hidden="true" />
              <span>Keeping Inventory Accurate</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Peak counter hours risked race conditions and phantom sales.
              Handled by strictly validating stock before checkout and wrapping
              stock decrements and bill lines in atomic SQLite transactions,
              with automatic restock on voided sales.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 text-foreground font-semibold font-mono text-xs">
              <Building2 className="size-4 text-lime" aria-hidden="true" />
              <span>Handling Varied Supplier Bills</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Suppliers submit invoices across diverse PDF layouts and scanned
              formats. Built an assisted ingestion pipeline with OCR/Gemini
              extraction paired with a human review modal to match extracted
              lines against existing part numbers.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 text-foreground font-semibold font-mono text-xs">
              <Workflow className="size-4 text-lime" aria-hidden="true" />
              <span>Streamlining Counter Workflows</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Daily retail counter work demanded maximum speed. Designed
              keyboard shortcuts, multi-attribute part search, batch inventory
              editing, and instant branded PDF receipt generation instead of a
              generic multi-step CRUD interface.
            </p>
          </div>
        </div>
      </section>

      {/* Real-World Adoption & Status */}
      <section
        aria-labelledby="adoption-heading"
        className="rounded-xl border border-line bg-surface/40 p-5 backdrop-blur-md"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-line/60 pb-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-lime" aria-hidden="true" />
            <h3
              id="adoption-heading"
              className="font-display text-lg text-foreground"
            >
              Outcome: Real-World Daily Operation
            </h3>
          </div>
          <span className="font-mono text-[11px] text-lime font-semibold">
            In Active Daily Use
          </span>
        </div>
        <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
          Developed for a working motor-parts shop to manage stock and billing.
          The software remains in continuous, active daily use for the shop's
          commercial day-to-day operations, handling stock tracking, supplier
          intakes, customer billing, and daily closing valuations.
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
