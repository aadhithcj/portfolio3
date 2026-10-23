import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import { drawLanyardArt, type LanyardArt } from "./lanyard-art";

// three.js only downloads once the About page decides to show the 3D card
const Lanyard = lazy(() => import("./Lanyard"));

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return Boolean(c.getContext("webgl2") ?? c.getContext("webgl"));
  } catch {
    return false;
  }
}

// Desktop with a fine pointer only: on phones the card is hard to grab and three.js is dead weight
const DESKTOP = "(min-width: 1024px) and (any-pointer: fine)";

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
    const mql = window.matchMedia(DESKTOP);
    const update = () => setDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!desktop || art) return;
    if (!hasWebGL()) {
      setUnsupported(true);
      return;
    }
    let alive = true;
    drawLanyardArt(portraitSrc)
      .then((a) => alive && setArt(a))
      .catch(() => alive && setUnsupported(true));
    return () => {
      alive = false;
    };
  }, [desktop, art, portraitSrc]);

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
        breeze={0.35}
        damping={0.55}
      />
    </Suspense>
  );
}
