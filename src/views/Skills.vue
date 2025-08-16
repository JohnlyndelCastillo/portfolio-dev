<template>
    <div>
        <header class="flex flex-row top-0 font-Poppins bg-main-background">
        <nav class="container flex flex-col items-center justify-center">
            <h6 class="text-lg font-semibold ">My Efficiency!</h6>
            <h1 class="text-5xl font-bold">Skills</h1>
        </nav>
        <div class="flex items-end justify-end p-8">
            <router-link to="#contact" aria-label="Scrolls to contact section">
                <i class="fa-solid fa-caret-down text-5xl cursor-pointer"></i>
            </router-link>
        </div>
     </header>
        <div class="h-[calc(100%)] flex font-Poppins bg-main-background">
            <div class="flex w-1/2 p-8 justify-center">
                <card class="flex flex-col md:flex-row w-full max-w-3xl h-full bg-card-bg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-black border-2">
                    <div class="flex flex-col items-center gap-5 p-8">
                        <label class="skills-card-label">
                            Tech Stack
                            <i class="fa-brands fa-stack-overflow"></i>
                        </label>
                            <!-- Grid layout for tech icons/labels -->
                            <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-black place-items-center">
                                <div class="skills-icon-shader">
                                    <i class="fa-brands fa-html5 text-5xl"></i>
                                    <span class="text-sm mt-2">HTML5</span>
                                </div>
                                <div class="skills-icon-shader">
                                    <i class="fa-brands fa-css3-alt text-5xl"></i>
                                    <span class="text-sm mt-2">CSS</span>
                                </div>
                                <div class="skills-icon-shader">
                                    <i class="fa-brands fa-node text-5xl"></i>
                                    <span class="text-sm mt-2">NodeJs</span>
                                </div>
                                <div class="skills-icon-shader">
                                    <i class="fa-brands fa-vuejs text-5xl"></i>
                                    <span class="text-sm mt-2">Vue.js</span>
                                </div>
                                <div class="skills-icon-shader">
                                    <i class="fa-brands fa-java text-5xl"></i>
                                    <span class="text-sm mt-2">Java</span>
                                </div>
                                <div class="skills-icon-shader">
                                    <i class="fa-brands fa-github text-5xl"></i>
                                    <span class="text-sm mt-2">GitHub</span>
                                </div>
                                <div class="skills-icon-shader">
                                    <i class="fa-brands fa-notion text-5xl"></i>
                                    <span class="text-sm mt-2">Notion</span>
                                </div>
                                <div class="skills-icon-shader">
                                    <i class="fa-brands fa-atlassian text-5xl"></i>
                                    <span class="text-sm mt-2">Atlassian</span>
                                </div>
                                <div class="skills-icon-shader">
                                    <i class="fa-brands fa-git-alt text-5xl"></i>
                                    <span class="text-sm mt-2">Git</span>
                                </div>
                                <div class="skills-icon-shader">
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
                        <label class="skills-card-label">
                            Efficiency
                            <i class="fa-solid fa-circle-check"></i>
                        </label>
                        <div class="w-[90%] space-y-3">
                            <!-- HTML 5 -->
                            <div class="flex items-center space-x-4">
                                <label class="w-20 font-medium">HTML5</label> 
                                    <div 
                                        class="efficiency-bar"
                                        role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                        <div 
                                            class="efficiency-bar-percentage" 
                                            style="width: 80%">
                                            80%
                                    </div>
                                </div>
                            </div>
                            <!-- CSS/Tailwind -->
                            <div class="flex items-center space-x-4">
                                <label class="w-20 font-medium">CSS</label> 
                                    <div 
                                        class="efficiency-bar"
                                        role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                        <div 
                                            class="efficiency-bar-percentage" 
                                            style="width: 85%">
                                            85%
                                    </div>
                                </div>
                            </div>
                            <!-- Node.js -->
                            <div class="flex items-center space-x-4">
                                <label class="w-20 font-medium">Node.js</label> 
                                    <div 
                                        class="efficiency-bar"
                                        role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                        <div 
                                            class="efficiency-bar-percentage" 
                                            style="width: 20%">
                                            20%
                                    </div>
                                </div>
                            </div>
                            <!-- Vue.js -->
                            <div class="flex items-center space-x-4">
                                <label class="w-20 font-medium">Vue.js</label> 
                                    <div 
                                        class="efficiency-bar"
                                        role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div 
                                            class="efficiency-bar-percentage" 
                                            style="width: 25%">
                                            25%
                                    </div>
                                </div>
                            </div>
                            <!-- Java -->
                            <div class="flex items-center space-x-4">
                                <label class="w-20 font-medium">Java</label> 
                                    <div 
                                        class="efficiency-bar"
                                        role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                        <div 
                                            class="efficiency-bar-percentage" 
                                            style="width: 50%">
                                            50%
                                    </div>
                                </div>
                            </div>
                            <!-- GitHub -->
                            <div class="flex items-center space-x-4">
                                <label class="w-20 font-medium">GitHub</label> 
                                    <div 
                                        class="efficiency-bar"
                                        role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                        <div 
                                            class="efficiency-bar-percentage" 
                                            style="width: 80%">
                                            80%
                                    </div>
                                </div>
                            </div>
                            <!-- Notion-->
                            <div class="flex items-center space-x-4">
                                <label class="w-20 font-medium">Notion</label> 
                                    <div 
                                        class="efficiency-bar"
                                        role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <div 
                                            class="efficiency-bar-percentage" 
                                            style="width: 75%">
                                            75%
                                    </div>
                                </div>
                            </div>
                            <!-- JIRA-->
                            <div class="flex items-center space-x-4">
                                <label class="w-20 font-medium">JIRA</label> 
                                    <div 
                                        class="efficiency-bar"
                                        role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        <div 
                                            class="efficiency-bar-percentage" 
                                            style="width: 90%">
                                            90%
                                    </div>
                                </div>
                            </div>
                            <!-- Git-->
                            <div class="flex items-center space-x-4">
                                <label class="w-20 font-medium">Git</label> 
                                    <div 
                                        class="efficiency-bar"
                                        role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                        <div 
                                            class="efficiency-bar-percentage" 
                                            style="width: 60%">
                                            60%
                                    </div>
                                </div>
                            </div>
                            <!-- Slack-->
                            <div class="flex items-center space-x-4">
                                <label class="w-20 font-medium">Notion</label> 
                                    <div 
                                        class="efficiency-bar"
                                        role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                        <div 
                                            class="efficiency-bar-percentage" 
                                            style="width: 95%">
                                            95%
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </card>
            </div>
        </div>
    </div>
</template>
