<template>
  <nav class="flex items-center justify-between h-16 bg-blue-100">
    <span class="text-blue-800">Navbar</span>
    <div>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/user/signin">Sign in</NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>
