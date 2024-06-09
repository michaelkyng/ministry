<template>
  <div
    class="relative flex items-center justify-center bg-primaryColor h-[85vh]"
  >
    <div
      class="absolute flex flex-col justify-center items-center h-min w-full min-h-52 gap-10 z-20"
    >
      <p
        class="md:w-[681px] h-auto whitespace-pre-wrap break-words font-black text-white text-4xl md:text-6xl text-center leading-[1.2]"
      >
        Empowering the Youth for a Brighter Future
      </p>
      <p
        class="md:w-[587px] h-auto whitespace-pre-wrap break-words text-white text-center leading-[2]"
      >
        Empowering youth with innovative programs, fostering leadership and
        growth for a brighter future.
      </p>
    </div>

    <div class="w-full h-full">
      <Swiper
        :modules="[SwiperAutoplay]"
        class="mask1 size-full"
        :direction="'horizontal'"
        :slidesPerView="1"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
      >
        <SwiperSlide
          v-for="(slide, index) in slides"
          :key="index"
          class="size-full"
        >
          <img :src="slide" class="object-cover block size-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { SwiperAutoplay } from '#imports'

const slides = [
  '/images/Slide1.png',
  '/images/Slide2.png',
  '/images/Slide3.png',
  '/images/Slide4.png',
]
</script>

<style>
.mask1 {
  mask-image: radial-gradient(
    ellipse,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.3) 47%,
    rgba(0, 0, 0, 0) 100%
  );
}
</style>
