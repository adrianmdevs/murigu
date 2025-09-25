<script setup>
import {ref,} from "vue";
//Reactive activeTab
const activeTab = ref("home");

//Tab structure
const tabs = [
    {name: "home", label : "Home", component: "HomeTab"},
    {name: "about", label: "About Me", component: "AboutTab"},
];

// Lazy-load tab components
import HomeTab from "./tabs/HomeTab.vue";
import AboutTab from "./tabs/AboutTab.vue";

const componentsMap = {
    HomeTab,
    AboutTab
};
const getTabComponent = name =>{
    const tab = tabs.find(t => t.name === name);
    return componentsMap[tab.component];
}
</script>
<template>
    <div class="relative z-10 flex flex-col w-full min-h-screen rounded-xl lg:container lg:mx-auto ">
        <!--Tab Buttons-->
        <div class="flex w-full text-fluid-base sticky top-0 bg-gray-200 dark:bg-black z-20 space-x-4 py-3.5 max-sm:px-3 justify-evenly">
            <button v-for="tab in tabs" 
                :key="tab.name" 
                @click="activeTab = tab.name"
                :class = "[
                    'w-1/2 py-2', activeTab == tab.name ? 
                    'lg:border-black lg:bg-white text-main-hue dark:text-white bg-white dark:bg-secondary-dark rounded-xl' :
                    'text-gray-500 hover:text-gray-700'
                ]"
            >
             <span class="text-lg font-semibold">{{ tab.label }}</span>
            </button>
        </div>
        <!--Tab content-->
        <div class="z-10 pt-10 bg-white dark:bg-secondary-dark rounded-xl">
            <component :is="getTabComponent(activeTab)"></component>
        </div>
    </div>
</template>