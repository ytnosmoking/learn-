<template>
  <div>
    <hr />
    <p>this is test {{ title }}</p>
    <button>One click</button>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  name: 'TESTONE',
  setup: () => {
    let state = reactive({ title: 'test one' });

    return { ...toRefs(state) };
  }
});
</script>

<style lang="less" scoped></style>
