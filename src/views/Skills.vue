<template>
  <section id="skills" class="section-pad border-t border-line">
    <div class="container-page">
      <SectionHeader
        eyebrow="Toolkit"
        title="A toolkit built around quality."
        description="The tools I use day to day, plus the QA practices that sit underneath them."
        scene="skills"
      />

      <div class="mt-12 grid gap-4 sm:grid-cols-2">
        <article
          v-for="(category, index) in categories"
          :key="category.label"
          v-reveal="index * 70"
          class="card p-6"
        >
          <div class="flex items-center gap-3">
            <span
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent"
            >
              <Icon :icon="category.icon" class="text-xl" aria-hidden="true" />
            </span>
            <div>
              <h3 class="font-display text-lg font-bold tracking-tight text-ink">
                {{ category.label }}
              </h3>
              <p class="mt-0.5 text-[12.5px] leading-relaxed text-ink-muted">
                {{ category.description }}
              </p>
            </div>
          </div>

          <div
            class="mt-6 grid gap-2.5"
            :class="category.skills.length <= 2 ? 'grid-cols-2' : 'grid-cols-3'"
          >
            <div
              v-for="skill in category.skills"
              :key="skill.label"
              class="flex flex-col items-center justify-center gap-2 rounded-xl border border-line bg-canvas px-2 py-4 text-center"
            >
              <Icon :icon="skill.icon" class="text-2xl text-ink" aria-hidden="true" />
              <span class="text-[12px] font-medium text-ink-muted">{{ skill.label }}</span>
            </div>
          </div>
        </article>
      </div>

      <div v-reveal class="card mt-6 p-6">
        <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p class="text-[12px] font-semibold text-ink-soft">
            Also in the toolkit
          </p>
          <p class="text-xs text-ink-muted">The practices behind the tools</p>
        </div>
        <div class="mt-4 flex flex-wrap gap-2">
          <span v-for="skill in additionalSkills" :key="skill" class="chip">{{ skill }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import SectionHeader from '@/components/SectionHeader.vue'
import { additionalSkills, categories } from '@/data/skillsData'
</script>
