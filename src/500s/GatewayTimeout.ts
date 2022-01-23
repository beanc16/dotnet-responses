import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class GatewayTimeout extends ResponseWithStatus
{
    constructor({
        res,
        message = "Gateway Timeout",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(504);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
