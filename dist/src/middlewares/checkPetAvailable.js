"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
async function checkPetAvailable(req, res, next) {
    const { pet_id } = req.body;
    try {
        const isPetAvailable = await prisma.pet.findUnique({
            where: {
                id: pet_id,
                available: true,
            },
        });
        if (!isPetAvailable) {
            return res.status(409).send({ message: "Pet is not available for adoption" });
        }
        next();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (error) {
        return res.status(500).send({ message: "Internal server error" });
    }
}
exports.default = checkPetAvailable;
