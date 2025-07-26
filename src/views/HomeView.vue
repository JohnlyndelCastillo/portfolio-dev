<template>
  <section>
    <div class=" flex flex-col min-h-screen bg-white">
      <Navbar/>
      <Profile/>
    </div>
  </section>
  <section id="about">
    <div>
      <About/>
    </div>
  </section>
  <section id="contact">
    <div>
      <Contact/>
    </div>
  </section>
  <section id="project">
    <div>
      <Project/>
    </div>
  </section>
  <section id="skills">
    <div>
      <Skills/>
    </div>
  </section>
  
</template>
<script setup>
import Navbar from '../components/NavBar.vue'
import Profile from '../components/Profile.vue';
import About from './About.vue';
import Contact from './Contact.vue';
import Project from './Project.vue';
import Skills from './Skills.vue';
</script>


