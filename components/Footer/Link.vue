<template>
  <div class="h-auto w-fit">
    <NuxtLink :to="props.link" class="text-white">{{ props.text }}</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})
</script>
