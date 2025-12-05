export type FengShuiItem = {
  id: string;
  categoryKey: string;
  score: number;
};

export const fengShuiItemsData: FengShuiItem[] = [
  // 1. Door Orientation & Exterior Layout
  {
    id: "door_south",
    categoryKey: "door_orientation",
    score: 3,
  },
  {
    id: "door_east",
    categoryKey: "door_orientation",
    score: 2,
  },
  {
    id: "door_mingtang",
    categoryKey: "door_orientation",
    score: 3,
  },
  {
    id: "door_unlucky_direction",
    categoryKey: "door_orientation",
    score: -2,
  },
  {
    id: "door_long_corridor",
    categoryKey: "door_orientation",
    score: -3,
  },
  {
    id: "door_elevator",
    categoryKey: "door_orientation",
    score: -2,
  },

  // 2. Entry Scene
  {
    id: "door_see_red",
    categoryKey: "entry_scene",
    score: 2,
  },
  {
    id: "door_see_green",
    categoryKey: "entry_scene",
    score: 2,
  },
  {
    id: "door_see_painting",
    categoryKey: "entry_scene",
    score: 2,
  },
  {
    id: "door_see_stove",
    categoryKey: "entry_scene",
    score: -3,
  },
  {
    id: "door_see_toilet",
    categoryKey: "entry_scene",
    score: -3,
  },
  {
    id: "door_see_mirror",
    categoryKey: "entry_scene",
    score: -2,
  },

  // 3. Door Exorcism & Structure
  {
    id: "door_screen_plant",
    categoryKey: "door_structure",
    score: 2,
  },
  {
    id: "door_color_match_element",
    categoryKey: "door_structure",
    score: 2,
  },
  {
    id: "door_beam_press",
    categoryKey: "door_structure",
    score: -3,
  },
  {
    id: "door_arch_tomb",
    categoryKey: "door_structure",
    score: -3,
  },

  // 4. Entryway
  {
    id: "entry_bright_clean",
    categoryKey: "entryway",
    score: 3,
  },
  {
    id: "entry_high_ceiling",
    categoryKey: "entryway",
    score: 2,
  },
  {
    id: "entry_transparent",
    categoryKey: "entryway",
    score: 2,
  },
  {
    id: "entry_dark_messy",
    categoryKey: "entryway",
    score: -3,
  },
  {
    id: "entry_sharp_corner_attack",
    categoryKey: "entryway",
    score: -2,
  },
  {
    id: "entry_low_ceiling",
    categoryKey: "entryway",
    score: -2,
  },

  // 5. Living Room Layout
  {
    id: "living_sofa_wall",
    categoryKey: "living_room_layout",
    score: 3,
  },
  {
    id: "living_no_beam",
    categoryKey: "living_room_layout",
    score: 3,
  },
  {
    id: "living_sofa_curve",
    categoryKey: "living_room_layout",
    score: 2,
  },
  {
    id: "living_sofa_back_water",
    categoryKey: "living_room_layout",
    score: -3,
  },
  {
    id: "living_sofa_face_door",
    categoryKey: "living_room_layout",
    score: -2,
  },
  {
    id: "living_direct_light",
    categoryKey: "living_room_layout",
    score: -2,
  },

  // 6. Living Room Shape & Obstacles
  {
    id: "living_square_shape",
    categoryKey: "living_room_shape",
    score: 3,
  },
  {
    id: "living_sharp_corner_fixed",
    categoryKey: "living_room_shape",
    score: 2,
  },
  {
    id: "living_isolated_column",
    categoryKey: "living_room_shape",
    score: -2,
  },
  {
    id: "living_sharp_corner_unfixed",
    categoryKey: "living_room_shape",
    score: -3,
  },

  // 7. Bedroom Layout
  {
    id: "bed_head_wall",
    categoryKey: "bedroom_layout",
    score: 3,
  },
  {
    id: "bed_north_south",
    categoryKey: "bedroom_layout",
    score: 3,
  },
  {
    id: "bed_child_east",
    categoryKey: "bedroom_layout",
    score: 2,
  },
  {
    id: "bed_beam_press",
    categoryKey: "bedroom_layout",
    score: -3,
  },
  {
    id: "bed_face_west",
    categoryKey: "bedroom_layout",
    score: -2,
  },
  {
    id: "bed_face_mirror",
    categoryKey: "bedroom_layout",
    score: -3,
  },

  // 8. Study
  {
    id: "study_desk_wall",
    categoryKey: "study",
    score: 3,
  },
  {
    id: "study_facing_window",
    categoryKey: "study",
    score: 2,
  },
  {
    id: "study_plant",
    categoryKey: "study",
    score: 2,
  },
  {
    id: "study_door_kitchen_toilet",
    categoryKey: "study",
    score: -3,
  },
  {
    id: "study_wall_toilet",
    categoryKey: "study",
    score: -2,
  },

  // 9. Kitchen Direction & Stove
  {
    id: "kitchen_east",
    categoryKey: "kitchen",
    score: 3,
  },
  {
    id: "kitchen_stove_wall",
    categoryKey: "kitchen",
    score: 2,
  },
  {
    id: "kitchen_south",
    categoryKey: "kitchen",
    score: -3,
  },
  {
    id: "kitchen_stove_bad_facing",
    categoryKey: "kitchen",
    score: -3,
  },
  {
    id: "kitchen_stove_no_back",
    categoryKey: "kitchen",
    score: -2,
  },

  // 10. Dining Room & Dining Table
  {
    id: "dining_round_square",
    categoryKey: "dining",
    score: 3,
  },
  {
    id: "dining_soft_light",
    categoryKey: "dining",
    score: 2,
  },
  {
    id: "dining_soft_color",
    categoryKey: "dining",
    score: 2,
  },
  {
    id: "dining_sharp_table",
    categoryKey: "dining",
    score: -3,
  },
  {
    id: "dining_door_collision",
    categoryKey: "dining",
    score: -2,
  },

  // 11. Bathroom Position
  {
    id: "toilet_good_position",
    categoryKey: "bathroom",
    score: 3,
  },
  {
    id: "toilet_dry_vent",
    categoryKey: "bathroom",
    score: 3,
  },
  {
    id: "toilet_face_door",
    categoryKey: "bathroom",
    score: -3,
  },
  {
    id: "toilet_same_door_kitchen",
    categoryKey: "bathroom",
    score: -3,
  },

  // 12. Overall Lighting & Ventilation
  {
    id: "house_bright",
    categoryKey: "overall",
    score: 3,
  },
  {
    id: "house_ventilation",
    categoryKey: "overall",
    score: 3,
  },
  {
    id: "house_smooth_layout",
    categoryKey: "overall",
    score: 2,
  },
  {
    id: "house_dark_damp",
    categoryKey: "overall",
    score: -3,
  },
  {
    id: "house_no_airflow",
    categoryKey: "overall",
    score: -3,
  },
];
