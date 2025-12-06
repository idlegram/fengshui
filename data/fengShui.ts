export type FengShuiInputType = "select" | "checkbox" | "slider";

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
  items: FengShuiItem[];
};

export const fengShuiCategories: FengShuiCategory[] = [
  {
    id: "naturalLight",
    inputType: "select",
    labelKey: "fengShuiCategories.naturalLight.label",
    items: [
      {
        id: "lightGood",
        labelKey: "fengShuiCategories.naturalLight.items.lightGood.label",
        adviceKey: "fengShuiCategories.naturalLight.items.lightGood.advice",
        score: 3,
      },
      {
        id: "lightAverage",
        labelKey: "fengShuiCategories.naturalLight.items.lightAverage.label",
        adviceKey: "fengShuiCategories.naturalLight.items.lightAverage.advice",
        score: 1,
      },
      {
        id: "lightPoor",
        labelKey: "fengShuiCategories.naturalLight.items.lightPoor.label",
        adviceKey: "fengShuiCategories.naturalLight.items.lightPoor.advice",
        score: -3,
      },
    ],
  },
  {
    id: "ventilation",
    inputType: "select",
    labelKey: "fengShuiCategories.ventilation.label",
    items: [
      {
        id: "ventilationGood",
        labelKey: "fengShuiCategories.ventilation.items.ventilationGood.label",
        adviceKey:
          "fengShuiCategories.ventilation.items.ventilationGood.advice",
        score: 3,
      },
      {
        id: "ventilationAverage",
        labelKey:
          "fengShuiCategories.ventilation.items.ventilationAverage.label",
        adviceKey:
          "fengShuiCategories.ventilation.items.ventilationAverage.advice",
        score: 1,
      },
      {
        id: "ventilationPoor",
        labelKey: "fengShuiCategories.ventilation.items.ventilationPoor.label",
        adviceKey:
          "fengShuiCategories.ventilation.items.ventilationPoor.advice",
        score: -3,
      },
    ],
  },
  {
    id: "doorDirection",
    inputType: "select",
    labelKey: "fengShuiCategories.doorDirection.label",
    items: [
      {
        id: "doorSouth",
        labelKey: "fengShuiCategories.doorDirection.items.doorSouth.label",
        adviceKey: "fengShuiCategories.doorDirection.items.doorSouth.advice",
        score: 3,
      },
      {
        id: "doorEast",
        labelKey: "fengShuiCategories.doorDirection.items.doorEast.label",
        adviceKey: "fengShuiCategories.doorDirection.items.doorEast.advice",
        score: 2,
      },
      {
        id: "doorUnluckyDirection",
        labelKey:
          "fengShuiCategories.doorDirection.items.doorUnluckyDirection.label",
        adviceKey:
          "fengShuiCategories.doorDirection.items.doorUnluckyDirection.advice",
        score: -2,
      },
    ],
  },
  {
    id: "door",
    inputType: "checkbox",
    labelKey: "fengShuiCategories.door.label",
    items: [
      {
        id: "doorMingTang",
        labelKey: "fengShuiCategories.door.items.doorMingTang.label",
        adviceKey: "fengShuiCategories.door.items.doorMingTang.advice",
        score: 3,
      },
      {
        id: "doorLongCorridor",
        labelKey: "fengShuiCategories.door.items.doorLongCorridor.label",
        adviceKey: "fengShuiCategories.door.items.doorLongCorridor.advice",
        score: -3,
      },
      {
        id: "doorElevator",
        labelKey: "fengShuiCategories.door.items.doorElevator.label",
        adviceKey: "fengShuiCategories.door.items.doorElevator.advice",
        score: -2,
      },
      {
        id: "doorSeeRed",
        labelKey: "fengShuiCategories.door.items.doorSeeRed.label",
        adviceKey: "fengShuiCategories.door.items.doorSeeRed.advice",
        score: 2,
      },
      {
        id: "doorSeeGreen",
        labelKey: "fengShuiCategories.door.items.doorSeeGreen.label",
        adviceKey: "fengShuiCategories.door.items.doorSeeGreen.advice",
        score: 2,
      },
      {
        id: "doorSeePainting",
        labelKey: "fengShuiCategories.door.items.doorSeePainting.label",
        adviceKey: "fengShuiCategories.door.items.doorSeePainting.advice",
        score: 2,
      },
      {
        id: "doorSeeStove",
        labelKey: "fengShuiCategories.door.items.doorSeeStove.label",
        adviceKey: "fengShuiCategories.door.items.doorSeeStove.advice",
        score: -3,
      },
      {
        id: "doorSeeToilet",
        labelKey: "fengShuiCategories.door.items.doorSeeToilet.label",
        adviceKey: "fengShuiCategories.door.items.doorSeeToilet.advice",
        score: -3,
      },
      {
        id: "doorSeeMirror",
        labelKey: "fengShuiCategories.door.items.doorSeeMirror.label",
        adviceKey: "fengShuiCategories.door.items.doorSeeMirror.advice",
        score: -2,
      },
    ],
  },
  {
    id: "entryway",
    inputType: "checkbox",
    labelKey: "fengShuiCategories.entryway.label",
    items: [
      {
        id: "entryBrightClean",
        labelKey: "fengShuiCategories.entryway.items.entryBrightClean.label",
        adviceKey: "fengShuiCategories.entryway.items.entryBrightClean.advice",
        score: 3,
      },
      {
        id: "entryHighCeiling",
        labelKey: "fengShuiCategories.entryway.items.entryHighCeiling.label",
        adviceKey: "fengShuiCategories.entryway.items.entryHighCeiling.advice",
        score: 2,
      },
      {
        id: "entryTransparent",
        labelKey: "fengShuiCategories.entryway.items.entryTransparent.label",
        adviceKey: "fengShuiCategories.entryway.items.entryTransparent.advice",
        score: 2,
      },
      {
        id: "entryDarkMessy",
        labelKey: "fengShuiCategories.entryway.items.entryDarkMessy.label",
        adviceKey: "fengShuiCategories.entryway.items.entryDarkMessy.advice",
        score: -3,
      },
      {
        id: "entrySharpCorner",
        labelKey: "fengShuiCategories.entryway.items.entrySharpCorner.label",
        adviceKey: "fengShuiCategories.entryway.items.entrySharpCorner.advice",
        score: -2,
      },
      {
        id: "entryLowCeiling",
        labelKey: "fengShuiCategories.entryway.items.entryLowCeiling.label",
        adviceKey: "fengShuiCategories.entryway.items.entryLowCeiling.advice",
        score: -2,
      },
    ],
  },
  {
    id: "livingRoom",
    inputType: "checkbox",
    labelKey: "fengShuiCategories.livingRoom.label",
    items: [
      {
        id: "livingSofaWall",
        labelKey: "fengShuiCategories.livingRoom.items.livingSofaWall.label",
        adviceKey: "fengShuiCategories.livingRoom.items.livingSofaWall.advice",
        score: 3,
      },
      {
        id: "livingSofaCurve",
        labelKey: "fengShuiCategories.livingRoom.items.livingSofaCurve.label",
        adviceKey: "fengShuiCategories.livingRoom.items.livingSofaCurve.advice",
        score: 2,
      },
      {
        id: "livingSofaBackWater",
        labelKey:
          "fengShuiCategories.livingRoom.items.livingSofaBackWater.label",
        adviceKey:
          "fengShuiCategories.livingRoom.items.livingSofaBackWater.advice",
        score: -3,
      },
      {
        id: "livingSofaFaceDoor",
        labelKey:
          "fengShuiCategories.livingRoom.items.livingSofaFaceDoor.label",
        adviceKey:
          "fengShuiCategories.livingRoom.items.livingSofaFaceDoor.advice",
        score: -2,
      },
      {
        id: "livingDirectLight",
        labelKey: "fengShuiCategories.livingRoom.items.livingDirectLight.label",
        adviceKey:
          "fengShuiCategories.livingRoom.items.livingDirectLight.advice",
        score: -2,
      },
      {
        id: "livingSquareShape",
        labelKey: "fengShuiCategories.livingRoom.items.livingSquareShape.label",
        adviceKey:
          "fengShuiCategories.livingRoom.items.livingSquareShape.advice",
        score: 3,
      },
      {
        id: "livingIsolatedColumn",
        labelKey:
          "fengShuiCategories.livingRoom.items.livingIsolatedColumn.label",
        adviceKey:
          "fengShuiCategories.livingRoom.items.livingIsolatedColumn.advice",
        score: -2,
      },
      {
        id: "livingSharpCorner",
        labelKey: "fengShuiCategories.livingRoom.items.livingSharpCorner.label",
        adviceKey:
          "fengShuiCategories.livingRoom.items.livingSharpCorner.advice",
        score: -3,
      },
    ],
  },
  {
    id: "bedroom",
    inputType: "checkbox",
    labelKey: "fengShuiCategories.bedroom.label",
    items: [
      {
        id: "bedHeadWall",
        labelKey: "fengShuiCategories.bedroom.items.bedHeadWall.label",
        adviceKey: "fengShuiCategories.bedroom.items.bedHeadWall.advice",
        score: 3,
      },
      {
        id: "bedNorthSouth",
        labelKey: "fengShuiCategories.bedroom.items.bedNorthSouth.label",
        adviceKey: "fengShuiCategories.bedroom.items.bedNorthSouth.advice",
        score: 3,
      },
      {
        id: "bedAirConditioner",
        labelKey: "fengShuiCategories.bedroom.items.bedAirConditioner.label",
        adviceKey: "fengShuiCategories.bedroom.items.bedAirConditioner.advice",
        score: -3,
      },
      {
        id: "bedFaceWest",
        labelKey: "fengShuiCategories.bedroom.items.bedFaceWest.label",
        adviceKey: "fengShuiCategories.bedroom.items.bedFaceWest.advice",
        score: -2,
      },
      {
        id: "bedFaceMirror",
        labelKey: "fengShuiCategories.bedroom.items.bedFaceMirror.label",
        adviceKey: "fengShuiCategories.bedroom.items.bedFaceMirror.advice",
        score: -3,
      },
    ],
  },
  {
    id: "study",
    inputType: "checkbox",
    labelKey: "fengShuiCategories.study.label",
    items: [
      {
        id: "studyDeskWall",
        labelKey: "fengShuiCategories.study.items.studyDeskWall.label",
        adviceKey: "fengShuiCategories.study.items.studyDeskWall.advice",
        score: 3,
      },
      {
        id: "studyFacingWindow",
        labelKey: "fengShuiCategories.study.items.studyFacingWindow.label",
        adviceKey: "fengShuiCategories.study.items.studyFacingWindow.advice",
        score: 2,
      },
      {
        id: "studyPlant",
        labelKey: "fengShuiCategories.study.items.studyPlant.label",
        adviceKey: "fengShuiCategories.study.items.studyPlant.advice",
        score: 2,
      },
      {
        id: "studyDoorKitchenToilet",
        labelKey: "fengShuiCategories.study.items.studyDoorKitchenToilet.label",
        adviceKey:
          "fengShuiCategories.study.items.studyDoorKitchenToilet.advice",
        score: -3,
      },
      {
        id: "studyWallToilet",
        labelKey: "fengShuiCategories.study.items.studyWallToilet.label",
        adviceKey: "fengShuiCategories.study.items.studyWallToilet.advice",
        score: -2,
      },
    ],
  },
  {
    id: "kitchen",
    inputType: "checkbox",
    labelKey: "fengShuiCategories.kitchen.label",
    items: [
      {
        id: "kitchenEast",
        labelKey: "fengShuiCategories.kitchen.items.kitchenEast.label",
        adviceKey: "fengShuiCategories.kitchen.items.kitchenEast.advice",
        score: 3,
      },
      {
        id: "kitchenStoveWall",
        labelKey: "fengShuiCategories.kitchen.items.kitchenStoveWall.label",
        adviceKey: "fengShuiCategories.kitchen.items.kitchenStoveWall.advice",
        score: 2,
      },
      {
        id: "kitchenSouth",
        labelKey: "fengShuiCategories.kitchen.items.kitchenSouth.label",
        adviceKey: "fengShuiCategories.kitchen.items.kitchenSouth.advice",
        score: -3,
      },
      {
        id: "kitchenStoveBadFacing",
        labelKey:
          "fengShuiCategories.kitchen.items.kitchenStoveBadFacing.label",
        adviceKey:
          "fengShuiCategories.kitchen.items.kitchenStoveBadFacing.advice",
        score: -3,
      },
      {
        id: "kitchenStoveNoBack",
        labelKey: "fengShuiCategories.kitchen.items.kitchenStoveNoBack.label",
        adviceKey: "fengShuiCategories.kitchen.items.kitchenStoveNoBack.advice",
        score: -2,
      },
    ],
  },
  {
    id: "diningRoom",
    inputType: "checkbox",
    labelKey: "fengShuiCategories.diningRoom.label",
    items: [
      {
        id: "diningRoundSquare",
        labelKey: "fengShuiCategories.diningRoom.items.diningRoundSquare.label",
        adviceKey:
          "fengShuiCategories.diningRoom.items.diningRoundSquare.advice",
        score: 3,
      },
      {
        id: "diningSoftLight",
        labelKey: "fengShuiCategories.diningRoom.items.diningSoftLight.label",
        adviceKey: "fengShuiCategories.diningRoom.items.diningSoftLight.advice",
        score: 2,
      },
      {
        id: "diningSoftColor",
        labelKey: "fengShuiCategories.diningRoom.items.diningSoftColor.label",
        adviceKey: "fengShuiCategories.diningRoom.items.diningSoftColor.advice",
        score: 2,
      },
      {
        id: "diningSharpTable",
        labelKey: "fengShuiCategories.diningRoom.items.diningSharpTable.label",
        adviceKey:
          "fengShuiCategories.diningRoom.items.diningSharpTable.advice",
        score: -3,
      },
      {
        id: "diningDoorCollision",
        labelKey:
          "fengShuiCategories.diningRoom.items.diningDoorCollision.label",
        adviceKey:
          "fengShuiCategories.diningRoom.items.diningDoorCollision.advice",
        score: -2,
      },
    ],
  },
  {
    id: "bathroom",
    inputType: "checkbox",
    labelKey: "fengShuiCategories.bathroom.label",
    items: [
      {
        id: "toiletGoodPosition",
        labelKey: "fengShuiCategories.bathroom.items.toiletGoodPosition.label",
        adviceKey:
          "fengShuiCategories.bathroom.items.toiletGoodPosition.advice",
        score: 3,
      },
      {
        id: "toiletDryVent",
        labelKey: "fengShuiCategories.bathroom.items.toiletDryVent.label",
        adviceKey: "fengShuiCategories.bathroom.items.toiletDryVent.advice",
        score: 3,
      },
      {
        id: "toiletFaceDoor",
        labelKey: "fengShuiCategories.bathroom.items.toiletFaceDoor.label",
        adviceKey: "fengShuiCategories.bathroom.items.toiletFaceDoor.advice",
        score: -3,
      },
      {
        id: "toiletSameDoorKitchen",
        labelKey:
          "fengShuiCategories.bathroom.items.toiletSameDoorKitchen.label",
        adviceKey:
          "fengShuiCategories.bathroom.items.toiletSameDoorKitchen.advice",
        score: -3,
      },
    ],
  },
];

export const fengShuiItems: FengShuiItem[] = fengShuiCategories.flatMap(
  (category) => category.items
);

/**
 * Calculate the maximum possible positive score from all items
 * For "select" categories, only count the max score in that category
 * For "checkbox" categories, sum all positive scores
 */
export function getMaxPositiveScore(): number {
  let totalScore = 0;

  for (const category of fengShuiCategories) {
    if (category.inputType === "select") {
      // For select, find the max positive score in the category
      const maxPositiveInCategory = category.items
        .filter((item) => item.score > 0)
        .reduce((max, item) => Math.max(max, item.score), -Infinity);
      if (maxPositiveInCategory > -Infinity) {
        totalScore += maxPositiveInCategory;
      }
    } else {
      // For checkbox, sum all positive scores
      const positiveInCategory = category.items
        .filter((item) => item.score > 0)
        .reduce((sum, item) => sum + item.score, 0);
      totalScore += positiveInCategory;
    }
  }

  return totalScore;
}

/**
 * Calculate the maximum possible negative score (absolute value) from all items
 * For "select" categories, only count the max negative score in that category
 * For "checkbox" categories, sum all negative scores
 */
export function getMaxNegativeScore(): number {
  let totalScore = 0;

  for (const category of fengShuiCategories) {
    if (category.inputType === "select") {
      // For select, find the max negative score (absolute value) in the category
      const maxNegativeInCategory = category.items
        .filter((item) => item.score < 0)
        .reduce((max, item) => Math.max(max, Math.abs(item.score)), -Infinity);
      if (maxNegativeInCategory > -Infinity) {
        totalScore += maxNegativeInCategory;
      }
    } else {
      // For checkbox, sum all negative scores (absolute values)
      const negativeInCategory = category.items
        .filter((item) => item.score < 0)
        .reduce((sum, item) => sum + Math.abs(item.score), 0);
      totalScore += negativeInCategory;
    }
  }

  return totalScore;
}

/**
 * Calculate normalized feng shui score
 * Algorithm:
 * 1. Separate selected items into positive and negative scores
 * 2. For select categories, count only the selected item (not all possible items)
 * 3. For checkbox categories, sum all selected items
 * 4. Normalize each against their maximum possible values
 * 5. Calculate final score: 50 + 0.5 * (positiveRatio - negativeRatio)
 *
 * Result: 100 (perfect) to 0 (worst), 50 (neutral)
 */
export function calculateNormalizedScore(selectedItemIds: string[]): number {
  const itemMap = new Map<string, FengShuiItem>();
  fengShuiItems.forEach((item) => itemMap.set(item.id, item));

  // Create a set for faster lookup
  const selectedSet = new Set(selectedItemIds);

  // Separate positive and negative scores, respecting category constraints
  let positiveSum = 0;
  let negativeSum = 0;

  for (const category of fengShuiCategories) {
    if (category.inputType === "select") {
      // For select categories, find the one selected item (if any)
      const selectedInCategory = category.items.find((item) =>
        selectedSet.has(item.id)
      );
      if (selectedInCategory) {
        if (selectedInCategory.score > 0) {
          positiveSum += selectedInCategory.score;
        } else if (selectedInCategory.score < 0) {
          negativeSum += Math.abs(selectedInCategory.score);
        }
      }
    } else {
      // For checkbox categories, sum all selected items
      category.items.forEach((item) => {
        if (selectedSet.has(item.id)) {
          if (item.score > 0) {
            positiveSum += item.score;
          } else if (item.score < 0) {
            negativeSum += Math.abs(item.score);
          }
        }
      });
    }
  }

  const maxPositive = getMaxPositiveScore();
  const maxNegative = getMaxNegativeScore();

  // Calculate normalization ratios (0 to 100%)
  const positiveRatio = maxPositive > 0 ? (positiveSum / maxPositive) * 100 : 0;
  const negativeRatio = maxNegative > 0 ? (negativeSum / maxNegative) * 100 : 0;

  // Final score: 50 is neutral, range 0-100
  const score = 50 + 0.5 * (positiveRatio - negativeRatio);
  return Math.max(0, Math.min(100, score));
}
