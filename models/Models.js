"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
});
// export interface IUser extends Document {
//     _id: string;
//     name: string;
// }
//# sourceMappingURL=Models.js.map