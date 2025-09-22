<script>
//import instagram from '/src/assets/images/instagram-logo-instagram-social-media-icon-free-png.png'
//import SkillMarqueeSlide from '../SkillMarqueeSlide.vue';
//import SkillMarqueeSlideTwo from './SkillMarqueeSlideTwo.vue';
</script>
<template>
    <div class="flex flex-col space-y-4">
        <span class="text-light tracking-[16px] text-xl text-center uppercase dark:text-white">Software Development</span>
            <div class="grid grid-cols-1 gap-y-14">
                <!--Multi-Domain Operations-->
                <div class="flex flex-col">
                    <!--Languages-->  
                    <div class="flex flex-col space-y-7">
                        <!--Languages-->
                        <span class="text-xl font-medium text-opacity-50 dark:text-white">Programming Languages</span>
                        <div class="grid grid-cols-2 gap-5 place-items-center dark:text-gray-300">
                            <div class="flex flex-col w-32 h-32 space-y-3">
                                <img src="/src/assets/images/Ada.png" alt="">
                                <span>Ada</span>
                            </div>
                            <div class="w-32 h-32">    
                                <img src="/src/assets/images/Cpp.jpeg" class="object-contain w-full" alt="">
                            </div>
                            <div class="w-32 h-32">
                                <img src="/src/assets/icons/javascript-js.svg" alt="">
                            </div>
                                            
                            <div class="w-32 h-32">
                                <img src="/src/assets/icons/python.svg" alt="">
                            </div>
                                           
                            <div class="w-32 h-32">
                                <img src="/src/assets/icons/typescript-svgrepo-com.svg" alt="">
                            </div>
                            <div class="w-32 h-32">
                                <img src="/src/assets/icons/mysql-svgrepo-com.svg" alt="">
                            </div>
                        </div>
                        <!--Frameworks-->
                        <div class="flex flex-col p-2 text-white bg-green-900 space-y-7 rounded-xl">
                            <span class="text-xl font-medium text-opacity-50 dark:text-white">Frameworks</span>
                            <div class="grid grid-flow-row grid-cols-2 place-items-center justify-items-center dark:text-gray-400">
                                   
                                <div class="relative flex flex-col w-24 h-24 p-4 bg-white rounded-lg">
                                    <img src="/src/assets/images/tensorflow-deep-learning-keras-machine-learning-caffe-thumbtack-thumbnail.jpg" alt="">
                                </div>
                                    
                                <div class="relative flex flex-col w-24 h-24 p-4 bg-white rounded-lg">
                                    <img src="/src/assets/images/1200px-Scikit_learn_logo_small.svg.png" alt="">
                                    
                                </div>
                                
                            </div>
                            </div>
                            <!--Tools--> 
                    </div>
                    </div>     
                </div>  
    </div>
</template>