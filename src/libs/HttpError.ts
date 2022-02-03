import { NextFunction, Request, Response } from "express"
import HttpAbstractError from "./AbstractError"
import CustomError from "./CustomError"
import { ErrorAttrs } from "../types"

class ExpressHttpError extends HttpAbstractError {
  next: NextFunction

  public initializer(req: Request, res: Response, next: NextFunction) {
    this.next = next
    return next()
  }

  private isInitialized() {
    if (!this.next) throw new Error("Cannot access HttpError functions till adding the initializer middleware")
  }

  BadRequest(msg?: string) {
    const code = 400
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  Unauthorized(msg?: string) {
    const code = 401
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  PaymentRequired(msg?: string) {
    const code = 402
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  Forbidden(msg?: string) {
    const code = 403
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  NotFound(msg?: string) {
    const code = 404
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  MethodNotAllowed(msg?: string) {
    const code = 405
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  NotAcceptable(msg?: string) {
    const code = 406
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  ProxyAuthenticationRequired(msg?: string) {
    const code = 407
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  RequestTimeout(msg?: string) {
    const code = 408
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  Conflict(msg?: string) {
    const code = 409
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  Gone(msg?: string) {
    const code = 410
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  LengthRequired(msg?: string) {
    const code = 411
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  PreconditionFailed(msg?: string) {
    const code = 412
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  PayloadTooLarge(msg?: string) {
    const code = 413
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  URITooLong(msg?: string) {
    const code = 414
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  UnsupportedMediaType(msg?: string) {
    const code = 415
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  RangeNotSatisfiable(msg?: string) {
    const code = 416
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  ExpectationFailed(msg?: string) {
    const code = 417
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  ImATeapot(msg?: string) {
    const code = 418
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  MisdirectedRequest(msg?: string) {
    const code = 421
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  UnprocessableEntity(msg?: string) {
    const code = 422
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  Locked(msg?: string) {
    const code = 424
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  FailedDependency(msg?: string) {
    const code = 424
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  TooEarly(msg?: string) {
    const code = 425
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  UpgradeRequired(msg?: string) {
    const code = 426
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  PreconditionRequired(msg?: string) {
    const code = 428
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  TooManyRequests(msg?: string) {
    const code = 429
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  RequestHeaderFieldsTooLarge(msg?: string) {
    const code = 431
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  UnavailableForLegalReasons(msg?: string) {
    const code = 451
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  InternalServerError(msg?: string) {
    const code = 500
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  NotImplemented(msg?: string) {
    const code = 501
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  BadGateway(msg?: string) {
    const code = 502
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  ServiceUnavailable(msg?: string) {
    const code = 503
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  GatewayTimeout(msg?: string) {
    const code = 504
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  HTTPVersionNotSupported(msg?: string) {
    const code = 505
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  VariantAlsoNegotiates(msg?: string) {
    const code = 506
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  InsufficientStorage(msg?: string) {
    const code = 507
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  LoopDetected(msg?: string) {
    const code = 508
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  BandwidthLimitExceeded(msg?: string) {
    const code = 509
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  NotExtended(msg?: string) {
    const code = 510
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  NetworkAuthenticationRequired(msg?: string) {
    const code = 511
    this.isInitialized()
    return this.next(this.crateError(code, msg))
  }
  public customError(error: ErrorAttrs): void {
    this.isInitialized()
    return this.next(new CustomError(error))
  }
  public handler(err: CustomError, req: Request, res: Response, next: NextFunction) {
    //catch only owen errors
    if (err instanceof CustomError) {
      return res.status(err.statusCode).send({ error: err })
    }
    // continue and lef client to take his error
    return this.next(err)
  }
}
const HttpError = new ExpressHttpError()

export { HttpError }
