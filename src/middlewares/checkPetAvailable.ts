import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function checkPetAvailable(req: Request, res: Response, next: NextFunction) {
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
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
}

export default checkPetAvailable;
