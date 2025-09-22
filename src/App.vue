<script setup>
import headerComponent from './components/headerComponent.vue'
import TabMain from './components/TabMain.vue'
import MuriguGitonga from './components/MuriguGitonga.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div class="relative flex items-center justify-center w-full bg-gray-200 dark:bg-black ">
    <div class="flex flex-col relative max-w-6xl space-y-12 transition-colors ease-in-out duration-700 bg-gray-200 dark:bg-inherit lg:space-y-0 ">
      <headerComponent/>
      <div class="flex flex-col relative z-30 min-h-screen space-y-10 max-lg:mb-20 lg:flex-row lg:space-x-6 lg:container lg:mx-auto ">
        <MuriguGitonga/>
        <TabMain/>   
      </div>
      <FooterComponent/>
    </div>
  </div>
  
</template>
