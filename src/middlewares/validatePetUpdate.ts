import { NextFunction, Request, Response } from "express";
import validatePetType from "./validatePetType";
import validatePetSize from "./validatePetSize";
import validatePetAvailability from "./validatePetAvailability";

function validatePetUpdate(req: Request, res: Response, next: NextFunction) {
  const { type, size, available } = req.body;

  try {
    if (type !== undefined) validatePetType(req, res, () => {});
    if (size !== undefined) validatePetSize(req, res, () => {});
    if (available !== undefined) validatePetAvailability(req, res, () => {});

    next();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    if (!res.headersSent) {
      res.status(400).send({ message: "Invalid data for update" });
    }
  }
}

export default validatePetUpdate;
