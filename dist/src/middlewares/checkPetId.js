"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
async function checkPetId(req, res, next) {
    const id = Number(req.params.id) || Number(req.params.pet_id);
    const isPetExist = await prisma.pet.findUnique({
        where: {
            id,
        },
    });
    if (!isPetExist) {
        return res.status(404).send({ message: "Pet not found" });
    }
    next();
}
exports.default = checkPetId;
