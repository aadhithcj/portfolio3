import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import { drawLanyardArt, type LanyardArt } from "./lanyard-art";
import { LANYARD_MEDIA, loadLanyard, preloadLanyard } from "./lanyard-preload";

// Lazy on purpose: a regular import makes the page parse all of three.js before it
// can hydrate, which shows as a stall on arrival. This way the page settles first.
const Lanyard = lazy(loadLanyard);

// This module is only imported by the About page's own chunk, so this starts the
// download as soon as that chunk runs, without touching other pages or phones
preloadLanyard();

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return Boolean(c.getContext("webgl2") ?? c.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * The About page's hanging ID card. Draws the card art on the client, then
 * mounts the 3D lanyard. Renders nothing below desktop; without WebGL (or if
 * drawing fails) it shows `fallback`.
 */
export function AboutLanyard({
  portraitSrc,
  fallback,
}: {
  portraitSrc: string | null;
  fallback: ReactNode;
}) {
  const [art, setArt] = useState<LanyardArt | null>(null);
  const [unsupported, setUnsupported] = useState(false);
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(LANYARD_MEDIA);
    const update = () => setDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!desktop) return;
    if (!hasWebGL()) {
      setUnsupported(true);
      return;
    }
    let alive = true;
    // Download three.js in parallel with drawing the card art, not after it
    void loadLanyard();
    drawLanyardArt(portraitSrc, (late) => alive && setArt(late))
      .then((a) => alive && setArt(a))
      .catch(() => alive && setUnsupported(true));
    return () => {
      alive = false;
    };
  }, [desktop, portraitSrc]);

  if (!desktop) return null;
  if (unsupported) return <>{fallback}</>;
  if (!art) return null;

  return (
    <Suspense fallback={null}>
      <Lanyard
        frontImage={art.front}
        backImage={art.back}
        strapImage={art.strap}
        cardColor="#FFFDF7"
        finish="matte"
        cornerRadius={0}
        anchor="right"
        size={0.36}
        strapLength={0.15}
        strapWidth={0.95}
        metal="graphite"
        // No idle breeze: the simulation settles and stops drawing until someone touches the card
        breeze={0}
        damping={0.55}
      />
    </Suspense>
  );
}
