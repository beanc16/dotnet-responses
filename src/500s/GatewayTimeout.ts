import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class GatewayTimeout extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[500].GatewayTimeout;

    constructor({
        res,
        message = GatewayTimeout.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = GatewayTimeout.defaultParams)
    {
        super({
            res,
            statusCode: GatewayTimeout.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
