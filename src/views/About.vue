<template>
    <div>
     <header class="flex flex-row top-0 font-Poppins bg-main-background">
        <nav class="container flex flex-col items-start justify-start w-1/2">
            <h6 class="text-lg font-semibold ">Get To Know More</h6>
            <h1 class="text-5xl font-bold">About Me!</h1>
        </nav>
        <div class="flex items-end justify-end w-1/2 p-8">
            <router-link to="#project">
                <i class="fa-solid fa-caret-down text-5xl cursor-pointer"></i>
            </router-link>
        </div>
     </header>
     <div class="h-[calc(100%)] flex font-Poppins bg-main-background">
        <!-- Left side with profile picture and introduction -->
        <div class="flex w-1/2 p-8">
            <card class="flex flex-col md:flex-row w-full h-full bg-card-bg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-black border-2">
                <img class="object-cover border-2 border-black w-1/3 h-full" src="/test.jpg" alt="profile"/>
                    <div class="flex flex-col gap-5 p-4 leading-loose">
                        <label class=" p-3 mb-2 border-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-2xl font-bold tracking-tight text-black w-fit bg-cv-button border-black">
                            Brief Introduction
                            <i class="fa-solid fa-circle-info pl-2"></i>
                        </label>
                        <div class="text-black space-y-8 font-normal">
                            <p>
                                Hi, I'm Johnlyn del Castillo, a Computer Engineering Technology student at CITE Technical Institute Inc. and a software QA intern at Sun* Philippines Inc.
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
        <!-- Right side with two cards -->
        <div class="flex flex-col w-1/2 p-8 gap-4 h-[600px]">
            <card class="flex-1 w-full bg-card-bg icons-shader p-8">
                <label class="label-card-about"> 
                    Why Software QA?
                </label>
                <div class="space-y-4">
                    <p class="mt-6 text-black">
                        I discovered my interest in QA through my internship, where I realized how much I enjoy the process of identifying issues, improving functionality, 
                        and ensuring smooth user experiences. There's something rewarding about catching the small things before they become big problems.
                    </p>
                    <p class="text-black">
                        I'm currently focused on manual testing and learning how to write effective test cases and bug reports. 
                        I'm also starting to explore automation tools and version control systems like Git and Cypress, 
                        and I'm excited to expand my technical toolkit over time.
                    </p>
                </div>
            </card>
            <card class="flex-1 w-full bg-card-bg icons-shader p-8">
                <label class="label-card-about"> 
                    Growth Goals
                    <i class="fa-solid fa-chart-simple"></i>
                </label>
                <div class="space-y-4">
                    <p class="mt-6 text-black">
                        As I continue developing my skills and gaining more experience, I aim to transition into automation testing, 
                        where I can write scripts to speed up repetitive tasks and increase overall testing efficiency. 
                    </p>
                    <p class="text-black">
                        I'm particularly interested in learning tools like Selenium, Cypress, or Playwright, 
                        and understanding how automated testing fits into CI/CD pipelines. 
                    </p>
                </div>
            </card>
        </div>
     </div>
        
    </div>
</template>