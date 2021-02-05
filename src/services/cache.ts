interface CacheScriptStruct {
  [date: string]: string
}

interface CacheStruct {
  [key: string]: CacheScriptStruct
}

export default class Cache {
  data: CacheStruct = {};

  getAll(): CacheStruct {
    return this.data;
  }

  get(key: string): CacheScriptStruct {
    if(this.data.hasOwnProperty(key)){
      return this.data[key];
    }
    return {};
  }

  set(key: string, data: CacheScriptStruct): void {
    this.data[key] = data;
  }
}