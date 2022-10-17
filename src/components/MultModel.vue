<template>
  <div>
    input first
    <input
      :value="firstName"
      @input="$emit('update:firstName', ($event.target as HTMLInputElement).value)"
    />
  </div>
  <div>
    input second
    <input
      :value="secondName"
      @input="$emit('update:secondName', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  name: 'MultModel',
  props: {
    firstName: {
      type: [String, Number],
      default: ''
    },
    secondName: {
      type: [String, Number],
      default: ''
    }
  },
  emits: ['update:firstName', 'update:secondName'],
  setup: () => {
    let state = reactive({});

    return { ...toRefs(state) };
  }
});
</script>

<style lang="less" scoped></style>
