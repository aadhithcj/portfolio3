import { Link } from "@tanstack/react-router";
import { type Project } from "@/lib/portfolio";
import {
  ArrowUpRight,
  Brain,
  CloudSun,
  Layers,
  Sprout,
  ExternalLink,
  Cpu,
  Compass,
  CheckCircle2,
  Workflow,
  AlertTriangle,
  GraduationCap,
} from "lucide-react";

interface RootsCaseStudyProps {
  project: Project;
  previous: Project;
  next: Project;
}

export function RootsCaseStudy({
  project,
  previous,
  next,
}: RootsCaseStudyProps) {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero */}
      <header className="border-b border-line pb-8 sm:pb-10">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-lime">
          <span>AI / MACHINE LEARNING / AGRITECH</span>
          <span className="text-muted-foreground/60">•</span>
          <span>INTERNSHIP PROJECT · 2025</span>
        </div>

        <h1 className="mt-3 break-words font-display text-5xl leading-[1.04] sm:text-6xl md:text-7xl">
          Roots<span className="text-lime">.</span>
        </h1>

        <p className="mt-2 font-display text-xl text-foreground/90 sm:text-2xl">
          AI-powered crop recommendation system.
        </p>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          A full-stack agricultural recommendation application that combines
          environmental conditions, live weather data, and machine learning to
          suggest optimal crops for any selected geographical location.
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

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              data-crosshair-target
              className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg border border-lime/60 bg-lime/10 px-4 py-2 font-mono text-xs font-medium text-lime transition-all hover:bg-lime/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2"
            >
              <span>Live application</span>
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          )}

          <span className="rounded-lg border border-line/60 bg-surface/40 px-3 py-2 font-mono text-xs text-muted-foreground">
            Python · Scikit-learn · Flask · React · TypeScript · Open-Meteo
          </span>
        </div>

        {/* Internship Badge */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-line/70 bg-surface/50 px-3 py-1.5 font-mono text-xs text-muted-foreground">
          <GraduationCap className="size-3.5 text-lime" aria-hidden="true" />
          <span>
            AI/ML Internship · ICT Academy of Kerala · Technopark,
            Thiruvananthapuram (1 Month)
          </span>
        </div>
      </header>

      {/* Architecture & Flow */}
      <section aria-labelledby="arch-heading" className="space-y-4">
        <h2 id="arch-heading" className="label-mono text-lime">
          # 01 // FULL-STACK SYSTEM ARCHITECTURE
        </h2>

        <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md sm:p-6">
          <div className="grid gap-3 sm:grid-cols-4">
            <div className="rounded-lg border border-line/80 bg-background/60 p-3.5">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">01 FRONTEND</span>
                <Layers className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-base text-foreground">
                React & TypeScript
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Geolocation · Weather UI · Results
              </p>
            </div>

            <div className="rounded-lg border border-line/80 bg-background/60 p-3.5">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">02 API LAYER</span>
                <Cpu className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-base text-foreground">
                Flask REST API
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Validation · Weather cache · Routes
              </p>
            </div>

            <div className="rounded-lg border border-lime/40 bg-background/80 p-3.5">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">03 ML MODEL</span>
                <Brain className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-base text-foreground">
                Scikit-Learn Model
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Random Forest · 7 Soil/Climate inputs
              </p>
            </div>

            <div className="rounded-lg border border-line/80 bg-background/60 p-3.5">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">04 EXTERNAL DATA</span>
                <CloudSun className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-base text-foreground">
                Open-Meteo APIs
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Live metrics + 1991–2020 rainfall
              </p>
            </div>
          </div>

          <p className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground">
            The frontend captures location coordinates and soil properties, the
            Flask service aggregates real-time temperature, humidity, and
            historical rainfall via Open-Meteo APIs, and feeds the standardized
            7-feature vector into a serialized Random Forest classifier to
            return ranked agricultural recommendations.
          </p>
        </div>
      </section>

      {/* 4-Step User & Inference Flow */}
      <section aria-labelledby="flow-heading" className="space-y-4">
        <h2 id="flow-heading" className="label-mono text-lime">
          # 02 // FOUR-STEP RECOMMENDATION PIPELINE
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Step 1 */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                01 — Location Selection
              </span>
              <Compass className="size-4 text-lime" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Users search by city/region or activate device geolocation. The
              application resolves coordinates and manages past location history
              for rapid re-evaluation.
            </p>
            <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-foreground/80">
              <span className="rounded border border-line/60 bg-surface px-1.5 py-0.5">
                Browser Geolocation
              </span>
              <span className="rounded border border-line/60 bg-surface px-1.5 py-0.5">
                Location History
              </span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                02 — Weather Data Extraction
              </span>
              <CloudSun className="size-4 text-lime" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              The Flask service fetches real-time temperature and relative
              humidity alongside historical precipitation archives (1991–2020)
              to synthesize an annualized rainfall index.
            </p>
            <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-foreground/80">
              <span className="rounded border border-line/60 bg-surface px-1.5 py-0.5">
                Open-Meteo Integration
              </span>
              <span className="rounded border border-line/60 bg-surface px-1.5 py-0.5">
                In-Memory Cache
              </span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                03 — Soil Parameter Inputs
              </span>
              <Sprout className="size-4 text-lime" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Accepts essential chemical soil properties: Nitrogen (N),
              Phosphorus (P), Potassium (K), and soil pH levels, using regional
              baseline estimates with support for manual input override.
            </p>
            <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-foreground/80">
              <span className="rounded border border-line/60 bg-surface px-1.5 py-0.5">
                NPK Ratios
              </span>
              <span className="rounded border border-line/60 bg-surface px-1.5 py-0.5">
                pH Chemistry
              </span>
              <span className="rounded border border-line/60 bg-surface px-1.5 py-0.5">
                Prototype Defaults
              </span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                04 — Crop Prediction & Fallback
              </span>
              <Brain className="size-4 text-lime" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Evaluates the trained model to predict the top 3 recommended crops
              with probabilistic confidence scores, falling back to a
              deterministic agricultural heuristic if the ML inference fails.
            </p>
            <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-foreground/80">
              <span className="rounded border border-line/60 bg-surface px-1.5 py-0.5">
                Top-3 Probability
              </span>
              <span className="rounded border border-line/60 bg-surface px-1.5 py-0.5">
                Crop Metadata
              </span>
              <span className="rounded border border-line/60 bg-surface px-1.5 py-0.5">
                Rule-Based Fallback
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Model & Feature Details */}
      <section aria-labelledby="ml-heading" className="space-y-4">
        <h2 id="ml-heading" className="label-mono text-lime">
          # 03 // ML MODEL & FEATURE SPECIFICATION
        </h2>

        <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md sm:p-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            The core predictive engine is a{" "}
            <span className="font-semibold text-foreground">
              Random Forest Classifier
            </span>{" "}
            trained in Google Colab on multi-class crop records (
            <code className="text-lime">cropsdata.csv</code>) and serialized to
            a <code className="text-lime">.pkl</code> artifact for low-latency
            serving in Flask. The model evaluates seven environmental vectors:
          </p>

          <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-lg border border-line/70 bg-background/50 p-2.5">
              <span className="font-mono text-[10px] text-lime">
                SOIL NUTRIENT
              </span>
              <p className="font-display text-sm text-foreground">
                Nitrogen (N)
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Vegetative leaf growth ratio
              </p>
            </div>

            <div className="rounded-lg border border-line/70 bg-background/50 p-2.5">
              <span className="font-mono text-[10px] text-lime">
                SOIL NUTRIENT
              </span>
              <p className="font-display text-sm text-foreground">
                Phosphorus (P)
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Root & seed development
              </p>
            </div>

            <div className="rounded-lg border border-line/70 bg-background/50 p-2.5">
              <span className="font-mono text-[10px] text-lime">
                SOIL NUTRIENT
              </span>
              <p className="font-display text-sm text-foreground">
                Potassium (K)
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Disease & drought resistance
              </p>
            </div>

            <div className="rounded-lg border border-line/70 bg-background/50 p-2.5">
              <span className="font-mono text-[10px] text-lime">
                SOIL CHEMISTRY
              </span>
              <p className="font-display text-sm text-foreground">Soil pH</p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Nutrient availability index
              </p>
            </div>

            <div className="rounded-lg border border-line/70 bg-background/50 p-2.5">
              <span className="font-mono text-[10px] text-lime">CLIMATE</span>
              <p className="font-display text-sm text-foreground">
                Temperature
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Live ambient reading (°C)
              </p>
            </div>

            <div className="rounded-lg border border-line/70 bg-background/50 p-2.5">
              <span className="font-mono text-[10px] text-lime">CLIMATE</span>
              <p className="font-display text-sm text-foreground">Humidity</p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Relative moisture (%)
              </p>
            </div>

            <div className="rounded-lg border border-line/70 bg-background/50 p-2.5 sm:col-span-2">
              <span className="font-mono text-[10px] text-lime">
                PRECIPITATION
              </span>
              <p className="font-display text-sm text-foreground">
                Annual Rainfall
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Derived historical precipitation estimate (mm)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Challenges & Lessons */}
      <section aria-labelledby="challenges-heading" className="space-y-4">
        <h2 id="challenges-heading" className="label-mono text-lime">
          # 04 // CHALLENGES & PRACTICAL LEARNINGS
        </h2>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-foreground">
              <Workflow className="size-4 text-lime" aria-hidden="true" />
              <span>Bridging ML to Full-Stack Web</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Transitioned a standalone Colab notebook into an interactive web
              app. Engineered input verification in Flask, handled serialized
              model deserialization, and formatted multi-class probabilities
              into clean, ranked JSON responses for React.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-foreground">
              <CloudSun className="size-4 text-lime" aria-hidden="true" />
              <span>Harmonizing Environmental Data</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Live APIs don't supply annual rainfall on demand. Solved by
              querying Open-Meteo's historical archives (1991–2020) and deriving
              annualized precipitation norms, coupled with in-memory caching to
              curb rate limits.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-foreground">
              <AlertTriangle className="size-4 text-lime" aria-hidden="true" />
              <span>Transparent Data Boundaries</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              A key internship insight was avoiding false accuracy claims. Soil
              values use state-level baseline defaults rather than physical
              field sensors; the UI clearly displays when default assumptions or
              rule-based fallbacks are active.
            </p>
          </div>
        </div>
      </section>

      {/* Internship Context & Improvements */}
      <section
        aria-labelledby="internship-heading"
        className="rounded-xl border border-line bg-surface/40 p-5 backdrop-blur-md"
      >
        <div className="flex flex-col gap-2 border-b border-line/60 pb-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-lime" aria-hidden="true" />
            <h3
              id="internship-heading"
              className="font-display text-lg text-foreground"
            >
              Internship Experience & Scope
            </h3>
          </div>
          <span className="font-mono text-[11px] font-semibold text-lime">
            ICT Academy of Kerala
          </span>
        </div>
        <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">
          Roots was developed as part of a focused 1-month AI/ML internship at
          Technopark, Thiruvananthapuram. The project emphasized connecting
          machine learning models to live web services, handling data
          provenance, and turning raw predictions into accessible, actionable
          tools for everyday users.
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
