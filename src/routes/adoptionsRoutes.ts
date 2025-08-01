import { Router } from "express";
import { PrismaClient } from "../generated/prisma";

const adoptionsRoutes = Router();
const prisma = new PrismaClient();

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
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
});

export default adoptionsRoutes;
