import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Forbidden extends ResponseWithStatus
{
    constructor({
        res,
        message = "Forbidden",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 403,
            message,
            data,
            error,
        });
    }
}
