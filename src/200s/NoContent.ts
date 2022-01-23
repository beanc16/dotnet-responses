import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NoContent extends ResponseWithStatus
{
    constructor({
        res,
        message = "No Content",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 204,
            message,
            data,
            error,
        });
    }
}
