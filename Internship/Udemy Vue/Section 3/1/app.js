const app = Vue.createApp({
  data() {
    return { 
      enteredValue: '',
      tasks: [] 
    };
  },
  methods: {
    addGoal() {
      this.tasks.push(this.enteredValue);
    },
    removeGoal(idx) {
      this.tasks.splice(idx, 1);
    }
  },
});

app.mount("#user-tasks");
