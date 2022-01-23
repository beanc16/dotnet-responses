import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class InternalServerError extends ResponseWithStatus
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(400);
        message = message ?? "Internal Server Error";
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
