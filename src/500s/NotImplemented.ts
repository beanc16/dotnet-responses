import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NotImplemented extends ResponseWithStatus
{
    constructor({
        res,
        message = "Not Implemented",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(501);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
