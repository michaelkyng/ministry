<template>
  <div class="flex flex-col items-center gap-2">
    <h2 :class="subHeading">
      {{ props.heading }}
    </h2>
    <hr class="border-primaryColor border-b-2 w-20" />
  </div>
</template>
<script lang="ts" setup>
const { subHeading } = useTailwindConfig()
const props = defineProps({
  heading: String,
})
</script>
