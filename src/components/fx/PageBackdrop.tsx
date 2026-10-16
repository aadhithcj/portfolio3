import { useTheme } from "@/hooks/use-theme";

export function PageBackdrop({ accent }: { accent?: string }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden transition-opacity duration-500"
    >
      {/* Pure CSS static dotted background: zero WebGL, zero canvas overhead, zero pulse effect */}
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          backgroundImage: `radial-gradient(${
            isDark ? "rgba(247, 240, 217, 0.12)" : "rgba(46, 45, 52, 0.16)"
          } 1.5px, transparent 1.5px)`,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0",
        }}
      />
    </div>
  );
}
