const app = Vue.createApp({
    data() {
        return {
            selectedBox: null
        }
    },
    methods: {
        setSelectedBox(boxId) {
            this.selectedBox = boxId;
        }
    }
});

app.mount("#styling");
