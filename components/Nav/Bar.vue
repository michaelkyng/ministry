<template>
  <div class="flex p-3 justify-between items-center bg-white">
    <div class="flex gap-x-2.5">
      <Logo />
      <div class="flex flex-col">
        <p class="w-36 leading-5 font-bold text-center">
          Ministry of <span class="text-primaryColor">Youth Development</span>
        </p>
      </div>
    </div>

    <div class="hidden lg:flex gap-5">
      <NavLink title="Home" to="/" />
      <NavLink title="About Us" to="about" />
      <NavLink title="Programme" to="/programme" />
      <NavLink title="Events" to="/events" />
      <NavLink title="Resources" to="/resources" />
      <NavLink title="Contact Us" to="/#contact" />
    </div>

    <!-- Mobile View -->
    <div class="lg:hidden inline">
      <div class="relative z-10">
        <transition mode="out-in" name="buttonSwap">
          <button
            v-if="!menuToggled"
            class="outline-primaryColor active:outline rounded-md outline-2 p-0.5 z-20"
            @click="menuToggled = !menuToggled"
          >
            <MenuAlt3Icon class="w-6 h-6" />
          </button>

          <button
            v-else
            class="outline-white active:outline rounded-md outline-2 p-0.5 z-20"
            @click="menuToggled = !menuToggled"
          >
            <XIcon class="w-6 h-6 text-white" />
          </button>
        </transition>
      </div>
    </div>

    <Transition mode="in-out" name="menu">
      <div
        v-if="menuToggled"
        class="absolute lg:hidden h-screen bg-primaryColor right-0 w-2/5 top-0 backdrop-blur-sm"
      >
        <div class="flex flex-col w-full py-20 text-right *:py-5">
          <NuxtLink
            to="/"
            @click="menuToggled = !menuToggled"
            class="text-white px-5 py-2.5 active:text-accent border-y-white/30 border-y"
            active-class="text-accent"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/about"
            @click="menuToggled = !menuToggled"
            class="text-white px-5 py-2.5 active:text-accent border-b-white/30 border-b"
            active-class="text-accent"
            >About Us</NuxtLink
          >
          <NuxtLink
            to="/programme"
            @click="menuToggled = !menuToggled"
            class="text-white px-5 py-2.5 active:text-accent border-b-white/30 border-b"
            active-class="text-accent"
            >Programme</NuxtLink
          >
          <NuxtLink
            to="/events"
            @click="menuToggled = !menuToggled"
            class="text-white px-5 py-2.5 active:text-accent border-b-white/30 border-b"
            active-class="text-accent"
            >Events</NuxtLink
          >
          <NuxtLink
            to="/resources"
            @click="menuToggled = !menuToggled"
            class="text-white px-5 py-2.5 active:text-accent border-b-white/30 border-b"
            active-class="text-accent"
            >Resources</NuxtLink
          >
          <NuxtLink
            to="/#contact"
            @click="menuToggled = !menuToggled"
            class="text-white px-5 py-2.5 active:text-accent border-b-white/30 border-b"
            active-class="text-accent"
            >Contact Us</NuxtLink
          >
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { MenuAlt3Icon, XIcon } from '@heroicons/vue/solid'
const menuToggled = ref(false)
</script>

<style>
.menu-enter-active {
  animation: slide-in 0.25s ease-in-out 0s 1 normal;
}

.menu-leave-active {
  animation: slide-out 0.25s ease-in-out 0s 1 normal none;
}

.buttonSwap-enter-active {
  animation: scale-small 0.25s ease 0s 1 normal none;
}

.buttonSwap-leave-active {
  animation: scale-large 0.25s ease 0s 1 normal none;
}

@keyframes slide-in {
  0% {
    transform: translateX(100%);
    transform-origin: right;
    opacity: 1;
  }

  100% {
    transform: translateX(0%);
    transform-origin: right;
    opacity: 1;
  }
}

@keyframes slide-out {
  0% {
    transform: translateX(0%);
    transform-origin: right;
    opacity: 1;
  }

  100% {
    transform: translateX(100%);
    transform-origin: right;
    opacity: 1;
  }
}

@keyframes scale-small {
  0% {
    transform: scale(0.2);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes scale-large {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.2);
  }
}
</style>
