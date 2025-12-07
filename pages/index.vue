<script setup lang="ts">
const { totalScore, scoreRating, selectedItemsWithAdvice, fengShuiCategories } =
  useFengShui();
</script>

<template>
  <UContainer class="my-6">
    <FengShuiHeader />

    <FengShuiOptions :feng-shui-categories="fengShuiCategories" />

    <FengShuiScore :total-score="totalScore" :score-rating="scoreRating" />

    <FengShuiSuggestions
      :selected-items-with-advice="selectedItemsWithAdvice"
    />
  </UContainer>
</template>
