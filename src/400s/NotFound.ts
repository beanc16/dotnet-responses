import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NotFound extends ResponseWithStatus
{
    constructor({
        res,
        message = "Not Found",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 404,
            message,
            data,
            error,
        });
    }
}
