import { computed, ref } from 'vue'

const STORAGE_KEY = 'jdc-theme'

function detectTimePeriod(hour = new Date().getHours()) {
  if (hour >= 5 && hour < 11) return 'morning'
  if (hour >= 11 && hour < 17) return 'day'
  if (hour >= 17 && hour < 20) return 'dusk'
  return 'night'
}

const isDark = ref(false)
const timePeriod = ref(detectTimePeriod())
let initialized = false

function applyTheme(dark) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  root.classList.toggle('dark', dark)
  root.style.colorScheme = dark ? 'dark' : 'light'

  const metaTheme = document.querySelector('meta[name="theme-color"]')
  if (metaTheme) {
    metaTheme.setAttribute('content', dark ? '#0B110F' : '#F7F6F1')
  }
}

export function initTheme() {
  if (initialized || typeof window === 'undefined') return
  initialized = true

  timePeriod.value = detectTimePeriod()
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'dark' || saved === 'light') {
    isDark.value = saved === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme(isDark.value)
}

export function useTheme() {
  initTheme()

  function toggleDark() {
    isDark.value = !isDark.value
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, isDark.value ? 'dark' : 'light')
    }
    applyTheme(isDark.value)
  }

  const sceneryMood = computed(() => (isDark.value ? 'night' : timePeriod.value))

  return {
    isDark,
    timePeriod,
    sceneryMood,
    toggleDark,
  }
}
