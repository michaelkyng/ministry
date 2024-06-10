<template>
  <div class="font-lato">
    <NavBar class="fixed w-full z-30" />
    <NuxtPage />
    <Footer />
  </div>
</template>
<script lang="ts"></script>
<style>
body::-webkit-scrollbar {
  display: none;
}

.menu-scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.menu-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
