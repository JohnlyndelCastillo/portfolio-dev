<template>
  <div class="font-Poppins bg-main-background">
    <!-- Header -->
    <header class="flex flex-row items-center bg-main-background px-6 py-6">
      <nav class="flex flex-col items-center justify-center flex-1">
        <h6 class="text-lg font-semibold">What I Work With</h6>
        <h1 class="text-4xl sm:text-5xl font-bold">Skills</h1>
      </nav>
    </header>

    <!-- Desktop: 2-column grid -->
    <div class="hidden sm:grid grid-cols-2 gap-4 px-6 pb-8 lg:px-8">

      <!-- Testing Tools -->
      <div class="bg-card-bg icons-shader border-black border-2 p-6">
        <p class="skills-card-label mb-6">Testing Tools
          <Icon icon="fluent-mdl2:test-auto-solid" class="inline ml-2" />
        </p>
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
        <p class="skills-card-label mb-6">Version Control
          <Icon icon="pajamas:git-merge" class="inline ml-2" />
        </p>
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
        <p class="skills-card-label mb-6">Collaboration
          <Icon icon="mdi:users-group" class="inline ml-2" />
        </p>
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

      <!-- Development (6 icons, smaller size) -->
      <div class="bg-card-bg icons-shader border-black border-2 p-6">
        <p class="skills-card-label mb-6">Development
          <Icon icon="material-symbols:terminal" class="inline ml-2" />
        </p>
        <div class="grid grid-cols-3 gap-3 place-items-center mt-6">
          <div class="skills-icon-shader">
            <Icon icon="mdi:language-php" class="text-3xl sm:text-4xl" />
          </div>
          <div class="skills-icon-shader">
            <Icon icon="mdi:language-javascript" class="text-3xl sm:text-4xl" />
          </div>
          <div class="skills-icon-shader">
            <Icon icon="mdi:vuejs" class="text-3xl sm:text-4xl" />
          </div>
          <div class="skills-icon-shader">
            <Icon icon="simple-icons:mysql" class="text-3xl sm:text-4xl" />
          </div>
          <div class="skills-icon-shader">
            <Icon icon="simple-icons:tailwindcss" class="text-3xl sm:text-4xl" />
          </div>
          <div class="skills-icon-shader">
            <Icon icon="mdi:nodejs" class="text-3xl sm:text-4xl" />
          </div>
        </div>
      </div>

    </div>

    <!-- Mobile: Accordion -->
    <div class="flex flex-col gap-3 px-6 pb-8 sm:hidden">
      <div
        v-for="(category, index) in categories"
        :key="category.label"
        class="bg-card-bg icons-shader border-black border-2"
      >
        <button
          class="w-full flex items-center justify-between px-6 py-4 text-left"
          @click="toggle(index)"
          :aria-expanded="openIndex === index"
        >
          <span class="skills-card-label">
            {{ category.label }}
            <Icon :icon="category.icon" class="inline ml-2" />
          </span>
          <Icon
            icon="fa-solid:chevron-down"
            class="text-lg transition-transform duration-300"
            :class="{ 'rotate-180': openIndex === index }"
          />
        </button>

        <div
          class="overflow-hidden transition-all duration-300 ease-in-out"
          :class="openIndex === index ? 'max-h-96' : 'max-h-0'"
        >
          <div
            class="place-items-center px-6 pb-6"
            :class="category.label === 'Development' ? 'grid grid-cols-3 gap-3' : 'grid grid-cols-3 gap-5'"
          >
            <div v-for="skill in category.skills" :key="skill.label" class="skills-icon-shader">
              <Icon
                :icon="skill.icon"
                :class="category.label === 'Development' ? 'text-3xl' : 'text-4xl'"
              />

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useAccordion } from '@/composables/useAccordion'
const { openIndex, toggle } = useAccordion()
import { categories } from '@/data/skillsData'
</script>