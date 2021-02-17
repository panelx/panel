const Widget = {
  props: ['instance'],
  template: `
    <div class="widget">
      <p class="widget__title">{{instance.widget.title}}</p>
      <div class="widget__body">
        <DebugWidget v-if="instance.widget.type === 'debug'" v-bind:data="instance.data"></DebugWidget>
        <LineChartWidget v-if="instance.widget.type === 'line'" v-bind:data="instance.data"></LineChartWidget>
        <BarChartWidget v-if="instance.widget.type === 'bar'" v-bind:data="instance.data"></BarChartWidget>
        <PieChartWidget v-if="instance.widget.type === 'pie'" v-bind:data="instance.data"></PieChartWidget>
        <TextWidget v-if="instance.widget.type === 'text'" v-bind:data="instance.data"></TextWidget>
      </div>
    </div>
  `
};

export default Widget;