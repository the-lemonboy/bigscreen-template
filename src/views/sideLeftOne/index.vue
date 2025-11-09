<template>
  <div class="relative flex h-full flex-col">
    <div class="relative">
      <img class="z-10" src="../../assets/images/border/title-border-two.svg" alt="header" />
      <span class="text-normal absolute left-4 top-1/2 -translate-y-1/2 text-[1.85vh] text-[#75F8FF]">XXXX</span>
    </div>
    <div class="mt-4 flex w-full flex-col items-center justify-center overflow-hidden ph-h-[400]">
      <div
        class="flex w-[90%] items-center justify-between border-b border-[#0F445B] bg-[#0F445B] px-6 py-2 text-[#CDE9FF] ph-text-[12px]"
      >
        <span>项目</span>
        <span>评分</span>
      </div>
      <swiper
        :modules="modules"
        :direction="'vertical'"
        :slides-per-view="'auto'"
        :space-between="8"
        :loop="true"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :speed="1000"
        :mousewheel="true"
        class="swiper-container h-full w-[90%]"
      >
        <swiper-slide v-for="item in data" :key="`${item.item}-${item.type}`" class="!h-auto">
          <div
            class="flex items-center justify-between border-b border-[#0F445B] px-6 py-2 text-[#CDE9FF] ph-text-[12px]"
          >
            <span>{{ item.item }}</span>
            <span>{{ item.score }}</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import 'swiper/css';
import { Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

const modules = [Autoplay, Mousewheel];

const data = [
  { item: 'Design', type: 'a', score: 70 },
  { item: 'Development', type: 'a', score: 60 },
  { item: 'Marketing', type: 'a', score: 50 },
  { item: 'Users', type: 'a', score: 40 },
  { item: 'Test', type: 'a', score: 60 },
  { item: 'Language', type: 'a', score: 70 },
  { item: 'Technology', type: 'a', score: 50 },
  { item: 'Support', type: 'a', score: 30 },
  { item: 'Sales', type: 'a', score: 60 },
  { item: 'UX', type: 'a', score: 50 },
  { item: 'Cloud', type: 'b', score: 50 },
  { item: 'AI', type: 'b', score: 50 },
  { item: 'Cloud', type: 'b', score: 50 },
];
</script>
