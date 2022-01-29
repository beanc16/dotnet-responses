import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class TooManyRequests extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].TooManyRequests;

    constructor({
        res,
        message = TooManyRequests.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = TooManyRequests.defaultParams)
    {
        super({
            res,
            statusCode: TooManyRequests.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
