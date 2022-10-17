<template>
  <div>Mouse position is at : x {{ x }}, y:{{ y }}</div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, Ref } from 'vue';

const x: Ref<number> = ref(0);
const y = ref<number>(0);
const update = (event: MouseEvent) => {
  x.value = event.pageX;
  y.value = event.pageY;
};
onMounted(() => {
  window.addEventListener('mousemove', update);
});
onUnmounted(() => {
  window.removeEventListener('mousemove', update);
});
</script>

<style lang="less" scoped></style>
