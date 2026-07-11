<template>
  <div class="flex flex-col md:flex-row font-Poppins">
    <!-- Profile picture -->
    <div class="flex items-center justify-center w-full md:w-1/2 bg-[url('/ColoredShapes.svg')] bg-cover p-8 min-h-[40vh] md:min-h-0">
      <img
        src="/Company_profile.jpg"
        alt="Johnlyn del Castillo profile photo"
        class="w-56 h-64 sm:w-72 sm:h-80 md:w-94 md:h-96 border-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-black object-cover"
      />
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
        <div class="w-12 h-12 flex items-center justify-center icons-shader bg-facebook cursor-pointer">
          <Icon icon="mdi:linkedin" class="text-xl" />
        </div>
        <div class="w-12 h-12 flex items-center justify-center icons-shader bg-github cursor-pointer">
          <Icon icon="mdi:github" class="text-xl" />
        </div>
        <div class="w-12 h-12 flex items-center justify-center icons-shader bg-gmail cursor-pointer">
          <Icon icon="mdi:email" class="text-xl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>