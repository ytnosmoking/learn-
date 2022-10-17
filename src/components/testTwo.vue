<template>
  <div>
    <hr />
    <p>this is test {{ title }}</p>
    <button @click="clickTwo">two click</button>
    <hr />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string | number;
}

withDefaults(defineProps<Props>(), {
  title: 'this is default title'
});
const emit = defineEmits(['doClick']);

const clickTwo = () => {
  emit('doClick', Math.random());
};
</script>

<style lang="less" scoped></style>
