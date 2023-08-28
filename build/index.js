"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const ProductoRoutes_1 = __importDefault(require("./routes/ProductoRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use('/', UserRoutes_1.default);
app.use('/producto', ProductoRoutes_1.default);
app.listen(port, () => {
    console.log(`corriendo en el puerto ${port}`);
});
