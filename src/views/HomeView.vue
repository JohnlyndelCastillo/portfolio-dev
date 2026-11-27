<template>
  <div class="min-h-screen bg-canvas">
    <a href="#main-content" class="skip-link">Skip to content</a>

    <NavBar />

    <main id="main-content">
      <section id="profile">
        <Profile />
      </section>

      <About />
      <QaCraft />
      <Timeline />
      <Project />
      <Skills />
      <Contact />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import Profile from '@/components/Profile.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import About from '@/views/About.vue'
import QaCraft from '@/views/QaCraft.vue'
import Timeline from '@/views/Timeline.vue'
import Project from '@/views/Project.vue'
import Skills from '@/views/Skills.vue'
import Contact from '@/views/Contact.vue'
</script>
