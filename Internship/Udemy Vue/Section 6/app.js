const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "shreyash",
          name: "Shreyash Patil",
          phone: "01234 5678 991",
          email: "shreyash@localhost.com",
        },
        {
          id: "alex",
          name: "Alex Patil",
          phone: "09876 543 221",
          email: "alex@localhost.com",
        },
      ],
    };
  },
});

app.component("friend-list", {
  template: `
  <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails()">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
</li>
`,

  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "alex",
        name: "Alex Patil",
        phone: "09876 543 221",
        email: "alex@localhost.com",
      },
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
