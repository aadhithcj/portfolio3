import DotGrid from "@/components/fx/DotGrid";
import { useTheme } from "@/hooks/use-theme";

export function PageBackdrop({ accent }: { accent: string }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-80 transition-opacity duration-500">
      <DotGrid
        baseColor={isDark ? "#0A3545" : "#2E2D34"}
        activeColor={accent}
        shape="circle"
        dotSize={isDark ? 4.5 : 3.6}
        gap={18}
        proximity={150}
        strength={1.2}
        bounce={0.65}
        tension={0.4}
        returnDuration={0.8}
        shockRadius={330}
        shockStrength={5.6}
        swell={0.88}
        stretch={0.5}
        glow={0.8}
        fade={0.15}
        opacity={isDark ? 0.5 : 0.14}
        mouseInteraction
      />
    </div>
  );
}
