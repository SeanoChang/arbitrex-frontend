<template>
  <UButton
    class="p-2 text-black dark:text-white"
    variant="ghost"
    :icon="colorMode.value === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'"
    @click="toggleColorMode"
  />
</template>

<script lang="ts">
export default {
  name: "DarkModeSwitch",
  setup() {
    const colorMode = useColorMode();
    const toggleColorMode = () => {
      colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    };
    return {
      colorMode,
      toggleColorMode,
    };
  },
};
</script>
