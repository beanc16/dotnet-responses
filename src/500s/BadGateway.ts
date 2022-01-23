import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class BadGateway extends ResponseWithStatus
{
    constructor({
        res,
        message = "Bad Gateway",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(502);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
