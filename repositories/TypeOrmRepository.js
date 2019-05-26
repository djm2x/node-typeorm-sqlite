"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class TypeOrmRepository {
    constructor(entityClass) {
        this.context = typeorm_1.getRepository(entityClass);
    }
    post(model) {
        return this.context.insert(this.context.create(model));
    }
    find(options) {
        return this.context.find(options);
    }
    getAll() {
        return this.context.find({});
    }
    findById(id) {
        return this.context.findOneOrFail(id);
    }
    async put(id, model) {
        const old = await this.context.findOneOrFail(id);
        return this.context.update(id, Object.assign(old, model));
    }
    delete(id) {
        return this.context.delete(id);
    }
}
exports.TypeOrmRepository = TypeOrmRepository;
//# sourceMappingURL=TypeOrmRepository.js.map