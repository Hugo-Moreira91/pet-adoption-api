import { Router } from "express";
import { PrismaClient } from "../generated/prisma";

const adoptersRoutes = Router();
const prisma = new PrismaClient();

adoptersRoutes.get("/", async (_, res) => {
  try {
    const adopters = await prisma.adopter.findMany({
      orderBy: {
        name: "asc",
      },
    });

    res.json(adopters);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
});

export default adoptersRoutes;
