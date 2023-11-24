// create and config the Vue app:
const app = Vue.createApp({
    data() {
        return {
            courseGoal: "course",
            linkRef: "https://vuejs.org/"
        };
    },
    methods: {
        setGoal() {
            const randomNb = Math.random();
            this.courseGoal =  (randomNb > 0.5) ? 'learn Vue' : 'master Vue';
        },
    }
});

// mount the app on the desired element:
app.mount("#user-goal");