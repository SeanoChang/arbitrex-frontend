<template>
  <div class="w-full h-screen flex md:flex-row">
    <!-- Hide on small screens, show on medium screens and up -->
    <div class="hidden md:flex md:flex-1 h-full">
      <div
        class="flex flex-col items-center justify-center drop-shadow-lg shadow-white w-full space-y-2"
      >
        <NuxtImg
          src="/images/da/dacapital-logo-landscape-white.png"
          alt="Logo"
          class="h-20 mr-2"
        />
        <span> Bridge the unreal and real. </span>
      </div>
    </div>

    <!-- Content -->
    <slot />
  </div>
</template>

<script>
import nightTime from "~/assets/images/unsplash/night-time.jpg";
export default {
  name: "SignLayout",
  data() {
    return {
      backgroundUrl: nightTime,
    };
  },
};
</script>
