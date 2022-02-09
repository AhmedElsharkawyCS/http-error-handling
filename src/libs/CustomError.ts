import { ErrorAttrs } from "../types"

export default class CustomError extends Error implements ErrorAttrs {
  statusCode: number | string
  errorKey?: string
  description?: string
  invalidParams?: { message: string; location?: string; param: string }[]
  help?: string
  message: string

  constructor({ statusCode, invalidParams, message, description, errorKey, help }: ErrorAttrs) {
    super(message)
    this.description = description
    this.invalidParams = invalidParams
    this.help = help
    this.statusCode = statusCode
    this.errorKey = errorKey
    this.message
  }
}
