<script setup lang="ts">
const { score, rating, suggestions, fengShuiCategories } = useFengShui();
</script>

<template>
  <UContainer class="my-6">
    <FengShuiHeader />
    <FengShuiOptions :categories="fengShuiCategories" />
    <FengShuiScore :score="score" :rating="rating" />
    <FengShuiSuggestions :suggestions="suggestions" />
  </UContainer>
</template>
