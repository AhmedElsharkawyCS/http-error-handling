import statuses from "statuses"
import CustomError from "./CustomError"

export default abstract class HttpAbstractError {
  abstract BadRequest(msg?: string): void
  abstract Unauthorized(msg?: string): void
  abstract PaymentRequired(msg?: string): void
  abstract Forbidden(msg?: string): void
  abstract NotFound(msg?: string): void
  abstract MethodNotAllowed(msg?: string): void
  abstract NotAcceptable(msg?: string): void
  abstract ProxyAuthenticationRequired(msg?: string): void
  abstract RequestTimeout(msg?: string): void
  abstract Conflict(msg?: string): void
  abstract Gone(msg?: string): void
  abstract LengthRequired(msg?: string): void
  abstract PreconditionFailed(msg?: string): void
  abstract PayloadTooLarge(msg?: string): void
  abstract URITooLong(msg?: string): void
  abstract UnsupportedMediaType(msg?: string): void
  abstract RangeNotSatisfiable(msg?: string): void
  abstract ExpectationFailed(msg?: string): void
  abstract ImATeapot(msg?: string): void
  abstract MisdirectedRequest(msg?: string): void
  abstract UnprocessableEntity(msg?: string): void
  abstract Locked(msg?: string): void
  abstract FailedDependency(msg?: string): void
  abstract TooEarly(msg?: string): void
  abstract UpgradeRequired(msg?: string): void
  abstract PreconditionRequired(msg?: string): void
  abstract TooManyRequests(msg?: string): void
  abstract RequestHeaderFieldsTooLarge(msg?: string): void
  abstract UnavailableForLegalReasons(msg?: string): void
  abstract InternalServerError(msg?: string): void
  abstract NotImplemented(msg?: string): void
  abstract BadGateway(msg?: string): void
  abstract ServiceUnavailable(msg?: string): void
  abstract GatewayTimeout(msg?: string): void
  abstract HTTPVersionNotSupported(msg?: string): void
  abstract VariantAlsoNegotiates(msg?: string): void
  abstract InsufficientStorage(msg?: string): void
  abstract LoopDetected(msg?: string): void
  abstract BandwidthLimitExceeded(msg?: string): void
  abstract NotExtended(msg?: string): void
  abstract NetworkAuthenticationRequired(msg?: string): void

  protected crateError(code: number, msg?: string): CustomError {
    const message = msg || statuses.message[code]
    const localizationKey = statuses.message[code].toLowerCase().replace(/ /g, "_")
    const error = new CustomError({ statusCode: code, localizationKey, errors: [{ message }] })
    return error
  }
}
