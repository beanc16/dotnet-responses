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
        res.status(503);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
