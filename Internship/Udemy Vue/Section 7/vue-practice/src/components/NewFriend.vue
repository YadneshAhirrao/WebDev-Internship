<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name </label>
      <input type="text" id="name" v-model="enteredName" />
    </div>
    <div>
      <label for="phone-number">Phone </label>
      <input type="text" id="phone-number" v-model="enteredPhone" />
    </div>
    <div>
      <label for="email-address">E-mail </label>
      <input type="text" id="email-address" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail,
      );
    },
  },
};
</script>
