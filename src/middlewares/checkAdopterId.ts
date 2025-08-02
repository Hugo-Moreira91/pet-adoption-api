import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function checkAdopterId(req: Request, res: Response, next: NextFunction) {
  const id = Number(req.params.id) || Number(req.body.adopter_id);

  const adopter = await prisma.adopter.findUnique({
    where: {
      id,
    },
  });

  if (!adopter) {
    return res.status(404).send({ message: "Adopter not found" });
  }

  next();
}

export default checkAdopterId;
