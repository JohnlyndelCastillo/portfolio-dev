<template>
  <section id="contact" class="section-pad border-t border-line">
    <div class="container-page">
      <div
        class="relative overflow-hidden rounded-3xl bg-[#0C1311] px-4 py-8 dark:border dark:border-line sm:px-8 sm:py-12 lg:px-12 lg:py-14"
      >
        <div class="pointer-events-none absolute inset-0 grid-bg-dark" aria-hidden="true"></div>
        <PixelBackdrop variant="night" />

        <div class="relative z-10 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div class="min-w-0">
            <p class="eyebrow text-white/50">
              <span class="eyebrow-dot bg-emerald-400/80" aria-hidden="true"></span>
              Contact
            </p>

            <h2
              class="mt-5 max-w-lg font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] text-white text-balance sm:text-4xl lg:text-[42px]"
            >
              Let's make the next release a quiet one.
            </h2>

            <p class="mt-4 max-w-md text-[15px] leading-[1.7] text-white/60 sm:text-base">
              Have a QA problem, a role, or a workflow idea? I'd be glad to talk. No spam, just a
              conversation.
            </p>

            <div class="mt-8 space-y-2.5">
              <div
                class="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition duration-200 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <a
                  :href="`mailto:${site.email}`"
                  class="flex min-w-0 flex-1 items-center gap-3"
                >
                  <span
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/60 transition group-hover:text-[#6EE7B7]"
                  >
                    <Icon icon="mdi:email-outline" class="text-lg" aria-hidden="true" />
                  </span>
                  <span class="min-w-0 flex-1">
                    <span class="block text-[11px] font-medium text-white/50">Email</span>
                    <span class="block truncate text-sm text-white/75">{{ site.email }}</span>
                  </span>
                </a>
                <button
                  type="button"
                  class="flex h-8 shrink-0 items-center gap-1.5 rounded-lg border border-white/10 px-2.5 text-[11px] font-medium text-white/65 transition hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-300"
                  :aria-label="emailCopied ? 'Email copied' : 'Copy email address'"
                  @click="copyEmail"
                >
                  <Icon :icon="emailCopied ? 'mdi:check' : 'mdi:content-copy'" class="text-xs" aria-hidden="true" />
                  <span>{{ emailCopied ? 'Copied' : 'Copy' }}</span>
                </button>
              </div>

              <a
                v-for="link in contactLinks"
                :key="link.label"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition duration-200 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <span
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/60 transition group-hover:text-[#6EE7B7]"
                >
                  <Icon :icon="link.icon" class="text-lg" aria-hidden="true" />
                </span>
                <span class="min-w-0 flex-1">
                  <span class="block text-[11px] font-medium text-white/50">
                    {{ link.label }}
                  </span>
                  <span class="block truncate text-sm text-white/75">{{ link.value }}</span>
                </span>
                <Icon
                  icon="mdi:arrow-up-right"
                  class="ml-auto shrink-0 text-white/40 transition group-hover:text-white/70"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div
              class="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/60"
            >
              <span class="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400"></span>
              Usually replies within a day
            </div>
          </div>

          <div class="min-w-0 rounded-2xl border border-white/10 bg-surface p-4 sm:p-7">
            <div class="flex items-start justify-between gap-4">
              <div>
                <h3 class="font-display text-xl font-bold tracking-tight text-ink">
                  Send a message
                </h3>
                <p class="mt-1 text-xs text-ink-muted">Tell me what you're working on.</p>
              </div>
              <span class="mt-1 hidden h-2.5 w-2.5 rounded-full bg-accent sm:block"></span>
            </div>

            <div
              v-if="formState === 'success'"
              class="mt-6 flex flex-col items-start gap-4 rounded-xl border border-accent/20 bg-accent-soft/60 p-5"
              aria-live="polite"
            >
              <span
                class="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white dark:text-[#0B110F]"
              >
                <Icon icon="mdi:check" class="text-xl" aria-hidden="true" />
              </span>
              <div>
                <p class="font-display text-lg font-bold text-ink">Message sent</p>
                <p class="mt-1 text-sm leading-relaxed text-ink-muted">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
              <button
                type="button"
                class="btn-secondary !px-4 !py-2 text-xs"
                @click="resetForm"
              >
                Send another message
              </button>
            </div>

            <div v-show="formState !== 'success'" class="mt-6">
              <div
                v-if="formState === 'error'"
                class="mb-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900/60 dark:bg-red-950/40"
                role="alert"
              >
                <Icon
                  icon="mdi:alert-circle-outline"
                  class="mt-0.5 shrink-0 text-xl text-red-600 dark:text-red-400"
                  aria-hidden="true"
                />
                <div>
                  <p class="text-sm font-semibold text-ink">Something went wrong</p>
                  <p class="mt-0.5 text-xs leading-relaxed text-ink-muted">
                    Please try again or email me directly at
                    <a :href="`mailto:${site.email}`" class="font-medium text-ink underline">
                      {{ site.email }}
                    </a>
                    .
                  </p>
                </div>
              </div>

              <form class="flex flex-col gap-4" novalidate @submit.prevent="handleSubmit">
                <div class="flex flex-col gap-1.5">
                  <label for="contact-name" class="text-[12.5px] font-semibold text-ink">
                    Name <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    v-model="form.name"
                    type="text"
                    autocomplete="name"
                    placeholder="Your name"
                    class="input"
                    :class="{
                      'border-red-400 focus:border-red-400 focus:ring-red-100 dark:focus:ring-red-950/40': errors.name,
                    }"
                    :aria-invalid="Boolean(errors.name)"
                    :aria-describedby="errors.name ? 'contact-name-error' : undefined"
                    @input="errors.name = ''"
                  />
                  <span v-if="errors.name" id="contact-name-error" class="field-error">
                    {{ errors.name }}
                  </span>
                </div>

                <div class="flex flex-col gap-1.5">
                  <label for="contact-email" class="text-[12.5px] font-semibold text-ink">
                    Email <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    v-model="form.email"
                    type="email"
                    autocomplete="email"
                    placeholder="you@company.com"
                    class="input"
                    :class="{
                      'border-red-400 focus:border-red-400 focus:ring-red-100 dark:focus:ring-red-950/40': errors.email,
                    }"
                    :aria-invalid="Boolean(errors.email)"
                    :aria-describedby="errors.email ? 'contact-email-error' : undefined"
                    @input="errors.email = ''"
                  />
                  <span v-if="errors.email" id="contact-email-error" class="field-error">
                    {{ errors.email }}
                  </span>
                </div>

                <div class="flex flex-col gap-1.5">
                  <label for="contact-message" class="text-[12.5px] font-semibold text-ink">
                    Message <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    v-model="form.message"
                    rows="5"
                    placeholder="What's on your mind?"
                    class="input resize-none"
                    :class="{
                      'border-red-400 focus:border-red-400 focus:ring-red-100 dark:focus:ring-red-950/40': errors.message,
                    }"
                    :aria-invalid="Boolean(errors.message)"
                    :aria-describedby="errors.message ? 'contact-message-error' : undefined"
                    @input="errors.message = ''"
                  ></textarea>
                  <span v-if="errors.message" id="contact-message-error" class="field-error">
                    {{ errors.message }}
                  </span>
                </div>

                <div class="max-w-full overflow-x-auto">
                  <div ref="turnstileContainer"></div>
                </div>
                <span v-if="errors.turnstile" class="field-error">{{ errors.turnstile }}</span>

                <button
                  type="submit"
                  :disabled="formState === 'sending'"
                  class="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Icon
                    v-if="formState === 'sending'"
                    icon="mdi:loading"
                    class="animate-spin text-lg"
                    aria-hidden="true"
                  />
                  <Icon v-else icon="mdi:send-outline" class="text-lg" aria-hidden="true" />
                  {{ formState === 'sending' ? 'Sending...' : 'Send message' }}
                </button>

                <p class="text-center text-[10px] text-ink-soft">
                  Protected by Cloudflare Turnstile.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, ref } from 'vue'
import { Icon } from '@iconify/vue'
import PixelBackdrop from '@/components/PixelBackdrop.vue'
import { useContactForm } from '@/composables/useContactForm'
import { site } from '@/data/siteData'

const { turnstileContainer, formState, form, errors, handleSubmit, resetForm } = useContactForm({
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  turnstileSiteKey: import.meta.env.VITE_TURNSTILE_SITE_KEY,
})

const emailCopied = ref(false)
let copyTimer = null

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(site.email)
    emailCopied.value = true
    if (copyTimer) window.clearTimeout(copyTimer)
    copyTimer = window.setTimeout(() => {
      emailCopied.value = false
    }, 1500)
  } catch {
    emailCopied.value = false
  }
}

onBeforeUnmount(() => {
  if (copyTimer) window.clearTimeout(copyTimer)
})

const contactLinks = [
  {
    label: 'LinkedIn',
    value: 'johnlyn-del-castillo',
    href: site.linkedin,
    icon: 'mdi:linkedin',
  },
  {
    label: 'GitHub',
    value: 'JohnlyndelCastillo',
    href: site.github,
    icon: 'mdi:github',
  },
]
</script>
