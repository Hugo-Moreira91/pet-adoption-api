import { Router } from "express";
import { PrismaClient } from "../generated/prisma";

const petsRoutes = Router();
const prisma = new PrismaClient();

petsRoutes.get("/", async (_, res) => {
  try {
    const pets = await prisma.pet.findMany();

    if (!pets) {
      return res.status(404).send({ message: "List of pets not found" });
    }

    res.json(pets);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
});

export default petsRoutes;
