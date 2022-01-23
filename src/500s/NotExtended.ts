import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NotExtended extends ResponseWithStatus
{
    constructor({
        res,
        message = "Not Extended",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(510);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
