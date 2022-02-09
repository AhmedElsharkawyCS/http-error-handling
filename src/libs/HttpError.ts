import { NextFunction, Request, Response } from "express"
import HttpAbstractError from "./AbstractError"
import CustomError from "./CustomError"
import { ErrorAttrs, HttpErrorMethodsAttr } from "../types"

class ExpressHttpError extends HttpAbstractError {
  private next: NextFunction

  initializer = (req: Request, res: Response, next: NextFunction) => {
    this.next = next
    return next()
  }

  BadRequest = (attrs?: HttpErrorMethodsAttr) => {
    const code = 400
    return this.NextError(code, this.next, attrs)
  }
  Unauthorized = (attrs?: HttpErrorMethodsAttr) => {
    const code = 401
    return this.NextError(code, this.next, attrs)
  }
  PaymentRequired = (attrs?: HttpErrorMethodsAttr) => {
    const code = 402
    return this.NextError(code, this.next, attrs)
  }
  Forbidden = (attrs?: HttpErrorMethodsAttr) => {
    const code = 403
    return this.NextError(code, this.next, attrs)
  }
  NotFound = (attrs?: HttpErrorMethodsAttr) => {
    const code = 404
    return this.NextError(code, this.next, attrs)
  }
  MethodNotAllowed = (attrs?: HttpErrorMethodsAttr) => {
    const code = 405
    return this.NextError(code, this.next, attrs)
  }
  NotAcceptable = (attrs?: HttpErrorMethodsAttr) => {
    const code = 406
    return this.NextError(code, this.next, attrs)
  }
  ProxyAuthenticationRequired = (attrs?: HttpErrorMethodsAttr) => {
    const code = 407
    return this.NextError(code, this.next, attrs)
  }
  RequestTimeout = (attrs?: HttpErrorMethodsAttr) => {
    const code = 408
    return this.NextError(code, this.next, attrs)
  }
  Conflict = (attrs?: HttpErrorMethodsAttr) => {
    const code = 409
    return this.NextError(code, this.next, attrs)
  }
  Gone = (attrs?: HttpErrorMethodsAttr) => {
    const code = 410
    return this.NextError(code, this.next, attrs)
  }
  LengthRequired = (attrs?: HttpErrorMethodsAttr) => {
    const code = 411
    return this.NextError(code, this.next, attrs)
  }
  PreconditionFailed = (attrs?: HttpErrorMethodsAttr) => {
    const code = 412
    return this.NextError(code, this.next, attrs)
  }
  PayloadTooLarge = (attrs?: HttpErrorMethodsAttr) => {
    const code = 413
    return this.NextError(code, this.next, attrs)
  }
  URITooLong = (attrs?: HttpErrorMethodsAttr) => {
    const code = 414
    return this.NextError(code, this.next, attrs)
  }
  UnsupportedMediaType = (attrs?: HttpErrorMethodsAttr) => {
    const code = 415
    return this.NextError(code, this.next, attrs)
  }
  RangeNotSatisfiable = (attrs?: HttpErrorMethodsAttr) => {
    const code = 416
    return this.NextError(code, this.next, attrs)
  }
  ExpectationFailed = (attrs?: HttpErrorMethodsAttr) => {
    const code = 417
    return this.NextError(code, this.next, attrs)
  }
  ImATeapot = (attrs?: HttpErrorMethodsAttr) => {
    const code = 418
    return this.NextError(code, this.next, attrs)
  }
  MisdirectedRequest = (attrs?: HttpErrorMethodsAttr) => {
    const code = 421
    return this.NextError(code, this.next, attrs)
  }
  UnprocessableEntity = (attrs?: HttpErrorMethodsAttr) => {
    const code = 422
    return this.NextError(code, this.next, attrs)
  }
  Locked = (attrs?: HttpErrorMethodsAttr) => {
    const code = 424
    return this.NextError(code, this.next, attrs)
  }
  FailedDependency = (attrs?: HttpErrorMethodsAttr) => {
    const code = 424
    return this.NextError(code, this.next, attrs)
  }
  TooEarly = (attrs?: HttpErrorMethodsAttr) => {
    const code = 425
    return this.NextError(code, this.next, attrs)
  }
  UpgradeRequired = (attrs?: HttpErrorMethodsAttr) => {
    const code = 426
    return this.NextError(code, this.next, attrs)
  }
  PreconditionRequired = (attrs?: HttpErrorMethodsAttr) => {
    const code = 428
    return this.NextError(code, this.next, attrs)
  }
  TooManyRequests = (attrs?: HttpErrorMethodsAttr) => {
    const code = 429
    return this.NextError(code, this.next, attrs)
  }
  RequestHeaderFieldsTooLarge = (attrs?: HttpErrorMethodsAttr) => {
    const code = 431
    return this.NextError(code, this.next, attrs)
  }
  UnavailableForLegalReasons = (attrs?: HttpErrorMethodsAttr) => {
    const code = 451
    return this.NextError(code, this.next, attrs)
  }
  InternalServerError = (attrs?: HttpErrorMethodsAttr) => {
    const code = 500
    return this.NextError(code, this.next, attrs)
  }
  NotImplemented = (attrs?: HttpErrorMethodsAttr) => {
    const code = 501
    return this.NextError(code, this.next, attrs)
  }
  BadGateway = (attrs?: HttpErrorMethodsAttr) => {
    const code = 502
    return this.NextError(code, this.next, attrs)
  }
  ServiceUnavailable = (attrs?: HttpErrorMethodsAttr) => {
    const code = 503
    return this.NextError(code, this.next, attrs)
  }
  GatewayTimeout = (attrs?: HttpErrorMethodsAttr) => {
    const code = 504
    return this.NextError(code, this.next, attrs)
  }
  HTTPVersionNotSupported = (attrs?: HttpErrorMethodsAttr) => {
    const code = 505
    return this.NextError(code, this.next, attrs)
  }
  VariantAlsoNegotiates = (attrs?: HttpErrorMethodsAttr) => {
    const code = 506
    return this.NextError(code, this.next, attrs)
  }
  InsufficientStorage = (attrs?: HttpErrorMethodsAttr) => {
    const code = 507
    return this.NextError(code, this.next, attrs)
  }
  LoopDetected = (attrs?: HttpErrorMethodsAttr) => {
    const code = 508
    return this.NextError(code, this.next, attrs)
  }
  BandwidthLimitExceeded = (attrs?: HttpErrorMethodsAttr) => {
    const code = 509
    return this.NextError(code, this.next, attrs)
  }
  NotExtended = (attrs?: HttpErrorMethodsAttr) => {
    const code = 510
    return this.NextError(code, this.next, attrs)
  }
  NetworkAuthenticationRequired = (attrs?: HttpErrorMethodsAttr) => {
    const code = 511
    return this.NextError(code, this.next, attrs)
  }
  customError = (error: ErrorAttrs) => {
    const { message, statusCode, description, errorKey, help, invalidParams } = error
    return this.NextError(Number(statusCode), this.next, { message, description, errorKey, help, invalidParams })
  }
  handler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    //catch only lib's errors
    if (err instanceof CustomError) {
      return res.status(Number(err.statusCode)).send({ error: err })
    }
    // continue and to next middleware and passing the error
    return this.next(err)
  }
}

const HttpError = new ExpressHttpError()

export { HttpError }
