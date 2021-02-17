const PieChartWidget = {
  mounted() {
    const divNode = this.$refs.pieChartNode;
    this.chartInstance = new Chartist.Pie(divNode, {
      series: [5, 2, 4, 2, 0]
    });
  },
  template: `
    <div ref="pieChartNode" class="ct-chart ct-minor-sixth"></div>
  `
}

export default PieChartWidget;
