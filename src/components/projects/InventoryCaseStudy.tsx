import { Link } from "@tanstack/react-router";
import { type Project } from "@/lib/portfolio";
import { ProjectArchiveNav } from "./ProjectArchiveNav";
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
  Search,
  Printer,
  AlertCircle,
  Truck,
  ShoppingCart,
  Check,
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
    <article className="space-y-16 sm:space-y-24">
      {/* =========================================================================
          01 — PROJECT BRIEF & HERO
          Case File 003, In Daily Use badge, Business impact headline,
          Core value differentiator: Built for a working motor-parts shop.
      ========================================================================= */}
      <section aria-labelledby="brief-heading" className="space-y-8">
        {/* Section Index Marker */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#FF7700]" aria-hidden="true" />
            <p className="font-mono text-xs font-black uppercase tracking-wider text-foreground">
              ACJ_ / CASE FILE 003 · DESKTOP SOFTWARE / INVENTORY / BILLING
            </p>
          </div>
          <div className="inline-flex items-center gap-2 border-2 border-border bg-[#22C55E] px-2.5 py-0.5 text-black font-mono text-xs font-bold shadow-[2px_2px_0px_0px_var(--border)]">
            <span className="size-2 rounded-full bg-black animate-pulse" />
            <span>IN DAILY USE // COMMERCIAL PRODUCTION</span>
          </div>
        </div>

        {/* Hero Headline & Impact Statement */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 xl:gap-12 items-start">
          {/* Left Narrative */}
          <div className="flex flex-col">
            <h1
              id="brief-heading"
              className="font-display text-5xl sm:text-7xl md:text-8xl tracking-tight text-foreground leading-[0.94]"
            >
              Inventory Management System<span className="text-[#FF7700]">.</span>
            </h1>

            <p className="mt-4 font-display text-2xl sm:text-3xl text-foreground font-medium leading-tight">
              Built for the counter. Designed for the real world.
            </p>

            {/* Standout Business Impact Differentiator */}
            <div className="mt-5 border-2 border-border bg-[#F1BE05] text-black p-3.5 sm:p-4 shadow-[4px_4px_0px_0px_var(--border)] flex items-start gap-3">
              <span className="font-mono text-base font-black shrink-0">★</span>
              <div>
                <p className="font-mono text-xs sm:text-sm font-black uppercase tracking-wide">
                  BUILT FOR A WORKING MOTOR-PARTS SHOP. STILL IN ACTIVE DAILY USE.
                </p>
                <p className="mt-1 font-mono text-xs text-black/80 leading-relaxed font-medium">
                  Deployed on-site in a retail automobile spare parts business to manage
                  daily customer sales, wholesale purchasing, supplier ledgers, and inventory valuations.
                </p>
              </div>
            </div>

            <p className="mt-5 font-mono text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              A robust desktop application combining fast inventory lookup, purchasing,
              customer credit ledgers, supplier intake, and instant PDF billing into one
              fast, transaction-safe local workflow.
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
                <span>OFFLINE LOCAL AIR-GAPPED</span>
              </span>
            </div>

            {/* Technology Stack Pills */}
            <div className="mt-6 pt-4 border-t-2 border-border/40 flex flex-wrap gap-2 font-mono text-[11px]">
              <span className="border border-border bg-card px-2.5 py-1 text-foreground font-bold">
                PYTHON 3.11
              </span>
              <span className="border border-border bg-card px-2.5 py-1 text-foreground font-bold">
                PYQT6 DESKTOP
              </span>
              <span className="border border-border bg-card px-2.5 py-1 text-foreground font-bold">
                SQLITE (ACID)
              </span>
              <span className="border border-border bg-card px-2.5 py-1 text-foreground font-bold">
                REPORTLAB PDF
              </span>
              <span className="border border-border bg-card px-2.5 py-1 text-foreground font-bold">
                GEMINI 1.5 FLASH
              </span>
            </div>
          </div>

          {/* Right Widget: Real Commercial Operating Docket */}
          <div className="border-2 sm:border-[2.5px] border-border bg-card p-5 sm:p-6 shadow-[6px_6px_0px_0px_var(--border)] space-y-4">
            <div className="flex items-center justify-between border-b-2 border-border pb-3">
              <span className="font-mono text-xs font-black uppercase text-foreground">
                COMMERCIAL DEPLOYMENT // DOCKET
              </span>
              <span className="size-2.5 rounded-full bg-[#22C55E]" />
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="border-b border-border/40 pb-2.5">
                <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                  ENVIRONMENT
                </span>
                <span className="font-bold text-foreground mt-0.5 block">
                  Retail Counter Desktop (Windows 11 / Native)
                </span>
              </div>

              <div className="border-b border-border/40 pb-2.5">
                <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                  DEPLOYMENT DOMAIN
                </span>
                <span className="font-bold text-foreground mt-0.5 block">
                  Motorcycle & Scooter Spare Parts Retailer
                </span>
              </div>

              <div className="border-b border-border/40 pb-2.5">
                <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                  DATA RESIDENCY & BACKUP
                </span>
                <span className="font-bold text-foreground mt-0.5 block">
                  100% Local SQLite with 1-Click Automated Zip Backups
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                  PRIMARY RELIABILITY REQUIREMENT
                </span>
                <span className="font-bold text-[#FF7700] mt-0.5 block">
                  Zero Cloud Downtime & Strict Stock Consistency
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t-2 border-border font-mono text-[11px] flex items-center justify-between text-muted-foreground">
              <span>SYSTEM CADENCE:</span>
              <span className="font-bold text-foreground">MON-SAT 08:30-19:30</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — THE DAILY BUSINESS WORKFLOW (MAIN VISUAL)
          Explaining: Supplier Intake -> Stock Control -> Sales & Billing -> Invoices
          Connected workflow with numbered stages, operational mechanics
      ========================================================================= */}
      <section aria-labelledby="workflow-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#F1BE05]" aria-hidden="true" />
            <h2
              id="workflow-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              01 // THE DAILY WORKFLOW · PHYSICAL TO DIGITAL CYCLE
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            END-TO-END RETAIL OPERATION
          </span>
        </div>

        <div>
          <p className="font-display text-3xl sm:text-4xl text-foreground">
            How motor parts move from supplier crates to customer hands.
          </p>
          <p className="mt-2 font-mono text-xs sm:text-sm text-muted-foreground max-w-2xl">
            A cohesive four-stage cycle that synchronizes physical box handling with
            transaction-safe digital accounting at the shop counter.
          </p>
        </div>

        {/* 4-Stage Business Workflow Visualizer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {/* Stage 01 */}
          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2.5 mb-3">
                <span className="font-mono text-xs font-black px-2 py-0.5 bg-foreground text-background">
                  STAGE 01
                </span>
                <Truck className="size-4 text-[#FF7700]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl text-foreground">
                Supplier Intake
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Inbound Purchasing
              </p>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                Wholesale distributors deliver cartons. The operator records incoming parts, unit costs,
                quantities, and supplier invoices manually or via Gemini-assisted invoice extraction.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40 font-mono text-[10px] text-foreground font-bold">
              Event: Restock & Credit Ledger
            </div>
          </div>

          {/* Stage 02 */}
          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2.5 mb-3">
                <span className="font-mono text-xs font-black px-2 py-0.5 bg-foreground text-background">
                  STAGE 02
                </span>
                <Package className="size-4 text-[#F1BE05]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl text-foreground">
                Stock Control
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Active Catalog & Alerts
              </p>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                Central catalog monitors stock levels, rack locations, and retail margins. Low-stock
                threshold indicators flag fast-moving brake pads, oils, and filters before running dry.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40 font-mono text-[10px] text-foreground font-bold">
              Real-Time Valuation Calculation
            </div>
          </div>

          {/* Stage 03 */}
          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2.5 mb-3">
                <span className="font-mono text-xs font-black px-2 py-0.5 bg-foreground text-background">
                  STAGE 03
                </span>
                <ShoppingCart className="size-4 text-[#42BFDD]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl text-foreground">
                Sales & Billing
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Counter Checkout
              </p>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                Counter operator searches items via keyboard hotkeys. The checkout engine strictly
                validates stock quantities before committing decrements in an atomic transaction.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40 font-mono text-[10px] text-foreground font-bold">
              Pre-Checkout Stock Validation
            </div>
          </div>

          {/* Stage 04 */}
          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2.5 mb-3">
                <span className="font-mono text-xs font-black px-2 py-0.5 bg-foreground text-background">
                  STAGE 04
                </span>
                <Printer className="size-4 text-[#22C55E]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl text-foreground">
                PDF Invoices
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Branded Customer Receipts
              </p>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                Renders clean, branded PDF bills formatted with shop header, tax details, itemized totals,
                and bank QR codes, ready for thermal counter printers or full-page A4 slips.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40 font-mono text-[10px] text-foreground font-bold">
              Instant Thermal & A4 Printing
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — SHOWCASE: REAL APPLICATION SCREENSHOTS & INTERFACES
          Realistic counter billing screen, live invoice preview,
          authentic PyQt6 application visualizer
      ========================================================================= */}
      <section aria-labelledby="showcase-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#42BFDD]" aria-hidden="true" />
            <h2
              id="showcase-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              02 // APPLICATION SHOWCASE · RETAIL COUNTER INTERFACE
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            AUTHENTIC PYQT6 DESKTOP SUITE
          </span>
        </div>

        <div>
          <p className="font-display text-3xl sm:text-4xl text-foreground">
            A purpose-built interface designed for rapid keyboard operation.
          </p>
          <p className="mt-2 font-mono text-xs sm:text-sm text-muted-foreground max-w-2xl">
            Retail parts counters cannot afford multi-level modal dialogs. The billing
            screen places item lookup, quantity selection, and invoice generation on one screen.
          </p>
        </div>

        {/* Counter Billing & Invoice Dual Visualizer */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 items-start">
          {/* PyQt6 Billing Screen Mockup */}
          <div className="border-2 sm:border-[2.5px] border-border bg-card shadow-[6px_6px_0px_0px_var(--border)] overflow-hidden">
            {/* Window Title Bar */}
            <div className="border-b-2 border-border bg-surface-secondary/70 px-4 py-2.5 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="size-3 bg-[#FF3C38] border border-border" />
                <span className="size-3 bg-[#F1BE05] border border-border" />
                <span className="size-3 bg-[#22C55E] border border-border" />
                <span className="font-bold text-foreground ml-2">
                  GEARFIELD_MOTOSHOP v3.2 — [COUNTER BILLING]
                </span>
              </div>
              <span className="font-bold text-[#22C55E]">STATUS: ONLINE (SQLITE)</span>
            </div>

            {/* Application Inner Screen */}
            <div className="p-4 sm:p-5 space-y-4 font-mono text-xs">
              {/* Search Bar & Customer Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="border-2 border-border bg-background p-2 flex items-center gap-2">
                  <Search className="size-4 text-muted-foreground shrink-0" />
                  <span className="text-foreground font-bold">Yamaha FZ Brake</span>
                  <span className="text-[10px] text-muted-foreground ml-auto">[F2: SEARCH]</span>
                </div>
                <div className="border-2 border-border bg-background p-2 flex items-center justify-between">
                  <span className="text-foreground">CUSTOMER: Walk-in Cash</span>
                  <span className="text-[10px] text-[#22C55E] font-bold">[VERIFIED]</span>
                </div>
              </div>

              {/* Active Cart Table */}
              <div className="border-2 border-border bg-background overflow-x-auto">
                <table className="w-full text-left text-[11px]">
                  <thead className="border-b-2 border-border bg-surface-secondary/50 text-foreground font-bold">
                    <tr>
                      <th className="p-2 border-r border-border/40">PART #</th>
                      <th className="p-2 border-r border-border/40">ITEM DESCRIPTION</th>
                      <th className="p-2 border-r border-border/40 text-center">QTY</th>
                      <th className="p-2 border-r border-border/40 text-right">RATE</th>
                      <th className="p-2 text-right">AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-border/40 text-foreground">
                    <tr>
                      <td className="p-2 border-r border-border/40 font-bold">4021</td>
                      <td className="p-2 border-r border-border/40">Yamaha FZ Front Disc Brake Pad Set</td>
                      <td className="p-2 border-r border-border/40 text-center font-bold">2</td>
                      <td className="p-2 border-r border-border/40 text-right">₹380.00</td>
                      <td className="p-2 text-right font-bold">₹760.00</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r border-border/40 font-bold">1088</td>
                      <td className="p-2 border-r border-border/40">Motul 3100 4T 10W-40 1L Engine Oil</td>
                      <td className="p-2 border-r border-border/40 text-center font-bold">1</td>
                      <td className="p-2 border-r border-border/40 text-right">₹450.00</td>
                      <td className="p-2 text-right font-bold">₹450.00</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r border-border/40 font-bold">3312</td>
                      <td className="p-2 border-r border-border/40">Bajaj Pulsar 150 Clutch Cable (OE)</td>
                      <td className="p-2 border-r border-border/40 text-center font-bold">1</td>
                      <td className="p-2 border-r border-border/40 text-right">₹160.00</td>
                      <td className="p-2 text-right font-bold">₹160.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Tally & Totals Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t-2 border-border/60 pt-3">
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                  <span className="px-1.5 py-0.5 border border-border bg-card">3 ITEMS (4 UNITS)</span>
                  <span className="text-[#22C55E] font-bold">✓ INVENTORY VALIDATED</span>
                </div>
                <div className="flex items-baseline gap-3 self-end sm:self-auto font-mono">
                  <span className="text-xs text-muted-foreground uppercase font-bold">TOTAL PAYABLE:</span>
                  <span className="text-xl sm:text-2xl font-black text-foreground">₹1,370.00</span>
                </div>
              </div>

              {/* Hotkey Action Strip */}
              <div className="pt-2 border-t border-border/40 grid grid-cols-4 gap-2 text-[10px] text-center font-bold">
                <div className="border border-border bg-surface-secondary/60 p-1.5">[F2] ADD PART</div>
                <div className="border border-border bg-surface-secondary/60 p-1.5">[F4] DISCOUNT</div>
                <div className="border-2 border-border bg-[#F1BE05] text-black p-1.5">[F5] PRINT BILL</div>
                <div className="border border-border bg-surface-secondary/60 p-1.5 text-[#FF3C38]">[ESC] VOID</div>
              </div>
            </div>
          </div>

          {/* Generated Customer Invoice Docket Mockup */}
          <div className="border-2 border-border bg-card p-5 shadow-[5px_5px_0px_0px_var(--border)] font-mono text-xs space-y-4">
            <div className="border-b-2 border-border pb-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase text-muted-foreground block">
                  OUTPUT ARTIFACT
                </span>
                <span className="font-bold text-foreground text-sm">
                  Generated PDF Invoice
                </span>
              </div>
              <Receipt className="size-5 text-[#FF7700]" aria-hidden="true" />
            </div>

            <div className="border border-border/60 bg-background p-4 space-y-3 text-[11px] leading-tight">
              {/* Receipt Header */}
              <div className="text-center border-b border-border/40 pb-2.5">
                <div className="font-black text-sm uppercase text-foreground">GEARFIELD MOTOSHOP</div>
                <div className="text-muted-foreground text-[10px]">Two-Wheeler Spares & Lubricants</div>
                <div className="text-muted-foreground text-[10px]">GSTIN: 32AABCU9603R1ZM</div>
              </div>

              {/* Meta */}
              <div className="flex justify-between text-[10px] text-muted-foreground">
                <span>INVOICE: #INV-2026-0842</span>
                <span>DATE: 15-OCT-2026</span>
              </div>

              {/* Bill Items */}
              <div className="space-y-1.5 border-y border-border/40 py-2">
                <div className="flex justify-between">
                  <span>2× Yamaha FZ Brake Pads</span>
                  <span className="font-bold">₹760.00</span>
                </div>
                <div className="flex justify-between">
                  <span>1× Motul 3100 4T 10W40 1L</span>
                  <span className="font-bold">₹450.00</span>
                </div>
                <div className="flex justify-between">
                  <span>1× Pulsar 150 Clutch Cable</span>
                  <span className="font-bold">₹160.00</span>
                </div>
              </div>

              {/* Totals */}
              <div className="space-y-1 pt-1 font-bold">
                <div className="flex justify-between text-muted-foreground text-[10px]">
                  <span>SUBTOTAL</span>
                  <span>₹1,370.00</span>
                </div>
                <div className="flex justify-between text-muted-foreground text-[10px]">
                  <span>CGST (9%) + SGST (9%)</span>
                  <span>INCLUDED</span>
                </div>
                <div className="flex justify-between text-sm pt-1 border-t border-border/40 text-foreground">
                  <span>NET TOTAL PAID:</span>
                  <span>₹1,370.00</span>
                </div>
              </div>

              <div className="text-center pt-2 text-[9px] text-[#22C55E] font-bold">
                ● ATOMIC TRANSACTION COMMITTED (#TXN-88419)
              </div>
            </div>

            <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">
              Invoices are rendered with ReportLab directly to printable PDF streams,
              supporting thermal roll paper and formal customer warranty slips.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — STANDOUT PANEL: DATA INTEGRITY UNDER THE HOOD
          Atomic transactions, pre-checkout stock validation,
          automatic restocking on voided bills
      ========================================================================= */}
      <section aria-labelledby="integrity-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#FF3C38]" aria-hidden="true" />
            <h2
              id="integrity-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              03 // DATA INTEGRITY UNDER THE HOOD · ATOMIC TRANSACTIONS
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            PROTECTING PHYSICAL STOCK ACCURACY
          </span>
        </div>

        <div>
          <p className="font-display text-3xl sm:text-4xl text-foreground">
            Transactions that protect stock accuracy under real counter pressure.
          </p>
          <p className="mt-2 font-mono text-xs sm:text-sm text-muted-foreground max-w-2xl">
            At peak counter hours, multiple sales happen rapidly. Partial writes, race
            conditions, and unvalidated inventory decrements quickly create phantom stock.
            Here is how the SQLite transaction engine protects every count.
          </p>
        </div>

        {/* Standout Data Integrity Panel */}
        <div className="border-2 sm:border-[2.5px] border-border bg-card p-6 sm:p-8 shadow-[6px_6px_0px_0px_var(--border)] space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            {/* Pillar 1 */}
            <div className="border-2 border-border/80 bg-surface-secondary/40 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#FF7700] font-bold mb-2">
                  <Database className="size-4" />
                  <span className="text-[10px] uppercase font-black">PILLAR 01</span>
                </div>
                <h3 className="font-display text-xl text-foreground font-bold">
                  Atomic SQLite Commits
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed text-[11px]">
                  Creating an invoice requires updating the bill header, inserting multiple item rows,
                  and decrementing stock on every part. Wrapped in an atomic <code className="text-foreground font-bold">BEGIN TRANSACTION</code> block:
                  if any part fails, the entire transaction rolls back cleanly.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-border/40 text-[10px] text-foreground font-bold">
                Zero Partial Writes
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="border-2 border-border/80 bg-surface-secondary/40 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#F1BE05] font-bold mb-2">
                  <ShieldCheck className="size-4" />
                  <span className="text-[10px] uppercase font-black">PILLAR 02</span>
                </div>
                <h3 className="font-display text-xl text-foreground font-bold">
                  Pre-Checkout Validation
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed text-[11px]">
                  Before confirming any bill, the system checks <code className="text-foreground">available_qty &gt;= requested_qty</code> for
                  each item. The counter clerk cannot sell stock into negative numbers, preventing awkward
                  counter situations where a paid customer receives an empty shelf.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-border/40 text-[10px] text-foreground font-bold">
                Prevents Negative Inventory
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="border-2 border-border/80 bg-surface-secondary/40 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#22C55E] font-bold mb-2">
                  <RotateCcw className="size-4" />
                  <span className="text-[10px] uppercase font-black">PILLAR 03</span>
                </div>
                <h3 className="font-display text-xl text-foreground font-bold">
                  Compensating Restock Voids
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed text-[11px]">
                  When a customer returns items or an operator voids an accidental sale, the application
                  executes a compensating transaction. It marks the invoice as voided and automatically
                  increments part quantities back onto the shelf without manual re-entry.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-border/40 text-[10px] text-foreground font-bold">
                Automated Restocking on Void
              </div>
            </div>
          </div>

          {/* SQLite Transaction Code Snippet */}
          <div className="border-2 border-border bg-[#05131A] text-[#F7F0D9] p-4 sm:p-5 font-mono text-xs overflow-x-auto">
            <div className="flex items-center justify-between text-muted-foreground mb-3 text-[11px]">
              <span>// TRANSACTION ENGINE IMPLEMENTATION (PYTHON + SQLITE3)</span>
              <span className="text-[#22C55E] font-bold">ACID COMPLIANT</span>
            </div>
            <pre className="text-[11px] leading-relaxed text-foreground/90">
{`def commit_customer_invoice(cursor, customer_id, cart_items, payment_mode):
    # 1. Pre-checkout stock validation
    for item in cart_items:
        cursor.execute("SELECT stock_quantity, part_name FROM parts WHERE id = ?", (item.part_id,))
        available, name = cursor.fetchone()
        if available < item.qty:
            raise InsufficientStockError(f"Cannot sell {item.qty} of {name}. Only {available} in stock.")

    # 2. Atomic Bill Header & Line Items
    cursor.execute("INSERT INTO customer_bills (customer_id, payment_mode, total) VALUES (?, ?, ?)",
                   (customer_id, payment_mode, total_amount))
    bill_id = cursor.lastrowid

    # 3. Synchronized Inventory Decrement
    for item in cart_items:
        cursor.execute("INSERT INTO bill_items (bill_id, part_id, qty, unit_price) VALUES (?, ?, ?, ?)",
                       (bill_id, item.part_id, item.qty, item.unit_price))
        cursor.execute("UPDATE parts SET stock_quantity = stock_quantity - ? WHERE id = ?",
                       (item.qty, item.part_id))
    return bill_id`}
            </pre>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 — MORE THAN CRUD: ASSISTED SUPPLIER INVOICE INTAKE
          Gemini-assisted extraction for supplier wholesale invoices,
          line item matching, and human review before restocking
      ========================================================================= */}
      <section aria-labelledby="intake-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#42BFDD]" aria-hidden="true" />
            <h2
              id="intake-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              04 // MORE THAN CRUD · ASSISTED SUPPLIER INTAKE
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            GEMINI 1.5 FLASH STRUCTURED PARSING
          </span>
        </div>

        <div>
          <p className="font-display text-3xl sm:text-4xl text-foreground">
            Eliminating tedious manual entry from wholesale distributor bills.
          </p>
          <p className="mt-2 font-mono text-xs sm:text-sm text-muted-foreground max-w-2xl">
            Distributors send invoices in varied formats—dense multi-page PDFs, scanned thermal
            printouts, and handwritten delivery notes. The intake pipeline blends AI extraction
            with human review.
          </p>
        </div>

        {/* 3-Step Intake Pipeline */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-3">
                <span className="font-mono text-xs font-bold text-muted-foreground">STEP 01</span>
                <FileText className="size-4 text-[#42BFDD]" />
              </div>
              <h3 className="font-display text-xl text-foreground font-bold">
                Drop Invoice PDF / Scan
              </h3>
              <p className="mt-2 font-mono text-xs text-muted-foreground leading-relaxed">
                Counter operator drags an incoming supplier bill (PDF or camera snapshot) directly into
                the PyQt6 intake window.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-border/40 font-mono text-[10px] text-foreground font-bold">
              Input: Multi-Format Documents
            </div>
          </div>

          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-3">
                <span className="font-mono text-xs font-bold text-muted-foreground">STEP 02</span>
                <Sparkles className="size-4 text-[#F1BE05]" />
              </div>
              <h3 className="font-display text-xl text-foreground font-bold">
                Gemini Extraction Hook
              </h3>
              <p className="mt-2 font-mono text-xs text-muted-foreground leading-relaxed">
                A background worker transmits document buffers to Google Gemini API with a strict JSON schema,
                extracting item names, part numbers, unit wholesale rates, and GST breakdown.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-border/40 font-mono text-[10px] text-foreground font-bold">
              Structured JSON Schema Response
            </div>
          </div>

          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-3">
                <span className="font-mono text-xs font-bold text-muted-foreground">STEP 03</span>
                <Check className="size-4 text-[#22C55E]" />
              </div>
              <h3 className="font-display text-xl text-foreground font-bold">
                Match & Restock Modal
              </h3>
              <p className="mt-2 font-mono text-xs text-muted-foreground leading-relaxed">
                Extracted items appear in an interactive verification grid. The system suggests fuzzy matches to existing
                catalog parts, letting the clerk verify prices before committing wholesale restocks.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-border/40 font-mono text-[10px] text-foreground font-bold">
              Human-in-the-Loop Validation
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06 — CHALLENGES: CONCISE BEFORE-AND-AFTER STORIES
          Focus on accurate stock, varied supplier invoices, speeding up counter
      ========================================================================= */}
      <section aria-labelledby="challenges-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#FF3C38]" aria-hidden="true" />
            <h2
              id="challenges-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              05 // ENGINEERING CHALLENGES · BEFORE-AND-AFTER STORIES
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            REAL-WORLD SOLVED BOTTLENECKS
          </span>
        </div>

        <div>
          <p className="font-display text-3xl sm:text-4xl text-foreground">
            Overcoming retail bottlenecks with sound software design.
          </p>
          <p className="mt-2 font-mono text-xs sm:text-sm text-muted-foreground max-w-2xl">
            Software for physical commerce succeeds on tiny details: fast lookups,
            handling messy paper invoices, and never leaving the database in an inconsistent state.
          </p>
        </div>

        {/* 3 Before-and-After Narrative Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Story 01 */}
          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-3 font-mono text-xs">
                <span className="font-bold text-[#FF7700]">STORY 01</span>
                <span className="text-muted-foreground text-[10px]">INVENTORY ACCURACY</span>
              </div>
              <h3 className="font-display text-xl text-foreground font-bold">
                Stock Counts at Peak Counter Rush
              </h3>

              <div className="mt-4 space-y-3 font-mono text-xs">
                <div className="border-l-2 border-[#FF3C38] pl-2.5">
                  <span className="text-[10px] font-bold text-[#FF3C38] uppercase block">Before</span>
                  <p className="text-muted-foreground text-[11px] mt-0.5 leading-relaxed">
                    Paper checkout receipts and end-of-day tallying caused constant count drift.
                    Customers frequently were promised parts that had already been sold an hour earlier.
                  </p>
                </div>

                <div className="border-l-2 border-[#22C55E] pl-2.5">
                  <span className="text-[10px] font-bold text-[#22C55E] uppercase block">After</span>
                  <p className="text-foreground text-[11px] mt-0.5 leading-relaxed font-medium">
                    Strict pre-checkout validation and atomic SQLite decrements keep physical and digital
                    counts 100% synchronized in real time.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-2 border-t border-border/40 font-mono text-[10px] text-muted-foreground">
              Takeaway: Real-time consistency beats batch reconciliation.
            </div>
          </div>

          {/* Story 02 */}
          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-3 font-mono text-xs">
                <span className="font-bold text-[#F1BE05]">STORY 02</span>
                <span className="text-muted-foreground text-[10px]">SUPPLIER INGESTION</span>
              </div>
              <h3 className="font-display text-xl text-foreground font-bold">
                Inconsistent Supplier Paperwork
              </h3>

              <div className="mt-4 space-y-3 font-mono text-xs">
                <div className="border-l-2 border-[#FF3C38] pl-2.5">
                  <span className="text-[10px] font-bold text-[#FF3C38] uppercase block">Before</span>
                  <p className="text-muted-foreground text-[11px] mt-0.5 leading-relaxed">
                    Entering a 50-item wholesale distributor delivery took 25+ minutes of manual keyboard
                    data entry, leading to unentered boxes piling up near the counter.
                  </p>
                </div>

                <div className="border-l-2 border-[#22C55E] pl-2.5">
                  <span className="text-[10px] font-bold text-[#22C55E] uppercase block">After</span>
                  <p className="text-foreground text-[11px] mt-0.5 leading-relaxed font-medium">
                    Gemini-assisted structured extraction parses the invoice into a matched preview table
                    in under 5 seconds, cutting intake time by over 80%.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-2 border-t border-border/40 font-mono text-[10px] text-muted-foreground">
              Takeaway: AI works best when paired with human review.
            </div>
          </div>

          {/* Story 03 */}
          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-3 font-mono text-xs">
                <span className="font-bold text-[#42BFDD]">STORY 03</span>
                <span className="text-muted-foreground text-[10px]">COUNTER SPEED</span>
              </div>
              <h3 className="font-display text-xl text-foreground font-bold">
                Eliminating Mouse Bottlenecks
              </h3>

              <div className="mt-4 space-y-3 font-mono text-xs">
                <div className="border-l-2 border-[#FF3C38] pl-2.5">
                  <span className="text-[10px] font-bold text-[#FF3C38] uppercase block">Before</span>
                  <p className="text-muted-foreground text-[11px] mt-0.5 leading-relaxed">
                    Generic CRUD dropdowns and modal forms forced the clerk to switch between mouse and keyboard,
                    creating long customer lines during morning rush hours.
                  </p>
                </div>

                <div className="border-l-2 border-[#22C55E] pl-2.5">
                  <span className="text-[10px] font-bold text-[#22C55E] uppercase block">After</span>
                  <p className="text-foreground text-[11px] mt-0.5 leading-relaxed font-medium">
                    Engineered full keyboard navigation: multi-attribute search on F2, quantity change on Tab,
                    and instant printing on F5 for sub-10-second checkout.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-2 border-t border-border/40 font-mono text-[10px] text-muted-foreground">
              Takeaway: Optimize for physical operational ergonomics.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          07 — REAL-WORLD ADOPTION & PROJECT ARCHIVE NAVIGATION
      ========================================================================= */}
      <section aria-labelledby="adoption-heading" className="space-y-12">
        <div className="border-2 sm:border-[2.5px] border-border bg-card p-6 sm:p-8 shadow-[6px_6px_0px_0px_var(--border)] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b-2 border-border/80 pb-4">
            <div className="flex items-center gap-2">
              <Building2 className="size-5 text-[#FF7700]" aria-hidden="true" />
              <h3
                id="adoption-heading"
                className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
              >
                OUTCOME: PRODUCTION DEPLOYMENT & RELIABILITY
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#22C55E]">
              <span className="size-2 rounded-full bg-[#22C55E]" />
              ACTIVE COMMERCIAL RUNTIME
            </span>
          </div>

          <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Unlike sandbox tutorials or toy apps, the Inventory Management System was engineered
            directly around the messy realities of a physical motor-parts store. It continues to run
            day-in, day-out on the shop counter—proving that robust architecture, atomic transactions,
            and user-centered ergonomics create software that people genuinely depend on.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                data-crosshair-target
                className="inline-flex min-h-11 items-center justify-center gap-2 border-2 border-border bg-[#F1BE05] px-5 py-2.5 font-mono text-xs font-bold text-black shadow-[4px_4px_0px_0px_var(--border)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_var(--border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
              >
                <span>VIEW CODE REPOSITORY ON GITHUB</span>
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {/* Previous and Next Project Navigation */}
        <ProjectArchiveNav previous={previous} next={next} accentColor="#FF7700" />
      </section>
    </article>
  );
}
