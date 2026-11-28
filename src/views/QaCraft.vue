<template>
  <section id="craft" class="section-pad relative overflow-hidden border-y border-line bg-surface">
    <PixelBackdrop variant="craft" />
    <div class="container-page relative z-10">
      <SectionHeader
        eyebrow="QA craft"
        title="Testing is a system, not a checklist."
        description="I combine structured test design with automation and AI-assisted workflows, so coverage stays intentional as the product grows."
      />

      <div
        class="mt-8 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px] font-medium text-ink-soft"
        aria-label="Quality workflow"
      >
        <span>Requirements</span>
        <Icon icon="mdi:arrow-right" class="text-xs" aria-hidden="true" />
        <span>Risk</span>
        <Icon icon="mdi:arrow-right" class="text-xs" aria-hidden="true" />
        <span>Coverage</span>
        <Icon icon="mdi:arrow-right" class="text-xs" aria-hidden="true" />
        <span>Regression</span>
        <Icon icon="mdi:arrow-right" class="text-xs" aria-hidden="true" />
        <span class="text-accent">Release</span>
      </div>

      <div class="mt-10 grid gap-4 sm:grid-cols-2">
        <article
          v-for="(step, index) in craftSteps"
          :key="step.number"
          v-reveal="index * 70"
          class="group card card-hover relative overflow-hidden p-6 sm:p-7"
        >
          <div class="flex items-start justify-between gap-4">
            <span class="text-[12px] font-semibold text-ink-soft">
              {{ step.number }}
            </span>
            <span
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent transition duration-300 group-hover:bg-accent group-hover:text-white dark:group-hover:text-[#0B110F]"
            >
              <Icon :icon="step.icon" class="text-xl" aria-hidden="true" />
            </span>
          </div>

          <h3 class="mt-6 font-display text-xl font-bold tracking-tight text-ink">
            {{ step.title }}
          </h3>
          <p class="mt-2 text-[14.5px] leading-[1.7] text-ink-muted">{{ step.description }}</p>

          <div class="mt-5 flex flex-wrap gap-2">
            <span v-for="tag in step.tags" :key="tag" class="chip">{{ tag }}</span>
          </div>

          <span
            class="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 ease-smooth group-hover:w-full"
            aria-hidden="true"
          ></span>
        </article>
      </div>

      <div
        v-reveal
        class="mt-6 flex flex-col gap-4 rounded-2xl border border-line bg-canvas p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
      >
        <div class="flex items-start gap-3">
          <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#111614] text-[#6EE7B7] dark:bg-[#0C1311] dark:ring-1 dark:ring-white/10">
            <Icon icon="mdi:robot-outline" class="text-xl" aria-hidden="true" />
          </span>
          <div>
            <p class="font-display text-base font-bold tracking-tight text-ink">
              Currently building agentic QA workflows
            </p>
            <p class="mt-1 text-[14.5px] leading-[1.7] text-ink-muted">
              Claude Code + MCPs for test design, bug reports, and regression analysis.
            </p>
          </div>
        </div>
        <span class="chip self-start sm:self-auto">
          <span class="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent"></span>
          In progress
        </span>
      </div>

      <div v-reveal class="mt-10">
        <p class="eyebrow">
          <span class="eyebrow-dot" aria-hidden="true"></span>
          Daily practice
        </p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span v-for="practice in dailyPractices" :key="practice" class="chip">
            {{ practice }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import PixelBackdrop from '@/components/PixelBackdrop.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import { craftSteps, dailyPractices } from '@/data/qaCraft'
</script>
