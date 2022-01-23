import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NotExtended extends ResponseWithStatus
{
    constructor({
        res,
        message = "Not Extended",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 510,
            message,
            data,
            error,
        });
    }
}
