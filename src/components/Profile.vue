<template>
    <div class="h-[calc(100vh-50px)] flex font-Poppins">
        <!-- Left side with profile picture and blue background -->
        <div class="flex items-center justify-center w-1/2 bg-[url('/ColoredShapes.svg')] bg-cover p-8">
            <img src="/Company_profile.jpg" alt="profile" class="w-94 h-96 border-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-black">
        </div>
        
        <!-- Right side with text aligned from the top and gray background -->
        <div class="flex flex-col items-start justify-start w-1/2 bg-main-background p-8 gap-3">
            <h6 class="text-lg font-semibold mt-24">
                Hello I'm 
            </h6>
            <h1 class="text-5xl font-bold">
                Johnlyn del Castillo
            </h1>
            <h6 class="text-lg font-bold">
                3rd Year Computer Engineering Technology Student
            </h6>
            <button class=" mt-7 border-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-black p-3 font-semibold bg-cv-button cursor-pointer">
                Download CV
                <i class="fa-solid fa-download text-xl"></i>
            </button>
            <div class="flex flex-row gap-3 mt-6">
                <!-- Boxed icons with same size -->
                <div class="w-12 h-12 flex items-center justify-center icons-shader bg-facebook cursor-pointer">
                    <i class="fa-brands fa-facebook-f text-xl"></i>
                </div>
                <div class="w-12 h-12 flex items-center justify-center icons-shader bg-github cursor-pointer">
                    <i class="fa-brands fa-github text-xl"></i>
                </div>
                <div class="w-12 h-12 flex items-center justify-center icons-shader bg-gmail cursor-pointer">
                    <i class="fa-solid fa-envelope text-xl"></i>
                </div>
            </div>
        </div>
    </div>
</template>
