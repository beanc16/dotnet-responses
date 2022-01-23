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
        super({
            res,
            statusCode: 504,
            message,
            data,
            error,
        });
    }
}
