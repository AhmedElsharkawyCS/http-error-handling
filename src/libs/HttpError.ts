import { NextFunction, Request, Response } from "express"
import HttpAbstractError from "./AbstractError"
import { ErrorAttrs, HttpErrorMethodsAttr } from "../types"

class ExpressHttpError extends HttpAbstractError {
  private next: NextFunction
  private res: Response

  initializer = (req: Request, res: Response, next: NextFunction) => {
    this.next = next
    this.res = res
    return next()
  }

  BadRequest = (attrs?: HttpErrorMethodsAttr) => {
    const code = 400
    return this.NextError(code, this.res, attrs)
  }
  Unauthorized = (attrs?: HttpErrorMethodsAttr) => {
    const code = 401
    return this.NextError(code, this.res, attrs)
  }
  PaymentRequired = (attrs?: HttpErrorMethodsAttr) => {
    const code = 402
    return this.NextError(code, this.res, attrs)
  }
  Forbidden = (attrs?: HttpErrorMethodsAttr) => {
    const code = 403
    return this.NextError(code, this.res, attrs)
  }
  NotFound = (attrs?: HttpErrorMethodsAttr) => {
    const code = 404
    return this.NextError(code, this.res, attrs)
  }
  MethodNotAllowed = (attrs?: HttpErrorMethodsAttr) => {
    const code = 405
    return this.NextError(code, this.res, attrs)
  }
  NotAcceptable = (attrs?: HttpErrorMethodsAttr) => {
    const code = 406
    return this.NextError(code, this.res, attrs)
  }
  ProxyAuthenticationRequired = (attrs?: HttpErrorMethodsAttr) => {
    const code = 407
    return this.NextError(code, this.res, attrs)
  }
  RequestTimeout = (attrs?: HttpErrorMethodsAttr) => {
    const code = 408
    return this.NextError(code, this.res, attrs)
  }
  Conflict = (attrs?: HttpErrorMethodsAttr) => {
    const code = 409
    return this.NextError(code, this.res, attrs)
  }
  Gone = (attrs?: HttpErrorMethodsAttr) => {
    const code = 410
    return this.NextError(code, this.res, attrs)
  }
  LengthRequired = (attrs?: HttpErrorMethodsAttr) => {
    const code = 411
    return this.NextError(code, this.res, attrs)
  }
  PreconditionFailed = (attrs?: HttpErrorMethodsAttr) => {
    const code = 412
    return this.NextError(code, this.res, attrs)
  }
  PayloadTooLarge = (attrs?: HttpErrorMethodsAttr) => {
    const code = 413
    return this.NextError(code, this.res, attrs)
  }
  URITooLong = (attrs?: HttpErrorMethodsAttr) => {
    const code = 414
    return this.NextError(code, this.res, attrs)
  }
  UnsupportedMediaType = (attrs?: HttpErrorMethodsAttr) => {
    const code = 415
    return this.NextError(code, this.res, attrs)
  }
  RangeNotSatisfiable = (attrs?: HttpErrorMethodsAttr) => {
    const code = 416
    return this.NextError(code, this.res, attrs)
  }
  ExpectationFailed = (attrs?: HttpErrorMethodsAttr) => {
    const code = 417
    return this.NextError(code, this.res, attrs)
  }
  ImATeapot = (attrs?: HttpErrorMethodsAttr) => {
    const code = 418
    return this.NextError(code, this.res, attrs)
  }
  MisdirectedRequest = (attrs?: HttpErrorMethodsAttr) => {
    const code = 421
    return this.NextError(code, this.res, attrs)
  }
  UnprocessableEntity = (attrs?: HttpErrorMethodsAttr) => {
    const code = 422
    return this.NextError(code, this.res, attrs)
  }
  Locked = (attrs?: HttpErrorMethodsAttr) => {
    const code = 424
    return this.NextError(code, this.res, attrs)
  }
  FailedDependency = (attrs?: HttpErrorMethodsAttr) => {
    const code = 424
    return this.NextError(code, this.res, attrs)
  }
  TooEarly = (attrs?: HttpErrorMethodsAttr) => {
    const code = 425
    return this.NextError(code, this.res, attrs)
  }
  UpgradeRequired = (attrs?: HttpErrorMethodsAttr) => {
    const code = 426
    return this.NextError(code, this.res, attrs)
  }
  PreconditionRequired = (attrs?: HttpErrorMethodsAttr) => {
    const code = 428
    return this.NextError(code, this.res, attrs)
  }
  TooManyRequests = (attrs?: HttpErrorMethodsAttr) => {
    const code = 429
    return this.NextError(code, this.res, attrs)
  }
  RequestHeaderFieldsTooLarge = (attrs?: HttpErrorMethodsAttr) => {
    const code = 431
    return this.NextError(code, this.res, attrs)
  }
  UnavailableForLegalReasons = (attrs?: HttpErrorMethodsAttr) => {
    const code = 451
    return this.NextError(code, this.res, attrs)
  }
  InternalServerError = (attrs?: HttpErrorMethodsAttr) => {
    const code = 500
    return this.NextError(code, this.res, attrs)
  }
  NotImplemented = (attrs?: HttpErrorMethodsAttr) => {
    const code = 501
    return this.NextError(code, this.res, attrs)
  }
  BadGateway = (attrs?: HttpErrorMethodsAttr) => {
    const code = 502
    return this.NextError(code, this.res, attrs)
  }
  ServiceUnavailable = (attrs?: HttpErrorMethodsAttr) => {
    const code = 503
    return this.NextError(code, this.res, attrs)
  }
  GatewayTimeout = (attrs?: HttpErrorMethodsAttr) => {
    const code = 504
    return this.NextError(code, this.res, attrs)
  }
  HTTPVersionNotSupported = (attrs?: HttpErrorMethodsAttr) => {
    const code = 505
    return this.NextError(code, this.res, attrs)
  }
  VariantAlsoNegotiates = (attrs?: HttpErrorMethodsAttr) => {
    const code = 506
    return this.NextError(code, this.res, attrs)
  }
  InsufficientStorage = (attrs?: HttpErrorMethodsAttr) => {
    const code = 507
    return this.NextError(code, this.res, attrs)
  }
  LoopDetected = (attrs?: HttpErrorMethodsAttr) => {
    const code = 508
    return this.NextError(code, this.res, attrs)
  }
  BandwidthLimitExceeded = (attrs?: HttpErrorMethodsAttr) => {
    const code = 509
    return this.NextError(code, this.res, attrs)
  }
  NotExtended = (attrs?: HttpErrorMethodsAttr) => {
    const code = 510
    return this.NextError(code, this.res, attrs)
  }
  NetworkAuthenticationRequired = (attrs?: HttpErrorMethodsAttr) => {
    const code = 511
    return this.NextError(code, this.res, attrs)
  }
  customError = (error: ErrorAttrs) => {
    const { message, statusCode, description, errorKey, help, invalidParams } = error
    return this.NextError(Number(statusCode), this.res, { message, description, errorKey, help, invalidParams })
  }
}

const HttpError = new ExpressHttpError()

export { HttpError }
