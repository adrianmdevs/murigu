<script setup>
//import CarouselMain from '../hom../home/CarouselMain.vue';
//import SwiperTemp from '../SwiperTemp.vue';
import UnderlineComp from '../UnderlineComp.vue';
//import SkillMarqueeSlide from '../SkillMarqueeSlide.vue';
//import SkillMarqueeSlideTwo from '../home/SkillMarqueeSlideTwo.vue';
import WhitePapers from '../WhitePapers.vue';
//import ImageComponent from '../home/ImageComponent.vue';
import MilDef from '../home/MilDef.vue';
import SoftwareDev from '../home/SoftwareDev.vue';

</script>
<template>
    <div class="relative flex flex-col min-h-full px-3 space-y-10 mb-72 bg-gray-50 dark:bg-secondary-dark md:w-full ">
        <!--Military Defence-->
        <!-- <ImageComponent/> -->
        <!-- <SwiperTemp/> -->
        <UnderlineComp/>
        <MilDef/>
        <UnderlineComp/>
        <SoftwareDev/>
        <UnderlineComp/>
        <WhitePapers/>
    </div>
</template>