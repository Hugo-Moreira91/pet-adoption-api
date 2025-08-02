import { Router } from "express";
import { PrismaClient } from "../generated/prisma";
import checkAdoptionId from "../middlewares/checkAdoptionId";
import checkPetAvailable from "../middlewares/checkPetAvailable";
import checkAdopterId from "../middlewares/checkAdopterId";
import checkAdoptionDate from "../middlewares/checkAdoptionDate";

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

adoptionsRoutes.post(
  "/",
  checkPetAvailable,
  checkAdopterId,
  checkAdoptionDate,
  async (req, res) => {
    const { pet_id, adopter_id, adoption_date } = req.body;

    try {
      const adoptionDateNormalized = new Date(adoption_date);
      await prisma.$transaction([
        prisma.adoption.create({
          data: {
            pet_id,
            adopter_id,
            adoption_date: adoptionDateNormalized,
          },
        }),
        prisma.pet.update({
          where: {
            id: pet_id,
          },
          data: {
            available: false,
          },
        }),
      ]);

      res.status(201).send();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  }
);

adoptionsRoutes.get("/:id", checkAdoptionId, async (req, res) => {
  const id = Number(req.params.id);

  try {
    const adoption = await prisma.adoption.findUnique({
      where: {
        id,
      },
      include: {
        pet: true,
        adopter: true,
      },
    });

    res.json(adoption);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
});

adoptionsRoutes.delete("/:id", checkAdoptionId, async (req, res) => {
  const id = Number(req.params.id);

  try {
    await prisma.adoption.delete({
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

export default adoptionsRoutes;
