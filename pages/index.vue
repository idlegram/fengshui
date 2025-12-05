<script setup lang="ts">
import type { InputMenuItem } from "@nuxt/ui";

const inputMenuItems = ref<InputMenuItem[]>([
  {
    label: "Backlog",
    id: "backlog",
  },
  {
    label: "Todo",
    id: "todo",
  },
  {
    label: "In Progress",
    id: "in_progress",
  },
  {
    label: "Done",
    id: "done",
  },
]);

type State = {
  input: string;
  inputMenu: string;
  inputNumber: number;
};

const state = reactive<State>({
  input: "",
  inputMenu: "todo",
  inputNumber: 0,
});
</script>

<template>
  <UContainer class="py-8">
    <UForm :state="state" class="space-y-4">
      <h1 class="text-2xl font-bold">{{ $t("title") }}</h1>
      <UFormField label="Input" name="input">
        <UInput
          v-model="state.input"
          type="text"
          @update:model-value="
            (value) => {
              console.log('input changed:', value);
              console.log('input state:', state.input);
            }
          "
        />
      </UFormField>
      <UFormField label="InputMenu" name="inputMenu">
        <UInputMenu
          v-model="state.inputMenu"
          value-key="id"
          :items="inputMenuItems"
          @update:model-value="
            (value) => {
              console.log('inputMenu changed:', value);
              console.log('inputMenu state:', state.inputMenu);
            }
          "
        />
      </UFormField>
      <UFormField label="InputNumber" name="inputNumber">
        <UInputNumber
          v-model="state.inputNumber"
          :increment="false"
          :decrement="false"
          @update:model-value="
            (value) => {
              console.log('inputNumber changed:', value);
              console.log('inputNumber state:', state.inputNumber);
            }
          "
        />
      </UFormField>
    </UForm>
    <UCard class="my-8">
      <p>Input: {{ state.input }}</p>
      <p>InputMenu: {{ state.inputMenu }}</p>
      <p>InputNumber: {{ state.inputNumber }}</p>
    </UCard>
  </UContainer>
</template>
