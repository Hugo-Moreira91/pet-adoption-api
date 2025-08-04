import { Router } from "express";
import { pet_size, pet_type, PrismaClient } from "../generated/prisma";
import validatePetType from "../middlewares/validatePetType";
import validatePetSize from "../middlewares/validatePetSize";
import validatePetAvailability from "../middlewares/validatePetAvailability";
import checkPetId from "../middlewares/checkPetId";
import validatePetUpdate from "../middlewares/validatePetUpdate";

const petsRoutes = Router();
const prisma = new PrismaClient();

petsRoutes.get(
  "/",
  validatePetType,
  validatePetSize,
  validatePetAvailability,
  async (req, res) => {
    const { type, size, available } = req.query;
    const filters: { type?: pet_type; size?: pet_size; available?: boolean } = {};

    if (type) {
      filters.type = type.toString() as pet_type;
    }

    if (size) {
      filters.size = size.toString() as pet_size;
    }

    if (typeof available === "string") {
      if (available === "true") {
        filters.available = true;
      } else if (available === "false") {
        filters.available = false;
      }
    }

    try {
      const pets = await prisma.pet.findMany({
        where: filters,
      });

      res.json(pets);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  }
);

petsRoutes.post(
  "/",
  validatePetType,
  validatePetSize,
  validatePetAvailability,
  async (req, res) => {
    const { name, age, type, breed, size, description, available } = req.body;

    try {
      await prisma.pet.create({
        data: {
          name,
          age,
          type,
          breed,
          size,
          description,
          available: Boolean(available),
        },
      });

      res.status(201).send();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  }
);

petsRoutes.get("/:id", checkPetId, async (req, res) => {
  const id = Number(req.params.id);

  try {
    const pet = await prisma.pet.findUnique({
      where: {
        id,
      },
    });

    res.json(pet);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
});

petsRoutes.put("/:id", validatePetUpdate, async (req, res) => {
  const id = Number(req.params.id);

  try {
    const data = { ...req.body };

    if (data.available && typeof data.available === "string") {
      if (data.available === "true") {
        data.available = true;
      } else if (data.available === "false") {
        data.available = false;
      }
    }

    await prisma.pet.update({
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

petsRoutes.delete("/:id", checkPetId, async (req, res) => {
  const id = Number(req.params.id);

  try {
    await prisma.pet.delete({
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

export default petsRoutes;
