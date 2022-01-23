import { ResponseParamsWithNoStatus } from "../base";
import { UnprocessableEntity } from "./UnprocessableEntity";



export class ValidationError extends UnprocessableEntity
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            message: message ?? "Validation Error",
            data,
            error,
        });
    }
}