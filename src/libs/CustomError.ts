import { ErrorAttrs } from "../types"

export default class CustomError extends Error implements ErrorAttrs {
  statusCode: number
  field?: string
  key?: string
  constructor(error: ErrorAttrs) {
    super(error.message)
    this.key = error.key
    this.statusCode = error.statusCode
    this.field = error.field
  }
}
