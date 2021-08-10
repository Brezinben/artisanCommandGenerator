import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/views/NotFound.vue";
import MakeCommand from "@/views/MakeCommand.vue";

const routes = [
  {
    name: "home",
    path: "/",
    redirect: { name: "make" },
  },
  {
    name: "make",
    path: "/make",
    meta: { title: "all artisan make command" },
    component: MakeCommand,
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
