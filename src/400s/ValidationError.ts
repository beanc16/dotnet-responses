import { ResponseParamsWithNoStatus } from "../base";
import { UnprocessableEntity } from "./UnprocessableEntity";



export class ValidationError extends UnprocessableEntity
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 422,
        message: "Validation Error",
        data: null,
        error: null,
    };


    constructor({
        res,
        message = ValidationError.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = ValidationError.defaultParams)
    {
        super({
            res,
            message,
            data,
            error,
        });
    }
}