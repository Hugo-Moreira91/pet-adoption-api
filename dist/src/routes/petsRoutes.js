"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../generated/prisma");
const validatePetType_1 = __importDefault(require("../middlewares/validatePetType"));
const validatePetSize_1 = __importDefault(require("../middlewares/validatePetSize"));
const validatePetAvailability_1 = __importDefault(require("../middlewares/validatePetAvailability"));
const checkPetId_1 = __importDefault(require("../middlewares/checkPetId"));
const validatePetUpdate_1 = __importDefault(require("../middlewares/validatePetUpdate"));
const petsRoutes = (0, express_1.Router)();
const prisma = new prisma_1.PrismaClient();
petsRoutes.get("/", validatePetType_1.default, validatePetSize_1.default, validatePetAvailability_1.default, async (req, res) => {
    const { type, size, available } = req.query;
    const filters = {};
    if (type) {
        filters.type = type.toString();
    }
    if (size) {
        filters.size = size.toString();
    }
    if (typeof available === "string") {
        if (available === "true") {
            filters.available = true;
        }
        else if (available === "false") {
            filters.available = false;
        }
    }
    try {
        const pets = await prisma.pet.findMany({
            where: filters,
        });
        res.json(pets);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (error) {
        return res.status(500).send({ message: "Internal server error" });
    }
});
petsRoutes.post("/", validatePetType_1.default, validatePetSize_1.default, validatePetAvailability_1.default, async (req, res) => {
    const { name, age, type, breed, size, description, available } = req.body;
    try {
        await prisma.pet.create({
            data: {
                name,
                age,
                type,
                breed,
                size,
                description,
                available: Boolean(available),
            },
        });
        res.status(201).send();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (error) {
        return res.status(500).send({ message: "Internal server error" });
    }
});
petsRoutes.get("/:id", checkPetId_1.default, async (req, res) => {
    const id = Number(req.params.id);
    try {
        const pet = await prisma.pet.findUnique({
            where: {
                id,
            },
        });
        res.json(pet);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (error) {
        return res.status(500).send({ message: "Internal server error" });
    }
});
petsRoutes.put("/:id", validatePetUpdate_1.default, async (req, res) => {
    const id = Number(req.params.id);
    try {
        const data = { ...req.body };
        if (data.available && typeof data.available === "string") {
            if (data.available === "true") {
                data.available = true;
            }
            else if (data.available === "false") {
                data.available = false;
            }
        }
        await prisma.pet.update({
            where: {
                id,
            },
            data,
        });
        res.status(200).send();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (error) {
        return res.status(500).send({ message: "Internal server error" });
    }
});
petsRoutes.delete("/:id", checkPetId_1.default, async (req, res) => {
    const id = Number(req.params.id);
    try {
        await prisma.pet.delete({
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
exports.default = petsRoutes;
