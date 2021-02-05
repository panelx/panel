import { WidgetDefinition } from "./server";
import Cache from './cache';
import { call } from "./scripts";
import Logger from "./logger";
import { getKey } from "./common";

export default class ScriptManager {
  widgets: WidgetDefinition[] = [];
  loops: NodeJS.Timeout[] = [];
  cache: Cache;

  constructor(cache: Cache, widgets: WidgetDefinition[]){
    this.widgets = widgets;
    this.cache = cache;
    this.createLoops();
    Logger.log(`ScriptManager spawned`);
  }

  private createLoops(): void {
    this.loops = this.widgets.map((widget, i) => setInterval(async () => {
      const key = getKey(i, widget);
      Logger.log(`Script ${key} loop execution`);

      const data = await call(widget.formula);
      
      this.writeData(key, data, widget.limit);
    }, widget.interval));
  }

  private writeData(key: string, data: string, limit?: number) {
    const entry = this.cache.get(key);
    const dateKeys = Object.keys(entry);
    if(limit && dateKeys.length > 0 && dateKeys.length >= limit){
      const oldestKey = dateKeys.sort((a, b) => (new Date(b).getTime() - new Date(a).getTime()))[0];
      delete entry[oldestKey];
    }
    entry[new Date().getTime()] = data;
    this.cache.set(key, entry);
  }
}