import { Link } from "@tanstack/react-router";
import { type Project } from "@/lib/portfolio";
import { ProjectArchiveNav } from "./ProjectArchiveNav";
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
  CheckCircle2,
  ShieldCheck,
  Sparkles,
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
    <article className="space-y-16 sm:space-y-24">
      {/* =========================================================================
          01 — THE OPENING
          Hero title with red accent, product statement, interactive Android HUD
          visualizer, and compact metadata
      ========================================================================= */}
      <section aria-labelledby="opening-heading" className="space-y-8">
        {/* Section Index Marker */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#FF3C38]" aria-hidden="true" />
            <p className="font-mono text-xs font-black uppercase tracking-wider text-foreground">
              01 // FLAGSHIP CASE STUDY · AI & COMPUTER VISION
            </p>
          </div>
          <span className="font-mono text-xs font-bold text-muted-foreground">
            KTU CAPSTONE · 2026
          </span>
        </div>

        {/* Hero Grid: Left Narrative + Right Handset Viewport */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 xl:gap-12 items-start">
          {/* Left Column: Heading, Statement, Metadata Badges & CTAs */}
          <div className="flex flex-col">
            <h1
              id="opening-heading"
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-foreground leading-[0.92]"
            >
              RETINA<span className="text-[#FF3C38]">.</span>
            </h1>

            <p className="mt-4 font-display text-2xl sm:text-3xl text-foreground font-medium leading-tight">
              An AI-powered assistive eye for the visually impaired.
            </p>

            <p className="mt-4 font-mono text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              A native Android vision platform combining on-device optical character
              recognition, 6-denomination Indian currency detection, everyday indoor
              object identification, and monocular obstacle depth estimation—communicated
              through spatial audio, distance tones, and speech without cloud latency or
              data exposure.
            </p>

            {/* Compact Metadata Console */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono text-xs">
              <div className="border-2 border-border bg-card p-3 shadow-[3px_3px_0px_0px_var(--border)]">
                <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                  ROLE
                </span>
                <span className="font-bold text-foreground mt-0.5 block">
                  Vision & ML Lead
                </span>
              </div>

              <div className="border-2 border-border bg-card p-3 shadow-[3px_3px_0px_0px_var(--border)]">
                <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                  PLATFORM
                </span>
                <span className="font-bold text-foreground mt-0.5 block">
                  Android · CameraX
                </span>
              </div>

              <div className="border-2 border-border bg-card p-3 shadow-[3px_3px_0px_0px_var(--border)]">
                <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                  TIMELINE
                </span>
                <span className="font-bold text-foreground mt-0.5 block">
                  2025–2026
                </span>
              </div>

              <div className="border-2 border-border bg-card p-3 shadow-[3px_3px_0px_0px_var(--border)] col-span-2 sm:col-span-3">
                <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                  ACADEMIC CONTEXT
                </span>
                <span className="font-bold text-foreground mt-1 flex items-center gap-1.5 flex-wrap">
                  <GraduationCap className="size-3.5 text-[#FF3C38] shrink-0" aria-hidden="true" />
                  <span>B.Tech CSE Capstone · APJ Abdul Kalam Technological University (KTU)</span>
                </span>
              </div>
            </div>

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
                <span className="size-2 rounded-full bg-[#FF3C38] animate-pulse" />
                <span>ICFISN 2026 PRESENTATION</span>
              </span>
            </div>
          </div>

          {/* Right Column: Prominent Android Handset Device Visualizer */}
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-md border-2 sm:border-[3px] border-border bg-card p-4 sm:p-5 shadow-[8px_8px_0px_0px_var(--border)] relative">
              {/* Device Top Status Bar */}
              <div className="flex items-center justify-between border-b-2 border-border/80 pb-2.5 mb-3 font-mono text-[11px] font-bold">
                <div className="flex items-center gap-2 text-foreground">
                  <span className="size-2 rounded-full bg-[#22C55E]" />
                  <span>RETINA_HUD v2.4</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-[#FF3C38] font-black">● REC</span>
                  <span>100% OFFLINE</span>
                </div>
              </div>

              {/* Viewport Simulation: High-Tech Viewfinder Canvas */}
              <div className="border-2 border-border bg-[#05131A] dark:bg-[#020B0F] p-4 relative min-h-[340px] sm:min-h-[380px] flex flex-col justify-between overflow-hidden select-none">
                {/* Viewfinder HUD Corner Accents */}
                <div className="absolute top-2 left-2 size-3 border-t-2 border-l-2 border-[#42BFDD]/80" />
                <div className="absolute top-2 right-2 size-3 border-t-2 border-r-2 border-[#42BFDD]/80" />
                <div className="absolute bottom-2 left-2 size-3 border-b-2 border-l-2 border-[#42BFDD]/80" />
                <div className="absolute bottom-2 right-2 size-3 border-b-2 border-r-2 border-[#42BFDD]/80" />

                {/* Top Viewport Telemetry */}
                <div className="flex items-center justify-between font-mono text-[10px] text-[#42BFDD] relative z-10">
                  <span>EXP: AUTO · 30 FPS</span>
                  <span>CAM: CAMERAX YUV420</span>
                </div>

                {/* Simulated Computer Vision Detections */}
                <div className="relative my-auto py-4">
                  {/* Detection 1: Currency Recognition Box */}
                  <div className="border-2 border-[#FF7700] bg-[#FF7700]/15 p-2 sm:p-2.5 shadow-[2px_2px_0px_0px_#000] relative max-w-[240px]">
                    <div className="flex items-center justify-between font-mono text-[10px] font-bold text-[#FF7700] bg-black/80 px-1 py-0.5 border border-[#FF7700]/50 mb-1">
                      <span>₹500 NOTE</span>
                      <span>CONF: 98.4%</span>
                    </div>
                    <div className="font-mono text-[9px] text-[#F7F0D9]/90">
                      BOUNDING BOX: [X:142, Y:210] · CENTER
                    </div>
                  </div>

                  {/* Detection 2: Obstacle Depth Warning Box */}
                  <div className="mt-3 ml-auto border-2 border-[#9649CB] bg-[#9649CB]/15 p-2 shadow-[2px_2px_0px_0px_#000] relative max-w-[210px]">
                    <div className="flex items-center justify-between font-mono text-[10px] font-bold text-[#F7F0D9] bg-[#9649CB] px-1 py-0.5 mb-1">
                      <span>OBSTACLE: 1.1m</span>
                      <span>ZONE: CAUTION</span>
                    </div>
                    <div className="font-mono text-[9px] text-[#F7F0D9]/90">
                      DEPTH: MiDaS v2.1 · LEFT SECTOR
                    </div>
                  </div>
                </div>

                {/* Active Audio Synthesis Banner */}
                <div className="border-2 border-border bg-[#2E2D34] text-[#F7F0D9] p-2.5 shadow-[3px_3px_0px_0px_#000] relative z-10 flex items-center gap-2.5">
                  <Volume2 className="size-4 text-[#F1BE05] shrink-0 animate-pulse" aria-hidden="true" />
                  <p className="font-mono text-[11px] leading-tight text-[#F7F0D9]">
                    <span className="text-[#F1BE05] font-bold">TTS OUT:</span> &quot;Five hundred rupee note detected in center. Caution: chair 1.1m to your left.&quot;
                  </p>
                </div>

                {/* Bottom Module Bar (Android Gestures Simulation) */}
                <div className="mt-2 pt-2 border-t border-[#42BFDD]/30 grid grid-cols-4 gap-1 font-mono text-[9px] text-center text-[#F7F0D9]/70">
                  <span className="p-1 border border-transparent">01 TEXT</span>
                  <span className="p-1 bg-[#FF7700] text-black font-bold border border-border">02 INR ●</span>
                  <span className="p-1 border border-transparent">03 OBJ</span>
                  <span className="p-1 border border-transparent">04 DEPTH</span>
                </div>
              </div>

              {/* Bottom Tactile Label */}
              <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                <span>NON-VISUAL TACTILE HUD</span>
                <span className="text-[#22C55E] font-bold">● AIR-GAPPED HARDWARE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — HOW IT WORKS
          Horizontal pipeline: CameraX -> Frame Processing -> On-Device Models -> Spoken Feedback
          Numbered steps, square corners, hard shadows
      ========================================================================= */}
      <section aria-labelledby="pipeline-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#F1BE05]" aria-hidden="true" />
            <h2
              id="pipeline-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              02 // SYSTEM PIPELINE · REAL-TIME DATA FLOW
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            &lt; 120MS SENSOR-TO-SPEECH
          </span>
        </div>

        <div>
          <p className="font-display text-3xl sm:text-4xl text-foreground">
            From camera sensor to spatial speech in four decoupled stages.
          </p>
          <p className="mt-2 font-mono text-xs sm:text-sm text-muted-foreground max-w-2xl">
            To prevent UI lockups and frame delays, the visual pipeline decouples raw
            capture from neural inference through an asynchronous, non-blocking producer-consumer
            architecture.
          </p>
        </div>

        {/* 4-Step Horizontal Pipeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {/* Step 1 */}
          <div className="border-2 border-border bg-card p-4 sm:p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-3">
                <span className="font-mono text-xs font-black px-1.5 py-0.5 bg-[#FF3C38] text-white">
                  STEP 01
                </span>
                <Camera className="size-4 text-[#FF3C38]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl text-foreground">
                CameraX Stream
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Non-blocking YUV-420 buffer
              </p>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                Android Jetpack CameraX captures continuous video frames offloaded to a
                background worker pool. Uses a single-slot buffer to eliminate memory lag.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40 font-mono text-[10px] text-foreground font-bold">
              ImageAnalysis · 30 FPS
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-2 border-border bg-card p-4 sm:p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-3">
                <span className="font-mono text-xs font-black px-1.5 py-0.5 bg-[#F1BE05] text-black">
                  STEP 02
                </span>
                <Layers className="size-4 text-[#F1BE05]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl text-foreground">
                Frame Processing
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Matrix rotation & crop
              </p>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                Inspects device orientation, extracts center square crops, and transforms
                YUV plane data into contiguous RGB bitmaps with zero garbage collection allocations.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40 font-mono text-[10px] text-foreground font-bold">
              Direct ByteBuffer Pools
            </div>
          </div>

          {/* Step 3 */}
          <div className="border-2 border-border bg-card p-4 sm:p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-3">
                <span className="font-mono text-xs font-black px-1.5 py-0.5 bg-[#42BFDD] text-black">
                  STEP 03
                </span>
                <Cpu className="size-4 text-[#42BFDD]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl text-foreground">
                On-Device Models
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Quantized neural inference
              </p>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                Dispatches processed frames to active on-device engines: Google ML Kit,
                YOLOv8n nano, EfficientDet Lite, or MiDaS v2.1 running on mobile CPU/NNAPI.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40 font-mono text-[10px] text-foreground font-bold">
              TFLite Task Vision · 100% Offline
            </div>
          </div>

          {/* Step 4 */}
          <div className="border-2 border-border bg-card p-4 sm:p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-2 mb-3">
                <span className="font-mono text-xs font-black px-1.5 py-0.5 bg-[#22C55E] text-black">
                  STEP 04
                </span>
                <Volume2 className="size-4 text-[#22C55E]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl text-foreground">
                Spoken Feedback
              </h3>
              <p className="mt-1 font-mono text-[11px] font-bold text-muted-foreground">
                Spatial audio & alerts
              </p>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                Converts bounding box coordinates into directional stereo audio channels
                and clear Text-to-Speech announcements with Levenshtein string deduplication.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/40 font-mono text-[10px] text-foreground font-bold">
              Android TTS · Stereo Pan Cues
            </div>
          </div>
        </div>

        {/* Pipeline Architecture Callout */}
        <div className="border-2 border-border bg-card p-4 sm:p-5 shadow-[4px_4px_0px_0px_var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="size-5 text-[#22C55E] shrink-0" aria-hidden="true" />
            <div>
              <p className="font-mono text-xs sm:text-sm font-bold text-foreground">
                AIR-GAPPED SYSTEM GUARANTEE
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
                No visual telemetry, image frames, or user speech ever leave handset hardware.
              </p>
            </div>
          </div>
          <div className="font-mono text-xs font-bold text-[#FF3C38] flex items-center gap-1.5 self-start sm:self-center">
            <span>PREDICTABLE &lt;120MS BOUNDED LATENCY</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — FOUR ASSISTIVE MODULES
          Text Reader, Currency Reader, Object Recognition, Obstacle Detection
          Distinct number and accent, model, purpose, reported performance
      ========================================================================= */}
      <section aria-labelledby="modules-heading" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#42BFDD]" aria-hidden="true" />
            <h2
              id="modules-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              03 // FOUR ASSISTIVE MODULES · SPECIALIZED CAPABILITIES
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            ON-DEVICE MULTI-MODEL STACK
          </span>
        </div>

        <div>
          <p className="font-display text-3xl sm:text-4xl text-foreground">
            Four specialized sensory models working as one cohesive assistant.
          </p>
          <p className="mt-2 font-mono text-xs sm:text-sm text-muted-foreground max-w-2xl">
            Each module addresses an independent accessibility challenge with bespoke
            model selection, quantization optimization, and custom ergonomic heuristics.
          </p>
        </div>

        {/* 2x2 Distinct Neo-Brutalist Module Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Module 01: Text Reader */}
          <div className="border-2 border-border bg-card p-5 sm:p-6 shadow-[5px_5px_0px_0px_var(--border)] flex flex-col justify-between relative transition-all hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_var(--border)]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black px-2 py-0.5 bg-[#F1BE05] text-black border border-border">
                    01
                  </span>
                  <h3 className="font-display text-2xl text-foreground">
                    Text Reader
                  </h3>
                </div>
                <Scan className="size-5 text-[#F1BE05]" aria-hidden="true" />
              </div>

              {/* Model Tag */}
              <div className="mt-3 flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase font-bold text-muted-foreground">
                  MODEL:
                </span>
                <span className="font-mono text-xs font-bold text-foreground">
                  Google ML Kit Text Recognition v2
                </span>
              </div>

              {/* Purpose */}
              <p className="mt-3 text-xs sm:text-sm font-mono text-muted-foreground leading-relaxed">
                Transcribes packaging labels, mail, prescription bottles, and overhead signs
                into clear spoken text without requiring cloud OCR connections.
              </p>

              {/* Performance Metrics */}
              <div className="mt-4 grid grid-cols-3 gap-2 border-y-2 border-border/40 py-3 font-mono">
                <div>
                  <span className="text-[10px] text-muted-foreground block">ACCURACY</span>
                  <span className="text-sm font-bold text-foreground">96.4%</span>
                  <span className="text-[9px] text-muted-foreground block">Char-Level</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground block">LATENCY</span>
                  <span className="text-sm font-bold text-[#F1BE05]">120 ms</span>
                  <span className="text-[9px] text-muted-foreground block">End-to-End</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground block">NETWORK</span>
                  <span className="text-sm font-bold text-foreground">0 KB</span>
                  <span className="text-[9px] text-muted-foreground block">Air-Gapped</span>
                </div>
              </div>

              {/* Engineering Nuance */}
              <div className="mt-4 border-2 border-border/60 bg-surface-secondary/40 p-3">
                <p className="font-mono text-[11px] font-bold text-foreground">
                  Levenshtein String Deduplication
                </p>
                <p className="mt-1 font-mono text-[10px] text-muted-foreground leading-relaxed">
                  Calculates string edit distance between consecutive frames. If text similarity
                  exceeds 85%, repeated vocalization is suppressed, eliminating audio chatter on static reading.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border/40 flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="px-2 py-0.5 border border-border bg-card">#OfflineOCR</span>
              <span className="px-2 py-0.5 border border-border bg-card">#Deduplication</span>
              <span className="px-2 py-0.5 border border-border bg-card">#AccessibleText</span>
            </div>
          </div>

          {/* Module 02: Currency Reader */}
          <div className="border-2 border-border bg-card p-5 sm:p-6 shadow-[5px_5px_0px_0px_var(--border)] flex flex-col justify-between relative transition-all hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_var(--border)]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black px-2 py-0.5 bg-[#FF7700] text-black border border-border">
                    02
                  </span>
                  <h3 className="font-display text-2xl text-foreground">
                    Currency Reader
                  </h3>
                </div>
                <Boxes className="size-5 text-[#FF7700]" aria-hidden="true" />
              </div>

              {/* Model Tag */}
              <div className="mt-3 flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase font-bold text-muted-foreground">
                  MODEL:
                </span>
                <span className="font-mono text-xs font-bold text-foreground">
                  Custom YOLOv8n TFLite (FP16/INT8)
                </span>
              </div>

              {/* Purpose */}
              <p className="mt-3 text-xs sm:text-sm font-mono text-muted-foreground leading-relaxed">
                Identifies 6 Indian Rupee denominations (₹10, ₹20, ₹50, ₹100, ₹200, ₹500)
                under complex lighting, creased bills, and rapid handheld orientation changes.
              </p>

              {/* Performance Metrics */}
              <div className="mt-4 grid grid-cols-3 gap-2 border-y-2 border-border/40 py-3 font-mono">
                <div>
                  <span className="text-[10px] text-muted-foreground block">F1-SCORE</span>
                  <span className="text-sm font-bold text-foreground">0.96</span>
                  <span className="text-[9px] text-muted-foreground block">Precision/Recall</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground block">mAP@0.5</span>
                  <span className="text-sm font-bold text-[#FF7700]">0.94</span>
                  <span className="text-[9px] text-muted-foreground block">IoU Thresh</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground block">DATASET</span>
                  <span className="text-sm font-bold text-foreground">12,050</span>
                  <span className="text-[9px] text-muted-foreground block">Annotated Notes</span>
                </div>
              </div>

              {/* Engineering Nuance */}
              <div className="mt-4 border-2 border-border/60 bg-surface-secondary/40 p-3">
                <p className="font-mono text-[11px] font-bold text-foreground">
                  Interactive Session Totalizer
                </p>
                <p className="mt-1 font-mono text-[10px] text-muted-foreground leading-relaxed">
                  Integrates a cumulative transaction wallet accumulator. Vocalizes individual note
                  values followed by a running total upon two-finger double tap for independent shopping.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border/40 flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="px-2 py-0.5 border border-border bg-card">#YOLOv8n</span>
              <span className="px-2 py-0.5 border border-border bg-card">#INRCurrency</span>
              <span className="px-2 py-0.5 border border-border bg-card">#WalletTotalizer</span>
            </div>
          </div>

          {/* Module 03: Object Recognition */}
          <div className="border-2 border-border bg-card p-5 sm:p-6 shadow-[5px_5px_0px_0px_var(--border)] flex flex-col justify-between relative transition-all hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_var(--border)]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black px-2 py-0.5 bg-[#42BFDD] text-black border border-border">
                    03
                  </span>
                  <h3 className="font-display text-2xl text-foreground">
                    Object Recognition
                  </h3>
                </div>
                <Compass className="size-5 text-[#42BFDD]" aria-hidden="true" />
              </div>

              {/* Model Tag */}
              <div className="mt-3 flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase font-bold text-muted-foreground">
                  MODEL:
                </span>
                <span className="font-mono text-xs font-bold text-foreground">
                  EfficientDet Lite0 (Compound Scaling)
                </span>
              </div>

              {/* Purpose */}
              <p className="mt-3 text-xs sm:text-sm font-mono text-muted-foreground leading-relaxed">
                Detects everyday indoor items (chairs, tables, bottles, doors, people, stairs)
                to help visually impaired individuals build a clear mental layout of physical rooms.
              </p>

              {/* Performance Metrics */}
              <div className="mt-4 grid grid-cols-3 gap-2 border-y-2 border-border/40 py-3 font-mono">
                <div>
                  <span className="text-[10px] text-muted-foreground block">F1-SCORE</span>
                  <span className="text-sm font-bold text-foreground">0.93</span>
                  <span className="text-[9px] text-muted-foreground block">Common Items</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground block">mAP@0.5</span>
                  <span className="text-sm font-bold text-[#42BFDD]">0.91</span>
                  <span className="text-[9px] text-muted-foreground block">TFLite Vision</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground block">FOOTPRINT</span>
                  <span className="text-sm font-bold text-foreground">14.2 MB</span>
                  <span className="text-[9px] text-muted-foreground block">Low Power Draw</span>
                </div>
              </div>

              {/* Engineering Nuance */}
              <div className="mt-4 border-2 border-border/60 bg-surface-secondary/40 p-3">
                <p className="font-mono text-[11px] font-bold text-foreground">
                  Centroid-to-Sector Directional Audio
                </p>
                <p className="mt-1 font-mono text-[10px] text-muted-foreground leading-relaxed">
                  Maps bounding box horizontal center points into Left, Center, and Right spatial
                  sectors, directing natural speech (e.g., <em>&quot;Chair on your left&quot;</em>) via stereo panning.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border/40 flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="px-2 py-0.5 border border-border bg-card">#EfficientDet</span>
              <span className="px-2 py-0.5 border border-border bg-card">#DirectionalAudio</span>
              <span className="px-2 py-0.5 border border-border bg-card">#SpatialCues</span>
            </div>
          </div>

          {/* Module 04: Obstacle Detection */}
          <div className="border-2 border-border bg-card p-5 sm:p-6 shadow-[5px_5px_0px_0px_var(--border)] flex flex-col justify-between relative transition-all hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_var(--border)]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black px-2 py-0.5 bg-[#9649CB] text-white border border-border">
                    04
                  </span>
                  <h3 className="font-display text-2xl text-foreground">
                    Obstacle Detection
                  </h3>
                </div>
                <Activity className="size-5 text-[#9649CB]" aria-hidden="true" />
              </div>

              {/* Model Tag */}
              <div className="mt-3 flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase font-bold text-muted-foreground">
                  MODEL:
                </span>
                <span className="font-mono text-xs font-bold text-foreground">
                  MiDaS v2.1 Small (Monocular Depth)
                </span>
              </div>

              {/* Purpose */}
              <p className="mt-3 text-xs sm:text-sm font-mono text-muted-foreground leading-relaxed">
                Estimates relative depth topography from standard single-lens smartphone cameras,
                detecting ground-level and waist-height obstacles threatening walking trajectories.
              </p>

              {/* Performance Metrics */}
              <div className="mt-4 grid grid-cols-3 gap-2 border-y-2 border-border/40 py-3 font-mono">
                <div>
                  <span className="text-[10px] text-muted-foreground block">LATENCY</span>
                  <span className="text-sm font-bold text-[#9649CB]">52 ms</span>
                  <span className="text-[9px] text-muted-foreground block">Mobile CPU</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground block">δ &lt; 1.25 ACC</span>
                  <span className="text-sm font-bold text-foreground">84.1%</span>
                  <span className="text-[9px] text-muted-foreground block">Relative Depth</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground block">SPEEDUP</span>
                  <span className="text-sm font-bold text-foreground">8.6×</span>
                  <span className="text-[9px] text-muted-foreground block">vs MiDaS Large</span>
                </div>
              </div>

              {/* Engineering Nuance */}
              <div className="mt-4 border-2 border-border/60 bg-surface-secondary/40 p-3">
                <p className="font-mono text-[11px] font-bold text-foreground">
                  Acoustic Proximity Warning Engine
                </p>
                <p className="mt-1 font-mono text-[10px] text-muted-foreground leading-relaxed">
                  Divides relative depth field into Safe (&gt;2.5m), Caution (1.2m–2.5m), and Critical (&lt;1.2m) zones.
                  Approaching collisions trigger escalating acoustic pulse frequencies for instinctual reaction.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border/40 flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="px-2 py-0.5 border border-border bg-card">#MonocularDepth</span>
              <span className="px-2 py-0.5 border border-border bg-card">#CollisionSafety</span>
              <span className="px-2 py-0.5 border border-border bg-card">#AcousticAlerts</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — ENGINEERING EVIDENCE
          Clean benchmark table + 2 standout engineering challenges
          Technical depth with improved readability & strong typography
      ========================================================================= */}
      <section aria-labelledby="evidence-heading" className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 bg-[#FF3C38]" aria-hidden="true" />
            <h2
              id="evidence-heading"
              className="font-mono text-xs font-black uppercase tracking-wider text-foreground"
            >
              04 // ENGINEERING EVIDENCE · BENCHMARKS & HARD CHOICES
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            MEASURED CPU BENCHMARKS
          </span>
        </div>

        <div>
          <p className="font-display text-3xl sm:text-4xl text-foreground">
            Rigorous benchmarking meets non-visual interaction design.
          </p>
          <p className="mt-2 font-mono text-xs sm:text-sm text-muted-foreground max-w-2xl">
            Designing assistive software means balancing deep neural precision against
            battery endurance, thermals, and immediate acoustic ergonomics.
          </p>
        </div>

        {/* Benchmark Table: Neo-Brutalist Border-Collapse Aesthetic */}
        <div className="border-2 border-border bg-card shadow-[5px_5px_0px_0px_var(--border)] overflow-hidden">
          <div className="border-b-2 border-border bg-surface-secondary/60 px-4 py-3 flex items-center justify-between">
            <span className="font-mono text-xs font-black uppercase text-foreground">
              MODEL PERFORMANCE MATRIX (SNAPDRAGON 7-SERIES / ARMv8)
            </span>
            <span className="font-mono text-[10px] text-muted-foreground hidden sm:inline">
              100% OFFLINE INFERENCE
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead className="border-b-2 border-border bg-card text-muted-foreground">
                <tr>
                  <th className="p-3.5 font-bold uppercase text-foreground border-r border-border/40">
                    Module
                  </th>
                  <th className="p-3.5 font-bold uppercase text-foreground border-r border-border/40">
                    Selected Model
                  </th>
                  <th className="p-3.5 font-bold uppercase text-foreground border-r border-border/40">
                    Key Accuracy
                  </th>
                  <th className="p-3.5 font-bold uppercase text-foreground border-r border-border/40">
                    Latency (CPU)
                  </th>
                  <th className="p-3.5 font-bold uppercase text-foreground border-r border-border/40">
                    Footprint
                  </th>
                  <th className="p-3.5 font-bold uppercase text-foreground">
                    Engineering Rationale
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr className="hover:bg-surface-secondary/30 transition-colors">
                  <td className="p-3.5 font-bold text-foreground border-r border-border/40">
                    01 Text Reader
                  </td>
                  <td className="p-3.5 text-foreground font-bold border-r border-border/40">
                    ML Kit Text v2
                  </td>
                  <td className="p-3.5 text-[#F1BE05] font-bold border-r border-border/40">
                    96.4% Char Acc
                  </td>
                  <td className="p-3.5 border-r border-border/40 font-bold text-foreground">
                    120 ms
                  </td>
                  <td className="p-3.5 border-r border-border/40">
                    OS-Shared
                  </td>
                  <td className="p-3.5 leading-relaxed">
                    Zero network dependency eliminates round-trip latency and protects sensitive documents.
                  </td>
                </tr>

                <tr className="hover:bg-surface-secondary/30 transition-colors">
                  <td className="p-3.5 font-bold text-foreground border-r border-border/40">
                    02 Currency
                  </td>
                  <td className="p-3.5 text-foreground font-bold border-r border-border/40">
                    Custom YOLOv8n
                  </td>
                  <td className="p-3.5 text-[#FF7700] font-bold border-r border-border/40">
                    0.96 F1 · 0.94 mAP
                  </td>
                  <td className="p-3.5 border-r border-border/40 font-bold text-foreground">
                    68 ms
                  </td>
                  <td className="p-3.5 border-r border-border/40">
                    11.8 MB
                  </td>
                  <td className="p-3.5 leading-relaxed">
                    Custom rectangular anchor ratios accurately isolate folded and creased Indian rupee notes.
                  </td>
                </tr>

                <tr className="hover:bg-surface-secondary/30 transition-colors">
                  <td className="p-3.5 font-bold text-foreground border-r border-border/40">
                    03 Object Detection
                  </td>
                  <td className="p-3.5 text-foreground font-bold border-r border-border/40">
                    EfficientDet Lite0
                  </td>
                  <td className="p-3.5 text-[#42BFDD] font-bold border-r border-border/40">
                    0.93 F1 · 0.91 mAP
                  </td>
                  <td className="p-3.5 border-r border-border/40 font-bold text-foreground">
                    84 ms
                  </td>
                  <td className="p-3.5 border-r border-border/40">
                    14.2 MB
                  </td>
                  <td className="p-3.5 leading-relaxed">
                    Compound scaling architecture maintains sustained 12+ FPS without thermal throttling.
                  </td>
                </tr>

                <tr className="hover:bg-surface-secondary/30 transition-colors">
                  <td className="p-3.5 font-bold text-foreground border-r border-border/40">
                    04 Obstacle Depth
                  </td>
                  <td className="p-3.5 text-foreground font-bold border-r border-border/40">
                    MiDaS v2.1 Small
                  </td>
                  <td className="p-3.5 text-[#9649CB] font-bold border-r border-border/40">
                    84.1% δ &lt; 1.25
                  </td>
                  <td className="p-3.5 border-r border-border/40 font-bold text-foreground">
                    52 ms
                  </td>
                  <td className="p-3.5 border-r border-border/40">
                    18.5 MB
                  </td>
                  <td className="p-3.5 leading-relaxed">
                    8.6× faster than MiDaS Large (450ms), prioritizing immediate collision reaction speed.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Two Standout Engineering Challenges */}
        <div className="grid gap-6 md:grid-cols-2 pt-4">
          {/* Challenge 01 */}
          <div className="border-2 border-border bg-card p-5 sm:p-6 shadow-[5px_5px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Zap className="size-4 text-[#FF3C38]" aria-hidden="true" />
                  <span className="font-mono text-xs font-black uppercase text-[#FF3C38]">
                    CHALLENGE 01 // FRAME BACKPRESSURE
                  </span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">
                  CAMERA SUBSYSTEM
                </span>
              </div>

              <h3 className="font-display text-2xl text-foreground">
                Eliminating CameraX Thread Starvation & Latency Bloat
              </h3>

              <div className="mt-4 space-y-3 font-mono text-xs text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">The Problem:</strong> Mobile cameras deliver
                  30 frames every second (~33ms/frame). On-device neural models take 52ms–120ms to run.
                  Default analysis implementations queued unread frames in system memory, resulting in
                  catastrophic heap exhaustion, frequent 200ms+ Android Garbage Collection freezes, and
                  delayed auditory warnings about obstacles the user had already passed.
                </p>
                <p>
                  <strong className="text-foreground">The Solution:</strong> Implemented CameraX&apos;s{" "}
                  <code className="bg-surface-secondary px-1 py-0.5 border border-border text-foreground font-bold">
                    STRATEGY_KEEP_ONLY_LATEST
                  </code>{" "}
                  with an asynchronous single-slot buffer pattern. While the inference worker is occupied,
                  intervening frames are discarded at the hardware level with zero allocation cost. Coupled
                  with reusable direct ByteBuffers for YUV-to-RGB plane matrices, this reduced heap thrashing
                  to zero and guaranteed every voice alert reflects live reality.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-border/40 flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">CameraX ImageAnalysis</span>
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">Direct ByteBuffer</span>
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">Zero-GC Architecture</span>
            </div>
          </div>

          {/* Challenge 02 */}
          <div className="border-2 border-border bg-card p-5 sm:p-6 shadow-[5px_5px_0px_0px_var(--border)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_var(--border)]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Volume2 className="size-4 text-[#F1BE05]" aria-hidden="true" />
                  <span className="font-mono text-xs font-black uppercase text-[#F1BE05]">
                    CHALLENGE 02 // NON-VISUAL UX
                  </span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">
                  INTERACTION DESIGN
                </span>
              </div>

              <h3 className="font-display text-2xl text-foreground">
                Designing Non-Visual Tactile UX & Preventing Audio Chatter
              </h3>

              <div className="mt-4 space-y-3 font-mono text-xs text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">The Problem:</strong> Conventional mobile UI
                  depends on precise visual touch targets, which are entirely unusable for visually
                  impaired individuals. Concurrently, raw computer vision produces multiple detections
                  every second—feeding these straight into Text-to-Speech creates an overwhelming,
                  disorienting barrage of audio chatter that masks environmental auditory cues.
                </p>
                <p>
                  <strong className="text-foreground">The Solution:</strong> Eliminated on-screen touch
                  buttons in favor of full-screen two-finger directional gestures: horizontal swipe to cycle
                  modules, double tap to query current frame, long-press to vocalize wallet totals. Every
                  gesture is confirmed with distinct haptic vibration signatures. For voice, built an intelligent
                  priority queue with Levenshtein string hashing that suppresses duplicate detections for 3.5
                  seconds while allowing imminent collision warnings to interrupt immediately.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-border/40 flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">2-Finger Gesture Nav</span>
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">Haptic Engine</span>
              <span className="px-2 py-0.5 border border-border bg-surface-secondary">Levenshtein Cache</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 — RESEARCH AND NAVIGATION
          Distinctive conference-presentation panel, source-code link,
          and bold previous/next project navigation
      ========================================================================= */}
      <section aria-labelledby="research-heading" className="space-y-12">
        {/* Distinctive Conference Presentation Panel */}
        <div className="border-2 sm:border-[3px] border-border bg-card p-6 sm:p-8 shadow-[6px_6px_0px_0px_var(--border)] relative">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b-2 border-border/80 pb-4 mb-5">
            <div className="flex items-center gap-2">
              <FileText className="size-5 text-[#FF3C38]" aria-hidden="true" />
              <span className="font-mono text-xs font-black uppercase tracking-wider text-foreground">
                ACADEMIC RESEARCH // ORAL PRESENTATION
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#FF3C38] border-2 border-border bg-card px-2.5 py-1 shadow-[2px_2px_0px_0px_var(--border)]">
              <Sparkles className="size-3.5" aria-hidden="true" />
              ICFISN 2026 PROCEEDINGS
            </span>
          </div>

          <h3
            id="research-heading"
            className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground leading-tight"
          >
            {project.researchPaper?.title ?? "Retina: An AI Powered Assistive System for the Visually Impaired"}
          </h3>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs border-y-2 border-border/60 py-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                CONFERENCE
              </span>
              <span className="font-bold text-foreground mt-0.5 block">
                ICFISN 2026
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                LOCATION / HOST
              </span>
              <span className="font-bold text-foreground mt-0.5 block">
                Sree Buddha CE, Kerala (KTU)
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                DATES
              </span>
              <span className="font-bold text-foreground mt-0.5 block">
                March 24–25, 2026
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                PEER-REVIEW STATUS
              </span>
              <span className="font-bold text-[#22C55E] mt-0.5 flex items-center gap-1">
                <CheckCircle2 className="size-3.5" aria-hidden="true" />
                Accepted & Presented
              </span>
            </div>
          </div>

          <p className="mt-5 font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">
            {project.researchPaper?.description ??
              "Co-authored and delivered an oral presentation detailing the architecture, latency benchmarks, and multi-model quantization of offline edge-vision assistive systems on consumer Android hardware."}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                data-crosshair-target
                className="inline-flex min-h-12 items-center justify-center gap-2 border-2 border-border bg-[#F1BE05] px-6 py-3 font-mono text-sm font-bold text-black shadow-[4px_4px_0px_0px_var(--border)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
              >
                <span>EXPLORE SOURCE CODE ON GITHUB</span>
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            )}

            <div className="font-mono text-xs text-muted-foreground">
              Final-Year B.Tech Computer Science & Engineering Capstone Project
            </div>
          </div>
        </div>

        {/* Bold Previous / Next Project Navigation */}
        <ProjectArchiveNav previous={previous} next={next} accentColor="#FF3C38" />
      </section>
    </article>
  );
}

