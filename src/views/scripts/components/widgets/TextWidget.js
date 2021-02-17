const TextWidget = {
  props: ['data'],
  template: `
      <p>{{ Object.entries(data)[0][1] }}</p>
  `
};

export default TextWidget;