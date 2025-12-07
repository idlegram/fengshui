export type FengShuiInputType = "radio" | "checkbox";

export type FengShuiItem = {
  id: string;
  labelKey: string;
  suggestionKey: string;
  score: number;
};

export type FengShuiCategory = {
  id: string;
  inputType: FengShuiInputType;
  labelKey: string;
  infoKey?: string;
  items: FengShuiItem[];
};

export type Rating = {
  threshold?: number;
  labelKey: string;
  color: "emerald" | "yellow" | "orange" | "red";
};
