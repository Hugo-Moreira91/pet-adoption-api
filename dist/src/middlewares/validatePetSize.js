"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validSizes = ["small", "medium", "large"];
function validatePetSize(req, res, next) {
    const { size } = req.query;
    if (!size)
        return next();
    if (size && validSizes.includes(size.toString())) {
        return next();
    }
    return res
        .status(400)
        .send({ message: "Size is not valid. Try 'small', 'medium' or 'large'" });
}
exports.default = validatePetSize;
