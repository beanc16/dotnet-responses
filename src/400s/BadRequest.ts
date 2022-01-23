import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class BadRequest extends ResponseWithStatus
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(400);
        message = message ?? "Bad Request";
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
