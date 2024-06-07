<template>
  <div class="flex p-3 justify-between">
    <div class="flex gap-x-2.5">
      <Logo />
      <div class="flex flex-col">
        <p class="w-36 leading-5 font-bold text-center">
          Ministry of <span class="text-primaryColor">Youth Development</span>
        </p>
      </div>
    </div>

    <div class="flex gap-5">
      <NavLink title="Home" to="/" />
      <NavLink title="About Us" to="about" />
      <NavLink title="Programme" to="/programme" />
      <NavLink title="Events" to="/events" />
      <NavLink title="Resources" to="/resources" />
      <NavLink title="Contact Us" to="/home#contact" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>
