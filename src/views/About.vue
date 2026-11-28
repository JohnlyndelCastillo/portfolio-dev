<template>
  <section id="about" class="section-pad relative">
    <PixelBackdrop variant="about" />
    <div class="container-page relative z-10">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-4">
          <div class="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="About"
              title="Quality is a habit, not a final step."
              description="I'm a QA engineer who cares about how software behaves in the real world, not just whether it matches the happy path."
            />

            <router-link
              to="/#experience"
              class="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition hover:text-accent"
            >
              See my experience
              <Icon icon="mdi:arrow-right" class="text-base" aria-hidden="true" />
            </router-link>
          </div>
        </div>

        <div class="lg:col-span-8">
          <div v-reveal class="space-y-5 text-[17px] leading-[1.75] text-ink-muted sm:text-[19px]">
            <p v-for="(para, index) in briefIntro" :key="index">
              {{ para }}
            </p>
          </div>

          <dl
            v-reveal="80"
            class="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4"
          >
            <div v-for="fact in quickFacts" :key="fact.label" class="bg-surface p-4 sm:p-5">
              <dt class="text-[11px] font-medium text-ink-soft">
                {{ fact.label }}
              </dt>
              <dd class="mt-2 text-sm font-semibold leading-snug text-ink">{{ fact.value }}</dd>
            </div>
          </dl>

          <div class="mt-6 grid gap-4 md:grid-cols-2">
            <article
              v-for="(card, index) in cards"
              :key="card.title"
              v-reveal="index * 90"
              class="card p-6"
            >
              <span
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent"
              >
                <Icon :icon="card.icon" class="text-xl" aria-hidden="true" />
              </span>
              <h3 class="mt-5 font-display text-lg font-bold tracking-tight text-ink">
                {{ card.title }}
              </h3>
              <div class="mt-2 space-y-2 text-[14.5px] leading-[1.7] text-ink-muted">
                <p v-for="(para, paraIndex) in card.paragraphs" :key="paraIndex">{{ para }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import PixelBackdrop from '@/components/PixelBackdrop.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import { briefIntro, growthGoals, whyQA } from '@/data/aboutData'
import { quickFacts } from '@/data/siteData'

const cards = [
  {
    title: 'Why software QA?',
    icon: 'mdi:compass-outline',
    paragraphs: whyQA,
  },
  {
    title: "Where I'm headed",
    icon: 'mdi:trending-up',
    paragraphs: growthGoals,
  },
]
</script>
