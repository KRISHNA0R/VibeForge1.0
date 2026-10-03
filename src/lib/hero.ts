export const FRAME_COUNT = 169;

export const framePath = (n: number) =>
  `/frames/frame_${String(n).padStart(4, "0")}.jpg`;

export type Dialogue = {
  id: string;
  show: number;
  hide: number;
  quote: string;
  speaker: string;
  film: string;
};

export const DIALOGUES: Dialogue[] = [
  {
    id: "d1",
    show: 0.1,
    hide: 0.3,
    quote: "Talk is cheap. Show me the code.",
    speaker: "Sridhar Vembu",
    film: "ZOHO — MADE IN INDIA",
  },
  {
    id: "d2",
    show: 0.35,
    hide: 0.55,
    quote: "First, solve the problem. Then, write the code.",
    speaker: "Narayana Murthy",
    film: "INFOSYS — ENGINEERING",
  },
  {
    id: "d3",
    show: 0.6,
    hide: 0.8,
    quote: "Any fool can write code that a computer can understand.",
    speaker: "Sundar Pichai",
    film: "GOOGLE — 2015",
  },
];

export const HERO_TEXT_FADE_END = 0.08;
