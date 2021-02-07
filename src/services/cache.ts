import { WidgetDefinition } from "./server";

interface CacheScriptStruct {
  ver: number,
  data: {[date: string]: string},
  widget: WidgetDefinition
}

interface CacheStruct {
  [key: string]: CacheScriptStruct
}

export default class Cache {
  data: CacheStruct = {};

  getAll(): CacheStruct {
    return this.data;
  }

  get(key: string): CacheScriptStruct | undefined {
    return this.data.hasOwnProperty(key) ? this.data[key] : undefined;
  }

  set(key: string, data: CacheScriptStruct): void {
    this.data[key] = data;
  }
}