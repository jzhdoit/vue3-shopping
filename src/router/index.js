import { createRouter, createWebHistory } from "vue-router";
import login from "@/views/login/index.vue";
import layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import category from "@/views/Category/index.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: layout,
      children: [
        {
          path: "",
          component: Home,
        },
        {
          path: "category",
          component: category,
        },
      ],
    },
    {
      path: "/login",
      component: login,
    },
  ],
});

export default router;
