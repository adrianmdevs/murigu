<script setup>
import {ref, onMounted, onUnmounted} from "vue";
import imageOne from '/src/assets/images/AsyncCodeUpdated.png'
import imageTwo from '/src/assets/images/DefenseCard.png'
import imageThree from '/src/assets/images/inforWarfare.png'
import imageFour from '/src/assets/images/jungleView.jpeg'

const images = [imageOne, imageTwo, imageThree, imageFour]

const currentIndex = ref(0)
let interval = null;

//Autoslide function
const startAutoSlide = ()=>{
    interval = setInterval(()=>{
        nextSlide();
    }, 4000);
}
const stopAutoSlide =()=>{
    clearInterval(interval)
}
const nextSlide =() =>{
    currentIndex.value = (currentIndex.value + 1) % images.length;
};
const prevSlide =()=>{
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};
const goToSlide = index =>{
    currentIndex.value = index;
}
//lifecycle
onMounted(startAutoSlide);
onUnmounted(stopAutoSlide)
</script>
<template>
    <div class="relative w-full max-w-3xl overflow-hidden shadow-lg rounded-2xl">
        <!--Carousel-->
        <div class="flex transition-transform duration-500 ease-in-out"
            :style="{transform: `translateX(-${activeIndex * 100})`}"
        >
            <div v-for="(image, index) in images"
                :key="index"
                class="flex-shrink-0 w-full"
            >
                <img :src="image" class="object-cover w-full h-64 md:h-96" alt="carousel image">
            </div>
            
        </div>
        <!--Navigation Dots-->
        <div class="absolute flex space-x-3 transform -translate-x-1/2 bottom-4 left-1/2">
            <button v-for="(image, index) in images" :key="index" @click="goToSlide(index)" :class="currentIndex === index ? 'bg-white' : 'bg-slate-600'" class="w-4 h-4 rounded-full"></button>
        </div>
        <!--Buttons-->
        <button @click="prevslide" class="absolute hidden p-2 text-white transition -translate-y-1/2 rounded-full top-1/2 left-4 bg-black/40 hover:bg-black/60 group-hover:block">
            <span>Previous</span>
        </button>
    </div>
</template>