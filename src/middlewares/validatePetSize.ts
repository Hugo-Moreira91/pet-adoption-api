import { NextFunction, Request, Response } from "express";
import { pet_size } from "../generated/prisma";

const validSizes: pet_size[] = ["small", "medium", "large"];

function validatePetSize(req: Request, res: Response, next: NextFunction) {
  const { size } = req.query;

  if (!size) return next();

  if (size && validSizes.includes(size.toString() as pet_size)) {
    return next();
  }

  return res
    .status(400)
    .send({ message: "Size is not valid. Try 'small', 'medium' or 'large'" });
}

export default validatePetSize;
