<template>
  <div>
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "~/components/Header.vue";
import AppFooter from "~/components/Footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
