const vueApp = Vue.createApp({
    data() {
        return {
            name: "Ayoub",
            age: 29,
            imgSrc: "https://lms-mgmt.schwab.com/assets/images/schwab-logo.png",
            inputVal: "value..."
        }
    }
});

vueApp.mount("#assignment");
