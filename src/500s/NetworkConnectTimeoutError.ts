import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class NetworkConnectTimeoutError extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[500].NetworkConnectTimeoutError;

    constructor({
        res,
        message = NetworkConnectTimeoutError.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = NetworkConnectTimeoutError.defaultParams)
    {
        super({
            res,
            statusCode: NetworkConnectTimeoutError.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
