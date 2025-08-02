import { NextFunction, Request, Response } from "express";

async function checkAdoptionDate(req: Request, res: Response, next: NextFunction) {
  const { adoption_date } = req.body;

  try {
    if (!adoption_date) {
      return res.status(400).send({ message: "Adoption date is required" });
    }

    next();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
}

export default checkAdoptionDate;
