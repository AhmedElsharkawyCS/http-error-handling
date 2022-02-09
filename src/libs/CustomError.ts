import { ErrorsAttrs } from "../types"

export default class CustomError extends Error implements ErrorsAttrs {
  statusCode: number
  localizationKey?: string
  errors: { message: string; description?: string; param?: string }[]
  constructor({ errors, statusCode, localizationKey }: ErrorsAttrs) {
    super("")
    this.localizationKey = localizationKey
    this.statusCode = statusCode
    this.errors = errors
  }
}
