import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Found extends ResponseWithStatus
{
    constructor({
        res,
        message = "Found",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 302,
            message,
            data,
            error,
        });
    }
}
