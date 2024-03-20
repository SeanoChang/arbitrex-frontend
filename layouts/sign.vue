<template>
  <div class="w-full h-screen flex md:flex-row">
    <!-- Hide on small screens, show on medium screens and up -->
    <div class="hidden md:flex md:flex-1 h-full pl-10">
      <div
        class="flex flex-col items-center justify-center drop-shadow-lg shadow-white w-full space-y-2"
      >
        <ColorScheme placeholder="" tag="span" class="h-20">
          <NuxtImg
            :src="
              colorMode.value === 'dark'
                ? '/images/da/dacapital-logo-landscape-white.png'
                : '/images/da/dacapital-logo-landscape-black.png'
            "
            alt="Logo"
            class="h-20 mr-2"
          />
        </ColorScheme>
        <span> Bridge the unreal and real. </span>
      </div>
    </div>

    <!-- Content -->
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "SignLayout",
  setup() {
    const colorMode = useColorMode();
    return { colorMode };
  },
};
</script>
