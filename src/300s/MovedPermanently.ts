import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class MovedPermanently extends ResponseWithStatus
{
    constructor({
        res,
        message = "Moved Permanently",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 301,
            message,
            data,
            error,
        });
    }
}
