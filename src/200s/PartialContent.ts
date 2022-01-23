import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class PartialContent extends ResponseWithStatus
{
    constructor({
        res,
        message = "Partial Content",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 206,
            message,
            data,
            error,
        });
    }
}
