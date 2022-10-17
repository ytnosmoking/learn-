/// <reference types="vite/client" />

declare module '*.vue' {
  import type { defineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
  // const component: DefineComponent<{}, {}, any>;
  // export default component;
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
