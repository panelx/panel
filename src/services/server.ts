import * as express from 'express';
import Logger from './logger';

interface WidgetDefinition {
  type: string,
  title: string,
  formula: string,
  interval: number
}

const widgets: WidgetDefinition[] = [
  {
    type: "text",
    title: "Test",
    formula: "echo \"hello\"",
    interval: 1000
  }
];

export default class Server {
  constructor() {
    const app = express();
    const port = 3000;

    app.set('views', 'src/views');
    app.set('view engine', 'jsx');
    app.engine('jsx', require('express-react-views').createEngine());

    app.get('/', (req, res) => {
      res.render('index', {widgets});
    })

    app.listen(port, () => {
      Logger.log(`Listening at http://localhost:${port}`);
    });
  }
}