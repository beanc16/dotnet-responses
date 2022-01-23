import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class BadRequest extends ResponseWithStatus
{
    constructor({
        res,
        message = "Bad Request",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(400);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
