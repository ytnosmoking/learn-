<template>
  <div>THIS IS Error ......</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  name: 'ERROR',
  setup: () => {
    let state = reactive({});

    return { ...toRefs(state) };
  }
});
</script>

<style lang="less" scoped></style>
