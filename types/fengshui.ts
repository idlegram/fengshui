export type FengShuiOption = {
  id: string;
  label: string;
  description: string;
  score: number;
};

export type FengShuiItem = {
  id: string;
  title: string;
  info: string;
  options: FengShuiOption[];
};

export type FengShuiCategory = {
  title: string;
  items: FengShuiItem[];
};

export type FengShuiRating = {
  threshold?: number;
  label: string;
  color: "emerald" | "yellow" | "orange" | "red";
};
