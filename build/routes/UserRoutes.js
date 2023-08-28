"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send('Listado de usuarios');
});
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Detalles del usuario con ID ${userId}`);
});
exports.default = router;
