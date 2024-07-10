<script setup>
import { ref } from "vue";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Project", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];
</script>

<template>
  <div>
    <div class="bg-black h-20 flex justify-between items-center sm:px-20 px-5">
      <div>
        <h1 class="text-white text-xl font-bold hover:cursor-pointer">
          VEASNA
        </h1>
      </div>
      <div class="text-white">
        <ul class="flex sm:gap-10 gap-3">
          <li v-for="(item, index) in navItems" :key="index">
            <a
              :href="item.href"
              class="hover:no-underline hover:text-white group text-white transition hover:cursor-pointer duration-300"
              >{{ item.name }}
              <span
                class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"
              ></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style></style>
