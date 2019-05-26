"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class SimpleRepository {
    constructor(className, schema) {
        this.model = mongoose_1.model(className, schema);
    }
    post(user) {
        return new this.model(user).save();
    }
    find(conditions, projection, options) {
        return this.model.find(conditions, projection, options);
    }
    getAll() {
        return this.model.find({});
    }
    findById(id) {
        return this.model.findById(mongoose_1.Types.ObjectId(`${id}`));
    }
    put(id, model) {
        console.log(id);
        return this.model.findByIdAndUpdate(mongoose_1.Types.ObjectId(`${id}`), model, { new: true });
    }
    delete(id) {
        return this.model.findByIdAndDelete(mongoose_1.Types.ObjectId(`${id}`));
    }
}
exports.SimpleRepository = SimpleRepository;
//# sourceMappingURL=SimpleRepository.js.map