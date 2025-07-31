import { NextFunction, Request, Response } from "express";
import { capitalizeAll } from "../utils/capitalize";

function validateAdopterName(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;

  if (!name || typeof name != "string" || name.trim().length < 3) {
    return res.status(400).send({
      message: "Adopter name is required and must have at least 3 caracters long",
    });
  }

  req.body.name = capitalizeAll(name.trim());

  next();
}

export default validateAdopterName;
