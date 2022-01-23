import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class PermanentRedirect extends ResponseWithStatus
{
    constructor({
        res,
        message = "Permanent Redirect",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 308,
            message,
            data,
            error,
        });
    }
}
