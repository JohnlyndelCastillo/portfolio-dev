<template>
  <div class="flex flex-col md:flex-row font-Poppins">

    <!-- Terminal panel -->
    <div class="flex items-center justify-center w-full md:w-1/2 bg-[url('/ColoredShapes.svg')] bg-cover p-8 min-h-[40vh] md:min-h-0">
      <div class="w-full max-w-sm border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-card-bg font-mono text-sm">

        <!-- Title bar -->
        <div class="flex items-center gap-2 px-4 py-2 bg-cv-button border-b-2 border-black">
          <span class="w-3 h-3 rounded-full border border-black bg-red-400"></span>
          <span class="w-3 h-3 rounded-full border border-black bg-yellow-300"></span>
          <span class="w-3 h-3 rounded-full border border-black bg-green-400"></span>
          <span class="ml-2 text-black text-xs font-semibold">qa-runner — bash</span>
        </div>

        <!-- Terminal body -->
        <div class="p-4 min-h-[240px]">
          <div v-for="(line, i) in visibleLines" :key="i" class="leading-6">
            <!-- Typed text -->
            <span :class="line.class">{{ line.displayed }}</span>
            <!-- Blinking cursor on the currently-typing line -->
            <span
              v-if="i === visibleLines.length - 1 && !done"
              class="inline-block w-[2px] h-4 bg-black align-middle animate-pulse ml-px"
            ></span>
          </div>
          <!-- Idle cursor after everything is done -->
          <div v-if="done" class="leading-6">
            <span class="text-black">$ </span>
            <span class="inline-block w-[2px] h-4 bg-black align-middle animate-pulse"></span>
          </div>
        </div>

      </div>
    </div>

    <!-- Text content -->
    <div class="flex flex-col items-start justify-center md:justify-start w-full md:w-1/2 bg-main-background p-8 gap-3 md:pt-24">
      <h6 class="text-lg font-semibold">Hello, I'm</h6>
      <h1 class="text-4xl sm:text-5xl font-bold leading-tight">Johnlyn del Castillo</h1>
      <h6 class="text-base sm:text-lg font-bold text-gray-700">Junior Software QA Engineer</h6>

      <button class="mt-6 border-black border-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-3 font-semibold bg-cv-button cursor-pointer hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2">
        Download CV
        <Icon icon="mdi:download" class="text-xl" />
      </button>

      <div class="flex flex-row gap-3 mt-4">
        <a href="https://www.linkedin.com/in/johnlyn-del-castillo" target="_blank" rel="noopener noreferrer"
          class="w-12 h-12 flex items-center justify-center icons-shader bg-linkedin cursor-pointer">
          <Icon icon="mdi:linkedin" class="text-xl" />
        </a>
        <a href="https://github.com/JohnlyndelCastillo" target="_blank" rel="noopener noreferrer"
          class="w-12 h-12 flex items-center justify-center icons-shader bg-github cursor-pointer">
          <Icon icon="mdi:github" class="text-xl" />
        </a>
        <a href="mailto:johnlyndelcastillo@gmail.com"
          class="w-12 h-12 flex items-center justify-center icons-shader bg-gmail cursor-pointer">
          <Icon icon="mdi:email" class="text-xl" />
        </a>
      </div>
    </div>

  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useTerminal } from '@/composables/useTerminal'
const { visibleLines, done } = useTerminal()
</script> 