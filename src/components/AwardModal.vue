<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="award-dialog-title"
    >
      <div class="absolute inset-0 bg-[#0C1311]/70 backdrop-blur-sm" @click="emit('close')"></div>

      <div
        ref="dialog"
        class="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
      >
        <div class="flex items-start justify-between gap-4 border-b border-line px-5 py-4 sm:px-6">
          <div class="flex items-center gap-3">
            <span
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent"
            >
              <Icon :icon="award.icon" class="text-xl" aria-hidden="true" />
            </span>
            <div>
              <h2
                id="award-dialog-title"
                class="font-display text-base font-bold tracking-tight text-ink sm:text-lg"
              >
                {{ award.title }}
              </h2>
              <p class="mt-0.5 text-xs text-ink-muted">{{ award.org }}</p>
            </div>
          </div>

          <button
            ref="closeButton"
            type="button"
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-ink-muted transition hover:border-ink/20 hover:text-ink"
            aria-label="Close certificate viewer"
            @click="emit('close')"
          >
            <Icon icon="mdi:close" class="text-lg" aria-hidden="true" />
          </button>
        </div>

        <div v-if="award.files.length > 1" class="flex shrink-0 overflow-x-auto border-b border-line">
          <button
            v-for="(file, index) in award.files"
            :key="file.file"
            type="button"
            class="whitespace-nowrap border-r border-line px-4 py-2.5 text-xs font-semibold transition"
            :class="
              activeFileIndex === index
                ? 'bg-accent-soft text-accent'
                : 'bg-surface text-ink-muted hover:bg-canvas'
            "
            :aria-pressed="activeFileIndex === index"
            @click="activeFileIndex = index"
          >
            {{ file.label }}
          </button>
        </div>

        <div class="min-h-0 flex-1 overflow-hidden">
          <iframe
            :src="activeFile.file"
            class="hidden h-full min-h-[60vh] w-full border-0 sm:block"
            :title="`${award.title} certificate`"
          ></iframe>

          <div class="flex min-h-[40vh] flex-col items-center justify-center gap-4 p-8 text-center sm:hidden">
            <span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-500 dark:bg-red-950/40 dark:text-red-400">
              <Icon icon="mdi:file-pdf-box" class="text-3xl" aria-hidden="true" />
            </span>
            <div>
              <p class="font-display text-base font-bold text-ink">PDF preview works best on desktop</p>
              <p class="mt-1 text-sm text-ink-muted">
                Open the certificate in a new tab to view it on this device.
              </p>
            </div>
            <a
              :href="activeFile.file"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary"
            >
              Open certificate
              <Icon icon="mdi:open-in-new" class="text-base" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div
          class="flex flex-col gap-2 border-t border-line px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6"
        >
          <p class="text-[11px] font-medium text-ink-soft">PDF certificate</p>
          <a
            :href="activeFile.file"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-ink transition hover:text-accent"
          >
            Open in new tab
            <Icon icon="mdi:open-in-new" class="text-sm" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  award: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['close'])

const activeFileIndex = ref(0)
const closeButton = ref(null)
const dialog = ref(null)
const activeFile = computed(() => props.award.files[activeFileIndex.value])

let previousOverflow = ''
let previouslyFocused = null

function handleKeydown(event) {
  if (event.key === 'Escape') {
    emit('close')
    return
  }

  if (event.key !== 'Tab' || !dialog.value) return

  const focusable = dialog.value.querySelectorAll(
    'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
  )
  if (!focusable.length) return

  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

onMounted(() => {
  previouslyFocused = document.activeElement
  previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', handleKeydown)
  nextTick(() => closeButton.value?.focus())
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = previousOverflow
  if (previouslyFocused?.isConnected) previouslyFocused.focus()
})
</script>
