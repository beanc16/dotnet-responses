import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Conflict extends ResponseWithStatus
{
    constructor({
        res,
        message = "Conflict",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(409);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
