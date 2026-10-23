/**
 * Draws the About page lanyard's card faces and strap as flat, ink-bordered
 * graphics, so the 3D card still reads as part of the site's neobrutalist world.
 * Runs in the browser only; returns PNG data URLs for the Lanyard props.
 */
import { profile } from "@/lib/portfolio";

const INK = "#2E2D34";
const PAPER = "#FFFDF7";
const CREAM = "#F7F0D9";
const YELLOW = "#F1BE05";
const GREEN = "#22C55E";

// Matches Lanyard's portrait card (1.6 × 2.25) at its 1024px face width
const W = 1024;
const H = 1440;
// The punched slot sits inside this top band, so nothing important is drawn there
const BAND = 150;

const DISPLAY = '"Archivo Black", "Arial Black", sans-serif';
const SANS = "Sora, ui-sans-serif, system-ui, sans-serif";
const HAND = '"Caveat Brush", cursive';

export type LanyardArt = { front: string; back: string; strap: string };

function loadImage(src: string) {
  return new Promise<HTMLImageElement | null>((resolve) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

async function fontsReady() {
  const loads = [
    `72px ${DISPLAY}`,
    `400 30px ${SANS}`,
    `600 30px ${SANS}`,
    `64px ${HAND}`,
  ].map((f) => document.fonts.load(f).catch(() => []));
  // Never block the card on a slow font; fall back after a second
  await Promise.race([
    Promise.all(loads),
    new Promise((r) => setTimeout(r, 1000)),
  ]);
}

function canvas(width: number, height: number) {
  const c = document.createElement("canvas");
  c.width = width;
  c.height = height;
  const ctx = c.getContext("2d");
  if (!ctx) throw new Error("2D canvas unavailable");
  return { c, ctx };
}

function topBand(ctx: CanvasRenderingContext2D, right: string) {
  ctx.fillStyle = YELLOW;
  ctx.fillRect(0, 0, W, BAND);
  ctx.fillStyle = INK;
  ctx.fillRect(0, BAND, W, 10);
  ctx.font = `44px ${DISPLAY}`;
  ctx.textBaseline = "middle";
  ctx.textAlign = "left";
  ctx.fillText("ACJ", 64, BAND / 2 + 6);
  const acj = ctx.measureText("ACJ").width;
  ctx.fillStyle = "#FF3C38";
  ctx.fillText("_", 64 + acj, BAND / 2 + 6);
  ctx.fillStyle = INK;
  ctx.textAlign = "right";
  ctx.font = `600 30px ${SANS}`;
  ctx.fillText(right, W - 64, BAND / 2 + 6);
}

/** Draws text at `size`, shrinking it until it fits `maxWidth`. */
function fitText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  size: number,
  family: string
) {
  let s = size;
  ctx.font = `${s}px ${family}`;
  while (s > 32 && ctx.measureText(text).width > maxWidth) {
    s -= 2;
    ctx.font = `${s}px ${family}`;
  }
  ctx.fillText(text, x, y);
}

/** Black and white with a touch of contrast and film grain, applied to one region. */
function filmGrain(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number
) {
  const img = ctx.getImageData(x, y, w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const lum = 0.2126 * d[i]! + 0.7152 * d[i + 1]! + 0.0722 * d[i + 2]!;
    const contrasted = (lum - 128) * 1.12 + 128;
    const v = Math.max(
      0,
      Math.min(255, contrasted + (Math.random() - 0.5) * 46)
    );
    d[i] = d[i + 1] = d[i + 2] = v;
  }
  ctx.putImageData(img, x, y);
}

function frame(ctx: CanvasRenderingContext2D, color: string, width = 16) {
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.strokeRect(width / 2, width / 2, W - width, H - width);
}

function drawFront(portrait: HTMLImageElement | null) {
  const { c, ctx } = canvas(W, H);
  ctx.fillStyle = PAPER;
  ctx.fillRect(0, 0, W, H);
  topBand(ctx, "ID // 2026");

  // Photo with a hard offset shadow and a thick ink border
  const px = 92;
  const py = 210;
  const pw = 840;
  const ph = 780;
  ctx.fillStyle = INK;
  ctx.fillRect(px + 22, py + 22, pw, ph);
  ctx.fillStyle = "#FF7700";
  ctx.fillRect(px, py, pw, ph);
  if (portrait) {
    const scale = Math.max(pw / portrait.width, ph / portrait.height);
    const sw = pw / scale;
    const sh = ph / scale;
    // Bias the crop upward so the face sits in the upper third
    const sx = (portrait.width - sw) / 2;
    const sy = (portrait.height - sh) * 0.3;
    ctx.drawImage(portrait, sx, sy, sw, sh, px, py, pw, ph);
    filmGrain(ctx, px, py, pw, ph);
  }
  ctx.strokeStyle = INK;
  ctx.lineWidth = 12;
  ctx.strokeRect(px, py, pw, ph);

  ctx.fillStyle = INK;
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  fitText(ctx, profile.name, px, 1118, pw, 74, DISPLAY);
  ctx.font = `600 34px ${SANS}`;
  ctx.fillText("Full-stack engineer", px, 1186);
  ctx.fillStyle = "#605D68";
  ctx.font = `400 30px ${SANS}`;
  ctx.fillText("Kerala, India", px, 1234);

  // Availability strip along the bottom edge
  ctx.fillStyle = INK;
  ctx.fillRect(0, 1290, W, 10);
  ctx.fillStyle = GREEN;
  ctx.fillRect(0, 1300, W, H - 1300);
  ctx.fillStyle = INK;
  ctx.fillRect(px, 1352, 30, 30);
  ctx.font = `42px ${DISPLAY}`;
  ctx.textBaseline = "middle";
  ctx.fillText("OPEN TO WORK", px + 52, 1369);

  frame(ctx, INK);
  return c.toDataURL("image/png");
}

function drawBack() {
  const { c, ctx } = canvas(W, H);
  ctx.fillStyle = INK;
  ctx.fillRect(0, 0, W, H);
  topBand(ctx, "REVERSE");

  ctx.fillStyle = CREAM;
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.font = `120px ${DISPLAY}`;
  ctx.fillText("Say hi.", 92, 350);

  const rows: [string, string][] = [
    ["email", profile.email],
    ["github", profile.handle],
    ["linkedin", profile.handle],
    ["insta", profile.instagramHandle],
    ["web", "aadhithcj.site"],
  ];
  rows.forEach(([label, value], i) => {
    const y = 500 + i * 108;
    ctx.fillStyle = YELLOW;
    ctx.font = `600 28px ${SANS}`;
    ctx.fillText(label.toUpperCase(), 92, y);
    ctx.fillStyle = CREAM;
    ctx.font = `400 38px ${SANS}`;
    ctx.fillText(value, 92, y + 48);
  });

  ctx.save();
  ctx.translate(92, 1250);
  ctx.rotate(-0.05);
  ctx.fillStyle = YELLOW;
  ctx.font = `64px ${HAND}`;
  ctx.fillText("click to flip back", 0, 0);
  ctx.restore();

  frame(ctx, YELLOW);
  return c.toDataURL("image/png");
}

function drawStrap() {
  // Height spans the band's width; the tile repeats along its length, so its
  // width is measured from the text to repeat seamlessly
  const sh = 120;
  const words = ["AADHITH CJ", "OPEN TO WORK"];
  const font = `50px ${DISPLAY}`;
  const gap = 48;
  const mark = 18;
  const measure = canvas(1, 1).ctx;
  measure.font = font;
  const sw = Math.ceil(
    words.reduce(
      (w, word) => w + measure.measureText(word).width + gap * 2 + mark,
      0
    )
  );

  const { c, ctx } = canvas(sw, sh);
  ctx.fillStyle = YELLOW;
  ctx.fillRect(0, 0, sw, sh);
  ctx.fillStyle = INK;
  ctx.fillRect(0, 0, sw, 8);
  ctx.fillRect(0, sh - 8, sw, 8);
  ctx.font = font;
  ctx.textBaseline = "middle";
  // Starts flush: the previous tile's trailing gap provides the spacing
  let x = 0;
  for (const word of words) {
    ctx.fillText(word, x, sh / 2 + 3);
    x += ctx.measureText(word).width + gap;
    ctx.fillRect(x, sh / 2 - mark / 2, mark, mark);
    x += mark + gap;
  }
  return c.toDataURL("image/png");
}

export async function drawLanyardArt(
  portraitSrc: string | null
): Promise<LanyardArt> {
  const [portrait] = await Promise.all([
    portraitSrc ? loadImage(portraitSrc) : Promise.resolve(null),
    fontsReady(),
  ]);
  return { front: drawFront(portrait), back: drawBack(), strap: drawStrap() };
}
