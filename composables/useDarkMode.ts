import { computed } from "vue";

export function useDarkMode() {
  const colorMode = useColorMode();

  const isDark = computed({
    get() {
      return colorMode.value === "dark";
    },
    set(value) {
      colorMode.preference = value ? "dark" : "light";
    },
  });

  return { isDark };
}
