"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const indexRouter_1 = __importDefault(require("./routes/indexRouter"));
const optionsRoutes_1 = __importDefault(require("./routes/optionsRoutes"));
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../public')));
console.log(path.join(__dirname, '../public'));
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter_1.default);
app.use('/options', optionsRoutes_1.default);
const port = process.env.PORT || 3100;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
