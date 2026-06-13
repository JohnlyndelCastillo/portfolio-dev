<template>
  <div class="flex flex-col md:flex-row font-Poppins">
    <!-- Profile picture -->
    <div class="flex items-center justify-center w-full md:w-1/2 bg-[url('/ColoredShapes.svg')] bg-cover p-8 min-h-[40vh] md:min-h-0">
      <img
        src="/Company_profile.jpg"
        alt="Johnlyn del Castillo profile photo"
        class="w-94 h-962 sm:w-72 sm:h-80 md:w-94 md:h-96 border-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-black object-cover"
      />
    </div>

    <!-- Text content -->
    <div class="flex flex-col items-start justify-center md:justify-start w-full md:w-1/2 bg-main-background p-8 gap-3 md:pt-24">
      <h6 class="text-lg font-semibold">Hello, I'm</h6>
      <h1 class="text-4xl sm:text-5xl font-bold leading-tight">Johnlyn del Castillo</h1>
      <h6 class="text-base sm:text-lg font-bold">Junior Software QA Engineer</h6>

      <button class="mt-6 border-black border-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-3 font-semibold bg-cv-button cursor-pointer hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
        Download CV
        <i class="fa-solid fa-download text-xl ml-1"></i>
      </button>

      <div class="flex flex-row gap-3 mt-4">
        <a href="https://www.linkedin.com/in/johnlyn-del-castillo" target="_blank" rel="noopener noreferrer"
            class="w-12 h-12 flex items-center justify-center icons-shader bg-linkedin cursor-pointer">
            <i class="fa-brands fa-linkedin text-xl"></i>
        </a>
        <a href="https://github.com/JohnlyndelCastillo" target="_blank" rel="noopener noreferrer"
            class="w-12 h-12 flex items-center justify-center icons-shader bg-github cursor-pointer">
            <i class="fa-brands fa-github text-xl"></i>
        </a>
        <a href="mailto:johnlyndelcastillo@gmail.com"
            class="w-12 h-12 flex items-center justify-center icons-shader bg-gmail cursor-pointer">
            <i class="fa-solid fa-envelope text-xl"></i>
        </a>
      </div>
    </div>
  </div>
</template>