import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NotExtended extends ResponseWithStatus
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(510);
        message = message ?? "Not Extended";
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
