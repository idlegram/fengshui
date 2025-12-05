export type FengShuiItem = {
  id: string;
  labelKey: string;
  categoryKey: string;
  score: number;
  adviceKey?: string;
};

export const fengShuiItemsData: FengShuiItem[] = [
  // 1. Door Orientation & Exterior Layout
  {
    id: "door_south",
    labelKey: "fengShui.door_south.label",
    categoryKey: "fengShui.door_south.category",
    score: 3,
  },
  {
    id: "door_east",
    labelKey: "fengShui.door_east.label",
    categoryKey: "fengShui.door_east.category",
    score: 2,
  },
  {
    id: "door_mingtang",
    labelKey: "fengShui.door_mingtang.label",
    categoryKey: "fengShui.door_mingtang.category",
    score: 3,
  },
  {
    id: "door_unlucky_direction",
    labelKey: "fengShui.door_unlucky_direction.label",
    categoryKey: "fengShui.door_unlucky_direction.category",
    score: -2,
    adviceKey: "fengShui.door_unlucky_direction.advice",
  },
  {
    id: "door_long_corridor",
    labelKey: "fengShui.door_long_corridor.label",
    categoryKey: "fengShui.door_long_corridor.category",
    score: -3,
    adviceKey: "fengShui.door_long_corridor.advice",
  },
  {
    id: "door_elevator",
    labelKey: "fengShui.door_elevator.label",
    categoryKey: "fengShui.door_elevator.category",
    score: -2,
    adviceKey: "fengShui.door_elevator.advice",
  },

  // 2. Entry Scene
  {
    id: "door_see_red",
    labelKey: "fengShui.door_see_red.label",
    categoryKey: "fengShui.door_see_red.category",
    score: 2,
  },
  {
    id: "door_see_green",
    labelKey: "fengShui.door_see_green.label",
    categoryKey: "fengShui.door_see_green.category",
    score: 2,
  },
  {
    id: "door_see_painting",
    labelKey: "fengShui.door_see_painting.label",
    categoryKey: "fengShui.door_see_painting.category",
    score: 2,
  },
  {
    id: "door_see_stove",
    labelKey: "fengShui.door_see_stove.label",
    categoryKey: "fengShui.door_see_stove.category",
    score: -3,
    adviceKey: "fengShui.door_see_stove.advice",
  },
  {
    id: "door_see_toilet",
    labelKey: "fengShui.door_see_toilet.label",
    categoryKey: "fengShui.door_see_toilet.category",
    score: -3,
    adviceKey: "fengShui.door_see_toilet.advice",
  },
  {
    id: "door_see_mirror",
    labelKey: "fengShui.door_see_mirror.label",
    categoryKey: "fengShui.door_see_mirror.category",
    score: -2,
    adviceKey: "fengShui.door_see_mirror.advice",
  },

  // 3. Entryway
  {
    id: "entry_bright_clean",
    labelKey: "fengShui.entry_bright_clean.label",
    categoryKey: "fengShui.entry_bright_clean.category",
    score: 3,
  },
  {
    id: "entry_high_ceiling",
    labelKey: "fengShui.entry_high_ceiling.label",
    categoryKey: "fengShui.entry_high_ceiling.category",
    score: 2,
  },
  {
    id: "entry_transparent",
    labelKey: "fengShui.entry_transparent.label",
    categoryKey: "fengShui.entry_transparent.category",
    score: 2,
  },
  {
    id: "entry_dark_messy",
    labelKey: "fengShui.entry_dark_messy.label",
    categoryKey: "fengShui.entry_dark_messy.category",
    score: -3,
    adviceKey: "fengShui.entry_dark_messy.advice",
  },
  {
    id: "entry_sharp_corner_attack",
    labelKey: "fengShui.entry_sharp_corner_attack.label",
    categoryKey: "fengShui.entry_sharp_corner_attack.category",
    score: -2,
    adviceKey: "fengShui.entry_sharp_corner_attack.advice",
  },
  {
    id: "entry_low_ceiling",
    labelKey: "fengShui.entry_low_ceiling.label",
    categoryKey: "fengShui.entry_low_ceiling.category",
    score: -2,
    adviceKey: "fengShui.entry_low_ceiling.advice",
  },

  // 5. Living Room Layout
  {
    id: "living_sofa_wall",
    labelKey: "fengShui.living_sofa_wall.label",
    categoryKey: "fengShui.living_sofa_wall.category",
    score: 3,
  },
  {
    id: "living_no_beam",
    labelKey: "fengShui.living_no_beam.label",
    categoryKey: "fengShui.living_no_beam.category",
    score: 3,
  },
  {
    id: "living_sofa_curve",
    labelKey: "fengShui.living_sofa_curve.label",
    categoryKey: "fengShui.living_sofa_curve.category",
    score: 2,
  },
  {
    id: "living_sofa_back_water",
    labelKey: "fengShui.living_sofa_back_water.label",
    categoryKey: "fengShui.living_sofa_back_water.category",
    score: -3,
    adviceKey: "fengShui.living_sofa_back_water.advice",
  },
  {
    id: "living_sofa_face_door",
    labelKey: "fengShui.living_sofa_face_door.label",
    categoryKey: "fengShui.living_sofa_face_door.category",
    score: -2,
    adviceKey: "fengShui.living_sofa_face_door.advice",
  },
  {
    id: "living_direct_light",
    labelKey: "fengShui.living_direct_light.label",
    categoryKey: "fengShui.living_direct_light.category",
    score: -2,
    adviceKey: "fengShui.living_direct_light.advice",
  },

  // 6. Living Room Shape & Obstacles
  {
    id: "living_square_shape",
    labelKey: "fengShui.living_square_shape.label",
    categoryKey: "fengShui.living_square_shape.category",
    score: 3,
  },
  {
    id: "living_sharp_corner_fixed",
    labelKey: "fengShui.living_sharp_corner_fixed.label",
    categoryKey: "fengShui.living_sharp_corner_fixed.category",
    score: 2,
  },
  {
    id: "living_isolated_column",
    labelKey: "fengShui.living_isolated_column.label",
    categoryKey: "fengShui.living_isolated_column.category",
    score: -2,
    adviceKey: "fengShui.living_isolated_column.advice",
  },
  {
    id: "living_sharp_corner_unfixed",
    labelKey: "fengShui.living_sharp_corner_unfixed.label",
    categoryKey: "fengShui.living_sharp_corner_unfixed.category",
    score: -3,
    adviceKey: "fengShui.living_sharp_corner_unfixed.advice",
  },

  // 7. Bedroom Layout
  {
    id: "bed_head_wall",
    labelKey: "fengShui.bed_head_wall.label",
    categoryKey: "fengShui.bed_head_wall.category",
    score: 3,
  },
  {
    id: "bed_north_south",
    labelKey: "fengShui.bed_north_south.label",
    categoryKey: "fengShui.bed_north_south.category",
    score: 3,
  },
  {
    id: "bed_child_east",
    labelKey: "fengShui.bed_child_east.label",
    categoryKey: "fengShui.bed_child_east.category",
    score: 2,
  },
  {
    id: "bed_beam_press",
    labelKey: "fengShui.bed_beam_press.label",
    categoryKey: "fengShui.bed_beam_press.category",
    score: -3,
    adviceKey: "fengShui.bed_beam_press.advice",
  },
  {
    id: "bed_face_west",
    labelKey: "fengShui.bed_face_west.label",
    categoryKey: "fengShui.bed_face_west.category",
    score: -2,
    adviceKey: "fengShui.bed_face_west.advice",
  },
  {
    id: "bed_face_mirror",
    labelKey: "fengShui.bed_face_mirror.label",
    categoryKey: "fengShui.bed_face_mirror.category",
    score: -3,
    adviceKey: "fengShui.bed_face_mirror.advice",
  },

  // 8. Study
  {
    id: "study_desk_wall",
    labelKey: "fengShui.study_desk_wall.label",
    categoryKey: "fengShui.study_desk_wall.category",
    score: 3,
  },
  {
    id: "study_facing_window",
    labelKey: "fengShui.study_facing_window.label",
    categoryKey: "fengShui.study_facing_window.category",
    score: 2,
  },
  {
    id: "study_plant",
    labelKey: "fengShui.study_plant.label",
    categoryKey: "fengShui.study_plant.category",
    score: 2,
  },
  {
    id: "study_door_kitchen_toilet",
    labelKey: "fengShui.study_door_kitchen_toilet.label",
    categoryKey: "fengShui.study_door_kitchen_toilet.category",
    score: -3,
    adviceKey: "fengShui.study_door_kitchen_toilet.advice",
  },
  {
    id: "study_wall_toilet",
    labelKey: "fengShui.study_wall_toilet.label",
    categoryKey: "fengShui.study_wall_toilet.category",
    score: -2,
    adviceKey: "fengShui.study_wall_toilet.advice",
  },

  // 9. Kitchen Direction & Stove
  {
    id: "kitchen_east",
    labelKey: "fengShui.kitchen_east.label",
    categoryKey: "fengShui.kitchen_east.category",
    score: 3,
  },
  {
    id: "kitchen_stove_wall",
    labelKey: "fengShui.kitchen_stove_wall.label",
    categoryKey: "fengShui.kitchen_stove_wall.category",
    score: 2,
  },
  {
    id: "kitchen_south",
    labelKey: "fengShui.kitchen_south.label",
    categoryKey: "fengShui.kitchen_south.category",
    score: -3,
    adviceKey: "fengShui.kitchen_south.advice",
  },
  {
    id: "kitchen_stove_bad_facing",
    labelKey: "fengShui.kitchen_stove_bad_facing.label",
    categoryKey: "fengShui.kitchen_stove_bad_facing.category",
    score: -3,
    adviceKey: "fengShui.kitchen_stove_bad_facing.advice",
  },
  {
    id: "kitchen_stove_no_back",
    labelKey: "fengShui.kitchen_stove_no_back.label",
    categoryKey: "fengShui.kitchen_stove_no_back.category",
    score: -2,
    adviceKey: "fengShui.kitchen_stove_no_back.advice",
  },

  // 10. Dining Room & Dining Table
  {
    id: "dining_round_square",
    labelKey: "fengShui.dining_round_square.label",
    categoryKey: "fengShui.dining_round_square.category",
    score: 3,
  },
  {
    id: "dining_soft_light",
    labelKey: "fengShui.dining_soft_light.label",
    categoryKey: "fengShui.dining_soft_light.category",
    score: 2,
  },
  {
    id: "dining_soft_color",
    labelKey: "fengShui.dining_soft_color.label",
    categoryKey: "fengShui.dining_soft_color.category",
    score: 2,
  },
  {
    id: "dining_sharp_table",
    labelKey: "fengShui.dining_sharp_table.label",
    categoryKey: "fengShui.dining_sharp_table.category",
    score: -3,
    adviceKey: "fengShui.dining_sharp_table.advice",
  },
  {
    id: "dining_door_collision",
    labelKey: "fengShui.dining_door_collision.label",
    categoryKey: "fengShui.dining_door_collision.category",
    score: -2,
    adviceKey: "fengShui.dining_door_collision.advice",
  },

  // 11. Bathroom Position
  {
    id: "toilet_good_position",
    labelKey: "fengShui.toilet_good_position.label",
    categoryKey: "fengShui.toilet_good_position.category",
    score: 3,
  },
  {
    id: "toilet_dry_vent",
    labelKey: "fengShui.toilet_dry_vent.label",
    categoryKey: "fengShui.toilet_dry_vent.category",
    score: 3,
  },
  {
    id: "toilet_face_door",
    labelKey: "fengShui.toilet_face_door.label",
    categoryKey: "fengShui.toilet_face_door.category",
    score: -3,
    adviceKey: "fengShui.toilet_face_door.advice",
  },
  {
    id: "toilet_same_door_kitchen",
    labelKey: "fengShui.toilet_same_door_kitchen.label",
    categoryKey: "fengShui.toilet_same_door_kitchen.category",
    score: -3,
    adviceKey: "fengShui.toilet_same_door_kitchen.advice",
  },

  // 12. Overall Lighting & Ventilation
  {
    id: "house_bright",
    labelKey: "fengShui.house_bright.label",
    categoryKey: "fengShui.house_bright.category",
    score: 3,
  },
  {
    id: "house_ventilation",
    labelKey: "fengShui.house_ventilation.label",
    categoryKey: "fengShui.house_ventilation.category",
    score: 3,
  },
  {
    id: "house_smooth_layout",
    labelKey: "fengShui.house_smooth_layout.label",
    categoryKey: "fengShui.house_smooth_layout.category",
    score: 2,
  },
  {
    id: "house_dark_damp",
    labelKey: "fengShui.house_dark_damp.label",
    categoryKey: "fengShui.house_dark_damp.category",
    score: -3,
    adviceKey: "fengShui.house_dark_damp.advice",
  },
  {
    id: "house_no_airflow",
    labelKey: "fengShui.house_no_airflow.label",
    categoryKey: "fengShui.house_no_airflow.category",
    score: -3,
    adviceKey: "fengShui.house_no_airflow.advice",
  },
];
