<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
const { isDark } = useDarkMode();

const links = [
  [
    {
      label: "Strategies",
      to: "/strategies",
    },
    {
      label: "Subscriptions",
      to: "/subscriptions",
    },
    {
      label: "Blogs",
      to: "/blogs",
    },
  ],
  [
    {
      label: "Sign In",
      to: "/user/signin",
    },
    {
      label: "Sign Up",
      to: "/user/signup",
      variant: "solid",
      color: "primary",
    },
    {
      label: "Profile",
      icon: "i-heroicons-question-mark-circle",
      to: "/user/me",
    },
  ],
];
</script>

<template>
  <div
    class="flex flex-row justify-between items-center p-3 sticky w-full bg-white dark:bg-da-black"
  >
    <!-- Desktop Product Group -->
    <div class="hidden sm:flex flex-row justify-around items-center space-x-2">
      <NuxtLink
        to="/"
        class="flex flex-row justify-center items-center p-1 mx-1"
      >
        <ColorScheme placeholder="" tag="span" class="w-8">
          <NuxtImg
            :src="
              isDark ? '/images/da/logo-white.png' : '/images/da/logo-black.png'
            "
            alt="Arbitrex"
            class="w-8"
          />
        </ColorScheme>
        <h1 class="text-3xl font-semibold text-black dark:text-white ml-1">
          Arbitrex
        </h1>
      </NuxtLink>
      <UButton
        v-for="(link, index) in links[0]"
        :key="index"
        color="gray"
        variant="ghost"
        class="group"
      >
        <NuxtLink
          class="flex flex-row justify-center items-center"
          :to="link.to"
        >
          <span
            class="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50 text-base"
            :class="{
              'text-gray-900 dark:text-gray-50': $route.path === link.to,
            }"
            >{{ link.label }}</span
          >
        </NuxtLink>
      </UButton>
    </div>

    <!-- Desktop User Group -->
    <div class="hidden sm:flex flex-row justify-around items-center space-x-2">
      <DarkModeSwitch />
      <UButton
        v-for="(link, index) in links[1]"
        :key="index"
        class="group"
        :color="link.color || 'gray'"
        :variant="link.variant || 'ghost'"
      >
        <NuxtLink
          class="group-hover:text-gray-900 dark:group-hover:text-gray-50"
          :class="{ 'text-gray-50': link.label === 'Sign Up' }"
          :to="link.to"
          >{{ link.label }}</NuxtLink
        >
      </UButton>
    </div>

    <!-- Mobile Menu -->
    <div class="relative flex sm:hidden w-full">
      <NuxtLink
        to="/"
        class="flex flex-row justify-center items-center p-1 mx-1"
      >
        <ColorScheme placeholder="" tag="span" class="w-8">
          <NuxtImg
            :src="
              isDark ? '/images/da/logo-white.png' : '/images/da/logo-black.png'
            "
            alt="Arbitrex"
            class="w-8"
          />
        </ColorScheme>
        <h1 class="text-3xl font-semibold text-black dark:text-white ml-1">
          Arbitrex
        </h1>
      </NuxtLink>
      <UButton
        variant="ghost"
        class="absolute top-2 right-2"
        icon="i-heroicons-ellipsis-vertical-solid"
        color="gray"
        @click="isOpen = true"
      />

      <USlideover v-model="isOpen">
        <div
          class="p-8 flex-1 relative text-3xl text-gray-500 dark:text-gray-400"
        >
          <UButton
            class="absolute top-5 right-5"
            icon="i-heroicons-x-mark-20-solid"
            color="gray"
            variant="ghost"
            @click="isOpen = false"
          />
          <div class="flex flex-col space-y-8 pb-8">
            <NuxtLink
              v-for="(link, index) in links[0]"
              :key="index"
              :to="link.to"
              :class="{
                'text-gray-900 dark:text-gray-50 underline':
                  $route.path === link.to,
              }"
              @click="isOpen = false"
              >{{ link.label }}</NuxtLink
            >
          </div>
          <div class="flex flex-col space-y-8">
            <NuxtLink
              v-for="(link, index) in links[1]"
              :key="index"
              :to="link.to"
              :class="{
                'text-gray-900 dark:text-gray-50 underline':
                  $route.path === link.to,
              }"
              @click="isOpen = false"
              >{{ link.label }}</NuxtLink
            >
          </div>
        </div>
      </USlideover>
    </div>
  </div>
</template>

<script lang="ts">
import DarkModeSwitch from "~/components/DarkModeSwitch.vue";

export default {
  name: "AppHeader",
  components: {
    DarkModeSwitch,
  },
};
</script>
