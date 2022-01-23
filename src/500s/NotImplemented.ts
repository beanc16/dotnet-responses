import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NotImplemented extends ResponseWithStatus
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(501);
        message = message ?? "Internal Server Error";
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
