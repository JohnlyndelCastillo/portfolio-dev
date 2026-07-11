<template>
  <div class="font-Poppins bg-main-background">
    <!-- Header -->
    <header class="flex flex-row items-center bg-main-background px-6 py-6">
      <nav class="flex flex-col items-center justify-center flex-1">
        <h6 class="text-lg font-semibold">My Works!</h6>
        <h1 class="text-4xl sm:text-5xl font-bold">Projects</h1>
      </nav>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 px-6 pb-8 lg:px-8">

      <!-- Pass Slip System -->
      <div class="flex flex-col bg-card-bg icons-shader border-black border-2 p-6">
        <div class="flex items-start justify-between mb-3">
          <h2 class="text-xl font-bold text-black">Pass Slip System</h2>
          <span class="text-xs font-semibold px-2 py-1 border border-black bg-cv-button shrink-0 ml-2">Personal</span>
        </div>
        <p class="text-black text-sm leading-relaxed mb-4">
          A pass slip management system built with vanilla HTML, CSS, JavaScript, PHP, and MySQL.
        </p>

        <!-- Toggle button -->
        <button
          class="flex items-center gap-2 text-sm font-semibold mb-2 lg:cursor-default"
          @click="toggleMobile('passslip')"
        >
          <span class="lg:hidden">{{ open.passslip ? 'Hide' : 'Show' }} details</span>
          <span class="hidden lg:inline">What it handles</span>
          <Icon
            icon="mdi:chevron-down"
            class="text-base transition-transform duration-300 lg:hidden"
            :class="{ 'rotate-180': open.passslip }"
          />
        </button>

        <!-- Feature list -->
        <div
          class="overflow-hidden transition-all duration-300 lg:!max-h-none lg:!opacity-100"
          :class="open.passslip ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100'"
        >
          <ul class="text-black text-sm space-y-1 mb-4">
            <li v-for="feature in passSlipFeatures" :key="feature" class="flex items-start gap-2">
              <Icon icon="mdi:check" class="text-xs mt-1 shrink-0" />
              {{ feature }}
            </li>
          </ul>
        </div>

        <div class="flex flex-wrap gap-2 mb-6 mt-2">
          <span v-for="tech in passSlipTechs" :key="tech.name"
            class="text-xs font-semibold px-3 py-1 rounded-full border border-black/20"
            :style="{ backgroundColor: tech.color, color: tech.text }">
            {{ tech.name }}
          </span>
        </div>
        <div class="flex-1"></div>
        <a
          href="https://github.com/JohnlyndelCastillo/pass-slip"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 border-2 border-black p-2 font-semibold text-sm bg-cv-button shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
        >
          <Icon icon="mdi:github" class="text-lg" />
          View on GitHub
        </a>
      </div>

      <!-- Daily Planner -->
      <div class="flex flex-col bg-card-bg icons-shader border-black border-2 p-6">
        <div class="flex items-start justify-between mb-3">
          <h2 class="text-xl font-bold text-black">Daily Planner</h2>
          <span class="text-xs font-semibold px-2 py-1 border border-black bg-cv-button shrink-0 ml-2">Personal</span>
        </div>
        <p class="text-black text-sm leading-relaxed mb-4">
          A cute, lightweight daily task tracker built for QA productivity. No frameworks, no build step — just a single HTML file you can deploy to Vercel in seconds.
        </p>

        <!-- Toggle button -->
        <button
          class="flex items-center gap-2 text-sm font-semibold mb-2 lg:cursor-default"
          @click="toggleMobile('planner')"
        >
          <span class="lg:hidden">{{ open.planner ? 'Hide' : 'Show' }} details</span>
          <span class="hidden lg:inline">What it handles</span>
          <Icon
            icon="mdi:chevron-down"
            class="text-base transition-transform duration-300 lg:hidden"
            :class="{ 'rotate-180': open.planner }"
          />
        </button>

        <!-- Feature list -->
        <div
          class="overflow-hidden transition-all duration-300 lg:!max-h-none lg:!opacity-100"
          :class="open.planner ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100'"
        >
          <ul class="text-black text-sm space-y-1 mb-4">
            <li v-for="feature in plannerFeatures" :key="feature" class="flex items-start gap-2">
              <Icon icon="mdi:check" class="text-xs mt-1 shrink-0" />
              {{ feature }}
            </li>
          </ul>
        </div>

        <div class="flex flex-wrap gap-2 mb-6 mt-2">
          <span v-for="tech in dailyPlannerTechs" :key="tech.name"
            class="text-xs font-semibold px-3 py-1 rounded-full border border-black/20"
            :style="{ backgroundColor: tech.color, color: tech.text }">
            {{ tech.name }}
          </span>
        </div>
        <div class="flex-1"></div>
        <a
          href="https://github.com/JohnlyndelCastillo/daily-planner"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 border-2 border-black p-2 font-semibold text-sm bg-cv-button shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
        >
          <Icon icon="mdi:github" class="text-lg" />
          View on GitHub
        </a>
      </div>

      <!-- Inventory System -->
      <div class="flex flex-col bg-card-bg icons-shader border-black border-2 p-6">
        <div class="flex items-start justify-between mb-3">
          <h2 class="text-xl font-bold text-black">Inventory System</h2>
          <span class="text-xs font-semibold px-2 py-1 border border-black bg-github text-white shrink-0 ml-2">Collaborative</span>
        </div>
        <p class="text-black text-sm leading-relaxed mb-4">
          Node.js inventory system for Two J's Store built with Express, EJS, MySQL, and Tailwind CSS.
        </p>

        <!-- Toggle button -->
        <button
          class="flex items-center gap-2 text-sm font-semibold mb-2 lg:cursor-default"
          @click="toggleMobile('inventory')"
        >
          <span class="lg:hidden">{{ open.inventory ? 'Hide' : 'Show' }} details</span>
          <span class="hidden lg:inline">What it handles</span>
          <Icon
            icon="mdi:chevron-down"
            class="text-base transition-transform duration-300 lg:hidden"
            :class="{ 'rotate-180': open.inventory }"
          />
        </button>

        <!-- Feature list -->
        <div
          class="overflow-hidden transition-all duration-300 lg:!max-h-none lg:!opacity-100"
          :class="open.inventory ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100'"
        >
          <ul class="text-black text-sm space-y-1 mb-4">
            <li v-for="feature in inventoryFeatures" :key="feature" class="flex items-start gap-2">
              <Icon icon="mdi:check" class="text-xs mt-1 shrink-0" />
              {{ feature }}
            </li>
          </ul>
        </div>

        <div class="flex flex-wrap gap-2 mb-6 mt-2">
          <span v-for="tech in inventoryTechs" :key="tech.name"
            class="text-xs font-semibold px-3 py-1 rounded-full border border-black/20"
            :style="{ backgroundColor: tech.color, color: tech.text }">
            {{ tech.name }}
          </span>
        </div>
        <div class="flex-1"></div>
        <div class="flex items-center justify-center gap-2 border-2 border-black p-2 font-semibold text-sm bg-main-background text-gray-400 cursor-not-allowed select-none">
          <Icon icon="mdi:lock" class="text-lg" />
          Private Repository
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Icon } from '@iconify/vue'

const open = reactive({
  passslip: false,
  planner: false,
  inventory: false,
})

function toggleMobile(key) {
  if (window.innerWidth < 1024) {
    open[key] = !open[key]
  }
}

const passSlipTechs = [
  { name: 'PHP',        color: '#777BB4', text: '#ffffff' },
  { name: 'HTML',       color: '#E34F26', text: '#ffffff' },
  { name: 'CSS',        color: '#1572B6', text: '#ffffff' },
  { name: 'JavaScript', color: '#F7DF1E', text: '#000000' },
  { name: 'MySQL',      color: '#4479A1', text: '#ffffff' },
]

const dailyPlannerTechs = [
  { name: 'HTML',       color: '#E34F26', text: '#ffffff' },
  { name: 'CSS',        color: '#1572B6', text: '#ffffff' },
  { name: 'JavaScript', color: '#F7DF1E', text: '#000000' },
]

const inventoryTechs = [
  { name: 'Node.js',  color: '#339933', text: '#ffffff' },
  { name: 'Express',  color: '#000000', text: '#ffffff' },
  { name: 'EJS',      color: '#A91E50', text: '#ffffff' },
  { name: 'Tailwind', color: '#06B6D4', text: '#ffffff' },
  { name: 'MySQL',    color: '#4479A1', text: '#ffffff' },
]

const passSlipFeatures = [
  'Pass slip creation and management',
  'Student or employee record tracking',
  'Slip status monitoring (pending, approved, rejected)',
  'Admin dashboard for managing requests',
  'MySQL-backed data persistence',
]

const plannerFeatures = [
  'Add tasks via input box or hit Enter to submit',
  'Track status across three stages: To Do → Doing → Done',
  'Timestamps — start and end times recorded automatically',
  'Auto-resets daily — tasks stored by date, fresh start every morning',
  'Carry over — unfinished tasks from past dates surfaced in a banner on load',
  'Keyboard friendly — Enter to add, Shift+Enter for a new line',
  'No backend needed — data lives in localStorage',
]

const inventoryFeatures = [
  'Inventory listing and item creation',
  'Category creation',
  'Bulk inventory adjustments',
  'Price lookup and transaction checkout',
  'Sales reports and credit ledger tracking',
  'Global stock notifications',
  'Reusable modals for forms, alerts, and feedback',
]
</script>