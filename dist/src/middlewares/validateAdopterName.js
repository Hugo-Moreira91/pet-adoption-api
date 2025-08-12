"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const capitalize_1 = require("../utils/capitalize");
function validateAdopterName(req, res, next) {
    const { name } = req.body;
    if (!name || typeof name != "string" || name.trim().length < 3) {
        return res.status(400).send({
            message: "Adopter name is required and must have at least 3 caracters long",
        });
    }
    req.body.name = (0, capitalize_1.capitalizeAll)(name.trim());
    next();
}
exports.default = validateAdopterName;
