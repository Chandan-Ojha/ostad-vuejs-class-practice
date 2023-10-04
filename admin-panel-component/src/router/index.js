import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/TableView.vue"),
    },
    {
      path: "/toast",
      name: "toast",
      component: () => import("../views/ToastView.vue"),
    },
  ],
});

export default router;
