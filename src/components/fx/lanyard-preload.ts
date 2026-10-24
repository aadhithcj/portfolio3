// The About page's 3D card (three.js) is the heaviest code on the site. Starting
// its download early (as the About page's code runs, or when someone hovers a link
// to About) means the card is ready to drop in soon after the page shows.

let pending: Promise<typeof import("./Lanyard")> | null = null;

/** Imports the Lanyard chunk once; later calls reuse the same download. */
export function loadLanyard() {
  pending ??= import("./Lanyard");
  return pending;
}

// Same rule AboutLanyard uses to decide whether to show the 3D card at all
export const LANYARD_MEDIA = "(min-width: 1024px) and (any-pointer: fine)";

/** Starts the download if this device would show the card; a no-op elsewhere. */
export function preloadLanyard() {
  if (typeof window === "undefined") return;
  if (!window.matchMedia(LANYARD_MEDIA).matches) return;
  void loadLanyard().catch(() => {
    // A failed preload is retried by the real import
    pending = null;
  });
}
