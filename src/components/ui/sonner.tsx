import { Toaster as Sonner } from "sonner";
import { useTheme } from "@/hooks/use-theme";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();

  return (
    <Sonner
      theme={(theme ?? "system") as "dark" | "light" | "system"}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-card group-[.toaster]:text-foreground group-[.toaster]:border-2 group-[.toaster]:border-border group-[.toaster]:shadow-[4px_4px_0px_0px_var(--shadow-color)] group-[.toaster]:rounded-none group-[.toaster]:font-mono group-[.toaster]:text-xs group-[.toaster]:font-bold",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground group-[.toast]:rounded-none group-[.toast]:border group-[.toast]:border-border",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground group-[.toast]:rounded-none",
          error:
            "!border-[#FF3C38] !bg-[#FFF0F0] dark:!bg-[#2A1515] !text-[#FF3C38] dark:!text-[#FCA5A5]",
          success:
            "!border-[#22C55E] !bg-[#F0FDF4] dark:!bg-[#142A1E] !text-[#16A34A] dark:!text-[#4ADE80]",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
