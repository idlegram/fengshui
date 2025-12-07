export type FengShuiInputType = "select" | "checkbox";

export type FengShuiItem = {
  id: string;
  labelKey: string;
  adviceKey: string;
  score: number;
};

export type FengShuiCategory = {
  id: string;
  inputType: FengShuiInputType;
  labelKey: string;
  infoKey?: string;
  items: FengShuiItem[];
};

export type ScoreRating = {
  threshold?: number;
  labelKey: string;
  color: "emerald" | "yellow" | "orange" | "red";
};
