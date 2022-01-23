import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class ServiceUnavailable extends ResponseWithStatus
{
    constructor({
        res,
        message = "Service Unavailable",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 503,
            message,
            data,
            error,
        });
    }
}
