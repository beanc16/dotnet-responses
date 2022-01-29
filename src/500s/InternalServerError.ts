import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class InternalServerError extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[500].InternalServerError;

    constructor({
        res,
        message = InternalServerError.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = InternalServerError.defaultParams)
    {
        super({
            res,
            statusCode: InternalServerError.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
