"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const TypeOrmRepository_1 = require("./TypeOrmRepository");
const Section_1 = require("../entity/Section");
let SectionRepository = class SectionRepository extends TypeOrmRepository_1.TypeOrmRepository // implements IRepository<T>
 {
    constructor() {
        super(Section_1.Section);
    }
};
SectionRepository = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__metadata("design:paramtypes", [])
], SectionRepository);
exports.SectionRepository = SectionRepository;
//# sourceMappingURL=SectionRepository.js.map