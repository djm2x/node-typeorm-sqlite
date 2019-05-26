"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const bodyParser = require("body-parser");
const express = require("express");
const typeorm_1 = require("typeorm");
const Section_1 = require("./entity/Section");
// const config = require('./config.json');
const PORT = process.env.PORT || 4000;
const options = {
    type: 'sqlite',
    database: `${__dirname}/data/my.sqlite`,
    entities: [Section_1.Section],
    synchronize: true,
    logging: false
};
class App1 {
    constructor() {
        this.app = express();
        typeorm_1.createConnection(options).then(r => console.log('cnx db is ' + r.isConnected));
        this.jsonConfig();
        this.route();
    }
    async db() {
        const connection = await typeorm_1.createConnection(options);
    }
    route() {
        routing_controllers_1.useExpressServer(this.app, {
            // register created express server in routing-controllers
            // and configure it the way you need (controllers, validation, etc.)
            cors: true,
            middlewares: [],
            routePrefix: '/api',
            controllers: [
                `${__dirname}/controller/*.ts`,
                `${__dirname}/controller/*.js`,
            ],
            defaults: {
                // with this option, null will return 404 by default
                nullResultCode: 404,
                // with this option, void or Promise<void> will return 204 by default 
                undefinedResultCode: 204,
                paramOptions: {
                    // with this option, argument will be required by default
                    required: true
                }
            }
        });
    }
    jsonConfig() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    start() {
        this.app.listen(PORT, () => {
            console.log(`Server is running in http://localhost:${PORT}`);
        });
    }
}
new App1().start();
//# sourceMappingURL=index.js.map