import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class ProxyAuthenticationError extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].ProxyAuthenticationError;

    constructor({
        res,
        message = ProxyAuthenticationError.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = ProxyAuthenticationError.defaultParams)
    {
        super({
            res,
            statusCode: ProxyAuthenticationError.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
