<template>
  <div class="flex flex-col gap-10 p-10 bg-primaryColor">
    <div
      class="flex flex-wrap justify-center w-full md:w-5/6 lg:w-4/6 gap-5 mx-auto"
    >
      <FooterLink text="Home" link="/" />
      <FooterLink text="About Us" link="/about" />
      <FooterLink text="Programme" link="/programme" />
      <FooterLink text="Events" link="/events" />
      <FooterLink text="Resources" link="/resources" />
      <FooterLink text="Contact Us" link="/#contact" />
      <NuxtLink to="/"
        ><img src="/images/Material-1.png" alt="Facebook"
      /></NuxtLink>
      <NuxtLink to="/"
        ><img src="/images/Material-2.png" alt="Telegram"
      /></NuxtLink>
      <NuxtLink to="/"
        ><img src="/images/Material-3.png" alt="Instagram"
      /></NuxtLink>
    </div>

    <div class="flex justify-center">
      <p class="text-white text-sm text-center">
        © 2024 Lagos State Government - All Rights Reserved
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
