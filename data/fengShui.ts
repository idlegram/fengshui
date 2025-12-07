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

export const fengShuiCategories: FengShuiCategory[] = [
  {
    id: "light",
    inputType: "radio",
    labelKey: "fengShuiCategories.light.label",
    infoKey: "fengShuiCategories.light.info",
    items: [
      {
        id: "lightGood",
        labelKey: "fengShuiCategories.light.items.lightGood.label",
        suggestionKey: "fengShuiCategories.light.items.lightGood.suggestion",
        score: 3,
      },
      {
        id: "lightAverage",
        labelKey: "fengShuiCategories.light.items.lightAverage.label",
        suggestionKey: "fengShuiCategories.light.items.lightAverage.suggestion",
        score: 1,
      },
      {
        id: "lightPoor",
        labelKey: "fengShuiCategories.light.items.lightPoor.label",
        suggestionKey: "fengShuiCategories.light.items.lightPoor.suggestion",
        score: -3,
      },
    ],
  },
  {
    id: "ventilation",
    inputType: "radio",
    labelKey: "fengShuiCategories.ventilation.label",
    infoKey: "fengShuiCategories.ventilation.info",
    items: [
      {
        id: "ventilationGood",
        labelKey: "fengShuiCategories.ventilation.items.ventilationGood.label",
        suggestionKey:
          "fengShuiCategories.ventilation.items.ventilationGood.suggestion",
        score: 3,
      },
      {
        id: "ventilationAverage",
        labelKey:
          "fengShuiCategories.ventilation.items.ventilationAverage.label",
        suggestionKey:
          "fengShuiCategories.ventilation.items.ventilationAverage.suggestion",
        score: 1,
      },
      {
        id: "ventilationPoor",
        labelKey: "fengShuiCategories.ventilation.items.ventilationPoor.label",
        suggestionKey:
          "fengShuiCategories.ventilation.items.ventilationPoor.suggestion",
        score: -3,
      },
    ],
  },
  {
    id: "doorDirection",
    inputType: "radio",
    labelKey: "fengShuiCategories.doorDirection.label",
    infoKey: "fengShuiCategories.doorDirection.info",
    items: [
      {
        id: "doorSouth",
        labelKey: "fengShuiCategories.doorDirection.items.doorSouth.label",
        suggestionKey:
          "fengShuiCategories.doorDirection.items.doorSouth.suggestion",
        score: 3,
      },
      {
        id: "doorEast",
        labelKey: "fengShuiCategories.doorDirection.items.doorEast.label",
        suggestionKey:
          "fengShuiCategories.doorDirection.items.doorEast.suggestion",
        score: 2,
      },
      {
        id: "doorWest",
        labelKey: "fengShuiCategories.doorDirection.items.doorWest.label",
        suggestionKey:
          "fengShuiCategories.doorDirection.items.doorWest.suggestion",
        score: -2,
      },
      {
        id: "doorNorth",
        labelKey: "fengShuiCategories.doorDirection.items.doorNorth.label",
        suggestionKey:
          "fengShuiCategories.doorDirection.items.doorNorth.suggestion",
        score: -3,
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
        suggestionKey: "fengShuiCategories.door.items.doorMingTang.suggestion",
        score: 3,
      },
      {
        id: "doorLongCorridorStreet",
        labelKey: "fengShuiCategories.door.items.doorLongCorridorStreet.label",
        suggestionKey:
          "fengShuiCategories.door.items.doorLongCorridorStreet.suggestion",
        score: -3,
      },
      {
        id: "doorElevatorStaircase",
        labelKey: "fengShuiCategories.door.items.doorElevatorStaircase.label",
        suggestionKey:
          "fengShuiCategories.door.items.doorElevatorStaircase.suggestion",
        score: -2,
      },
      {
        id: "doorPlantPainting",
        labelKey: "fengShuiCategories.door.items.doorPlantPainting.label",
        suggestionKey:
          "fengShuiCategories.door.items.doorPlantPainting.suggestion",
        score: 2,
      },
      {
        id: "doorSeeStove",
        labelKey: "fengShuiCategories.door.items.doorSeeStove.label",
        suggestionKey: "fengShuiCategories.door.items.doorSeeStove.suggestion",
        score: -3,
      },
      {
        id: "doorSeeToilet",
        labelKey: "fengShuiCategories.door.items.doorSeeToilet.label",
        suggestionKey: "fengShuiCategories.door.items.doorSeeToilet.suggestion",
        score: -3,
      },
      {
        id: "doorSeeMirror",
        labelKey: "fengShuiCategories.door.items.doorSeeMirror.label",
        suggestionKey: "fengShuiCategories.door.items.doorSeeMirror.suggestion",
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
        suggestionKey:
          "fengShuiCategories.livingRoom.items.livingSofaWall.suggestion",
        score: 3,
      },
      {
        id: "livingSofaCurve",
        labelKey: "fengShuiCategories.livingRoom.items.livingSofaCurve.label",
        suggestionKey:
          "fengShuiCategories.livingRoom.items.livingSofaCurve.suggestion",
        score: 2,
      },
      {
        id: "livingSofaBackWater",
        labelKey:
          "fengShuiCategories.livingRoom.items.livingSofaBackWater.label",
        suggestionKey:
          "fengShuiCategories.livingRoom.items.livingSofaBackWater.suggestion",
        score: -3,
      },
      {
        id: "livingSofaFaceDoor",
        labelKey:
          "fengShuiCategories.livingRoom.items.livingSofaFaceDoor.label",
        suggestionKey:
          "fengShuiCategories.livingRoom.items.livingSofaFaceDoor.suggestion",
        score: -2,
      },
      {
        id: "livingDirectLight",
        labelKey: "fengShuiCategories.livingRoom.items.livingDirectLight.label",
        suggestionKey:
          "fengShuiCategories.livingRoom.items.livingDirectLight.suggestion",
        score: -2,
      },
      {
        id: "livingSquareShape",
        labelKey: "fengShuiCategories.livingRoom.items.livingSquareShape.label",
        suggestionKey:
          "fengShuiCategories.livingRoom.items.livingSquareShape.suggestion",
        score: 3,
      },
      {
        id: "livingIsolatedColumn",
        labelKey:
          "fengShuiCategories.livingRoom.items.livingIsolatedColumn.label",
        suggestionKey:
          "fengShuiCategories.livingRoom.items.livingIsolatedColumn.suggestion",
        score: -2,
      },
      {
        id: "livingSharpCorner",
        labelKey: "fengShuiCategories.livingRoom.items.livingSharpCorner.label",
        suggestionKey:
          "fengShuiCategories.livingRoom.items.livingSharpCorner.suggestion",
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
        suggestionKey:
          "fengShuiCategories.bedroom.items.bedHeadWall.suggestion",
        score: 3,
      },
      {
        id: "bedNorthSouth",
        labelKey: "fengShuiCategories.bedroom.items.bedNorthSouth.label",
        suggestionKey:
          "fengShuiCategories.bedroom.items.bedNorthSouth.suggestion",
        score: 3,
      },
      {
        id: "bedAirConditioner",
        labelKey: "fengShuiCategories.bedroom.items.bedAirConditioner.label",
        suggestionKey:
          "fengShuiCategories.bedroom.items.bedAirConditioner.suggestion",
        score: -3,
      },
      {
        id: "bedFaceWest",
        labelKey: "fengShuiCategories.bedroom.items.bedFaceWest.label",
        suggestionKey:
          "fengShuiCategories.bedroom.items.bedFaceWest.suggestion",
        score: -2,
      },
      {
        id: "bedFaceMirror",
        labelKey: "fengShuiCategories.bedroom.items.bedFaceMirror.label",
        suggestionKey:
          "fengShuiCategories.bedroom.items.bedFaceMirror.suggestion",
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
        suggestionKey:
          "fengShuiCategories.study.items.studyDeskWall.suggestion",
        score: 3,
      },
      {
        id: "studyFacingWindow",
        labelKey: "fengShuiCategories.study.items.studyFacingWindow.label",
        suggestionKey:
          "fengShuiCategories.study.items.studyFacingWindow.suggestion",
        score: 2,
      },
      {
        id: "studyPlant",
        labelKey: "fengShuiCategories.study.items.studyPlant.label",
        suggestionKey: "fengShuiCategories.study.items.studyPlant.suggestion",
        score: 2,
      },
      {
        id: "studyDoorKitchenToilet",
        labelKey: "fengShuiCategories.study.items.studyDoorKitchenToilet.label",
        suggestionKey:
          "fengShuiCategories.study.items.studyDoorKitchenToilet.suggestion",
        score: -3,
      },
      {
        id: "studyWallToilet",
        labelKey: "fengShuiCategories.study.items.studyWallToilet.label",
        suggestionKey:
          "fengShuiCategories.study.items.studyWallToilet.suggestion",
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
        suggestionKey:
          "fengShuiCategories.kitchen.items.kitchenEast.suggestion",
        score: 3,
      },
      {
        id: "kitchenStoveWall",
        labelKey: "fengShuiCategories.kitchen.items.kitchenStoveWall.label",
        suggestionKey:
          "fengShuiCategories.kitchen.items.kitchenStoveWall.suggestion",
        score: 2,
      },
      {
        id: "kitchenSouth",
        labelKey: "fengShuiCategories.kitchen.items.kitchenSouth.label",
        suggestionKey:
          "fengShuiCategories.kitchen.items.kitchenSouth.suggestion",
        score: -3,
      },
      {
        id: "kitchenStoveBadFacing",
        labelKey:
          "fengShuiCategories.kitchen.items.kitchenStoveBadFacing.label",
        suggestionKey:
          "fengShuiCategories.kitchen.items.kitchenStoveBadFacing.suggestion",
        score: -3,
      },
      {
        id: "kitchenStoveNoBack",
        labelKey: "fengShuiCategories.kitchen.items.kitchenStoveNoBack.label",
        suggestionKey:
          "fengShuiCategories.kitchen.items.kitchenStoveNoBack.suggestion",
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
        suggestionKey:
          "fengShuiCategories.diningRoom.items.diningRoundSquare.suggestion",
        score: 3,
      },
      {
        id: "diningSoftLight",
        labelKey: "fengShuiCategories.diningRoom.items.diningSoftLight.label",
        suggestionKey:
          "fengShuiCategories.diningRoom.items.diningSoftLight.suggestion",
        score: 2,
      },
      {
        id: "diningSoftColor",
        labelKey: "fengShuiCategories.diningRoom.items.diningSoftColor.label",
        suggestionKey:
          "fengShuiCategories.diningRoom.items.diningSoftColor.suggestion",
        score: 2,
      },
      {
        id: "diningSharpTable",
        labelKey: "fengShuiCategories.diningRoom.items.diningSharpTable.label",
        suggestionKey:
          "fengShuiCategories.diningRoom.items.diningSharpTable.suggestion",
        score: -3,
      },
      {
        id: "diningDoorCollision",
        labelKey:
          "fengShuiCategories.diningRoom.items.diningDoorCollision.label",
        suggestionKey:
          "fengShuiCategories.diningRoom.items.diningDoorCollision.suggestion",
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
        suggestionKey:
          "fengShuiCategories.bathroom.items.toiletGoodPosition.suggestion",
        score: 3,
      },
      {
        id: "toiletDryVent",
        labelKey: "fengShuiCategories.bathroom.items.toiletDryVent.label",
        suggestionKey:
          "fengShuiCategories.bathroom.items.toiletDryVent.suggestion",
        score: 3,
      },
      {
        id: "toiletSameDoorKitchen",
        labelKey:
          "fengShuiCategories.bathroom.items.toiletSameDoorKitchen.label",
        suggestionKey:
          "fengShuiCategories.bathroom.items.toiletSameDoorKitchen.suggestion",
        score: -3,
      },
    ],
  },
];

export const fengShuiItems: FengShuiItem[] = fengShuiCategories.flatMap(
  (category) => category.items
);

/**
 * Calculate feng shui score using weighted scoring
 * Algorithm:
 * 1. Sum all selected item scores directly
 * 2. Map raw score to 0-100 range using sigmoid-like transformation
 * 3. Scores are additive - more positive choices = higher score
 *
 * Score mapping:
 * - Raw score 0 → 50 (neutral baseline)
 * - Positive scores increase toward 100
 * - Negative scores decrease toward 0
 * - Uses smooth exponential curve for natural feel
 *
 * Result: 100 (excellent) to 0 (poor), 50 (neutral)
 */
export function calculateScore(selectedItemIds: string[]): number {
  if (selectedItemIds.length === 0) return 50; // Neutral if nothing selected

  const itemMap = new Map<string, FengShuiItem>();
  fengShuiItems.forEach((item) => itemMap.set(item.id, item));

  // Sum all selected item scores
  let rawScore = 0;
  selectedItemIds.forEach((itemId) => {
    const item = itemMap.get(itemId);
    if (item) {
      rawScore += item.score;
    }
  });

  // Transform raw score to 0-100 scale
  // Using exponential transformation for smooth curve
  // rawScore of 0 → 50, positive scores → 100, negative scores → 0

  // Scaling factor - adjust this to control sensitivity
  // Higher value = slower score change, lower value = faster score change
  const scalingFactor = 20;

  // Exponential transformation: 100 / (1 + e^(-x/k))
  // Shifted to center at 50 instead of 50
  const normalizedScore = 100 / (1 + Math.exp(-rawScore / scalingFactor));

  return parseFloat(normalizedScore.toFixed(2));
}
