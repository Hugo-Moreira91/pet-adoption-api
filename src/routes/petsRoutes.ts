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

export default petsRoutes;
