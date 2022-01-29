import { ResponseParamsWithNoStatus, defaultParams } from "../base";
import { UnprocessableEntity } from "./UnprocessableEntity";



export class ValidationError extends UnprocessableEntity
{
    protected static override defaultParams = defaultParams[400].ValidationError;


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