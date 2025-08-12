"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../generated/prisma");
const checkAdoptionId_1 = __importDefault(require("../middlewares/checkAdoptionId"));
const checkPetAvailable_1 = __importDefault(require("../middlewares/checkPetAvailable"));
const checkAdopterId_1 = __importDefault(require("../middlewares/checkAdopterId"));
const checkAdoptionDate_1 = __importDefault(require("../middlewares/checkAdoptionDate"));
const adoptionsRoutes = (0, express_1.Router)();
const prisma = new prisma_1.PrismaClient();
adoptionsRoutes.get("/", async (_, res) => {
    try {
        const adoptions = await prisma.adoption.findMany({
            include: {
                pet: true,
                adopter: true,
            },
        });
        res.json(adoptions);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (error) {
        return res.status(500).send({ message: "Internal server error" });
    }
});
adoptionsRoutes.post("/", checkPetAvailable_1.default, checkAdopterId_1.default, checkAdoptionDate_1.default, async (req, res) => {
    const { pet_id, adopter_id, adoption_date } = req.body;
    try {
        const adoptionDateNormalized = new Date(adoption_date);
        await prisma.$transaction([
            prisma.adoption.create({
                data: {
                    pet_id,
                    adopter_id,
                    adoption_date: adoptionDateNormalized,
                },
            }),
            prisma.pet.update({
                where: {
                    id: pet_id,
                },
                data: {
                    available: false,
                },
            }),
        ]);
        res.status(201).send();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (error) {
        return res.status(500).send({ message: "Internal server error" });
    }
});
adoptionsRoutes.get("/:id", checkAdoptionId_1.default, async (req, res) => {
    const id = Number(req.params.id);
    try {
        const adoption = await prisma.adoption.findUnique({
            where: {
                id,
            },
            include: {
                pet: true,
                adopter: true,
            },
        });
        res.json(adoption);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (error) {
        return res.status(500).send({ message: "Internal server error" });
    }
});
adoptionsRoutes.delete("/:id", checkAdoptionId_1.default, async (req, res) => {
    const id = Number(req.params.id);
    try {
        await prisma.adoption.delete({
            where: {
                id,
            },
        });
        res.status(200).send();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (error) {
        return res.status(500).send({ message: "Internal server error" });
    }
});
exports.default = adoptionsRoutes;
