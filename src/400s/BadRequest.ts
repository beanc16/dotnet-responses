import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class BadRequest extends ResponseWithStatus
{
    constructor({
        res,
        message = "Bad Request",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 400,
            message,
            data,
            error,
        });
    }
}
