<template>
  <div
    class="flex justify-center items-center -skew-x-12 has-[.router-link-exact-active]:bg-primaryColor"
  >
    <NuxtLink
      :to="props.to"
      class="skew-x-12 text-primaryColor px-3.5 py-2"
      active-class="text-white"
      >{{ props.title }}</NuxtLink
    >
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
})
</script>
