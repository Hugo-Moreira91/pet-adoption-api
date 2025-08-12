"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validatePetAvailability(req, res, next) {
    const { available } = req.query;
    if (!available)
        next();
    if (available === "true" || available === "false") {
        return next();
    }
    return res
        .status(400)
        .send({ message: "Invalid availability value. Use 'true' or 'false'" });
}
exports.default = validatePetAvailability;
