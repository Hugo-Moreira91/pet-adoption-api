"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateAdopterName_1 = __importDefault(require("./validateAdopterName"));
const validateAdopterEmail_1 = __importDefault(require("./validateAdopterEmail"));
const validateAdopterPhone_1 = __importDefault(require("./validateAdopterPhone"));
async function validateAdopterUpdate(req, res, next) {
    const { name, email, phone } = req.body;
    try {
        if (name !== undefined)
            await (0, validateAdopterName_1.default)(req, res, () => { });
        if (email !== undefined)
            await (0, validateAdopterEmail_1.default)(req, res, () => { });
        if (phone !== undefined)
            await (0, validateAdopterPhone_1.default)(req, res, () => { });
        next();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (error) {
        if (!res.headersSent) {
            res.status(400).send({ message: "Invalid data for update" });
        }
    }
}
exports.default = validateAdopterUpdate;
