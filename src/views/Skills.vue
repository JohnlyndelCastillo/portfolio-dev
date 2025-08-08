<template>
    <div>
        <header class="flex flex-row top-0 font-Poppins bg-main-background">
        <nav class="container flex flex-col items-center justify-center">
            <h6 class="text-lg font-semibold ">My Efficiency!</h6>
            <h1 class="text-5xl font-bold">Skills</h1>
        </nav>
        <div class="flex items-end justify-end p-8">
            <router-link to="#contact">
                <i class="fa-solid fa-caret-down text-5xl cursor-pointer"></i>
            </router-link>
        </div>
     </header>
        <div class="h-[calc(100%)] flex font-Poppins bg-main-background">
            <div class="flex w-1/2 p-8">
                <card class="flex flex-col md:flex-row w-full h-full bg-card-bg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-black border-2">
                    <div class="flex flex-col items-center gap-5 p-8">
                        <label class="p-3 mb-2 border-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-2xl font-bold tracking-tight text-black w-fit bg-cv-button border-black">
                            Tech Stack
                            <i class="fa-brands fa-stack-overflow"></i>
                        </label>
                            <!-- Grid layout for tech icons/labels -->
                            <div class="grid grid-cols-5 gap-x-10 gap-y-4 text-black">
                                <div class="skills-icon-shader bg-cv-button border-black flex flex-col items-center p-2">
                                    <i class="fa-brands fa-html5 text-5xl"></i>
                                    <span class="text-sm mt-2">HTML5</span>
                                </div>
                                <div class="skills-icon-shader bg-cv-button border-black flex flex-col items-center p-2">
                                    <i class="fa-brands fa-css3-alt text-5xl"></i>
                                    <span class="text-sm mt-2">CSS</span>
                                </div>
                                <div class="skills-icon-shader bg-cv-button flex flex-col items-center p-2">
                                    <i class="fa-brands fa-node text-5xl"></i>
                                    <span class="text-sm mt-2">NodeJs</span>
                                </div>
                                <div class="skills-icon-shader bg-cv-button flex flex-col items-center p-2">
                                    <i class="fa-brands fa-vuejs text-5xl"></i>
                                    <span class="text-sm mt-2">Vue.js</span>
                                </div>
                                <div class="skills-icon-shader bg-cv-button flex flex-col items-center p-2">
                                    <i class="fa-brands fa-java text-5xl"></i>
                                    <span class="text-sm mt-2">Java</span>
                                </div>
                                <div class="skills-icon-shader bg-cv-button flex flex-col items-center p-2">
                                    <i class="fa-brands fa-github text-5xl"></i>
                                    <span class="text-sm mt-2">GitHub</span>
                                </div>
                                <div class="skills-icon-shader bg-cv-button flex flex-col items-center p-2">
                                    <i class="fa-brands fa-notion text-5xl"></i>
                                    <span class="text-sm mt-2">Notion</span>
                                </div>
                                <div class="skills-icon-shader bg-cv-button flex flex-col items-center p-2">
                                    <i class="fa-brands fa-atlassian text-5xl"></i>
                                    <span class="text-sm mt-2">Atlassian</span>
                                </div>
                                <div class="skills-icon-shader bg-cv-button flex flex-col items-center p-2">
                                    <i class="fa-brands fa-git-alt text-5xl"></i>
                                    <span class="text-sm mt-2">Git</span>
                                </div>
                                <div class="skills-icon-shader bg-cv-button flex flex-col items-center p-2">
                                    <i class="fa-brands fa-slack text-5xl"></i>
                                    <span class="text-sm mt-2">Slack</span>
                                </div>
                            </div>
                    </div>
                </card>
            </div>

            <div class="flex w-1/2 justify-center p-8">
                <card class="flex flex-col w-full h-full bg-card-bg border-black border-2">
                    <div class="flex flex-col items-center gap-5 p-8">
                        <label class="p-3 mb-2 border-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-2xl font-bold tracking-tight text-black w-fit bg-cv-button border-black">
                            Efficiency
                            <i class="fa-solid fa-circle-check"></i>
                        </label>
                    </div>
                </card>
            </div>
        </div>
    </div>
</template>