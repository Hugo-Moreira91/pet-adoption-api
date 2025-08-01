import { NextFunction, Request, Response } from "express";
import validateAdopterName from "./validateAdopterName";
import validateAdopterEmail from "./validateAdopterEmail";
import validateAdopterPhone from "./validateAdopterPhone";

async function validateAdopterUpdate(req: Request, res: Response, next: NextFunction) {
  const { name, email, phone } = req.body;

  try {
    if (name !== undefined) await validateAdopterName(req, res, () => {});
    if (email !== undefined) await validateAdopterEmail(req, res, () => {});
    if (phone !== undefined) await validateAdopterPhone(req, res, () => {});

    next();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    if (!res.headersSent) {
      res.status(400).send({ message: "Invalid data for update" });
    }
  }
}

export default validateAdopterUpdate;
