// Images for the About page, served from public/photos/.
// The files are JPEG data with a .PNG extension; browsers sniff the content, so they load as-is.

export type AboutImage = {
  src: string;
  alt: string;
  /** CSS object-position for the square crop, so the subject stays in frame */
  focus?: string;
};

/** Portrait for the lanyard card and the static ID card fallback. */
export const portrait: AboutImage | null = {
  src: "/photos/me/IMG_8240.PNG",
  alt: "Aadhith C Joseph smiling, wearing glasses and a checked shirt",
};

/** Frames on the contact sheet, in order. Square crops; `focus` keeps the subject in view. */
export const contactSheet: AboutImage[] = [
  {
    src: "/photos/photography/IMG_8229.PNG",
    alt: "Silhouette of a swimmer's head and shoulders above the waves at sunset",
    focus: "50% 45%",
  },
  {
    src: "/photos/photography/IMG_8230.PNG",
    alt: "A motorcyclist with headlight on, riding a winding forest road through morning light",
    focus: "50% 62%",
  },
  {
    src: "/photos/photography/IMG_8238.PNG",
    alt: "A fisherman casting a net into a lake beside a concrete pole",
    focus: "38% 50%",
  },
  {
    src: "/photos/photography/IMG_8233.PNG",
    alt: "Black and white photo of a rugged snow-dusted mountain peak against a pale sky",
    focus: "50% 72%",
  },
  {
    src: "/photos/photography/IMG_8227.PNG",
    alt: "A lone figure beside a small tree on a misty grassy hilltop",
    focus: "45% 58%",
  },
  {
    src: "/photos/photography/IMG_8239.PNG",
    alt: "A bare branch silhouetted against a large orange sun",
    focus: "58% 50%",
  },
  {
    src: "/photos/photography/IMG_8236.PNG",
    alt: "Two people walking across a snowy valley toward white mountains",
    focus: "40% 55%",
  },
  {
    src: "/photos/photography/IMG_8237.PNG",
    alt: "A person sitting alone in a meadow of small wildflowers",
    focus: "66% 55%",
  },
];
