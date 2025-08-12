"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
async function validateAdopterEmail(req, res, next) {
    const { email } = req.body;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = typeof email === "string" && regexEmail.test(email);
    if (!email || !isEmailValid) {
        return res.status(400).send({ message: "E-mail not entered or is not valid" });
    }
    const normalizedEmail = email.toLowerCase();
    const existing = await prisma.adopter.findUnique({
        where: {
            email: normalizedEmail,
        },
    });
    if (existing) {
        return res.status(409).send({ message: "E-mail already registered" });
    }
    next();
}
exports.default = validateAdopterEmail;
