<template>
  <h2>{{ username }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default {
  props: ["firstName", "lastName"],
  setup(props, context) {
    const uName = computed(function () {
      return props.firstName + " " + props.lastName;
    });
    console.log(context);

    onBeforeMount(function () {
      console.log("onBeforeMount");
    });

    onMounted(function () {
      console.log("onMounted");
    });

    onBeforeUpdate(function () {
      console.log("onBeforeUpdate");
    });

    onUpdated(function () {
      console.log("onUpdated");
    });

    onBeforeUnmount(function () {
      console.log("onBeforeUnmount");
    });

    onUnmounted(function () {
      console.log("onUnmounted");
    });

    const age = inject("userAge");

    return { username: uName, age: age };
  },
};
</script>
