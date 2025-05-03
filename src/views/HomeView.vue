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
  
</template>
<script setup>
import Navbar from '../components/NavBar.vue'
import Profile from '../components/Profile.vue';
import About from './About.vue';
import Contact from './Contact.vue';
</script>


