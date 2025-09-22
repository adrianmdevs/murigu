<script setup>
import { ref } from "vue";

const whitepapers = ref([
    {
        id : 1,
        title : 'Assymetric War games',
        description : 'Exploring the AI useCases in Assyemtric conflicts',
        previewUrl : '/pdfs/drone swarms.pdf',
        downloadUrl : '/assets/pdfs/drone swarms.pdf',
    },
    {
        id : 2,
        title : 'Guerilla Warfare',
        description : 'Understanding Guerrilla Warfare',
        previewUrl : '/pdfs/Guerrilla_warfare_One.pdf'
    },

])
</script>
<template>
    <section class="block">
        <div class="flex items-center justify-center">
            <span class="text-light tracking-[16px] text-xl text-center uppercase dark:text-white">whitepapers</span>
        </div>
        
        <div class="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
            <div
                v-for="paper in whitepapers"
                    :key ="paper.id"
                    class="flex flex-col justify-between p-6 bg-white shadow dark:bg-gray-700 rounded-2xl"
            >
                <div>
                    <h3 class="mb-2 text-xl font-semibold">{{ paper.title  }}</h3>
                    <p class="text-gray-600">Paper description</p>
                </div>
                <div class="flex space-x-4">
                    <!--Preview-->
                    <a :href="paper.previewUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="px-4 py-2 text-sm text-white transition rounded-xl bg-blue hover:bg-red-600"
                    >Preview</a>
                    <!--Download-->
                    <a :href="paper.downloadUrl"
                        download
                        class="px-4 py-2 text-sm text-gray-800 transition bg-gray-200 rounded-xl hover:bg-gray-300 hover:cursor-pointer"
                    >Download</a>
                </div>
                
                
            </div>

        </div>

    </section>
</template>