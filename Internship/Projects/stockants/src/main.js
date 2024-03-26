import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import PrimeVue from "primevue/config";

import "./index.css";

import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

const app = new Vue({
  router,
  render: (h) => h(App),
});

Vue.use(ElementUI);
Vue.use(PrimeVue);

app.$mount("#app");
