<script setup lang="ts">
import { ref, onMounted, useAttrs, computed, defineAsyncComponent } from 'vue';
import TestOne from './testOne.vue';
import TestTwo from './testTwo.vue';
import MouseTest from './MouseModel.vue';
import MultModel from '@/components/MultModel.vue';
// import MultStepModel from '@/components/MultStepModel.vue';
import LoadingCom from '@/components/loading.vue';
import ErrorCom from '@/components/error.vue';
import TransCom from '@/components/transition.vue';
import classes from '../styles/module/test.module.css';
import { useMouse } from '@/hooks/mouse';
import { useCalc } from '@/hooks/calc';

defineProps<{ msg: string }>();

const AsyncCom = defineAsyncComponent({
  loader: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        return resolve(import('./asyncComponent.vue'));
      }, 10000);
    });
  },
  loadingComponent: LoadingCom,
  delay: 200,

  // 加载失败后展示的组件
  errorComponent: ErrorCom,
  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 20
});

// console.log($attrs)
const showTrans = ref<boolean>(true);
const firstName = ref(0);
const secondName = ref(0);
const ffirstName = ref(0);
const ssecondName = ref(0);
const count = ref(0);
const title = ref<string | number>(1234);
const attrs: any = useAttrs();
onMounted(() => {
  const tag = document.getElementById('test');
  (tag as HTMLElement).className = classes.big;

  console.log(attrs);
});
const testclick = () => {
  const num = useCalc(Math.random());
  console.log(num);
  console.log(11);
  console.log(attrs);
  attrs['onGoDown'](3);
  count.value = 2;
};
const clickTwo = (n: number | string): void => {
  console.log(n);
  title.value = n;
};

const { x: useX, y: useY } = useMouse();
const xy = computed(() => useX.value + ':' + useY.value);
</script>

<template>
  <AsyncCom />
  <button @click="showTrans = !showTrans">toggle showTrans --{{ showTrans }}</button>
  <TransCom>
    <div v-if="showTrans">Hello -- -- !!!</div>
  </TransCom>
  <h1>{{ msg }}</h1>
  <div>firstName {{ firstName }} --- secondName {{ secondName }}</div>
  <MultModel v-model:firstName="firstName" v-model:secondName="secondName" />
  <div>ffirstName {{ ffirstName }} --- ssecondName {{ ssecondName }}</div>
  <MultModel v-model:firstName="ffirstName" v-model:secondName="ssecondName" />
  <h1>useMouse: useX--{{ useX }}, useY---{{ useY }}</h1>
  <div>x+y = {{ xy }}</div>
  <test-one />
  <test-two :title="title" @do-click="clickTwo" />
  <MouseTest />
  <div @click="testclick">this is attrs {{ attrs }}</div>
  <div>this is $attrs {{ $attrs }}</div>

  <div class="card fz-20">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p id="test">
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the
    official Vue + Vite starter
  </p>
  <p class="w-100">
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <a v-bind="{ href: 'http://WWW.BAIDU.COM', target: '_blank' }">BAIDU</a>
</template>

<style scoped lang="less">
.read-the-docs {
  color: @red;
}
</style>
