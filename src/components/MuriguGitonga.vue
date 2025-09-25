<script setup>
import { ref } from "vue";
import MessageModal from "./MessageModal.vue";
const isModalOpen = ref(false);
</script>
<template>
    <div class="flex flex-col w-full space-y-4 lg:mt-8 cols-2 lg:w-1/3">
        <img src="../assets/images/MeAgentFB.jpg" alt="">
        <div class="flex flex-col space-y-6">
            <!--Details-->
            <div class="flex items-center px-3">
                <div class="flex flex-col flex-shrink w-1/2">
                    <span class="text-lg font-semibold dark:text-white">Murigu Gitonga</span>
                    <span class="text-sm font-medium text-secondary-dark dark:text-gray-400 ">Computer Scientist</span>
                </div>
                <div class="flex flex-1 ">
                    <button @click="isModalOpen = true" class="flex items-center justify-center w-full py-2 space-x-5 text-sm text-white rounded-lg bg-main-hue">
                        <!-- <img src="../assets/icons/whatsapp.svg" class="w-10 h-10" alt="">     -->
                        <span class="text-white">Message</span>
                    </button>
                    <MessageModal :isOpen="isModalOpen" @close="isModalOpen = false"/>
                </div>  
            </div>
            <!--Computer Scientist-->
            <div class="grid items-center justify-center w-full grid-flow-col overflow-x-auto whitespace-nowrap gap-x-3 place-items-center">
                <span class="p-1.5 text-xs text-gray-200 rounded-none bg-secondary-dark dark:text-gray-300 dark:bg-secondary-dark">Systems Engineering</span>
                <span class="p-1.5 text-xs text-gray-200 rounded-none bg-secondary-dark dark:text-gray-300 dark:bg-secondary-dark">Military Defence</span>
                <span class="p-1.5 text-xs text-gray-200 rounded-none bg-secondary-dark dark:text-gray-300 dark:bg-secondary-dark">Artificial Intelligence</span>
            </div>
        </div>
    </div>  
</template>