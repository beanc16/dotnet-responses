import { ResponseParamsWithNoStatus } from "../base";
import { UnprocessableEntity } from "./UnprocessableEntity";



export class ValidationError extends UnprocessableEntity
{
    constructor({
        res,
        message = "Validation Error",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            message,
            data,
            error,
        });
    }
}