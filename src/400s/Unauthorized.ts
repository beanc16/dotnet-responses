import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Unauthorized extends ResponseWithStatus
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(401);
        message = message ?? "Unauthorized";
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
