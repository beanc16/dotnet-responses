import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Unauthorized extends ResponseWithStatus
{
    constructor({
        res,
        message = "Unauthorized",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(401);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
