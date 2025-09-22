<script setup>
import {ref, onMounted} from "vue"
    const text = "Hi, I am Murigu Gitonga. Welcome to my website";
    const typedText = "";
    const showCursor = ref(true);

    onMounted(()=>{
        function typeWriter() {
            if (i < text.length) {
                typedText.value += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80)
            } else{
                showCursor.value = false;
                setTimeout(() => {
                    //Emit finished event to main instance
                    emit("finished");
                }, 1500);
            }
        }
        typeWriter()
    })
</script>
<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center text-white transition-opacity duration-1000 bg-gradient-to-r from-gray-900 via-black to-gray-800 animate-overlayBg">
        <div class="text-center">
            <h1 class="font-mono text-2xl whitespace-pre-line md:text-4xl">{{ typedText }}</h1>
            <span v-if="showCursor" class="font-mono text-2xl md:text-4xl animate-blink">|</span>
        </div>
    </div>
</template>
<style scoped>
    @keyframes blink{
        0%, 50% {opacity: 1;}
        51%, 100% {opacity: 0;}
    }
    .animate-blink {
        animation: blink 1s step-start infinite;
    }
    @keyframes overlayZoom{
        0% {transform: scale(1);}
        100% {transform: scale(1.05); }
    }
    .animate-overlayBg{
        animation: overlayZoom 6s ease-in-out infinite alternate;
    }
</style>