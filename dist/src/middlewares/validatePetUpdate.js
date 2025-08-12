"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validatePetType_1 = __importDefault(require("./validatePetType"));
const validatePetSize_1 = __importDefault(require("./validatePetSize"));
const validatePetAvailability_1 = __importDefault(require("./validatePetAvailability"));
function validatePetUpdate(req, res, next) {
    const { type, size, available } = req.body;
    try {
        if (type !== undefined)
            (0, validatePetType_1.default)(req, res, () => { });
        if (size !== undefined)
            (0, validatePetSize_1.default)(req, res, () => { });
        if (available !== undefined)
            (0, validatePetAvailability_1.default)(req, res, () => { });
        next();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (error) {
        if (!res.headersSent) {
            res.status(400).send({ message: "Invalid data for update" });
        }
    }
}
exports.default = validatePetUpdate;
