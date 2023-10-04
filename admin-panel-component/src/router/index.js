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
    {
      path: "/chart",
      name: "chart",
      component: () => import("../views/ChartView.vue"),
    },
    {
      path: "/rich-text",
      name: "rich-text",
      component: () => import("../views/RichTextView.vue"),
    },
    {
      path: "/loader",
      name: "loader",
      component: () => import("../views/ContentLoaderView.vue"),
    },
    {
      path: "/circle-progress",
      name: "circle-progress",
      component: () => import("../views/CircleProgressView.vue"),
    },
  ],
});

export default router;
