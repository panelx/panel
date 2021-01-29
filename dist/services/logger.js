"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    static log(msg, level = "info") {
        const date = (new Date()).toISOString();
        switch (level) {
            case "info":
                console.log(`INFO: ${date} - ${msg}`);
                break;
            default:
                console.error(`ERROR: ${date} - ${msg}`);
        }
    }
}
exports.default = Logger;
//# sourceMappingURL=logger.js.map