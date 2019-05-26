"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const UserRepository_1 = require("../repositories/UserRepository");
const typedi_1 = require("typedi");
let UserController = class UserController {
    constructor() {
        this.service = typedi_1.Container.get(UserRepository_1.UserRepository);
    }
    getValues(response) {
        return [{ val: 'me' }, { val: 'you' }];
    }
    async getAll(response) {
        console.log('getAll');
        return response.send(await this.service.getAll());
    }
    async post(model, response) {
        try {
            return response.send(await this.service.post(model));
        }
        catch (error) {
            return response.json(error);
        }
    }
    async getOne(id, response) {
        console.log('getOne');
        try {
            return response.json(await this.service.findById(id));
        }
        catch (error) {
            return response.json(error);
        }
    }
    async put(id, model, response) {
        // console.log(id);
        try {
            return response.json(await this.service.put(id, model));
        }
        catch (error) {
            return response.json(error);
        }
    }
    async remove(id, response) {
        try {
            return response.json(await this.service.delete(id));
        }
        catch (error) {
            return response.json(error);
        }
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get("/get/values"),
    tslib_1.__param(0, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "getValues", null);
tslib_1.__decorate([
    routing_controllers_1.Get(),
    tslib_1.__param(0, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
tslib_1.__decorate([
    routing_controllers_1.Post(),
    tslib_1.__param(0, routing_controllers_1.Body()), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "post", null);
tslib_1.__decorate([
    routing_controllers_1.Get("/:id"),
    tslib_1.__param(0, routing_controllers_1.Param("id")), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "getOne", null);
tslib_1.__decorate([
    routing_controllers_1.Put("/:id"),
    tslib_1.__param(0, routing_controllers_1.Param("id")), tslib_1.__param(1, routing_controllers_1.Body()), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "put", null);
tslib_1.__decorate([
    routing_controllers_1.Delete("/:id"),
    tslib_1.__param(0, routing_controllers_1.Param("id")), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
UserController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/users'),
    tslib_1.__metadata("design:paramtypes", [])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=User2Controller.js.map