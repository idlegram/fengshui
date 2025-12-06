<script setup lang="ts">
import {
  fengShuiCategories,
  fengShuiItems,
  type FengShuiItem,
  calculateNormalizedScore,
} from "~/data/fengShui";

const { t, locale, setLocale } = useI18n();

const selectedItems = ref<string[]>([]);
const selectedSelectItems = ref<Map<string, string | undefined>>(new Map());

onMounted(() => {
  fengShuiCategories.forEach((category) => {
    if (category.inputType === "select") {
      selectedSelectItems.value.set(category.id, undefined);
    }
  });
});

const itemMap = computed(() => {
  const map = new Map<string, FengShuiItem>();
  fengShuiItems.forEach((item) => map.set(item.id, item));
  return map;
});

const totalScore = computed(() => {
  const allSelectedItems = [
    ...selectedItems.value,
    ...Array.from(selectedSelectItems.value.values()).filter(
      (item) => item !== undefined
    ),
  ];
  const score = calculateNormalizedScore(allSelectedItems);
  return parseFloat(score.toPrecision(5));
});

const scoreRating = computed(() => {
  const score = totalScore.value;
  return (
    [
      { threshold: 90, labelKey: "excellentFengShui", color: "emerald" },
      { threshold: 70, labelKey: "goodFengShui", color: "emerald" },
      { threshold: 50, labelKey: "fairFengShui", color: "yellow" },
      { threshold: 30, labelKey: "poorFengShui", color: "orange" },
    ].find((rating) => score >= rating.threshold) || {
      labelKey: "badFengShui",
      color: "red",
    }
  );
});

const selectedItemsWithAdvice = computed(() => {
  const allSelectedItems = [
    ...selectedItems.value,
    ...Array.from(selectedSelectItems.value.values()).filter(
      (item) => item !== undefined
    ),
  ];
  return allSelectedItems
    .map((itemId) => itemMap.value.get(itemId))
    .filter((item) => {
      if (!item?.adviceKey) return false;
      const advice = t(item.adviceKey);
      return advice && advice !== item.adviceKey;
    })
    .sort((a, b) => (b?.score || 0) - (a?.score || 0));
});
</script>

<template>
  <UContainer class="my-6">
    <!-- 标题 -->
    <div class="my-6">
      <h1 v-if="locale === 'zh-CN'" class="text-3xl font-bold mb-3">
        这<span class="text-primary-400">风水</span>好不好
      </h1>
      <h1 v-else class="text-3xl font-bold mb-3">
        Is the <span class="text-primary-400">Feng Shui</span> good?
      </h1>
      <p class="text-gray-400 mb-3">{{ $t("disclaimer") }}</p>
      <div class="flex items-center" orientation="horizontal">
        <UButton
          class=""
          :color="locale === 'zh-CN' ? 'primary' : 'neutral'"
          variant="outline"
          @click="setLocale('zh-CN')"
        >
          简体中文
        </UButton>
        <UButton
          class=""
          :color="locale === 'en' ? 'primary' : 'neutral'"
          variant="outline"
          @click="setLocale('en')"
        >
          English
        </UButton>
        <UColorModeButton class="ml-2" />
        <UTooltip text="source" :kbds="['meta', 'G']">
          <UButton
            color="neutral"
            variant="ghost"
            to="https://github.com/idlegram/fengshui"
            target="_blank"
            icon="i-simple-icons-github"
            aria-label="GitHub"
          />
        </UTooltip>
      </div>
    </div>

    <!-- 风水选项 -->
    <UCard class="mb-3" variant="subtle">
      <div
        class="not-last-of-type:mb-4"
        v-for="category in fengShuiCategories"
        :key="category.id"
      >
        <h2 class="font-semibold mb-3">
          {{ t(category.labelKey) }}
        </h2>
        <!-- USelect for select inputType -->
        <USelect
          class="w-full"
          v-if="category.inputType === 'select'"
          :model-value="selectedSelectItems.get(category.id)"
          @update:model-value="selectedSelectItems.set(category.id, $event)"
          :items="
            category.items.map((item: FengShuiItem) => ({
              value: item.id,
              label: t(item.labelKey),
            }))
          "
          color="primary"
          variant="subtle"
          :placeholder="`${t(category.labelKey)}`"
        />
        <!-- UCheckboxGroup for checkbox inputType -->
        <UCheckboxGroup
          v-else-if="category.inputType === 'checkbox'"
          color="primary"
          variant="card"
          orientation="horizontal"
          indicator="start"
          :ui="{
            fieldset: 'grid grid-cols-1 sm:grid-cols-2 gap-1',
            item: 'bg-elevated',
          }"
          v-model="selectedItems"
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

    <!-- 评分 -->
    <UCard class="mb-3" variant="subtle">
      <h2 class="font-semibold pb-4">{{ $t("score") }}</h2>
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <span
            class="text-lg font-semibold"
            :class="{
              'text-emerald-400': scoreRating.color === 'emerald',
              'text-yellow-400': scoreRating.color === 'yellow',
              'text-orange-400': scoreRating.color === 'orange',
              'text-red-400': scoreRating.color === 'red',
            }"
            >{{ totalScore }}</span
          >
          <div class="flex items-center gap-2">
            <span
              class="font-semibold"
              :class="{
                'text-emerald-400': scoreRating.color === 'emerald',
                'text-yellow-400': scoreRating.color === 'yellow',
                'text-orange-400': scoreRating.color === 'orange',
                'text-red-400': scoreRating.color === 'red',
              }"
            >
              {{ $t(scoreRating.labelKey) }}
            </span>
          </div>
        </div>
      </div>
    </UCard>

    <!-- 建议 -->
    <UCard class="mb-3" variant="subtle">
      <h2 class="font-semibold pb-4">{{ $t("suggestions") }}</h2>
      <div v-if="selectedItemsWithAdvice.length === 0" class="text-gray-400">
        {{ $t("noSuggestions") }}
      </div>
      <div v-else class="space-y-3">
        <div
          v-for="item in selectedItemsWithAdvice"
          :key="item?.id"
          class="border-l-4 border-primary pl-4"
        >
          <p class="font-semibold">
            {{ item && t(item.labelKey) }}
          </p>
          <p class="text-gray-400">
            {{ item?.adviceKey ? t(item.adviceKey) : "" }}
          </p>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
