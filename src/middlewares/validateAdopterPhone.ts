import { NextFunction, Request, Response } from "express";

function validateAdopterPhone(req: Request, res: Response, next: NextFunction) {
  const { phone } = req.body;

  const regexPhone = /^\d{11}$/;

  const isValidPhone = typeof phone === "string" && regexPhone.test(phone);

  if (!phone || !isValidPhone) {
    return res.status(400).send({
      message:
        "Phone is required; Must be a string with 11 digits and contain only numbers",
    });
  }

  next();
}

export default validateAdopterPhone;
