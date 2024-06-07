<template>
  <div
    class="group flex justify-center items-center -skew-x-12 has-[.nuxt-link-exact-active]:bg-primaryColor"
  >
    <NuxtLink
      :to="props.to"
      class="skew-x-12 text-primaryColor group-has-[.nuxt-link-exact-active]:text-white px-3"
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
