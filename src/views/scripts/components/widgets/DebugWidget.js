const DebugWidget = {
  props: ['data'],
  template: `
    <div>
      <p v-for="entry in Object.entries(data)">{{entry[0]}}: {{entry[1]}}</p>
    </div>
  `
};

export default DebugWidget;