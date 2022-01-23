import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Conflict extends ResponseWithStatus
{
    constructor({
        res,
        message = "Conflict",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 409,
            message,
            data,
            error,
        });
    }
}
