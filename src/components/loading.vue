<template>
  <div>THIS IS lOADING ......</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  name: 'LOADING',
  setup: () => {
    let state = reactive({});

    return { ...toRefs(state) };
  }
});
</script>

<style lang="less" scoped></style>
