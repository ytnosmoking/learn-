<template>
  <div>{{ title }}</div>
  <div>
    input first
    <input :value="firstName" @input="updateFirst($event?.target?.value)" />
  </div>
  <div>
    input second
    <input :value="secondName" @input="updateSecond($event?.target?.value)" />
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ref } from 'vue';
defineProps<{ firstName: string | number; secondName: string | number }>();
// {
//   firstName: {
//     type: [String, Number],
//       default: ''
//   },
//   secondName: {
//     type: [String, Number],
//       default: ''
//   },
// }
// {
//   firstName: String | Number,
//   secondName: String | Number
// }
const emit = defineEmits<{
  (event: 'update:firstName', value: string): void;
  (event: 'update:secondName', value: string): void;
}>();
// ['update:firstName', 'update:secondName']

const title = ref<string>('this is MultStepModel');

const updateFirst = (val: string) => emit('update:firstName', val);
const updateSecond = (val: string) => emit('update:secondName', val);

// import { ref, defineComponent, computed, reactive, toRefs } from 'vue';
// export default defineComponent({
//   props: {
//     firstName: String,
//     secondName: String,
//   },
//   emits: ['update:firstName', 'update:secondName'],
//   name: 'MultModel',
//   setup: () => {
//     let state = reactive({});

//     return { ...toRefs(state) };
//   },
// });
</script>

<style lang="less" scoped></style>
