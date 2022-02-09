import statuses from "statuses"
import { NextFunction, Request, Response } from "express"
import { validationResult } from "express-validator"
import CustomError from "./CustomError"

export const RequestValidator = (req: Request, res: Response, next: NextFunction) => {
  const code = 400
  const msg = statuses.message[code].toLowerCase()
  const key = msg.replace(/ /g, "_")
  const customError = {
    statusCode: code,
    invalidParams: [],
    message: msg,
    errorKey: key,
  }
  const errorFormatter = ({ location, msg, param }) => {
    return {
      message: msg,
      param,
      location,
    }
  }
  const result = validationResult(req).formatWith(errorFormatter as any)
  if (!result.isEmpty()) {
    customError.invalidParams = result.array()
    const error = new CustomError(customError)
    return res.status(code).send({ error })
  }
  return next()
}
