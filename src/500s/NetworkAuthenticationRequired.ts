import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class NetworkAuthenticationRequired extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[500].NetworkAuthenticationRequired;

    constructor({
        res,
        message = NetworkAuthenticationRequired.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = NetworkAuthenticationRequired.defaultParams)
    {
        super({
            res,
            statusCode: NetworkAuthenticationRequired.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
