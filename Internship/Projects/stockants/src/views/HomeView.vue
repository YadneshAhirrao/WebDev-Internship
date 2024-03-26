<template>
  <div>
    <NavigationBar />

    <MainPage />
  </div>
</template>

<script>
import MainPage from "../components/pages/MainPage.vue";
import NavigationBar from "../components/UI/NavigationBar.vue";

export default {
  data() {
    return {};
  },
  components: {
    MainPage,
    NavigationBar,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
</style>
