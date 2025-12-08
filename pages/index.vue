<script setup lang="ts">
const { score, rating } = useFengShui();
</script>

<template>
  <UContainer class="my-6">
    <FengShuiHeader />
    <FengShuiOptions />
    <FengShuiScore :score="score" :rating="rating" />
  </UContainer>
</template>
