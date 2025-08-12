"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
async function checkAdoptionId(req, res, next) {
    const id = Number(req.params.id);
    const isAdoptionExist = await prisma.adoption.findUnique({
        where: {
            id,
        },
    });
    if (!isAdoptionExist) {
        return res.status(404).send({ message: "Adoption not found" });
    }
    next();
}
exports.default = checkAdoptionId;
