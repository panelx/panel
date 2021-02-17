const BarChartWidget = {
  mounted() {
    const divNode = this.$refs.barChartNode;
    this.chartInstance = new Chartist.Bar(divNode, {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      series: [[10, 2, 4, 3, 20, 5]]
    });
  },
  template: `
    <div ref="barChartNode" class="ct-chart ct-minor-sixth"></div>
  `
}

export default BarChartWidget;
