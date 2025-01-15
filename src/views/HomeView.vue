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
  
</template>
<script setup>
import Navbar from '../components/NavBar.vue'
import Profile from '../components/Profile.vue';
import About from './About.vue';
</script>


