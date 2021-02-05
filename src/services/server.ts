import * as express from 'express';
import Logger from './logger';
import Cache from './cache';
import ScriptManager from './scriptManager';
import { getKey } from './common';

export interface WidgetDefinition {
  key?: string,
  type: string,
  title: string,
  formula: string,
  interval: number,
  limit?: number
}

const widgets: WidgetDefinition[] = [
  {
    type: "text",
    title: "Test",
    formula: "echo \"hello\"",
    interval: 1000,
    limit: 10
  }
].map((w, i) => ({...w, key: getKey(i, w)}));

export default class Server {
  constructor() {
    const cache = new Cache();
    const scriptManager = new ScriptManager(cache, widgets);

    const app = express();
    const port = 3000;

    app.set('views', 'src/views');
    app.set('view engine', 'jsx');
    app.engine('jsx', require('express-react-views').createEngine());

    app.get('/', (req, res) => {
      res.render('index', {widgets});
    });

    app.get('/cache', (req, res) => {
      Logger.log('GET /cache called');
      const data = cache.getAll();
      res.send(JSON.stringify(data));
    });

    app.listen(port, () => {
      Logger.log(`Listening at http://localhost:${port}`);
    });
  }
}