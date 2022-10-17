<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
import LoadingCom from '@/components/loading.vue';
import ErrorCom from '@/components/error.vue';
import TestOne from '@/components/testOne.vue';
import MyTrans from '@/components/transition.vue';
import { ref, computed, onMounted } from 'vue';
const goDown = (a: number) => {
  console.log(a);
};

enum RouteName {
  base = '/',
  loading = '/loading',
  error = '/error'
}

const routes: Record<RouteName, any> = {
  '/': TestOne,
  '/loading': LoadingCom,
  '/error': ErrorCom
};
const currentPath = ref<string>(window.location.hash);
const currentView = computed(() => {
  return routes[(currentPath.value.slice(1) as RouteName) || RouteName.base] || TestOne;
});
onMounted(() => {
  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash;
  });
});
</script>

<template>
  <a href="#/">Home</a> | <a href="#/loading">About</a> |
  <a href="#/error">error</a>
  <MyTrans mode="out-in">
    <component :is="currentView" />
  </MyTrans>
  <hr />
  <HelloWorld msg="Vite + Vue 11" title="1234" @go-down="goDown" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
