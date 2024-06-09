<template>
  <div
    class="flex justify-center items-start gap-2.5 hover:bg-slate-100 transition-colors px-5 sm:px-2.5 md:px-5 py-2.5 cursor-pointer"
  >
    <img class="size-10" :src="props.image" :alt="props.title" />
    <div class="flex flex-col gap-1.5">
      <p class="font-medium tracking-tight leading-tight line-clamp-2">
        {{ props.title }}
      </p>
      <div class="flex gap-2.5">
        <ClockIcon class="size-5 text-primaryColor" />
        <p class="text-sm text-gray-500">{{ props.date }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ClockIcon } from '@heroicons/vue/outline'
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
})
</script>
