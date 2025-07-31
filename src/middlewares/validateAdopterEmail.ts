import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function validateAdopterEmail(req: Request, res: Response, next: NextFunction) {
  const { email } = req.body;

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isEmailValid = typeof email === "string" && regexEmail.test(email);

  if (!email || !isEmailValid) {
    return res.status(400).send({ message: "E-mail is required; E-mail is not valid" });
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

export default validateAdopterEmail;
