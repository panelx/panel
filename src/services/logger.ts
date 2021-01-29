export default class Logger {
  public static log (msg: string, level: "info" | "error" = "info"): void {
    const date = (new Date()).toISOString();
    switch(level){
      case "info":
        console.log(`INFO: ${date} - ${msg}`);
        break;
      default:
        console.error(`ERROR: ${date} - ${msg}`);
    }
  }
}