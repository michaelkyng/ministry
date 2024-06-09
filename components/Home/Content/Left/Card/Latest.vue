<template>
  <div
    class="flex flex-col gap-2.5 px-5 py-2.5 hover:bg-slate-100 transition-colors cursor-pointer"
  >
    <img class="h-32 object-cover" :src="props.image" alt="Latest Image" />
    <div class="flex flex-col gap-1.5">
      <p class="font-semibold tracking-tight">{{ props.title }}</p>
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
