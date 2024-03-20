<script setup lang="ts">
const socailLinks = [
  {
    href: "https://t.me/data_dacl",
    icon: "telegram-white.svg",
    label: "Telegram",
  },
  {
    href: "https://www.instagram.com/data_dacl/",
    icon: "instagram-white.svg",
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/@dacapitalscom",
    icon: "youtube-white.svg",
    label: "Youtube",
  },
  {
    href: "https://twitter.com/dacapitals",
    icon: "twitter-white.svg",
    label: "Twitter",
  },
  {
    href: "https://www.facebook.com/dacapitals/",
    icon: "facebook-white.svg",
    label: "Facebook",
  },
];
</script>

<template>
  <footer class="flex items-center justify-between p-4 bg-da-black">
    <!-- DA logo and trademark -->
    <div class="hidden sm:flex flex-col items-start justify-center">
      <span class="text-gray-400 text-sm"
        >Arbitrex, A Brand of
        <a class="hover:underline hover:text-white" href="https://datatw.io/"
          >DA Capital</a
        >. All rights reserved 2023-2024</span
      >
    </div>

    <!-- Social media links -->
    <div
      class="w-full sm:w-auto flex flex-row items-center justify-center space-x-2"
    >
      <a
        v-for="(link, index) in socailLinks"
        :key="index"
        :href="link.href"
        target="_blank"
        class="flex items-center justify-center p-2 text-da-white"
      >
        <NuxtImg :src="`/icons/${link.icon}`" class="w-6 h-6" />
      </a>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "AppFooter",
};
</script>
