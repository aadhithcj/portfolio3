"use client";

import {
  useRef,
  useCallback,
  useEffect,
  type ReactNode,
  type CSSProperties,
} from "react";
import "./BorderGlow.css";

function parseHSL(hslStr: string) {
  const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  if (!match) return { h: 95, s: 100, l: 68 };
  return {
    h: parseFloat(match[1] ?? "95"),
    s: parseFloat(match[2] ?? "100"),
    l: parseFloat(match[3] ?? "68"),
  };
}

function buildGlowVars(glowColor: string, intensity: number) {
  const { h, s, l } = parseHSL(glowColor);
  const base = `${h}deg ${s}% ${l}%`;
  const opacities = [100, 60, 50, 40, 30, 20, 10];
  const keys = ["", "-60", "-50", "-40", "-30", "-20", "-10"];
  const vars: Record<string, string> = {};
  for (let i = 0; i < opacities.length; i++) {
    const opacity = opacities[i] ?? 100;
    const key = keys[i] ?? "";
    vars[`--glow-color${key}`] =
      `hsl(${base} / ${Math.min(opacity * intensity, 100)}%)`;
  }
  return vars;
}

const GRADIENT_POSITIONS = [
  "80% 55%",
  "69% 34%",
  "8% 6%",
  "41% 38%",
  "86% 85%",
  "82% 18%",
  "51% 4%",
];
const GRADIENT_KEYS = [
  "--gradient-one",
  "--gradient-two",
  "--gradient-three",
  "--gradient-four",
  "--gradient-five",
  "--gradient-six",
  "--gradient-seven",
];
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];

function buildGradientVars(colors: string[]) {
  const vars: Record<string, string> = {};
  const fallback = colors[0] ?? "#9fff5b";
  for (let i = 0; i < 7; i++) {
    const idx = COLOR_MAP[i] ?? 0;
    const c = colors[Math.min(idx, colors.length - 1)] ?? fallback;
    const key = GRADIENT_KEYS[i] ?? `--gradient-${i}`;
    const pos = GRADIENT_POSITIONS[i] ?? "50% 50%";
    vars[key] = `radial-gradient(at ${pos}, ${c} 0px, transparent 50%)`;
  }
  vars["--gradient-base"] = `linear-gradient(${fallback} 0 100%)`;
  return vars;
}

function isLightColor(color: string) {
  const value = color.trim().replace("#", "");
  if (!/^[\da-f]{3}([\da-f]{3})?$/i.test(value)) return false;
  const hex =
    value.length === 3
      ? value
          .split("")
          .map((char) => char + char)
          .join("")
      : value;
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4, 6), 16);
  return red * 0.2126 + green * 0.7152 + blue * 0.0722 > 180;
}

function easeOutCubic(x: number) {
  return 1 - Math.pow(1 - x, 3);
}
function easeInCubic(x: number) {
  return x * x * x;
}

interface AnimateOptions {
  start?: number;
  end?: number;
  duration?: number;
  delay?: number;
  ease?: (x: number) => number;
  onUpdate: (v: number) => void;
  onEnd?: () => void;
}

function animateValue({
  start = 0,
  end = 100,
  duration = 1000,
  delay = 0,
  ease = easeOutCubic,
  onUpdate,
  onEnd,
}: AnimateOptions) {
  const t0 = performance.now() + delay;
  function tick() {
    const elapsed = performance.now() - t0;
    const t = Math.min(elapsed / duration, 1);
    onUpdate(start + (end - start) * ease(t));
    if (t < 1) requestAnimationFrame(tick);
    else if (onEnd) onEnd();
  }
  setTimeout(() => requestAnimationFrame(tick), delay);
}

export interface BorderGlowProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
  fillOpacity?: number;
}

export default function BorderGlow({
  children,
  className = "",
  style,
  edgeSensitivity = 4,
  glowColor = "95 100 68",
  backgroundColor = "var(--surface)",
  borderRadius = 15,
  glowRadius = 22,
  glowIntensity = 1,
  coneSpread = 8,
  animated = false,
  colors = ["#9fff5b", "#4ade80", "#22c55e"],
  fillOpacity = 0.35,
}: BorderGlowProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const getCenterOfElement = useCallback((el: HTMLElement) => {
    const { width, height } = el.getBoundingClientRect();
    return [width / 2, height / 2] as const;
  }, []);

  const getEdgeProximity = useCallback(
    (el: HTMLElement, x: number, y: number) => {
      const [cx, cy] = getCenterOfElement(el);
      const dx = x - cx;
      const dy = y - cy;
      let kx = Infinity;
      let ky = Infinity;
      if (dx !== 0) kx = cx / Math.abs(dx);
      if (dy !== 0) ky = cy / Math.abs(dy);
      return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
    },
    [getCenterOfElement]
  );

  const getCursorAngle = useCallback(
    (el: HTMLElement, x: number, y: number) => {
      const [cx, cy] = getCenterOfElement(el);
      const dx = x - cx;
      const dy = y - cy;
      if (dx === 0 && dy === 0) return 0;
      const radians = Math.atan2(dy, dx);
      let degrees = radians * (180 / Math.PI) + 90;
      if (degrees < 0) degrees += 360;
      return degrees;
    },
    [getCenterOfElement]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const edge = getEdgeProximity(card, x, y);
      const angle = getCursorAngle(card, x, y);

      card.style.setProperty("--edge-proximity", `${(edge * 100).toFixed(3)}`);
      card.style.setProperty("--cursor-angle", `${angle.toFixed(3)}deg`);
    },
    [getEdgeProximity, getCursorAngle]
  );

  useEffect(() => {
    if (!animated || !cardRef.current) return undefined;
    const card = cardRef.current;
    const angleStart = 110;
    const angleEnd = 465;
    card.classList.add("sweep-active");
    card.style.setProperty("--cursor-angle", `${angleStart}deg`);

    animateValue({
      duration: 500,
      onUpdate: (v) => card.style.setProperty("--edge-proximity", String(v)),
    });
    animateValue({
      ease: easeInCubic,
      duration: 1500,
      end: 50,
      onUpdate: (v) => {
        card.style.setProperty(
          "--cursor-angle",
          `${(angleEnd - angleStart) * (v / 100) + angleStart}deg`
        );
      },
    });
    animateValue({
      ease: easeOutCubic,
      delay: 1500,
      duration: 2250,
      start: 50,
      end: 100,
      onUpdate: (v) => {
        card.style.setProperty(
          "--cursor-angle",
          `${(angleEnd - angleStart) * (v / 100) + angleStart}deg`
        );
      },
    });
    animateValue({
      ease: easeInCubic,
      delay: 2500,
      duration: 1500,
      start: 100,
      end: 0,
      onUpdate: (v) => card.style.setProperty("--edge-proximity", String(v)),
      onEnd: () => card.classList.remove("sweep-active"),
    });
    return undefined;
  }, [animated]);

  const glowVars = buildGlowVars(glowColor, glowIntensity);
  const lightSurface = isLightColor(backgroundColor);

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      className={`border-glow-card${lightSurface ? " border-glow-card--light" : ""} ${className}`}
      style={
        {
          "--card-bg": backgroundColor,
          "--edge-sensitivity": edgeSensitivity,
          "--border-radius": `${borderRadius}px`,
          "--glow-padding": `${glowRadius}px`,
          "--cone-spread": coneSpread,
          "--fill-opacity": fillOpacity,
          ...glowVars,
          ...buildGradientVars(colors),
          ...style,
        } as CSSProperties
      }
    >
      <span className="edge-light" />
      <div className="border-glow-inner">{children}</div>
    </div>
  );
}
