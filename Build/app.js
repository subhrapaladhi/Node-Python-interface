"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.json());
const compute_js_1 = require("./Services/compute.js");
/*
@ Data received example: { data: [1,2,3,4] }
*/
app.post('/', compute_js_1.compute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running at port ${PORT}`));
