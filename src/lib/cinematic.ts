export const CINE_FRAME_COUNT = 169;

export const cineFramePath = (n: number) =>
  `/frames2/frame_${String(n).padStart(4, "0")}.jpg`;

export type Beat = {
  id: string;
  show: number;
  hide: number;
  label: string;
  quote: string;
  speaker: string;
  film: string;
};

export const BEATS: Beat[] = [
  {
    id: "b1",
    show: 0.1,
    hide: 0.3,
    label: "01 — Prototype",
    quote: "Move fast and break things.",
    speaker: "Vijay Shekhar Sharma",
    film: "PAYTM — 2010",
  },
  {
    id: "b2",
    show: 0.35,
    hide: 0.55,
    label: "02 — Ship It",
    quote: "The best code is no code at all.",
    speaker: "Nandan Nilekani",
    film: "AADHAAR — 2009",
  },
  {
    id: "b3",
    show: 0.6,
    hide: 0.8,
    label: "03 — Scale",
    quote: "Simplicity is the ultimate sophistication.",
    speaker: "Dr. A.P.J. Abdul Kalam",
    film: "WINGS OF FIRE",
  },
];

export const CINE_INTRO_FADE_END = 0.08;
