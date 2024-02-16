const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      finalName: "",
    };
  },
  methods: {
    increase(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    setFinalName(event) {
      this.finalName = this.name;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount("#events");
