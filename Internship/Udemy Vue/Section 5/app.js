const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted()");
  },
});

app.mount("#app");

// Non Reactive Behavior of JavaScript

// let message = "Hello";
// let longMessage = message + " World !";
// console.log(longMessage);
// message = "Hello !!!!!";
// console.log(longMessage);

// Reactive Behavior of JavaScript

// const data = {
//   message: "Hello",
//   longMessage: "Hello World!",
// };

// const handler = {
//   set(target, key, value) {
//     if (key === "message") {
//       target.longMessage = value + " world!";
//     }
//     target.message = value;
//   },
// };

// const proxy = new Proxy(data, handler);
// proxy.message = "Hello !!!!!";

// console.log(proxy.longMessage);
