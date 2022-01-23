import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NotImplemented extends ResponseWithStatus
{
    constructor({
        res,
        message = "Not Implemented",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 501,
            message,
            data,
            error,
        });
    }
}
