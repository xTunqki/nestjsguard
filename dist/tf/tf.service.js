"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TfService = void 0;
const common_1 = require("@nestjs/common");
let TfService = class TfService {
    constructor() {
        this.depositData = [{
                account: "tungkitf",
                amount: 200,
                approved: false,
                broker: "TF"
            }];
    }
    getAll() {
        return this.depositData;
    }
};
TfService = __decorate([
    (0, common_1.Injectable)()
], TfService);
exports.TfService = TfService;
//# sourceMappingURL=tf.service.js.map