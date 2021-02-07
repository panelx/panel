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
    this.initWidgets();
    this.createLoops();
    Logger.log(`ScriptManager spawned`);
  }

  private removeOldCache(): void {
    const cachedWidgets = Object.values(this.cache.getAll());

    cachedWidgets.forEach((widgetCache, j) => {
      const widget = this.widgets.find((widget, i) => getKey(i, widget) === getKey(j, widgetCache.widget));
      if(!widget){
        this.cache.set(getKey(j, widgetCache.widget), undefined);
      }
    });
  }

  private initWidgets(): void {
    this.removeOldCache();

    this.widgets.forEach((widget, i) => {
      const key = getKey(i, widget);
      const cached = this.cache.get(key);
      if(!cached){
        this.cache.set(key, {
          ver: 1,
          data: {},
          widget
        });
      }else{
        this.cache.set(key, {
          ...cached,
          widget
        });
      }
    });
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
    const dateKeys = Object.keys(entry.data ?? {});
    if(limit && dateKeys.length > 0 && dateKeys.length >= limit){
      const oldestKey = dateKeys.sort((a, b) => (new Date(b).getTime() - new Date(a).getTime()))[0];
      delete entry.data[oldestKey];
    }
    this.cache.set(key, {
      ...entry,
      data: {
        ...entry.data,
        [new Date().getTime()]: data
      }
    });
  }
}