<template>
    <div>
     <header class="top-0 font-Poppins bg-main-background">
        <nav class="container flex flex-col items-start justify-center">
            <h6 class="text-lg font-semibold ">Get To Know More</h6>
            <h1 class="text-5xl font-bold">About Me!</h1>
        </nav>
     </header>
     <div class="h-[calc(100%)] flex font-Poppins bg-main-background">
        <div class="flex w-1/2 p-8">
            <card class="flex flex-col md:flex-row w-full h-full bg-card-bg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-black border-2">
                <img class="object-cover border-2 border-black w-1/3 h-full" src="/test.jpg" alt="profile"/>
                    <div class="flex flex-col gap-5 p-4 leading-loose">
                        <label class=" p-3 mb-2 border-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-2xl font-bold tracking-tight text-black w-fit bg-cv-button border-black">
                            Brief Introduction
                            <i class="fa-solid fa-circle-info pl-2"></i>
                        </label>
                        <div class="text-black space-y-3 font-normal">
                            <p>
                                Hi! I'm Johnlyn del Castillo, a Computer Engineering Technology student and a software QA intern at Sun* Philippines Inc.
                                with a keen eye for detail and a strong commitment to quality.
                            </p>
                            <p>
                                I'm passionate about ensuring that web applications are reliable, user-friendly, and function as intended across various scenarios.
                            </p>
                            <p>
                                I enjoy finding bugs, writing test cases, and continuously improving systems through thorough testing and feedback.
                            </p>
                        </div>
                    </div>
                </card>
        </div>

        <div class="flex flex-col items-center w-1/2 p-8 justify-between gap-4">
            <div class="flex-1 w-full h-1/2 bg-card-bg icons-shader">
                <label> </label>
            </div>

            <div class="flex-1 w-full h-1/2 bg-card-bg icons-shader">
                <label> </label>
            </div>
        </div>
     </div>
        
    </div>
</template>