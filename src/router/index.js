import { createRouter, createWebHistory } from "vue-router";
import Clothes from "../views/client/clothes.vue";
import EditProduct from "@/views/admin/editProduct.vue";

const routes = [
  {
    path: "/",
    name: "home",
    // component: () => import("../views/client/home.vue"),
    component: () => import("../views/admin/home.vue"),
  },
  {
    path: "/men",
    name: "men",
    component: () => import("../views/client/men.vue"),
  },
  {
    path: "/women",
    name: "women",
    component: () => import("../views/client/women.vue"),
  },
  {
    path: "/clothes/:productId",
    name: "clothes",
    component: Clothes,
  },
  {
    path: "/buy",
    name: "buy",
    component: EditProduct,
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/client/cart.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/client/profile.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import("../views/admin/product.vue"),
  },
  {
    path: "/editProduct",
    name: "edit-product",
    component: () => import("../views/admin/editProduct.vue"),
  },
  {
    path: "/addProduct",
    name: "add-product",
    component: () => import("../views/admin/addProduct.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
