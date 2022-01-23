import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Conflict extends ResponseWithStatus
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(409);
        message = message ?? "Conflict";
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
