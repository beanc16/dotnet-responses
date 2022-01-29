import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class RequestTimeout extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].RequestTimeout;

    constructor({
        res,
        message = RequestTimeout.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = RequestTimeout.defaultParams)
    {
        super({
            res,
            statusCode: RequestTimeout.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
