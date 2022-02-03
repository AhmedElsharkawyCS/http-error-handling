export interface ErrorAttrs {
  statusCode: number
  message: string
  field?: string
  key?: string
}

export interface HttpErrorMethods {
  BadRequest: (msg?: string) => void
  Unauthorized: (msg?: string) => void
  PaymentRequired: (msg?: string) => void
  Forbidden: (msg?: string) => void
  NotFound: (msg?: string) => void
  MethodNotAllowed: (msg?: string) => void
  NotAcceptable: (msg?: string) => void
  ProxyAuthenticationRequired: (msg?: string) => void
  RequestTimeout: (msg?: string) => void
  Conflict: (msg?: string) => void
  Gone: (msg?: string) => void
  LengthRequired: (msg?: string) => void
  PreconditionFailed: (msg?: string) => void
  PayloadTooLarge: (msg?: string) => void
  URITooLong: (msg?: string) => void
  UnsupportedMediaType: (msg?: string) => void
  RangeNotSatisfiable: (msg?: string) => void
  ExpectationFailed: (msg?: string) => void
  ImATeapot: (msg?: string) => void
  MisdirectedRequest: (msg?: string) => void
  UnprocessableEntity: (msg?: string) => void
  Locked: (msg?: string) => void
  FailedDependency: (msg?: string) => void
  TooEarly: (msg?: string) => void
  UpgradeRequired: (msg?: string) => void
  PreconditionRequired: (msg?: string) => void
  TooManyRequests: (msg?: string) => void
  RequestHeaderFieldsTooLarge: (msg?: string) => void
  UnavailableForLegalReasons: (msg?: string) => void
  InternalServerError: (msg?: string) => void
  NotImplemented: (msg?: string) => void
  BadGateway: (msg?: string) => void
  ServiceUnavailable: (msg?: string) => void
  GatewayTimeout: (msg?: string) => void
  HTTPVersionNotSupported: (msg?: string) => void
  VariantAlsoNegotiates: (msg?: string) => void
  InsufficientStorage: (msg?: string) => void
  LoopDetected: (msg?: string) => void
  BandwidthLimitExceeded: (msg?: string) => void
  NotExtended: (msg?: string) => void
  NetworkAuthenticationRequired: (msg?: string) => void
}
