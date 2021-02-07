const Dashboard = {
  data() {
    return {
      widgets: []
    }
  },
  mounted() {
    setInterval(() => {
      fetch('http://localhost:3000/cache')
        .then(d => d.json())
        .then(d => this.widgets = d);
    }, 1000);
  }
}

Vue.createApp(Dashboard).mount('#dashboard');