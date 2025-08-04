import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function checkPetId(req: Request, res: Response, next: NextFunction) {
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

export default checkPetId;
