const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const reveal = {
  mounted(el, binding) {
    if (prefersReducedMotion()) {
      el.classList.add('is-visible')
      return
    }

    el.classList.add('reveal')

    const delay = typeof binding.value === 'number' ? binding.value : 0
    if (delay) el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    el._revealObserver = observer
  },

  unmounted(el) {
    el._revealObserver?.disconnect()
    delete el._revealObserver
  },
}
