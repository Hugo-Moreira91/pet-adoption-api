"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validTypes = ["dog", "cat", "other"];
function validatePetType(req, res, next) {
    const { type } = req.query;
    if (!type)
        return next();
    if (type && validTypes.includes(type.toString())) {
        return next();
    }
    return res
        .status(400)
        .send({ message: "Type is not valid. Try 'dog', 'cat' or 'other'" });
}
exports.default = validatePetType;
