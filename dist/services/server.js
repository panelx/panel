"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger_1 = require("./logger");
const widgets = [
    {
        type: "text",
        title: "Test",
        formula: "echo \"hello\"",
        interval: 1000
    }
];
class Server {
    constructor() {
        const app = express();
        const port = 3000;
        app.set('views', 'src/views');
        app.set('view engine', 'jsx');
        app.engine('jsx', require('express-react-views').createEngine());
        app.get('/', (req, res) => {
            res.render('index', { widgets });
        });
        app.listen(port, () => {
            logger_1.default.log(`Listening at http://localhost:${port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map