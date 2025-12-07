<script setup lang="ts">
import type { FengShuiItem } from "~/types/fengShui";

defineProps<{
  suggestions: (FengShuiItem | undefined)[];
}>();

const { t } = useI18n();
</script>

<template>
  <UCard class="mb-3" variant="subtle">
    <h2 class="font-semibold pb-4">{{ $t("suggestions") }}</h2>

    <div v-if="suggestions.length === 0" class="text-gray-400">
      {{ $t("noSuggestions") }}
    </div>

    <div v-else class="space-y-3">
      <div
        v-for="item in suggestions"
        :key="item?.id"
        class="border-l-4 border-primary pl-4"
      >
        <p class="font-semibold">
          {{ item && t(item.labelKey) }}
        </p>
        <p class="text-gray-400">
          {{ item?.suggestionKey ? t(item.suggestionKey) : "" }}
        </p>
      </div>
    </div>
  </UCard>
</template>
