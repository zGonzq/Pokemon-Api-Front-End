"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionsController = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
class optionsController {
    view(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const response = yield axios_1.default.get(`${config_1.API_URL}/api/pokemon/find/${id}`);
            let data = response.data;
            if (!Array.isArray(data)) {
                data = [data];
            }
            res.render('Options/view', { data });
        });
    }
    edit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.render('Options/Edit');
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield axios_1.default.delete(`${config_1.API_URL}/api/pokemon/delete/${id}`);
            res.redirect('/');
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.render('Options/Create');
        });
    }
}
exports.optionsController = optionsController;