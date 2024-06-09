<template>
  <div id="contact" class="flex flex-col gap-y-5 items-center">
    <Subheading heading="Contact Us" />
    <div class="flex flex-col size-5/6 lg:size-4/6 sm:p-10 gap-4">
      <div class="flex gap-4 w-full flex-wrap">
        <input
          class="p-4 bg-[#60A66E]/30 placeholder:text-black/70 flex-auto focus-within:outline-none"
          type="name"
          name="name"
          id="name"
          placeholder="Name"
        />
        <input
          class="p-4 bg-[#60A66E]/30 placeholder:text-black/70 flex-auto focus-within:outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
      </div>
      <textarea
        class="p-4 bg-[#60A66E]/30 placeholder:text-black/70 flex-auto focus-within:outline-none"
        type="message"
        name="message"
        id="message"
        placeholder="Message"
        cols="30"
        rows="10"
      ></textarea>
      <button
        type="button"
        class="p-4 bg-primaryColor/80 text-white flex-auto font-semibold"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
