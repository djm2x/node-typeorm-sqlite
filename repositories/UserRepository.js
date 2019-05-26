"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Models_1 = require("../models/Models");
const typedi_1 = require("typedi");
const SimpleRepository_1 = require("./SimpleRepository");
let UserRepository = class UserRepository extends SimpleRepository_1.SimpleRepository // implements IRepository<T>
 {
    constructor() {
        super("User", Models_1.UserSchema);
    }
};
UserRepository = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__metadata("design:paramtypes", [])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map