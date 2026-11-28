<template>
  <div :class="center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'">
    <p class="eyebrow">
      <span class="eyebrow-dot" aria-hidden="true"></span>
      <span>{{ eyebrow }}</span>
    </p>

    <h2
      class="mt-5 font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] text-ink text-balance sm:text-4xl lg:text-[42px]"
    >
      <slot name="title">{{ title }}</slot>
    </h2>

    <p
      v-if="description || $slots.description"
      class="mt-4 max-w-2xl text-[16px] leading-[1.7] text-ink-muted sm:text-[17px]"
      :class="center ? 'mx-auto' : ''"
    >
      <slot name="description">{{ description }}</slot>
    </p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  center: {
    type: Boolean,
    default: false,
  },
})
</script>
