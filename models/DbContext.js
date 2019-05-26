"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class DbContext {
    constructor(db, options) {
        this.uri = ``;
        this.uri2 = '';
        options.reconnectTries = Number.MAX_VALUE;
        options.ssl = true;
        // this.uri = `mongodb://${db.user}:${db.password}@${db.host}:${db.port}/${db.database}`
        // this.uri = 'mongodb+srv://root:toor@cluster0-gaygx.mongodb.net/dbtest?retryWrites=true';
        const url = `mongodb://dbsuper:Ut0d6Yp?1S!c@den1.mongo1.gear.host:27001/dbsuper`;
        const MONGODB_URI0 = "mongodb://host-name:27017/db-name?authSource=admin";
        const MONGODB_URI = "mongodb://den1.mongo1.gear.host:27001/dbsuper";
        const MONGODB_USER = "dbsuper";
        const MONGODB_PASS = "Ut0d6Yp?1S!c";
        const authData = {
            "user": MONGODB_USER,
            "pass": MONGODB_PASS,
            "useNewUrlParser": true,
            "useCreateIndex": true
        };
        mongoose_1.default.connect(MONGODB_URI, authData, (err) => {
            if (!err) {
                console.log('MongoDB connection succeeded.');
            }
            else {
                console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2));
            }
        });
        // mongoose.connect(url, options)
        //     .then(r => console.log('Connected to MongoDB database'))
        //     .catch(e => {
        //         console.log('Connection error : >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
        //         console.log(e);
        //     }
        // );
    }
}
exports.DbContext = DbContext;
//# sourceMappingURL=DbContext.js.map