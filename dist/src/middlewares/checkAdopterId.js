"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
async function checkAdopterId(req, res, next) {
    const id = Number(req.params.id) || Number(req.body.adopter_id);
    const isAdopterExist = await prisma.adopter.findUnique({
        where: {
            id,
        },
    });
    if (!isAdopterExist) {
        return res.status(404).send({ message: "Adopter not found" });
    }
    next();
}
exports.default = checkAdopterId;
