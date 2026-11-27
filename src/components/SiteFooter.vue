<template>
  <footer class="border-t border-line">
    <div class="container-page py-12 sm:py-14">
      <div class="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-10">
        <div class="col-span-2 md:col-span-1">
          <router-link
            to="/#profile"
            class="inline-flex items-center gap-2.5"
            aria-label="Johnlyn del Castillo — home"
          >
            <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-white">
              <Icon icon="mdi:check-bold" class="text-lg text-[#6EE7B7]" aria-hidden="true" />
            </span>
            <span class="font-display text-lg font-extrabold tracking-[-0.03em] text-ink">
              jdc<span class="text-accent">.</span>
            </span>
          </router-link>
          <p class="mt-4 max-w-xs text-[14.5px] leading-[1.7] text-ink-muted">
            Quality engineering for teams that care about how the product behaves in the real world.
          </p>
          <div class="mt-5 flex items-center gap-2">
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
        </div>

        <div>
          <p class="text-[12px] font-semibold text-ink-soft">Explore</p>
          <ul class="mt-4 space-y-2.5">
            <li v-for="item in navItems" :key="item.id">
              <router-link
                :to="`/#${item.id}`"
                class="text-sm text-ink-muted transition hover:text-ink"
              >
                {{ item.label }}
              </router-link>
            </li>
            <li>
              <router-link to="/#contact" class="text-sm text-ink-muted transition hover:text-ink">
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <p class="text-[12px] font-semibold text-ink-soft">Elsewhere</p>
          <ul class="mt-4 space-y-2.5">
            <li>
              <a
                :href="site.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-sm text-ink-muted transition hover:text-ink"
              >
                LinkedIn
                <Icon icon="mdi:arrow-up-right" class="text-xs" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                :href="site.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-sm text-ink-muted transition hover:text-ink"
              >
                GitHub
                <Icon icon="mdi:arrow-up-right" class="text-xs" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                :href="`mailto:${site.email}`"
                class="text-sm text-ink-muted transition hover:text-ink"
              >
                Email
              </a>
            </li>
            <li>
              <router-link to="/resume" class="text-sm text-ink-muted transition hover:text-ink">
                Resume
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© {{ year }} Johnlyn del Castillo. All rights reserved.</p>
        <div class="flex flex-wrap items-center gap-4">
          <span>Built with Vue 3 &amp; Tailwind CSS</span>
          <a href="#profile" class="inline-flex items-center gap-1 transition hover:text-ink">
            Back to top
            <Icon icon="mdi:arrow-up" class="text-xs" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { navItems, site, socialLinks } from '@/data/siteData'

const year = new Date().getFullYear()
</script>
