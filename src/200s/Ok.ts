import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Ok extends ResponseWithStatus
{
    constructor({
        res,
        message = "Ok",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 200,
            message,
            data,
            error,
        });
    }
}
