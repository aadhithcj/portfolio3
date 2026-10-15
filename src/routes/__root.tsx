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
import Crosshair from "@/components/fx/Crosshair";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "ACJ_ — Software Engineer" },
        {
          name: "description",
          content: "Portfolio of software engineer ACJ_: full-stack, DevOps and applied AI.",
        },
        { name: "author", content: "ACJ_" },
        { property: "og:site_name", content: "ACJ_" },
        {
          property: "og:title",
          content: "ACJ_ — Software Engineer",
        },
        {
          property: "og:description",
          content:
            "Portfolio of software engineer Aadhith C Joseph: full-stack, DevOps and applied AI.",
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
          content: "Aadhith C Joseph — Software Engineer",
        },
        {
          name: "twitter:description",
          content:
            "Portfolio of software engineer Aadhith C Joseph: full-stack, DevOps and applied AI.",
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
          href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "icon", href: "/favicon.png", type: "image/png" },
        { rel: "shortcut icon", href: "/favicon.png", type: "image/png" },
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
      <body>
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
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
        <ThemeToggle fixed />
        <RootCrosshair />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
