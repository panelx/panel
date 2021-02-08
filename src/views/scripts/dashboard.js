const Dashboard = {
  data() {
    return {
      widgets: []
    }
  },
  mounted() {
    setInterval(() => {
      fetch(`http://localhost:${port}/cache`)
        .then(d => d.json())
        .then(d => this.widgets = d);
    }, 1000);
  }
}

Vue.createApp(Dashboard).mount('#dashboard');