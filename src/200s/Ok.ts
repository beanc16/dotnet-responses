import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Ok extends ResponseWithStatus
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            statusCode: res.statusCode = 200,
            message,
            data,
            error,
        });
    }
}
