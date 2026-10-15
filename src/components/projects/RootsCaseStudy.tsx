import { Link } from "@tanstack/react-router";
import { type Project } from "@/lib/portfolio";
import { ProjectArchiveNav } from "./ProjectArchiveNav";
import {
  ArrowUpRight,
  ExternalLink,
  Brain,
  CloudSun,
  Layers,
  Sprout,
  Cpu,
  Compass,
  CheckCircle2,
  Workflow,
  AlertTriangle,
  GraduationCap,
  MapPin,
  Thermometer,
  Droplets,
  BarChart3,
  Check,
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
    <article className="space-y-16 sm:space-y-24">
      {/* =========================================================================
          01 — PROJECT BRIEF & HERO
          Case File 004 · AI / Agritech · 2025 Internship
          Title with subtle red accent, problem overview, tech badges
      ========================================================================= */}
      <section aria-labelledby="brief-heading" className="space-y-8">
        {/* Section Index Marker */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#22C55E]" aria-hidden="true" />
            <p className="font-mono text-xs font-black uppercase tracking-wider text-foreground">
              ACJ_ / CASE FILE 004 · AI / AGRITECH
            </p>
          </div>
          <div className="inline-flex items-center gap-2 border-2 border-border bg-[#F1BE05] px-2.5 py-0.5 text-black font-mono text-xs font-bold shadow-[2px_2px_0px_0px_var(--border)]">
            <span>INTERNSHIP PROJECT · 2025</span>
          </div>
        </div>

        {/* Hero Narrative & Architectural Spec Widget */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 xl:gap-12 items-start">
          {/* Left Narrative */}
          <div className="flex flex-col">
            <h1
              id="brief-heading"
              className="font-display text-6xl sm:text-7xl md:text-8xl tracking-tight text-foreground leading-[0.94]"
            >
              Roots<span className="text-[#FF3C38]">.</span>
            </h1>

            <p className="mt-4 font-display text-2xl sm:text-3xl text-foreground font-medium leading-tight">
              Turning environmental data into crop recommendations.
            </p>

            <p className="mt-4 font-mono text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              A full-stack agricultural recommendation prototype combining live weather
              telemetry, historical precipitation archives, regional soil parameters, and a
              trained Random Forest classifier to rank suitable crops for any selected geographical coordinates.
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

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-crosshair-target
                  className="inline-flex min-h-11 items-center justify-center gap-2 border-2 border-border bg-card px-5 py-2.5 font-mono text-xs font-bold text-foreground shadow-[3px_3px_0px_0px_var(--border)] transition-all hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink className="size-3.5 text-muted-foreground" aria-hidden="true" />
                </a>
              )}
            </div>

            {/* Academic & Internship Badge */}
            <div className="mt-6 border-2 border-border bg-card p-3 shadow-[3px_3px_0px_0px_var(--border)] flex items-center gap-2.5 font-mono text-xs text-foreground">
              <GraduationCap className="size-4 text-[#22C55E] shrink-0" aria-hidden="true" />
              <span>
                1-Month AI/ML Internship · ICT Academy of Kerala · Technopark, Thiruvananthapuram
              </span>
            </div>

            {/* Technology Stack Pills */}
            <div className="mt-6 pt-4 border-t-2 border-border/40 flex flex-wrap gap-2 font-mono text-[11px]">
              <span className="border border-border bg-card px-2.5 py-1 text-foreground font-bold">
                REACT + TYPESCRIPT
              </span>
              <span className="border border-border bg-card px-2.5 py-1 text-foreground font-bold">
                FLASK REST API
              </span>
              <span className="border border-border bg-card px-2.5 py-1 text-foreground font-bold">
                SCIKIT-LEARN
              </span>
              <span className="border border-border bg-card px-2.5 py-1 text-foreground font-bold">
                OPEN-METEO API
              </span>
            </div>
          </div>

          {/* Right Widget: Model & Data Provenance Spec */}
          <div className="border-2 sm:border-[2.5px] border-border bg-card p-5 sm:p-6 shadow-[6px_6px_0px_0px_var(--border)] space-y-4">
            <div className="flex items-center justify-between border-b-2 border-border pb-3">
              <span className="font-mono text-xs font-black uppercase text-foreground">
                ML PROTOTYPE // TELEMETRY
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                7-VECTOR INFERENCE
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="border-b border-border/40 pb-2.5">
                <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                  MODEL ARCHITECTURE
                </span>
                <span className="font-bold text-foreground mt-0.5 block">
                  Random Forest Classifier (Scikit-Learn)
                </span>
                <span className="text-[10px] text-muted-foreground block mt-0.5">
                  Multi-class decision ensemble trained on agro-climatic vectors
                </span>
              </div>

              <div className="border-b border-border/40 pb-2.5">
                <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                  EXTERNAL DATA SOURCES
                </span>
                <span className="font-bold text-foreground mt-0.5 block">
                  Open-Meteo Weather & Climate APIs
                </span>
                <span className="text-[10px] text-muted-foreground block mt-0.5">
                  Live temperature & humidity + 1991–2020 precipitation baseline
                </span>
              </div>

              <div className="border-b border-border/40 pb-2.5">
                <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                  PREDICTION PAYLOAD
                </span>
                <span className="font-bold text-[#22C55E] mt-0.5 block">
                  Ranked Top-3 Crops with Multi-Class Probabilities
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                  FAIL-SAFE MECHANISM
                </span>
                <span className="font-bold text-foreground mt-0.5 block">
                  Rule-based regional agro heuristic fallback
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t-2 border-border font-mono text-[11px] flex items-center justify-between text-muted-foreground">
              <span>LATENCY TARGET:</span>
              <span className="font-bold text-foreground">&lt; 350ms END-TO-END</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — FROM LOCATION TO PREDICTION (SIGNATURE DATA FLOW)
          Location & soil inputs -> Weather service -> Flask API -> Random Forest -> Crop recommendations
          Horizontal stepped pipeline communicating the core ML engineering story
      ========================================================================= */}
      <section aria-labelledby="pipeline-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#F1BE05]" aria-hidden="true" />
            <h2
              id="pipeline-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              01 // FROM LOCATION TO PREDICTION · THE SIGNATURE DATA FLOW
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            CONCEPTUAL ARCHITECTURE (NOT A LIVE PREDICTION INTERFACE)
          </span>
        </div>

        <div>
          <p className="font-display text-3xl sm:text-4xl text-foreground">
            Five continuous stages from geographic coordinate to ranked harvest.
          </p>
          <p className="mt-2 font-mono text-xs sm:text-sm text-muted-foreground max-w-2xl">
            Roots bridges raw external climate APIs with offline-trained machine learning,
            standardizing inputs into a normalized vector before executing multi-class inference.
          </p>
        </div>

        {/* 5-Stage Stepped Signature Data Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 relative">
          {/* Stage 01 */}
          <div className="border-2 border-border bg-card p-4 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-2.5">
                <span className="font-mono text-xs font-black px-1.5 py-0.5 bg-[#F1BE05] text-black">
                  01
                </span>
                <MapPin className="size-4 text-[#F1BE05]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl text-foreground">
                Location & Soil
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Input Acquisition
              </p>
              <p className="mt-2.5 font-mono text-xs text-muted-foreground leading-relaxed">
                Captures GPS coordinates (latitude, longitude) alongside chemical soil properties:
                Nitrogen (N), Phosphorus (P), Potassium (K), and soil pH.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-border/40 font-mono text-[10px] text-foreground font-bold">
              Coordinates + NPK + pH
            </div>
          </div>

          {/* Stage 02 */}
          <div className="border-2 border-border bg-card p-4 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-2.5">
                <span className="font-mono text-xs font-black px-1.5 py-0.5 bg-[#42BFDD] text-black">
                  02
                </span>
                <CloudSun className="size-4 text-[#42BFDD]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl text-foreground">
                Weather Service
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Open-Meteo Ingestion
              </p>
              <p className="mt-2.5 font-mono text-xs text-muted-foreground leading-relaxed">
                Queries Open-Meteo for live ambient temperature and humidity, paired with historical climate
                records (1991–2020) to derive localized annual rainfall.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-border/40 font-mono text-[10px] text-foreground font-bold">
              Temp · Humidity · Rain (mm)
            </div>
          </div>

          {/* Stage 03 */}
          <div className="border-2 border-border bg-card p-4 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-2.5">
                <span className="font-mono text-xs font-black px-1.5 py-0.5 bg-foreground text-background">
                  03
                </span>
                <Cpu className="size-4 text-[#42BFDD]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl text-foreground">
                Flask API
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Validation & Vector
              </p>
              <p className="mt-2.5 font-mono text-xs text-muted-foreground leading-relaxed">
                Normalizes input units, applies in-memory weather caching to respect rate limits,
                and assembles the exact 7-feature vector expected by the model.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-border/40 font-mono text-[10px] text-foreground font-bold">
              7-Element Numpy Array
            </div>
          </div>

          {/* Stage 04 */}
          <div className="border-2 border-border bg-card p-4 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-2.5">
                <span className="font-mono text-xs font-black px-1.5 py-0.5 bg-foreground text-background">
                  04
                </span>
                <Brain className="size-4 text-[#22C55E]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl text-foreground">
                Random Forest
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Scikit-Learn Inference
              </p>
              <p className="mt-2.5 font-mono text-xs text-muted-foreground leading-relaxed">
                Evaluates decision tree ensembles over the 7 features. Computes class probabilities
                across 22 agricultural crop categories simultaneously.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-border/40 font-mono text-[10px] text-foreground font-bold">
              Serialized .pkl Artifact
            </div>
          </div>

          {/* Stage 05 */}
          <div className="border-2 border-border bg-card p-4 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-2.5">
                <span className="font-mono text-xs font-black px-1.5 py-0.5 bg-[#22C55E] text-black">
                  05
                </span>
                <Sprout className="size-4 text-[#22C55E]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl text-foreground">
                Recommendations
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Ranked Delivery
              </p>
              <p className="mt-2.5 font-mono text-xs text-muted-foreground leading-relaxed">
                Ranks top-3 crop suggestions with relative confidence metrics and agricultural guidance,
                backed by a rule-based fallback pathway.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-border/40 font-mono text-[10px] text-foreground font-bold">
              Top-3 Ranked Predictions
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — THE PREDICTION JOURNEY (4-STEP INTERACTIVE SEQUENCE)
          Visual walkthrough: Choose location -> Gather weather -> Soil inputs -> Ranked crops
      ========================================================================= */}
      <section aria-labelledby="journey-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#42BFDD]" aria-hidden="true" />
            <h2
              id="journey-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              02 // THE PREDICTION JOURNEY · USER EXPERIENCE SEQUENCE
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            REACT FRONTEND INTERACTION
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Step 1 */}
          <div className="border-2 border-border bg-card p-5 sm:p-6 shadow-[5px_5px_0px_0px_var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Compass className="size-4 text-[#42BFDD]" />
                  <span className="font-mono text-xs font-black uppercase text-foreground">
                    STEP 01 // LOCATION SELECTION
                  </span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">GEOLOCATION</span>
              </div>
              <h3 className="font-display text-2xl text-foreground">
                Resolving Spatial Coordinates
              </h3>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                The farmer or researcher searches for a city/district or clicks to trigger the browser&apos;s
                native HTML5 Geolocation API. The frontend stores resolved latitude and longitude in local
                state, alongside recently evaluated coordinates for instant re-testing.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40 flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">HTML5 Geolocation</span>
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">Coordinate Resolver</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-2 border-border bg-card p-5 sm:p-6 shadow-[5px_5px_0px_0px_var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <CloudSun className="size-4 text-[#F1BE05]" />
                  <span className="font-mono text-xs font-black uppercase text-foreground">
                    STEP 02 // WEATHER & PRECIPITATION
                  </span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">OPEN-METEO SYNC</span>
              </div>
              <h3 className="font-display text-2xl text-foreground">
                Gathering Real-Time & Historical Climate
              </h3>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                The backend initiates a dual API query to Open-Meteo: retrieving current temperature and
                humidity alongside 30-year historical precipitation reanalysis data (1991–2020) to compute
                a realistic annual rainfall index for the specific agro-climatic zone.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40 flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">Live Temperature</span>
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">30-Year Rainfall Norms</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border-2 border-border bg-card p-5 sm:p-6 shadow-[5px_5px_0px_0px_var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Sprout className="size-4 text-[#22C55E]" />
                  <span className="font-mono text-xs font-black uppercase text-foreground">
                    STEP 03 // SOIL CHEMISTRY INPUTS
                  </span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">NPK & PH RATIOS</span>
              </div>
              <h3 className="font-display text-2xl text-foreground">
                Providing Soil Nutrient Parameters
              </h3>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                Users review estimated soil parameters: Nitrogen (N), Phosphorus (P), Potassium (K),
                and pH levels. For prototype testing without lab soil tests, regional baseline averages
                are auto-populated, with sliders available for manual override.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40 flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">Regional Estimates</span>
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">Manual Slider Override</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="border-2 border-border bg-card p-5 sm:p-6 shadow-[5px_5px_0px_0px_var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="size-4 text-[#FF3C38]" />
                  <span className="font-mono text-xs font-black uppercase text-foreground">
                    STEP 04 // INFERENCE & RANKED CROPS
                  </span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">TOP-3 SELECTION</span>
              </div>
              <h3 className="font-display text-2xl text-foreground">
                Executing Inference & Rendering Results
              </h3>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                The Flask backend evaluates the Random Forest ensemble and outputs the top-3 predicted
                crops alongside probability shares. If network timeouts or unhandled coordinate bounds occur,
                a deterministic agricultural fallback ensures the user is never left without guidance.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40 flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">Top-3 Ranking</span>
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">Heuristic Fallback</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — PRODUCT SHOWCASE: AUTHENTIC APPLICATION INTERFACES
          High-fidelity simulation of location input console + ranked crop outputs
      ========================================================================= */}
      <section aria-labelledby="showcase-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#22C55E]" aria-hidden="true" />
            <h2
              id="showcase-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              03 // APPLICATION SHOWCASE · INTERACTIVE CONSOLE MOCKUP
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            REACT + FLASK PROTOTYPE VIEWPORT
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
          {/* Location & Input Console */}
          <div className="border-2 sm:border-[2.5px] border-border bg-card shadow-[6px_6px_0px_0px_var(--border)] overflow-hidden font-mono text-xs">
            <div className="border-b-2 border-border bg-surface-secondary/70 px-4 py-2.5 flex items-center justify-between">
              <span className="font-bold text-foreground">
                ROOTS // AGRONOMIC TELEMETRY CONSOLE
              </span>
              <span className="text-[#22C55E] text-[10px] font-bold">● API CONNECTED</span>
            </div>

            <div className="p-4 sm:p-5 space-y-4">
              {/* Selected Location Bar */}
              <div className="border-2 border-border bg-background p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-[#FF3C38]" />
                  <span className="font-bold text-foreground">Kannur, Kerala (11.8745° N, 75.3704° E)</span>
                </div>
                <span className="text-[10px] text-[#42BFDD] font-bold">[CHANGE]</span>
              </div>

              {/* Weather Readout Grid */}
              <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                <div className="border border-border bg-surface-secondary/40 p-2.5">
                  <div className="flex items-center justify-center gap-1 text-muted-foreground text-[10px]">
                    <Thermometer className="size-3" />
                    <span>TEMPERATURE</span>
                  </div>
                  <div className="text-base font-black text-foreground mt-1">28.4 °C</div>
                </div>

                <div className="border border-border bg-surface-secondary/40 p-2.5">
                  <div className="flex items-center justify-center gap-1 text-muted-foreground text-[10px]">
                    <Droplets className="size-3" />
                    <span>HUMIDITY</span>
                  </div>
                  <div className="text-base font-black text-foreground mt-1">78.0 %</div>
                </div>

                <div className="border border-border bg-surface-secondary/40 p-2.5">
                  <div className="flex items-center justify-center gap-1 text-muted-foreground text-[10px]">
                    <CloudSun className="size-3" />
                    <span>ANNUAL RAIN</span>
                  </div>
                  <div className="text-base font-black text-[#42BFDD] mt-1">2,850 mm</div>
                </div>
              </div>

              {/* Soil Sliders Simulation */}
              <div className="space-y-2.5 border-t-2 border-border/40 pt-3">
                <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                  SOIL NUTRIENT VALUES (ESTIMATED REGIONAL BASELINE)
                </span>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="border border-border bg-background p-2 flex justify-between">
                    <span className="text-muted-foreground">Nitrogen (N):</span>
                    <span className="font-bold text-foreground">80 kg/ha</span>
                  </div>
                  <div className="border border-border bg-background p-2 flex justify-between">
                    <span className="text-muted-foreground">Phosphorus (P):</span>
                    <span className="font-bold text-foreground">45 kg/ha</span>
                  </div>
                  <div className="border border-border bg-background p-2 flex justify-between">
                    <span className="text-muted-foreground">Potassium (K):</span>
                    <span className="font-bold text-foreground">40 kg/ha</span>
                  </div>
                  <div className="border border-border bg-background p-2 flex justify-between">
                    <span className="text-muted-foreground">Soil pH:</span>
                    <span className="font-bold text-foreground">6.4 pH</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <div className="w-full border-2 border-border bg-[#F1BE05] text-black py-2.5 text-center font-bold shadow-[2px_2px_0px_0px_var(--border)]">
                  RE-EVALUATE CROP RECOMMENDATIONS →
                </div>
              </div>
            </div>
          </div>

          {/* Prediction Output Results Mockup */}
          <div className="border-2 sm:border-[2.5px] border-border bg-card p-5 shadow-[6px_6px_0px_0px_var(--border)] font-mono text-xs space-y-4">
            <div className="border-b-2 border-border pb-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase text-muted-foreground block">
                  INFERENCE RESULTS
                </span>
                <span className="font-bold text-foreground text-sm">
                  Top-3 Ranked Recommendations
                </span>
              </div>
              <Sprout className="size-5 text-[#22C55E]" aria-hidden="true" />
            </div>

            {/* Crop Recommendation Cards */}
            <div className="space-y-3">
              {/* Rank 1 */}
              <div className="border-2 border-border bg-surface-secondary/40 p-3.5 shadow-[2px_2px_0px_0px_var(--border)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-[#22C55E] text-black font-black text-[10px]">
                      RANK 01
                    </span>
                    <span className="font-display text-xl text-foreground font-bold">
                      Rice (Paddy)
                    </span>
                  </div>
                  <span className="text-[#22C55E] font-bold text-[11px]">Primary Recommendation</span>
                </div>
                <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed">
                  High annual rainfall (2,850mm) and high relative humidity (78%) in warm temperatures
                  provide ideal conditions for wetland rice cultivation.
                </p>
              </div>

              {/* Rank 2 */}
              <div className="border border-border bg-card p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 border border-border text-muted-foreground font-bold text-[10px]">
                      RANK 02
                    </span>
                    <span className="font-display text-lg text-foreground font-semibold">
                      Coffee
                    </span>
                  </div>
                  <span className="text-muted-foreground text-[10px]">Secondary Option</span>
                </div>
                <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">
                  Well-suited for humid coastal and sub-tropical highland zones with acidic to neutral soil.
                </p>
              </div>

              {/* Rank 3 */}
              <div className="border border-border bg-card p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 border border-border text-muted-foreground font-bold text-[10px]">
                      RANK 03
                    </span>
                    <span className="font-display text-lg text-foreground font-semibold">
                      Jute
                    </span>
                  </div>
                  <span className="text-muted-foreground text-[10px]">Tertiary Option</span>
                </div>
                <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">
                  Thrives under heavy monsoon precipitation and warm ambient thermal ranges.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-border/40 text-[10px] text-muted-foreground">
              Note: Prototype outputs are heuristic agronomic estimates, not agronomic guarantees.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 — INSIDE THE MODEL: SEVEN FEATURES & SERIALIZATION
          Detailed explanation of the 7 features and Scikit-Learn Random Forest
      ========================================================================= */}
      <section aria-labelledby="model-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#42BFDD]" aria-hidden="true" />
            <h2
              id="model-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              04 // INSIDE THE MODEL · SEVEN AGRO-CLIMATIC FEATURES
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            RANDOM FOREST CLASSIFIER SPECIFICATION
          </span>
        </div>

        <div>
          <p className="font-display text-3xl sm:text-4xl text-foreground">
            The mathematical features that define crop viability.
          </p>
          <p className="mt-2 font-mono text-xs sm:text-sm text-muted-foreground max-w-2xl">
            Trained on multiclass crop records, the model evaluates an exact 7-dimensional
            feature space mapping soil macronutrients, pH, and climate variables.
          </p>
        </div>

        {/* 7 Features Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 font-mono text-xs">
          <div className="border-2 border-border bg-card p-3.5 shadow-[3px_3px_0px_0px_var(--border)]">
            <span className="text-[10px] text-[#22C55E] font-bold block">01 // SOIL NUTRIENT</span>
            <span className="font-display text-lg text-foreground font-bold mt-1 block">Nitrogen (N)</span>
            <span className="text-[11px] text-muted-foreground block mt-1 leading-relaxed">
              Drives vegetative leafy growth and chlorophyll synthesis. Crucial for cereal grains.
            </span>
          </div>

          <div className="border-2 border-border bg-card p-3.5 shadow-[3px_3px_0px_0px_var(--border)]">
            <span className="text-[10px] text-[#22C55E] font-bold block">02 // SOIL NUTRIENT</span>
            <span className="font-display text-lg text-foreground font-bold mt-1 block">Phosphorus (P)</span>
            <span className="text-[11px] text-muted-foreground block mt-1 leading-relaxed">
              Stimulates root establishment, seed formation, and early crop flowering vigor.
            </span>
          </div>

          <div className="border-2 border-border bg-card p-3.5 shadow-[3px_3px_0px_0px_var(--border)]">
            <span className="text-[10px] text-[#22C55E] font-bold block">03 // SOIL NUTRIENT</span>
            <span className="font-display text-lg text-foreground font-bold mt-1 block">Potassium (K)</span>
            <span className="text-[11px] text-muted-foreground block mt-1 leading-relaxed">
              Regulates stomatal water retention, drought tolerance, and disease immunity.
            </span>
          </div>

          <div className="border-2 border-border bg-card p-3.5 shadow-[3px_3px_0px_0px_var(--border)]">
            <span className="text-[10px] text-[#22C55E] font-bold block">04 // SOIL CHEMISTRY</span>
            <span className="font-display text-lg text-foreground font-bold mt-1 block">Soil pH (0–14)</span>
            <span className="text-[11px] text-muted-foreground block mt-1 leading-relaxed">
              Controls chemical availability of micronutrients; affects root uptake efficiency.
            </span>
          </div>

          <div className="border-2 border-border bg-card p-3.5 shadow-[3px_3px_0px_0px_var(--border)]">
            <span className="text-[10px] text-[#42BFDD] font-bold block">05 // CLIMATE</span>
            <span className="font-display text-lg text-foreground font-bold mt-1 block">Temperature (°C)</span>
            <span className="text-[11px] text-muted-foreground block mt-1 leading-relaxed">
              Ambient temperature range dictates enzymatic activity and germination thresholds.
            </span>
          </div>

          <div className="border-2 border-border bg-card p-3.5 shadow-[3px_3px_0px_0px_var(--border)]">
            <span className="text-[10px] text-[#42BFDD] font-bold block">06 // CLIMATE</span>
            <span className="font-display text-lg text-foreground font-bold mt-1 block">Humidity (%)</span>
            <span className="text-[11px] text-muted-foreground block mt-1 leading-relaxed">
              Relative atmospheric moisture level governing transpirational cooling and fungal vulnerability.
            </span>
          </div>

          <div className="border-2 border-border bg-card p-3.5 shadow-[3px_3px_0px_0px_var(--border)] sm:col-span-2">
            <span className="text-[10px] text-[#42BFDD] font-bold block">07 // PRECIPITATION</span>
            <span className="font-display text-lg text-foreground font-bold mt-1 block">Annual Rainfall (mm)</span>
            <span className="text-[11px] text-muted-foreground block mt-1 leading-relaxed">
              Derived historical 30-year precipitation average. Separates rain-fed crops from drought-resilient legumes.
            </span>
          </div>
        </div>

        {/* Model Serialization Callout */}
        <div className="border-2 border-border bg-card p-4 sm:p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="font-mono text-xs sm:text-sm font-bold text-foreground">
              MODEL SERIALIZATION & SERVING ARCHITECTURE
            </p>
            <p className="font-mono text-[11px] text-muted-foreground mt-0.5">
              Trained via Scikit-Learn in Python, exported to a serialized <code className="text-foreground font-bold">.pkl</code> joblib artifact,
              and loaded into Flask application memory upon worker startup for zero-overhead inference.
            </p>
          </div>
          <span className="font-mono text-xs font-bold text-[#22C55E] shrink-0">
            LOADED IN MEMORY (~12ms INFERENCE)
          </span>
        </div>
      </section>

      {/* =========================================================================
          06 — CHALLENGES & ARCHITECTURAL DECISIONS
          Historical rainfall derivation, API data handling, input validation, fallback
      ========================================================================= */}
      <section aria-labelledby="challenges-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#FF7700]" aria-hidden="true" />
            <h2
              id="challenges-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              05 // CHALLENGES & ARCHITECTURAL DECISIONS
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            ENGINEERING APPLIED MACHINE LEARNING
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-3">
                <span className="font-mono text-xs font-bold text-[#FF7700]">CHALLENGE 01</span>
                <CloudSun className="size-4 text-[#FF7700]" />
              </div>
              <h3 className="font-display text-xl text-foreground font-bold">
                Deriving Rainfall from Live Weather APIs
              </h3>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                Standard weather APIs return current precipitation (e.g. &quot;0mm right now&quot;), which is useless
                for long-cycle crop evaluation. Solved by integrating Open-Meteo&apos;s climate archive API to derive
                30-year historical precipitation normals (1991–2020), backed by an in-memory coordinate cache.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-border/40 font-mono text-[10px] text-muted-foreground">
              Solution: Historical 30-year climate norm derivation
            </div>
          </div>

          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-3">
                <span className="font-mono text-xs font-bold text-[#F1BE05]">CHALLENGE 02</span>
                <Workflow className="size-4 text-[#F1BE05]" />
              </div>
              <h3 className="font-display text-xl text-foreground font-bold">
                From Experimental Notebook to Web Service
              </h3>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                Transitioned an offline Colab notebook into an end-to-end full-stack app. Engineered schema validation
                in Flask to reject out-of-range pH and negative NPK values, structured CORS headers, and translated
                raw multi-class probability outputs into formatted JSON arrays for the React frontend.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-border/40 font-mono text-[10px] text-muted-foreground">
              Solution: Hardened REST API contracts & validation
            </div>
          </div>

          <div className="border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-3">
                <span className="font-mono text-xs font-bold text-[#22C55E]">CHALLENGE 03</span>
                <AlertTriangle className="size-4 text-[#22C55E]" />
              </div>
              <h3 className="font-display text-xl text-foreground font-bold">
                Defensive Heuristic Fallback
              </h3>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                If the external weather service experiences rate-limiting or an input vector lies far outside the
                model&apos;s decision boundaries, the system seamlessly triggers a rule-based agro-climatic fallback.
                The interface transparently discloses when fallback logic is active.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-border/40 font-mono text-[10px] text-muted-foreground">
              Solution: Graceful heuristic degradation
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          07 — AN IMPORTANT DESIGN DECISION & LIMITATIONS
          Useful predictions, honest limitations.
          Distinguish model predictions from agricultural guarantees.
      ========================================================================= */}
      <section aria-labelledby="limitations-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#FF3C38]" aria-hidden="true" />
            <h2
              id="limitations-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              06 // AN IMPORTANT DESIGN DECISION · USEFUL PREDICTIONS, HONEST LIMITATIONS
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            ETHICAL MACHINE LEARNING IN AGRITECH
          </span>
        </div>

        {/* Standout Callout Panel on Assumptions vs Guarantees */}
        <div className="border-2 sm:border-[2.5px] border-border bg-card p-6 sm:p-8 shadow-[6px_6px_0px_0px_var(--border)] space-y-5">
          <div className="flex items-center gap-2.5 text-[#FF3C38] font-mono text-xs font-black uppercase">
            <AlertTriangle className="size-4 shrink-0" />
            <span>COMMUNICATING PROTOTYPE BOUNDARIES</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl text-foreground font-medium leading-tight">
            Distinguishing statistical recommendations from agricultural guarantees.
          </h3>

          <div className="space-y-3 font-mono text-xs text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              In agricultural technology, false certainty can lead to lost livelihoods. While the Random Forest model
              reliably learns general relationships from historical crop data, physical farming depends on variables
              far beyond seven input numbers—such as micro-terrain drainage, seasonal pest pressures, market pricing,
              and irrigation access.
            </p>
            <p>
              Furthermore, because this is an educational prototype, <strong className="text-foreground">soil values rely on regional
              state-level baseline estimates rather than physical on-site soil lab tests</strong>. A responsible software
              engineer must design interfaces that honestly disclose these data assumptions rather than masking them behind
              spurious confidence percentages.
            </p>
          </div>

          {/* Real-World Production Roadmap */}
          <div className="mt-4 pt-4 border-t-2 border-border/60">
            <span className="font-mono text-[10px] uppercase font-bold text-muted-foreground block mb-2">
              REQUIREMENTS FOR REAL-WORLD AGRICULTURAL PRODUCTION USE:
            </span>
            <div className="grid sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="border border-border bg-surface-secondary/30 p-2.5">
                <span className="font-bold text-foreground block">01 IoT Soil Probes</span>
                <span className="text-[11px] text-muted-foreground block mt-0.5">
                  Real-time NPK, moisture, and electrical conductivity sensing.
                </span>
              </div>
              <div className="border border-border bg-surface-secondary/30 p-2.5">
                <span className="font-bold text-foreground block">02 Agronomic Ground Truth</span>
                <span className="text-[11px] text-muted-foreground block mt-0.5">
                  Field validation trials alongside regional agricultural universities.
                </span>
              </div>
              <div className="border border-border bg-surface-secondary/30 p-2.5">
                <span className="font-bold text-foreground block">03 Economic Modeling</span>
                <span className="text-[11px] text-muted-foreground block mt-0.5">
                  Integrating seed pricing, seasonal market demand, and local water tables.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          08 — NAVIGATION
          Previous project (Inventory Management System), Next project (CV Management System)
      ========================================================================= */}
      <footer className="pt-2">
        <ProjectArchiveNav previous={previous} next={next} accentColor="#22C55E" />
      </footer>
    </article>
  );
}
