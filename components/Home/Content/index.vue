<template>
  <div class="h-fit bg-slate-100 overflow-hidden">
    <div class="px-5 py-10 w-full xl:max-w-[80%] 2xl:w-full space-y-20 mx-auto">
      <div class="flex flex-wrap sm:flex-nowrap gap-10 xl:gap-20">
        <HomeContentLeft />
        <HomeContentRight />
      </div>

      <div id="programmes" class="flex flex-col gap-y-5">
        <Subheading heading="Programmes" />
        <div class="w-full">
          <Swiper
            class="mask2 size-5/6 lg:size-4/6 cursor-grab !p-0 md:!p-16"
            :modules="[SwiperAutoplay, SwiperEffectCube, SwiperPagination]"
            :effect="'cube'"
            :cubeEffect="{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }"
            :pagination="true"
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
              class="w-fit"
            >
              <div class="relative">
                <img :src="slide.image" class="w-full" />
                <p
                  class="absolute text-primaryColor bg-slate-100/50 lg:bg-slate-100 py-2.5 w-full bottom-0 right-0 md:text-xl font-semibold"
                >
                  {{ slide.text }}
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div id="stories" class="flex flex-col gap-y-5 items-center">
        <Subheading heading="Success Stories" />
        <Swiper
          :modules="[SwiperAutoplay, SwiperEffectCoverflow]"
          class="size-full cursor-grab"
          :direction="'horizontal'"
          :effect="'coverflow'"
          :slidesPerView="1"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
        >
          <SwiperSlide v-for="(review, index) in reviews" :key="index">
            <HomeContentSuccessStories
              :text="review.text"
              :image="review.image"
              :name="review.name"
              class="mx-auto"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

    <div class="relative bg-white w-full">
      <div
        class="px-5 py-10 w-full xl:max-w-[80%] 2xl:w-full space-y-20 mx-auto"
      >
        <HomeContentContact />
      </div>
      <img
        class="absolute object-cover w-5/12 opacity-15 -right-10 sm:-right-40 top-1/4"
        src="/images/logo.png"
        alt="background"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import {
  SwiperAutoplay,
  SwiperEffectCube,
  SwiperPagination,
  SwiperEffectCoverflow,
} from '#imports'

const slides = [
  {
    image: '/images/CarouselImage1.png',
    text: 'Providing an enabling and empowering environment for Youth development.',
  },
  {
    image: '/images/CarouselImage2.png',
    text: 'Facilitating adoption, fostering, guardianship and child custody.',
  },
  {
    image: '/images/CarouselImage3.png',
    text: 'Supervising and monitoring of Youth Centres and play grounds for recreation',
  },

  {
    image: '/images/CarouselImage4.png',
    text: 'Facilitating Medical Social Work Services to indigent citizens i.e. destitute, accident victims',
  },
]

const reviews = [
  {
    text: "A 19-year-old from Lagos, discovered her passion for leadership through the ministry's Citizenship and Leadership Training program. Initially shy and uncertain, Amina participated in various workshops and leadership camps organized by the ministry. She learned valuable skills such as public speaking, project management, and teamwork. Today, Amina is the president of her university's student union, leading initiatives that promote student welfare and community service. Her journey from a timid student to a confident leader showcases the transformative power of the ministry's programs.",
    image: 'https://picsum.photos/40/40',
    name: 'Amina',
  },
  {
    text: "A young man from a low-income neighborhood, faced numerous challenges after losing his parents in an accident. The ministry's Medical Social Work Services provided him with the support he needed, including counseling, medical assistance, and educational sponsorship. With this help, John completed his education and pursued a degree in social work. Now, he works as a social worker within the ministry, advocating for vulnerable populations and providing the same support that helped him overcome his hardships.",
    image: 'https://picsum.photos/40/40',
    name: 'John',
  },
  {
    text: "a volunteer with one of the youth-focused NGOs supervised by the ministry, has made significant strides in her community. She participated in the ministry's training programs, learning about effective advocacy and community mobilization. Ngozi led a campaign to improve sanitation and access to clean water in her village, which resulted in the construction of new wells and sanitation facilities. Her dedication and leadership have dramatically improved the quality of life in her community, demonstrating the impact of the ministry's support for youth NGOs.",
    image: 'https://picsum.photos/40/40',
    name: 'Ngozi',
  },
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

.mask2 {
  mask-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.4) 150%
  );
}

.swiper-pagination-bullet {
  background: #0cf13a;
}
</style>
