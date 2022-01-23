import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class InternalServerError extends ResponseWithStatus
{
    constructor({
        res,
        message = "Internal Server Error",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(500);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
