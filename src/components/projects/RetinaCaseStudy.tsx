import { Link } from "@tanstack/react-router";
import { type Project } from "@/lib/portfolio";
import {
  ArrowUpRight,
  Camera,
  Cpu,
  Layers,
  Volume2,
  FileText,
  Scan,
  Boxes,
  Compass,
  Activity,
  Zap,
  GraduationCap,
} from "lucide-react";

interface RetinaCaseStudyProps {
  project: Project;
  previous: Project;
  next: Project;
}

export function RetinaCaseStudy({
  project,
  previous,
  next,
}: RetinaCaseStudyProps) {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero */}
      <header className="border-b border-line pb-8 sm:pb-10">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-lime">
          <span>AI / ANDROID / COMPUTER VISION</span>
          <span className="text-muted-foreground/60">•</span>
          <span>FINAL-YEAR CAPSTONE · 2025–2026</span>
        </div>

        <h1 className="mt-3 break-words font-display text-5xl leading-[1.04] sm:text-6xl md:text-7xl">
          RETINA<span className="text-lime">.</span>
        </h1>

        <p className="mt-2 font-display text-xl text-foreground/90 sm:text-2xl">
          An AI-powered assistive system for the visually impaired.
        </p>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          A native Android application combining on-device text recognition,
          Indian currency detection, everyday object recognition, and obstacle
          depth awareness with conversational speech and directional audio.
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
              <span>Source code</span>
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          )}
          <span className="rounded-lg border border-line/60 bg-surface/40 px-3 py-2 font-mono text-xs text-muted-foreground">
            Role: Vision & ML Lead
          </span>
          <span className="rounded-lg border border-lime/30 bg-lime/10 px-3 py-2 font-mono text-xs text-lime">
            ICFISN 2026 Presentation
          </span>
        </div>

        {/* Academic Context Badge */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-line/70 bg-surface/50 px-3 py-1.5 font-mono text-xs text-muted-foreground">
          <GraduationCap className="size-3.5 text-lime" aria-hidden="true" />
          <span>
            B.Tech CSE Final Project · APJ Abdul Kalam Technological University
            (KTU)
          </span>
        </div>
      </header>

      {/* Architecture Pipeline */}
      <section aria-labelledby="arch-heading" className="space-y-4">
        <h2 id="arch-heading" className="label-mono text-lime">
          # 01 // ARCHITECTURE & DATA FLOW
        </h2>

        <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md sm:p-6">
          <div className="grid gap-3 sm:grid-cols-4">
            <div className="rounded-lg border border-line/80 bg-background/60 p-3.5">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">01 INPUT</span>
                <Camera className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-base text-foreground">
                CameraX Stream
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Non-blocking YUV buffer
              </p>
            </div>

            <div className="rounded-lg border border-line/80 bg-background/60 p-3.5">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">02 ROUTER</span>
                <Layers className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-base text-foreground">
                Frame Dispatcher
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Orientation, crop & RGB
              </p>
            </div>

            <div className="rounded-lg border border-lime/40 bg-background/80 p-3.5">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">03 MODELS</span>
                <Cpu className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-base text-foreground">
                On-Device TFLite
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                OCR · YOLOv8n · MiDaS
              </p>
            </div>

            <div className="rounded-lg border border-line/80 bg-background/60 p-3.5">
              <div className="flex items-center justify-between text-lime">
                <span className="font-mono text-[10px]">04 OUTPUT</span>
                <Volume2 className="size-3.5" aria-hidden="true" />
              </div>
              <p className="mt-1 font-display text-base text-foreground">
                Audio & TTS
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                Spatial cues & alerts
              </p>
            </div>
          </div>

          <p className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground">
            CameraX captures video frames offloaded to an asynchronous
            background executor. The active module processes frames via
            quantised on-device models, running 100% offline to guarantee
            privacy and zero network latency before vocalizing results via
            Android TTS.
          </p>
        </div>
      </section>

      {/* The 4 Assistive Modules */}
      <section aria-labelledby="modules-heading" className="space-y-4">
        <h2 id="modules-heading" className="label-mono text-lime">
          # 02 // ASSISTIVE MODULES
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Module 1 */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                01 Text Reader
              </span>
              <Scan className="size-4 text-lime" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Google ML Kit on-device OCR reads packaging, documents, and signs
              aloud. Implements Levenshtein string hashing to deduplicate speech
              and prevent repetitive audio loops when pointed at stationary
              text.
            </p>
            <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-foreground/80">
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                Offline OCR
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                96.4% Char Acc
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                120ms Latency
              </span>
            </div>
          </div>

          {/* Module 2 */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                02 Currency Reader
              </span>
              <Boxes className="size-4 text-lime" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Custom YOLOv8n TFLite model detecting 6 Indian Rupee denominations
              (₹10, ₹20, ₹50, ₹100, ₹200, ₹500). Trained on 12,050 annotated
              images with custom NMS and an interactive session totalizer.
            </p>
            <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-foreground/80">
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                0.96 F1-Score
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                0.94 mAP@0.5
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                Session Totalizer
              </span>
            </div>
          </div>

          {/* Module 3 */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                03 Object Recognition
              </span>
              <Compass className="size-4 text-lime" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              EfficientDet Lite0 detects everyday indoor items, mapping bounding
              box centroids to horizontal sectors (Left, Center, Right) for
              spatial speech guidance (e.g., <em>"Chair on your left"</em>).
            </p>
            <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-foreground/80">
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                TFLite Task Vision
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                0.93 F1-Score
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                Directional Cues
              </span>
            </div>
          </div>

          {/* Module 4 */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                04 Obstacle Detection
              </span>
              <Activity className="size-4 text-lime" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              MiDaS v2.1 Small produces monocular relative depth maps, divided
              into 3 navigational zones. Triggers acoustic proximity alert tones
              when close obstacles threaten collision paths.
            </p>
            <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] text-foreground/80">
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                52ms CPU Latency
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                84.1% δ &lt; 1.25
              </span>
              <span className="rounded bg-surface px-1.5 py-0.5 border border-line/60">
                Proximity Audio
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Model Benchmarks & Engineering Trade-Offs */}
      <section aria-labelledby="benchmarks-heading" className="space-y-4">
        <h2 id="benchmarks-heading" className="label-mono text-lime">
          # 03 // BENCHMARKS & ARCHITECTURAL CHOICES
        </h2>

        <div className="overflow-x-auto rounded-xl border border-line bg-surface/60">
          <table className="w-full text-left font-mono text-xs">
            <thead className="border-b border-line bg-surface text-muted-foreground">
              <tr>
                <th className="p-3.5 font-semibold uppercase text-foreground">
                  Module
                </th>
                <th className="p-3.5 font-semibold uppercase text-foreground">
                  Selected Model
                </th>
                <th className="p-3.5 font-semibold uppercase text-foreground">
                  Key Metrics
                </th>
                <th className="p-3.5 font-semibold uppercase text-foreground">
                  Design Rationale
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/40 text-muted-foreground">
              <tr>
                <td className="p-3.5 font-semibold text-foreground">OCR</td>
                <td className="p-3.5 text-lime">ML Kit Text v2</td>
                <td className="p-3.5">96.4% char acc · 120ms</td>
                <td className="p-3.5">
                  Runs fully offline with zero cloud latency or data privacy
                  exposure.
                </td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground">
                  Currency
                </td>
                <td className="p-3.5 text-lime">YOLOv8n TFLite</td>
                <td className="p-3.5">0.96 F1 · 0.94 mAP@0.5</td>
                <td className="p-3.5">
                  &lt;12MB footprint; custom anchors handle thin rectangular
                  note geometries.
                </td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground">Objects</td>
                <td className="p-3.5 text-lime">EfficientDet Lite0</td>
                <td className="p-3.5">0.93 F1 · 0.91 mAP@0.5</td>
                <td className="p-3.5">
                  Compound scaling balances mobile CPU throughput with everyday
                  indoor detection.
                </td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground">
                  Obstacles
                </td>
                <td className="p-3.5 text-lime">MiDaS v2.1 Small</td>
                <td className="p-3.5">52ms CPU latency (84% acc)</td>
                <td className="p-3.5">
                  8.6× faster than MiDaS Large (450ms), prioritizing real-time
                  walking safety.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Engineering Challenges & Accessibility */}
      <section aria-labelledby="challenges-heading" className="space-y-4">
        <h2 id="challenges-heading" className="label-mono text-lime">
          # 04 // CHALLENGES & ACCESSIBILITY
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 text-foreground font-semibold font-mono text-xs">
              <Zap className="size-4 text-lime" aria-hidden="true" />
              <span>CameraX Buffer Backpressure</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Inference at 30 FPS caused buffer queues and frame lag. Solved
              using CameraX's{" "}
              <code className="text-lime font-mono">
                STRATEGY_KEEP_ONLY_LATEST
              </code>
              , discarding intermediate frames while the CPU is busy so the user
              always receives feedback from the freshest visual state.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 text-foreground font-semibold font-mono text-xs">
              <Volume2 className="size-4 text-lime" aria-hidden="true" />
              <span>Non-Visual Interaction Design</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Eliminated reliance on visual touch buttons through full-screen
              two-finger swipe gestures for module switching, tactile haptic
              clicks on registration, and immediate spoken audio confirmation
              for all system state changes.
            </p>
          </div>
        </div>
      </section>

      {/* Research Paper Notice */}
      {project.researchPaper && (
        <section
          aria-labelledby="research-heading"
          className="rounded-xl border border-line bg-surface/40 p-5 backdrop-blur-md"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-line/60 pb-3">
            <div className="flex items-center gap-2.5">
              <FileText className="size-4 text-lime" aria-hidden="true" />
              <h3
                id="research-heading"
                className="font-display text-lg text-foreground"
              >
                {project.researchPaper.title}
              </h3>
            </div>
            <span className="font-mono text-[11px] text-lime">
              Oral Presentation · ICFISN 2026
            </span>
          </div>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            Presented at the International Conference on Frontiers in
            Intelligent Systems & Networks (Sree Buddha College of Engineering,
            March 2026), detailing multi-model on-device accessibility
            architecture.
          </p>
        </section>
      )}

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
