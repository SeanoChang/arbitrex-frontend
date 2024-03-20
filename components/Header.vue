<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const links = [
  [
    {
      label: "Strategies",
      icon: "i-heroicons-code-bracket-square",
      to: "/strategies",
    },
    {
      label: "Subscriptions",
      icon: "i-heroicons-chart-bar",
      to: "/subscriptions",
    },
    {
      label: "Blogs",
      icon: "i-heroicons-document-text",
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
    class="flex flex-row justify-between items-center p-3 sticky w-full bg-da-black"
  >
    <!-- Desktop Product Group -->
    <div class="hidden sm:flex flex-row justify-around items-center space-x-2">
      <NuxtLink
        to="/"
        class="flex flex-row justify-center items-center p-1 mx-1"
      >
        <NuxtImg src="/images/da/logo-white.png" alt="Arbitrex" class="w-8" />
        <h1 class="text-3xl font-semibold text-white">Arbitrex</h1>
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
          <UIcon
            :name="link.icon"
            class="w-5 h-5 bg-gray-400 group-hover:bg-gray-50 mr-1"
            :class="{ 'bg-gray-50': $route.path === link.to }"
          />
          <span
            class="text-gray-400 group-hover:text-gray-50 text-base"
            :class="{ 'text-gray-50': $route.path === link.to }"
            >{{ link.label }}</span
          >
        </NuxtLink>
      </UButton>
    </div>

    <!-- Desktop User Group -->
    <div class="hidden sm:flex flex-row justify-around items-center space-x-2">
      <UButton
        v-for="(link, index) in links[1]"
        :key="index"
        class="group"
        :color="link.color || 'gray'"
        :variant="link.variant || 'ghost'"
      >
        <NuxtLink
          class="text-gray-400 group-hover:text-gray-50"
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
        <NuxtImg src="/images/da/logo-white.png" alt="Arbitrex" class="w-8" />
        <h1 class="text-3xl font-semibold text-white">Arbitrex</h1>
      </NuxtLink>
      <UButton
        variant="ghost"
        class="absolute top-2 right-2"
        icon="i-heroicons-ellipsis-vertical-solid"
        color="gray"
        @click="isOpen = true"
      />

      <USlideover v-model="isOpen">
        <div class="p-8 flex-1 space-y-8 relative text-3xl text-gray-400">
          <UButton
            variant="ghost"
            class="absolute top-5 right-5"
            icon="i-heroicons-x-mark-16-solid"
            color="gray"
            @click="isOpen = false"
          />
          <div class="flex flex-col space-y-8">
            <NuxtLink
              v-for="(link, index) in links[0]"
              :key="index"
              :to="link.to"
              :class="{ 'text-gray-50 underline': $route.path === link.to }"
              @click="isOpen = false"
              >{{ link.label }}</NuxtLink
            >
          </div>
          <div class="flex flex-col space-y-8">
            <NuxtLink
              v-for="(link, index) in links[1]"
              :key="index"
              :to="link.to"
              :class="{ 'text-gray-50 underline': $route.path === link.to }"
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
export default {
  name: "AppHeader",
};
</script>
