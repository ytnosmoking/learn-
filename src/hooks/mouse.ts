import { ref, onMounted, onUnmounted, Ref } from 'vue';

function useEventListener(
  target: HTMLElement | Window,
  event: keyof HTMLElementEventMap,
  callback: EventListenerOrEventListenerObject
) {
  onMounted(() => target.addEventListener(event, callback));
  onUnmounted(() => target.removeEventListener(event, callback));
}

type MouseXY = {
  x: Ref<number>;
  y: Ref<number>;
};

export function useMouse(): MouseXY {
  const x = ref(0);
  const y = ref(0);
  useEventListener(window, 'mousemove', event => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    x.value = event.pageX;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    y.value = event.pageY;
  });
  return { x, y };
}
