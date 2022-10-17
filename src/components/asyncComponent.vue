<template>
  <div>this is async components1112</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  name: 'AsyncComponent',
  setup: () => {
    let state = reactive({});

    return { ...toRefs(state) };
  }
});
</script>

<style lang="less" scoped></style>
