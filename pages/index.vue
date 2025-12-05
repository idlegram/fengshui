<script setup lang="ts">
import { fengShuiItemsData, type FengShuiItem } from "~/data/fengShui";

const { locale, setLocale } = useI18n();

const fengShuiItems = ref<FengShuiItem[]>(fengShuiItemsData);

type State = {
  selectedItems: string[];
};

const state = reactive<State>({
  selectedItems: [],
});

const { t } = useI18n();

const getItemLabel = (item: FengShuiItem) => {
  return t(item.labelKey);
};

const getItemAdvice = (item: FengShuiItem) => {
  if (!item.adviceKey) return "";
  return t(item.adviceKey);
};

const getCategoryName = (categoryKey: string) => {
  return t(categoryKey);
};

const categories = computed(() => {
  const categoriesMap = new Map<string, string>();
  fengShuiItems.value.forEach((item) => {
    const categoryName = t(item.categoryKey);
    if (!categoriesMap.has(categoryName)) {
      categoriesMap.set(categoryName, item.categoryKey);
    }
  });
  return Array.from(categoriesMap.keys());
});

const itemsByCategory = computed(() => {
  const grouped = new Map<string, FengShuiItem[]>();
  fengShuiItems.value.forEach((item) => {
    const categoryName = t(item.categoryKey);
    if (!grouped.has(categoryName)) {
      grouped.set(categoryName, []);
    }
    grouped.get(categoryName)!.push(item);
  });
  return grouped;
});

const totalScore = computed(() => {
  const BASE_SCORE = 50;
  let positiveScore = 0;
  let negativeScore = 0;

  state.selectedItems.forEach((itemId) => {
    const item = fengShuiItems.value.find((i) => i.id === itemId);
    if (item) {
      if (item.score > 0) {
        positiveScore += item.score;
      } else {
        negativeScore += Math.abs(item.score);
      }
    }
  });

  const score = BASE_SCORE + positiveScore - negativeScore;
  return Math.max(0, Math.min(100, score));
});

const scoreBreakdown = computed(() => {
  let positiveScore = 0;
  let negativeScore = 0;

  state.selectedItems.forEach((itemId) => {
    const item = fengShuiItems.value.find((i) => i.id === itemId);
    if (item) {
      if (item.score > 0) {
        positiveScore += item.score;
      } else {
        negativeScore += Math.abs(item.score);
      }
    }
  });

  return { positiveScore, negativeScore };
});

const scoreRating = computed(() => {
  const score = totalScore.value;
  if (score >= 90) return { labelKey: "excellentFengShui", color: "emerald" };
  if (score >= 70) return { labelKey: "goodFengShui", color: "emerald" };
  if (score >= 50) return { labelKey: "fairFengShui", color: "yellow" };
  if (score >= 30) return { labelKey: "poorFengShui", color: "orange" };
  return { labelKey: "badFengShui", color: "red" };
});

const selectedItemsWithAdvice = computed(() => {
  return state.selectedItems
    .map((itemId) => fengShuiItems.value.find((i) => i.id === itemId))
    .filter((item) => {
      if (!item || !item.adviceKey) return false;
      const advice = t(item.adviceKey);
      return advice && advice !== item.adviceKey;
    })
    .sort((a, b) => (b?.score || 0) - (a?.score || 0));
});
</script>

<template>
  <UContainer class="">
    <!-- 标题 -->
    <div class="py-6">
      <h1 class="text-3xl font-bold mb-4">{{ $t("description") }}</h1>
      <p class="text-gray-500 mb-4">{{ $t("disclaimer") }}</p>
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
            to="https://github.com/luojiahai/fengshui"
            target="_blank"
            icon="i-simple-icons-github"
            aria-label="GitHub"
          />
        </UTooltip>
      </div>
    </div>

    <!-- 风水选项 -->
    <div v-for="category in categories" :key="category">
      <UCard
        class="mb-4"
        variant="subtle"
        :ui="{
          body: 'p-4 sm:p-4',
        }"
      >
        <h2 class="font-semibold pb-4">
          {{ getCategoryName(category) }}
        </h2>
        <UCheckboxGroup
          color="primary"
          variant="card"
          orientation="horizontal"
          :ui="{
            fieldset: 'grid grid-cols-2 gap-1',
            item: 'bg-elevated',
          }"
          v-model="state.selectedItems"
          value-key="id"
          :items="
            (itemsByCategory.get(category) || []).map((item: FengShuiItem) => ({
              ...item,
              label: getItemLabel(item),
            }))
          "
        />
      </UCard>
    </div>

    <!-- 评分 -->
    <UCard
      class="mb-4"
      variant="subtle"
      :ui="{
        body: 'p-4 sm:p-4',
      }"
    >
      <h2 class="font-semibold pb-4">{{ $t("score") }}</h2>
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <span
            class="text-lg font-semibold"
            :class="{
              'text-emerald-500': scoreRating.color === 'emerald',
              'text-yellow-500': scoreRating.color === 'yellow',
              'text-orange-500': scoreRating.color === 'orange',
              'text-red-500': scoreRating.color === 'red',
            }"
            >{{ totalScore }}</span
          >
          <div class="flex items-center gap-2">
            <span
              class="font-semibold"
              :class="{
                'text-emerald-500': scoreRating.color === 'emerald',
                'text-yellow-500': scoreRating.color === 'yellow',
                'text-orange-500': scoreRating.color === 'orange',
                'text-red-500': scoreRating.color === 'red',
              }"
            >
              {{ $t(scoreRating.labelKey) }}
            </span>
          </div>
        </div>
      </div>
    </UCard>

    <!-- 建议 -->
    <UCard
      class="mb-4"
      variant="subtle"
      :ui="{
        body: 'p-4 sm:p-4',
      }"
    >
      <h2 class="font-semibold pb-4">{{ $t("suggestions") }}</h2>
      <div v-if="selectedItemsWithAdvice.length === 0" class="text-gray-500">
        {{ $t("noSuggestions") }}
      </div>
      <div v-else class="space-y-3">
        <div
          v-for="item in selectedItemsWithAdvice"
          :key="item?.id"
          class="border-l-4 border-primary pl-4"
        >
          <p class="font-semibold">
            {{ item && getItemLabel(item) }}
          </p>
          <p class="text-gray-400">
            {{ item && getItemAdvice(item) }}
          </p>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
