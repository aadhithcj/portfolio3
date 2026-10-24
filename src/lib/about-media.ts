// Images for the About page, served from public/photos/.
// The page loads resized WebP copies from public/photos/web/; the originals in
// public/photos/me and public/photos/photography are kept as the source files.

export type AboutImage = {
  src: string;
  alt: string;
  /** CSS object-position for the square crop, so the subject stays in frame */
  focus?: string;
};

/** Portrait for the lanyard card and the static ID card fallback. */
export const portrait: AboutImage | null = {
  src: "/photos/web/me.webp",
  alt: "Aadhith C Joseph smiling, wearing glasses and a checked shirt",
};

/** Frames on the contact sheet, in order. Square crops; `focus` keeps the subject in view. */
export const contactSheet: AboutImage[] = [
  {
    src: "/photos/web/IMG_8229.webp",
    alt: "Silhouette of a swimmer's head and shoulders above the waves at sunset",
    focus: "50% 45%",
  },
  {
    src: "/photos/web/IMG_8230.webp",
    alt: "A motorcyclist with headlight on, riding a winding forest road through morning light",
    focus: "50% 62%",
  },
  {
    src: "/photos/web/IMG_8238.webp",
    alt: "A fisherman casting a net into a lake beside a concrete pole",
    focus: "38% 50%",
  },
  {
    src: "/photos/web/IMG_8233.webp",
    alt: "Black and white photo of a rugged snow-dusted mountain peak against a pale sky",
    focus: "50% 72%",
  },
  {
    src: "/photos/web/IMG_8227.webp",
    alt: "A lone figure beside a small tree on a misty grassy hilltop",
    focus: "45% 58%",
  },
  {
    src: "/photos/web/IMG_8239.webp",
    alt: "A bare branch silhouetted against a large orange sun",
    focus: "58% 50%",
  },
  {
    src: "/photos/web/IMG_8236.webp",
    alt: "Two people walking across a snowy valley toward white mountains",
    focus: "40% 55%",
  },
  {
    src: "/photos/web/IMG_8237.webp",
    alt: "A person sitting alone in a meadow of small wildflowers",
    focus: "66% 55%",
  },
];

/** All WebP photography images and portrait loaded across the site */
export const PHOTOGRAPHY_IMAGE_SRCS: string[] = [
  ...contactSheet.map((item) => item.src),
  ...(portrait ? [portrait.src] : []),
];

let hasPreloaded = false;

/**
 * Preload and decode all photography WebP images into the browser cache and memory.
 * Safe to call on the server (no-op) and idempotent on the client.
 */
export function preloadPhotographyImages() {
  if (typeof window === "undefined" || hasPreloaded) return;
  hasPreloaded = true;

  const runPreload = () => {
    for (const src of PHOTOGRAPHY_IMAGE_SRCS) {
      const img = new Image();
      img.src = src;
      if (typeof img.decode === "function") {
        img.decode().catch(() => {});
      }
    }
  };

  // Schedule after initial frame so initial page render remains snappy
  if (typeof requestAnimationFrame === "function") {
    requestAnimationFrame(() => {
      setTimeout(runPreload, 0);
    });
  } else {
    setTimeout(runPreload, 0);
  }
}
