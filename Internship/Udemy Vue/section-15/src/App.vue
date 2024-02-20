<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <favourite-value></favourite-value>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>

  <base-container title="Auth">
  <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import FavouriteValue from "./components/FavouriteValue.vue";
import UserAuth from "./components/UserAuth.vue";
export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
    UserAuth,
  },
  methods: {
    addOne() {
      // this.$store.commit("increase", {value:10});

      // or

      // this.$store.commit({
      //   type: "increase",
      //   value: 10,
      // });

      this.$store.dispatch({
        type: "increase",
        value: 10,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
