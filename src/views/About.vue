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
          <p>
            Hi, I'm Johnlyn del Castillo, a Junior Software QA Engineer at Sun* Philippines Inc.
            I completed a diploma in Computer Engineering Technology at CITE Technical Institute Inc.
            and spent 15 months as a QA intern before transitioning to my current role in January 2025.
          </p>
          <p>
            I am currently involved in a structured SDLC project for a prominent Japanese tech client,
            where I handle manual testing, write and maintain test cases, log and track defects or bugs,
            and collaborate closely with developers to ensure each release meets quality standards.
          </p>
          <p>
            During my internship, I was recognized with the Best Effort, Special Thanks, and Most Improved Player
            awards, and received positive feedback from team leaders for my consistent delivery and commitment
            to continuous growth — all of which laid a strong foundation for my transition into a
            Junior QA Engineer role.
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
              <p class="text-black text-sm sm:text-base">
                My interest in QA grew naturally during my internship, where I discovered how much I enjoy
                the process of identifying issues, improving functionality, and ensuring smooth user experiences.
                There's something deeply rewarding about catching the small things before they become big problems —
                and that mindset has carried over into my role as a Junior QA Engineer.
              </p>
              <p class="text-black text-sm sm:text-base">
                Today, I'm actively involved in manual testing within a structured SDLC environment, writing
                and maintaining test cases, logging and tracking defects through Notion, and performing
                testing across both local instances and cloud-deployed sandbox environments with version
                control through Git. I'm also exploring automation tools like Playwright to expand my
                technical capabilities and contribute more efficiently to the team.
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
              <p class="text-black text-sm sm:text-base">
                As I continue growing in my role, I aim to transition deeper into automation testing —
                writing scripts that reduce manual effort, increase test coverage, and improve overall
                release confidence. I'm currently exploring Playwright as my primary automation framework,
                and I'm particularly interested in Playwright MCP to integrate testing capabilities
                directly into AI-assisted workflows.
              </p>
              <p class="text-black text-sm sm:text-base">
                Beyond traditional automation, I'm drawn to the emerging space of agentic QA — leveraging
                tools like Claude Code to build intelligent testing workflows that can reason, adapt, and
                execute across complex scenarios. I see this as the future of quality engineering, and I'm
                actively positioning myself to grow in that direction.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Icon } from '@iconify/vue'

const open = reactive({
  whyqa: false,
  growth: false,
})

function toggleMobile(key) {
  if (window.innerWidth < 1024) {
    open[key] = !open[key]
  }
}
</script>