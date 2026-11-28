<template>
  <div class="relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0 grid-bg" aria-hidden="true"></div>
    <PixelBackdrop variant="hero" />
    <div
      class="pointer-events-none absolute -right-40 -top-24 h-[520px] w-[520px] rounded-full bg-accent/[0.06] blur-3xl"
      aria-hidden="true"
    ></div>

    <div
      class="container-page relative z-10 grid items-center gap-14 pb-20 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-24"
    >
      <div>
        <p class="eyebrow">
          <span class="eyebrow-dot" aria-hidden="true"></span>
          Software QA Engineer, Philippines
        </p>

        <h1
          class="mt-6 text-balance font-display text-[44px] font-extrabold leading-[1.02] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[68px]"
        >
          I help teams ship software that
          <span class="text-accent">holds up.</span>
          <PixelRobot />
        </h1>

        <p class="mt-6 max-w-xl text-[17px] leading-[1.7] text-ink-muted sm:text-[19px]">
          I'm <span class="font-semibold text-ink">Johnlyn del Castillo</span>, a Junior Software QA
          Engineer at Sun Asterisk Philippines. I design test coverage, audit regression suites, and build
          QA workflows that make releases predictable.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-3">
          <router-link to="/#work" class="btn-primary group">
            Explore my work
            <Icon
              icon="mdi:arrow-down-right"
              class="text-lg transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </router-link>
          <router-link to="/resume" class="btn-secondary group">
            <Icon
              icon="mdi:file-document-outline"
              class="text-lg text-ink-muted"
              aria-hidden="true"
            />
            View CV
          </router-link>
        </div>

        <div class="mt-8 flex items-center gap-2">
          <span class="mr-1 text-[12px] font-medium text-ink-soft">Find me</span>
          <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.href"
            :target="link.href.startsWith('http') ? '_blank' : undefined"
            :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
            class="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink-muted transition duration-200 hover:border-ink/20 hover:text-ink"
          >
            <Icon :icon="link.icon" class="text-lg" aria-hidden="true" />
            <span class="sr-only">{{ link.label }}</span>
          </a>
        </div>

        <dl class="mt-10 grid max-w-lg grid-cols-3 divide-x divide-line border-t border-line pt-6">
          <div class="pr-4">
            <dd class="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">2+ yrs</dd>
            <dt class="mt-1 text-[12px] font-medium text-ink-soft">in QA</dt>
          </div>
          <div class="px-4">
            <dd class="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">3</dd>
            <dt class="mt-1 text-[12px] font-medium text-ink-soft">awards</dt>
          </div>
          <div class="pl-4">
            <dd class="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">5</dd>
            <dt class="mt-1 text-[12px] font-medium text-ink-soft">projects</dt>
          </div>
        </dl>
      </div>

      <div class="relative mx-auto hidden w-full max-w-[490px] lg:mr-0 lg:block">
        <div class="absolute -inset-5 rounded-[2rem] bg-accent/[0.07] blur-2xl" aria-hidden="true"></div>

        <div
          class="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0C1311] shadow-report"
          role="region"
          aria-label="Interactive QA suite runner"
        >
          <div class="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
            <div class="flex min-w-0 items-center gap-1.5">
              <span class="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/80"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/80"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-[#28C840]/80"></span>
              <span class="ml-2 truncate font-mono text-[10px] text-white/45 sm:text-[11px]">
                {{ activeSuite.key }}-report — qa
              </span>
            </div>
            <div class="flex shrink-0 items-center gap-2">
              <button
                type="button"
                class="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 text-white/55 transition hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-300 disabled:opacity-40"
                :disabled="isRunning"
                aria-label="Replay QA suite"
                title="Replay"
                @click="replayReport"
              >
                <Icon icon="mdi:replay" class="text-sm" aria-hidden="true" />
              </button>
              <button
                type="button"
                class="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 text-white/55 transition hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-300"
                :aria-label="copied ? 'Copied' : 'Copy report output'"
                :title="copied ? 'Copied' : 'Copy'"
                @click="copyReport"
              >
                <Icon :icon="copied ? 'mdi:check' : 'mdi:content-copy'" class="text-sm" aria-hidden="true" />
              </button>
              <span
                class="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-emerald-300 sm:text-[10px]"
              >
                <span class="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400"></span>
                {{ isRunning ? 'run' : 'pass' }}
              </span>
            </div>
          </div>

          <div
            class="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.02] px-4 py-2 sm:px-5"
            role="tablist"
            aria-label="QA suites"
          >
            <button
              v-for="suite in suites"
              :key="suite.key"
              type="button"
              role="tab"
              :aria-selected="activeSuiteKey === suite.key"
              class="rounded-md px-2.5 py-1 font-mono text-[10px] font-medium transition sm:text-[11px]"
              :class="
                activeSuiteKey === suite.key
                  ? 'bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30'
                  : 'text-white/50 hover:bg-white/5 hover:text-white/80'
              "
              @click="selectSuite(suite.key)"
            >
              {{ suite.label }}
            </button>
          </div>

          <div class="p-5 font-mono text-[11px] leading-6 sm:p-6 sm:text-xs" aria-live="polite" aria-atomic="true">
            <p class="flex items-center text-white/70">
              <span class="text-emerald-400">~</span>
              <span class="mx-1.5 text-white/30">$</span>
              <span
                :key="`${activeSuiteKey}-${runId}`"
                class="cmd-type"
                :style="{
                  '--cmd-ch': `${activeSuite.command.length}ch`,
                  '--cmd-steps': activeSuite.command.length,
                }"
              >
                {{ activeSuite.command }}
              </span>
              <span class="cmd-caret" aria-hidden="true">|</span>
            </p>

            <div class="mt-3 flex items-center justify-between gap-3 text-[10px] text-white/45">
              <button
                type="button"
                class="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 transition hover:bg-white/5 hover:text-white/70"
                :aria-expanded="checksExpanded"
                aria-controls="report-checks"
                @click="checksExpanded = !checksExpanded"
              >
                <Icon :icon="checksExpanded ? 'mdi:chevron-down' : 'mdi:chevron-right'" class="text-sm" aria-hidden="true" />
                {{ checksExpanded ? 'Hide checks' : 'Show checks' }}
              </button>
              <span>{{ activeSuite.checks.length }} checks · {{ isRunning ? 'running…' : 'idle' }}</span>
            </div>

            <div v-show="checksExpanded" id="report-checks" class="mt-3 space-y-1.5">
              <div
                v-for="(check, index) in activeSuite.checks"
                :key="`${activeSuiteKey}-${check}-${runId}`"
                :style="{ '--i': index }"
                class="report-check flex items-center justify-between gap-4"
              >
                <span class="flex min-w-0 items-center gap-2 text-white/70">
                  <Icon
                    icon="mdi:check"
                    class="shrink-0 text-sm text-emerald-400"
                    aria-hidden="true"
                  />
                  <span class="truncate">{{ check }}</span>
                </span>
                <span class="report-pass shrink-0 text-[10px] uppercase tracking-wider text-emerald-300/80">
                  pass
                </span>
              </div>
            </div>

            <div class="my-4 border-t border-white/10"></div>

            <div class="flex items-end justify-between gap-4">
              <div>
                <p class="text-[9px] uppercase tracking-[0.2em] text-white/45">Checks</p>
                <p class="mt-1 font-display text-3xl font-bold tracking-tight text-white">
                  {{ passedChecks }}<span class="text-emerald-400">/{{ activeSuite.total }}</span>
                </p>
              </div>
              <div class="text-right text-[10px] leading-5 text-white/55">
                <p>0 failed</p>
                <p>{{ activeSuite.duration }}</p>
              </div>
            </div>

            <div
              :key="`status-${activeSuiteKey}-${runId}`"
              :style="{ '--i': activeSuite.checks.length }"
              class="report-check mt-4 flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-2 text-[10px] text-emerald-300"
            >
              <span class="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400"></span>
              {{ activeSuite.summary }}
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { socialLinks } from '@/data/siteData'
import PixelBackdrop from '@/components/PixelBackdrop.vue'
import PixelRobot from '@/components/PixelRobot.vue'

const suites = [
  {
    key: 'release',
    label: 'Release',
    command: 'qa run --suite release',
    total: 42,
    duration: '1.42s',
    summary: 'All checks passed — ready to ship',
    checks: [
      'UI & responsive layout',
      'Navigation & links',
      'Accessibility checks',
      'Console & network',
      'Cross-browser smoke',
    ],
  },
  {
    key: 'regression',
    label: 'Regression',
    command: 'qa run --suite regression',
    total: 64,
    duration: '2.18s',
    summary: 'Zero suite drift — critical paths verified',
    checks: [
      'Core user flows',
      'Boundary & edge inputs',
      'Auth & role permissions',
      'Legacy case alignment',
      'Data state persistence',
    ],
  },
  {
    key: 'api',
    label: 'API',
    command: 'qa run --suite api',
    total: 28,
    duration: '0.86s',
    summary: 'All contracts green — endpoints stable',
    checks: [
      'Status & schema checks',
      'Token & session expiry',
      'Error payload handling',
      'Validation & rate limits',
      'Idempotent retries',
    ],
  },
]

const activeSuiteKey = ref('release')
const activeSuite = computed(
  () => suites.find((suite) => suite.key === activeSuiteKey.value) ?? suites[0],
)
const passedChecks = ref(0)
const runId = ref(0)
const isRunning = ref(false)
const checksExpanded = ref(true)
const copied = ref(false)

let activeCountRun = 0
let startDelayTimer = null
let copyTimer = null

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function startChecks() {
  const run = ++activeCountRun
  const targetTotal = activeSuite.value.total
  passedChecks.value = 0
  isRunning.value = true

  if (startDelayTimer) window.clearTimeout(startDelayTimer)

  if (prefersReducedMotion()) {
    passedChecks.value = targetTotal
    isRunning.value = false
    return
  }

  const duration = 850
  const easeOut = (t) => 1 - Math.pow(1 - t, 3)

  const beginAnimation = () => {
    const start = performance.now()
    const tick = (now) => {
      if (run !== activeCountRun) return
      const progress = Math.min(1, (now - start) / duration)
      passedChecks.value = Math.round(targetTotal * easeOut(progress))
      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        isRunning.value = false
      }
    }
    requestAnimationFrame(tick)
  }

  startDelayTimer = window.setTimeout(() => {
    if (run === activeCountRun) beginAnimation()
  }, 850)
}

function replayReport() {
  runId.value += 1
  startChecks()
}

function selectSuite(key) {
  if (activeSuiteKey.value === key) {
    replayReport()
    return
  }
  activeSuiteKey.value = key
  replayReport()
}

function reportOutput() {
  const suite = activeSuite.value
  return [
    `~ $ ${suite.command}`,
    ...suite.checks.map((check) => `✓ ${check} PASS`),
    `Checks: ${suite.total}/${suite.total}`,
    `0 failed`,
    suite.duration,
    suite.summary,
  ].join('\n')
}

async function copyReport() {
  try {
    await navigator.clipboard.writeText(reportOutput())
    copied.value = true
    if (copyTimer) window.clearTimeout(copyTimer)
    copyTimer = window.setTimeout(() => { copied.value = false }, 1500)
  } catch {
    copied.value = false
  }
}

onMounted(() => {
  replayReport()
})

onBeforeUnmount(() => {
  if (startDelayTimer) window.clearTimeout(startDelayTimer)
  if (copyTimer) window.clearTimeout(copyTimer)
  activeCountRun += 1
})
</script>
