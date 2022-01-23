import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class BadGateway extends ResponseWithStatus
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(502);
        message = message ?? "Bad Gateway";
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
