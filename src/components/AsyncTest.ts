import { defineAsyncComponent } from 'vue';
import LoadingCom from '@/components/loading.vue';
import ErrorCom from '@/components/error.vue';

const AsyncComponent = defineAsyncComponent({
  // loader: () => {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       return resolve(import('./asyncComponent.vue'));
  //     }, 2000);
  //   });
  // },
  loader: () => import('./asyncComponent.vue'),
  loadingComponent: LoadingCom,
  delay: 200,

  // 加载失败后展示的组件
  errorComponent: ErrorCom,
  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 2500
});

export default AsyncComponent;
