import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class GatewayTimeout extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 504,
        message: "Gateway Timeout",
        data: null,
        error: null,
    };

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
