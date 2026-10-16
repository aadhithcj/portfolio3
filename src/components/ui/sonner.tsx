import { Toaster as Sonner } from "sonner";
import { useTheme } from "@/hooks/use-theme";
import {
  Check,
  AlertCircle,
  AlertTriangle,
  Info,
  Loader2,
  X,
} from "lucide-react";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();

  return (
    <Sonner
      theme={(theme ?? "system") as "dark" | "light" | "system"}
      className="toaster group"
      icons={{
        success: (
          <div className="size-6 grid place-items-center bg-[#22C55E] text-black border-2 border-border shadow-[1.5px_1.5px_0px_0px_var(--shadow-color)] shrink-0 font-bold">
            <Check className="size-3.5 stroke-[3.5]" />
          </div>
        ),
        error: (
          <div className="size-6 grid place-items-center bg-[#FF3C38] text-white border-2 border-border shadow-[1.5px_1.5px_0px_0px_var(--shadow-color)] shrink-0 font-bold">
            <AlertCircle className="size-3.5 stroke-[3.5]" />
          </div>
        ),
        warning: (
          <div className="size-6 grid place-items-center bg-[#FF7700] text-black border-2 border-border shadow-[1.5px_1.5px_0px_0px_var(--shadow-color)] shrink-0 font-bold">
            <AlertTriangle className="size-3.5 stroke-[3.5]" />
          </div>
        ),
        info: (
          <div className="size-6 grid place-items-center bg-[#42BFDD] text-black border-2 border-border shadow-[1.5px_1.5px_0px_0px_var(--shadow-color)] shrink-0 font-bold">
            <Info className="size-3.5 stroke-[3.5]" />
          </div>
        ),
        loading: (
          <div className="size-6 grid place-items-center bg-[#F1BE05] text-black border-2 border-border shadow-[1.5px_1.5px_0px_0px_var(--shadow-color)] shrink-0 font-bold">
            <Loader2 className="size-3.5 stroke-[3.5] animate-spin" />
          </div>
        ),
        close: (
          <div className="size-4 grid place-items-center bg-card text-foreground border border-border">
            <X className="size-3 stroke-[2.5]" />
          </div>
        ),
      }}
      toastOptions={{
        classNames: {
          toast:
            "!rounded-none !border-2 !border-border !font-mono !text-xs !font-bold !bg-card !text-foreground !shadow-[4px_4px_0px_0px_var(--shadow-color)]",
          title: "!font-mono !text-xs !font-bold !text-foreground",
          description: "!font-mono !text-[11px] !text-muted-foreground",
          actionButton:
            "!rounded-none !border-2 !border-border !bg-primary !text-primary-foreground !font-mono !text-xs !font-black !shadow-[2px_2px_0px_0px_var(--shadow-color)]",
          cancelButton:
            "!rounded-none !border-2 !border-border !bg-muted !text-muted-foreground !font-mono !text-xs !font-bold",
          closeButton:
            "!rounded-none !border-2 !border-border !bg-card !text-foreground !shadow-[1px_1px_0px_0px_var(--shadow-color)]",
          success: "!border-border !bg-card !text-foreground",
          error: "!border-[#FF3C38] !bg-card !text-foreground",
          warning: "!border-[#FF7700] !bg-card !text-foreground",
          info: "!border-[#42BFDD] !bg-card !text-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
