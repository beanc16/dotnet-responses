import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NetworkAuthenticationRequired extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 511,
        message: "Network Authentication Required",
        data: null,
        error: null,
    };

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
