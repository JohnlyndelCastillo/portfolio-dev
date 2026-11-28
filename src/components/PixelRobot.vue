<template>
  <button
    type="button"
    class="pixel-robot-button"
    :aria-label="waved ? 'Playful QA robot: waving' : 'Playful QA robot'"
    :title="waved ? 'Waving' : 'Wave'"
    @click="wave"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    @focus="hovered = true"
    @blur="hovered = false"
    @keydown.enter.prevent="wave"
    @keydown.space.prevent="wave"
  >
    <svg
      :key="waveKey"
      class="pixel-robot-inline"
      :class="{ 'pixel-robot-hover': hovered }"
      viewBox="0 0 64 64"
      width="64"
      height="64"
      shape-rendering="crispEdges"
      aria-hidden="true"
    >
      <g fill="rgb(var(--color-accent))">
        <g class="pixel-robot-body">
          <rect x="20" y="24" width="24" height="24" fill-opacity=".5"/>
          <rect x="24" y="14" width="16" height="12" fill-opacity=".55"/>
          <rect x="30" y="8" width="4" height="6" fill-opacity=".55"/>
          <rect x="28" y="6" width="8" height="2" fill-opacity=".55"/>
          <rect class="pixel-robot-eye" x="27" y="18" width="4" height="4" fill="#6EE7B7"/>
          <rect class="pixel-robot-eye" x="33" y="18" width="4" height="4" fill="#6EE7B7"/>
          <rect x="27" y="23" width="10" height="2" fill="#6EE7B7"/>
          <rect x="14" y="28" width="6" height="10" fill-opacity=".45"/>
          <rect x="26" y="30" width="12" height="12" fill="rgb(var(--color-surface))"/>
          <rect x="28" y="36" width="3" height="3" fill="#6EE7B7"/>
          <rect x="33" y="35" width="3" height="3" fill="rgb(var(--color-accent))"/>
          <rect x="38" y="34" width="3" height="3" fill="#6EE7B7"/>
        </g>
        <rect class="pixel-robot-arm pixel-robot-wave" x="44" y="24" width="6" height="10" fill-opacity=".45"/>
        <rect class="pixel-robot-foot pixel-robot-foot-a" x="22" y="48" width="6" height="4" fill-opacity=".45"/>
        <rect class="pixel-robot-foot pixel-robot-foot-b" x="36" y="48" width="6" height="4" fill-opacity=".45"/>
        <rect class="pixel-robot-spark pixel-robot-spark-a" x="8" y="12" width="2" height="2" fill-opacity=".35"/>
        <rect class="pixel-robot-spark pixel-robot-spark-b" x="54" y="14" width="2" height="2" fill-opacity=".35"/>
      </g>
    </svg>
  </button>
</template>

<script setup>
import { ref } from 'vue'

const waveKey = ref(0)
const hovered = ref(false)
const waved = ref(false)

function wave() {
  waveKey.value += 1
  waved.value = true
  window.setTimeout(() => { waved.value = false }, 900)
}
</script>
