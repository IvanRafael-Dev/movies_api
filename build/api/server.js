"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
const API_PORT = process.env.API_PORT || 3000;
api_1.app.listen(API_PORT, () => console.log(`Server running on port: ${API_PORT}`));
