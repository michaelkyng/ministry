<template>
  <div class="sm:p-16 w-full md:w-5/6 lg:w-4/6">
    <div
      class="flex flex-col gap-y-10 bg-primaryColor sm:-skew-x-12 h-fit px-5 py-10 sm:p-10 w-full"
    >
      <p
        class="text-white sm:skew-x-12 text-center tracking-wider text-sm sm:text-base leading-relaxed"
      >
        "{{ props.text }}"
      </p>
      <div class="flex gap-2 items-center">
        <img class="sm:skew-x-12" :src="props.image" alt="Reviewer Image" />
        <hr class="border-white border-b-1 w-8" />
        <p class="sm:skew-x-12 text-white text-lg font-medium">
          {{ props.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})
</script>

<style></style>
