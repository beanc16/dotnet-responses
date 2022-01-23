import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Accepted extends ResponseWithStatus
{
    constructor({
        res,
        message = "Accepted",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 202,
            message,
            data,
            error,
        });
    }
}
