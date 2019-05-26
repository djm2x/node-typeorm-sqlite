"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Section = class Section {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Section.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column('text'),
    tslib_1.__metadata("design:type", String)
], Section.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column('text'),
    tslib_1.__metadata("design:type", String)
], Section.prototype, "discription", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    typeorm_1.CreateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], Section.prototype, "createdAt", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    typeorm_1.UpdateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], Section.prototype, "updatedAt", void 0);
Section = tslib_1.__decorate([
    typeorm_1.Entity()
], Section);
exports.Section = Section;
//# sourceMappingURL=Section.js.map