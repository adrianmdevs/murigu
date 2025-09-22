<script setup>
import gitIcon from '../assets/icons/git.svg'
import githubIcon from '../assets/icons/github.svg'
import gmailIcon from '../assets/icons/gmail.svg'

const icons = [gitIcon, githubIcon, gmailIcon]
</script>

<template>
    <div class="relative flex flex-row w-full py-4 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div class="flex gap-8 animate-marquee whitespace-nowrap">
            <img v-for="(icon, index) in icons" :key="index" 
            :src="icon" alt="skill-Icon" class="object-contain w-12 h-12">
        </div>
    </div>
</template>
<style scoped>
    @keyframes marquee {
        0% {transform: translateX(0%);}
        100% {transform: translateX(-100%);}
    }
    .animate-marquee{
        display: inline-flex;
        min-width: max-content;
        animation: marquee 5s linear infinite;
    }
</style>