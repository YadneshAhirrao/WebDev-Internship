<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal"/>
  <button @click="setGoal" >Set Goal</button>
  <error-alert v-if="inputInvalid">
    <h2>Input is Invalid</h2>
    <p>Please at least few characters.....</p>
    <button @click="confirmError">Okay</button>
  </error-alert>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === '') {
        this.inputInvalid = true;
      }
    },
    confirmError() {
      this.inputInvalid = false;
    },
  },

  data() {
    return {
      inputInvalid: false,
    };
  },
  components: {
    ErrorAlert,
  },
};
</script>
