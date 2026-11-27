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
        <header class="resume-header border-b border-line pb-6">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1
                class="font-display text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl"
              >
                {{ site.name }}
                <PixelScene scene="resume" />
              </h1>
              <p class="mt-1 text-sm font-semibold text-accent sm:text-base">{{ site.role }}</p>
            </div>

            <div class="text-left text-xs leading-relaxed text-ink-muted sm:text-right">
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

          <p class="resume-summary mt-5 max-w-3xl text-sm leading-relaxed text-ink-muted">
            {{ summary }}
          </p>
        </header>

        <div class="resume-grid mt-7 grid gap-8 lg:grid-cols-[1.55fr_1fr]">
          <div class="resume-main space-y-7">
            <section class="avoid-break">
              <h2 class="resume-heading">Experience</h2>
              <div class="resume-stack mt-4 space-y-5">
                <article v-for="item in experience" :key="item.title" class="avoid-break">
                  <div
                    class="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <h3 class="font-display text-sm font-bold text-ink">{{ item.title }}</h3>
                    <p class="text-[11px] font-medium text-ink-soft">
                      {{ item.year }}
                    </p>
                  </div>
                  <p class="text-xs font-medium text-accent">{{ item.org }}</p>
                  <p class="mt-1.5 text-[13px] leading-relaxed text-ink-muted">
                    {{ item.resumeDescription }}
                  </p>
                </article>
              </div>
            </section>

            <section class="avoid-break">
              <h2 class="resume-heading">Selected projects</h2>
              <div class="resume-stack resume-stack-tight mt-4 space-y-4">
                <article v-for="project in projects" :key="project.id" class="avoid-break">
                  <div class="flex items-baseline justify-between gap-3">
                    <h3 class="font-display text-sm font-bold text-ink">{{ project.title }}</h3>
                    <span class="text-[11px] font-medium text-ink-soft">
                      {{ project.type }}
                    </span>
                  </div>
                  <p class="mt-1 text-[13px] leading-relaxed text-ink-muted">
                    {{ project.resumeDescription }}
                  </p>
                  <p class="mt-1 text-[11px] text-ink-soft">
                    {{ project.tech.map((tech) => tech.name).join(' · ') }}
                  </p>
                </article>
              </div>
            </section>

          </div>

          <aside class="resume-aside space-y-7">
            <section class="avoid-break">
              <h2 class="resume-heading">Skills</h2>
              <div class="mt-4 space-y-3">
                <div v-for="category in categories" :key="category.label">
                  <h3 class="text-xs font-semibold text-ink">{{ category.label }}</h3>
                  <p class="mt-0.5 text-[12px] leading-relaxed text-ink-muted">
                    {{ category.skills.map((skill) => skill.label).join(' · ') }}
                  </p>
                </div>
              </div>
            </section>

            <section v-if="education" class="avoid-break">
              <h2 class="resume-heading">Education</h2>
              <div class="mt-4">
                <h3 class="font-display text-sm font-bold leading-snug text-ink">
                  {{ education.title }}
                </h3>
                <p class="mt-0.5 text-xs font-medium text-accent">{{ education.org }}</p>
                <p class="text-[11px] font-medium text-ink-soft">
                  {{ education.year }}
                </p>
                <p class="mt-1 text-[13px] leading-relaxed text-ink-muted">
                  {{ education.resumeDescription }}
                </p>
              </div>
            </section>

            <section class="avoid-break">
              <h2 class="resume-heading">QA practice</h2>
              <p class="mt-4 text-[12px] leading-relaxed text-ink-muted">
                {{ additionalSkills.join(' · ') }}
              </p>
            </section>

            <section class="avoid-break">
              <h2 class="resume-heading">Recognition</h2>
              <p class="mt-4 text-xs font-medium text-accent">Sun Asterisk Philippines</p>
              <ul class="resume-awards mt-1.5 space-y-1">
                <li v-for="award in awards" :key="award.title" class="text-[11px] leading-relaxed">
                  <span class="font-semibold text-ink">{{ award.title }}</span>
                </li>
              </ul>
            </section>

          </aside>
        </div>

        <footer class="resume-footer mt-8 border-t border-line pt-4 text-[10px] text-ink-soft">
          <p>References available on request.</p>
        </footer>
      </article>

      <p class="print-hidden mt-4 text-center text-[11px] text-ink-soft">
        Use your browser's print dialog to save this page as a PDF.
      </p>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import PixelScene from '@/components/PixelScene.vue'
import { additionalSkills, categories } from '@/data/skillsData'
import { awards, timeline } from '@/data/timelineData'
import { projects } from '@/data/projectsData'
import { site } from '@/data/siteData'

const summary =
  'Junior Software QA Engineer with 2+ years across SDLC and Agile projects. Designs traceable test coverage, audits regression suites, and builds AI-assisted QA workflows.'

const experience = [...timeline]
  .reverse()
  .filter((item) => !item.title.startsWith('Diploma'))
  .map((item) => ({
    ...item,
    year: item.current ? `${item.year} – Present` : item.year,
  }))

const education = timeline.find((item) => item.title.startsWith('Diploma'))

function printResume() {
  window.print()
}
</script>

<style scoped>
.resume-heading {
  @apply text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft;
}

.avoid-break {
  break-inside: avoid;
}

@media print {
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
    padding-bottom: 0.65rem !important;
  }

  .resume-header h1 {
    font-size: 26px !important;
    line-height: 1.1;
  }

  .resume-header h1 + p {
    margin-top: 2px;
    font-size: 13px !important;
  }

  .resume-summary {
    margin-top: 0.55rem !important;
    font-size: 13px !important;
    line-height: 1.55 !important;
  }

  .resume-grid {
    display: grid !important;
    grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr);
    gap: 1.5rem !important;
    margin-top: 1rem !important;
  }

  .resume-main,
  .resume-aside {
    display: block !important;
  }

  .resume-main > section + section,
  .resume-aside > section + section {
    margin-top: 1.2rem !important;
  }

  .resume-main section > div,
  .resume-aside section > div,
  .resume-aside section > p,
  .resume-aside section > ul {
    margin-top: 0.4rem !important;
  }

  .resume-stack > * + * {
    margin-top: 0.85rem !important;
  }

  .resume-awards > * + * {
    margin-top: 2px !important;
  }

  .resume-main section p,
  .resume-aside section p,
  .resume-aside section li {
    font-size: 13px !important;
    line-height: 1.55 !important;
  }

  .resume-aside section ul.resume-awards li {
    font-size: 12px !important;
  }

  .resume-heading {
    font-size: 8.5px !important;
    letter-spacing: 0.16em !important;
  }

  .resume-footer {
    margin-top: 1.3rem !important;
    padding-top: 0.55rem !important;
  }

  a {
    color: inherit !important;
    text-decoration: none !important;
  }

  @page {
    margin: 11mm 12mm;
  }
}
</style>
