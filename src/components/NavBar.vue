<template>
  <header class="sticky top-0 z-50 bg-main-background font-Lexend shadow-sm">
    <nav class="container flex items-center justify-between px-6 py-4 mx-auto">
      <!-- Logo -->
      <h1 class="text-black text-3xl font-extrabold">JDC</h1>

      <!-- Desktop Nav -->
      <ul class="hidden md:inline-flex gap-10 items-center text-base font-bold text-black">
        <li><router-link class="link-underline" to="/#profile">Home</router-link></li>
        <li><router-link class="link-underline" to="/#about">About</router-link></li>
        <li><router-link class="link-underline" to="/#project">Project</router-link></li>
        <li><router-link class="link-underline" to="/#skills">Skills</router-link></li>
        <!-- <li><router-link class="link-underline" to="/#contact">Contact</router-link></li> -->
      </ul>

      <!-- Hamburger Button (mobile) -->
      <button
        class="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 cursor-pointer"
        @click="toggleMenu"
        aria-label="Toggle navigation menu"
      >
        <span
          class="block w-6 h-0.5 bg-black transition-all duration-300"
          :class="{ 'rotate-45 translate-y-2': isOpen }"
        ></span>
        <span
          class="block w-6 h-0.5 bg-black transition-all duration-300"
          :class="{ 'opacity-0': isOpen }"
        ></span>
        <span
          class="block w-6 h-0.5 bg-black transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-2': isOpen }"
        ></span>
      </button>
    </nav>

    <!-- Mobile Menu Dropdown -->
    <div
      class="md:hidden overflow-hidden transition-all duration-300"
      :class="isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'"
    >
      <ul class="flex flex-col items-center gap-6 py-6 text-base font-bold text-black bg-main-background border-t border-black/10">
        <li><router-link class="link-underline" to="/#profile" @click="closeMenu">Home</router-link></li>
        <li><router-link class="link-underline" to="/#about" @click="closeMenu">About</router-link></li>
        <li><router-link class="link-underline" to="/#project" @click="closeMenu">Project</router-link></li>
        <li><router-link class="link-underline" to="/#skills" @click="closeMenu">Skills</router-link></li>
        <!-- <li><router-link class="link-underline" to="/#contact" @click="closeMenu">Contact</router-link></li> -->
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}
</script>