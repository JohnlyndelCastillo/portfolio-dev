<template>
  <div class="font-Poppins bg-main-background">
    <!-- Header -->
    <header class="flex flex-row items-center bg-main-background px-6 py-6">
      <nav class="flex flex-col items-start justify-start flex-1">
        <h6 class="text-lg font-semibold">My Journey</h6>
        <h1 class="text-4xl sm:text-5xl font-bold">Timeline</h1>
      </nav>
    </header>

    <div class="px-6 pb-8 lg:px-8">

      <!-- Horizontal timeline (desktop) / Vertical (mobile) -->
      <div class="relative">

        <!-- Horizontal connector line (desktop only) -->
        <div class="hidden lg:block absolute top-[2.85rem] left-0 right-0 h-0.5 bg-black z-0"></div>

        <!-- Timeline items -->
        <div class="flex flex-col lg:flex-row gap-0 lg:items-start">
          <div
            v-for="(item, index) in timeline"
            :key="index"
            class="relative flex lg:flex-col lg:flex-1"
          >
            <!-- Mobile: vertical left border connector -->
            <div class="lg:hidden flex flex-col items-center mr-4">
              <div
                class="w-4 h-4 rounded-full border-2 border-black shrink-0 mt-1"
                :class="item.current ? 'bg-cv-button' : 'bg-main-background'"
              ></div>
              <div v-if="index < timeline.length - 1" class="w-0.5 bg-black flex-1 min-h-[2rem]"></div>
            </div>

            <!-- Desktop: dot on the line -->
            <div class="hidden lg:flex justify-center mb-3 relative z-10">
              <div
                class="w-5 h-5 rounded-full border-2 border-black"
                :class="item.current ? 'bg-cv-button' : 'bg-main-background'"
              ></div>
            </div>

            <!-- Card -->
            <div class="mb-6 lg:mb-0 lg:mx-2 border-2 border-black p-4 bg-card-bg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-1">
              <span class="inline-block text-xs font-bold px-2 py-0.5 border border-black bg-cv-button mb-2">
                {{ item.year }}
              </span>
              <span v-if="item.current"
                class="inline-block text-xs font-bold px-2 py-0.5 border border-black bg-black text-white mb-2 ml-1">
                Present
              </span>
              <h3 class="text-sm font-bold text-black leading-tight mb-1">{{ item.title }}</h3>
              <p v-if="item.org" class="text-xs font-semibold text-gray-500 mb-2">{{ item.org }}</p>
              <p class="text-xs text-black leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Awards & Recognition -->
      <div class="mt-8 border-2 border-black p-6 bg-card-bg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <p class="text-lg font-bold mb-4">
          Awards & Recognition
        </p>
        <div class="flex flex-col sm:flex-row gap-3">
          <button
            v-for="award in awards"
            :key="award.title"
            class="flex items-start gap-3 border-2 border-black p-3 bg-main-background flex-1 text-left shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
            @click="openModal(award)"
          >
            <Icon :icon="award.icon" class="text-2xl shrink-0" />
            <div>
              <p class="text-sm font-bold text-black">{{ award.title }}</p>
              <p class="text-xs text-gray-500">{{ award.org }}</p>
              <p class="text-xs text-gray-400 mt-1 flex items-center gap-1">
                <Icon icon="mdi:file-pdf-box" class="text-red-500" />
                {{ award.files.length > 1 ? `${award.files.length} certificates` : '1 certificate' }} — click to view
              </p>
            </div>
          </button>
        </div>
      </div>

    </div>

    <!-- PDF Modal -->
    <Teleport to="body">
      <div
        v-if="selectedAward"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60" @click="closeModal"></div>

        <!-- Modal -->
        <div class="relative z-10 w-full max-w-3xl border-2 border-black bg-card-bg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col max-h-[90vh]">

          <!-- Modal header -->
          <div class="flex items-center justify-between px-5 py-4 border-b-2 border-black bg-cv-button shrink-0">
            <div class="flex items-center gap-2">
              <Icon :icon="selectedAward.icon" class="text-2xl shrink-0" />
              <div>
                <p class="text-sm font-bold text-black">{{ selectedAward.title }}</p>
                <p class="text-xs text-gray-600">{{ selectedAward.org }}</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <!-- Download active file -->
              <a
                :href="selectedAward.files[activeFileIndex].file"
                :download="selectedAward.title"
                class="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 border-2 border-black bg-main-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <Icon icon="mdi:download" class="text-base" />
                Download
              </a>
              <!-- Close -->
              <button
                @click="closeModal"
                class="flex items-center justify-center w-8 h-8 border-2 border-black bg-main-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <Icon icon="mdi:close" class="text-base" />
              </button>
            </div>
          </div>

          <!-- Tab switcher (only when multiple files) -->
          <div v-if="selectedAward.files.length > 1" class="flex border-b-2 border-black shrink-0">
            <button
              v-for="(f, i) in selectedAward.files"
              :key="i"
              class="px-4 py-2 text-xs font-semibold border-r-2 border-black transition-all"
              :class="activeFileIndex === i ? 'bg-cv-button' : 'bg-main-background hover:bg-card-bg'"
              @click="activeFileIndex = i"
            >
              {{ f.label }}
            </button>
          </div>

          <!-- PDF viewer -->
          <div class="flex-1 overflow-hidden min-h-[60vh]">
            <!-- Desktop: iframe -->
            <iframe
              :src="selectedAward.files[activeFileIndex].file"
              class="hidden sm:block w-full h-full min-h-[60vh] border-none"
              title="Certificate PDF"
            ></iframe>

            <!-- Mobile: fallback -->
            <div class="sm:hidden flex flex-col items-center justify-center gap-4 p-8 text-center h-full min-h-[40vh]">
              <Icon icon="mdi:file-pdf-box" class="text-red-500 text-5xl" />
              <p class="text-sm font-semibold text-black">PDF preview isn't supported on mobile.</p>
              <a
                :href="selectedAward.files[activeFileIndex].file"
                :download="selectedAward.title"
                class="flex items-center gap-2 text-sm font-semibold px-4 py-2 border-2 border-black bg-cv-button shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <Icon icon="mdi:download" />
                Download Certificate
              </a>
            </div>
          </div>

        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { timeline, awards } from '@/data/timelineData'

const selectedAward = ref(null)
const activeFileIndex = ref(0)

const openModal = (award) => {
  selectedAward.value = award
  activeFileIndex.value = 0
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedAward.value = null
  activeFileIndex.value = 0
  document.body.style.overflow = ''
}
</script>