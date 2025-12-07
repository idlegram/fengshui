<script setup lang="ts">
import type { Rating } from "~/types/fengshui";

defineProps<{
  score: number;
  rating: Rating;
}>();

const getColorClass = (color: string) => {
  return {
    "text-emerald-400": color === "emerald",
    "text-yellow-400": color === "yellow",
    "text-orange-400": color === "orange",
    "text-red-400": color === "red",
  };
};
</script>

<template>
  <UCard class="mb-3" variant="subtle">
    <h2 class="font-semibold pb-4">{{ $t("score") }}</h2>
    <div class="space-y-2">
      <div class="flex items-center justify-between">
        <span
          class="text-lg font-semibold"
          :class="getColorClass(rating.color)"
        >
          {{ score }}
        </span>
        <div class="flex items-center gap-2">
          <span class="font-semibold" :class="getColorClass(rating.color)">
            {{ $t(rating.labelKey) }}
          </span>
        </div>
      </div>
    </div>
  </UCard>
</template>
