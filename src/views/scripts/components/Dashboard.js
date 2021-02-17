const Dashboard = {
  props: ['widgets'],
  template: `
    <div class="dashboard">
      <widget v-for="widget in widgets" v-bind:instance="widget"></widget>
    </div>
  `
};

export default Dashboard;