<script setup lang="ts">
useSeoMeta({
  title: $t("title"),
  description: $t("description"),
});
</script>

<template>
  <UApp>
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <USeparator class="py-2" />

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
          <span class="font-semibold text-emerald-500">{{
            $t("idlegram")
          }}</span>
          by
          <a href="https://luojiahai.com" target="_blank" class="underline"
            >luojiahai</a
          >
        </p>
      </template>
    </UFooter>
  </UApp>
</template>
