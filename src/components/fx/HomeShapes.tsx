import { useState } from "react";
import { motion } from "motion/react";

export const PLANET_COLORS = [
  "#CE4760", // Crimson pink (original)
  "#FF7700", // Vibrant orange
  "#F1BE05", // Brand gold
  "#22C55E", // Emerald green
  "#42BFDD", // Cyan
  "#9649CB", // Purple
];

/**
 * Shape 1: Interactive Planet & Satellite
 * - Click to cycle colors and trigger orbital rotation
 * - Dispatches a pulse shockwave across the dot grid in the new color!
 * - Displays a whimsical comic sound effect popup
 * - Tactile squish-and-pop physics
 */
export function InteractivePinkPlanet({
  activeColorIdx,
  onColorChange,
}: {
  activeColorIdx: number;
  onColorChange: (newIdx: number) => void;
}) {
  const [bopCount, setBopCount] = useState(0);
  const [speech, setSpeech] = useState<string | null>(null);

  const bopPhrases = ["BOOP!", "POP! ✦", "NICE!", "WHEEE!", "BOING!", "ZOOM!"];

  const handleBop = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextBop = bopCount + 1;
    setBopCount(nextBop);
    const nextColorIdx = (activeColorIdx + 1) % PLANET_COLORS.length;
    onColorChange(nextColorIdx);

    const phrase = bopPhrases[nextBop % bopPhrases.length] ?? "BOOP!";
    setSpeech(phrase);
    setTimeout(() => {
      setSpeech((current) => (current === phrase ? null : current));
    }, 1200);

    // Trigger full-screen dot grid pulse shockwave originating from this ball
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    window.dispatchEvent(
      new CustomEvent("dotgrid:bigpulse", {
        detail: { x: cx, y: cy, speed: 3200 },
      })
    );
  };

  const currentColor = PLANET_COLORS[activeColorIdx % PLANET_COLORS.length] ?? PLANET_COLORS[0]!;

  return (
    <div className="hidden lg:flex absolute right-0 xl:right-4 top-1/2 -translate-y-1/2 z-20 items-center">
      <div className="relative">
        {/* Floating Comic speech bubble when clicked */}
        {speech && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.8 }}
            animate={{ opacity: 1, y: -12, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card border-2 border-border px-2.5 py-0.5 font-mono text-[10px] font-black uppercase text-foreground shadow-[2.5px_2.5px_0px_0px_var(--border)] z-30 pointer-events-none"
          >
            {speech}
          </motion.div>
        )}

        <motion.button
          type="button"
          onClick={handleBop}
          aria-label="Interactive color-changing planet. Click to cycle color and pulse grid."
          data-crosshair-target
          className="relative block size-12 xl:size-14 rounded-full border-2 border-border shadow-[4px_4px_0px_0px_var(--border)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground transition-shadow"
          style={{ backgroundColor: currentColor }}
          whileHover={{ scale: 1.1, rotate: 12 }}
          whileTap={{ scale: 0.86, rotate: -15 }}
          title="Click to boop & pulse grid!"
        >
          {/* Orbiting Moon dot */}
          <motion.div
            className="absolute -top-3 -left-2.5 size-3.5 rounded-full border-2 border-border bg-foreground"
            animate={{
              rotate: bopCount * 180,
            }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
          />
        </motion.button>
      </div>
    </div>
  );
}

/**
 * Shape 2: Draggable Neo-Brutalist Sticker
 * ("draggable across the whole homescreen")
 * - Can be dragged anywhere across the whole page
 * - Elastic spring physics, tilts and scales up with high z-index
 * - Changes text to "WHEEE! ✦" when dragging
 */
export function DraggableSticker({
  containerRef,
}: {
  containerRef?: React.RefObject<HTMLElement | null>;
}) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
      drag
      dragConstraints={containerRef ?? false}
      dragElastic={0.08}
      dragMomentum={false}
      whileDrag={{ scale: 1.15, rotate: 6, zIndex: 100 }}
      whileHover={{ scale: 1.05 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      className="hidden md:flex absolute top-4 sm:top-6 right-6 xl:right-24 z-30 select-none cursor-grab active:cursor-grabbing"
      initial={{ rotate: -5 }}
    >
      <div className="flex items-center gap-1.5 border-2 border-border bg-[#F1BE05] text-black px-3 py-1 font-mono text-xs font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_var(--border)] active:shadow-[2px_2px_0px_0px_var(--border)] transition-shadow">
        <span className="font-mono text-sm leading-none opacity-70">⠿</span>
        <span>{isDragging ? "WHEEE! ✦" : "DRAG ME"}</span>
        <span className="text-[10px]">↗</span>
      </div>
    </motion.div>
  );
}

/**
 * Shape 3: Hover-Only Reactive Prism
 * ("one only react on hover")
 * - Strictly reacts only on cursor hover
 * - Spins 180° on mouse enter with spring physics
 * - Unfolds a whimsical "PEEK-A-BOO!" tag
 * - Clicking does nothing (hover-reactive only)
 */
export function HoverReactiveShape() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hidden md:flex absolute top-4 sm:top-6 left-6 xl:left-24 z-20 items-center gap-2 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          rotate: isHovered ? 180 : 12,
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="size-10 xl:size-11 grid place-items-center border-2 border-border bg-[#9649CB] text-white shadow-[4px_4px_0px_0px_var(--border)] cursor-default transition-shadow"
      >
        <span className="text-base font-black">
          {isHovered ? "✦" : "✳"}
        </span>
      </motion.div>

      {/* Unfolding Banner on Hover Only */}
      <motion.div
        initial={false}
        animate={{
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : -8,
          scale: isHovered ? 1 : 0.9,
        }}
        transition={{ duration: 0.15 }}
        className="pointer-events-none border-2 border-border bg-card text-foreground px-2 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_var(--border)]"
      >
        PEEK-A-BOO! 👀
      </motion.div>
    </div>
  );
}
