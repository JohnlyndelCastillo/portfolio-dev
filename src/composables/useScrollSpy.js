import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useScrollSpy(ids, offset = 100) {
  const active = ref('')
  let sections = []
  let ticking = false

  function update() {
    ticking = false

    const scrollPosition = window.scrollY + offset
    let current = ''

    for (const section of sections) {
      const top = section.getBoundingClientRect().top + window.scrollY
      if (top <= scrollPosition) current = section.id
    }

    active.value = current
  }

  function onScroll() {
    if (ticking) return
    ticking = true
    window.requestAnimationFrame(update)
  }

  onMounted(() => {
    sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
  })

  return { active }
}
