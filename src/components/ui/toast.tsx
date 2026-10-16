import * as React from "react";
import { cn } from "@/lib/utils";

export interface ToastActionProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export interface ToastOptions {
  id?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  type?: "default" | "error" | "success" | "warning";
  duration?: number;
  actionProps?: ToastActionProps;
  targetField?: string;
}

interface ToastItem extends ToastOptions {
  id: string;
}

interface ToastContextValue {
  toasts: ToastItem[];
  add: (options: ToastOptions) => string;
  close: (id: string) => void;
  error: (message: React.ReactNode, options?: Partial<ToastOptions>) => string;
  success: (
    message: React.ReactNode,
    options?: Partial<ToastOptions>
  ) => string;
}

const ToastContext = React.createContext<ToastContextValue | null>(null);

export function useToastManager(): ToastContextValue {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error(
      "useToastManager must be used within a <Toaster> provider."
    );
  }
  return context;
}

export interface ToasterProps {
  children?: React.ReactNode;
  position?:
    "top-right" | "top-center" | "bottom-right" | "bottom-center" | "inline";
  className?: string;
}

export function Toaster({
  children,
  position = "top-right",
  className,
}: ToasterProps) {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  const close = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const add = React.useCallback(
    (options: ToastOptions) => {
      const id =
        options.id ??
        `toast-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      const duration = options.duration ?? 4500;

      const item: ToastItem = {
        ...options,
        id,
      };

      setToasts((prev) => [...prev, item]);

      if (duration > 0) {
        window.setTimeout(() => {
          close(id);
        }, duration);
      }

      return id;
    },
    [close]
  );

  const error = React.useCallback(
    (message: React.ReactNode, options?: Partial<ToastOptions>) => {
      return add({
        type: "error",
        description: message,
        ...options,
      });
    },
    [add]
  );

  const success = React.useCallback(
    (message: React.ReactNode, options?: Partial<ToastOptions>) => {
      return add({
        type: "success",
        description: message,
        ...options,
      });
    },
    [add]
  );

  const positionClasses = {
    "top-right":
      "fixed top-5 right-5 z-50 flex flex-col gap-3 pointer-events-none",
    "top-center":
      "fixed top-5 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-3 pointer-events-none items-center",
    "bottom-right":
      "fixed bottom-5 right-5 z-50 flex flex-col gap-3 pointer-events-none",
    "bottom-center":
      "fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-3 pointer-events-none items-center",
    inline: "relative z-30 flex flex-col gap-2 w-full",
  }[position];

  return (
    <ToastContext.Provider value={{ toasts, add, close, error, success }}>
      {children}

      {/* Render active toasts with high Neo-Brutalist styling */}
      <div className={cn(positionClasses, className)} aria-live="polite">
        {toasts.map((item) => (
          <div
            key={item.id}
            role="alert"
            className={cn(
              "pointer-events-auto border-2 border-border p-3.5 sm:p-4 rounded-none shadow-[4px_4px_0px_0px_var(--shadow-color)] font-mono text-xs max-w-sm w-full transition-all flex items-start justify-between gap-3 animate-in fade-in slide-in-from-top-2 duration-150",
              item.type === "error" && "bg-[#FF3C38] text-white",
              item.type === "success" && "bg-[#22C55E] text-black",
              (!item.type || item.type === "default") &&
                "bg-card text-foreground"
            )}
          >
            <div className="flex items-start gap-2.5 min-w-0">
              <span
                className={cn(
                  "size-4 grid place-items-center font-black text-[10px] border border-current shrink-0 mt-0.5",
                  item.type === "error"
                    ? "bg-black text-white"
                    : "bg-black text-white"
                )}
              >
                {item.type === "error"
                  ? "!"
                  : item.type === "success"
                    ? "✓"
                    : "i"}
              </span>

              <div className="flex flex-col min-w-0">
                {item.title && (
                  <p className="font-mono text-xs font-black uppercase tracking-wider leading-snug">
                    {item.title}
                  </p>
                )}
                {item.description && (
                  <p
                    className={cn(
                      "font-mono text-xs font-semibold leading-relaxed",
                      item.title ? "mt-1" : ""
                    )}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {item.actionProps && (
                <button
                  type="button"
                  onClick={item.actionProps.onClick}
                  className="border border-current px-2 py-0.5 font-mono text-[10px] font-black uppercase bg-black text-white hover:opacity-80 transition-opacity"
                >
                  {item.actionProps.children}
                </button>
              )}
              <button
                type="button"
                onClick={() => close(item.id)}
                aria-label="Dismiss toast"
                className="hover:opacity-75 font-mono text-xs font-black p-0.5"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
