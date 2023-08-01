"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.get('/movies', (req, res) => {
    return res.status(200).json({ message: 'Oi Braddock!!. Tá no Ar, jajá eu vou dar continuidade aqui kkk' });
});
app.post('/movies', (req, res) => {
    return res.status(201).json({ message: 'Movie created successfully!' });
});
