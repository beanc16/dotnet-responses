import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NotModified extends ResponseWithStatus
{
    constructor({
        res,
        message = "Not Modified",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 304,
            message,
            data,
            error,
        });
    }
}
