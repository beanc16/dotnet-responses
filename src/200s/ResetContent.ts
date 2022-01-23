import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class ResetContent extends ResponseWithStatus
{
    constructor({
        res,
        message = "Reset Content",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(205);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
