<template>
    <div class="h-[calc(100vh-50px)] flex font-Poppins border-y-4 border-x-4 border-black">
        <!-- Left side with profile picture and blue background -->
        <div class="flex items-center justify-center w-1/2 bg-[url('/ColoredShapes.svg')] bg-cover p-8">
            <img src="/Company_profile.jpg" alt="profile" class="w-94 h-96 border-8 border-black">
        </div>
        
        <!-- Right side with text aligned from the top and gray background -->
        <div class="flex flex-col items-start justify-start w-1/2 bg-[url('/Sprinkle.svg')] bg-cover p-8 gap-3">
            <h6 class="text-lg font-semibold mt-24">
                Hello I'm 
            </h6>
            <h1 class="text-5xl font-bold">
                Johnlyn del Castillo
            </h1>
            <h6 class="text-lg font-bold">
                3rd Year Computer Engineering Student
            </h6>
            <button class=" mt-7 border-4 rounded-lg border-b-8 border-r-8 border-black p-3 font-semibold bg-cv-button cusrsor-pointer">
                Download CV
                <i class="fa-solid fa-download text-xl"></i>
            </button>
            <div class="flex flex-row gap-3 mt-6">
                <!-- Boxed icons with same size -->
                <div class="w-12 h-12 flex items-center justify-center border-2 border-black rounded-lg border-b-4 border-r-4 bg-facebook cursor-pointer">
                    <i class="fa-brands fa-facebook-f text-xl"></i>
                </div>
                <div class="w-12 h-12 flex items-center justify-center border-2 border-black rounded-lg border-b-4 border-r-4 bg-github cursor-pointer">
                    <i class="fa-brands fa-github text-xl"></i>
                </div>
                <div class="w-12 h-12 flex items-center justify-center border-2 border-black rounded-lg border-b-4 border-r-4 bg-gmail cursor-pointer">
                    <i class="fa-solid fa-envelope text-xl"></i>
                </div>
            </div>
        </div>
    </div>
</template>
