import {ref,onMounted} from 'vue';
export default function () {
const currentSection = ref('');
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        let adBox = entry.target;
        if (entry.intersectionRatio > 0) {
          currentSection.value = adBox.getAttribute('id');
        }
      });
    },
    {
      rootMargin:'0%  0px -90% 0px'
    },
  );
  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
  });
 
});
 
  return {
    currentSection,
  }
}



