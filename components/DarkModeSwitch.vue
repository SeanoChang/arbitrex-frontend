<script setup lang="ts">
const { isDark } = useDarkMode();
</script>

<template>
  <ColorScheme placeholder="" tag="span">
    <UButton
      class="p-2 text-black dark:text-white"
      variant="ghost"
      :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'"
      @click="isDark = !isDark"
    />
  </ColorScheme>
</template>

<script lang="ts">
export default {
  name: "DarkModeSwitch",
};
</script>
