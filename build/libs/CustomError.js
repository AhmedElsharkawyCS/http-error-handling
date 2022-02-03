"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    constructor(error) {
        super(error.message);
        this.key = error.key;
        this.statusCode = error.statusCode;
        this.field = error.field;
    }
}
exports.default = CustomError;
//# sourceMappingURL=CustomError.js.map