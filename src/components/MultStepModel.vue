<template>
  <div>{{ title }}</div>
  <div>
    input first
    <input :value="firstName" @input="updateFirst" />
  </div>
  <div>
    input second
    <input :value="secondName" @input="updateSecond" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
defineProps<{ firstName: string | number; secondName: string | number }>();

const emit = defineEmits<{
  (event: 'update:firstName', value: string): void;
  (event: 'update:secondName', value: string): void;
}>();

const title = ref<string>('this is MultStepModel');

const updateFirst = (event: Event) =>
  emit('update:firstName', (event.target as HTMLInputElement).value);
const updateSecond = (event: Event) =>
  emit('update:secondName', (event.target as HTMLInputElement).value);
</script>

<style lang="less" scoped></style>
