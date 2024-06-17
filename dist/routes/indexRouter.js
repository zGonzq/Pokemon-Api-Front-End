"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controller/indexController");
const router = (0, express_1.Router)();
const controller = new indexController_1.indexController();
router.get('/', controller.index);
exports.default = router;
