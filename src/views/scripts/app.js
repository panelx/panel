import Widget from './components/Widget.js';
import DebugWidget from './components/widgets/DebugWidget.js';
import LineChartWidget from './components/widgets/LineChartWidget.js';
import BarChartWidget from './components/widgets/BarChartWidget.js';
import PieChartWidget from './components/widgets/PieChartWidget.js';
import TextWidget from './components/widgets/TextWidget.js';
import Dashboard from './components/Dashboard.js';

const app = Vue.createApp({
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
    }, 3000);
  }
});

app.component('Dashboard', Dashboard);
app.component('Widget', Widget);
app.component('DebugWidget', DebugWidget);
app.component('LineChartWidget', LineChartWidget);
app.component('BarChartWidget', BarChartWidget);
app.component('PieChartWidget', PieChartWidget);
app.component('TextWidget', TextWidget);
app.mount('#app');