"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const cats_module_1 = require("./cats/cats.module");
const core_module_1 = require("./core/core.module");
const mrg_controller_1 = require("./mrg/mrg.controller");
const tf_controller_1 = require("./tf/tf.controller");
const mrg_service_1 = require("./mrg/mrg.service");
const tf_service_1 = require("./tf/tf.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [core_module_1.CoreModule, cats_module_1.CatsModule],
        controllers: [mrg_controller_1.MrgController, tf_controller_1.TfController],
        providers: [mrg_service_1.MrgService, tf_service_1.TfService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map