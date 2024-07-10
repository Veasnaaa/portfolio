<script setup>
import Navbar from "../src/view/Navbar/Navbar.vue";
import Main from "../src/view/Main/Main.vue";
</script>

<template>
  <div class=" bg-gradient-to-t from-black to-slate-900 h-screen" style="font-family: Roboto, sans-serif;">
    <Navbar />
  <Main />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
