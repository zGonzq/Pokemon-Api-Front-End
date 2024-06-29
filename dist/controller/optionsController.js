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
            try {
                const id = req.params.id;
                const response = yield axios_1.default.get(`${config_1.API_URL}/api/pokemon/find/${id}`);
                let data = response.data;
                if (!Array.isArray(data)) {
                    data = [data];
                }
                res.render('Actions/view', { data });
            }
            catch (error) {
                res.redirect('/');
            }
        });
    }
    edit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const response = yield axios_1.default.get(`${config_1.API_URL}/api/pokemon/find/${id}`);
                let data = response.data;
                if (!Array.isArray(data)) {
                    data = [data];
                }
                res.render('Actions/edit', { data });
            }
            catch (error) {
                res.redirect('/');
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const response = yield axios_1.default.get(`${config_1.API_URL}/api/pokemon/find/${id}`);
                let data = response.data;
                if (!Array.isArray(data)) {
                    data = [data];
                }
                res.render('Actions/delete', { data });
            }
            catch (error) {
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.render('Actions/Create');
        });
    }
    editPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const updatePokemon = Object.assign(Object.assign({}, req.body), { id });
                const response = yield axios_1.default.put(`${config_1.API_URL}/api/pokemon/update/${id}`, updatePokemon);
                res.redirect('/');
            }
            catch (error) {
                res.redirect('/');
            }
        });
    }
    deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield axios_1.default.delete(`${config_1.API_URL}/api/pokemon/delete/${id}`);
                res.redirect('/');
            }
            catch (error) {
                res.redirect('/');
            }
        });
    }
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { IDpoke, pokename, HP, attack, defense, spattack, spdefense, speed, dualtype } = req.body;
                yield axios_1.default.post(`${config_1.API_URL}/api/pokemon/add`, { IDpoke, pokename, HP, attack, defense, spattack, spdefense, speed, dualtype });
                res.redirect('/');
            }
            catch (error) {
                res.redirect('/');
            }
        });
    }
}
exports.optionsController = optionsController;
