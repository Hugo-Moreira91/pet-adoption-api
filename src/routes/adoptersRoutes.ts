import { Router } from "express";
import { PrismaClient } from "../generated/prisma";
import validateAdopterName from "../middlewares/validateAdopterName";
import validateAdopterEmail from "../middlewares/validateAdopterEmail";
import validateAdopterPhone from "../middlewares/validateAdopterPhone";
import checkAdopterId from "../middlewares/checkAdopterId";
import validateAdopterUpdate from "../middlewares/validateAdopterUpdate";

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

      res.status(201).send();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  }
);

adoptersRoutes.get("/:id", checkAdopterId, async (req, res) => {
  const id = Number(req.params.id);

  try {
    const adopter = await prisma.adopter.findUnique({
      where: {
        id,
      },
    });

    res.json(adopter);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
});

adoptersRoutes.put("/:id", checkAdopterId, validateAdopterUpdate, async (req, res) => {
  const id = Number(req.params.id);
  const data = { ...req.body };

  try {
    await prisma.adopter.update({
      where: {
        id,
      },
      data,
    });

    res.status(200).send();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
});

adoptersRoutes.delete("/:id", checkAdopterId, async (req, res) => {
  const id = Number(req.params.id);

  try {
    await prisma.adopter.delete({
      where: {
        id,
      },
    });

    res.status(200).send();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
});

export default adoptersRoutes;
