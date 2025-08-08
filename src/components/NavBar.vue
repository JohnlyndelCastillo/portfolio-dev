<template>
    <header class="top-0 bg-main-background font-Lexend">
      <nav class="container flex flex-col sm:flex-row items-center justify-between mt-5 mb-5 text-white">
        <h1 class="text-black text-3xl font-extrabold ml-10"> JDC </h1>
        <ul class=" scroll-smooth inline-flex gap-20 items-center text-base font-bold text-black">
            <li>
                <router-link class="link-underline" to="/#profile">Home</router-link>
            </li>
            <li>
                <router-link class="link-underline" to="/#about">About</router-link>
            </li>
            <li>
                <router-link class="link-underline" to="/#contact">Contact</router-link>
            </li>
            <li>
                <router-link class="link-underline" to="/#project">Project</router-link>
            </li>
            <li>
                <router-link class="link-underline" to="/#skills">Skills</router-link>
            </li>
        </ul>
      </nav>
    </header>
</template>

<script setup></script>
