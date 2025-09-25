<script setup>
import headerComponent from './components/headerComponent.vue'
import TabMain from './components/TabMain.vue'
import MuriguGitonga from './components/MuriguGitonga.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div class="relative flex items-center justify-center w-full bg-gray-200 dark:bg-black ">
    <div class="relative flex flex-col min-w-full space-y-8 transition-colors duration-700 ease-in-out bg-gray-200 dark:bg-inherit lg:space-y-0 ">
      <headerComponent/>
      <div class="relative z-30 flex flex-col max-w-5xl min-h-screen space-y-10 max-lg:mb-20 lg:flex-row lg:space-x-6 lg:container lg:mx-auto ">
        <MuriguGitonga/>
        <TabMain/>   
      </div>
      <FooterComponent/>
    </div>
  </div>
  
</template>
