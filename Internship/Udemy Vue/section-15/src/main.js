import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const app = createApp(App);

const store = createStore({
  state() {
    return {
      counter: 1,
      isLoggedIn: false
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  getters: {
    normailizedCounter(state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }

      if (finalCounter > 100) {
        return 100;
      }

      return finalCounter;
    },
    finalCounter(state) {
      return state.counter * 2;
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit("increment");
      }, 2000);
    },

    increase(context, payload) {
      console.log(context);
      context.commit("increase", payload);
    },
  },
});
app.use(store);
app.mount("#app");
