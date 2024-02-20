<template>
  <h3>{{ counter }}</h3>
  <p>We Do more</p>
</template>

<script>
export default {
  computed: {
    counter() {
      // return this.$store.state.counter * 2;
      return this.$store.getters.finalCounter;
    },
  },
};
</script>
