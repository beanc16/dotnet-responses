import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class ResetContent extends ResponseWithStatus
{
    constructor({
        res,
        message = "Reset Content",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 205,
            message,
            data,
            error,
        });
    }
}
