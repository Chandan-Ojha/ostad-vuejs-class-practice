import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "product-list",
      component: () => import("../views/ProductList.vue"),
    },
    {
      path: "/create-product",
      name: "create-product",
      component: () => import("../views/CreateProduct.vue"),
    },
  ],
});

export default router;
