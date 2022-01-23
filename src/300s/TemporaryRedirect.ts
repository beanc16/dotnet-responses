import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class TemporaryRedirect extends ResponseWithStatus
{
    constructor({
        res,
        message = "Temporary Redirect",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 307,
            message,
            data,
            error,
        });
    }
}
