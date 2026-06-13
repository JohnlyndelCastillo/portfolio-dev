<template>
  <div class="font-Poppins bg-main-background">
    <!-- Header -->
    <header class="flex flex-row items-center bg-main-background px-6 py-6">
      <nav class="flex flex-col items-center justify-center flex-1">
        <h6 class="text-lg font-semibold">My Works!</h6>
        <h1 class="text-4xl sm:text-5xl font-bold">Projects</h1>
      </nav>
      <div class="flex items-center p-4">
        <router-link to="#skills" aria-label="Scrolls to skills section">
          <i class="fa-solid fa-caret-down text-5xl cursor-pointer"></i>
        </router-link>
      </div>
    </header>

    <!-- 3 column grid on desktop, 1 column on mobile -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 px-6 pb-8 lg:px-8">

      <!-- Pass Slip System -->
      <div class="flex flex-col bg-card-bg icons-shader border-black border-2 p-6">
        <div class="flex items-start justify-between mb-3">
          <h2 class="text-xl font-bold text-black">Pass Slip System</h2>
          <span class="text-xs font-semibold px-2 py-1 border-2 rounded-full border-black bg-cv-button shrink-0 ml-2">Personal</span>
        </div>
        <p class="text-black text-sm leading-relaxed mb-4">
          A pass slip management system built with vanilla HTML, CSS, JavaScript, PHP, and MySQL.
        </p>
        <!-- Tech badges -->
        <div class="flex flex-wrap gap-2 mb-6">
          <span v-for="tech in passSlipTechs" :key="tech.name"
            class="text-xs font-semibold px-2.5 py-1 rounded-full"
            :style="{ backgroundColor: tech.color, color: tech.textColor }">
            {{ tech.name }}
          </span>
        </div>
        <!-- Spacer to push button to bottom -->
        <div class="flex-1"></div>
        <a
          href="https://github.com/JohnlyndelCastillo/pass-slip"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 border-2 border-black p-2 font-semibold text-sm bg-cv-button shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
        >
          <i class="fa-brands fa-github text-lg"></i>
          View on GitHub
        </a>
      </div>

      <!-- Daily Planner -->
      <div class="flex flex-col bg-card-bg icons-shader border-black border-2 p-6">
        <div class="flex items-start justify-between mb-3">
          <h2 class="text-xl font-bold text-black">Daily Planner</h2>
          <span class="text-xs font-semibold px-2 py-1 border-2 rounded-full border-black bg-cv-button shrink-0 ml-2">Personal</span>
        </div>
        <p class="text-black text-sm leading-relaxed mb-4">
          A cute, lightweight daily task tracker built for QA productivity. Uses localStorage to store tasks and supports install via adding from Chrome
        </p>
        <!-- Tech badges -->
        <div class="flex flex-wrap gap-2 mb-6">
          <span v-for="tech in dailyPlannerTechs" :key="tech.name"
            class="text-xs font-semibold px-2.5 py-1 rounded-full"
            :style="{ backgroundColor: tech.color, color: tech.textColor }">
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
          <i class="fa-brands fa-github text-lg"></i>
          View on GitHub
        </a>
      </div>

      <!-- Inventory System -->
      <div class="flex flex-col bg-card-bg icons-shader border-black border-2 p-6">
        <div class="flex items-start justify-between mb-3">
          <h2 class="text-xl font-bold text-black">Inventory System</h2>
          <span class="text-xs font-semibold px-2 py-1 border-2 rounded-full border-black bg-github text-white shrink-0 ml-2">Collaborative</span>
        </div>
        <p class="text-black text-sm leading-relaxed mb-2">
          Node.js inventory system for Two J's Store built with Express, EJS, MySQL, and Tailwind CSS.
        </p>
        <!-- Collapsible feature list -->
        <button
          class="flex items-center gap-1 text-xs font-semibold mb-2 hover:opacity-70 transition-opacity"
          @click="featuresOpen = !featuresOpen"
        >
          <i
            class="fa-solid fa-chevron-right text-xs transition-transform duration-300"
            :class="{ 'rotate-90': featuresOpen }"
          ></i>
          {{ featuresOpen ? 'Hide' : 'See what it handles' }}
        </button>
        <div
          class="overflow-hidden transition-all duration-300 ease-in-out"
          :class="featuresOpen ? 'max-h-60 mb-4' : 'max-h-0'"
        >
          <ul class="text-black text-sm space-y-1 list-none">
            <li v-for="feature in inventoryFeatures" :key="feature" class="flex items-start gap-2">
              <i class="fa-solid fa-check text-xs mt-1 shrink-0"></i>
              {{ feature }}
            </li>
          </ul>
        </div>
        <!-- Tech badges -->
        <div class="flex flex-wrap gap-2 mb-6">
          <span v-for="tech in inventoryTechs" :key="tech.name"
            class="text-xs font-semibold px-2.5 py-1 rounded-full"
            :style="{ backgroundColor: tech.color, color: tech.textColor }">
            {{ tech.name }}
          </span>
        </div>
        <div class="flex-1"></div>
        <!-- Private repo — no link -->
        <div class="flex items-center justify-center gap-2 border-2 border-black p-2 font-semibold text-sm bg-main-background text-gray-400 cursor-not-allowed select-none">
          <i class="fa-solid fa-lock text-lg"></i>
          Private Repository
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const featuresOpen = ref(false)

const techColors = {
  PHP:        { color: '#777BB4', textColor: '#ffffff' },
  HTML:       { color: '#E34F26', textColor: '#ffffff' },
  CSS:        { color: '#1572B6', textColor: '#ffffff' },
  JavaScript: { color: '#F7DF1E', textColor: '#000000' },
  MySQL:      { color: '#4479A1', textColor: '#ffffff' },
  'Node.js':  { color: '#339933', textColor: '#ffffff' },
  Express:    { color: '#000000', textColor: '#ffffff' },
  EJS:        { color: '#A91E50', textColor: '#ffffff' },
  Tailwind:   { color: '#06B6D4', textColor: '#ffffff' },
}

const makeTechs = (...names) => names.map(name => ({ name, ...techColors[name] }))

const passSlipTechs    = makeTechs('PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL')
const dailyPlannerTechs = makeTechs('HTML', 'CSS', 'JavaScript')
const inventoryTechs   = makeTechs('Node.js', 'Express', 'EJS', 'Tailwind', 'MySQL')

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