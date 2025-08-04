import { NextFunction, Request, Response } from "express";

function validatePetAvailability(req: Request, res: Response, next: NextFunction) {
  const { available } = req.query;

  if (!available) next();

  if (available === "true" || available === "false") {
    return next();
  }

  return res
    .status(400)
    .send({ message: "Invalid availability value. Use 'true' or 'false'" });
}

export default validatePetAvailability;
