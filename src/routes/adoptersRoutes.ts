import { Router } from "express";
import { PrismaClient } from "../generated/prisma";
import validateAdopterName from "../middlewares/validateAdopterName";
import validateAdopterEmail from "../middlewares/validateAdopterEmail";
import validateAdopterPhone from "../middlewares/validateAdopterPhone";

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

adoptersRoutes.post(
  "/",
  validateAdopterName,
  validateAdopterEmail,
  validateAdopterPhone,
  async (req, res) => {
    const { name, email, phone } = req.body;

    try {
      await prisma.adopter.create({
        data: {
          name,
          email,
          phone,
        },
      });

      res.status(200).send();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  }
);

export default adoptersRoutes;
