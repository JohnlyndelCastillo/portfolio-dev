<template>
  <header class="sticky top-0 z-50 border-b border-line/80 bg-canvas/85 backdrop-blur-xl">
    <div class="container-page flex h-[72px] items-center justify-between">
      <router-link
        to="/#profile"
        class="group flex items-center gap-2.5 rounded-full"
        aria-label="Johnlyn del Castillo — home"
        @click="closeMenu"
      >
        <span
          class="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111614] text-white shadow-sm transition duration-300 ease-smooth group-hover:bg-accent-dark dark:bg-[#16211D] dark:ring-1 dark:ring-white/10"
        >
          <Icon icon="mdi:check-bold" class="text-lg text-[#6EE7B7]" aria-hidden="true" />
        </span>
        <span class="font-display text-lg font-extrabold tracking-[-0.03em] text-ink">
          jdc<span class="text-accent">.</span>
        </span>
      </router-link>

      <nav class="hidden items-center gap-1 lg:flex" aria-label="Primary">
        <router-link
          v-for="item in navItems"
          :key="item.id"
          :to="`/#${item.id}`"
          class="relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200"
          :class="active === item.id ? 'text-ink' : 'text-ink-muted hover:text-ink'"
          :aria-current="active === item.id ? 'true' : undefined"
        >
          {{ item.label }}
          <span
            v-if="active === item.id"
            class="absolute inset-x-3.5 -bottom-0.5 h-px bg-accent"
            aria-hidden="true"
          ></span>
        </router-link>
      </nav>

      <div class="hidden items-center gap-2 lg:flex">
        <button
          type="button"
          class="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink-muted transition hover:border-ink/25 hover:text-ink"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="isDark ? 'Light mode' : 'Dark mode'"
          @click="toggleDark"
        >
          <Icon :icon="isDark ? 'mdi:weather-sunny' : 'mdi:weather-night'" class="text-base" aria-hidden="true" />
        </button>
        <router-link
          to="/resume"
          class="rounded-full px-3.5 py-2 text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-ink"
        >
          Resume
        </router-link>
        <router-link to="/#contact" class="btn-primary !px-4 !py-2.5 text-[13px]">
          Let's talk
          <Icon icon="mdi:arrow-up-right" class="text-base" aria-hidden="true" />
        </router-link>
      </div>

      <div class="flex items-center gap-2 lg:hidden">
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink-muted transition hover:border-ink/20 hover:text-ink"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="isDark ? 'Light mode' : 'Dark mode'"
          @click="toggleDark"
        >
          <Icon :icon="isDark ? 'mdi:weather-sunny' : 'mdi:weather-night'" class="text-lg" aria-hidden="true" />
        </button>
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition hover:border-ink/20"
          :aria-expanded="isOpen"
          aria-controls="mobile-navigation"
          :aria-label="isOpen ? 'Close navigation menu' : 'Open navigation menu'"
          @click="toggleMenu"
        >
          <Icon :icon="isOpen ? 'mdi:close' : 'mdi:menu'" class="text-xl" aria-hidden="true" />
        </button>
      </div>
    </div>

    <Transition name="menu">
      <div
        v-if="isOpen"
        id="mobile-navigation"
        class="absolute inset-x-0 top-full max-h-[calc(100vh-72px)] overflow-y-auto border-t border-line bg-canvas shadow-lg lg:hidden"
      >
        <nav class="container-page flex flex-col py-4" aria-label="Mobile">
          <router-link
            v-for="item in navItems"
            :key="item.id"
            :to="`/#${item.id}`"
            class="flex items-center justify-between border-b border-line/70 py-3.5 text-base font-medium text-ink"
            @click="closeMenu"
          >
            {{ item.label }}
            <Icon icon="mdi:arrow-up-right" class="text-ink-soft" aria-hidden="true" />
          </router-link>
          <router-link to="/#contact" class="btn-primary mt-4 w-full" @click="closeMenu">
            Let's talk
            <Icon icon="mdi:arrow-up-right" class="text-base" aria-hidden="true" />
          </router-link>
          <router-link
            to="/resume"
            class="mt-3 inline-flex items-center justify-center gap-2 py-2 text-sm font-medium text-ink-muted"
            @click="closeMenu"
          >
            View resume
            <Icon icon="mdi:arrow-right" class="text-base" aria-hidden="true" />
          </router-link>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { navItems } from '@/data/siteData'
import { useScrollSpy } from '@/composables/useScrollSpy'
import { useTheme } from '@/composables/useTheme'

const route = useRoute()
const isOpen = ref(false)
const { active } = useScrollSpy(navItems.map((item) => item.id))
const { isDark, toggleDark } = useTheme()

let previousOverflow = ''

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

function handleKeydown(event) {
  if (event.key === 'Escape') closeMenu()
}

watch(isOpen, (open) => {
  if (typeof document === 'undefined') return

  if (open) {
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = previousOverflow
  }
})

watch(
  () => route.fullPath,
  () => closeMenu(),
)

onMounted(() => window.addEventListener('keydown', handleKeydown))

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = previousOverflow
})
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
