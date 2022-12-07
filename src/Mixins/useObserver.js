import {ref} from 'vue';
import {useIntersectionObserver} from '@vueuse/core';
export default function () {
const obs = ref(null);
const isVisible = ref(false);
function inObse() {
    const {stop} = useIntersectionObserver(
      obs,
      ([{isIntersecting}], observerElement) => {
        isVisible.value = isIntersecting;
        if (isIntersecting) {
          stop()
        }
      },
    );
  }
 
  return {
    obs,
    isVisible,
    inObse
  }
}
