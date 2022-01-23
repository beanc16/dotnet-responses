import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class GatewayTimeout extends ResponseWithStatus
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(504);
        message = message ?? "Gateway Timeout";
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
