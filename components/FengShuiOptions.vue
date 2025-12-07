<script setup lang="ts">
import type { FengShuiCategory, FengShuiItem } from "~/types/fengshui";

defineProps<{
  categories: FengShuiCategory[];
}>();

const { t } = useI18n();
const { selections } = useFengShui();

// Computed v-model for select (single value)
const getSelectModel = (categoryId: string) =>
  computed({
    get: () => selections.value.get(categoryId)?.[0],
    set: (value: string | undefined) => {
      if (value) {
        selections.value.set(categoryId, [value]);
      } else {
        selections.value.delete(categoryId);
      }
    },
  });

// Computed v-model for checkbox (array)
const getCheckboxModel = (categoryId: string) =>
  computed({
    get: () => selections.value.get(categoryId) || [],
    set: (value: string[]) => {
      if (value.length > 0) {
        selections.value.set(categoryId, value);
      } else {
        selections.value.delete(categoryId);
      }
    },
  });
</script>

<template>
  <UCard class="mb-3" variant="subtle">
    <div
      class="not-last-of-type:mb-4"
      v-for="category in categories"
      :key="category.id"
    >
      <div class="flex items-center gap-1 mb-1">
        <h2 class="font-semibold">
          {{ t(category.labelKey) }}
        </h2>
        <UPopover v-if:="category.infoKey">
          <UIcon
            name="i-lucide-info"
            class="size-5 text-muted cursor-pointer"
          />
          <template #content>
            <div class="p-4 max-w-xs">
              <p>{{ t(category.infoKey) }}</p>
            </div>
          </template>
        </UPopover>
      </div>

      <!-- Select Input -->
      <USelect
        v-if="category.inputType === 'select'"
        class="w-full"
        v-model="getSelectModel(category.id).value"
        :items="
          category.items.map((item: FengShuiItem) => ({
            value: item.id,
            label: t(item.labelKey),
          }))
        "
        color="primary"
        variant="subtle"
        size="lg"
        :placeholder="`${t(category.labelKey)}`"
      />

      <!-- Checkbox Group -->
      <UCheckboxGroup
        v-else-if="category.inputType === 'checkbox'"
        v-model="getCheckboxModel(category.id).value"
        color="primary"
        variant="card"
        orientation="horizontal"
        indicator="start"
        :ui="{
          fieldset: 'grid grid-cols-1 sm:grid-cols-2 gap-1',
          item: 'bg-elevated',
        }"
        value-key="id"
        :items="
          category.items.map((item: FengShuiItem) => ({
            ...item,
            label: t(item.labelKey),
          }))
        "
      />
    </div>
  </UCard>
</template>
