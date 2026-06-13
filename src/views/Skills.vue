<template>
  <div class="font-Poppins bg-main-background">
    <!-- Header -->
    <header class="flex flex-row items-center bg-main-background px-6 py-6">
      <nav class="flex flex-col items-center justify-center flex-1">
        <h6 class="text-lg font-semibold">What I Work With</h6>
        <h1 class="text-4xl sm:text-5xl font-bold">Skills</h1>
      </nav>
      <div class="flex items-center p-4">
        <router-link to="#contact" aria-label="Scrolls to contact section">
          <i class="fa-solid fa-caret-down text-5xl cursor-pointer"></i>
        </router-link>
      </div>
    </header>

    <!-- Mobile: Accordion -->
    <div class="flex flex-col gap-3 px-6 pb-8 sm:hidden">
      <div
        v-for="(category, index) in categories"
        :key="category.label"
        class="bg-card-bg icons-shader border-black border-2"
      >
        <!-- Accordion Header -->
        <button
          class="w-full flex items-center justify-between px-6 py-4 text-left"
          @click="toggle(index)"
          :aria-expanded="openIndex === index"
        >
          <span class="skills-card-label">
            {{ category.label }}
            <i :class="[category.icon, 'ml-2']"></i>
          </span>
          <i
            class="fa-solid fa-chevron-down text-lg transition-transform duration-300"
            :class="{ 'rotate-180': openIndex === index }"
          ></i>
        </button>

        <!-- Accordion Body -->
        <div
          class="overflow-hidden transition-all duration-300 ease-in-out"
          :class="openIndex === index ? 'max-h-96' : 'max-h-0'"
        >
          <div class="grid grid-cols-3 gap-5 place-items-center px-6 pb-6">
            <div v-for="skill in category.skills" :key="skill.label" class="skills-icon-shader">
              <i v-if="skill.icon" :class="[skill.icon, 'text-4xl sm:text-5xl']"></i>
              <span v-else class="text-2xl font-bold leading-none">{{ skill.abbr }}</span>
              <span class="text-xs mt-2 text-center leading-tight" v-html="skill.label"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop: Original 2-column grid -->
    <div class="hidden sm:grid grid-cols-2 gap-4 px-6 pb-8 lg:px-8">

      <!-- Testing Tools -->
      <div class="bg-card-bg icons-shader border-black border-2 p-6">
        <label class="skills-card-label mb-6 block">
          Testing Tools
          <i class="fa-solid fa-bug ml-2"></i>
        </label>
        <div class="grid grid-cols-3 gap-5 place-items-center mt-6">
          <div class="skills-icon-shader">
            <i class="fa-brands fa-atlassian text-4xl sm:text-5xl"></i>
            <span class="text-xs sm:text-sm mt-2">JIRA</span>
          </div>
          <div class="skills-icon-shader">
            <span class="text-2xl font-bold">Cy</span>
            <span class="text-xs sm:text-sm mt-2">Cypress</span>
          </div>
          <div class="skills-icon-shader">
            <span class="text-2xl font-bold">PM</span>
            <span class="text-xs sm:text-sm mt-2">Postman</span>
          </div>
        </div>
      </div>

      <!-- Version Control -->
      <div class="bg-card-bg icons-shader border-black border-2 p-6">
        <label class="skills-card-label mb-6 block">
          Version Control
          <i class="fa-solid fa-code-branch ml-2"></i>
        </label>
        <div class="grid grid-cols-3 gap-5 place-items-center mt-6">
          <div class="skills-icon-shader">
            <i class="fa-brands fa-git-alt text-4xl sm:text-5xl"></i>
            <span class="text-xs sm:text-sm mt-2">Git</span>
          </div>
          <div class="skills-icon-shader">
            <i class="fa-brands fa-github text-4xl sm:text-5xl"></i>
            <span class="text-xs sm:text-sm mt-2">GitHub</span>
          </div>
        </div>
      </div>

      <!-- Collaboration -->
      <div class="bg-card-bg icons-shader border-black border-2 p-6">
        <label class="skills-card-label mb-6 block">
          Collaboration
          <i class="fa-solid fa-people-group ml-2"></i>
        </label>
        <div class="grid grid-cols-3 gap-5 place-items-center mt-6">
          <div class="skills-icon-shader">
            <i class="fa-brands fa-slack text-4xl sm:text-5xl"></i>
            <span class="text-xs sm:text-sm mt-2">Slack</span>
          </div>
          <div class="skills-icon-shader">
            <i class="fa-brands fa-notion text-4xl sm:text-5xl"></i>
            <span class="text-xs sm:text-sm mt-2">Notion</span>
          </div>
          <div class="skills-icon-shader">
            <i class="fa-brands fa-atlassian text-4xl sm:text-5xl"></i>
            <span class="text-xs sm:text-sm mt-2">Atlassian</span>
          </div>
        </div>
      </div>

      <!-- Development -->
      <div class="bg-card-bg icons-shader border-black border-2 p-6">
        <label class="skills-card-label mb-6 block">
          Development
          <i class="fa-solid fa-code ml-2"></i>
        </label>
        <div class="grid grid-cols-3 gap-5 place-items-center mt-6">
          <div class="skills-icon-shader">
            <i class="fa-brands fa-php text-4xl sm:text-5xl"></i>
            <span class="text-xs sm:text-sm mt-2">PHP</span>
          </div>
          <div class="skills-icon-shader">
            <i class="fa-brands fa-java text-4xl sm:text-5xl"></i>
            <span class="text-xs sm:text-sm mt-2">Java</span>
          </div>
          <div class="skills-icon-shader">
            <span class="text-2xl font-bold leading-none">CC</span>
            <span class="text-xs sm:text-sm mt-2 text-center leading-tight">Claude<br>Code</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const categories = [
  {
    label: 'Testing Tools',
    icon: 'fa-solid fa-bug',
    skills: [
      { icon: 'fa-brands fa-atlassian', label: 'JIRA' },
      { abbr: 'Cy', label: 'Cypress' },
      { abbr: 'PM', label: 'Postman' },
    ],
  },
  {
    label: 'Version Control',
    icon: 'fa-solid fa-code-branch',
    skills: [
      { icon: 'fa-brands fa-git-alt', label: 'Git' },
      { icon: 'fa-brands fa-github', label: 'GitHub' },
    ],
  },
  {
    label: 'Collaboration',
    icon: 'fa-solid fa-people-group',
    skills: [
      { icon: 'fa-brands fa-slack', label: 'Slack' },
      { icon: 'fa-brands fa-notion', label: 'Notion' },
      { icon: 'fa-brands fa-atlassian', label: 'Atlassian' },
    ],
  },
  {
    label: 'Development',
    icon: 'fa-solid fa-code',
    skills: [
      { icon: 'fa-brands fa-php', label: 'PHP' },
      { icon: 'fa-brands fa-java', label: 'Java' },
      { abbr: 'CC', label: 'Claude<br>Code' },
    ],
  },
]
</script>