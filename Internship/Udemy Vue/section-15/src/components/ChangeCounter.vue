<template>
  <button @click="increment">Add One</button>
  <button @click="increase({value: 12})">Add 12</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch("increment");
    // },

    ...mapActions(['increment', 'increase'])
  },
};
</script>
