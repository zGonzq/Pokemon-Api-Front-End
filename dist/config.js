"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_URL = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.API_URL = process.env.API_URL || '';
