<template>
  <section id="work" class="section-pad border-t border-line bg-surface">
    <div class="container-page">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          eyebrow="Selected work"
          title="Built to solve a real problem."
          description="Five builds that show how I think about data, workflows, and the people using them."
          scene="work"
        />

        <a
          :href="site.github"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-secondary shrink-0 self-start sm:self-auto"
        >
          More on GitHub
          <Icon icon="mdi:arrow-up-right" class="text-base" aria-hidden="true" />
        </a>
      </div>

      <div
        class="relative mt-8 sm:mt-12"
        role="region"
        aria-roledescription="carousel"
        aria-label="Selected projects"
      >
        <div class="flex items-center justify-between gap-4 sm:hidden">
          <p class="text-[12px] font-medium text-ink-soft">
            <span class="font-semibold text-ink">
              {{ String(activeIndex + 1).padStart(2, '0') }}
            </span>
            <span class="mx-1 text-ink/30">/</span>
            {{ String(projects.length).padStart(2, '0') }}
          </p>

          <div class="flex items-center gap-2">
            <button
              type="button"
              class="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition duration-200 hover:border-ink/25 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35"
              :disabled="activeIndex === 0"
              aria-label="Previous project"
              aria-controls="project-track"
              @click="goTo(activeIndex - 1)"
            >
              <Icon icon="mdi:arrow-left" class="text-base" aria-hidden="true" />
            </button>
            <button
              type="button"
              class="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition duration-200 hover:border-ink/25 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35"
              :disabled="activeIndex === projects.length - 1"
              aria-label="Next project"
              aria-controls="project-track"
              @click="goTo(activeIndex + 1)"
            >
              <Icon icon="mdi:arrow-right" class="text-base" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          id="project-track"
          ref="track"
          class="scrollbar-hide -mx-5 mt-4 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto overscroll-x-contain scroll-smooth scroll-pl-5 px-5 pb-2 sm:mx-0 sm:mt-0 sm:grid sm:auto-rows-fr sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
          @scroll.passive="handleScroll"
        >
          <article
            v-for="(project, index) in projects"
            :key="project.id"
            v-reveal="index * 60"
            role="group"
            aria-roledescription="slide"
            :aria-label="`${index + 1} of ${projects.length}: ${project.title}`"
            class="card card-hover group flex w-[85%] shrink-0 snap-start flex-col p-5 sm:w-auto sm:p-6"
          >
            <div class="flex items-center justify-between gap-3">
              <span class="text-[12px] font-semibold text-ink-soft">
                {{ project.index }}
              </span>
              <span
                class="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold"
                :class="
                  project.private
                    ? 'bg-ink/[0.04] text-ink-muted'
                    : 'bg-accent-soft text-accent'
                "
              >
                {{ project.type }}
              </span>
            </div>

            <h3 class="mt-4 font-display text-lg font-bold tracking-tight text-ink sm:mt-5 sm:text-xl">
              {{ project.title }}
            </h3>
            <p class="mt-2 text-[13.5px] leading-[1.6] text-ink-muted sm:text-[14.5px] sm:leading-[1.7]">
              {{ project.description }}
            </p>

            <ul class="mt-4 space-y-1.5 sm:mt-5 sm:space-y-2">
              <li
                v-for="highlight in project.highlights"
                :key="highlight"
                class="flex items-start gap-2 text-[13px] leading-[1.5] text-ink-muted sm:text-[13.5px] sm:leading-[1.55]"
              >
                <Icon
                  icon="mdi:check"
                  class="mt-0.5 shrink-0 text-sm text-accent"
                  aria-hidden="true"
                />
                <span>{{ highlight }}</span>
              </li>
            </ul>

            <div class="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
              <span v-for="tech in project.tech" :key="tech.name" class="chip">
                <span
                  class="h-1.5 w-1.5 rounded-full"
                  :style="{ backgroundColor: tech.color }"
                  aria-hidden="true"
                ></span>
                {{ tech.name }}
              </span>
            </div>

            <div class="mt-auto pt-5 sm:pt-6">
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="group/link flex items-center justify-between border-t border-line pt-3.5 text-[13px] font-semibold text-ink transition hover:text-accent sm:pt-4 sm:text-sm"
              >
                View repository
                <Icon
                  icon="mdi:arrow-up-right"
                  class="text-base transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <div
                v-else
                class="flex items-center justify-between border-t border-line pt-3.5 text-[13px] text-ink-soft sm:pt-4 sm:text-sm"
              >
                <span>Private repository</span>
                <Icon icon="mdi:lock-outline" class="text-base" aria-hidden="true" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import SectionHeader from '@/components/SectionHeader.vue'
import { projects } from '@/data/projectsData'
import { site } from '@/data/siteData'

const track = ref(null)
const activeIndex = ref(0)
let scrollFrame = null

function updateActiveIndex() {
  const el = track.value
  if (!el || window.innerWidth >= 640) return

  const center = el.getBoundingClientRect().left + el.clientWidth / 2
  let closest = 0
  let closestDistance = Infinity

  Array.from(el.children).forEach((child, index) => {
    const rect = child.getBoundingClientRect()
    const distance = Math.abs(rect.left + rect.width / 2 - center)
    if (distance < closestDistance) {
      closest = index
      closestDistance = distance
    }
  })

  activeIndex.value = closest
}

function handleScroll() {
  if (scrollFrame !== null) return
  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = null
    updateActiveIndex()
  })
}

function goTo(index) {
  const el = track.value
  const nextIndex = Math.max(0, Math.min(projects.length - 1, index))
  const child = el?.children[nextIndex]
  if (!el || !child) return

  const trackRect = el.getBoundingClientRect()
  const childRect = child.getBoundingClientRect()
  const scrollPadding = Number.parseFloat(getComputedStyle(el).scrollPaddingLeft) || 0

  el.scrollTo({
    left: el.scrollLeft + childRect.left - trackRect.left - scrollPadding,
    behavior: 'smooth',
  })
  activeIndex.value = nextIndex
}

function handleResize() {
  updateActiveIndex()
}

onMounted(() => window.addEventListener('resize', handleResize, { passive: true }))

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  if (scrollFrame !== null) cancelAnimationFrame(scrollFrame)
})
</script>
