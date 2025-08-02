<template>
  <section>
    <div class=" flex flex-col min-h-screen">
      <Navbar/>
      <Profile/>
    </div>
  </section>
  <section class="w-full h-[80vh-50px]" id="about">
    <div>
      <About/>
    </div>
  </section>
  <section id="project">
    <div>
      <Project/>
    </div>
  </section>
  <section class="w-full h-[80vh-50px]" id="skills">
    <div>
      <Skills/>
    </div>
  </section>
  <section id="contact">
    <div>
      <Contact/>
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


