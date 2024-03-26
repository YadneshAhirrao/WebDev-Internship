import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateTicket from "../components/pages/CreateTicket.vue";
// import PageNotFound from "../views/PageNotFound.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: HomeView,
  },
  {
    path: "/create",
    component: CreateTicket,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
