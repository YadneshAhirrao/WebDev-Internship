import { createRouter, createWebHistory } from "vue-router";
import CoacheDetail from "../pages/coaches/CoacheDetail.vue";
import CoachesList from "../pages/coaches/CoachesList.vue";
import CoacheRegistration from "../pages/coaches/CoacheRegistration.vue";
import ContactCoach from "../pages/requests/ContactCoach.vue";
import RequestRecieved from "../pages/requests/RequestRecieved.vue";
import NotFound from "../pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/coaches",
    },
    {
      path: "/coaches",
      component: CoachesList,
    },
    {
      path: "/coaches/:id",
      component: CoacheDetail,
      children: {
        path: "/contact",
        component: ContactCoach, //  /coaches/c1/contact
      },
    },
    {
      path: "/register",
      component: CoacheRegistration,
    },
    {
      path: "/requests",
      component: RequestRecieved,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
