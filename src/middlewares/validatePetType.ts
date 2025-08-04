import { NextFunction, Request, Response } from "express";
import { pet_type } from "../generated/prisma";

const validTypes: pet_type[] = ["dog", "cat", "other"];

function validatePetType(req: Request, res: Response, next: NextFunction) {
  const { type } = req.query;

  if (!type) return next();

  if (type && validTypes.includes(type.toString() as pet_type)) {
    return next();
  }

  return res
    .status(400)
    .send({ message: "Type is not valid. Try 'dog', 'cat' or 'other'" });
}

export default validatePetType;
