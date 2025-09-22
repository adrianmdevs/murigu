<script setup>
    const techs = [
        {name : "git", icon:"/src/assets/icons/git.svg"},
        {name : "github", icon:"/src/assets/icons/github.svg"},
        {name : "gmail", icon:"/src/assets/icons/gmail.svg"}
    ]
</script>
<template>
    <div class="relative whitespace-nowrap">
        <div>
            <span>Tools and Technologies</span>
        </div>
        <div class="relative flex animate-marquee">
            <!--Original set-->
            <div v-for="tech in techs" :key="tech.name" class="flex items-center mx-6">
                <img :src="tech.icon" alt="" class="w-16 h-16 mr-2">
                <span class="text-lg">{{ tech.name }}</span>
            </div>
            <!--Duplicate set-->
            <div v-for="tech in techs" :key="tech.name + '-dup'" class="flex items-center mx-6">
                <img :src="tech.icon" alt="" class="w-16 h-16 mr-2">
                <span class="text-lg">{{ tech.name }}</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
@keyframes marquee{
    0% { transform: translateX(0);}
    100% {transform: translateX(-50%);} /*Half slide for each since duplicated*/

    
}
.animate-marquee {
        display: flex;
        width: max-content;
        animation: marquee 12s linear infinite;
    }
</style>