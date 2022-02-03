"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statuses_1 = __importDefault(require("statuses"));
const CustomError_1 = __importDefault(require("./CustomError"));
class HttpAbstractError {
    crateError(code, msg) {
        const message = msg || statuses_1.default.message[code];
        const key = statuses_1.default.message[code].toLowerCase().replace(/ /g, "_");
        const error = new CustomError_1.default({ message, statusCode: code, key });
        return error;
    }
}
exports.default = HttpAbstractError;
//# sourceMappingURL=AbstractError.js.map