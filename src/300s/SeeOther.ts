import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class SeeOther extends ResponseWithStatus
{
    constructor({
        res,
        message = "See Other",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 303,
            message,
            data,
            error,
        });
    }
}
