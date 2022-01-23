import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Unauthorized extends ResponseWithStatus
{
    constructor({
        res,
        message = "Unauthorized",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 401,
            message,
            data,
            error,
        });
    }
}
