<template>
  <div class="font-Poppins bg-main-background">
    <!-- Header -->
    <header class="flex flex-row items-center bg-main-background px-6 py-6">
      <nav class="flex flex-col items-start justify-start flex-1">
        <h6 class="text-lg font-semibold">Get To Know More</h6>
        <h1 class="text-4xl sm:text-5xl font-bold">About Me!</h1>
      </nav>
    </header>

    <div class="flex flex-col gap-4 px-6 pb-8 lg:px-8">

      <!-- Brief Introduction: full width, always open -->
      <div class="w-full bg-card-bg icons-shader border-black border-2 p-6 sm:p-8">
        <label class="p-3 mb-4 inline-block border-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-xl sm:text-2xl font-bold tracking-tight text-black bg-cv-button border-black">
          Brief Introduction
          <Icon icon="mdi:information" class="inline ml-2" />
        </label>
        <div class="text-black space-y-4 font-normal text-sm sm:text-base leading-relaxed mt-2">
          <p v-for="(para, i) in briefIntro" :key="i" class="text-black text-sm sm:text-base">
                {{ para }}
              </p>
        </div>
      </div>

      <!-- Why QA and Growth Goals -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

        <!-- Why Software QA -->
        <div class="w-full bg-card-bg icons-shader border-black border-2">
          <button
            class="w-full flex items-center justify-between p-6 sm:p-8 lg:cursor-default"
            @click="toggleMobile('whyqa')"
          >
            <label class="label-card-about cursor-pointer lg:cursor-default">Why Software QA?</label>
            <Icon
              icon="mdi:chevron-down"
              class="text-xl transition-transform duration-300 lg:hidden"
              :class="{ 'rotate-180': open.whyqa }"
            />
          </button>
          <div
            class="overflow-hidden transition-all duration-300 lg:!max-h-none lg:!opacity-100"
            :class="open.whyqa ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100'"
          >
            <div class="space-y-4 px-6 pb-6 sm:px-8 sm:pb-8">
              <p v-for="(para, i) in whyQA" :key="i" class="text-black text-sm sm:text-base">
                {{ para }}
              </p>
            </div>
          </div>
        </div>

        <!-- Growth Goals -->
        <div class="w-full bg-card-bg icons-shader border-black border-2">
          <button
            class="w-full flex items-center justify-between p-6 sm:p-8 lg:cursor-default"
            @click="toggleMobile('growth')"
          >
            <label class="label-card-about cursor-pointer lg:cursor-default">
              Growth Goals
              <Icon icon="mdi:chart-bar" class="inline ml-2" />
            </label>
            <Icon
              icon="mdi:chevron-down"
              class="text-xl transition-transform duration-300 lg:hidden"
              :class="{ 'rotate-180': open.growth }"
            />
          </button>
          <div
            class="overflow-hidden transition-all duration-300 lg:!max-h-none lg:!opacity-100"
            :class="open.growth ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100'"
          >
            <div class="space-y-4 px-6 pb-6 sm:px-8 sm:pb-8">
              <p v-for="(para, i) in growthGoals" :key="i" class="text-black text-sm sm:text-base">
                {{ para }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useMobileToggle } from '@/composables/useMobileToggle'
const { open, toggleMobile } = useMobileToggle(['whyqa', 'growth'])
import { briefIntro, whyQA, growthGoals } from '@/data/aboutData'
</script>