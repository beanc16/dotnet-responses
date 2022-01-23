import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class UseProxy extends ResponseWithStatus
{
    constructor({
        res,
        message = "Use Proxy",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 305,
            message,
            data,
            error,
        });
    }
}
