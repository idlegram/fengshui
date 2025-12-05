export type FengShuiItem = {
  id: string;
  labelKey: string;
  adviceKey: string;
  score: number;
};

export const fengShuiCategoryItems: Record<string, FengShuiItem[]> = {
  doorOrientationExteriorLayout: [
    {
      id: "doorSouth",
      labelKey: "fengShuiItems.doorOrientationExteriorLayout.doorSouth.label",
      adviceKey: "fengShuiItems.doorOrientationExteriorLayout.doorSouth.advice",
      score: 3,
    },
    {
      id: "doorEast",
      labelKey: "fengShuiItems.doorOrientationExteriorLayout.doorEast.label",
      adviceKey: "fengShuiItems.doorOrientationExteriorLayout.doorEast.advice",
      score: 2,
    },
    {
      id: "doorMintang",
      labelKey: "fengShuiItems.doorOrientationExteriorLayout.doorMintang.label",
      adviceKey:
        "fengShuiItems.doorOrientationExteriorLayout.doorMintang.advice",
      score: 3,
    },
    {
      id: "doorUnluckyDirection",
      labelKey:
        "fengShuiItems.doorOrientationExteriorLayout.doorUnluckyDirection.label",
      adviceKey:
        "fengShuiItems.doorOrientationExteriorLayout.doorUnluckyDirection.advice",
      score: -2,
    },
    {
      id: "doorLongCorridor",
      labelKey:
        "fengShuiItems.doorOrientationExteriorLayout.doorLongCorridor.label",
      adviceKey:
        "fengShuiItems.doorOrientationExteriorLayout.doorLongCorridor.advice",
      score: -3,
    },
    {
      id: "doorElevator",
      labelKey:
        "fengShuiItems.doorOrientationExteriorLayout.doorElevator.label",
      adviceKey:
        "fengShuiItems.doorOrientationExteriorLayout.doorElevator.advice",
      score: -2,
    },
  ],

  entryScene: [
    {
      id: "doorSeeRed",
      labelKey: "fengShuiItems.entryScene.doorSeeRed.label",
      adviceKey: "fengShuiItems.entryScene.doorSeeRed.advice",
      score: 2,
    },
    {
      id: "doorSeeGreen",
      labelKey: "fengShuiItems.entryScene.doorSeeGreen.label",
      adviceKey: "fengShuiItems.entryScene.doorSeeGreen.advice",
      score: 2,
    },
    {
      id: "doorSeePainting",
      labelKey: "fengShuiItems.entryScene.doorSeePainting.label",
      adviceKey: "fengShuiItems.entryScene.doorSeePainting.advice",
      score: 2,
    },
    {
      id: "doorSeeStove",
      labelKey: "fengShuiItems.entryScene.doorSeeStove.label",
      adviceKey: "fengShuiItems.entryScene.doorSeeStove.advice",
      score: -3,
    },
    {
      id: "doorSeeToilet",
      labelKey: "fengShuiItems.entryScene.doorSeeToilet.label",
      adviceKey: "fengShuiItems.entryScene.doorSeeToilet.advice",
      score: -3,
    },
    {
      id: "doorSeeMirror",
      labelKey: "fengShuiItems.entryScene.doorSeeMirror.label",
      adviceKey: "fengShuiItems.entryScene.doorSeeMirror.advice",
      score: -2,
    },
  ],

  entryway: [
    {
      id: "entryBrightClean",
      labelKey: "fengShuiItems.entryway.entryBrightClean.label",
      adviceKey: "fengShuiItems.entryway.entryBrightClean.advice",
      score: 3,
    },
    {
      id: "entryHighCeiling",
      labelKey: "fengShuiItems.entryway.entryHighCeiling.label",
      adviceKey: "fengShuiItems.entryway.entryHighCeiling.advice",
      score: 2,
    },
    {
      id: "entryTransparent",
      labelKey: "fengShuiItems.entryway.entryTransparent.label",
      adviceKey: "fengShuiItems.entryway.entryTransparent.advice",
      score: 2,
    },
    {
      id: "entryDarkMessy",
      labelKey: "fengShuiItems.entryway.entryDarkMessy.label",
      adviceKey: "fengShuiItems.entryway.entryDarkMessy.advice",
      score: -3,
    },
    {
      id: "entrySharpCornerAttack",
      labelKey: "fengShuiItems.entryway.entrySharpCornerAttack.label",
      adviceKey: "fengShuiItems.entryway.entrySharpCornerAttack.advice",
      score: -2,
    },
    {
      id: "entryLowCeiling",
      labelKey: "fengShuiItems.entryway.entryLowCeiling.label",
      adviceKey: "fengShuiItems.entryway.entryLowCeiling.advice",
      score: -2,
    },
  ],

  livingRoomLayout: [
    {
      id: "livingSofaWall",
      labelKey: "fengShuiItems.livingRoomLayout.livingSofaWall.label",
      adviceKey: "fengShuiItems.livingRoomLayout.livingSofaWall.advice",
      score: 3,
    },
    {
      id: "livingNoBeam",
      labelKey: "fengShuiItems.livingRoomLayout.livingNoBeam.label",
      adviceKey: "fengShuiItems.livingRoomLayout.livingNoBeam.advice",
      score: 3,
    },
    {
      id: "livingSofaCurve",
      labelKey: "fengShuiItems.livingRoomLayout.livingSofaCurve.label",
      adviceKey: "fengShuiItems.livingRoomLayout.livingSofaCurve.advice",
      score: 2,
    },
    {
      id: "livingSofaBackWater",
      labelKey: "fengShuiItems.livingRoomLayout.livingSofaBackWater.label",
      adviceKey: "fengShuiItems.livingRoomLayout.livingSofaBackWater.advice",
      score: -3,
    },
    {
      id: "livingSofaFaceDoor",
      labelKey: "fengShuiItems.livingRoomLayout.livingSofaFaceDoor.label",
      adviceKey: "fengShuiItems.livingRoomLayout.livingSofaFaceDoor.advice",
      score: -2,
    },
    {
      id: "livingDirectLight",
      labelKey: "fengShuiItems.livingRoomLayout.livingDirectLight.label",
      adviceKey: "fengShuiItems.livingRoomLayout.livingDirectLight.advice",
      score: -2,
    },
  ],

  livingRoomShapeObstacles: [
    {
      id: "livingSquareShape",
      labelKey:
        "fengShuiItems.livingRoomShapeObstacles.livingSquareShape.label",
      adviceKey:
        "fengShuiItems.livingRoomShapeObstacles.livingSquareShape.advice",
      score: 3,
    },
    {
      id: "livingSharpCornerFixed",
      labelKey:
        "fengShuiItems.livingRoomShapeObstacles.livingSharpCornerFixed.label",
      adviceKey:
        "fengShuiItems.livingRoomShapeObstacles.livingSharpCornerFixed.advice",
      score: 2,
    },
    {
      id: "livingIsolatedColumn",
      labelKey:
        "fengShuiItems.livingRoomShapeObstacles.livingIsolatedColumn.label",
      adviceKey:
        "fengShuiItems.livingRoomShapeObstacles.livingIsolatedColumn.advice",
      score: -2,
    },
    {
      id: "livingSharpCornerUnfixed",
      labelKey:
        "fengShuiItems.livingRoomShapeObstacles.livingSharpCornerUnfixed.label",
      adviceKey:
        "fengShuiItems.livingRoomShapeObstacles.livingSharpCornerUnfixed.advice",
      score: -3,
    },
  ],

  bedroomLayout: [
    {
      id: "bedHeadWall",
      labelKey: "fengShuiItems.bedroomLayout.bedHeadWall.label",
      adviceKey: "fengShuiItems.bedroomLayout.bedHeadWall.advice",
      score: 3,
    },
    {
      id: "bedNorthSouth",
      labelKey: "fengShuiItems.bedroomLayout.bedNorthSouth.label",
      adviceKey: "fengShuiItems.bedroomLayout.bedNorthSouth.advice",
      score: 3,
    },
    {
      id: "bedChildEast",
      labelKey: "fengShuiItems.bedroomLayout.bedChildEast.label",
      adviceKey: "fengShuiItems.bedroomLayout.bedChildEast.advice",
      score: 2,
    },
    {
      id: "bedBeamPress",
      labelKey: "fengShuiItems.bedroomLayout.bedBeamPress.label",
      adviceKey: "fengShuiItems.bedroomLayout.bedBeamPress.advice",
      score: -3,
    },
    {
      id: "bedFaceWest",
      labelKey: "fengShuiItems.bedroomLayout.bedFaceWest.label",
      adviceKey: "fengShuiItems.bedroomLayout.bedFaceWest.advice",
      score: -2,
    },
    {
      id: "bedFaceMirror",
      labelKey: "fengShuiItems.bedroomLayout.bedFaceMirror.label",
      adviceKey: "fengShuiItems.bedroomLayout.bedFaceMirror.advice",
      score: -3,
    },
  ],

  study: [
    {
      id: "studyDeskWall",
      labelKey: "fengShuiItems.study.studyDeskWall.label",
      adviceKey: "fengShuiItems.study.studyDeskWall.advice",
      score: 3,
    },
    {
      id: "studyFacingWindow",
      labelKey: "fengShuiItems.study.studyFacingWindow.label",
      adviceKey: "fengShuiItems.study.studyFacingWindow.advice",
      score: 2,
    },
    {
      id: "studyPlant",
      labelKey: "fengShuiItems.study.studyPlant.label",
      adviceKey: "fengShuiItems.study.studyPlant.advice",
      score: 2,
    },
    {
      id: "studyDoorKitchenToilet",
      labelKey: "fengShuiItems.study.studyDoorKitchenToilet.label",
      adviceKey: "fengShuiItems.study.studyDoorKitchenToilet.advice",
      score: -3,
    },
    {
      id: "studyWallToilet",
      labelKey: "fengShuiItems.study.studyWallToilet.label",
      adviceKey: "fengShuiItems.study.studyWallToilet.advice",
      score: -2,
    },
  ],

  kitchenDirectionStove: [
    {
      id: "kitchenEast",
      labelKey: "fengShuiItems.kitchenDirectionStove.kitchenEast.label",
      adviceKey: "fengShuiItems.kitchenDirectionStove.kitchenEast.advice",
      score: 3,
    },
    {
      id: "kitchenStoveWall",
      labelKey: "fengShuiItems.kitchenDirectionStove.kitchenStoveWall.label",
      adviceKey: "fengShuiItems.kitchenDirectionStove.kitchenStoveWall.advice",
      score: 2,
    },
    {
      id: "kitchenSouth",
      labelKey: "fengShuiItems.kitchenDirectionStove.kitchenSouth.label",
      adviceKey: "fengShuiItems.kitchenDirectionStove.kitchenSouth.advice",
      score: -3,
    },
    {
      id: "kitchenStoveBadFacing",
      labelKey:
        "fengShuiItems.kitchenDirectionStove.kitchenStoveBadFacing.label",
      adviceKey:
        "fengShuiItems.kitchenDirectionStove.kitchenStoveBadFacing.advice",
      score: -3,
    },
    {
      id: "kitchenStoveNoBack",
      labelKey: "fengShuiItems.kitchenDirectionStove.kitchenStoveNoBack.label",
      adviceKey:
        "fengShuiItems.kitchenDirectionStove.kitchenStoveNoBack.advice",
      score: -2,
    },
  ],

  diningRoomDiningTable: [
    {
      id: "diningRoundSquare",
      labelKey: "fengShuiItems.diningRoomDiningTable.diningRoundSquare.label",
      adviceKey: "fengShuiItems.diningRoomDiningTable.diningRoundSquare.advice",
      score: 3,
    },
    {
      id: "diningSoftLight",
      labelKey: "fengShuiItems.diningRoomDiningTable.diningSoftLight.label",
      adviceKey: "fengShuiItems.diningRoomDiningTable.diningSoftLight.advice",
      score: 2,
    },
    {
      id: "diningSoftColor",
      labelKey: "fengShuiItems.diningRoomDiningTable.diningSoftColor.label",
      adviceKey: "fengShuiItems.diningRoomDiningTable.diningSoftColor.advice",
      score: 2,
    },
    {
      id: "diningSharpTable",
      labelKey: "fengShuiItems.diningRoomDiningTable.diningSharpTable.label",
      adviceKey: "fengShuiItems.diningRoomDiningTable.diningSharpTable.advice",
      score: -3,
    },
    {
      id: "diningDoorCollision",
      labelKey: "fengShuiItems.diningRoomDiningTable.diningDoorCollision.label",
      adviceKey:
        "fengShuiItems.diningRoomDiningTable.diningDoorCollision.advice",
      score: -2,
    },
  ],

  bathroomPosition: [
    {
      id: "toiletGoodPosition",
      labelKey: "fengShuiItems.bathroomPosition.toiletGoodPosition.label",
      adviceKey: "fengShuiItems.bathroomPosition.toiletGoodPosition.advice",
      score: 3,
    },
    {
      id: "toiletDryVent",
      labelKey: "fengShuiItems.bathroomPosition.toiletDryVent.label",
      adviceKey: "fengShuiItems.bathroomPosition.toiletDryVent.advice",
      score: 3,
    },
    {
      id: "toiletFaceDoor",
      labelKey: "fengShuiItems.bathroomPosition.toiletFaceDoor.label",
      adviceKey: "fengShuiItems.bathroomPosition.toiletFaceDoor.advice",
      score: -3,
    },
    {
      id: "toiletSameDoorKitchen",
      labelKey: "fengShuiItems.bathroomPosition.toiletSameDoorKitchen.label",
      adviceKey: "fengShuiItems.bathroomPosition.toiletSameDoorKitchen.advice",
      score: -3,
    },
  ],

  overallLightingVentilation: [
    {
      id: "houseBright",
      labelKey: "fengShuiItems.overallLightingVentilation.houseBright.label",
      adviceKey: "fengShuiItems.overallLightingVentilation.houseBright.advice",
      score: 3,
    },
    {
      id: "houseVentilation",
      labelKey:
        "fengShuiItems.overallLightingVentilation.houseVentilation.label",
      adviceKey:
        "fengShuiItems.overallLightingVentilation.houseVentilation.advice",
      score: 3,
    },
    {
      id: "houseSmoothLayout",
      labelKey:
        "fengShuiItems.overallLightingVentilation.houseSmoothLayout.label",
      adviceKey:
        "fengShuiItems.overallLightingVentilation.houseSmoothLayout.advice",
      score: 2,
    },
    {
      id: "houseDarkDamp",
      labelKey: "fengShuiItems.overallLightingVentilation.houseDarkDamp.label",
      adviceKey:
        "fengShuiItems.overallLightingVentilation.houseDarkDamp.advice",
      score: -3,
    },
    {
      id: "houseNoAirflow",
      labelKey: "fengShuiItems.overallLightingVentilation.houseNoAirflow.label",
      adviceKey:
        "fengShuiItems.overallLightingVentilation.houseNoAirflow.advice",
      score: -3,
    },
  ],
};

export const fengShuiItems: FengShuiItem[] = Object.values(
  fengShuiCategoryItems
).flat();
