import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class RetryWith extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].RetryWith;

    constructor({
        res,
        message = RetryWith.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = RetryWith.defaultParams)
    {
        super({
            res,
            statusCode: RetryWith.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
