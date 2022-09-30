<template>
  <transition name="my-transition">
    <slot />
  </transition>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  name: 'TransitionVue',
  setup: () => {
    let state = reactive({});

    return { ...toRefs(state) };
  }
});
</script>

<style lang="less" scoped>
.my-transition-enter-active,
.my-transition-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.my-transition-leave-active {
  transition-delay: 0.25s;
}

.my-transition-enter-from,
.my-transition-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>
