import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    name: "main",
    path: "/",
    meta: { title: "main page" },
    component: NotFound,
    //redirect: { name: "" },
  },

  {
    path: "/:path(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//Pricipalement pour l'authentification

// router.beforeEach((to, from, next) => {
//   if (true) {
//   } else next();
// });

export default router;
