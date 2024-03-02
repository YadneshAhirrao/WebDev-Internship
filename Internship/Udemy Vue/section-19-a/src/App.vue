<template>
  <section class="container">
    <user-data :firstName="firstName" :lastName="lastName"></user-data>
    <button @click="setAge">Set Age</button>
    <div>
      <input type="text" placeholder="Enter First Name" v-model="firstName" />
      <input type="text" placeholder="Enter Last Name" ref="lName" />
      <button @click="setLastName">set Last Name</button>
    </div>
  </section>
</template>

<script>
import userData from "./components/userData.vue";
import { ref } from "vue";
import { computed, provide } from "vue";
export default {
  components: { userData },
  setup() {
    // const uName = ref("Yadnesh");

    const firstName = ref("");
    const lastName = ref("");
    const lName = ref(null);
    const uAge = ref(31);
    // const user = reactive({ name: "Yadnesh", age: 19 });

    const uName = computed(function () {
      return firstName.value + " " + lastName.value;
    });
    provide("userAge", uAge);

    function setNewAge() {
      uAge.value = 33;
    }

    // function setFirstName(event) {
    //   firstName.value = event.target.value;
    // }

    function setLastName() {
      lastName.value = lName.value.value;
    }

    // setTimeout(() => {
    //   // uName.value = "Rao";
    //   (user.name = "Rao"), (user.age = "21");
    // }, 2000);

    // return { userName: user.value.name, age: user.value.age };
    return {
      userName: uName,
      age: uAge,
      setAge: setNewAge,
      firstName,
      lastName,
      setLastName,
      lName,
    };
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
