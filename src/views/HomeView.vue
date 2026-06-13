<template>
  <section id="profile">
    <div class="flex flex-col">
      <Navbar />
      <Profile />
    </div>
  </section>

  <section id="about" class="w-full">
    <About />
  </section>

  <section id="project" class="w-full">
    <Project />
  </section>

  <section id="skills" class="w-full">
    <Skills />
  </section>

  <!-- <section id="contact" class="w-full">
    <Contact />
  </section> -->
</template>

<script setup>
import Navbar from '../components/NavBar.vue'
import Profile from '../components/Profile.vue'
import About from './About.vue'
import Contact from './Contact.vue'
import Project from './Project.vue'
import Skills from './Skills.vue'
</script>