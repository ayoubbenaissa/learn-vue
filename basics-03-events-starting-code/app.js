const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ""
    };
  },
  computed: {
    fullname() {
      console.log(" ** inside fullname ** ");
      return (this.name) ? `${this.name} Foo` : "";
    }
  },
  methods: {
    handleAdd(nb) {
      this.counter += nb;
    },
    handleReduce(nb) {
      this.counter -= nb;
    },
    handleInput(event) {
      setTimeout(() => { this.name = event.target.value }, 250)
    },
    handleFormSubmit(event) {
      // event.preventDefault(); => handled by event modifier `.prevent`
      alert("form submitted!");
    },
    handleSecondInput() {
      alert(this.name);
    }
  }
});

app.mount('#events');
