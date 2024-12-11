import { createRouter, createWebHistory } from "vue-router";
import Clothes from "../views/client/clothes.vue";
import EditProduct from "@/views/admin/editProduct.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/home.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register/home.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("../views/client/home.vue"),
  },
  {
    path: "/men",
    name: "men",
    meta: { requiresAuth: true },
    component: () => import("../views/client/men.vue"),
  },
  {
    path: "/women",
    name: "women",
    meta: { requiresAuth: true },
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
    component: () => import("../views/client/buy.vue"),
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

router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem("token");
  console.log("isLoggedIn: ", isLoggedIn);
  console.log("token: ", localStorage.getItem("token"));

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      console.log("isLoggedIn: ", isLoggedIn);
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else if (to.path === "/login" && isLoggedIn) {
    next({ path: "/" });
  } else {
    next();
  }
});

export default router;
