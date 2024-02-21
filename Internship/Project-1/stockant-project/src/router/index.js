import { createRouter, createWebHistory } from "vue-router";

import TheHomePage from "../pages/TheHomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import TheDashBoard from "../pages/TheDashBoard.vue";
import PageNotFound from "../pages/PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHomePage },
    { path: "/login", component: LoginPage },
    { path: "/dashboard", component: TheDashBoard },
    { path: "/:notFound(.*)", component: PageNotFound },
  ],
});

export default router;
