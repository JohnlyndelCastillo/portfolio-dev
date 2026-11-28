<template>
  <div class="resume-shell min-h-screen bg-canvas py-8 print:bg-white print:py-0">
    <div class="mx-auto max-w-[860px] px-4 sm:px-6 print:max-w-none print:px-0">
      <div class="print-hidden mb-5 flex items-center justify-between gap-3">
        <router-link
          to="/"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition hover:text-ink"
        >
          <Icon icon="mdi:arrow-left" class="text-base" aria-hidden="true" />
          Back to portfolio
        </router-link>

        <button type="button" class="btn-primary !px-4 !py-2.5 text-xs" @click="printResume">
          <Icon icon="mdi:printer-outline" class="text-base" aria-hidden="true" />
          Print / Save as PDF
        </button>
      </div>

      <article
        class="resume-page rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-10 lg:p-12"
      >
        <header class="resume-header border-b border-line pb-5">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1
                class="font-display text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl"
              >
                {{ site.name }}
              </h1>
              <p class="mt-1 text-sm font-semibold text-accent sm:text-[15px]">
                {{ resumeProfile.headline }}
              </p>
            </div>

            <div class="resume-contact text-left text-xs leading-relaxed text-ink-muted sm:text-right">
              <p>{{ site.location }}</p>
              <a :href="`mailto:${site.email}`" class="block transition hover:text-ink">
                {{ site.email }}
              </a>
              <a
                :href="site.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="block transition hover:text-ink"
              >
                linkedin.com/in/johnlyn-del-castillo
              </a>
              <a
                :href="site.github"
                target="_blank"
                rel="noopener noreferrer"
                class="block transition hover:text-ink"
              >
                github.com/JohnlyndelCastillo
              </a>
              <a
                :href="site.url"
                target="_blank"
                rel="noopener noreferrer"
                class="block transition hover:text-ink"
              >
                johnlyndc.vercel.app
              </a>
            </div>
          </div>

          <p class="resume-summary mt-4 max-w-3xl text-[13.5px] leading-relaxed text-ink-muted">
            {{ resumeProfile.summary }}
          </p>
        </header>

        <div class="resume-grid mt-6 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div class="resume-main space-y-6">
            <section>
              <h2 class="resume-heading">Experience</h2>
              <div class="resume-stack mt-3.5 space-y-4">
                <article
                  v-for="item in resumeExperience"
                  :key="`${item.title}-${item.period}`"
                  class="avoid-break"
                >
                  <div
                    class="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <h3 class="font-display text-sm font-bold text-ink">{{ item.title }}</h3>
                    <p class="text-[11px] font-medium text-ink-soft">
                      {{ item.period }}
                    </p>
                  </div>
                  <p class="text-xs font-medium text-accent">
                    {{ item.org }}
                    <span v-if="item.project" class="text-ink-soft"> · {{ item.project }}</span>
                  </p>
                  <ul class="resume-bullets mt-2 space-y-1">
                    <li
                      v-for="bullet in item.bullets"
                      :key="bullet"
                      class="relative pl-3.5 text-[12.5px] leading-relaxed text-ink-muted"
                    >
                      <span
                        class="absolute left-0 top-[0.55em] h-1 w-1 rounded-full bg-accent/70"
                        aria-hidden="true"
                      ></span>
                      {{ bullet }}
                    </li>
                  </ul>
                </article>
              </div>
            </section>

            <section>
              <h2 class="resume-heading">Selected Projects</h2>
              <div class="resume-stack mt-3.5 space-y-3.5">
                <article v-for="project in resumeProjects" :key="project.title" class="avoid-break">
                  <div class="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 class="font-display text-sm font-bold text-ink">{{ project.title }}</h3>
                    <a
                      v-if="project.link"
                      :href="project.link"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-[11px] font-medium text-accent transition hover:underline"
                    >
                      <span class="print:hidden">GitHub ↗</span>
                      <span class="hidden print:inline">{{ project.linkLabel }}</span>
                    </a>
                  </div>
                  <p class="text-[11px] font-medium text-ink-soft">
                    {{ project.meta }}
                  </p>
                  <ul class="resume-bullets mt-1.5 space-y-1">
                    <li
                      v-for="bullet in project.bullets"
                      :key="bullet"
                      class="relative pl-3.5 text-[12.5px] leading-relaxed text-ink-muted"
                    >
                      <span
                        class="absolute left-0 top-[0.55em] h-1 w-1 rounded-full bg-accent/70"
                        aria-hidden="true"
                      ></span>
                      {{ bullet }}
                    </li>
                  </ul>
                </article>
              </div>
            </section>
          </div>

          <aside class="resume-aside space-y-6">
            <section class="avoid-break">
              <h2 class="resume-heading">Technical Skills</h2>
              <div class="mt-3.5 space-y-3">
                <div v-for="group in resumeSkillGroups" :key="group.label">
                  <h3 class="text-xs font-semibold text-ink">{{ group.label }}</h3>
                  <p class="mt-0.5 text-[12px] leading-relaxed text-ink-muted">
                    {{ group.items.join(' · ') }}
                  </p>
                </div>
              </div>
            </section>

            <section class="avoid-break">
              <h2 class="resume-heading">Education</h2>
              <div class="mt-3.5">
                <h3 class="font-display text-sm font-bold leading-snug text-ink">
                  {{ resumeEducation.degree }}
                </h3>
                <p class="mt-0.5 text-xs font-medium text-accent">{{ resumeEducation.school }}</p>
                <p class="text-[11px] font-medium text-ink-soft">
                  {{ resumeEducation.period }}
                </p>
                <p class="mt-1.5 text-[12px] leading-relaxed text-ink-muted">
                  {{ resumeEducation.details }}
                </p>
              </div>
            </section>

            <section class="avoid-break">
              <h2 class="resume-heading">Recognition</h2>
              <ul class="resume-awards mt-3.5 space-y-1.5">
                <li v-for="award in resumeAwards" :key="award.title" class="text-[12px] leading-snug">
                  <span class="block font-semibold text-ink">{{ award.title }}</span>
                  <span class="text-[11px] text-ink-muted">{{ award.org }}</span>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </article>

      <p class="print-hidden mt-4 text-center text-[11px] text-ink-soft">
        Use your browser's print dialog to save this page as a one-page PDF.
      </p>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import {
  resumeAwards,
  resumeEducation,
  resumeExperience,
  resumeProfile,
  resumeProjects,
  resumeSkillGroups,
} from '@/data/resumeData'
import { site } from '@/data/siteData'

function printResume() {
  window.print()
}
</script>

<style scoped>
.resume-heading {
  @apply border-b border-line pb-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft;
}

.avoid-break {
  break-inside: avoid;
}

@media print {
  .resume-shell,
  .resume-page {
    --color-canvas: 255 255 255;
    --color-surface: 255 255 255;
    --color-ink: 17 22 20;
    --color-ink-muted: 92 99 95;
    --color-ink-soft: 107 114 110;
    --color-line: 228 225 216;
    --color-accent: 15 118 110;
    --color-accent-dark: 11 92 85;
    --color-accent-soft: 231 241 237;
    color: #111614 !important;
  }

  .resume-shell {
    background: #ffffff !important;
    padding: 0 !important;
  }

  .resume-page {
    border: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    padding: 0 !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .resume-header {
    padding-bottom: 0.55rem !important;
  }

  .resume-header h1 {
    font-size: 24px !important;
    line-height: 1.1;
  }

  .resume-header h1 + p {
    margin-top: 2px;
    font-size: 12px !important;
  }

  .resume-contact {
    font-size: 10.5px !important;
    line-height: 1.4 !important;
  }

  .resume-summary {
    margin-top: 0.45rem !important;
    font-size: 11.5px !important;
    line-height: 1.45 !important;
  }

  .resume-grid {
    display: grid !important;
    grid-template-columns: minmax(0, 1.65fr) minmax(0, 1fr);
    gap: 1.35rem !important;
    margin-top: 0.75rem !important;
  }

  .resume-main,
  .resume-aside {
    display: block !important;
  }

  .resume-main > section + section,
  .resume-aside > section + section {
    margin-top: 0.9rem !important;
  }

  .resume-main section > div,
  .resume-aside section > div,
  .resume-aside section > ul {
    margin-top: 0.35rem !important;
  }

  .resume-stack > * + * {
    margin-top: 0.65rem !important;
  }

  .resume-bullets > * + * {
    margin-top: 0.2rem !important;
  }

  .resume-bullets li {
    font-size: 11px !important;
    line-height: 1.42 !important;
  }

  .resume-main h3,
  .resume-aside h3 {
    font-size: 12px !important;
  }

  .resume-aside section p,
  .resume-aside section li {
    font-size: 11px !important;
    line-height: 1.42 !important;
  }

  .resume-awards > * + * {
    margin-top: 4px !important;
  }

  .resume-heading {
    padding-bottom: 3px !important;
    font-size: 8.5px !important;
    letter-spacing: 0.14em !important;
  }

  a {
    color: inherit !important;
    text-decoration: none !important;
  }

  @page {
    size: letter;
    margin: 10mm 12mm;
  }
}
</style>
