import { ErrorAttrs } from "../types";
export default class CustomError extends Error implements ErrorAttrs {
    statusCode: number;
    field?: string;
    key?: string;
    constructor(error: ErrorAttrs);
}
