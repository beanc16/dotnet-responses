import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class ServiceUnavailable extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 503,
        message: "Service Unavailable",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = ServiceUnavailable.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = ServiceUnavailable.defaultParams)
    {
        super({
            res,
            statusCode: ServiceUnavailable.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
