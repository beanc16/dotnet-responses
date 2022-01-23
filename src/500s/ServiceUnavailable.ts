import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class ServiceUnavailable extends ResponseWithStatus
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(503);
        message = message ?? "Service Unavailable";
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
