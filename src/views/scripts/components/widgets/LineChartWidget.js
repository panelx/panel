const LineChartWidget = {
  mounted() {
    const divNode = this.$refs.chartNode;
    this.chartInstance = new Chartist.Line(divNode, {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      series: [
        [5, 2, 4, 2, 0]
      ]
    });
  },
  template: `
    <div ref="chartNode" class="ct-chart ct-minor-sixth"></div>
  `
}

export default LineChartWidget;
