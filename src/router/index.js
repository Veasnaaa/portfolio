import { createRouter, createWebHistory } from "vue-router";
import Navbar from "../view/Navbar/Navbar.vue";
import Main from "../view/Main/Main.vue";

const routes = [
  {
    path: "/",
    name: "navbar",
    component: Navbar,
  },
  {
    path: "/main",
    name: "main",
    component: Main,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
