import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Accepted extends ResponseWithStatus
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(202);
        
        super({
            res,
            message: message ?? "Accepted",
            data,
            error,
        });
    }
}
