import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import { schematicCaptions } from "@/lib/schematic-captions";

/**
 * Small animated diagrams of how each project works, drawn in the site's
 * ink-border / hard-shadow language. They loop slowly, pause when off-screen
 * (including display:none) or the tab is hidden, and hold on one still frame
 * under prefers-reduced-motion.
 */

// False while the schematic is out of view: timers stop and looping animations idle
const LiveContext = createContext(true);

// Steps 0..length-1 on a timer; reduced motion holds on `still`, the most informative frame.
// The still frame is applied after mount so the first client render matches the server.
function useCycle(length: number, ms: number, still = 0) {
  const reduce = useReducedMotion();
  const live = useContext(LiveContext);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (reduce) {
      setIdx(still);
      return;
    }
    if (length < 2 || !live) return;
    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setIdx((i) => (i + 1) % length);
      }
    }, ms);
    return () => window.clearInterval(timer);
  }, [length, ms, reduce, still, live]);

  return idx;
}

const chip =
  "border-2 border-border px-1.5 py-0.5 font-mono text-[10.5px] font-black uppercase tracking-wider leading-none";

/* ------------------------------------------------------------------ */
/* Retina: camera viewfinder cycling through its four reading modes    */
/* ------------------------------------------------------------------ */

const retinaModes = [
  {
    key: "TEXT",
    label: "EXIT ↑",
    speech: "“exit, straight ahead”",
    box: "left-[18%] top-[16%] w-[52%] h-[22%]",
  },
  {
    key: "CURRENCY",
    label: "₹500",
    speech: "“five hundred rupees”",
    box: "left-[22%] top-[36%] w-[56%] h-[26%]",
  },
  {
    key: "OBJECTS",
    label: "CHAIR · LEFT",
    speech: "“chair, on your left”",
    box: "left-[8%] top-[30%] w-[40%] h-[40%]",
  },
  {
    key: "DEPTH",
    label: "WALL · CLOSE",
    speech: "beep · beep · beep",
    box: "left-[12%] top-[10%] w-[76%] h-[62%]",
  },
] as const;

function RetinaSchematic({ accent }: { accent: string }) {
  const live = useContext(LiveContext);
  const idx = useCycle(retinaModes.length, 2200);
  const mode = retinaModes[idx]!;

  return (
    <div className="flex h-full w-full items-center justify-center gap-4 sm:gap-6">
      {/* Phone */}
      <div className="relative w-37.5 sm:w-43 shrink-0 border-2 border-border bg-[#2E2D34] p-1.5 shadow-[4px_4px_0px_0px_var(--shadow-color)]">
        <div className="flex items-center justify-between px-1 pb-1 font-mono text-[9.5px] font-bold text-[#F7F0D9]">
          <span className="flex items-center gap-1">
            <span className="size-1.5 bg-[#22C55E]" />
            LIVE
          </span>
          <span className="opacity-70">ON-DEVICE</span>
        </div>

        <div
          className="relative h-40 sm:h-46.25 overflow-hidden border border-[#F7F0D9]/30 bg-[#3B3A44]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(247,240,217,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(247,240,217,0.07) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={mode.key}
              initial={{ opacity: 0, scale: 1.12 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
              className={`absolute border-2 ${mode.box}`}
              style={{ borderColor: accent }}
            >
              <span
                className="absolute -top-4.25 -left-0.5 px-1 font-mono text-[9.5px] font-black leading-3.75 text-black whitespace-nowrap"
                style={{ background: accent }}
              >
                {mode.label}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Scan line: a full-height track moved with transforms, so no layout per frame */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[90%]"
            animate={live ? { y: ["4%", "100%", "4%"] } : { y: "4%" }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
          >
            <div className="h-0.5 bg-[#F7F0D9]/50" />
          </motion.div>
        </div>

        {/* Spoken output */}
        <div className="mt-1.5 flex items-center gap-1.5 px-1 py-1">
          <div className="flex h-3 items-end gap-0.5" aria-hidden="true">
            {[0, 1, 2, 3].map((b) => (
              <motion.span
                key={b}
                className="h-full w-0.75 origin-bottom bg-[#F7F0D9]"
                animate={
                  live ? { scaleY: [0.3, 1, 0.45, 0.8, 0.3] } : { scaleY: 0.6 }
                }
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  delay: b * 0.12,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.span
              key={mode.speech}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.18 }}
              className="truncate font-mono text-[9.5px] text-[#F7F0D9]"
            >
              {mode.speech}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Mode rail */}
      <ul className="flex flex-col gap-1.5" aria-label="Reading modes">
        {retinaModes.map((m, i) => (
          <li
            key={m.key}
            className={`${chip} transition-all duration-150 ${
              i === idx
                ? "translate-x-1 text-black shadow-[2px_2px_0px_0px_var(--shadow-color)]"
                : "bg-card text-muted-foreground"
            }`}
            style={i === idx ? { background: accent } : undefined}
          >
            {m.key}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* DevOpsHub: push → deploy pipeline with a running log                */
/* ------------------------------------------------------------------ */

const pipeline = [
  { key: "PUSH", log: "$ git push origin main" },
  { key: "TEST", log: "✓ pytest + frontend build" },
  { key: "BUILD", log: "✓ image :3f9c2a1 → ghcr.io" },
  { key: "DEPLOY", log: "→ ssm: ./deploy.sh 3f9c2a1" },
  { key: "HEALTH", log: "✓ /api/health 200 · live" },
] as const;

function DevOpsSchematic({ accent }: { accent: string }) {
  // 1..length: at least one log line is always visible
  const step = useCycle(pipeline.length, 1100, pipeline.length - 1) + 1;

  return (
    <div className="flex h-full w-full flex-col justify-center gap-5 px-1">
      <ol className="flex items-center" aria-label="Deploy pipeline">
        {pipeline.map((s, i) => {
          const done = i < step;
          const current = i === step;
          return (
            <li key={s.key} className="flex flex-1 items-center last:flex-none">
              <div
                className={`grid size-11 sm:size-12 shrink-0 place-items-center border-2 border-border font-mono text-[9.5px] sm:text-[10.5px] font-black transition-all duration-200 ${
                  done
                    ? "text-black shadow-[3px_3px_0px_0px_var(--shadow-color)]"
                    : current
                      ? "bg-card text-foreground -translate-y-0.5 shadow-[3px_3px_0px_0px_var(--shadow-color)]"
                      : "bg-card text-muted-foreground shadow-[1px_1px_0px_0px_var(--shadow-color)]"
                }`}
                style={done ? { background: accent } : undefined}
              >
                {s.key}
              </div>
              {i < pipeline.length - 1 && (
                <div className="relative mx-0.5 h-0.5 flex-1 bg-border/30">
                  <div
                    className="absolute inset-y-0 left-0 bg-border transition-[width] duration-300"
                    style={{ width: done ? "100%" : "0%" }}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <div className="border-2 border-border bg-[#2E2D34] p-2.5 font-mono text-[10.5px] sm:text-[11px] leading-[1.7] text-[#F7F0D9] shadow-[3px_3px_0px_0px_var(--shadow-color)] min-h-23">
        {pipeline.slice(0, Math.min(step, pipeline.length)).map((s) => (
          <motion.div
            key={s.key}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            className="truncate"
          >
            {s.log}
          </motion.div>
        ))}
        {step < pipeline.length && (
          <span className="inline-block h-3 w-1.5 animate-pulse bg-[#F7F0D9] align-middle" />
        )}
      </div>

      <div className="flex items-center justify-between font-mono text-[10.5px] font-bold uppercase text-muted-foreground">
        <span>main · github actions</span>
        <span
          className={`${chip} ${step === pipeline.length ? "text-black" : "bg-card text-foreground"}`}
          style={step === pipeline.length ? { background: accent } : undefined}
        >
          {step === pipeline.length ? "deployed" : "rollback armed"}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Inventory: a counter sale committing in one transaction             */
/* ------------------------------------------------------------------ */

const saleLines = [
  { item: "Spark plug", qty: 2, stock: 14 },
  { item: "Brake shoe set", qty: 1, stock: 6 },
  { item: "Chain kit", qty: 1, stock: 3 },
] as const;

function InventorySchematic({ accent }: { accent: string }) {
  // 0-2: lines being billed, 3: committed
  const phase = useCycle(5, 1000, saleLines.length);
  const shown = Math.min(phase + 1, saleLines.length);
  const committed = phase >= saleLines.length;

  return (
    <div className="flex h-full w-full items-center justify-center gap-4 sm:gap-6">
      {/* Thermal receipt */}
      <div
        className="w-34 sm:w-49 shrink-0 bg-[#FFFDF7] px-3 pt-3 pb-5 text-[#2E2D34] border-2 border-b-0 border-border shadow-[4px_0px_0px_0px_var(--shadow-color)]"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - 6px), 92% 100%, 84% calc(100% - 6px), 76% 100%, 68% calc(100% - 6px), 60% 100%, 52% calc(100% - 6px), 44% 100%, 36% calc(100% - 6px), 28% 100%, 20% calc(100% - 6px), 12% 100%, 4% calc(100% - 6px), 0 100%)",
        }}
      >
        <p className="text-center font-mono text-[10.5px] font-black uppercase tracking-wider">
          Bill #0412
        </p>
        <div className="my-1.5 border-t border-dashed border-[#2E2D34]/60" />
        <ul className="space-y-1 min-h-13.5">
          {saleLines.slice(0, shown).map((l) => (
            <motion.li
              key={l.item}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-between gap-2 font-mono text-[10.5px]"
            >
              <span className="truncate">{l.item}</span>
              <span className="font-bold">×{l.qty}</span>
            </motion.li>
          ))}
        </ul>
        <div className="my-1.5 border-t border-dashed border-[#2E2D34]/60" />
        <p className="flex justify-between font-mono text-[10.5px] font-black uppercase">
          <span>Items</span>
          <span>
            {saleLines.slice(0, shown).reduce((n, l) => n + l.qty, 0)}
          </span>
        </p>
      </div>

      {/* Stock + transaction */}
      <div className="flex min-w-0 flex-col gap-2">
        <div className="border-2 border-border bg-card p-2 shadow-[3px_3px_0px_0px_var(--shadow-color)]">
          <p className="font-mono text-[9.5px] font-black uppercase text-muted-foreground">
            stock
          </p>
          <ul className="mt-1 space-y-0.5">
            {saleLines.map((l) => (
              <li
                key={l.item}
                className="flex items-center justify-between gap-3 font-mono text-[10.5px]"
              >
                <span className="truncate">{l.item}</span>
                <span className="tabular-nums font-bold">
                  {committed ? l.stock - l.qty : l.stock}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="font-mono text-[10.5px] leading-relaxed text-muted-foreground">
          <p>BEGIN;</p>
          <p className="pl-2">insert bill + lines</p>
          <p className="pl-2">update stock</p>
        </div>

        <motion.span
          key={committed ? "commit" : "pending"}
          initial={committed ? { scale: 1.4, rotate: -8, opacity: 0 } : false}
          animate={{ scale: 1, rotate: -3, opacity: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 18 }}
          className={`${chip} w-fit ${committed ? "text-black shadow-[2px_2px_0px_0px_var(--shadow-color)]" : "bg-card text-muted-foreground"}`}
          style={committed ? { background: accent } : {}}
        >
          {committed ? "COMMIT ✓" : "pending…"}
        </motion.span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Roots: soil + climate inputs → top-3 crops                          */
/* ------------------------------------------------------------------ */

const rootsSamples = [
  {
    inputs: [62, 48, 40, 55, 80],
    crops: [
      ["Rice", 71],
      ["Jute", 18],
      ["Coconut", 11],
    ],
  },
  {
    inputs: [80, 42, 22, 64, 38],
    crops: [
      ["Maize", 64],
      ["Cotton", 23],
      ["Banana", 13],
    ],
  },
] as const;

const rootsLabels = ["N", "P", "K", "pH", "Rain"];

function RootsSchematic({ accent }: { accent: string }) {
  const idx = useCycle(rootsSamples.length, 2600);
  const sample = rootsSamples[idx]!;

  return (
    <div className="flex h-full w-full items-center justify-center gap-4 sm:gap-6">
      <div className="w-37.5 sm:w-45 shrink-0 border-2 border-border bg-card p-2.5 shadow-[3px_3px_0px_0px_var(--shadow-color)]">
        <p className="font-mono text-[9.5px] font-black uppercase text-muted-foreground">
          soil + climate
        </p>
        <ul className="mt-2 space-y-1.5">
          {rootsLabels.map((label, i) => (
            <li key={label} className="flex items-center gap-2">
              <span className="w-7 font-mono text-[10.5px] font-bold">
                {label}
              </span>
              <div className="relative h-2.5 flex-1 border border-border bg-background">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-border"
                  animate={{ width: `${sample.inputs[i]}%` }}
                  transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="font-mono text-base font-black" aria-hidden="true">
        →
      </div>

      <div className="min-w-0 flex-1 max-w-47.5">
        <p className="font-mono text-[9.5px] font-black uppercase text-muted-foreground">
          top 3 · sample
        </p>
        <ul className="mt-2 space-y-2">
          {sample.crops.map(([crop, pct], i) => (
            <li key={`${idx}-${crop}`}>
              <div className="flex justify-between font-mono text-[10.5px] font-bold">
                <span>{crop}</span>
                <span className="tabular-nums">{pct}%</span>
              </div>
              <div className="mt-0.5 h-3 border-2 border-border bg-card">
                <motion.div
                  className="h-full"
                  style={{ background: i === 0 ? accent : "var(--muted)" }}
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CV Management System: weights change, ranking reorders              */
/* ------------------------------------------------------------------ */

const cvCandidates = [
  { id: "A", skills: 9, exp: 3, role: 6 },
  { id: "B", skills: 5, exp: 9, role: 7 },
  { id: "C", skills: 6, exp: 6, role: 9 },
  { id: "D", skills: 4, exp: 5, role: 4 },
] as const;

const cvPresets = [
  { name: "skills-first", w: { skills: 0.6, exp: 0.2, role: 0.2 } },
  { name: "experience-first", w: { skills: 0.2, exp: 0.6, role: 0.2 } },
  { name: "role-match", w: { skills: 0.2, exp: 0.2, role: 0.6 } },
] as const;

function CvSchematic({ accent }: { accent: string }) {
  const idx = useCycle(cvPresets.length, 2400);
  const preset = cvPresets[idx]!;
  const ranked = cvCandidates
    .map((c) => ({
      ...c,
      score:
        c.skills * preset.w.skills +
        c.exp * preset.w.exp +
        c.role * preset.w.role,
    }))
    .sort((a, b) => b.score - a.score);

  return (
    <div className="flex h-full w-full flex-col justify-center gap-3">
      <div className="flex flex-wrap items-center gap-1.5">
        {(["skills", "exp", "role"] as const).map((k) => (
          <span
            key={k}
            className={`${chip} ${preset.w[k] > 0.5 ? "text-black" : "bg-card text-foreground"}`}
            style={preset.w[k] > 0.5 ? { background: accent } : undefined}
          >
            {k} ×{preset.w[k].toFixed(1)}
          </span>
        ))}
        <span className="ml-auto font-mono text-[10.5px] text-muted-foreground">
          {preset.name}
        </span>
      </div>

      <ul className="border-2 border-border bg-card shadow-[3px_3px_0px_0px_var(--shadow-color)]">
        {ranked.map((c, i) => (
          <motion.li
            layout
            key={c.id}
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
            className="flex items-center gap-2.5 border-b border-border/40 px-2.5 py-1.5 last:border-b-0 bg-card"
          >
            <span className="w-4 font-mono text-[10.5px] font-black text-muted-foreground tabular-nums">
              {i + 1}
            </span>
            <span
              className="grid size-5 place-items-center border-2 border-border font-mono text-[10.5px] font-black text-black"
              style={{ background: i === 0 ? accent : "var(--muted)" }}
            >
              {c.id}
            </span>
            <span className="font-mono text-[10.5px]">Candidate {c.id}</span>
            <div className="ml-auto h-2 w-16 sm:w-24 border border-border bg-background">
              <motion.div
                className="h-full bg-border"
                animate={{ width: `${c.score * 10}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <span className="w-7 text-right font-mono text-[10.5px] font-bold tabular-nums">
              {c.score.toFixed(1)}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

const schematics: Record<
  string,
  (props: { accent: string }) => React.ReactNode
> = {
  retina: RetinaSchematic,
  devopshub: DevOpsSchematic,
  inventory: InventorySchematic,
  "crop-recommendation": RootsSchematic,
  "cv-sorting": CvSchematic,
};

export function ProjectSchematic({
  slug,
  accent,
  className = "",
}: {
  slug: string;
  accent: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const live = useInView(ref, { amount: 0.2 });
  const Schematic = schematics[slug];
  if (!Schematic) return null;

  return (
    <div
      ref={ref}
      role="img"
      aria-label={schematicCaptions[slug]}
      className={`select-none ${className}`}
    >
      <LiveContext.Provider value={live}>
        <Schematic accent={accent} />
      </LiveContext.Provider>
    </div>
  );
}
