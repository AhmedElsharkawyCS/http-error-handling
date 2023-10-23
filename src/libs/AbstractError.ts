import { Response } from "express"
import statuses from "statuses"
import { CreateErrorAttrs, HttpErrorMethodsAttr } from "../types"

export default abstract class HttpAbstractError {
  abstract BadRequest(attrs?: HttpErrorMethodsAttr): void
  abstract Unauthorized(attrs?: HttpErrorMethodsAttr): void
  abstract PaymentRequired(attrs?: HttpErrorMethodsAttr): void
  abstract Forbidden(attrs?: HttpErrorMethodsAttr): void
  abstract NotFound(attrs?: HttpErrorMethodsAttr): void
  abstract MethodNotAllowed(attrs?: HttpErrorMethodsAttr): void
  abstract NotAcceptable(attrs?: HttpErrorMethodsAttr): void
  abstract ProxyAuthenticationRequired(attrs?: HttpErrorMethodsAttr): void
  abstract RequestTimeout(attrs?: HttpErrorMethodsAttr): void
  abstract Conflict(attrs?: HttpErrorMethodsAttr): void
  abstract Gone(attrs?: HttpErrorMethodsAttr): void
  abstract LengthRequired(attrs?: HttpErrorMethodsAttr): void
  abstract PreconditionFailed(attrs?: HttpErrorMethodsAttr): void
  abstract PayloadTooLarge(attrs?: HttpErrorMethodsAttr): void
  abstract URITooLong(attrs?: HttpErrorMethodsAttr): void
  abstract UnsupportedMediaType(attrs?: HttpErrorMethodsAttr): void
  abstract RangeNotSatisfiable(attrs?: HttpErrorMethodsAttr): void
  abstract ExpectationFailed(attrs?: HttpErrorMethodsAttr): void
  abstract ImATeapot(attrs?: HttpErrorMethodsAttr): void
  abstract MisdirectedRequest(attrs?: HttpErrorMethodsAttr): void
  abstract UnprocessableEntity(attrs?: HttpErrorMethodsAttr): void
  abstract Locked(attrs?: HttpErrorMethodsAttr): void
  abstract FailedDependency(attrs?: HttpErrorMethodsAttr): void
  abstract TooEarly(attrs?: HttpErrorMethodsAttr): void
  abstract UpgradeRequired(attrs?: HttpErrorMethodsAttr): void
  abstract PreconditionRequired(attrs?: HttpErrorMethodsAttr): void
  abstract TooManyRequests(attrs?: HttpErrorMethodsAttr): void
  abstract RequestHeaderFieldsTooLarge(attrs?: HttpErrorMethodsAttr): void
  abstract UnavailableForLegalReasons(attrs?: HttpErrorMethodsAttr): void
  abstract InternalServerError(attrs?: HttpErrorMethodsAttr): void
  abstract NotImplemented(attrs?: HttpErrorMethodsAttr): void
  abstract BadGateway(attrs?: HttpErrorMethodsAttr): void
  abstract ServiceUnavailable(attrs?: HttpErrorMethodsAttr): void
  abstract GatewayTimeout(attrs?: HttpErrorMethodsAttr): void
  abstract HTTPVersionNotSupported(attrs?: HttpErrorMethodsAttr): void
  abstract VariantAlsoNegotiates(attrs?: HttpErrorMethodsAttr): void
  abstract InsufficientStorage(attrs?: HttpErrorMethodsAttr): void
  abstract LoopDetected(attrs?: HttpErrorMethodsAttr): void
  abstract BandwidthLimitExceeded(attrs?: HttpErrorMethodsAttr): void
  abstract NotExtended(attrs?: HttpErrorMethodsAttr): void
  abstract NetworkAuthenticationRequired(attrs?: HttpErrorMethodsAttr): void

  protected crateResponse({ code, additionalProps, message }: CreateErrorAttrs) {
    const msg = message || statuses.message[code]
    const key = statuses.message[code].toLowerCase().replace(/ /g, "_")
    const error = { message: msg, statusCode: code, errorKey: key, ...additionalProps }
    return { error }
  }
  protected NextError(code: number, res: Response, attrs?: HttpErrorMethodsAttr) {
    if (!res) throw new Error("Cannot access HttpError functions till adding the initializer middleware")
    const { message, ...additionalProps } = attrs || {}
    return res.status(code).json(this.crateResponse({ code, message, additionalProps }))
  }
}
