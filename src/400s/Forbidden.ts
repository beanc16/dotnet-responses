import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Forbidden extends ResponseWithStatus
{
    constructor({
        res,
        message = "Forbidden",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(403);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
