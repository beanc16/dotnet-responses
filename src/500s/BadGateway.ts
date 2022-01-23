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
        super({
            res,
            statusCode: 502,
            message,
            data,
            error,
        });
    }
}
