import { reactive } from 'vue'

export function useMobileToggle(keys) {
  const open = reactive(Object.fromEntries(keys.map(k => [k, false])))

  function toggleMobile(key) {
    if (window.innerWidth < 1024) {
      open[key] = !open[key]
    }
  }

  return { open, toggleMobile }
}