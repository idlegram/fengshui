<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";
import { SpeedInsights } from "@vercel/speed-insights/nuxt";

const { t } = useI18n();

useSeoMeta({
  title: t("title"),
  description: t("description"),
});
</script>

<template>
  <UApp>
    <Analytics />
    <SpeedInsights />

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
          <span class="font-semibold text-primary">{{ $t("idlegram") }}</span>
          by
          <a href="https://luojiahai.com" target="_blank" class="underline"
            >luojiahai</a
          >
        </p>
      </template>
    </UFooter>
  </UApp>
</template>
