import type { FengShuiItem, ScoreRating } from "~/types/fengshui";
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
  const totalScore = computed(() => {
    const score = calculateNormalizedScore(allSelectedItems.value);
    return parseFloat(score.toPrecision(5));
  });

  // Get score rating based on total score
  const scoreRating = computed<ScoreRating>(() => {
    const score = totalScore.value;
    const ratings: ScoreRating[] = [
      { threshold: 90, labelKey: "excellentFengShui", color: "emerald" },
      { threshold: 70, labelKey: "goodFengShui", color: "emerald" },
      { threshold: 50, labelKey: "fairFengShui", color: "yellow" },
      { threshold: 30, labelKey: "poorFengShui", color: "orange" },
    ];

    return (
      ratings.find((rating) => score >= rating.threshold!) || {
        labelKey: "badFengShui",
        color: "red",
      }
    );
  });

  // Get selected items with advice, sorted by score
  const selectedItemsWithAdvice = computed(() => {
    return allSelectedItems.value
      .map((itemId) => itemMap.value.get(itemId))
      .filter((item) => {
        if (!item?.adviceKey) return false;
        const advice = t(item.adviceKey);
        return advice && advice !== item.adviceKey;
      })
      .sort((a, b) => (b?.score || 0) - (a?.score || 0));
  });

  return {
    selections,
    totalScore,
    scoreRating,
    selectedItemsWithAdvice,
    fengShuiCategories,
  };
}
