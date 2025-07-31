import { Router } from "express";
import { pet_size, pet_type, PrismaClient } from "../generated/prisma";

const petsRoutes = Router();
const prisma = new PrismaClient();

const validTypes: pet_type[] = ["dog", "cat", "other"];
const validSizes: pet_size[] = ["small", "medium", "large"];

petsRoutes.get("/", async (req, res) => {
  const { type, size, available } = req.query;
  const filters: { type?: pet_type; size?: pet_size; available?: boolean } = {};

  if (type && validTypes.includes(type.toString() as pet_type)) {
    filters.type = type.toString() as pet_type;
  }

  if (size && validSizes.includes(size.toString() as pet_size)) {
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
});

petsRoutes.post("/", async (req, res) => {
  const { name, age, type, breed, size, description, available } = req.body;

  if (!validTypes.includes(type.toString())) {
    return res.status(400).send({ message: "Invalid type. Try 'dog', 'cat' or 'other'" });
  }

  if (!validSizes.includes(size.toString())) {
    return res
      .status(400)
      .send({ message: "Invalid size. Try 'small', 'medium' or 'large'" });
  }

  if (typeof available === "string") {
    return res.status(400).send({ message: "Invalid type data" });
  }

  try {
    await prisma.pet.create({
      data: {
        name,
        age,
        type,
        breed,
        size,
        description,
        available,
      },
    });

    res.status(201).send();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
});

petsRoutes.get("/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const pet = await prisma.pet.findUnique({
      where: {
        id,
      },
    });

    if (!pet) {
      return res.status(404).send({ message: "Pet not found" });
    }

    res.json(pet);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
});

export default petsRoutes;
