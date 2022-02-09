import statuses from "statuses"
import { NextFunction, Request, Response } from "express"
import { validationResult } from "express-validator"
import CustomError from "./CustomError"
export const RequestValidator = (req: Request, res: Response, next: NextFunction) => {
  const code = 400
  const key = statuses.message[code].toLowerCase().replace(/ /g, "_")
  const customError = {
    errors: [],
    statusCode: code,
    localizationKey: key,
  }
  const errorFormatter = ({ msg, param }) => {
    return {
      message: msg,
      param,
    }
  }
  const result = validationResult(req).formatWith(errorFormatter)
  if (!result.isEmpty()) {
    customError.errors = result.array()
    return res.status(code).send(new CustomError(customError))
  }
  return next()
}
