import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ThemeProvider, useTheme } from "@/hooks/use-theme";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Toaster } from "@/components/ui/sonner";
import Crosshair from "@/components/fx/Crosshair";
import { MotionConfig } from "motion/react";

import appCss from "../styles.css?url";

const brutalButton =
  "inline-flex min-h-11 items-center justify-center gap-2 border-2 border-border px-5 py-2.5 font-mono text-xs font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_var(--shadow-color)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_var(--shadow-color)] active:translate-x-1 active:translate-y-1 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 cursor-pointer";

function StatusScreen({
  code,
  stamp,
  title,
  body,
  actions,
}: {
  code: string;
  stamp: string;
  title: string;
  body: string;
  actions: ReactNode;
}) {
  return (
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-16"
      style={{
        backgroundImage:
          "radial-gradient(color-mix(in srgb, var(--foreground) 16%, transparent) 1.5px, transparent 1.5px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="relative w-full max-w-lg border-[3px] border-border bg-card shadow-[10px_10px_0px_0px_var(--shadow-color)]">
        <div className="flex items-center justify-between border-b-2 border-border bg-foreground px-4 py-2 font-mono text-[10px] font-black uppercase tracking-wider text-background">
          <span>err // {code}</span>
          <Link
            to="/"
            className="hover:text-primary focus-visible:outline-none focus-visible:underline"
          >
            ACJ<span className="text-[#FF3C38]">_</span>
          </Link>
        </div>

        <div className="relative px-6 pb-7 pt-8 sm:px-8">
          <span
            aria-hidden="true"
            className="absolute -right-3 top-5 rotate-6 border-2 border-border bg-[#FF3C38] px-2.5 py-1 font-hand text-xl text-white shadow-[3px_3px_0px_0px_var(--shadow-color)]"
          >
            {stamp}
          </span>
          <p className="font-sans text-8xl font-black leading-none tracking-tighter text-foreground sm:text-9xl">
            {code}
          </p>
          <h1 className="mt-5 font-display text-3xl sm:text-4xl text-foreground">
            {title}
          </h1>
          <p className="mt-3 max-w-sm font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {body}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">{actions}</div>
        </div>
      </div>
    </main>
  );
}

function NotFoundComponent() {
  return (
    <StatusScreen
      code="404"
      stamp="wrong turn"
      title="This page doesn't exist."
      body="The link may be old or mistyped. Everything I've built is one click away."
      actions={
        <>
          <Link
            to="/projects"
            className={`${brutalButton} bg-[#F1BE05] text-black`}
          >
            See projects <span aria-hidden="true">→</span>
          </Link>
          <Link to="/" className={`${brutalButton} bg-card text-foreground`}>
            Go home
          </Link>
        </>
      }
    />
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <StatusScreen
      code="500"
      stamp="my bad"
      title="This page didn't load."
      body="Something broke while rendering it. Trying again usually fixes it; if not, the home page still works."
      actions={
        <>
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className={`${brutalButton} bg-[#F1BE05] text-black`}
          >
            Try again
          </button>
          <a href="/" className={`${brutalButton} bg-card text-foreground`}>
            Go home
          </a>
        </>
      }
    />
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Aadhith C J - Software Engineer" },
        {
          name: "description",
          content:
            "Portfolio of software engineer Aadhith C J: full-stack and web development.",
        },
        { name: "author", content: "Aadhith C J" },
        { property: "og:site_name", content: "Aadhith C J" },
        {
          property: "og:title",
          content: "Aadhith C J - Software Engineer",
        },
        {
          property: "og:description",
          content:
            "Portfolio of software engineer Aadhith C Joseph: full-stack and web development.",
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "/og-image.png" },
        { property: "og:image:secure_url", content: "/og-image.png" },
        { property: "og:image:type", content: "image/png" },
        { property: "og:image:width", content: "512" },
        { property: "og:image:height", content: "512" },
        { property: "og:image:alt", content: "Aadhith C Joseph" },
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Aadhith C Joseph - Software Engineer",
        },
        {
          name: "twitter:description",
          content:
            "Portfolio of software engineer Aadhith C Joseph: full-stack and web development.",
        },
        { name: "twitter:image", content: "/og-image.png" },
      ],
      links: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Geist:wght@400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;700&family=Sora:wght@400;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "icon", href: "/favicon.png?v=2", type: "image/png" },
        { rel: "shortcut icon", href: "/favicon.png?v=2", type: "image/png" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  }
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body onTouchStart={() => {}}>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function useSupportsCrosshair(): boolean {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    // Only enable crosshair when viewport width is >= 640px and a fine pointer (mouse/trackpad) exists.
    // This avoids canvas rendering and pointer listeners on phones and touchscreen-only devices,
    // while preserving it for touchscreen laptops with a trackpad or mouse.
    const mql = window.matchMedia("(min-width: 640px) and (any-pointer: fine)");

    const update = () => {
      setSupported(mql.matches);
    };

    update();

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", update);
      return () => {
        mql.removeEventListener("change", update);
      };
    } else {
      mql.addListener(update);
      return () => {
        mql.removeListener(update);
      };
    }
  }, []);

  return supported;
}

function RootCrosshair() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const supported = useSupportsCrosshair();

  if (!supported) return null;

  return (
    <Crosshair
      color={isDark ? "#F1BE05" : "#2E2D34"}
      coordinatesColor={isDark ? "#F1BE05" : "#2E2D34"}
      targetEffect="lock"
      thickness={1}
      opacity={isDark ? 0.4 : 0.6}
      smoothing={0.15}
      showCoordinates
      lineStyle="dashed"
      blendMode="normal"
      gap={3}
    />
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <MotionConfig reducedMotion="user">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
          <Toaster position="top-right" />
          <ThemeToggle fixed />
          <RootCrosshair />
        </MotionConfig>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
