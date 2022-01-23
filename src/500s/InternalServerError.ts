import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class InternalServerError extends ResponseWithStatus
{
    constructor({
        res,
        message = "Internal Server Error",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 500,
            message,
            data,
            error,
        });
    }
}
