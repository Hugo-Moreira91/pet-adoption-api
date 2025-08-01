import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function checkAdoptionId(req: Request, res: Response, next: NextFunction) {
  const id = Number(req.params.id);

  const adopter = await prisma.adoption.findUnique({
    where: {
      id,
    },
  });

  if (!adopter) {
    return res.status(404).send({ message: "Adoption not found" });
  }

  next();
}

export default checkAdoptionId;
