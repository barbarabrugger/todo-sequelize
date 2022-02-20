import { validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";

export const handleValidationError = function (req: Request, res: Response, next: NextFunction): void | Response {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.json(error.array()[0]);
  }

  return next();
};
