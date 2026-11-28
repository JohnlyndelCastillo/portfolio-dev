<template>
  <section id="experience" class="section-pad relative overflow-hidden">
    <PixelBackdrop variant="experience" />
    <div class="container-page relative z-10">
      <SectionHeader
        eyebrow="Experience"
        title="A short track record of shipping quality."
        description="From QA intern to full-time engineer — a timeline of learning how software breaks, and how to catch it early."
      />

      <ol class="mt-12">
        <li
          v-for="(item, index) in timeline"
          :key="item.title"
          class="relative pb-10 pl-9 last:pb-0 sm:pl-0"
        >
          <span
            class="absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-line bg-canvas sm:hidden"
            aria-hidden="true"
          >
            <span
              class="h-2 w-2 rounded-full"
              :class="item.current ? 'bg-accent' : 'bg-ink-soft'"
            ></span>
          </span>
          <span
            v-if="index < timeline.length - 1"
            class="absolute bottom-0 left-[9px] top-7 w-px bg-line sm:hidden"
            aria-hidden="true"
          ></span>

          <div class="grid gap-3 sm:grid-cols-[9.5rem_1.25rem_1fr] sm:gap-0">
            <div class="sm:pr-6 sm:pt-1">
              <p class="text-[12px] font-medium text-ink-soft">
                {{ item.year }}
              </p>
              <span
                v-if="item.current"
                class="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold text-accent"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-accent"></span>
                Current
              </span>
            </div>

            <div class="relative hidden sm:block" aria-hidden="true">
              <span
                class="absolute left-1/2 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-canvas"
                :class="item.current ? 'bg-accent' : 'bg-ink-soft'"
              ></span>
              <span
                v-if="index < timeline.length - 1"
                class="absolute bottom-[-2.5rem] left-1/2 top-6 w-px -translate-x-1/2 bg-line"
              ></span>
            </div>

            <article v-reveal="index * 60" class="card p-5 sm:ml-6 sm:p-6">
              <h3 class="font-display text-lg font-bold tracking-tight text-ink">
                {{ item.title }}
              </h3>
              <p class="mt-1 text-sm font-medium text-accent">{{ item.org }}</p>
              <p class="mt-3 text-[14.5px] leading-[1.7] text-ink-muted">{{ item.description }}</p>
            </article>
          </div>
        </li>
      </ol>

      <div class="mt-16 border-t border-line pt-12">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="eyebrow">
              <span class="eyebrow-dot" aria-hidden="true"></span>
              Recognition
            </p>
            <h3 class="mt-3 font-display text-2xl font-bold tracking-tight text-ink">
              Awards &amp; recognition
            </h3>
          </div>
          <p class="max-w-xs text-sm leading-relaxed text-ink-muted">
            A few moments from the journey worth keeping.
          </p>
        </div>

        <div class="mt-6 grid gap-4 sm:grid-cols-3">
          <button
            v-for="(award, index) in awards"
            :key="award.title"
            v-reveal="index * 70"
            type="button"
            class="card card-hover group flex h-full flex-col p-5 text-left"
            aria-haspopup="dialog"
            @click="selectedAward = award"
          >
            <div class="flex items-start justify-between gap-3">
              <span
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent"
              >
                <Icon :icon="award.icon" class="text-xl" aria-hidden="true" />
              </span>
              <Icon
                icon="mdi:arrow-up-right"
                class="text-lg text-ink-soft transition duration-200 group-hover:text-accent"
                aria-hidden="true"
              />
            </div>
            <p class="mt-5 font-display text-base font-bold tracking-tight text-ink">
              {{ award.title }}
            </p>
            <p class="mt-1 text-xs text-ink-muted">{{ award.org }}</p>
            <p class="mt-4 text-[11px] font-medium text-ink-soft">
              {{ award.files.length }} certificate{{ award.files.length > 1 ? 's' : '' }}
            </p>
          </button>
        </div>
      </div>
    </div>

    <AwardModal v-if="selectedAward" :award="selectedAward" @close="selectedAward = null" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import PixelBackdrop from '@/components/PixelBackdrop.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import AwardModal from '@/components/AwardModal.vue'
import { awards, timeline } from '@/data/timelineData'

const selectedAward = ref(null)
</script>
