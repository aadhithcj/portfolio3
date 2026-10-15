import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export type PulseHandle = { pulse: (x: number, y: number) => void };

const CHARS = " .·:-=+*#";

export const PulseField = forwardRef<PulseHandle>(function PulseField(_, ref) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const pulses = useRef<{ x: number; y: number; t: number }[]>([]);

  useImperativeHandle(ref, () => ({
    pulse: (x, y) => pulses.current.push({ x, y, t: performance.now() }),
  }));

  useEffect(() => {
    const c = canvas.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const styles = getComputedStyle(document.documentElement);
    const fg = styles.getPropertyValue("--muted-foreground").trim();
    const lime = styles.getPropertyValue("--lime").trim();
    const cell = 16;
    let raf = 0;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      c.width = innerWidth * dpr;
      c.height = innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    addEventListener("resize", resize);
    const draw = (now: number) => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      ctx.font = "12px JetBrains Mono, monospace";
      pulses.current = pulses.current.filter((p) => now - p.t < 1800);
      const time = reduce ? 0 : now / 1000;
      for (let y = 0; y < innerHeight; y += cell) {
        for (let x = 0; x < innerWidth; x += cell) {
          let v =
            (Math.sin(x * 0.012 + time * 0.6) +
              Math.cos(y * 0.015 - time * 0.4)) *
              0.25 +
            0.5;
          let boost = 0;
          for (const p of pulses.current) {
            const age = (now - p.t) / 1000;
            const d = Math.hypot(x - p.x, y - p.y);
            const ring =
              Math.exp(-(((d - age * 700) / 50) ** 2)) * (1 - age / 1.8);
            boost = Math.max(boost, ring);
          }
          v = Math.min(1, v * 0.45 + boost);
          const ch = CHARS[Math.floor(v * (CHARS.length - 1))] ?? " ";
          if (ch === " ") continue;
          ctx.fillStyle = boost > 0.3 ? lime : fg;
          ctx.globalAlpha = 0.18 + boost * 0.8;
          ctx.fillText(ch, x, y);
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvas}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
});
