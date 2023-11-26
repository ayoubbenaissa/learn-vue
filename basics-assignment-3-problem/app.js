const app = Vue.createApp({
    data() {
        return {
            result: 0
        }
    },
    computed: {
        diplayVal() {
            if (this.result < 37) return "Not there yet..."
            if (this.result > 37) return "Too much!"
            return 37;
        }
    },
    watch: {
        diplayVal() {
            setTimeout(() => {
                this.result = 0;
            }, 5000);
        }
    },
    methods: {
        add(val = 1) {
            this.result += val
        }
    }
});

app.mount("#assignment");
