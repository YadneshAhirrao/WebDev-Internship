<template>
  <div>
    <NavigationBar />
    <CreateTaskVue />
  </div>
</template>

<script>
import NavigationBar from "../../components/UI/NavigationBar.vue";
import CreateTaskVue from "../../components/UI/CreateTask.vue";
export default {
  data() {
    return {};
  },
  components: {
    NavigationBar,
    CreateTaskVue,
  },
};
</script>
