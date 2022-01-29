import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class NetworkReadTimeoutError extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[500].NetworkReadTimeoutError;

    constructor({
        res,
        message = NetworkReadTimeoutError.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = NetworkReadTimeoutError.defaultParams)
    {
        super({
            res,
            statusCode: NetworkReadTimeoutError.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
