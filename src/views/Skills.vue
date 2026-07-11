<template>
  <div class="font-Poppins bg-main-background">
    <!-- Header -->
    <header class="flex flex-row items-center bg-main-background px-6 py-6">
      <nav class="flex flex-col items-center justify-center flex-1">
        <h6 class="text-lg font-semibold">What I Work With</h6>
        <h1 class="text-4xl sm:text-5xl font-bold">Skills</h1>
      </nav>
    </header>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 pb-8 lg:px-8">

      <!-- Testing Tools -->
      <div class="bg-card-bg icons-shader border-black border-2 p-6">
        <p class="skills-card-label mb-6">Testing Tools</p>
        <div class="grid grid-cols-3 gap-5 place-items-center mt-6">
          <div class="skills-icon-shader">
            <Icon icon="simple-icons:playwright" class="text-4xl sm:text-5xl" />
          </div>
          <div class="skills-icon-shader">
            <Icon icon="simple-icons:cypress" class="text-4xl sm:text-5xl" />
          </div>
          <div class="skills-icon-shader">
            <Icon icon="simple-icons:postman" class="text-4xl sm:text-5xl" />
          </div>
        </div>
      </div>

      <!-- Version Control -->
      <div class="bg-card-bg icons-shader border-black border-2 p-6">
        <p class="skills-card-label mb-6">Version Control</p>
        <div class="grid grid-cols-3 gap-5 place-items-center mt-6">
          <div class="skills-icon-shader">
            <Icon icon="mdi:git" class="text-4xl sm:text-5xl" />
          </div>
          <div class="skills-icon-shader">
            <Icon icon="mdi:github" class="text-4xl sm:text-5xl" />
          </div>
        </div>
      </div>

      <!-- Collaboration -->
      <div class="bg-card-bg icons-shader border-black border-2 p-6">
        <p class="skills-card-label mb-6">Collaboration</p>
        <div class="grid grid-cols-3 gap-5 place-items-center mt-6">
          <div class="skills-icon-shader">
            <Icon icon="mdi:slack" class="text-4xl sm:text-5xl" />
          </div>
          <div class="skills-icon-shader">
            <Icon icon="simple-icons:notion" class="text-4xl sm:text-5xl" />
          </div>
          <div class="skills-icon-shader">
            <Icon icon="mdi:atlassian" class="text-4xl sm:text-5xl" />
          </div>
        </div>
      </div>

      <!-- Development -->
      <div class="bg-card-bg icons-shader border-black border-2 p-6">
        <p class="skills-card-label mb-6">Development</p>
        <div class="grid grid-cols-3 gap-5 place-items-center mt-6">
          <div class="skills-icon-shader">
            <Icon icon="mdi:language-php" class="text-4xl sm:text-5xl" />
          </div>
          <div class="skills-icon-shader">
            <Icon icon="mdi:language-javascript" class="text-4xl sm:text-5xl" />
          </div>
          <div class="skills-icon-shader">
            <Icon icon="mdi:vuejs" class="text-4xl sm:text-5xl" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>