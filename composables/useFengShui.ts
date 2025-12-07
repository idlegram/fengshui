import type { FengShuiItem, Rating } from "~/types/fengShui";
import {
  fengShuiCategories,
  fengShuiItems,
  calculateNormalizedScore,
} from "~/data/fengShui";

export function useFengShui() {
  const { t } = useI18n();

  // Use useState for shared state across components
  const selections = useState<Map<string, string[]>>(
    "fengshui-selections",
    () => new Map()
  );

  // Create item map for quick lookups
  const itemMap = computed(() => {
    const map = new Map<string, FengShuiItem>();
    fengShuiItems.forEach((item) => map.set(item.id, item));
    return map;
  });

  // Get all selected items (flatten all selections)
  const allSelectedItems = computed(() => {
    const items: string[] = [];
    selections.value.forEach((value) => {
      items.push(...value);
    });
    return items;
  });

  // Calculate total score
  const score = computed(() => {
    const score = calculateNormalizedScore(allSelectedItems.value);
    return parseFloat(score.toPrecision(5));
  });

  // Get score rating based on total score
  const rating = computed<Rating>(() => {
    const ratings: Rating[] = [
      { threshold: 90, labelKey: "excellentFengShui", color: "emerald" },
      { threshold: 70, labelKey: "goodFengShui", color: "emerald" },
      { threshold: 50, labelKey: "fairFengShui", color: "yellow" },
      { threshold: 30, labelKey: "poorFengShui", color: "orange" },
    ];

    return (
      ratings.find((rating) => score.value >= rating.threshold!) || {
        labelKey: "badFengShui",
        color: "red",
      }
    );
  });

  // Get selected items with suggestion
  const suggestions = computed(() => {
    return allSelectedItems.value
      .map((itemId) => itemMap.value.get(itemId))
      .filter((item) => {
        if (!item?.suggestionKey) return false;
        const suggestion = t(item.suggestionKey);
        return suggestion && suggestion !== item.suggestionKey;
      });
  });

  return {
    selections,
    score,
    rating,
    suggestions,
    fengShuiCategories,
  };
}
