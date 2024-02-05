const app = Vue.createApp({
  data() {
    return {
      firstName: "Yadnesh",
      lastName: "Ahirrao",
      age: 21,
      imageLink: "https://images.unsplash.com/photo-1516822277566-bb38424a2b77",
    };
  },
  methods: {
    favNum() {
      let num = Math.floor(Math.random() * 10);
      return num;
    },
    calculateAge() {
      return this.age + 5;
    },
  },
});
app.mount("#assignment");
