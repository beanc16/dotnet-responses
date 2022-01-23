import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Forbidden extends ResponseWithStatus
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(403);
        message = message ?? "Forbidden";
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
