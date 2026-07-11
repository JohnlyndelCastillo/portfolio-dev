<template>
  <div class="font-Poppins bg-main-background">
    <!-- Header -->
    <header class="flex flex-row items-center bg-main-background px-6 py-6">
      <nav class="flex flex-col items-start justify-start flex-1">
        <h6 class="text-lg font-semibold">Get In Touch</h6>
        <h1 class="text-4xl sm:text-5xl font-bold">Contact Me!</h1>
      </nav>
    </header>

    <div class="flex flex-col lg:flex-row gap-4 px-6 pb-8 lg:px-8">

      <!-- Left: contact info -->
      <div class="flex flex-col gap-4 w-full lg:w-1/3">
        <div class="bg-card-bg icons-shader border-black border-2 p-6 flex flex-col gap-4">
          <label class="text-xl font-bold tracking-tight">Let's Connect</label>
          <p class="text-black text-sm leading-relaxed">
            Whether you have a project in mind, a question about QA, or just want to say hi — feel free to reach out. I'll get back to you as soon as I can!
          </p>
          <div class="flex flex-col gap-3 mt-2">
            <a href="mailto:johnlyndel.castillo@gmail.com" class="flex items-center gap-3 text-sm font-medium text-black hover:underline">
              <div class="w-9 h-9 flex items-center justify-center icons-shader bg-gmail shrink-0">
                <Icon icon="mdi:email" class="text-lg" />
              </div>
              johnlyndel.castillo@gmail.com
            </a>
            <a href="https://github.com/JohnlyndelCastillo" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-sm font-medium text-black hover:underline">
              <div class="w-9 h-9 flex items-center justify-center icons-shader bg-github shrink-0">
                <Icon icon="mdi:github" class="text-lg" />
              </div>
              JohnlyndelCastillo
            </a>
          </div>
        </div>
      </div>

      <!-- Right: contact form -->
      <div class="w-full lg:w-2/3 bg-card-bg icons-shader border-black border-2 p-6 sm:p-8">
        <label class="text-xl font-bold tracking-tight mb-6 block">Send a Message</label>

        <!-- Success message -->
        <div v-if="formState === 'success'" class="flex items-start gap-3 p-4 border-2 border-black bg-green-50 mb-6">
          <Icon icon="mdi:check-circle" class="text-green-600 text-2xl shrink-0 mt-0.5" />
          <div>
            <p class="font-semibold text-black">Message sent!</p>
            <p class="text-sm text-gray-600">Thanks for reaching out. I'll get back to you soon.</p>
          </div>
        </div>

        <!-- Error message -->
        <div v-if="formState === 'error'" class="flex items-start gap-3 p-4 border-2 border-black bg-red-50 mb-6">
          <Icon icon="mdi:alert-circle" class="text-red-600 text-2xl shrink-0 mt-0.5" />
          <div>
            <p class="font-semibold text-black">Something went wrong.</p>
            <p class="text-sm text-gray-600">Please try again or email me directly.</p>
          </div>
        </div>

        <div v-if="formState !== 'success'" class="flex flex-col gap-4">
          <!-- Name -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-semibold text-black">Name <span class="text-red-500">*</span></label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Your name"
              class="border-2 border-black p-3 text-sm bg-main-background focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
              :class="{ 'border-red-500': errors.name }"
            />
            <span v-if="errors.name" class="text-xs text-red-500">{{ errors.name }}</span>
          </div>

          <!-- Email -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-semibold text-black">Email <span class="text-red-500">*</span></label>
            <input
              v-model="form.email"
              type="email"
              placeholder="your@email.com"
              class="border-2 border-black p-3 text-sm bg-main-background focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
              :class="{ 'border-red-500': errors.email }"
            />
            <span v-if="errors.email" class="text-xs text-red-500">{{ errors.email }}</span>
          </div>

          <!-- Message -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-semibold text-black">Message <span class="text-red-500">*</span></label>
            <textarea
              v-model="form.message"
              rows="5"
              placeholder="What's on your mind?"
              class="border-2 border-black p-3 text-sm bg-main-background focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
              :class="{ 'border-red-500': errors.message }"
            ></textarea>
            <span v-if="errors.message" class="text-xs text-red-500">{{ errors.message }}</span>
          </div>

          <!-- Cloudflare Turnstile -->
          <div ref="turnstileContainer" class="cf-turnstile" :data-sitekey="turnstileSiteKey"></div>
          <span v-if="errors.turnstile" class="text-xs text-red-500">{{ errors.turnstile }}</span>

          <!-- Submit -->
          <button
            @click="handleSubmit"
            :disabled="formState === 'sending'"
            class="flex items-center justify-center gap-2 border-2 border-black p-3 font-semibold text-sm bg-cv-button shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
          >
            <Icon v-if="formState === 'sending'" icon="mdi:loading" class="text-lg animate-spin" />
            <Icon v-else icon="mdi:send" class="text-lg" />
            {{ formState === 'sending' ? 'Sending...' : 'Send Message' }}
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useContactForm } from '@/composables/useContactForm'

const { turnstileContainer, formState, form, errors, handleSubmit } = useContactForm({
  serviceId:      import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId:     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey:      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  turnstileSiteKey: import.meta.env.VITE_TURNSTILE_SITE_KEY,
})
</script>