import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class ServiceUnavailable extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[500].ServiceUnavailable;

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
