"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
const AbstractError_1 = __importDefault(require("./AbstractError"));
const CustomError_1 = __importDefault(require("./CustomError"));
class ExpressHttpError extends AbstractError_1.default {
    initializer(req, res, next) {
        this.next = next;
        return next();
    }
    isInitialized() {
        if (!this.next)
            throw new Error("Cannot access HttpError functions till adding the initializer middleware");
    }
    BadRequest(msg) {
        const code = 400;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    Unauthorized(msg) {
        const code = 401;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    PaymentRequired(msg) {
        const code = 402;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    Forbidden(msg) {
        const code = 403;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    NotFound(msg) {
        const code = 404;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    MethodNotAllowed(msg) {
        const code = 405;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    NotAcceptable(msg) {
        const code = 406;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    ProxyAuthenticationRequired(msg) {
        const code = 407;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    RequestTimeout(msg) {
        const code = 408;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    Conflict(msg) {
        const code = 409;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    Gone(msg) {
        const code = 410;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    LengthRequired(msg) {
        const code = 411;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    PreconditionFailed(msg) {
        const code = 412;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    PayloadTooLarge(msg) {
        const code = 413;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    URITooLong(msg) {
        const code = 414;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    UnsupportedMediaType(msg) {
        const code = 415;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    RangeNotSatisfiable(msg) {
        const code = 416;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    ExpectationFailed(msg) {
        const code = 417;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    ImATeapot(msg) {
        const code = 418;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    MisdirectedRequest(msg) {
        const code = 421;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    UnprocessableEntity(msg) {
        const code = 422;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    Locked(msg) {
        const code = 424;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    FailedDependency(msg) {
        const code = 424;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    TooEarly(msg) {
        const code = 425;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    UpgradeRequired(msg) {
        const code = 426;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    PreconditionRequired(msg) {
        const code = 428;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    TooManyRequests(msg) {
        const code = 429;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    RequestHeaderFieldsTooLarge(msg) {
        const code = 431;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    UnavailableForLegalReasons(msg) {
        const code = 451;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    InternalServerError(msg) {
        const code = 500;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    NotImplemented(msg) {
        const code = 501;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    BadGateway(msg) {
        const code = 502;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    ServiceUnavailable(msg) {
        const code = 503;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    GatewayTimeout(msg) {
        const code = 504;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    HTTPVersionNotSupported(msg) {
        const code = 505;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    VariantAlsoNegotiates(msg) {
        const code = 506;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    InsufficientStorage(msg) {
        const code = 507;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    LoopDetected(msg) {
        const code = 508;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    BandwidthLimitExceeded(msg) {
        const code = 509;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    NotExtended(msg) {
        const code = 510;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    NetworkAuthenticationRequired(msg) {
        const code = 511;
        this.isInitialized();
        return this.next(this.crateError(code, msg));
    }
    customError(error) {
        this.isInitialized();
        return this.next(new CustomError_1.default(error));
    }
    handler(err, req, res, next) {
        //catch only owen errors
        if (err instanceof CustomError_1.default) {
            return res.status(err.statusCode).send({ error: err });
        }
        // continue and lef client to take his error
        return this.next(err);
    }
}
const HttpError = new ExpressHttpError();
exports.HttpError = HttpError;
//# sourceMappingURL=HttpError.js.map