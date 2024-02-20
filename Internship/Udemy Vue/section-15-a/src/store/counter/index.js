import counterMutaions from "./mutations.js";
import counterActions from "./actions.js";
import counterGetters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      counter: 1,
    };
  },
  mutations: counterMutaions,
  actions: counterActions,
  getters: counterGetters,
};
