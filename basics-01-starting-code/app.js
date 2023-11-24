// create and config the Vue app:
const app = Vue.createApp({
    data() {
        return {
            courseGoal: "course"
        };
    }
});

// mount the app on the desired element:
app.mount("#user-goal");