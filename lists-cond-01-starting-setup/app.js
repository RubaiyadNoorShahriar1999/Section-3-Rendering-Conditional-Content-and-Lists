const app = Vue.createApp({
  data() {
    // if goals array has a value then the v-if statement will be false
    return {
      enteredValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
    },
  },
});

app.mount("#user-goals");
