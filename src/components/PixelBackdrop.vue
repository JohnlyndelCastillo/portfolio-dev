<template>
  <div
    ref="rootEl"
    class="pointer-events-none absolute inset-0 overflow-hidden select-none"
    aria-hidden="true"
  >
    <!-- Time-of-day atmospheric sky wash -->
    <div
      v-if="variant !== 'night'"
      class="absolute inset-0 transition-colors duration-700"
      :class="skyWashClass"
    ></div>

    <!-- Hero: dynamic time-of-day horizon & drifting pixel clouds -->
    <svg
      v-if="variant === 'hero'"
      class="pixel-backdrop-hero absolute inset-x-0 bottom-0 h-[62%] w-full sm:h-[72%]"
      viewBox="0 0 320 96"
      preserveAspectRatio="xMidYMax slice"
      shape-rendering="crispEdges"
    >
      <!-- Celestial body: sun (morning/day/dusk) or pixel moon + stars (night/dark) -->
      <g v-if="sceneryMood === 'night'" :style="layerShift(0.35)">
        <g :fill="starColor">
          <rect class="pixel-star-a" x="34" y="10" width="2" height="2" fill-opacity="0.55" />
          <rect class="pixel-star-b" x="92" y="16" width="2" height="2" fill-opacity="0.48" />
          <rect class="pixel-star-c" x="156" y="8" width="2" height="2" fill-opacity="0.52" />
          <rect class="pixel-star-a" x="218" y="14" width="2" height="2" fill-opacity="0.5" />
          <rect class="pixel-star-b" x="294" y="18" width="2" height="2" fill-opacity="0.55" />
        </g>
        <g fill="#6EE7B7" fill-opacity="0.42">
          <rect x="268" y="10" width="6" height="2" />
          <rect x="266" y="12" width="4" height="2" />
          <rect x="264" y="14" width="4" height="4" />
          <rect x="266" y="18" width="4" height="2" />
          <rect x="268" y="20" width="6" height="2" />
        </g>
      </g>
      <g v-else :style="layerShift(0.3)">
        <g :fill="celestialColor" :fill-opacity="sceneryMood === 'dusk' ? 0.36 : 0.28">
          <rect x="264" y="10" width="8" height="2" />
          <rect x="262" y="12" width="12" height="8" />
          <rect x="264" y="20" width="8" height="2" />
        </g>
      </g>

      <!-- Drifting pixel clouds -->
      <g :style="layerShift(0.75)">
        <g class="pixel-cloud-a" :fill="accentTint" fill-opacity="0.18">
          <rect x="28" y="14" width="16" height="2" />
          <rect x="24" y="16" width="24" height="2" />
          <rect x="22" y="18" width="28" height="2" />
          <rect x="26" y="20" width="18" height="2" />
        </g>
        <g class="pixel-cloud-b" :fill="accentTint" fill-opacity="0.16">
          <rect x="136" y="8" width="14" height="2" />
          <rect x="132" y="10" width="22" height="2" />
          <rect x="130" y="12" width="26" height="2" />
        </g>
        <g class="pixel-cloud-a" :fill="accentTint" fill-opacity="0.18">
          <rect x="244" y="16" width="18" height="2" />
          <rect x="238" y="18" width="30" height="2" />
          <rect x="240" y="20" width="24" height="2" />
        </g>
      </g>

      <!-- Subtle floating pixel sparkles -->
      <g fill="rgb(var(--color-signal))">
        <rect class="pixel-star-a" x="72" y="26" width="2" height="2" fill-opacity="0.5" />
        <rect class="pixel-star-b" x="196" y="20" width="2" height="2" fill-opacity="0.46" />
        <rect class="pixel-star-c" x="288" y="28" width="2" height="2" fill-opacity="0.52" />
      </g>

      <!-- Far pixel ridge / horizon -->
      <g :fill="ridgeColor" :fill-opacity="isDark ? 0.65 : 0.85" :style="layerShift(-0.35)">
        <rect x="0" y="72" width="320" height="24" />
        <rect x="14" y="68" width="28" height="4" />
        <rect x="20" y="64" width="16" height="4" />
        <rect x="76" y="66" width="38" height="6" />
        <rect x="86" y="62" width="18" height="4" />
        <rect x="152" y="68" width="44" height="4" />
        <rect x="164" y="64" width="20" height="4" />
        <rect x="228" y="64" width="46" height="8" />
        <rect x="240" y="60" width="22" height="4" />
        <rect x="292" y="68" width="28" height="4" />
      </g>

      <!-- Midground pixel skyline & stepped terrain -->
      <g :fill="accentTint" :fill-opacity="isDark ? 0.24 : 0.16" :style="layerShift(-0.6)">
        <rect x="0" y="80" width="320" height="16" />
        <rect x="8" y="74" width="16" height="6" />
        <rect x="34" y="76" width="22" height="4" />
        <rect x="64" y="70" width="14" height="10" />
        <rect x="68" y="66" width="6" height="4" />
        <rect x="118" y="74" width="20" height="6" />
        <rect x="146" y="72" width="12" height="8" />
        <rect x="194" y="70" width="18" height="10" />
        <rect x="200" y="64" width="2" height="6" />
        <rect x="224" y="74" width="16" height="6" />
        <rect x="256" y="68" width="22" height="12" />
        <rect x="262" y="64" width="10" height="4" />
        <rect x="290" y="74" width="18" height="6" />
      </g>

      <!-- Lit pixel windows (brighter in dusk / night) -->
      <g :fill="windowColor" :fill-opacity="windowOpacity" :style="layerShift(-0.6)">
        <rect x="68" y="74" width="2" height="2" />
        <rect x="72" y="74" width="2" height="2" />
        <rect x="198" y="74" width="2" height="2" />
        <rect x="204" y="74" width="2" height="2" />
        <rect x="260" y="72" width="2" height="2" />
        <rect x="266" y="72" width="2" height="2" />
        <rect x="272" y="72" width="2" height="2" />
      </g>
    </svg>

    <!-- About: rolling stepped pixel hills & quiet horizon -->
    <svg
      v-else-if="variant === 'about'"
      class="pixel-backdrop-soft absolute inset-x-0 bottom-0 h-[44%] w-full"
      viewBox="0 0 320 72"
      preserveAspectRatio="xMidYMax slice"
      shape-rendering="crispEdges"
    >
      <g :fill="ridgeColor" :fill-opacity="isDark ? 0.55 : 0.78" :style="layerShift(-0.25)">
        <rect x="0" y="54" width="320" height="18" />
        <rect x="22" y="48" width="52" height="6" />
        <rect x="34" y="44" width="28" height="4" />
        <rect x="186" y="50" width="64" height="4" />
        <rect x="202" y="46" width="32" height="4" />
      </g>
      <g :fill="accentTint" :fill-opacity="isDark ? 0.22 : 0.14" :style="layerShift(0.35)">
        <rect x="0" y="62" width="320" height="10" />
        <rect x="108" y="58" width="46" height="4" />
        <rect x="264" y="56" width="36" height="6" />
        <rect class="pixel-star-a" x="280" y="48" width="2" height="2" fill-opacity="0.55" />
        <rect class="pixel-star-b" x="48" y="38" width="2" height="2" fill-opacity="0.5" />
      </g>
    </svg>

    <!-- Craft: minimalist pixel signal / pipeline horizon -->
    <svg
      v-else-if="variant === 'craft'"
      class="pixel-backdrop-soft absolute inset-x-0 bottom-0 h-[40%] w-full"
      viewBox="0 0 320 64"
      preserveAspectRatio="xMidYMax slice"
      shape-rendering="crispEdges"
    >
      <g :fill="accentTint" :fill-opacity="isDark ? 0.22 : 0.14" :style="layerShift(0.4)">
        <rect x="0" y="52" width="320" height="12" />
        <rect x="32" y="46" width="44" height="2" />
        <rect x="92" y="46" width="52" height="2" />
        <rect x="164" y="46" width="48" height="2" />
        <rect x="232" y="46" width="56" height="2" />
      </g>
      <g fill="rgb(var(--color-signal))" :style="layerShift(0.4)">
        <rect class="pixel-star-a" x="52" y="44" width="4" height="4" fill-opacity="0.48" />
        <rect class="pixel-star-b" x="116" y="44" width="4" height="4" fill-opacity="0.45" />
        <rect class="pixel-star-c" x="186" y="44" width="4" height="4" fill-opacity="0.5" />
        <rect class="pixel-star-a" x="258" y="44" width="4" height="4" fill-opacity="0.48" />
      </g>
    </svg>

    <!-- Experience: ascending stepped milestone terraces -->
    <svg
      v-else-if="variant === 'experience'"
      class="pixel-backdrop-soft absolute inset-x-0 bottom-0 h-[42%] w-full"
      viewBox="0 0 320 72"
      preserveAspectRatio="xMidYMax slice"
      shape-rendering="crispEdges"
    >
      <g :fill="ridgeColor" :fill-opacity="isDark ? 0.55 : 0.78" :style="layerShift(-0.3)">
        <rect x="0" y="58" width="320" height="14" />
        <rect x="84" y="52" width="236" height="6" />
        <rect x="168" y="46" width="152" height="6" />
        <rect x="242" y="40" width="78" height="6" />
      </g>
      <g :fill="accentTint" :fill-opacity="isDark ? 0.24 : 0.16" :style="layerShift(0.35)">
        <rect class="pixel-star-b" x="96" y="48" width="2" height="2" fill-opacity="0.55" />
        <rect class="pixel-star-c" x="180" y="42" width="2" height="2" fill-opacity="0.55" />
        <rect class="pixel-star-a" x="254" y="34" width="2" height="2" fill-opacity="0.6" />
        <rect x="262" y="36" width="14" height="4" />
      </g>
    </svg>

    <!-- Work: architectural pixel skyline silhouettes -->
    <svg
      v-else-if="variant === 'work'"
      class="pixel-backdrop-soft absolute inset-x-0 bottom-0 h-[40%] w-full"
      viewBox="0 0 320 64"
      preserveAspectRatio="xMidYMax slice"
      shape-rendering="crispEdges"
    >
      <g :fill="accentTint" :fill-opacity="isDark ? 0.22 : 0.14" :style="layerShift(-0.45)">
        <rect x="0" y="50" width="320" height="14" />
        <rect x="18" y="42" width="18" height="8" />
        <rect x="44" y="38" width="14" height="12" />
        <rect x="102" y="44" width="22" height="6" />
        <rect x="196" y="40" width="16" height="10" />
        <rect x="220" y="34" width="20" height="16" />
        <rect x="274" y="42" width="24" height="8" />
      </g>
      <g :fill="windowColor" :fill-opacity="windowOpacity" :style="layerShift(-0.45)">
        <rect x="48" y="42" width="2" height="2" />
        <rect x="52" y="42" width="2" height="2" />
        <rect x="224" y="38" width="2" height="2" />
        <rect x="230" y="38" width="2" height="2" />
        <rect x="224" y="44" width="2" height="2" />
      </g>
    </svg>

    <!-- Skills: ambient pixel constellation & modular blocks -->
    <svg
      v-else-if="variant === 'skills'"
      class="pixel-backdrop-soft absolute inset-0 h-full w-full"
      viewBox="0 0 320 120"
      preserveAspectRatio="xMidYMax slice"
      shape-rendering="crispEdges"
    >
      <g :fill="accentTint" :fill-opacity="isDark ? 0.24 : 0.15" :style="layerShift(0.3)">
        <rect x="24" y="24" width="6" height="6" />
        <rect x="34" y="30" width="4" height="4" />
        <rect x="284" y="20" width="6" height="6" />
        <rect x="276" y="28" width="4" height="4" />
        <rect x="0" y="106" width="320" height="14" />
        <rect x="128" y="100" width="16" height="6" />
        <rect x="150" y="96" width="20" height="10" />
        <rect x="176" y="102" width="14" height="4" />
      </g>
      <g fill="rgb(var(--color-signal))" :style="layerShift(-0.2)">
        <rect class="pixel-star-a" x="64" y="42" width="2" height="2" fill-opacity="0.5" />
        <rect class="pixel-star-b" x="248" y="46" width="2" height="2" fill-opacity="0.48" />
        <rect class="pixel-star-c" x="158" y="90" width="2" height="2" fill-opacity="0.55" />
      </g>
    </svg>

    <!-- Night: starlit dark-emerald horizon for the dark Contact card -->
    <svg
      v-else-if="variant === 'night'"
      class="pixel-backdrop-night absolute inset-0 h-full w-full"
      viewBox="0 0 320 140"
      preserveAspectRatio="xMidYMax slice"
      shape-rendering="crispEdges"
    >
      <!-- Pixel stars -->
      <g fill="#FFFFFF" :style="layerShift(0.2)">
        <rect class="pixel-star-a" x="24" y="18" width="2" height="2" fill-opacity="0.4" />
        <rect class="pixel-star-b" x="62" y="34" width="2" height="2" fill-opacity="0.32" />
        <rect class="pixel-star-c" x="98" y="14" width="2" height="2" fill-opacity="0.42" />
        <rect class="pixel-star-a" x="142" y="28" width="2" height="2" fill-opacity="0.3" />
        <rect class="pixel-star-b" x="186" y="16" width="2" height="2" fill-opacity="0.4" />
        <rect class="pixel-star-c" x="228" y="32" width="2" height="2" fill-opacity="0.36" />
        <rect class="pixel-star-a" x="268" y="20" width="2" height="2" fill-opacity="0.42" />
        <rect class="pixel-star-b" x="298" y="42" width="2" height="2" fill-opacity="0.32" />
      </g>

      <!-- Emerald accent stars & pixel crescent -->
      <g fill="#6EE7B7" :style="layerShift(0.3)">
        <rect class="pixel-star-b" x="44" y="24" width="2" height="2" fill-opacity="0.55" />
        <rect class="pixel-star-c" x="164" y="22" width="2" height="2" fill-opacity="0.5" />
        <rect class="pixel-star-a" x="250" y="14" width="2" height="2" fill-opacity="0.6" />

        <g fill-opacity="0.32">
          <rect x="282" y="16" width="6" height="2" />
          <rect x="280" y="18" width="4" height="2" />
          <rect x="278" y="20" width="4" height="4" />
          <rect x="280" y="24" width="4" height="2" />
          <rect x="282" y="26" width="6" height="2" />
        </g>
      </g>

      <!-- Drifting night pixel clouds -->
      <g :style="layerShift(0.55)">
        <g class="pixel-cloud-b" fill="#6EE7B7" fill-opacity="0.14">
          <rect x="80" y="48" width="18" height="2" />
          <rect x="74" y="50" width="30" height="2" />
          <rect x="78" y="52" width="22" height="2" />
        </g>
        <g class="pixel-cloud-a" fill="#FFFFFF" fill-opacity="0.12">
          <rect x="210" y="44" width="20" height="2" />
          <rect x="204" y="46" width="32" height="2" />
          <rect x="208" y="48" width="24" height="2" />
        </g>
      </g>

      <!-- Distant ridge -->
      <g fill="#0F766E" fill-opacity="0.32" :style="layerShift(-0.3)">
        <rect x="0" y="114" width="320" height="26" />
        <rect x="18" y="108" width="32" height="6" />
        <rect x="26" y="104" width="16" height="4" />
        <rect x="92" y="110" width="42" height="4" />
        <rect x="104" y="106" width="18" height="4" />
        <rect x="176" y="108" width="38" height="6" />
        <rect x="186" y="102" width="16" height="6" />
        <rect x="248" y="106" width="48" height="8" />
        <rect x="262" y="100" width="20" height="6" />
      </g>

      <!-- Foreground pixel skyline -->
      <g fill="#070C0A" fill-opacity="0.8" :style="layerShift(-0.5)">
        <rect x="0" y="122" width="320" height="18" />
        <rect x="10" y="114" width="14" height="8" />
        <rect x="36" y="118" width="18" height="4" />
        <rect x="64" y="110" width="16" height="12" />
        <rect x="70" y="104" width="2" height="6" />
        <rect x="122" y="116" width="20" height="6" />
        <rect x="150" y="112" width="14" height="10" />
        <rect x="198" y="114" width="16" height="8" />
        <rect x="226" y="110" width="20" height="12" />
        <rect x="276" y="116" width="18" height="6" />
      </g>

      <!-- Tiny lit pixel windows in emerald -->
      <g fill="#6EE7B7" fill-opacity="0.6" :style="layerShift(-0.5)">
        <rect x="14" y="118" width="2" height="2" />
        <rect x="68" y="114" width="2" height="2" />
        <rect x="74" y="114" width="2" height="2" />
        <rect class="pixel-star-c" x="70" y="102" width="2" height="2" fill-opacity="0.8" />
        <rect x="154" y="116" width="2" height="2" />
        <rect x="230" y="114" width="2" height="2" />
        <rect x="236" y="114" width="2" height="2" />
        <rect x="230" y="118" width="2" height="2" />
      </g>
    </svg>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useTheme } from '@/composables/useTheme'

defineProps({
  variant: {
    type: String,
    default: 'hero',
    validator: (value) =>
      ['hero', 'about', 'craft', 'experience', 'work', 'skills', 'night'].includes(value),
  },
})

const { isDark, sceneryMood } = useTheme()
const rootEl = ref(null)
const scrollOffset = ref(0)

const skyWashClass = computed(() => {
  switch (sceneryMood.value) {
    case 'morning':
      return 'bg-gradient-to-b from-amber-500/[0.06] via-transparent to-accent/[0.07]'
    case 'dusk':
      return 'bg-gradient-to-b from-orange-500/[0.07] via-transparent to-accent/[0.08]'
    case 'night':
      return 'bg-gradient-to-b from-emerald-500/[0.05] via-transparent to-[#070C0A]/40'
    default:
      return 'bg-gradient-to-b from-transparent via-transparent to-accent/[0.06]'
  }
})

const accentTint = computed(() => 'rgb(var(--color-accent))')
const ridgeColor = computed(() => 'rgb(var(--color-line))')
const starColor = computed(() => (isDark.value ? '#FFFFFF' : 'rgb(var(--color-accent))'))

const celestialColor = computed(() => {
  if (sceneryMood.value === 'morning') return '#D97706'
  if (sceneryMood.value === 'dusk') return '#EA580C'
  return 'rgb(var(--color-accent))'
})

const windowColor = computed(() =>
  sceneryMood.value === 'night' || sceneryMood.value === 'dusk'
    ? '#6EE7B7'
    : 'rgb(var(--color-accent))',
)

const windowOpacity = computed(() =>
  sceneryMood.value === 'night' ? 0.65 : sceneryMood.value === 'dusk' ? 0.5 : 0.34,
)

function layerShift(factor) {
  if (!scrollOffset.value) return undefined
  const x = (scrollOffset.value * factor).toFixed(2)
  return { transform: `translate3d(${x}px, 0, 0)` }
}

let frameId = null

function updateParallax() {
  frameId = null
  const el = rootEl.value
  if (!el) return

  const rect = el.getBoundingClientRect()
  const viewportHeight = window.innerHeight || 1
  if (rect.bottom < 0 || rect.top > viewportHeight) return

  const centerProgress = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight
  scrollOffset.value = Math.max(-12, Math.min(12, centerProgress * 10))
}

function onScroll() {
  if (frameId !== null) return
  frameId = window.requestAnimationFrame(updateParallax)
}

onMounted(() => {
  if (
    typeof window === 'undefined' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return
  }
  updateParallax()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
    if (frameId !== null) window.cancelAnimationFrame(frameId)
  }
})
</script>
