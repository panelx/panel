import * as express from 'express';
import Logger from './logger';
import Cache from './cache';
import ScriptManager from './scriptManager';
import { getKey } from './common';
import * as path from 'path';
import config from '../config';

export interface WidgetDefinition {
  key?: string,
  type: string,
  title: string,
  formula: string,
  interval?: number,
  limit?: number
}

const widgets: WidgetDefinition[] = config.widgets.map((w, i) => ({...w, key: getKey(i, w)}));

export default class Server {
  constructor() {
    const cache = new Cache();
    const scriptManager = new ScriptManager(cache, widgets);

    const app = express();
    const port = 3000;

    app.use('/scripts', express.static(__dirname + '/../../node_modules/vue/dist'));
    app.use('/components', express.static(__dirname + '/../views/scripts'));
    app.use('/assets', express.static(__dirname + '/../views/assets'));

    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname + '/../views/index.html'));
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