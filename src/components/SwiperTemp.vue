<template>
    <Swiper
        :slides-per-view = "1"
        :space-between="20"
        :loop = "true"
        :pagination = "true"
        :autoplay = "{delay: 3000}"
        class="rounded-lg shadow-lg"
    />
    <SwiperSlide
         v-for="(img, i) in slides"
        :key="i"
    >
    <img :src="img" alt="Slide Image" class="object-cover w-full h-64 rounded-xl">
</SwiperSlide>

</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
//import {Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import slide1 from '../assets/images/Ada.png'
import slide2 from '../assets/images/Cpp.jpeg'
import slide3 from '../assets/images/CyberDiag.png'
import slide4 from '../assets/images/DefenseCard.png'

const slides =[slide1, slide2,slide3, slide4]
</script>