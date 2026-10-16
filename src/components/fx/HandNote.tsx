import { motion } from "motion/react";

export function HandNote({
  children,
  className = "",
  flip = false,
  rotate = -4,
  arrow = true,
}: {
  children: React.ReactNode;
  className?: string;
  flip?: boolean; // mirrors the arrow to point down-left
  rotate?: number;
  arrow?: boolean;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none select-none text-foreground/70 ${className}`}
      style={{ rotate }}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
    >
      <p
        className={`font-hand text-xl leading-none ${flip ? "text-right" : ""}`}
      >
        {children}
      </p>
      {arrow && (
        <svg
          viewBox="0 0 80 60"
          className={`mt-1 h-12 w-16 ${flip ? "-scale-x-100 ml-auto" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M4 8 C 30 0, 60 14, 66 48"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          <motion.path
            d="M54 40 L66 50 L72 34"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 1.3 }}
          />
        </svg>
      )}
    </motion.div>
  );
}
