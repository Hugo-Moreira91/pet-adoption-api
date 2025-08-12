"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../generated/prisma");
const validateAdopterName_1 = __importDefault(require("../middlewares/validateAdopterName"));
const validateAdopterEmail_1 = __importDefault(require("../middlewares/validateAdopterEmail"));
const validateAdopterPhone_1 = __importDefault(require("../middlewares/validateAdopterPhone"));
const checkAdopterId_1 = __importDefault(require("../middlewares/checkAdopterId"));
const validateAdopterUpdate_1 = __importDefault(require("../middlewares/validateAdopterUpdate"));
const adoptersRoutes = (0, express_1.Router)();
const prisma = new prisma_1.PrismaClient();
adoptersRoutes.get("/", async (_, res) => {
    try {
        const adopters = await prisma.adopter.findMany({
            orderBy: {
                name: "asc",
            },
        });
        res.json(adopters);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (error) {
        return res.status(500).send({ message: "Internal server error" });
    }
});
adoptersRoutes.post("/", validateAdopterName_1.default, validateAdopterEmail_1.default, validateAdopterPhone_1.default, async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        await prisma.adopter.create({
            data: {
                name,
                email,
                phone,
            },
        });
        res.status(201).send();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (error) {
        return res.status(500).send({ message: "Internal server error" });
    }
});
adoptersRoutes.get("/:id", checkAdopterId_1.default, async (req, res) => {
    const id = Number(req.params.id);
    try {
        const adopter = await prisma.adopter.findUnique({
            where: {
                id,
            },
        });
        res.json(adopter);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (error) {
        return res.status(500).send({ message: "Internal server error" });
    }
});
adoptersRoutes.put("/:id", checkAdopterId_1.default, validateAdopterUpdate_1.default, async (req, res) => {
    const id = Number(req.params.id);
    const data = { ...req.body };
    try {
        await prisma.adopter.update({
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
adoptersRoutes.delete("/:id", checkAdopterId_1.default, async (req, res) => {
    const id = Number(req.params.id);
    try {
        await prisma.adopter.delete({
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
exports.default = adoptersRoutes;
