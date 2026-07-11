import { ref } from 'vue'

export function useAccordion() {
  const openIndex = ref(null)

  const toggle = (index) => {
    openIndex.value = openIndex.value === index ? null : index
  }

  return { openIndex, toggle }
}