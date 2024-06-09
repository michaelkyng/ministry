<template>
  <div class="flex flex-col gap-x-5 gap-y-10">
    <Subheading :heading="props.heading" />
    <p>
      {{ props.text }}
    </p>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import Subheading from '~/components/Subheading.vue'

const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})
</script>
