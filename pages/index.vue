<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";

const state = reactive({
  door: undefined,
});

type Schema = typeof state;

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });
  console.log(event.data);
}
</script>

<template>
  <UContainer class="py-8">
    <UForm :state="state" class="space-y-4" @submit="onSubmit">
      <h1>{{ $t("title") }}</h1>
      <UFormField label="Door" name="door">
        <UInput v-model="state.door" type="text" />
      </UFormField>
      <UButton type="submit"> Submit </UButton>
    </UForm>
  </UContainer>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: bold;
}
</style>
